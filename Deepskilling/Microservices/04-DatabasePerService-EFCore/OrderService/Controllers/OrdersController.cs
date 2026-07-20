using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrderService.Data;
using OrderService.Models;

namespace OrderService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly OrderDbContext _context;

        public OrdersController(OrderDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetAll() =>
            Ok(await _context.Orders.AsNoTracking().ToListAsync());

        // In this pattern, ProductName/Price are already snapshotted onto the Order
        // at creation time (typically by whichever service calls both APIs, e.g. an API Gateway
        // or the OrderService itself calling ProductService first) - so no cross-database
        // join is ever needed to read an order back.
        [HttpPost]
        public async Task<ActionResult<Order>> Create([FromBody] Order order)
        {
            order.OrderDateUtc = DateTime.UtcNow;
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAll), order);
        }
    }
}
