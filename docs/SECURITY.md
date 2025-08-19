## Security & Compliance

- COPPA/FERPA: Parent link required for under-13 accounts; limited data retention.
- RBAC: Roles student/parent/teacher/admin enforced via Firebase Rules and API guards.
- Moderation: Google Text Moderation + heuristics; workers escalate to human review queue.
- Audit: Teacher/admin actions logged in Firestore `auditLogs`.
- Data export/delete: Admin endpoints and scripts provided.
- Least privilege: Collection rules restrict writes to owners and scoped roles.