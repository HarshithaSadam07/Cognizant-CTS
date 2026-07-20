namespace ServiceRegistry.Models
{
    public class ServiceInstance
    {
        public string ServiceName { get; set; } = string.Empty;
        public string BaseUrl { get; set; } = string.Empty;
        public DateTime LastHeartbeatUtc { get; set; } = DateTime.UtcNow;
    }
}
