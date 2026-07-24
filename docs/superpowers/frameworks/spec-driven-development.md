# Spec-Driven Development Framework

**Last updated:** 2026-07-17  
**Applies to:** SofGent public website and future product-delivery work in this repository

## Purpose

This repository uses **Spec-Driven Development (SDD)** to keep design, content, engineering, QA, and AI-agent work aligned.

The rule is simple:

1. Work starts with a spec.
2. Specs produce plans.
3. Plans produce tasks.
4. Tasks produce code, verification, and review artifacts.

Do not start implementation from vague requests when the change is non-trivial. Convert the request into a spec first.

## Core Principles

- Specs define the intended outcome, not just implementation ideas.
- Every meaningful change should have explicit acceptance criteria.
- Tasks should map back to one spec only.
- Evidence beats opinion. Reviews, screenshots, route checks, and test output should be attached to the spec or plan.
- AI agents may draft specs and tasks, but humans approve direction changes, scope, and launch decisions.

## Canonical Structure

Use the following folders:

- `docs/superpowers/specs/` — product or feature specs
- `docs/superpowers/plans/` — execution plans derived from specs
- `docs/superpowers/backlog/` — task registries and milestone status
- `docs/superpowers/frameworks/` — working model and process rules
- `docs/superpowers/templates/` — reusable authoring templates

## Artifact Types

### 1. Spec

A spec defines:

- business/problem context
- scope
- non-scope
- requirements
- success criteria
- risks
- verification approach

Specs answer: **What must be true when this work is done?**

### 2. Plan

A plan translates a spec into implementation slices:

- task groups
- file areas
- sequence
- dependencies
- verification checkpoints

Plans answer: **How should we execute this spec safely?**

### 3. Backlog

A backlog tracks execution status across specs:

- queued
- in progress
- blocked
- done

Backlog items answer: **What is the next smallest useful unit of work?**

### 4. Evidence

Evidence includes:

- live review notes
- screenshots
- accessibility reports
- SEO validation
- test/build logs
- route status checks

Evidence answers: **How do we know the change is real and correct?**

## Required Fields For Every Spec

Each spec must include:

- title
- date
- owner
- status
- problem statement
- scope
- explicit non-goals
- requirements
- acceptance criteria
- dependencies
- risks
- verification

## Status Model

Use these statuses consistently:

- `Draft`
- `Approved`
- `In Progress`
- `Blocked`
- `Done`
- `Superseded`

## Task Sizing Rules

Tasks should be small enough to finish and verify in one focused session.

Good task examples:

- Fix broken blog slugs on the listing page
- Add route-level OG image metadata to core marketing pages
- Add inline error messages to contact form required fields

Bad task examples:

- Fix the whole website
- Improve SEO everywhere
- Make the brand better

## Traceability Rules

Every task must reference:

- one `Spec ID`
- one `Plan ID` if implementation has started
- one owner
- one status

Every completed task should leave behind:

- changed files
- validation evidence
- follow-up notes if residual risk remains

## Review Gates

Use four lightweight gates:

### Gate 1: Spec Ready

Before implementation:

- problem is clear
- scope is bounded
- acceptance criteria are testable

### Gate 2: Plan Ready

Before coding:

- sequence is sensible
- dependencies are known
- rollback or safety concerns are noted

### Gate 3: Implementation Ready

Before merge:

- spec acceptance criteria are checked
- manual verification is recorded
- route/test/build checks are attached

### Gate 4: Launch Ready

Before shipping:

- blockers are closed
- open issues are explicitly accepted
- SEO/trust/conversion checks are re-run where relevant

## Naming Convention

Use:

- `YYYY-MM-DD-short-topic.md`

Examples:

- `2026-07-17-blog-link-integrity.md`
- `2026-07-17-contact-conversion-hardening.md`

## Working Rule For Agents

If an AI agent is asked to implement a non-trivial feature or fix:

1. locate the relevant spec
2. create one if missing
3. derive or update the plan
4. update the backlog
5. implement only the scoped task
6. record verification evidence

If no spec exists and the work is larger than a one-file fix, the agent should create or request a spec before broad implementation.
