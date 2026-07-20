using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace ProductService.HealthChecks
{
    // A custom health check - beyond the built-in DB/URL checks, you can verify
    // anything that matters to this service's ability to function correctly.
    public class DownstreamDependencyHealthCheck : IHealthCheck
    {
        public Task<HealthCheckResult> CheckHealthAsync(
            HealthCheckContext context,
            CancellationToken cancellationToken = default)
        {
            // In a real service this might ping a message broker, cache, or another API.
            var isHealthy = true;

            return Task.FromResult(isHealthy
                ? HealthCheckResult.Healthy("Downstream dependency is reachable.")
                : HealthCheckResult.Unhealthy("Downstream dependency is not reachable."));
        }
    }
}
