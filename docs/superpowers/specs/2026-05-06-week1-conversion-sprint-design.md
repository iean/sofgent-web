# SofGent Week 1 Conversion Sprint Design

## Goal

Turn the current SofGent website into a stronger lead-generation site for an AI Product Studio by improving:

- homepage positioning
- homepage conversion flow
- trust and authority sections
- service page depth and technical credibility
- CTA repetition and intake paths
- quantified proof and case-study presentation

The primary outcome is more qualified consultation requests from founders, operators, and teams looking for AI implementation, SaaS MVP delivery, workflow automation, and internal system modernization.

## Core Narrative

The entire site will align around one message:

> SofGent builds AI-powered SaaS products, automation systems, and internal business tools fast.

This narrative needs to communicate, within the first screen:

- speed of execution
- production-grade engineering quality
- AI capability tied to real workflows
- architecture-first delivery
- business outcomes rather than generic software output

## Scope

### In Scope

- homepage redesign in [app/page.tsx](/Volumes/Code/sofgent/sofgent-web/app/page.tsx)
- shared homepage section components under [app/components/home](/Volumes/Code/sofgent/sofgent-web/app/components/home)
- shared CTA and conversion improvements in header/footer/layout where needed
- deep service-page redesign using the existing dynamic service system:
  - [app/(pages)/services/page.tsx](/Volumes/Code/sofgent/sofgent-web/app/(pages)/services/page.tsx)
  - [app/(pages)/services/[slug]/page.tsx](/Volumes/Code/sofgent/sofgent-web/app/(pages)/services/[slug]/page.tsx)
  - [app/components/services/detail](/Volumes/Code/sofgent/sofgent-web/app/components/services/detail)
- service copy structure and supporting content in:
  - [app/data/services/services.json](/Volumes/Code/sofgent/sofgent-web/app/data/services/services.json)
  - [app/content/shared/faqs.json](/Volumes/Code/sofgent/sofgent-web/app/content/shared/faqs.json)
- homepage SEO/structured data improvements
- stronger lead capture surfaces using existing contact + booking flow + Tawk

### Out of Scope for Week 1

- full rewrite of blog architecture
- full rewrite of about/contact/case-studies pages beyond sections needed for homepage linking and messaging continuity
- new CMS schema families outside the existing service/case-study/blog model
- advanced analytics/event instrumentation beyond code-ready CTA placement

## Existing Constraints

- The app already uses the App Router and Tailwind.
- Framer Motion is not installed today. Week 1 may either:
  - add `framer-motion`, or
  - use restrained CSS/JS motion if adding the dependency creates churn.

Recommendation: add `framer-motion` only if it materially improves the homepage/process animations. Otherwise keep animation quality high with CSS and small client-side transitions.

- Tawk is now the primary chat surface.
- WhatsApp should not return.
- Service pages are already CMS-driven and should stay that way.

## Conversion Strategy

### Primary Conversion Action

Every major page should push two actions:

1. `Book Free Consultation` (primary)
2. `Send Project Details` / contact intake (secondary)

### Funnel Logic

#### Homepage

- attract with a sharp positioning promise
- qualify with quantified outcomes and technical trust
- prove capability with premium case studies
- reduce risk with delivery process and engineering philosophy
- convert with repeated consultation + intake CTAs

#### Service Pages

- attract with a service-specific outcome promise
- diagnose the business/operational problem
- prove technical depth with architecture/process detail
- show quantified or sanitized outcomes
- close with dual CTA paths

## Homepage Information Architecture

The homepage should be rebuilt into this order:

### 1. Hero

Purpose:

- communicate SofGent’s positioning in one screen
- push immediate booking
- show trust signals without forcing a scroll

Content:

- headline:
  - `Build Production-Ready AI Products in Weeks`
  - or equivalent final copy with stronger conversion testing tone
- subheadline:
  - outcomes-driven, not agency-sounding
- primary CTA:
  - `Book Free Consultation`
- secondary CTA:
  - `View Case Studies`
- trust indicators:
  - AI Integrations
  - SaaS Architecture
  - Multi-Tenant Systems
  - Enterprise Workflows
  - Fast MVP Delivery

Visual direction:

- premium dark/light contrast
- strong typography
- cleaner enterprise product composition
- less generic “studio wallpaper”, more intentional system/architecture visual support

### 2. Proof Strip

Purpose:

- immediately shift from claims to business proof

Content:

- 3 to 5 quantified highlights such as:
  - MVP shipped in 4 weeks
  - document processing time reduced by 78%
  - multi-tenant platforms launched with enterprise-ready architecture
  - manual workflow reduction by 60%+

### 3. Core Capabilities

Purpose:

- clarify what SofGent actually sells

Structure:

- 4 to 6 high-value capability cards:
  - AI implementation
  - SaaS MVP development
  - workflow automation
  - internal business systems
  - AI document systems
  - enterprise modernization / integrations

Each card should emphasize:

- business problem
- system type
- delivery value

### 4. Premium Case Study Section

Purpose:

- establish authority with concrete outcomes

Cards:

1. AI Knowledge Platform
2. Fintech & Payment Integration System
3. AI Document Automation Platform

Each card should include:

- challenge
- solution
- technologies
- measurable outcomes
- architecture highlight

Visual treatment:

- premium card system
- stronger hierarchy than current blog/project cards
- outcome chips or metric badges
- clear click-through to `/case-studies`

### 5. Team / Studio Authority Section

Purpose:

- build trust without making the brand founder-centric

Messaging:

- `Built by a team with deep product engineering, architecture, and AI systems experience`
- company-first language
- emphasize:
  - architecture-led delivery
  - senior engineering judgment
  - systems built for production

### 6. Engineering Philosophy

Purpose:

- separate SofGent from generic outsourcing shops

Pillars:

- architecture first
- AI-native where it creates leverage
- fast iteration without fragile builds
- business systems over vanity features

### 7. Delivery Process Timeline

Purpose:

- reduce buyer anxiety and clarify engagement model

Stages:

1. Discovery & Strategy
2. Architecture & Planning
3. Sprint-Based Development
4. Weekly Demos & Iteration
5. Deployment & Scaling
6. Support & Optimization

Needs:

- modern timeline UI
- clear step outputs
- visible pace and accountability

### 8. Consultation / Lead Magnet Band

Purpose:

- capture visitors who need one more prompt after trust is built

Possible angle:

- `Get a free AI workflow audit`
- `Get a 20-minute architecture review`

### 9. Final CTA / Intake Close

Purpose:

- last push to schedule or submit project details

## Service Page Design

Service pages should become deeper architecture/process pages, not lightweight sales blurbs.

### Service Page Structure

1. Hero
2. Outcome / trust strip
3. Business problem section
4. Architecture highlights section
5. Delivery process section
6. Deliverables
7. Use cases / ideal fit
8. Technical stack
9. Risk reduction / why SofGent
10. Pricing / engagement model
11. FAQ
12. Final CTA
13. Sticky booking CTA

### New/Expanded Service Sections

The current service pages already have:

- hero
- trust bar
- problem
- approach
- deliverables
- use cases
- tech stack
- why choose us
- pricing
- FAQ
- CTA
- sticky CTA

Week 1 should expand them with stronger conversion and technical depth:

#### Architecture Highlights

Add a reusable section that explains:

- system patterns
- multi-tenant / security / data / integration concerns
- why the delivery is built this way

This is especially important for:

- AI solutions
- SaaS MVP development
- AI-ready data engineering
- document intelligence systems
- integration-heavy services

#### Quantified Outcomes

Each service should show:

- example business results
- implementation speed
- operational improvement
- reduced manual effort / faster launch / lower risk

#### Stronger Fit Qualification

Clarify who the service is for:

- founder-led MVP
- modernization team
- AI ops automation buyer
- document-heavy operations team

### Service Page CTA Model

Every service page should repeat both:

- `Book Free Consultation`
- `Send Project Details`

The booking CTA is primary.
The detailed intake is secondary.

## Shared UX / Conversion Improvements

### Header

- stronger CTA label consistency
- ensure booking CTA remains visually dominant
- reduce navigation ambiguity

### Footer

- keep it cleaner and more conversion-aware
- service links should reinforce real offers

### Chat

- Tawk remains the live chat channel
- no WhatsApp duplication

### Sticky CTA

- keep sticky CTA on service pages
- consider homepage sticky CTA only if it does not feel aggressive on mobile

## SEO / Technical Improvements

Week 1 should ensure:

- stronger homepage metadata
- stronger service page metadata
- OG consistency
- semantic heading order
- homepage structured data
  - Organization
  - ProfessionalService or SoftwareApplication/Service-style schema where appropriate
- accessible CTA labels
- image usage that keeps layout stable

Already present and should be preserved:

- sitemap
- robots
- App Router metadata support

## File-Level Design Plan

### Homepage

Modify:

- [app/page.tsx](/Volumes/Code/sofgent/sofgent-web/app/page.tsx)

Create / refactor under:

- [app/components/home](/Volumes/Code/sofgent/sofgent-web/app/components/home)

Likely new component families:

- `home/HeroConversion.tsx`
- `home/TrustMetrics.tsx`
- `home/CaseStudyPreview.tsx`
- `home/StudioAuthority.tsx`
- `home/EngineeringPhilosophy.tsx`
- `home/DeliveryTimeline.tsx`
- `home/LeadCaptureBand.tsx`

### Service Pages

Modify:

- [app/components/services/detail/ServicePage.tsx](/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServicePage.tsx)
- [app/components/services/detail/ServiceHero.tsx](/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceHero.tsx)
- [app/components/services/detail/ServiceTrustBar.tsx](/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceTrustBar.tsx)
- [app/components/services/detail/ServiceApproach.tsx](/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceApproach.tsx)
- [app/components/services/detail/ServiceWhyChooseUs.tsx](/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceWhyChooseUs.tsx)
- [app/components/services/detail/ServiceCTA.tsx](/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceCTA.tsx)
- [app/components/services/detail/StickyServiceCta.tsx](/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/StickyServiceCta.tsx)

Potential new component:

- `ServiceArchitectureHighlights.tsx`
- `ServiceProofMetrics.tsx`
- `ServiceIdealFit.tsx`

### Content Layer

Modify:

- [app/data/services/services.json](/Volumes/Code/sofgent/sofgent-web/app/data/services/services.json)
- [app/content/shared/faqs.json](/Volumes/Code/sofgent/sofgent-web/app/content/shared/faqs.json)

Possible enhancement:

- extend service content model only if needed for architecture/proof sections

### Shared Shell / SEO

Modify as needed:

- [app/layout.tsx](/Volumes/Code/sofgent/sofgent-web/app/layout.tsx)
- [app/components/Layout/Header/Header.tsx](/Volumes/Code/sofgent/sofgent-web/app/components/Layout/Header/Header.tsx)
- [app/components/Layout/Footer/Footer.tsx](/Volumes/Code/sofgent/sofgent-web/app/components/Layout/Footer/Footer.tsx)

## Success Criteria

The redesign is successful if the site now clearly communicates:

- what SofGent builds
- who it is for
- why SofGent is credible
- how engagements work
- what outcomes buyers can expect
- what action visitors should take next

And if a first-time visitor can reach a high-confidence next step within:

- 10 seconds on the homepage
- 30–60 seconds on a service page

## Risks

### Risk: Overbuilding the homepage

Mitigation:

- prioritize conversion hierarchy over adding every possible section

### Risk: Service pages become too long and technical

Mitigation:

- keep copy dense but scannable
- use section hierarchy, metric cards, and diagrams

### Risk: Messaging sounds like generic AI marketing

Mitigation:

- tie every claim to systems, outcomes, architecture, or delivery speed

## Recommendation

Proceed with:

- a conversion-first homepage rewrite
- deeper architecture-driven service pages
- stronger case-study proof
- repeated booking + intake CTAs

Do not attempt a full-site rewrite during this sprint.
