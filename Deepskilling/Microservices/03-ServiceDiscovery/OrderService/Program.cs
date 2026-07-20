using OrderService.Discovery;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddHttpClient();

// HttpClient used exclusively for talking to the registry, pointed at its fixed, well-known address.
builder.Services.AddHttpClient<DiscoveryClient>(client =>
{
    client.BaseAddress = new Uri("http://localhost:5000");
});

builder.WebHost.UseUrls("http://localhost:5002");

var app = builder.Build();
app.MapControllers();
app.Run();
