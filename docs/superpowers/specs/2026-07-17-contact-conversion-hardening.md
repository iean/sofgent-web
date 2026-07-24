# Contact Conversion Hardening

**Spec ID:** `SPEC-WLR-004`  
**Date:** 2026-07-17  
**Status:** `Approved`  
**Owner:** SofGent web team

## Problem Statement

The contact page is visually strong but functionally light. Validation, error handling, and reassurance are not yet strong enough for a premium services conversion path.

## Evidence

Observed on 2026-07-17:

- only basic native required/email validation is present
- there are no field-level validation messages
- failure state is a single generic message
- the form lacks richer reassurance or alternate booking paths

Source reviewed:

- [ContactFormModern.tsx](/Volumes/Code/sofgent/sofgent-web/app/components/contact/ContactFormModern.tsx)

## Scope

- improve validation feedback
- improve error and success UX
- improve conversion reassurance around response, privacy, and next steps

## Non-Goals

- replacing the entire form stack
- adding CRM integration unless separately specified

## Requirements

- required fields should fail clearly
- users should understand what happens after submission
- failure handling should be more specific than a generic fallback where feasible

## Acceptance Criteria

- [ ] required input errors are visible and usable
- [ ] success state explains next steps clearly
- [ ] failure state is clearer and more actionable
- [ ] contact trust copy is improved

## Verification

- manual form interaction checks
- mobile and desktop visual review
