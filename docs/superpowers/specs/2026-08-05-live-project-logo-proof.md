# Live Project Logo Proof

**Spec ID:** `SPEC-LOGO-001`  
**Date:** `2026-08-05`  
**Status:** `Done`  
**Owner:** `SofGent web team`

## Problem Statement

The homepage trust strip shows two live clients as plain text and omits EasyKT, even though three live
projects are published. Official project branding provides stronger, more scannable proof than text-only
names and keeps the homepage aligned with the live-project collection.

## Scope

- Use official logo assets from EasyKT, Heart & Haven Care, and Solidarity Center.
- Store optimized local copies under `public/images/client-logos/`.
- Render accessible, linked logos for all three published live projects on the homepage.

## Non-Goals

- Creating or redrawing brand marks.
- Adding unpublished clients or fabricated logos.
- Changing Sanity documents or other homepage sections.

## Requirements

- Every logo must originate from the project or organization’s official website.
- Logos must be readable at desktop and mobile widths without distortion.
- Each logo must have meaningful alternative text and link to its internal live-project detail page.
- Logo images must be locally served and reasonably optimized.

## Acceptance Criteria

- [x] EasyKT, Heart & Haven Care, and Solidarity Center logos render in the trust strip.
- [x] All three links resolve to live detail pages.
- [x] Logo assets are official, local, transparent, and appropriately sized.
- [x] TypeScript and rendered-page checks pass.

## Verification

- Inspect official sources and downloaded assets.
- Validate image dimensions and file sizes.
- Check rendered HTML for three linked images and accessible alt text.
- Verify the three internal destinations return successful responses.

## Source Evidence

- EasyKT: `https://www.easykt.com/logo_transparent.png`
- Heart & Haven Care: `https://www.heartandhavenhealthcare.co.uk/images/H%26H-New-Color-logo.png`
- Solidarity Center: `https://www.solidaritycenter.org/wp-content/uploads/2025/03/SC-Logo-for-Web_March-2025.png`

The source files were visually inspected, resized into transparent PNGs, and stored locally. Final
assets are 17–29 KB each. Browser checks at 1280×900 and 390×844 confirmed readable layout, three
accessible links, zero console warnings, and successful internal project destinations.
