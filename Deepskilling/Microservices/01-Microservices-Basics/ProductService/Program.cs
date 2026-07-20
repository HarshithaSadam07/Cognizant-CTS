var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Each microservice runs as an independent process with its own port -
// this one listens on 5001, completely decoupled from OrderService.
builder.WebHost.UseUrls("http://localhost:5001");

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();
app.MapControllers();

app.Run();
