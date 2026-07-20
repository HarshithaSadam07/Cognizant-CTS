using Microsoft.EntityFrameworkCore;
using ProductService.Models;

namespace ProductService.Data
{
    // "Database per service": this DbContext ONLY ever talks to ProductDb.
    // OrderService cannot query this database directly - it must go through ProductService's API.
    public class ProductDbContext : DbContext
    {
        public ProductDbContext(DbContextOptions<ProductDbContext> options) : base(options) { }

        public DbSet<Product> Products => Set<Product>();
    }
}
