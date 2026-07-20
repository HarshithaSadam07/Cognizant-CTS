var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Runs independently of ProductService, on a different port -
// each service can be deployed, scaled, and restarted without affecting the other.
builder.WebHost.UseUrls("http://localhost:5002");

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();
app.MapControllers();

app.Run();
