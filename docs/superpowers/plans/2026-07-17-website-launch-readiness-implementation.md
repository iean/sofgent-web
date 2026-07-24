# Website Launch Readiness Implementation Plan

> **For agentic workers:** Follow the repo's SDD framework in `docs/superpowers/frameworks/spec-driven-development.md` and the AIDLC loop in `docs/superpowers/frameworks/aidlc.md`. Execute one task at a time and update the backlog after each verified iteration.

**Plan ID:** `PLAN-WLR-2026-07`  
**Date:** 2026-07-17  
**Related Program:** `WLR-2026-07`

## Goal

Move the public site from review findings to verified launch-readiness improvements using small, resumable, spec-scoped tasks.

## Architecture / Approach

Use a six-spec remediation program. Prioritize integrity and crawlability first, then metadata consistency, then trust and conversion improvements. Keep tasks small and attach evidence after each change.

## Primary Areas Expected To Change

- `app/(pages)/blog/*`
- `app/(pages)/services/*`
- `app/(pages)/projects/*`
- `app/components/contact/*`
- `app/page.tsx`
- `app/layout.tsx`
- `app/robots.ts` or `public/robots.txt` depending on the chosen fix path
- `app/sitemap.ts`
- `app/utils/getPageMeta.ts`
- `lib/content/*`
- `lib/sanity/*`

## Execution Order

### Task Group 1: Public Integrity Blockers

Related specs:

- `SPEC-WLR-001`
- `SPEC-WLR-002`

- [ ] Fix blog listing slug integrity
- [ ] Resolve `robots.txt` conflict
- [ ] Re-verify public route status and crawler routes

### Task Group 2: Metadata Reliability

Related specs:

- `SPEC-WLR-002`
- `SPEC-WLR-005`

- [ ] Add OG/Twitter image coverage to major routes
- [ ] Normalize service detail metadata
- [ ] Normalize project detail metadata
- [ ] Re-run route metadata extraction

### Task Group 3: Trust-Language Correction

Related specs:

- `SPEC-WLR-003`

- [ ] inventory strong claims
- [ ] revise unsupported guarantees and superlatives
- [ ] review homepage, services, and major offer pages

### Task Group 4: Contact Conversion Hardening

Related specs:

- `SPEC-WLR-004`

- [ ] add field-level validation UX
- [ ] improve failure and success handling
- [ ] strengthen reassurance copy
- [ ] verify mobile and desktop behavior

### Task Group 5: Enterprise Trust Expansion

Related specs:

- `SPEC-WLR-006`

- [ ] decide highest-value trust surface
- [ ] implement one trust-surface improvement
- [ ] review site-level trust coverage again

## Risks / Sequencing Notes

- metadata fixes may touch shared helpers, so route regression checks matter
- claim-language changes may require human approval for business positioning
- contact-form changes should preserve the current API contract unless separately specified
- blog issues may originate in content source mismatches, not only rendering

## Done Definition

- critical route and crawler blockers are closed
- each spec has either completed tasks or an explicit blocked state
- verification notes exist for each completed task
- backlog status reflects actual progress
