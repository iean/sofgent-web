# Services Sanity Placement Matrix

This document defines exactly how each `service` document should be configured in Sanity for the `/services` page.

## How to use this

- In Sanity Studio, open each `service` document.
- Find `Services page placements`.
- Add the placement rows listed below.
- If a service appears in both sections, add **two** placement rows.

## Section values

- `primary` = main “Full service range” catalog
- `legacy` = “Additional services” catalog

## Tag values

Only used for `primary` placements:

- `Core`
- `Add-on`
- `Standalone`

## Graphic values

Allowed values:

- `mvp`
- `document-automation`
- `data`
- `integration`
- `design`
- `devops`
- `web`
- `mobile`
- `qa`
- `architecture`
- `ai-feature`

## Service matrix

### `saas-micro-saas-solutions`

**Placement 1**
- `section`: `primary`
- `tag`: `Core`
- `graphic`: `mvp`
- `order`: `1`
- `title`: `AI SaaS MVP Development`
- `description`: `From scoped idea to deployed product in 4–6 weeks. Full stack — architecture, AI layer, UI. Fixed price, you own the code.`

**Placement 2**
- `section`: `legacy`
- `graphic`: `mvp`
- `order`: `3`
- `title`: `Custom SaaS & Micro SaaS Solutions`
- `description`: `Tailored SaaS and Micro SaaS solutions.`

### `document-intelligence-systems`

**Placement 1**
- `section`: `primary`
- `tag`: `Core`
- `graphic`: `document-automation`
- `order`: `2`
- `title`: `AI Document Automation`
- `description`: `Turn invoices, contracts, and reports into structured data. OCR, extraction, validation, and routing — end to end.`

### `ai-ready-data-engineering`

**Placement 1**
- `section`: `primary`
- `tag`: `Core`
- `graphic`: `data`
- `order`: `3`
- `title`: `AI-Ready Data Infrastructure`
- `description`: `Clean, label, and structure your data for AI. ETL pipelines, schema design, vector search, and RAG infrastructure.`

### `system-integration`

**Placement 1**
- `section`: `primary`
- `tag`: `Add-on`
- `graphic`: `integration`
- `order`: `4`
- `title`: `AI Integration & APIs`
- `description`: `Connect OpenAI, Anthropic, or custom models to your existing systems via clean, versioned, documented APIs.`

**Placement 2**
- `section`: `legacy`
- `graphic`: `integration`
- `order`: `7`
- `title`: `System Integration`
- `description`: `Connecting different systems so data flows reliably without manual handoffs or re-entry.`

### `product-design-ux`

**Placement 1**
- `section`: `primary`
- `tag`: `Add-on`
- `graphic`: `design`
- `order`: `5`
- `title`: `Product Design & UX`
- `description`: `Interface design that converts — from wireframes to pixel-perfect, accessible components. Design system + handoff.`

### `devops-deployment-continuous-delivery`

**Placement 1**
- `section`: `primary`
- `tag`: `Add-on`
- `graphic`: `devops`
- `order`: `6`
- `title`: `DevOps & Infrastructure`
- `description`: `CI/CD pipelines, containerised cloud architecture, monitoring, and production alerting from day one.`

**Placement 2**
- `section`: `legacy`
- `graphic`: `devops`
- `order`: `4`
- `title`: `DevOps Services`
- `description`: `Streamlining software releases, delivery pipelines, cloud deployment, and operations.`

### `web-application-development`

**Placement 1**
- `section`: `primary`
- `tag`: `Standalone`
- `graphic`: `web`
- `order`: `7`
- `title`: `Web Application Development`
- `description`: `Full-stack web apps on Next.js, React, and Node. Scalable architecture, SEO-ready, production-hardened.`

### `mobile-app-development`

**Placement 1**
- `section`: `primary`
- `tag`: `Standalone`
- `graphic`: `mobile`
- `order`: `8`
- `title`: `Mobile App Development`
- `description`: `Cross-platform mobile apps (React Native) with native-feel performance. App Store and Play Store submission included.`

### `software-testing`

**Placement 1**
- `section`: `primary`
- `tag`: `Standalone`
- `graphic`: `qa`
- `order`: `9`
- `title`: `QA & Testing`
- `description`: `Manual and automated coverage — unit, integration, E2E, and load testing — run every sprint before anything ships.`

**Placement 2**
- `section`: `legacy`
- `graphic`: `qa`
- `order`: `6`
- `title`: `Software Testing`
- `description`: `Validates functionality, reliability, performance, and security before software reaches users.`

### `custom-software-development`

**Placement 1**
- `section`: `legacy`
- `graphic`: `web`
- `order`: `1`
- `title`: `Custom Software Development`
- `description`: `Tailored software development services for specific business workflows and operational needs.`

### `net-core-api-clean-architecture-design-services`

**Placement 1**
- `section`: `legacy`
- `graphic`: `integration`
- `order`: `2`
- `title`: `.NET and Angular development`
- `description`: `.NET Core API solutions using clean architecture for maintainable, scalable systems.`

### `advanced-ai-solutions`

**Placement 1**
- `section`: `legacy`
- `graphic`: `data`
- `order`: `5`
- `title`: `AI Advanced Services`
- `description`: `Unlock innovation with AI solutions including automation, LLM workflows, and enterprise AI use cases.`

### `system-maintenance`

**Placement 1**
- `section`: `legacy`
- `graphic`: `devops`
- `order`: `8`
- `title`: `System Maintenance`
- `description`: `Ensuring delivered systems stay stable, updated, secure, and operational over time.`

## Recommended entry order

For the cleanest editor workflow, populate these in this order:

1. `custom-software-development`
2. `net-core-api-clean-architecture-design-services`
3. `saas-micro-saas-solutions`
4. `devops-deployment-continuous-delivery`
5. `advanced-ai-solutions`
6. `software-testing`
7. `system-integration`
8. `system-maintenance`
9. `document-intelligence-systems`
10. `ai-ready-data-engineering`
11. `product-design-ux`
12. `web-application-development`
13. `mobile-app-development`

## Notes

- The frontend already has code-level defaults, so the page works even before Sanity is fully populated.
- Once these placements are added in Sanity, the `/services` page will use the Sanity values instead of relying on fallback mapping.
- If you want to rename a card only on the services index, use the placement-level `title` and `description` overrides rather than changing the service detail page title.
