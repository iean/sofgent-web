# Service and Project Metadata Normalization

**Spec ID:** `SPEC-WLR-005`  
**Date:** 2026-07-17  
**Status:** `Done`  
**Owner:** SofGent web team

## Problem Statement

Several service and project detail pages still use generic or low-quality metadata, which undermines SEO and professional consistency.

## Evidence

Examples observed on 2026-07-17:

- multiple pages titled `SofGent — AI Product Studio`
- `/services/saas-micro-saas-solutions` titled `Cloud based saas Company | SofGent`
- `/services/system-integration` titled `System Integration management system| SofGent`

## Scope

- review route-level metadata generation for service and project detail pages
- normalize titles and descriptions
- align copy with current positioning

## Non-Goals

- full copy rewrite of every service page
- schema changes beyond metadata needs

## Acceptance Criteria

- [x] every service detail page has a route-appropriate title and description
- [x] every project detail page has a route-appropriate title and description
- [x] generic fallback metadata is reduced or eliminated on public detail pages

## Verification

- metadata extraction for all service/project detail routes
