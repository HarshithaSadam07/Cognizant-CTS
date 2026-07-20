# 01 - Microservices Basics

Two independently deployable ASP.NET Core Web APIs: `ProductService` (port 5001) and `OrderService` (port 5002).

## Why this is "microservices" and not a monolith
- Each service has its own project, its own `Program.cs`, and runs as a separate process on its own port.
- Each service owns a single bounded context (Products vs Orders) and does not share code or a database with the other.
- Either service can be built, deployed, restarted, or scaled independently without touching the other.

## Monolith vs Microservices (quick comparison)

| Aspect | Monolith | Microservices |
|---|---|---|
| Deployment | One unit, redeploy everything for any change | Independent deployment per service |
| Scaling | Scale the entire app | Scale only the service under load |
| Technology | Single stack | Each service can use a different stack/DB |
| Failure isolation | One bug can bring down the whole app | A failing service can be isolated |
| Complexity | Simple to start | More operational complexity (network, discovery, monitoring) |

## Run
```bash
cd ProductService && dotnet run   # http://localhost:5001/swagger
cd OrderService && dotnet run     # http://localhost:5002/swagger
```
