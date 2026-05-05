# SofGent — Client-Hunting Ready Checklist

"Client-hunting ready" = the site **generates qualified leads on its own** and **closes** a stranger who found it on Google, LinkedIn, or cold outreach. Everything below is written for that goal.

Work top to bottom. Don't skip ahead. Stages 1–3 are required to launch; 4–5 are how you fill the pipeline.

---

## Stage 0 — Ship Blockers (1 day)

You cannot send a single outreach email until these are done. Each one actively destroys trust.

- [ ] **Fix the broken Calendly button on `/contact`** — it currently opens a `mailto:` instead of Calendly.
- [ ] **Decide & retire the old hero.** Either delete `app/components/home/hero/index.tsx` or migrate every page to the new cyan/slate style from `app/page.tsx`. No mixed design.
- [ ] **Harden the contact API** (`app/api/contact/route.ts`):
  - Escape form input before inserting into email HTML.
  - Add a honeypot field (hidden input) and a simple rate limit (per IP, 5/hour).
  - Add Zod validation for payload.
- [ ] **Add OpenGraph + Twitter share images.** Ship `public/og/default.png` (1200×630). Wire it in `app/layout.tsx` metadata. Test unfurl on LinkedIn, Slack, and X.
- [ ] **Verify all CTAs resolve.** Every "Book a Call" button → real Calendly URL, not placeholder.
- [ ] **Uncomment `.github/workflows/production.yml`** or delete it. No half-configured CI.
- [ ] **Update `.env.example`** with every runtime secret (EMAIL_USER, EMAIL_PASS, WHATSAPP_NUMBER, NEXT_PUBLIC_SITE_ORIGIN). New environments must boot cleanly.
- [ ] **Replace `public/sitemap.xml`** with a generated `app/sitemap.ts` that reflects real routes.
- [ ] **Run `next build` and Lighthouse** on `/`, `/services`, `/contact`. Targets: Perf ≥ 90, A11y ≥ 95, SEO ≥ 95 (mobile).

**Exit criteria:** every button works, no broken unfurls, form can't be spammed.

---

## Stage 1 — Trust Layer (2–3 days)

Cold visitors decide in ~8 seconds whether you're a real studio or a solo dev with a template. Give them evidence.

- [ ] **Hero above-the-fold must show at minimum one trust artifact:**
  - Client logos (4–6, greyscale, even if NDA-anonymized as "Fintech · Series A")
  - OR a metric strip: `"1.2M docs processed · 80% manual work removed · 4 products in prod"`
  - OR a named testimonial pull-quote with a face and title.
- [ ] **Build one flagship case study** at `/case-studies/[slug]`. Structure:
  1. Client (real name if allowed, industry + size if not)
  2. Problem (1 paragraph)
  3. Architecture diagram (SVG, not stock)
  4. Outcome with 3 metrics
  5. Timeline (days not months)
  6. Tech stack
  7. Quote from their CTO/founder
- [ ] **Add a team section** on `/about` with real faces, real titles, and real LinkedIn links. "Led by Masud Alam — [X years shipping AI systems at Y]." One real face beats ten stock icons.
- [ ] **Publish an honest pricing range.** Even a single line: *"Engagements start at $15K. Typical AI product builds: $25K–$60K."* This filters out tire-kickers and signals confidence.
- [ ] **Replace every Unsplash image** on the home, services, and case-study pages with product screenshots or custom SVG diagrams. Unsplash on a $50K studio site screams "template."

**Exit criteria:** a cold CTO can land on the site and within 15 seconds see proof you've shipped something real.

---

## Stage 2 — Conversion Layer (2–3 days)

Trust gets them to read. Conversion gets them to book.

- [ ] **Rewrite the hero as an outcome, not a service.**
  - Current: *"Build your AI product in 2–4 weeks."*
  - Better: *"Ship the AI product your roadmap has been stuck on — in 2–4 weeks."*
  - Sub: *"Production-grade AI document automation, SaaS MVPs, and internal tools for fintech, legal, and ops teams. No prototypes. No tech debt."*
- [ ] **Rename the primary CTA.**
  - Weak: "Book a Free Strategy Call"
  - Strong: "**Book a 20-min Product Audit**" (feels senior, outcome-specific, converts better with CTOs)
- [ ] **Add a secondary CTA for non-ready buyers.** A lead magnet: *"Get the SofGent AI Product Readiness Checklist (PDF)"* → email capture. Not-ready-today becomes your email list.
- [ ] **Rewrite the 3 service cards as outcomes:**
  - "Turn 1,000 PDFs into structured data in one sprint." (Document Intelligence)
  - "Ship a revenue-ready SaaS MVP in 30 days." (MVP)
  - "Make legacy data AI-ready without a 6-month project." (Data Engineering)
  - Each card gets: timeline · deliverables · proof chip.
- [ ] **Add an FAQ section** on the home page. 6–8 short answers:
  - What does production-ready mean?
  - How much does an engagement cost?
  - What's the team size?
  - Who owns the IP?
  - What if we don't have clean data?
  - What happens after launch?
  - Do you sign NDAs?
  - Which industries have you shipped for?
- [ ] **Embed Calendly directly** on a `/book` page (not just a link). Reduce clicks from homepage → meeting to 2.
- [ ] **Auto-reply email.** When someone submits the contact form, they get a branded email within 60 seconds:
  - Confirms receipt
  - Sets expectation (e.g., "we reply within 1 business day")
  - Includes the lead-magnet PDF + a direct Calendly link as a backup path.

**Exit criteria:** you can drive 100 visitors to the site and expect at least 2–3 booked calls or captured emails.

---

## Stage 3 — Launch Readiness (1 day)

The boring but essential layer.

- [ ] Enable `@vercel/analytics` and `@vercel/speed-insights`.
- [ ] Wire Sentry for error tracking.
- [ ] Add conversion events in GTM for: Book-a-Call click, Form submit, Lead-magnet download.
- [ ] Add `Organization` + `Service` + `WebSite` JSON-LD schema to `app/layout.tsx`.
- [ ] Ship a branded `app/not-found.tsx` 404 page with a CTA back to `/services`.
- [ ] Add a cookie consent banner if serving EU traffic.
- [ ] Pick Sanity OR Keystatic — remove the other. Two CMSes is a trust smell to technical buyers who see the repo.
- [ ] Smoke test on mobile Safari, mobile Chrome, iPad, desktop Chrome, desktop Safari.
- [ ] Invite 3 external people (ideal-customer profiles) to do a 5-minute think-aloud test. Fix the top 3 things they stumble on.

**Exit criteria:** you can send the URL to a founder you respect and not feel nervous.

---

## Stage 4 — Inbound Engine (2 weeks, parallel to outreach)

Now make the site *find* clients instead of waiting for them.

- [ ] **Write 4 pillar articles** — one per service + one flagship:
  - "How we built a 10K-page document intelligence pipeline in 18 days"
  - "The 2-week AI MVP playbook for non-technical founders"
  - "How to make your legacy data AI-ready in 30 days"
  - "Why most AI prototypes never reach production (and how to fix it)"
  - Each article: 1,500–2,500 words, one real diagram, one real code snippet, a CTA to book.
- [ ] **Target one keyword cluster per article.** Use Ahrefs or a free tool like Google Keyword Planner. Aim for realistic long-tail terms, e.g., "document intelligence pipeline architecture."
- [ ] **Publish case study PDFs** — gated, email-required. Downloadable PDFs get reshared inside prospect companies.
- [ ] **Add comparison pages**: "SofGent vs Generic Dev Shop", "SofGent vs Hiring In-House AI Team". These convert mid-funnel buyers.
- [ ] **Set up a LinkedIn auto-reshare** for every new article (Buffer / Taplio / manual).
- [ ] **Guest-post twice** on fintech/SME/ops-leader publications where your buyers read. Backlink to `/case-studies` for SEO.

**Exit criteria:** at least 3 articles ranking in Google's top 30 for their keyword within 60 days.

---

## Stage 5 — Outbound Ammunition (ongoing)

Your site is now also your outbound toolkit.

- [ ] **Loom-style explainer video** on the homepage hero (15–30s). "Hi, I'm Masud. Here's what SofGent builds." Faces + real voice = 2–3× conversion.
- [ ] **One-page PDF sales sheet** ("SofGent Capabilities — Q2 2026") to attach in cold emails. Must mirror site branding.
- [ ] **LinkedIn cover image + pinned post** pointing to the flagship case study.
- [ ] **Cold-email template library** (3 variants: founder, CTO, ops-lead). Each ends with: "Here's a 90-second case study of how we solved this: [link]."
- [ ] **Referral asset**: a single Notion / landing page you can send to past clients with a shareable pitch + a Calendly.
- [ ] **Retargeting pixels** (Meta + LinkedIn Insight Tag) on the homepage, so visitors who don't book can be re-reached with a 3-ad sequence: case study → testimonial → "last call" offer.

**Exit criteria:** every cold outreach message has a specific, impressive asset on the site to link to.

---

## Weekly Client-Hunting Rhythm

Once the site is live, do this every week. The site is only an asset if you push traffic at it.

- **Monday** — Publish 1 LinkedIn post (tied to a case study or pillar article).
- **Tuesday** — Send 20 cold emails to ICP prospects (link a relevant case study, not the homepage).
- **Wednesday** — Reply to every LinkedIn comment + DM.
- **Thursday** — Send a weekly email to your list (1 insight + 1 link to new content).
- **Friday** — Review analytics: which pages converted, where visitors dropped off. Fix the #1 leak.

---

## KPIs (track these in a spreadsheet from day 1)

| Metric | Target by Day 30 | Target by Day 90 |
|---|---|---|
| Homepage → Book-a-Call conversion rate | 1.5% | 3%+ |
| Lead-magnet email captures / week | 10 | 40+ |
| Booked calls / week | 1 | 4–6 |
| Qualified proposals sent / month | 2 | 6+ |
| Signed engagements / month | 0–1 | 1–2 |
| Avg deal size | — | $30K+ |

If you hit these, the site is doing its job and you can scale paid + content.

---

## One-Line Summary

**Stage 0–3 is a ~1-week sprint that turns this from "portfolio site" into "lead machine." Stages 4–5 are where you go from 1 client a quarter to 1 client a month.**

Start at Stage 0 tomorrow. Don't touch Stage 4 until the site proves it can convert a cold visitor.
