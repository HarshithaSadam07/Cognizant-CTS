using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using ProductService.HealthChecks;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

// Structured logging - essential in microservices where logs from many services
// need to be aggregated centrally (e.g. shipped to ELK/Seq/Azure Monitor) and correlated.
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()
    .Enrich.WithProperty("Service", "ProductService")
    .WriteTo.Console()
    .CreateLogger();

builder.Host.UseSerilog();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Health checks power two separate Kubernetes probes:
// - "live" tells K8s whether to restart the container
// - "ready" tells K8s whether to route traffic to it
builder.Services.AddHealthChecks()
    .AddCheck<DownstreamDependencyHealthCheck>("downstream-dependency", tags: new[] { "ready" });

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();
app.UseSerilogRequestLogging();

// Liveness probe: is the process itself alive? No dependency checks - kept cheap and fast.
app.MapHealthChecks("/health/live", new HealthCheckOptions
{
    Predicate = _ => false
});

// Readiness probe: can this instance actually serve traffic right now?
app.MapHealthChecks("/health/ready", new HealthCheckOptions
{
    Predicate = check => check.Tags.Contains("ready")
});

app.MapControllers();

app.Run();
