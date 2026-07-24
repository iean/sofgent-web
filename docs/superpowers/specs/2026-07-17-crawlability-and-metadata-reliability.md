# Crawlability and Metadata Reliability

**Spec ID:** `SPEC-WLR-002`  
**Date:** 2026-07-17  
**Status:** `Approved`  
**Owner:** SofGent web team

## Problem Statement

Crawler-facing and sharing-facing metadata is inconsistent. A `robots.txt` conflict is present, and major routes are missing OG/Twitter image values.

## Evidence

Verified on 2026-07-17:

- `GET /robots.txt` returns a conflict-driven server error in local dev
- several key routes had empty `og:image` and `twitter:image` values, including `/services`, `/projects`, `/about`, `/contact`, `/blog`, `/ai-product-studio`, `/product-development`, and `/custom-software`

## Scope

- fix `robots.txt`
- verify sitemap behavior
- normalize route-level social metadata for major public pages

## Non-Goals

- full keyword strategy redesign
- long-form SEO content creation

## Requirements

- crawler routes must resolve cleanly
- major public routes must expose usable OG/Twitter image metadata
- canonical metadata should remain consistent with public routes

## Acceptance Criteria

- [ ] `robots.txt` resolves successfully
- [ ] sitemap resolves successfully
- [ ] all primary marketing pages emit usable OG/Twitter image values
- [ ] route metadata is re-verified after implementation

## Verification

- HTTP status checks
- raw HTML metadata inspection
- visual social-preview spot checks where possible
