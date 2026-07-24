---
name: spec-driven-delivery
description: Use when the user wants structured spec-driven development, reusable execution specs, backlog-based tasking, roadmap-to-task conversion, or a future-friendly AI-agent workflow for this repository. Apply when asked to create specs, plans, tasks, SDD, AIDLC, implementation roadmaps, or resumable agent workstreams.
---

# Spec Driven Delivery

Use this skill to convert broad requests, review findings, and roadmap work into repo-native execution artifacts.

For this repository, the source of truth lives under `docs/superpowers/`.

## Objective

Create and maintain a working chain:

1. `framework`
2. `spec`
3. `plan`
4. `backlog`
5. `implementation`
6. `verification`

Do not jump straight from a broad review into scattered code edits if the work naturally spans multiple tasks.

## Required Outputs

For non-trivial work, create or update:

- one spec in `docs/superpowers/specs/`
- one plan in `docs/superpowers/plans/` when execution slicing is needed
- one backlog entry in `docs/superpowers/backlog/` when multiple tasks exist

## Repo Conventions

Read these first when relevant:

- `docs/superpowers/frameworks/spec-driven-development.md`
- `docs/superpowers/frameworks/aidlc.md`
- templates under `docs/superpowers/templates/`

## When Starting From Review Findings

If the input is a review or audit:

1. group findings into themes
2. define one spec per theme
3. rank by severity and dependency
4. create backlog tasks with stable IDs
5. create one implementation plan for execution order

## Task Discipline

- Each task should map to one spec.
- Keep tasks small enough for one focused implementation pass.
- Record verification after each task.
- If new work appears, add a child task instead of bloating the current one.

## Naming

Use date-based markdown files:

- `YYYY-MM-DD-topic.md`

Use stable IDs inside documents:

- `SPEC-*`
- `PLAN-*`
- `TASK-*`

## Output Quality Bar

Good specs:

- bounded
- testable
- explicit about non-goals
- linked to evidence

Bad specs:

- broad redesign wishes
- fuzzy improvement language
- no acceptance criteria

## Agent Workflow

When asked to take work forward:

1. locate the relevant spec and plan
2. pick the highest-priority queued task
3. implement only that task
4. verify
5. update backlog status

That is the default workflow for future Codex-style agents in this repo.
