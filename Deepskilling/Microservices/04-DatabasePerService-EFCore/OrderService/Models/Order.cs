namespace OrderService.Models
{
    public class Order
    {
        public int Id { get; set; }

        // Only stores a reference (ProductId) - never a foreign key into ProductService's DB,
        // since that database is not reachable from here by design.
        public int ProductId { get; set; }
        public string ProductNameSnapshot { get; set; } = string.Empty; // denormalized copy at order time
        public decimal TotalPrice { get; set; }
        public int Quantity { get; set; }
        public DateTime OrderDateUtc { get; set; } = DateTime.UtcNow;
    }
}
