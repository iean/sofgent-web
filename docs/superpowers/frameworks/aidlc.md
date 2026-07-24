# AIDLC Mechanism

**AIDLC** = **AI-Assisted Delivery Lifecycle**

**Last updated:** 2026-07-17

## Purpose

AIDLC is the execution loop that sits on top of the repo's SDD model.

It exists to make future AI-agent work safe, resumable, and auditable.

## Lifecycle Stages

### 1. Assess

Understand current reality:

- inspect the running product when possible
- inspect code and route structure
- inspect existing specs, plans, and backlog
- capture evidence and constraints

Output:

- review notes
- current-state findings
- updated risks

### 2. Intend

Turn findings into a bounded spec:

- define the problem
- define scope and non-scope
- define acceptance criteria
- define dependencies and risk

Output:

- approved or draft spec

### 3. Design

Choose the implementation shape:

- break work into tasks
- decide sequence
- identify validation and rollback points

Output:

- implementation plan
- backlog entries

### 4. Launch Work

Execute one scoped task at a time:

- update only the files needed
- keep changes traceable to the task
- do not mix unrelated fixes

Output:

- code/content/config changes

### 5. Check

Verify against acceptance criteria:

- route checks
- visual checks
- content checks
- SEO checks
- test/build checks

Output:

- evidence
- pass/fail status

### 6. Learn

Capture what changed and what remains:

- update task status
- note follow-up work
- create new specs only if new scope emerges

Output:

- updated backlog
- follow-on task list

## Operating Rules

- The lifecycle is iterative, not one-pass.
- Each iteration should close one task or produce one clearer spec.
- If a task reveals new work, create a child task instead of expanding the original task indefinitely.
- If evidence contradicts the spec, update the spec before continuing.

## Human vs Agent Responsibilities

### Human

- approves major scope changes
- approves claim language, positioning, pricing, and trust statements
- decides whether residual risk is acceptable for launch

### AI Agent

- gathers evidence
- drafts specs and plans
- executes scoped implementation
- records validation
- proposes follow-up tasks

## Trigger Conditions

Use AIDLC when:

- the work spans multiple files
- a route or user journey is being changed
- the work affects launch readiness
- the task has content + design + code implications
- a future agent should be able to resume from repo docs alone

## Exit Criteria For A Single Iteration

An iteration is complete when one of the following is true:

- a task is verified and marked done
- a blocker is documented and the task is marked blocked
- a spec or plan is updated enough for the next worker to continue without rediscovery

## Required Artifacts Per Iteration

At minimum, each meaningful AIDLC iteration should leave:

- one updated spec, plan, or backlog entry
- one implementation diff or explicit decision not to implement
- one verification note

## Minimal Workflow

1. Read the relevant spec.
2. Read the relevant plan.
3. Pick one backlog task.
4. Implement only that task.
5. Verify.
6. Update backlog and notes.

That is the default operating loop for future agents in this repository.
