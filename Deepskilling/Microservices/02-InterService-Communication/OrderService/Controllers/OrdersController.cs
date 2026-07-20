using Microsoft.AspNetCore.Mvc;
using OrderService.Clients;
using OrderService.Models;

namespace OrderService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly ProductServiceClient _productServiceClient;
        private static readonly List<Order> Orders = new();

        public OrdersController(ProductServiceClient productServiceClient)
        {
            _productServiceClient = productServiceClient;
        }

        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder([FromBody] CreateOrderRequest request)
        {
            // Synchronous inter-service call: OrderService needs ProductService's data
            // right now to validate stock and price before confirming the order.
            var product = await _productServiceClient.GetProductAsync(request.ProductId);

            if (product is null)
            {
                return NotFound($"Product {request.ProductId} not found in ProductService.");
            }

            if (!product.InStock)
            {
                return BadRequest($"Product '{product.Name}' is out of stock.");
            }

            var order = new Order
            {
                Id = Orders.Count + 1,
                ProductId = product.Id,
                ProductName = product.Name,
                Quantity = request.Quantity,
                TotalPrice = product.Price * request.Quantity
            };

            Orders.Add(order);
            return CreatedAtAction(nameof(GetAll), order);
        }

        [HttpGet]
        public ActionResult<IEnumerable<Order>> GetAll() => Ok(Orders);
    }
}
