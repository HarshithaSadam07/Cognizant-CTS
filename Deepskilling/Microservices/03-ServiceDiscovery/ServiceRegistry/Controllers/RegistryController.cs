using Microsoft.AspNetCore.Mvc;
using ServiceRegistry.Models;

namespace ServiceRegistry.Controllers
{
    // A minimal, self-built service registry - illustrates the same idea as
    // Consul/Eureka: services register themselves here, and clients ask this
    // registry "where is ServiceX right now?" instead of hardcoding URLs.
    [ApiController]
    [Route("api/[controller]")]
    public class RegistryController : ControllerBase
    {
        // Keyed by service name -> list of live instances (supports multiple instances per service).
        private static readonly Dictionary<string, List<ServiceInstance>> Registry = new();
        private static readonly object Lock = new();

        // Called by each microservice on startup (and periodically) to announce itself.
        [HttpPost("register")]
        public IActionResult Register([FromBody] ServiceInstance instance)
        {
            lock (Lock)
            {
                if (!Registry.TryGetValue(instance.ServiceName, out var instances))
                {
                    instances = new List<ServiceInstance>();
                    Registry[instance.ServiceName] = instances;
                }

                instances.RemoveAll(i => i.BaseUrl == instance.BaseUrl);
                instance.LastHeartbeatUtc = DateTime.UtcNow;
                instances.Add(instance);
            }

            return Ok(new { message = $"{instance.ServiceName} registered at {instance.BaseUrl}" });
        }

        // Called by any client that needs to find a live instance of a service.
        [HttpGet("discover/{serviceName}")]
        public ActionResult<ServiceInstance> Discover(string serviceName)
        {
            lock (Lock)
            {
                if (!Registry.TryGetValue(serviceName, out var instances) || instances.Count == 0)
                {
                    return NotFound($"No live instances registered for '{serviceName}'.");
                }

                // Simple round-robin-ish pick: return the most recently heartbeated instance.
                var instance = instances.OrderByDescending(i => i.LastHeartbeatUtc).First();
                return Ok(instance);
            }
        }

        [HttpGet("all")]
        public ActionResult<Dictionary<string, List<ServiceInstance>>> GetAll() => Ok(Registry);
    }
}
