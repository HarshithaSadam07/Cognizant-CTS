using Microsoft.EntityFrameworkCore;
using OrderService.Models;

namespace OrderService.Data
{
    // Separate physical database (OrderDb) from ProductService's ProductDb.
    // This is the "database per service" pattern - each service's data is fully isolated,
    // and cross-service data (like product name/price) is denormalized/snapshotted at write time
    // rather than joined across databases.
    public class OrderDbContext : DbContext
    {
        public OrderDbContext(DbContextOptions<OrderDbContext> options) : base(options) { }

        public DbSet<Order> Orders => Set<Order>();
    }
}
