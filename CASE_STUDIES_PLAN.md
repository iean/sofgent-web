# Case Studies — Architecture Plan & Implementation

**Goal:** turn `/case-studies` into a content-managed product showcase that
(1) reads from Sanity (`studio.sofgent.com`) when configured,
(2) falls back to a local JSON file for dev / preview,
(3) gives every case study its own detail page at `/case-studies/[slug]`,
(4) ships professional hero artwork + an architecture diagram per study, and
(5) follows the same pattern as the existing `blogPost` schema so projects + blogs + case studies share one mental model.

---

## 1. Architecture

```
┌──────────────── Sanity Studio (studio.sofgent.com) ────────────────┐
│  • caseStudy document (new)                                        │
│    - title, slug, client (optional), industry, summary             │
│    - hero image (with alt, hotspot)                                │
│    - architectureDiagram image (with alt)                          │
│    - metrics: array of { label, value, hint }                      │
│    - problem (portable text)                                       │
│    - approach (portable text)                                      │
│    - outcome (portable text)                                       │
│    - techStack: array of strings                                   │
│    - timeline: { duration, phases: [{ label, summary }] }          │
│    - featured (boolean) + publishedAt                              │
│    - seoTitle, seoDescription, ogImage                             │
└────────────────────────────┬───────────────────────────────────────┘
                             │ GROQ
                             ▼
┌────────────── lib/sanity/{queries,content,types}.ts ───────────────┐
│  CASE_STUDIES_QUERY       getCaseStudies()                         │
│  CASE_STUDY_QUERY         getCaseStudyBySlug(slug)                 │
│  CASE_STUDY_SLUGS_QUERY   getCaseStudySlugs()                      │
│                                                                    │
│  When isSanityConfigured === false → return null/[] so the page    │
│  layer can fall back to app/data/case-studies.json                 │
└────────────────────────────┬───────────────────────────────────────┘
                             │
                             ▼
┌─────────── app/(pages)/case-studies/page.tsx (archive) ────────────┐
│  Lists all case studies. Server component, revalidate: 60.         │
│  Source order: Sanity → local JSON → empty state.                  │
└────────────────────────────┬───────────────────────────────────────┘
                             ▼
┌──── app/(pages)/case-studies/[slug]/page.tsx (detail, NEW) ────────┐
│  Renders one study with sections:                                  │
│   1. Hero — title, summary, client/industry/duration, hero image   │
│   2. Outcome metrics strip (3-5 metrics)                           │
│   3. Architecture diagram (image OR fallback SVG)                  │
│   4. Problem / Approach / Outcome (portable text blocks)           │
│   5. Tech stack chip row                                           │
│   6. CTA — Calendly + /contact                                     │
│  Falls back to local JSON when Sanity not configured.              │
│  generateStaticParams() pulls all slugs (Sanity OR local).         │
│  generateMetadata() uses seoTitle/Description, ogImage.            │
└────────────────────────────────────────────────────────────────────┘
```

---

## 2. File deliverables

| Path | Purpose | Status |
|---|---|---|
| `studio-app/schemaTypes/documents/caseStudy.ts` | Sanity schema | NEW |
| `studio-app/schemaTypes/index.ts` | Register schema | EDIT (add `caseStudyType`) |
| `lib/sanity/types.ts` | `SanityCaseStudyListItem`, `SanityCaseStudy`, `SanityMetric` | EDIT |
| `lib/sanity/queries.ts` | 3 GROQ queries for case studies | EDIT |
| `lib/sanity/content.ts` | `getCaseStudies`, `getCaseStudyBySlug`, `getCaseStudySlugs` with Sanity → local fallback merge | EDIT |
| `app/data/case-studies.json` | Local fallback content for the 3 existing entries | NEW |
| `app/data/case-studies/types.ts` | TS types for the local JSON shape | NEW |
| `app/(pages)/case-studies/page.tsx` | Archive — refactor to use new fetcher | EDIT |
| `app/(pages)/case-studies/[slug]/page.tsx` | Detail page | NEW |
| `app/components/caseStudies/CaseStudyArchiveCard.tsx` | Card on `/case-studies` | NEW |
| `app/components/caseStudies/CaseStudyHero.tsx` | Detail hero | NEW |
| `app/components/caseStudies/CaseStudyMetrics.tsx` | Metrics strip | NEW |
| `app/components/caseStudies/CaseStudyArchitecture.tsx` | Architecture diagram (image or SVG fallback) | NEW |
| `app/components/caseStudies/CaseStudyBody.tsx` | Problem/Approach/Outcome | NEW |
| `app/components/caseStudies/CaseStudyTechStack.tsx` | Chip row | NEW |
| `app/sitemap.ts` | Add case-study slugs | EDIT (already async, just plug the helper) |

---

## 3. Image & visuals strategy

For each case study you need **two** image slots:
1. **Hero image** — represents the product. Today: reuse `/images/ai-product-studio/*.png`. Later: upload real product screenshots in Sanity.
2. **Architecture diagram** — a system-flow visual. Today: reuse `/images/ai-product-studio/hero-architecture.png` OR fall back to the in-app `ProcessPipelineIllustration` SVG. Later: upload custom diagrams (drawn in Excalidraw/Mermaid → exported PNG).

The detail page accepts either:
- `architectureImage` from Sanity → `<Image src={...} />`
- OR `architectureSvg: "process-pipeline"` → renders the existing illustration

This dual mode means the page never shows a dashed placeholder.

---

## 4. Migration path (projects → case studies)

The existing `/projects` page uses `app/data/projects/projects.json`. Three of those four projects are already shown as featured case studies. Plan:

- **Now (this commit):** keep both routes. `/case-studies` reads from the new `case-studies.json`. `/projects` keeps reading `projects.json`. Some duplication is acceptable for one or two weeks.
- **Sprint +1:** migrate `projects.json` content into Sanity as `caseStudy` documents. Decide whether `/projects` should redirect to `/case-studies` or keep showing a tighter "all-work" view.
- **Sprint +2:** delete `projects.json` and the `/projects` data layer if `/case-studies` becomes the single source.

---

## 5. SEO & sitemap

- Each detail page has `generateMetadata({ params })` that reads `seoTitle`, `seoDescription`, and `ogImage` from the case study (or falls back to the global meta).
- `app/sitemap.ts` calls `getCaseStudySlugs()` and emits `/case-studies/<slug>` entries with `priority: 0.7`.
- Each page exports JSON-LD `Article` or `CreativeWork` schema for SERP rich results (deferred to next sprint).

---

## 6. Acceptance criteria

- [ ] `/case-studies` lists 3 cards with real hero images (not dashed boxes).
- [ ] Clicking a card navigates to `/case-studies/<slug>` and renders all 6 sections.
- [ ] When `isSanityConfigured === false`, both pages still render (from local JSON).
- [ ] When Sanity is configured + has documents, Sanity content takes precedence.
- [ ] `app/sitemap.ts` returns `/case-studies/<slug>` URLs.
- [ ] Each detail page has unique `<title>` and OG image.
- [ ] Visiting `/case-studies/invalid-slug` renders the branded 404.
- [ ] `npm run build` passes.

---

## 7. What ships in this commit

I'm shipping the **wiring + foundation**:
- Sanity schema (registered)
- Types + queries + content fetcher (with fallback merge)
- Local fallback JSON with 3 study entries based on existing project data
- Detail page (new)
- Archive page (refactored)
- 6 detail-page components
- Sitemap hook

I am **not** generating new artwork — all images reuse existing `/images/ai-product-studio/*` assets via per-study mapping. Replace with Sanity uploads or `/public/images/case-studies/<slug>/` PNGs once produced.

You'll deploy Sanity Studio, add the schema, and start authoring at `studio.sofgent.com`. The fallback ensures nothing breaks before that.
