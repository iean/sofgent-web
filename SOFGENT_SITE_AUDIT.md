# SofGent Website — Production Readiness & Conversion Audit

Senior-designer + conversion-copy + SaaS-UX review of `sofgent-web` (Next.js 14 / App Router / Tailwind).
Scored on: **conversion impact**, **design quality**, **trust & authority**, **technical readiness**.

---

## 1. Executive Summary

The site has the right bones — Next.js 14 App Router, Tailwind, Keystatic + Sanity, Calendly, GTM, a proper contact API, per-route metadata, a Vercel preview/robots strategy. The new cyan/slate "Premium AI Product Studio" visual direction on `app/page.tsx` is strong.

But it is **not production-ready** yet. Four things are holding it back:

1. **Two competing design systems** live side by side (old teal `#326d6d` "brand" tokens + new cyan/slate gradient system). The homepage uses the new one; `components/home/hero` and many sub-pages still use the old one. Visitors will perceive inconsistency = lower trust.
2. **Messaging is not tight enough for a $50K+ studio.** Hero ("Build your AI product in 2–4 weeks") is good but lacks a sharper value anchor, quantified social proof, and a "who this is for" that filters in the right leads.
3. **Zero real social proof.** No logos, no metrics ("X docs processed", "Y hours saved"), no named case study, no testimonials, no team faces. You cannot sell $50K engagements without trust artifacts.
4. **Deployment + SEO gaps.** GitHub Actions workflow is fully commented out, OpenGraph/Twitter images are missing, sitemap is hand-written and stale, contact API has HTML-injection risk, there is no `.env.production` documentation, and there is no rate limiting or CAPTCHA on the form.

Below is the prioritized path to ship.

---

## 2. Priority 0 — Ship-blockers (do before deploying)

### 2.1 Unify the design system
- Homepage (`app/page.tsx`) uses **cyan/slate premium tokens**.
- `app/components/home/hero/index.tsx` still uses the **old teal brand** (`bg-brand`, `text-brand`, "growing companies" voice) — and it's imported by several pages.
- Decide one direction (recommend: keep the new cyan/slate homepage look) and retire the old hero + teal accents. Update `tailwind.config.ts` to a single token set: `primary` (cyan-500), `accent` (teal-400), `ink` (slate-950), `surface` (slate-50), `muted` (slate-600).

### 2.2 Fix broken / misleading CTAs
- `app/(pages)/contact/page.tsx` has a "**Schedule directly on Calendly**" button whose `href` is actually a `mailto:` — this breaks trust on the most important page. Point it to your real Calendly URL.
- Homepage and header link to `https://calendly.com/sofgent` — verify this URL resolves. If the workspace has `/sofgent/strategy-call` or similar, update every CTA.

### 2.3 Harden the contact API
- `app/api/contact/route.ts` interpolates raw form fields directly into HTML email bodies — HTML injection into your own inbox, and a vector for phishing lures targeting support@sofgent.com. Escape user input (or switch to a templating lib that escapes by default) and/or send as plain text.
- There is **no rate limiting, no honeypot, no CAPTCHA**. A bot farm will cost you email reputation and noise. Add an Upstash rate limiter or a hidden honeypot field (cheapest win).
- `nodemailer` over Gmail is fine for now, but production should use a transactional provider (Resend, Postmark, SES) so deliverability doesn't tank when volume grows.

### 2.4 Wire up the deployment workflow
- `.github/workflows/production.yml` is entirely commented out. Either uncomment and validate the Vercel secrets, or delete it to avoid confusion. Recommend uncommenting, pinning `actions/checkout@v4`, and adding a preview job on PRs.

### 2.5 Add OpenGraph + Twitter images
- `app/layout.tsx` `generateMetadata` has no `openGraph` or `twitter` block and no `og-image`. Shares to LinkedIn / X / Slack will render a broken unfurl — death for a B2B studio.
- Ship `public/og/default.png` (1200×630), `public/og/home.png`, `public/og/services.png`. Add `openGraph` + `twitter: { card: "summary_large_image" }` to root metadata and to each page's `meta.json`.

### 2.6 Environment + secrets hygiene
- `.env` and `.env.local` are tracked locally (visible in `ls`). Confirm they're in `.gitignore` (they are) **and** not in git history (`git log --all -- .env`). Rotate anything that has leaked.
- `.env.example` is missing `EMAIL_USER`, `EMAIL_PASS`, `WHATSAPP_NUMBER`, `WHATSAPP_API_URL`, `NEXT_PUBLIC_SITE_ORIGIN`. Add them so new envs don't break on deploy.

---

## 3. Priority 1 — Conversion & messaging (biggest ROI)

### 3.1 Rewrite the hero for a $50K+ buyer
**Current:** *"Build your AI product in 2–4 weeks. From idea to production-ready system."*
Good pace, but generic. A fintech CTO can't tell who this is for.

**Recommended pattern (pick one):**
- *"Ship the AI product your roadmap has been stuck on — in 2–4 weeks."*
  Sub: *"We build production-grade AI document automation, SaaS MVPs, and internal tools for fintech, legal, and ops teams. No prototypes. No tech debt."*
- *"From PDF chaos to structured data in 14 days."* (for document-intelligence pitch)
- *"Your AI backlog, delivered in one sprint."* (for CTO buyer)

Add a **single-line qualifier line under the sub**: *"Built for teams shipping to real customers, not demos."*

### 3.2 Add real social proof directly under the hero
A studio selling at $50K+ must show at least one of these **above the fold or immediately after**:
- **Client logo strip** (4–6 logos in grayscale; greyed is fine if NDA).
- **Outcome metrics row**: `1.2M docs processed · 80% manual work removed · 4 AI products in prod · 2–4 week avg delivery`.
- **Named case study card** with a real founder/CTO quote and a face.
- **Team credibility**: "Ex-[Google/Stripe/fintech] engineers" or "Led by Masud Alam — [X years] shipping AI systems."

Without any of these, the hero promises are unfalsifiable. Add a dedicated `<SocialProof />` component that renders between hero and services.

### 3.3 Tighten the Services section
Current "Expertise matching your ambitions" is copy you'd find on 400 agency sites. Rewrite as **outcomes**, not capabilities:
- "Turn 1,000 PDFs into structured data in one sprint." (Document Intelligence)
- "Ship a revenue-ready SaaS MVP in 30 days." (MVP)
- "Make your legacy data AI-ready without a 6-month data project." (Data Engineering)

Each card should answer the two UX rules from the project brief: *Why should I trust you?* (proof chip) and *What do I get?* (deliverables + timeline).

### 3.4 Replace "Have a use case in mind?" mid-page CTA
Weak. Use a **specificity CTA**: *"Book a 20-minute product audit"* → Calendly. "Free Strategy Call" is overused; "Product audit" or "Architecture review" sounds more senior and converts higher with CTOs.

### 3.5 Final CTA section needs a secondary action
Right now it's one button. B2B visitors not ready to book need a softer exit:
- Primary: `Book a Product Audit`
- Secondary: `Download: How We Build AI Products in 2–4 Weeks (PDF)` → lead capture.
This doubles lead capture on high-intent scroll-throughs.

### 3.6 Add an FAQ section on the home page
CTOs and founders won't book without resolving: pricing range, team size, IP ownership, what "production-ready" means to you, stack opinions, how you handle scope creep. 6–8 short FAQs. This alone lifts demo bookings materially.

### 3.7 Kill "agency" language
Scan the site for and remove: "solutions", "empowering", "cutting-edge", "transform your business". Replace with concrete deliverables and timeframes. The project brief already says this — enforce it everywhere.

---

## 4. Priority 2 — Design polish (make it feel $50K+)

### 4.1 Typography hierarchy
- Homepage uses `text-[64px]` / `text-[72px]` for the hero — good. But body uses four sizes (`text-xl`, `text-2xl`, `text-base`, `text-lg`) within the same block. Standardize: **Display / H1 / H2 / H3 / Body / Caption / Eyebrow** — 7 total. Enforce via a `prose` or custom utility.
- `tailwind.config.ts` has an oddly specific scale (`text-18`, `text-65`, `text-75` etc.) that looks inherited from a template. Retire these for a clean type system based on `tracking-tight` display sizes.

### 4.2 Spacing rhythm
Most sections are `py-24 md:py-32` — good. But the "Why SofGent" card and the "Outcome strip" break rhythm inside the same section. Split into real `<section>` blocks so each has its own breathing room and is individually trackable in analytics.

### 4.3 Rounded corner consistency
The file uses `rounded-[2rem]`, `rounded-[2.5rem]`, `rounded-[3rem]`, `rounded-2xl`, `rounded-xl`, `rounded-[14px]`, `rounded-[16px]`, `rounded-[18px]`, `rounded-[20px]`, `rounded-[24px]`, `rounded-[28px]` — **11 different radii**. Stripe/Linear use 2–3. Standardize to: `--r-sm: 12px / --r-md: 20px / --r-lg: 32px`.

### 4.4 Color token discipline
- Tailwind config still has `brand: #326d6d` but homepage uses `cyan-500` everywhere. Header dynamically detects bg color to flip theme — clever but fragile. Replace dynamic luminance detection (`app/components/Layout/Header/Header.tsx` lines 18–58) with a simple `data-theme="dark"` attribute on `<section>` that the header reads via `IntersectionObserver`. Faster and deterministic.
- Add **2 accent hues max**: cyan (primary glow) and emerald or violet (for "success"/"outcome" chips). Right now you have amber, cyan, teal, purple, emerald, and slate on a single strip.

### 4.5 Motion
No animation library is actively used (`aos` and `tsparticles` are in deps but not applied on the new home). Add either Framer Motion section reveals (tasteful — 8px translate + fade on scroll) or delete the unused deps to cut ~150KB. Pick one.

### 4.6 Hero illustration / right column
`HeroSlider` is referenced — confirm it ships a crisp architecture-diagram-style visual (not stock photography). If it's a generic carousel, replace with a **single static product mockup** (Linear/Stripe playbook) — a dashboard screenshot of an actual SofGent-built product. If you can't show real product screens, build a stylized architecture diagram SVG (API → model → vector DB → UI). Avoid carousels on hero — they hurt LCP and conversion.

### 4.7 Header polish
- Nav has 9 items — too many. Consolidate to 5: **Services · Work · Process · About · Contact**. Move "AI Studio / MVP Launch / How We Build" under a "Services" mega-menu dropdown.
- The "Book a Call" button in the mobile menu uses `#12324a` (hardcoded) instead of a token — unify.
- Logo mark is 180×44 — fine, but ensure `<Image priority>` on the header logo so LCP isn't blocked.

---

## 5. Priority 3 — Technical production-readiness

### 5.1 SEO
- **Sitemap is a static XML file** (`public/sitemap.xml`) with URLs that won't exist (e.g., `/services/custom-software-development`, `/services/advanced-ai-solutions`). This will 404 and hurt SEO. Replace with `app/sitemap.ts` that generates from your real routes + Sanity blog/project slugs.
- `robots.ts` is good — keep.
- Add `app/not-found.tsx` branded 404.
- Add JSON-LD `Organization` + `WebSite` + `Service` schema to `layout.tsx` and the service pages.
- `metadataBase` is good. Ensure `NEXT_PUBLIC_SITE_ORIGIN` is set in Vercel prod.

### 5.2 Performance
- `HeroSlider` is a client component on the landing — likely the LCP element. Audit that it's not pulling in a heavy carousel lib. Use `next/image` with `priority` for the hero visual.
- Fonts: `dmSans` + `rubik` are loaded from `app/fonts/fonts.ts` (good, self-hosted) but confirm `display: "swap"` and `preload: true` for the primary.
- Remove `aos`, `parallax-js`, `tsparticles` if unused.
- Run `next build` and inspect first-load JS for the home route — target < 120KB.
- Images: `next.config.mjs` allows `images.unsplash.com` — fine for blog, but **don't ship Unsplash photos on money pages**. Replace with commissioned or generated product artwork.

### 5.3 Accessibility (WCAG 2.1 AA gaps visible in review)
- Hero gradient text `from-cyan-400 to-teal-200` on `slate-950` — the teal-200 end has low contrast. Tighten to `cyan-300` → `cyan-500` gradient.
- `text-slate-400` on dark hero for body copy is borderline. Use `text-slate-300` for paragraphs.
- Several decorative icons lack `aria-hidden`. Audit all `lucide-react` usages.
- Header's scroll-based theme switch calls `setTimeout` + scroll listener — ensure it doesn't re-render on every scroll frame; throttle it. Also add `prefers-reduced-motion` guard.
- Mobile nav has 72px header — tap targets are fine, but the open `<ul>` doesn't trap focus. Add focus trap + ESC close.
- All images need alt text; verify `HeroSlider` images do.

### 5.4 Analytics
- GTM is installed at `GTM-55XXD48D`. Good. Ensure:
  - A `conversion` event fires on: Book-a-Call click, Contact form submit, CTA clicks.
  - A `lead` trigger is wired to Google Ads / LinkedIn if you run paid.
  - Consent: you need a cookie banner if any EU traffic (GDPR). None found.

### 5.5 Contact API production concerns
Already covered in §2.3. Add also:
- Log submissions to a DB (Supabase / Planetscale) so leads survive if email fails.
- Send an auto-reply to the submitter with next steps — sets expectations, feels premium.
- Add Zod validation on the payload.

### 5.6 CMS / content
Repo has **both** `sanity/` and `keystatic.config.ts`. Pick one. Running two CMSes in prod is a long-term maintenance tax.

### 5.7 Monitoring
- No Sentry, no LogRocket, no Vercel Analytics enabled. Add `@vercel/analytics` and `@vercel/speed-insights` at minimum, Sentry ideally.
- Add a `/health` route for uptime monitoring if you plan to embed products at `app.sofgent.com` later.

### 5.8 Legal
- `privacy-policy` and `terms-conditions` pages exist — good. Verify they match your data collection (GTM, contact form, email). Add a Cookie Policy if GTM fires non-essential tags.

---

## 6. Priority 4 — Strategic additions (next sprint)

- **Case Studies page**: one flagship case study with the structure *Problem → Architecture → Outcome → Timeline → Tech*. This is the single highest-trust asset a studio can own.
- **Pricing transparency**: at least a range ("Engagements start at $X"). Scares off tire-kickers, attracts serious buyers.
- **Process page**: "How We Build" exists — upgrade it to a visual Gantt-style 2–4 week breakdown with actual daily milestones.
- **Lead magnet**: a PDF "AI Product Readiness Checklist" gated behind email. Feeds your list.
- **Booking flow**: move from plain Calendly link to an embedded Calendly widget on `/book`. Reduces drop-off.
- **Blog**: currently wired through Sanity — publish 1 pillar article per service ("How we built X for Y in 3 weeks") and link from service pages.

---

## 7. Prioritized Action List (in order)

1. Fix Calendly button on `/contact` (mailto → real URL).
2. Pick one hero (retire `components/home/hero` or rewrite homepage to use it).
3. Add `openGraph` + `twitter` + `og-image.png` to `layout.tsx` metadata.
4. Escape user input in `app/api/contact/route.ts`; add honeypot + rate limit.
5. Replace static `public/sitemap.xml` with `app/sitemap.ts`.
6. Uncomment & validate `.github/workflows/production.yml`.
7. Update `.env.example` with every runtime secret.
8. Add social-proof strip (logos OR metrics OR testimonial) directly under hero.
9. Rewrite hero sub + 3 service cards as outcome statements.
10. Collapse nav from 9 items to 5 + mega-menu.
11. Unify color tokens + radii in `tailwind.config.ts`.
12. Add FAQ + secondary CTA on homepage.
13. Drop `aos` / `parallax-js` / unused deps; measure bundle.
14. Pick Sanity **or** Keystatic; remove the other.
15. Add `@vercel/analytics`, `@vercel/speed-insights`, Sentry.
16. Add `not-found.tsx`, Organization JSON-LD, auto-reply email.
17. Replace Unsplash imagery on money pages with real product visuals.
18. Draft one flagship case study with metrics.

---

## 8. Definition of "Production-Ready"

You can call this site production-ready when **all of these are true**:

- [ ] One consistent visual language across every page
- [ ] Hero shows a quantified promise + 1 piece of social proof in the first viewport
- [ ] Every CTA goes to a working Calendly / form / page (no mailto pretending to be Calendly)
- [ ] OG/Twitter share cards render on LinkedIn + X
- [ ] Contact API has input escaping, rate limit, and auto-reply
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95 on home + /services + /contact (mobile)
- [ ] CI on PRs + auto-deploy on main (Vercel)
- [ ] Monitoring: Vercel Analytics + Sentry wired
- [ ] Sitemap is generated, robots.ts respects preview, JSON-LD renders
- [ ] At least one real case study with a client name or outcome metric
- [ ] Cookie banner if you serve EU traffic, or geoblock opt-in

Hit those and you've moved from "nice studio site" to "a site that actually converts $50K engagements."
