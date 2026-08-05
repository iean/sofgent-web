# Multi-Agent Work Coordination

**Spec ID:** `SPEC-AGENT-COORD-001`  
**Date:** `2026-08-05`  
**Status:** `In Progress`  
**Owner:** `SofGent delivery team`

## Problem Statement

Multiple Codex-style agents and humans can work from the same ClickUp Website list and repository.
ClickUp assignees may resolve to the same human account, so they do not reliably show which agent owns
a ticket or which files and production resources are currently locked.

## Scope

- A repository-native live claim board with ticket, agent, status, scope, and UTC timestamp.
- Explicit handoff, blocking, review, and release rules.
- ClickUp mirroring when its connector is available.

## Non-Goals

- Replacing ClickUp as the product backlog.
- Automatically locking files or merging concurrent branches.
- Allowing concurrent writes to Sanity production, Vercel, or credential stores.

## Requirements

- `AGENT-ASSIGNMENTS.md` is the source of truth for agent identity and active scope locks.
- `AGENTS.md` instructs every repository agent to consult and maintain the claim board.
- Every agent checks and claims a ticket before editing its scope.
- Statuses are limited to `WIP`, `BLOCKED`, `REVIEW`, and `DONE`.
- Shared production resources may have only one active writer.
- ClickUp state is mirrored when the connector is not rate-limited.

## Acceptance Criteria

- [x] Existing agent ownership is preserved.
- [x] Current blocker work has named owners, statuses, and scopes.
- [x] The claim and handoff protocol is documented.
- [x] Repository-level agent instructions enforce checking the claim board.
- [ ] ClickUp comments/statuses are synchronized after its rate limit clears.

## Dependencies and Risks

- All workers must read the tracker before starting work.
- Uncommitted tracker edits may not be visible to agents using separate Git worktrees.
- ClickUp connector rate limits can delay remote synchronization.

## Verification

- Review the active-claims table before each task.
- Confirm no two `WIP` or `REVIEW` entries overlap the same file or production resource.
- Compare active claims with ClickUp when access is restored.
