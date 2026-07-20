using OrderService.DTOs;

namespace OrderService.Clients
{
    // A "typed client" - the recommended pattern in ASP.NET Core for calling
    // another microservice over plain HTTP (as opposed to gRPC or a message broker).
    public class ProductServiceClient
    {
        private readonly HttpClient _httpClient;

        public ProductServiceClient(HttpClient httpClient)
        {
            _httpClient = httpClient; // BaseAddress + resilience policies are configured in Program.cs
        }

        public async Task<ProductDto?> GetProductAsync(int productId)
        {
            var response = await _httpClient.GetAsync($"/api/products/{productId}");

            if (!response.IsSuccessStatusCode)
            {
                return null; // caller decides how to handle "product service unreachable / not found"
            }

            return await response.Content.ReadFromJsonAsync<ProductDto>();
        }
    }
}
