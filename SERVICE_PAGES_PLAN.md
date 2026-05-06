# Detailed Service Pages — Architecture Plan & Implementation

**Gap (from `Sofgent Website content comparison.pdf`):** the new site only has high-level service summaries. The old site had separate, deeply-detailed service pages for AI, DevOps, Testing, Integration, Custom Software, SaaS, etc. — each ranking for its own keyword cluster ("Custom SaaS development company", "AI solutions Bangladesh", etc.).

**Goal:** restore that depth without re-building eight bespoke React pages. Define **one structured `Service` content type**, **one reusable `ServicePage` component**, and **drive both from Sanity (with local JSON fallback)** so non-developers can edit copy at studio.sofgent.com.

---

## 1. Inventory — what exists today

| Source | Status |
|---|---|
| `app/data/services/*.md` (8 markdown files: custom-software, .NET/Angular, SaaS, DevOps, AI, Testing, Integration, Maintenance) | LEGACY — rendered via `markdown-to-jsx` inside `[slug]/page.tsx`. Shallow markup, no SEO, no FAQs per service, no proper hero. |
| `/services/ai-ready-data-engineering/page.tsx` | RICH — handcrafted React-component pages (Hero/Problem/Process/Deliverables/UseCases/WhySofGent/CTA). Pattern is correct but bespoke per service. |
| `/services/document-intelligence-systems/page.tsx` | RICH — same as above. |
| `app/(pages)/services/page.tsx` | Archive: shows 3 hardcoded service tiers + 2 specialized pages. Doesn't surface the full inventory. |
| `app/content/shared/faqs.json` | 15 FAQ entries, all under `section: "services"`. Not service-specific yet. |
| `lib/sanity/queries.ts` `FAQS_QUERY` | Filters by `section` — already supports per-service FAQs once we create per-service sections. |

---

## 2. Target architecture

```
┌──────────── Sanity (studio.sofgent.com) ───────────────┐
│  service document (NEW)                                │
│  - title, slug, category                               │
│  - tagline, summary                                    │
│  - heroImage                                           │
│  - keywords[] (SEO)                                    │
│  - industries[]                                        │
│  - problem: portable text                              │
│  - approach.steps: array of {title, body}              │
│  - deliverables: array of strings                      │
│  - techStack: array of strings                         │
│  - whyChooseUs: array of {icon, title, body}           │
│  - useCases: array of {title, body, outcome}           │
│  - pricing: {from, model, note} (optional)             │
│  - relatedFaqSection (string, e.g. "service:devops")   │
│  - seoTitle, seoDescription, ogImage                   │
│  - featured (boolean), order                           │
└─────────────────────────┬──────────────────────────────┘
                          │
                          ▼
┌─── lib/sanity/{queries,content,types}.ts ─────────────┐
│  SERVICES_QUERY, SERVICE_QUERY, SERVICE_SLUGS_QUERY    │
│  getServices(), getServiceBySlug(), getServiceSlugs()  │
│  Same Sanity-first → local-fallback merge as the       │
│  case-studies module.                                  │
└─────────────────────────┬──────────────────────────────┘
                          │
                          ▼
┌─── ServicePage composer (new) ─────────────────────────┐
│  app/components/services/detail/ServicePage.tsx        │
│  Renders sections in order:                            │
│   1. ServiceHero         (eyebrow + headline + meta)   │
│   2. ServiceTrustBar     (industries + outcome chips)  │
│   3. ServiceProblem      (the pain we address)         │
│   4. ServiceApproach     (4-step delivery)             │
│   5. ServiceDeliverables (what gets shipped)           │
│   6. ServiceUseCases     (3-4 use cases w/ outcome)    │
│   7. ServiceTechStack    (chip row)                    │
│   8. ServiceWhyChooseUs  (4 pillars)                   │
│   9. ServicePricing      (optional)                    │
│  10. ServiceFAQ          (per-service FAQ from CMS)    │
│  11. ServiceCTA          (Calendly + /contact)         │
└─────────────────────────┬──────────────────────────────┘
                          │
        ┌─────────────────┴────────────────┐
        ▼                                  ▼
/services (archive grid)          /services/[slug] (detail)
   reads getServices()              reads getServiceBySlug()
   shows every service              renders ServicePage
                                    with notFound() guard
```

---

## 3. Files this commit creates / changes

### Sanity studio
- `studio-app/schemaTypes/documents/service.ts` — new schema
- `studio-app/schemaTypes/index.ts` — register

### Web — data layer
- `lib/sanity/types.ts` — `SanityService`, `SanityServiceListItem`, `SanityApproachStep`, `SanityUseCase`, `SanityWhyChoosePillar`, `SanityPricing`
- `lib/sanity/queries.ts` — three queries
- `lib/sanity/content.ts` — `getServices`, `getServiceBySlug`, `getServiceSlugs`, `getServiceFaqs(slug)`
- `app/data/services/services.json` — 6 fully-seeded services
- `app/data/services/types.ts` — local fallback types
- `app/content/shared/faqs.json` — extend with per-service FAQ sections (`service:custom-software`, `service:saas`, etc.)
- `app/utils/getServicesMeta.ts` — refactor to read from the new data layer (keeps backward compatibility with consumers)

### Web — components (new directory)
- `app/components/services/detail/ServicePage.tsx`
- `app/components/services/detail/ServiceHero.tsx`
- `app/components/services/detail/ServiceTrustBar.tsx`
- `app/components/services/detail/ServiceProblem.tsx`
- `app/components/services/detail/ServiceApproach.tsx`
- `app/components/services/detail/ServiceDeliverables.tsx`
- `app/components/services/detail/ServiceUseCases.tsx`
- `app/components/services/detail/ServiceTechStack.tsx`
- `app/components/services/detail/ServiceWhyChooseUs.tsx`
- `app/components/services/detail/ServicePricing.tsx`
- `app/components/services/detail/ServiceFAQ.tsx`
- `app/components/services/detail/ServiceCTA.tsx`

### Web — pages
- `app/(pages)/services/[slug]/page.tsx` — replace markdown renderer with `ServicePage`
- `app/(pages)/services/page.tsx` — refactor archive to list every service from the inventory

### Sitemap
- `app/sitemap.ts` — add service slugs

---

## 4. Service inventory (6 seeded + 2 existing)

| Slug | Title | Category | Target keyword |
|---|---|---|---|
| `custom-software-development` | Custom Software Development | SaaS / Engineering | "Custom software development company" |
| `saas-mvp-development` | SaaS & Micro-SaaS MVP Development | SaaS | "Custom SaaS development company Bangladesh" |
| `ai-solutions` | AI Solutions & LLM Integration | AI | "AI solutions Bangladesh" |
| `devops-continuous-delivery` | DevOps & Continuous Delivery | DevOps | "DevOps services" |
| `software-testing-qa` | Software Testing & QA Automation | QA | "QA automation services" |
| `system-integration` | System Integration & API Development | Integration | "system integration services" |
| `ai-ready-data-engineering` (existing) | AI-Ready Data Engineering | AI | already live |
| `document-intelligence-systems` (existing) | Document Intelligence Systems | AI | already live |

The two existing pages keep their bespoke implementations for now, but I add their entries to the inventory so the archive grid is complete. Migrating them into the structured `ServicePage` format is a follow-up task.

---

## 5. SEO + per-service FAQ

Each service gets:
- **Page metadata** with `seoTitle`, `seoDescription`, `ogImage` per service.
- **JSON-LD `Service` schema** in the page (deferred to next sprint).
- **Per-service FAQs** by tagging FAQs with `section: "service:<slug>"`. The `ServiceFAQ` component falls back to the generic `services` section when no service-specific FAQs exist.

---

## 6. Acceptance criteria

- [ ] `/services` lists every service in the inventory (no broken cards).
- [ ] `/services/<slug>` for any seeded slug renders 11 sections.
- [ ] Visiting `/services/invalid` returns the branded 404.
- [ ] Each detail page has a unique `<title>` and OG image.
- [ ] Each detail page surfaces FAQs (per-service if defined, else fallback).
- [ ] When `isSanityConfigured === false`, every page still renders from local JSON.
- [ ] `app/sitemap.ts` includes all service slugs.
- [ ] `npm run build` passes.

---

## 7. What ships in this commit

- Sanity `service` schema (registered)
- Local `services.json` seeded with the 6 new services (full content: hero, problem, approach, deliverables, tech, why, use cases, FAQs)
- `lib/sanity/{types,queries,content}.ts` extended
- 12 new components under `app/components/services/detail/`
- `[slug]/page.tsx` rewritten to use `ServicePage`
- `/services` archive refactored to render from the inventory
- Sitemap wired

Imagery uses the existing `/images/services/*.webp` and `/images/ai-product-studio/*.png` libraries until you upload bespoke artwork in Sanity.
