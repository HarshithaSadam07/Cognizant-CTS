# 06 - Health Checks, Logging, Docker & Kubernetes

## Health checks & monitoring
- `Program.cs` registers a custom `IHealthCheck` and exposes two separate endpoints:
  - `/health/live` — liveness (is the process alive? no dependency checks)
  - `/health/ready` — readiness (can this instance serve traffic right now?)
- Serilog provides structured, per-service-tagged console logging (`Service: ProductService`), the kind of thing that gets shipped to a central log aggregator (ELK, Seq, Azure Monitor) in real deployments.
- `/metrics` gives a minimal example of exposing counters; production systems typically use `prometheus-net` + Grafana instead of a hand-rolled counter.

## Docker
`ProductService/Dockerfile` is a multi-stage build: SDK image compiles and publishes the app, then the much smaller ASP.NET runtime image runs it. Build & run locally:
```bash
cd ProductService
docker build -t product-service .
docker run -p 8080:8080 product-service
curl http://localhost:8080/health/live
```

## Kubernetes
`k8s/deployment.yaml` and `k8s/service.yaml` show:
- **Rolling updates** (`maxSurge: 1`, `maxUnavailable: 0`) — the deployment strategy from the module — for zero-downtime releases.
- **Liveness/readiness probes** wired to the health check endpoints above.
- A **ClusterIP Service**, which is Kubernetes' own service discovery mechanism: other pods reach this one via the DNS name `product-service`, no external registry needed inside the cluster.

Apply with:
```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

## CI/CD
`.github/workflows/deploy.yml` is a GitHub Actions pipeline: build → Docker image → push → deploy, triggered on push to `main`. Covers the module's "Setting up CI/CD pipelines" objective (Azure DevOps would follow the same build → push → deploy shape using YAML pipelines instead).

## Deployment strategies (concept summary)
| Strategy | How it works | Trade-off |
|---|---|---|
| Rolling update | Replace pods gradually, old and new versions briefly coexist | Simple, built into K8s, but versions overlap during rollout |
| Blue-Green | Full second environment ("green") is deployed, then traffic is switched all at once | Instant rollback, but needs 2x infrastructure temporarily |
| Canary | New version gets a small % of traffic first, then scales up if healthy | Safer, catches issues early, more complex routing setup |
