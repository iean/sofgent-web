# Repository Agent Instructions

## Work coordination

This repository may be edited concurrently by multiple Codex-style agents and humans.

Before starting implementation:

1. Read `AGENT-ASSIGNMENTS.md`.
2. Do not edit files or shared production resources covered by another agent's `WIP`, `BLOCKED`, or
   `REVIEW` claim.
3. Claim the ClickUp ticket in that file with a unique agent label, `WIP` status, exact file/resource
   scope, and UTC timestamp.
4. Mirror the claim to ClickUp when its connector is available.
5. On handoff or completion, update the owner, status, scope note, and timestamp.

Sanity `production`, Vercel, deployment settings, and credentials are exclusive-write resources: only
one active agent may mutate each resource at a time.

The local Next.js runtime is also exclusive because `next dev`, `next build`, and `next start` all
mutate `.next`. Claim `LOCAL-RUNTIME` in `AGENT-ASSIGNMENTS.md` before running any of these commands;
do not start or build while another agent owns it. Checks that do not write `.next` may run concurrently.

The workflow specification is in
`docs/superpowers/specs/2026-08-05-agent-work-coordination.md`.
