# 05 - JWT Security Across Microservices

`AuthService` is the single, centralized token issuer. `ProductService` (and any other downstream service) only *validates* tokens — it never issues them, and never calls AuthService per-request.

## Flow
1. `POST http://localhost:5000/api/auth/login` with `{ "username": "admin", "password": "Admin@123" }` → returns a JWT.
2. Call `GET http://localhost:5001/api/products` with header `Authorization: Bearer <token>`.
3. ProductService validates the token locally using the same `Jwt:Key/Issuer/Audience` values from its own `appsettings.json` — no network call back to AuthService is needed per request.

## Why this pattern
This is the standard "single sign-on across microservices" approach: one login works everywhere because every service trusts tokens signed with the same shared secret (in production, this is usually an asymmetric key pair or an external identity provider like IdentityServer/Azure AD, not a literal shared string in config).

## Run
```bash
cd AuthService && dotnet run      # http://localhost:5000
cd ProductService && dotnet run   # http://localhost:5001
```
