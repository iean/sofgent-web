# AI Product Studio Content Consolidation Design

**Date:** 2026-06-17  
**Scope:** Homepage, `ai-product-studio`, `services`, and `how-we-build-saas` content/design alignment with Sanity-backed dynamic content

## Goal

Reposition the public site around a clearer primary offer: **AI Product Studio for operations teams**, while keeping separate pages for:

- `/`
- `/ai-product-studio`
- `/services`
- `/how-we-build-saas`

The site should retain the stronger design direction from the design branch, reduce generic service sprawl, and use Sanity as the dynamic source for services, FAQs, blogs, case studies, and projects.

## Decisions Already Approved

- Use **Approach A**: keep three dedicated supporting pages plus the homepage.
- Homepage content structure is approved.
- Primary offer is **AI Product Studio**.
- Messaging should be **simple and business-friendly**.
- Public positioning should emphasize **AI + SaaS only**.
- `AI Product Studio` remains the main label, but page copy must make it obvious that clients are buying:
  - AI apps
  - AI-powered internal tools
  - SaaS systems with AI workflows
- Current `main` must be backed up to a separate branch before implementation work starts.

## Positioning

### Primary Market Message

SofGent builds **AI apps, AI-powered internal tools, and SaaS systems for operations teams**.

### Messaging Principle

Top-level pages should no longer read like a broad software agency catalog. They should repeatedly reinforce:

- AI product delivery
- AI apps for business operations
- AI-powered SaaS systems
- production-ready delivery

Avoid broad generic framing such as “we do every kind of software service” in hero and section-lead copy.

## Information Architecture

### Homepage `/`

The homepage should act as the clearest high-level sales entry point.

#### Content Flow

1. **Hero**
   - Plain-English headline about AI apps and AI-powered software for operations teams
   - Subheadline clarifies AI apps, internal tools, and SaaS systems
   - Primary CTA to `/ai-product-studio`
   - Secondary CTA to consultation/contact

2. **What We Actually Build**
   - Short clarity block that answers the buyer question immediately
   - Three simple concepts:
     - AI apps
     - AI internal tools
     - SaaS products with AI workflows

3. **Core Offer**
   - Present **AI Product Studio** as the main offer
   - Show only two primary service lanes:
     - AI Product Delivery
     - SaaS MVP Delivery

4. **Proof**
   - Compact featured case studies/projects pulled from Sanity
   - Focus on outcomes and systems shipped

5. **Process Teaser**
   - Short summary of how SofGent scopes, designs, builds, and launches
   - CTA to `/how-we-build-saas`

6. **Authority Layer**
   - Small blog + FAQ teaser from Sanity
   - Enough trust signal without making the homepage content-heavy

7. **Final CTA**
   - One clear conversion message oriented around AI product needs

### AI Product Studio `/ai-product-studio`

This becomes the main offer page.

#### Purpose

Explain the primary offer in full: SofGent designs and delivers AI-powered systems for operations teams.

#### Content Direction

- Combine the strongest messaging from the design-branch homepage and the existing design-branch AI Product Studio page
- Clearly define the offer in non-abstract language
- Explain what an AI Product Studio engagement results in
- Show supporting proof from Sanity:
  - case studies
  - projects
  - FAQs

#### Core Message

SofGent helps teams launch AI apps, internal AI tools, and SaaS systems that automate operational workflows and ship in production-ready form.

### Services `/services`

This remains a separate page, but it should stop acting like a broad equal-weight service catalog.

#### Purpose

Support the AI Product Studio offer with a simplified service view.

#### Content Direction

- Keep the newer design structure
- Replace broad “wide range of services” language
- Make the page feel like a focused offer page, not a general directory

#### Service Framing

**Primary framing**
- AI Product Studio

**Primary service lanes**
- AI Product Delivery
- SaaS MVP Delivery

**Secondary/supporting capabilities**
- workflow automation
- integrations
- document/data intelligence

Supporting capabilities may continue to exist in Sanity, but they should not be presented as equal top-level offers in the page hierarchy or headline messaging.

### How We Build SaaS `/how-we-build-saas`

This page remains the process and delivery trust page.

#### Purpose

Explain how SofGent moves from discovery through architecture, implementation, QA, release, and support.

#### Content Direction

- Keep process-oriented structure from the design branch
- Tie the whole page back to AI product delivery and SaaS readiness
- Emphasize architecture-first delivery, launch readiness, and production quality
- End with CTA into consultation or AI Product Studio

## Dynamic Content Scope

The following content should be dynamic and read from Sanity where applicable:

- services
- FAQs
- blogs
- case studies
- projects

## Content Strategy Rules

### Homepage

- Keep concise
- Avoid stacking too many dense content sections
- Use homepage to route buyers into the correct deeper page

### Service Messaging

- Do not lead with generic engineering capability lists
- Use simple business-friendly language
- Every primary section should help a buyer understand:
  - what SofGent builds
  - who it is for
  - what outcomes it supports

### Keywords to Retain

The merged content should preserve and combine relevant keywords from the current branch and design branch, but only in service of the approved positioning:

- AI product studio
- AI apps
- AI-powered software
- SaaS MVP delivery
- workflow automation
- document intelligence
- production-ready systems
- operations teams

## Branch Safety Requirement

Before implementation:

1. Checkout the current `main`
2. Create a backup branch from that exact state
3. Perform design/content integration work only after the backup branch exists

Recommended branch name:

- `backup/main-2026-06-17`

## Files/Areas Expected To Change

Likely implementation scope will include:

- homepage composition/content components
- add or restore `/ai-product-studio`
- `/services` top content and service hierarchy
- `/how-we-build-saas` content alignment
- Sanity-fed content plumbing for FAQs if not already fully connected
- page metadata and keywords for the revised positioning

## Success Criteria

The redesign is successful when:

1. The homepage clearly communicates that SofGent builds AI apps and AI-powered SaaS/internal tools
2. `/ai-product-studio` is the strongest and clearest offer page
3. `/services` supports the offer instead of diluting it
4. `/how-we-build-saas` strengthens trust and delivery credibility
5. Dynamic content for services, FAQs, blogs, case studies, and projects comes from Sanity
6. The overall public message feels narrower, clearer, and more conversion-focused than the current branch
