using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ProductService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        // Any request here must carry a valid JWT that was issued by AuthService.
        // ProductService never talks to AuthService directly for this - it only needs
        // the same signing key (shared via configuration/secret store) to validate tokens locally.
        [Authorize]
        [HttpGet]
        public IActionResult GetAll()
        {
            var username = User.Identity?.Name;
            return Ok(new[]
            {
                new { Id = 1, Name = "Wireless Mouse", Price = 799 }
            }.Select(p => new { p.Id, p.Name, p.Price, RequestedBy = username }));
        }

        // Only tokens carrying the "Admin" role (set by AuthService at login) can reach this.
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult Create([FromBody] object product)
        {
            return Ok(new { message = "Product created (Admin-only action).", product });
        }
    }
}
