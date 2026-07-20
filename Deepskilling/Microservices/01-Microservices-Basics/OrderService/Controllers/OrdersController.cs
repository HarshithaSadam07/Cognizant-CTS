using Microsoft.AspNetCore.Mvc;
using OrderService.Models;

namespace OrderService.Controllers
{
    // Owns the "Order" bounded context. It only stores ProductId as a reference,
    // it never reaches into ProductService's database directly - that would
    // break the "independently deployable, independently scalable" principle.
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private static readonly List<Order> Orders = new()
        {
            new Order { Id = 1, ProductId = 1, Quantity = 2 }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Order>> GetAll() => Ok(Orders);

        [HttpPost]
        public ActionResult<Order> Create([FromBody] Order order)
        {
            order.Id = Orders.Count + 1;
            Orders.Add(order);
            return CreatedAtAction(nameof(GetAll), order);
        }
    }
}
