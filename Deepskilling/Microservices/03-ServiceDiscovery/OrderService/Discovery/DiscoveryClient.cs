namespace OrderService.Discovery
{
    public class ServiceInstanceInfo
    {
        public string ServiceName { get; set; } = string.Empty;
        public string BaseUrl { get; set; } = string.Empty;
    }

    // Instead of hardcoding "http://localhost:5001" for ProductService, OrderService
    // asks the registry at call time. This is the client-side half of the discovery pattern.
    public class DiscoveryClient
    {
        private readonly HttpClient _httpClient;

        public DiscoveryClient(HttpClient httpClient)
        {
            _httpClient = httpClient; // BaseAddress set to the registry's URL in Program.cs
        }

        public async Task<string?> ResolveServiceUrlAsync(string serviceName)
        {
            var response = await _httpClient.GetAsync($"/api/registry/discover/{serviceName}");
            if (!response.IsSuccessStatusCode) return null;

            var instance = await response.Content.ReadFromJsonAsync<ServiceInstanceInfo>();
            return instance?.BaseUrl;
        }
    }
}
