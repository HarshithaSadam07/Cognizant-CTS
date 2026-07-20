# 03 - Service Discovery Pattern

Demonstrates the service discovery pattern with a hand-built registry (the same idea Consul/Eureka implement).

## Flow
1. **ServiceRegistry** starts first on a fixed, well-known address (`localhost:5000`).
2. **ProductService** starts and calls `POST /api/registry/register` to announce itself.
3. **OrderService** needs ProductService's data, so instead of hardcoding its URL, it calls
   `GET /api/registry/discover/ProductService` to resolve the current address, then calls it.

## Run order
```bash
cd ServiceRegistry && dotnet run   # http://localhost:5000
cd ProductService   && dotnet run  # registers itself with the registry on startup
cd OrderService      && dotnet run # http://localhost:5002
```

Then call `GET http://localhost:5002/api/orders/check-product/1` to see the full discovery + call flow.

## Why this matters
In real deployments (Docker/Kubernetes), service IP addresses change every time a container restarts or scales.
Hardcoding URLs breaks immediately. Service discovery lets services find each other by name at runtime instead.
