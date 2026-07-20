using Microsoft.AspNetCore.Mvc;
using ProductService.Models;

namespace ProductService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private static readonly List<Product> Products = new()
        {
            new Product { Id = 1, Name = "Wireless Mouse", Price = 799, InStock = true },
            new Product { Id = 2, Name = "Mechanical Keyboard", Price = 3499, InStock = false }
        };

        // OrderService calls this endpoint over HTTP before confirming an order.
        [HttpGet("{id}")]
        public ActionResult<Product> GetById(int id)
        {
            var product = Products.FirstOrDefault(p => p.Id == id);
            return product is null ? NotFound() : Ok(product);
        }
    }
}
