# Website Launch Readiness Backlog

**Program:** Website Launch Readiness  
**Date:** 2026-07-17  
**Framework:** Spec-Driven Development + AIDLC

## Status Legend

- `Queued`
- `In Progress`
- `Blocked`
- `Done`

## Specs

| Spec ID | Title | Status | Priority |
| --- | --- | --- | --- |
| `SPEC-WLR-001` | Blog Link Integrity and Content Availability | `Done` | `Critical` |
| `SPEC-WLR-002` | Crawlability and Metadata Reliability | `Queued` | `Critical` |
| `SPEC-WLR-003` | Trust and Claim Substantiation | `Queued` | `High` |
| `SPEC-WLR-004` | Contact Conversion Hardening | `Queued` | `High` |
| `SPEC-WLR-005` | Service and Project Metadata Normalization | `Queued` | `High` |
| `SPEC-WLR-006` | Enterprise Trust Surface Expansion | `Queued` | `Medium` |

## Task Queue

| Task ID | Spec ID | Task | Status | Priority |
| --- | --- | --- | --- | --- |
| `TASK-WLR-001` | `SPEC-WLR-001` | Audit all blog slugs rendered on `/blog` and identify source mismatch | `Done` | `Critical` |
| `TASK-WLR-002` | `SPEC-WLR-001` | Fix blog listing so every visible post resolves to a live detail page | `Done` | `Critical` |
| `TASK-WLR-003` | `SPEC-WLR-002` | Resolve `/robots.txt` conflict and verify route output | `Queued` | `Critical` |
| `TASK-WLR-004` | `SPEC-WLR-002` | Add OG/Twitter images to core marketing routes | `Queued` | `High` |
| `TASK-WLR-005` | `SPEC-WLR-005` | Normalize titles and descriptions on service detail pages | `Queued` | `High` |
| `TASK-WLR-006` | `SPEC-WLR-005` | Normalize titles and descriptions on project detail pages | `Queued` | `High` |
| `TASK-WLR-007` | `SPEC-WLR-003` | Inventory all hard trust claims and classify as prove, soften, or remove | `Queued` | `High` |
| `TASK-WLR-008` | `SPEC-WLR-003` | Rewrite unsupported homepage guarantee and comparison language | `Queued` | `High` |
| `TASK-WLR-009` | `SPEC-WLR-004` | Add inline validation and field-specific errors to contact form | `Queued` | `High` |
| `TASK-WLR-010` | `SPEC-WLR-004` | Improve contact success/failure states and conversion trust copy | `Queued` | `Medium` |
| `TASK-WLR-011` | `SPEC-WLR-006` | Add Security page or equivalent trust section | `Queued` | `Medium` |
| `TASK-WLR-012` | `SPEC-WLR-006` | Add proof assets: testimonials, client logos, or stronger case-study links | `Queued` | `Medium` |

## Sequencing

Recommended order:

1. `SPEC-WLR-001`
2. `SPEC-WLR-002`
3. `SPEC-WLR-005`
4. `SPEC-WLR-003`
5. `SPEC-WLR-004`
6. `SPEC-WLR-006`

## Program Done Definition

This program is done when:

- broken public links are removed or fixed
- crawlability and route metadata are stable
- unsupported claims are removed or substantiated
- the contact conversion path is materially stronger
- trust/enterprise gaps are closed to an agreed launch threshold
