namespace OrderService.DTOs
{
    // Mirrors the shape OrderService expects from ProductService's API -
    // deliberately a separate type, not a shared assembly, to keep the services decoupled.
    public class ProductDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public bool InStock { get; set; }
    }
}
