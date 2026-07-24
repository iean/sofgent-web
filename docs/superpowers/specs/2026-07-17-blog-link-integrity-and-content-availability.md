# Blog Link Integrity and Content Availability

**Spec ID:** `SPEC-WLR-001`  
**Date:** 2026-07-17  
**Status:** `Done`  
**Owner:** SofGent web team

## Problem Statement

The public blog listing currently exposes article links that return `404`. This is a hard launch-readiness defect because it breaks navigation, reduces trust, and weakens internal linking quality.

## Evidence

Verified on 2026-07-17 from the live local site:

- `/blog/claude-vs-openai-production` → `404`
- `/blog/haven-automation-case-study` → `404`
- `/blog/rag-in-production-practical` → `404`
- `/blog/why-most-ai-saas-projects-fail` → `404`

## Scope

- inspect the source of blog-listing data
- identify why non-existent slugs are being rendered
- ensure every visible blog link resolves or is removed

## Non-Goals

- rewriting all blog content
- redesigning the blog index layout

## Requirements

- the blog listing must not render dead article links
- source content and route generation must align
- if content is intentionally unavailable, it must not be promoted publicly

## Acceptance Criteria

- [x] every visible article on `/blog` returns `200`
- [x] no blog card links to a known missing slug
- [x] verification is recorded with route checks

## Dependencies

- blog content source
- blog route generation logic

## Risks

- a mismatch may exist between fallback content, CMS content, and route generation

## Verification

- crawl `/blog` links
- verify each linked slug returns `200`
- visually review the blog index after the fix

## Verification Notes

Verified on 2026-07-17 against the live local site:

- extracted real `href="/blog/*"` links from `/blog`
- confirmed the only visible article link was `/blog/how-ai-integration-is-transforming-modern-businesses-in-2026`
- confirmed that route returned `200`

Implementation note:

- `app/(pages)/blog/BlogClientPage.tsx` now derives featured and popular article links from the actual routable post source and fails closed when no live posts are available
