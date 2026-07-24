Convert the current request into repo-native spec-driven delivery artifacts.

Follow this order:

1. Read the SDD framework in `docs/superpowers/frameworks/spec-driven-development.md`
2. Read the AIDLC mechanism in `docs/superpowers/frameworks/aidlc.md`
3. Check existing specs, plans, and backlog under `docs/superpowers/`
4. Create or update:
   - a spec in `docs/superpowers/specs/`
   - a plan in `docs/superpowers/plans/` if execution slicing is needed
   - a backlog entry in `docs/superpowers/backlog/` if the work spans multiple tasks
5. Keep tasks small, explicit, and verifiable
6. Add acceptance criteria and verification notes

Rules:

- Do not implement broad multi-step work without first creating or updating the corresponding spec artifacts
- One task should map to one spec
- Use stable IDs like `SPEC-*`, `PLAN-*`, and `TASK-*`
- If the work comes from a review, group findings into themes and create one spec per theme
- Prefer extending the existing `docs/superpowers/` structure instead of creating a parallel system
