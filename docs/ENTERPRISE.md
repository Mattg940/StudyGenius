## Enterprise Features

- RBAC: `RolesGuard` with `@Roles()` decorator on controllers.
- Rate limiting: Redis-backed guard (`RateLimitGuard`) adjustable by env.
- Observability: Sentry tracing + error capture initialized at bootstrap.
- Audit logging: Global `AuditInterceptor` writes to Firestore `auditLogs` and structured logs.
- Multi-tenancy: `TenantGuard` enforces `x-tenant-id` header for scoped routes.
- CI: GitHub Actions CI for lint/test/build.
- Config: Centralized `src/config.ts` for env-driven toggles.