# Module 7 – Microservices Architecture using ASP.NET Core Web API

6 projects demonstrating the microservices concepts covered in Module 7: architecture fundamentals, inter-service communication, service discovery, data management, security, and deployment automation.

| # | Project | Module 7 Topic Covered |
|---|---------|-------------------------|
| 1 | `01-Microservices-Basics` | Overview of microservices architecture, advantages/challenges, comparison with monolith |
| 2 | `02-InterService-Communication` | HTTP-based inter-service communication using a typed `HttpClient` |
| 3 | `03-ServiceDiscovery` | Service discovery/registration pattern via a custom registry service |
| 4 | `04-DatabasePerService-EFCore` | Database-per-service pattern with EF Core, data consistency notes |
| 5 | `05-JWT-Security-Microservices` | Centralized JWT authentication/authorization shared across services |
| 6 | `06-HealthChecks-Docker-K8s` | Health checks, structured logging, Dockerfile, Kubernetes manifests, CI/CD pipeline, deployment strategies |

## How to run any project
Each subfolder contains one or more independent ASP.NET Core Web API projects. From inside any service folder:
```bash
dotnet restore
dotnet run
```
Projects that use EF Core (04) additionally need:
```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

## Suggested order to walk CTS through this
1. Start with **01** to explain what a microservice is and why it differs from a monolith.
2. **02** shows two services talking to each other over HTTP.
3. **03** shows how services find each other dynamically instead of hardcoding URLs.
4. **04** shows how each service's data stays isolated.
5. **05** shows how authentication is centralized once you have multiple services.
6. **06** shows how it all gets monitored and shipped to production with Docker/Kubernetes.

## Author
Kakumanu Venkata Sadwik — B.Tech CSE, VFSTR
