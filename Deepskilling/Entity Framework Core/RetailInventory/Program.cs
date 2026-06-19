using Microsoft.EntityFrameworkCore;
using RetailInventory;
using RetailInventory.Models;

using var context = new AppDbContext();

// Retrieve all products
var products = await context.Products.ToListAsync();

Console.WriteLine("All Products:");
foreach (var p in products)
{
    Console.WriteLine($"{p.Id} - {p.Name} - ₹{p.Price}");
}

// Find product by ID
var product = await context.Products.FindAsync(1);

if (product != null)
{
    Console.WriteLine($"\nFound Product: {product.Name}");
}

// Find first expensive product
var expensive = await context.Products
    .FirstOrDefaultAsync(p => p.Price > 50000);

if (expensive != null)
{
    Console.WriteLine($"Expensive Product: {expensive.Name}");
}