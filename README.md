# Study Genius Monorepo

All-in-one education super-app: Web (Next.js), Mobile (Expo), API (NestJS), Workers, and shared packages. Powered by Turborepo + pnpm.

## Quickstart

1) Install tools
- Node 20+
- pnpm 9+

2) Install deps
```bash
pnpm install
```

3) Set up envs (copy and fill)
```bash
cp .env.example .env
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.local.example apps/web/.env.local
cp apps/mobile/.env.example apps/mobile/.env
```

4) Seed demo data (requires Firebase project env)
```bash
pnpm ts-node --swc scripts/create-demo-class.ts
```

5) Run dev (all apps)
```bash
pnpm dev
```

- Web: http://localhost:3000
- API: http://localhost:4000 (Swagger at /docs)
- Mobile: Expo Dev Tools

See docs in `docs/` for architecture, security and deployment.

## Apps
- `apps/web` – Next.js 14 App Router + Tailwind + shadcn/ui
- `apps/mobile` – Expo Router (RN)
- `apps/api` – NestJS REST + WebSocket
- `apps/workers` – Cloud jobs + Python sympy micro

## Packages
- `packages/types` – Shared types & zod schemas
- `packages/utils` – Auth, permissions, scoring
- `packages/ui` – Shared UI primitives
- `packages/ai-prompts` – Prompt templates & guardrails

## Deploy
- Web: Vercel or Firebase Hosting
- API/Workers: Cloud Run
- Mobile: EAS

A Loom-style walkthrough: Run the steps above. Web shows onboarding, demo class, chat, assignments, AI tutor, and leaderboard with seeded data.