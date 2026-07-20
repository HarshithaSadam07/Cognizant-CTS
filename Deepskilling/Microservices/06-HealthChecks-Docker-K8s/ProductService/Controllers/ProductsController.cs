using Microsoft.AspNetCore.Mvc;

namespace ProductService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private static int _requestCount = 0;
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(ILogger<ProductsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            Interlocked.Increment(ref _requestCount);
            _logger.LogInformation("GET /api/products called. Total requests so far: {Count}", _requestCount);

            return Ok(new[]
            {
                new { Id = 1, Name = "Wireless Mouse", Price = 799 }
            });
        }

        // A simple hand-rolled metrics endpoint. In production this would typically
        // be exposed via Prometheus (using the prometheus-net package) and scraped
        // automatically, but a basic counter illustrates the same monitoring concept.
        [HttpGet("/metrics")]
        public IActionResult GetMetrics() => Ok(new { totalRequests = _requestCount });
    }
}
