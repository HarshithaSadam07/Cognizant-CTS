var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddHttpClient();
builder.WebHost.UseUrls("http://localhost:5001");

var app = builder.Build();
app.MapControllers();

// Self-registration: on startup, this instance tells the registry where it lives.
using (var scope = app.Services.CreateScope())
{
    var httpClientFactory = scope.ServiceProvider.GetRequiredService<IHttpClientFactory>();
    var client = httpClientFactory.CreateClient();

    try
    {
        await client.PostAsJsonAsync("http://localhost:5000/api/registry/register", new
        {
            ServiceName = "ProductService",
            BaseUrl = "http://localhost:5001"
        });
    }
    catch
    {
        // In a real system, retry with backoff, or don't fail startup if the registry is briefly unavailable.
        Console.WriteLine("Warning: could not reach ServiceRegistry at startup.");
    }
}

app.Run();
