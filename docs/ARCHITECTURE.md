## Architecture

```mermaid
graph TD
  subgraph Clients
    Web[Next.js 14]
    Mobile[Expo RN]
  end

  subgraph API[NestJS]
    Auth
    Threads
    Messages
    Assignments
    Submissions
    AI[AI Router]
    Billing
    Leaderboard
    Moderation
    WS[WebSocket Gateway]
  end

  subgraph Data
    Firestore
    Storage
    Redis[(Upstash Redis)]
  end

  subgraph Workers
    Cron[Node jobs]
    Sympy[Python micro]
  end

  Clients -->|Auth| API
  API --> Firestore
  API --> Storage
  API --> Redis
  API --> WS
  Workers --> Firestore
  Workers --> Redis
  AI -->|OpenAI/Vertex| API
```

- Auth: Firebase Auth with role claims. API verifies tokens via Admin SDK.
- Realtime: Firestore listeners + API WS for chat/presence.
- Payments: Stripe Checkout; webhook updates entitlements in Firestore.
- Safety: Guardrails in `packages/ai-prompts` enforced in AI Router.