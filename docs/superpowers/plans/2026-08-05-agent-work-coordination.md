# Agent Work Coordination Plan

**Plan ID:** `PLAN-AGENT-COORD-001`  
**Date:** `2026-08-05`  
**Related Spec:** `SPEC-AGENT-COORD-001`

## Goal

Prevent duplicate ticket implementation and conflicting file or production-resource writes while
keeping ClickUp as the business backlog and the repository as the reliable agent identity layer.

## Operating Sequence

1. Read `AGENT-ASSIGNMENTS.md` and the relevant ClickUp ticket.
2. Confirm the proposed file/resource scope does not overlap a `WIP`, `BLOCKED`, or `REVIEW` claim.
3. Add a `WIP` row with a unique agent label and UTC timestamp before implementation.
4. Mirror owner, status, and an agent label to ClickUp when available.
5. Change the row to `REVIEW`, `BLOCKED`, or `DONE` and record verification or the blocker.
6. Transfer ownership explicitly when another agent continues the work.

## Areas Changed

- `AGENTS.md`
- `AGENT-ASSIGNMENTS.md`
- `docs/superpowers/specs/2026-08-05-agent-work-coordination.md`
- `docs/superpowers/backlog/2026-08-05-agent-work-assignments.md`

## Done Definition

- Every active task has one identifiable owner.
- Every active task declares its file or shared-resource scope.
- Agents can identify conflicts without relying on a shared ClickUp user identity.
- ClickUp is synchronized after connector access returns.
