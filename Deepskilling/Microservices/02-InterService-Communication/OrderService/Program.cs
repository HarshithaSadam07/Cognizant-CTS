using OrderService.Clients;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Registers ProductServiceClient with a pre-configured HttpClient pointing at ProductService.
// AddHttpClient also gives us pooled connections + easy integration with Polly for retries.
builder.Services.AddHttpClient<ProductServiceClient>(client =>
{
    client.BaseAddress = new Uri(builder.Configuration["Services:ProductService"]!);
    client.Timeout = TimeSpan.FromSeconds(10);
});

builder.WebHost.UseUrls("http://localhost:5002");

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();
app.MapControllers();

app.Run();
