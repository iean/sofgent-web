# SofGent Website — Content Audit Report

**Date:** 28 July 2026 · **Branch:** `codex/design-modernization` · **Method:** App run locally (`next start`, production build), all routes fetched and rendered content analyzed.

---

## 1. App health check

Every route returns **200** and renders correctly:

| Route | Status | Route | Status |
|---|---|---|---|
| `/` (home) | ✅ 200 | `/projects` + 4 detail pages | ✅ 200 |
| `/services` | ✅ 200 | `/blog` + article page | ✅ 200 |
| `/about` | ✅ 200 | `/contact` | ✅ 200 |
| `/how-we-build-saas` | ✅ 200 | `/ai-product-studio` | ✅ 200 |
| `/privacy-policy`, `/terms-conditions`, `/custom-software`, `/product-development`, 5× `/services/*` | ✅ 200 | | |

No broken internal links found. The app is technically ready to deploy.

---

## 2. Critical content issues (fix before launch)

### C1. Timeline claim is inconsistent — "2–4 weeks" vs "4–6 weeks" vs "four weeks"
- Brand positioning (project instructions): **2–4 weeks**
- Home, services, footer, pricing, FAQ: **4–6 weeks** (used ~15 times)
- How-We-Build page: headline says **"Four weeks, end to end"** but then describes **Week 1 → Week 6**
- **Decision needed:** pick ONE number and use it everywhere. This is your core promise — it cannot contradict itself.

### C2. Services taxonomy is fractured — 3 different service lists on the site
- **Home pillars:** AI Product & MVP Dev · AI Document Automation · AI Integration & Automation (+3 "foundation" services)
- **Services page catalog:** AI Knowledge Base · OCR Document Automation · AI Knowledge & Quality Platform · AI Employee Onboarding · AI-Enabled Custom CRM
- **Footer:** repeats the 5-product catalog, not the 3 pillars
- A visitor coming from the home page cannot find "AI Document Automation" or "AI Integration" on the services page. Pick one taxonomy (recommend: 3 pillars as services, 5 products as a "Solutions" sub-section) and align home, services, footer, and nav.

### C3. Service detail pages: URL / title / content all disagree
| Card title | URL slug | Page `<title>` |
|---|---|---|
| AI Knowledge Base | `/services/saas-micro-saas-solutions` | "Cloud based saas Company" |
| AI-Enabled Custom CRM | `/services/custom-software-development` | "Custom Software Development Services" |
| AI Knowledge & Quality Platform | `/services/advanced-ai-solutions` | "Advanced AI solutions company" |
| AI Employee Onboarding | `/services/system-integration` | "System Integration management system" |
| OCR Document Automation | `/services/document-intelligence-systems` | "SofGent — AI Product Studio" (generic) |

Old-taxonomy slugs and metadata under new-taxonomy content. Bad for SEO and trust. Either rename slugs (+ redirects) or restore matching titles/meta.

### C4. Unverifiable case studies with hard numbers
Home features 3 anonymous case studies with precise claims: "3x faster knowledge retrieval", "55% faster ops handling", "78% less manual document work" — no client names. `/ai-product-studio` also links a "staffing SaaS case study". After the effort spent purging fabricated content, these need verification: **are these real past projects?** If yes, add at least anonymized context ("UK fintech", "80-person logistics firm"). If not, remove — one fabricated metric can undo all the honest-proof positioning.

### C5. Overclaims that can't survive scrutiny
- **"100% test coverage"** (services page, twice) — almost never literally true; a CTO will discount everything else after reading it. Suggest "Full test suite: unit, integration, E2E."
- **">98% field-level accuracy"** — fine only if you can back it with at least one real pipeline.
- **"0 critical launch bugs across every project"** — currently means "across 2 projects." Defensible, but consider phrasing that doesn't invite the question.

### C6. Announcement bar is off-brand
"Welcome to SofGent — Build and Launch Your SaaS MVP. Fast, Scalable, Production-Ready." — generic, "Welcome to" is filler, and it leads with SaaS MVP instead of AI Product Studio. Replace with an outcome line + link, e.g. "Most AI projects die in pilot. We ship to production in N weeks → Book a call."

### C7. Legacy page titles (SEO metadata not updated with redesign)
- About: "Trusted Custom Software Partner" (old positioning)
- Blog: "Tech Insights & Software Trends Blog"
- Contact: "Start Your AI Driven Solutions" (awkward)
- Home: "AI Product Studio **for Operations Teams**" — narrower than the actual audience (founders + CTOs + ops)

---

## 3. High-priority gaps (the Qtec lesson: proof infrastructure)

### H1. Zero testimonials anywhere
No named quote on any page. Qtec has photo + name + company quotes. One real quote from Heart & Haven or Solidarity Center beats every design improvement on the list. (The "no fabricated quotes" rule was correctly followed — the gap is getting a real one.)

### H2. Only 2 named projects, one of them thin
Solidarity Center card has no outcome, no metric, no link ("Live · In production" only, while Heart & Haven gets a live URL). Add its URL if public, or one concrete outcome. The promised **2nd UK client** is still absent ("Coming soon" placeholder on /projects).

### H3. Blog has exactly 1 article
Category filters display "Case Study 0 · Guide 0 · Insight 0" — advertising emptiness. Hide zero-count filters and publish 2–3 pieces (the case studies from C4, written up properly, are the fastest wins — if real).

### H4. Duplicate page: `/services` vs `/ai-product-studio`
Same hero, same copy, same sections for the first half. Two URLs competing for the same keywords. Merge or clearly differentiate (e.g. ai-product-studio → deep-dive landing page, services → catalog).

### H5. About page has no people
"Senior builders, end to end" with 4 role cards, no names, no photos. For a services business this is a trust gap (Qtec has team + CEO pages). Real names + photos, even just the founder.

### H6. Orphan legacy pages still live
`/custom-software` and `/product-development` are linked from home but carry old positioning. Update or 301 them.

---

## 4. Medium priority (polish + conversion)

- **M1. Newsletter form** (blog) — verify it's wired to anything; remove if not.
- **M2. Fictional model name** in home/ai-studio code snippet: `claude-opus-4-8`. Use a real model string.
- **M3. Contact phone** is BD (+880) while brand targets UK/US clients — fine, but add "UK + US clients served" context near it (about page already has this; contact doesn't).
- **M4. Book-a-call CTA** goes to `/contact` form. Qtec links Calendly directly — one less step. Consider Calendly (or keep form; but then "Book a call" and "Request my scoped plan" should be one consistent promise).
- **M5. CTA label consistency:** "Book a Call" / "Book a Free Call" / "Book a free call" / "Get a Free Consultation" variants — standardize.
- **M6. Footer** lacks physical location; a city line adds legitimacy (Qtec shows full address).
- **M7. "GPT-5" and "Claude AI"** naming — fine, but keep model references generic ("Claude, GPT, custom models") so copy doesn't age.

---

## 5. What's already strong (keep)

- Problem-led hero ("Most AI projects die in pilot") — better than Qtec's generic "Software solutions that move you forward"
- Transparent pricing bands (from $4k / $12k / custom) — Qtec has nothing like it
- Zero-critical-bug guarantee + 30-day support — distinctive, concrete
- Comparison table (SofGent vs cheap-&-fast vs in-house) — strong CTO-facing content
- Persona section (Founders / CTOs / Ops) matches the target audience exactly
- Contact form qualifies leads (need + budget) — better than Qtec's generic form
- FAQ answers real objections in plain language
- No fabricated logos/testimonials — honest baseline to build on

---

## 6. Prioritized task list

**Blockers (before merge to main)**
1. Decide the delivery-time claim (2–4 vs 4–6 weeks) → apply everywhere (C1)
2. Fix "Four weeks, end to end" vs 6-week timeline on How-We-Build (C1)
3. Verify or remove the 3 anonymous case studies + staffing case study (C4)
4. Unify services taxonomy across home / services / footer (C2)
5. Fix service detail slugs + titles/meta (C3)
6. Rewrite announcement bar (C6)
7. Update legacy page titles: about, blog, contact, home (C7)
8. Soften "100% test coverage" (C5)

**Week 1 after launch (needs your input)**
9. Get 1 real testimonial (name + role) from Heart & Haven or Solidarity Center (H1)
10. Add Solidarity Center outcome/URL; get 2nd UK client details (H2)
11. Real founder/team names + photos on About (H5)
12. Merge or differentiate /services vs /ai-product-studio (H4)
13. Update or redirect /custom-software and /product-development (H6)

**Month 1**
14. Publish 2–3 blog posts / written-up case studies; hide zero-count filters (H3)
15. Wire or remove newsletter (M1)
16. Standardize CTA labels; consider direct Calendly (M4, M5)
17. Google Business profile + first client reviews (Qtec-style footer badge)
18. Add Heart & Haven + Solidarity Center to Sanity; restore CMS-driven projects page
