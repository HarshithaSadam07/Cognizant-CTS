using Microsoft.AspNetCore.Mvc;
using ProductService.Models;

namespace ProductService.Controllers
{
    // This microservice owns the "Product" bounded context exclusively.
    // No other service is allowed to touch product data directly - only through this API.
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private static readonly List<Product> Products = new()
        {
            new Product { Id = 1, Name = "Wireless Mouse", Price = 799, StockQuantity = 50 },
            new Product { Id = 2, Name = "Mechanical Keyboard", Price = 3499, StockQuantity = 20 }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetAll() => Ok(Products);

        [HttpGet("{id}")]
        public ActionResult<Product> GetById(int id)
        {
            var product = Products.FirstOrDefault(p => p.Id == id);
            return product is null ? NotFound() : Ok(product);
        }
    }
}
