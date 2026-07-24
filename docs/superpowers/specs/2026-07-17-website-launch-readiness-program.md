# Website Launch Readiness Program

**Program ID:** `WLR-2026-07`  
**Date:** 2026-07-17  
**Status:** `Approved`  
**Owner:** SofGent web team

## Problem Statement

The public site is visually close to launch quality, but the live review uncovered issues that weaken launch readiness across content integrity, crawlability, trust, metadata consistency, and conversion UX.

The most important discovered issues were:

- broken blog links on the public blog listing
- a `robots.txt` route conflict
- inconsistent or missing social metadata
- unsupported trust claims
- a contact form with weak validation and failure handling

This program converts those findings into a spec-driven execution model so future work can proceed as small, verified tasks rather than one large redesign effort.

## Scope

- define the working framework for SDD and AIDLC in this repo
- break launch-readiness remediation into specific specs
- provide a backlog and execution plan for future work
- preserve traceability between review findings and implementation tasks

## Non-Goals

- completing all remediation work in this document
- redesigning the full visual system
- changing brand strategy beyond what the launch-readiness specs require

## Program Specs

### `SPEC-WLR-001`

**Title:** Blog Link Integrity and Content Availability

Problem:
- the blog listing exposes non-resolving articles, creating hard trust and navigation failures

Acceptance target:
- every visible article on `/blog` resolves to a valid detail page or is removed from the listing

### `SPEC-WLR-002`

**Title:** Crawlability and Metadata Reliability

Problem:
- crawler-facing assets and metadata are inconsistent, reducing SEO and share-preview reliability

Acceptance target:
- `robots.txt`, sitemap, canonical URLs, and social metadata all work consistently for primary marketing routes

### `SPEC-WLR-003`

**Title:** Trust and Claim Substantiation

Problem:
- several high-confidence claims are currently stronger than the evidence presented on the site

Acceptance target:
- every major trust claim is either substantiated on-page or softened to match available proof

### `SPEC-WLR-004`

**Title:** Contact Conversion Hardening

Problem:
- the main conversion form is visually polished but weak in validation, error handling, and reassurance

Acceptance target:
- the contact flow gives clear field feedback, stronger state handling, and higher-conviction conversion UX

### `SPEC-WLR-005`

**Title:** Service and Project Metadata Normalization

Problem:
- several detail pages still use inconsistent or generic metadata that undermines professionalism

Acceptance target:
- service and project pages use clean, route-appropriate titles and descriptions

### `SPEC-WLR-006`

**Title:** Enterprise Trust Surface Expansion

Problem:
- the site lacks enough security, proof, and operational trust surface for cautious buyers

Acceptance target:
- enterprise buyers can quickly find security, proof, ownership, and support reassurance without guessing

## Success Criteria

- all new work can be attached to one of the six specs above
- future agents can select one task and continue without redoing the original audit
- the repo contains enough process structure to move from review to implementation predictably

## Dependencies

- route-level page ownership
- access to existing content and proof assets
- human approval for claim changes, proof selection, and security messaging

## Verification

- route status checks
- live browser review
- metadata inspection
- content diff review
- build or route generation checks where applicable
