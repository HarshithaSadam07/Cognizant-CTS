using Microsoft.AspNetCore.Mvc;
using OrderService.Discovery;

namespace OrderService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly DiscoveryClient _discoveryClient;
        private readonly IHttpClientFactory _httpClientFactory;

        public OrdersController(DiscoveryClient discoveryClient, IHttpClientFactory httpClientFactory)
        {
            _discoveryClient = discoveryClient;
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet("check-product/{productId}")]
        public async Task<IActionResult> CheckProduct(int productId)
        {
            // Step 1: ask the registry "where is ProductService right now?"
            var productServiceUrl = await _discoveryClient.ResolveServiceUrlAsync("ProductService");
            if (productServiceUrl is null)
            {
                return StatusCode(503, "ProductService is not currently registered/available.");
            }

            // Step 2: call the resolved address directly.
            var client = _httpClientFactory.CreateClient();
            var response = await client.GetAsync($"{productServiceUrl}/api/products/{productId}");

            if (!response.IsSuccessStatusCode)
            {
                return NotFound($"Product {productId} not found via {productServiceUrl}");
            }

            var content = await response.Content.ReadAsStringAsync();
            return Content(content, "application/json");
        }
    }
}
