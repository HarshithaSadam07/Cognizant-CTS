# 04 - Database Per Service Pattern

`ProductService` owns `ProductDb`. `OrderService` owns `OrderDb`. Neither service's DbContext can see the other's database — this is the **database-per-service** pattern, as opposed to a shared database across services.

## Data consistency note
Because there's no cross-database join or shared transaction, `OrderService` denormalizes (`ProductNameSnapshot`, `TotalPrice`) the product data it needs at the moment the order is created, instead of joining live against `ProductDb`. This trades strict consistency for service independence — the two databases are **eventually consistent** with each other, and distributed transactions across them (e.g. via the Saga pattern) would be needed for stronger guarantees.

## Run
```bash
cd ProductService
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet run   # http://localhost:5001

cd ../OrderService
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet run   # http://localhost:5002
```
