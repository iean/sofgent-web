# SofGent — Stage 0 Ship-Blocker Implementation Spec

Developer-ready handoff for the 9 Stage 0 tasks. Execute top-to-bottom. Each task has: priority, effort, file paths, proposed code, acceptance criteria, and a validation step.

---

## P0 — Execute today (30 minutes total)

These are trivial-effort, high-impact. Do them first.

### 1. Fix the Calendly mailto bug on `/contact`

- **File:** `app/(pages)/contact/page.tsx`
- **Effort:** 5 minutes
- **Severity:** Critical — the button labeled "Schedule directly on Calendly" currently opens the mail client.

**Proposed change (line 62–69 area):**

```tsx
// BEFORE
<Button
  btnText="Schedule directly on Calendly"
  href="mailto:support@sofgent.com?subject=Strategy%20Call%20with%20SofGent"
  external={true}
  variant="outline"
  className="w-full sm:w-auto border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
/>

// AFTER
<Button
  btnText="Schedule directly on Calendly"
  href="https://calendly.com/sofgent/product-audit" // confirm real slug
  external={true}
  variant="outline"
  className="w-full sm:w-auto border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
/>
```

**Acceptance criteria**
- Click opens Calendly in a new tab with a bookable event type.
- Link has `target="_blank"` and `rel="noopener noreferrer"` (verify inside `Button` component).
- Tested on desktop + mobile.

---

### 2. Audit every Book-a-Call CTA site-wide

- **Files to audit:**
  - `app/page.tsx` (hero, mid-page CTA, final CTA)
  - `app/components/Layout/Header/Header.tsx` (desktop + mobile Book a Call)
  - Any service detail pages
- **Effort:** 15 minutes
- **Method:** `grep -rn "calendly" app/` and verify each URL loads a real bookable event.

**Acceptance criteria**
- Single canonical Calendly URL used everywhere (e.g., `https://calendly.com/sofgent/product-audit`).
- Extract the URL to a constant in `lib/constants.ts` or `app/config.ts`:
  ```ts
  export const CALENDLY_URL = "https://calendly.com/sofgent/product-audit";
  ```
- Every CTA imports from that constant, not a hardcoded string.
- Zero `mailto:` links pretending to be booking CTAs.

---

### 3. Update `.env.example` with all runtime secrets

- **File:** `.env.example`
- **Effort:** 10 minutes
- **Problem:** Missing env vars will crash new deployments.

**Proposed additions (append to existing `.env.example`):**

```env
# Transactional email (contact form)
EMAIL_USER=
EMAIL_PASS=

# WhatsApp notification fan-out (optional)
WHATSAPP_NUMBER=
WHATSAPP_API_URL=

# Site origin — used by robots.ts, sitemap.ts, metadataBase
NEXT_PUBLIC_SITE_ORIGIN=https://sofgent.com

# Optional: Resend / Postmark migration
# RESEND_API_KEY=
# CONTACT_TO_EMAIL=support@sofgent.com
```

**Acceptance criteria**
- `diff` between `.env.example` and actual `.env` shows only secret values, not missing keys.
- `git log --all -- .env` shows `.env` was never committed. If it was, rotate every credential.
- `.gitignore` explicitly blocks `.env`, `.env.local`, `.env.*.local`.

---

## P1 — Day 1 focus (~6–8 hours combined)

### 4. Retire the duplicate hero — unify to one design system

- **Files involved:**
  - `app/page.tsx` (new cyan/slate homepage — **keep this direction**)
  - `app/components/home/hero/index.tsx` (old teal `#326d6d` hero — **retire**)
  - `app/components/home/HeroSlider.tsx`
  - `tailwind.config.ts`
- **Effort:** 3–4 hours
- **Problem:** Two competing design systems erode trust.

**Decision: keep the new cyan/slate homepage direction.** Old teal tokens must be retired.

**Migration steps**

1. **Search usage** of the old hero:
   ```bash
   grep -rn "components/home/hero" app/
   ```
   Check if any page imports it. If yes, migrate those pages to use the new homepage style.

2. **Delete** `app/components/home/hero/index.tsx` and `app/components/home/hero/HeroRight.tsx` after migration.

3. **Clean `tailwind.config.ts`** — retire old tokens:
   ```ts
   // REMOVE these from colors:
   brand: "#326d6d",
   secondary: "#53aa82",
   brandBorder: "#326d6d2a",

   // ADD a canonical token set:
   colors: {
     primary: {
       DEFAULT: "#06b6d4", // cyan-500
       foreground: "#020617", // slate-950
     },
     ink: "#020617",
     surface: "#f8fafc",
     muted: "#64748b",
   },
   ```

4. **Global find/replace** across `app/**/*.tsx`:
   - `bg-brand` → `bg-primary`
   - `text-brand` → `text-primary`
   - `border-brand` → `border-primary`
   - `shadow-business-red` → remove or rename

5. **Typography scale** — consolidate these custom sizes in `tailwind.config.ts` into `text-lg`, `text-xl`, etc. standards:
   ```ts
   // REMOVE: text-18, text-20, text-22, text-24, text-34, text-48, text-65, text-75, pone, ptwo
   // USE Tailwind defaults with tracking-tight and explicit sizes
   ```

**Acceptance criteria**
- `grep -rn "text-brand\|bg-brand\|#326d6d" app/` returns zero matches.
- Every page renders with cyan-500 as primary accent and slate-950 as ink.
- `app/components/home/hero` folder is deleted.
- No page renders with mixed palettes.

**Validation**
- Visual diff on `/`, `/services`, `/contact`, `/about` before/after screenshots.

---

### 5. Harden the contact API

- **File:** `app/api/contact/route.ts`
- **Effort:** 3–4 hours
- **Severity:** Security + spam protection. Cannot go live without this.

**Problems today**
- User input injected into email HTML (XSS into your own inbox; phishing lure risk).
- No rate limit → bot farms will burn the mailbox.
- No validation → malformed payloads cause 500s.
- Gmail SMTP → deliverability tanks at scale.

**Proposed architecture**

1. **Add Zod for validation.** Create `lib/schemas/contact.ts`:
   ```ts
   import { z } from "zod";

   export const DiscoverySchema = z.object({
     name: z.string().min(2).max(100),
     company: z.string().min(1).max(120),
     timeline: z.string().min(1).max(60),
     productIdea: z.string().min(10).max(4000),
     website: z.string().max(0).optional(), // honeypot — must be empty
   });

   export const LegacySchema = z.object({
     name: z.string().min(2).max(100),
     email: z.string().email(),
     phone: z.string().min(5).max(40),
     subject: z.string().min(1).max(160),
     message: z.string().min(10).max(4000),
     website: z.string().max(0).optional(), // honeypot
   });
   ```

2. **HTML-escape** every user-facing value. Add utility `lib/escape.ts`:
   ```ts
   export const escapeHtml = (s: string) =>
     s.replace(/[&<>"']/g, (c) => ({
       "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
     }[c]!));
   ```

3. **Add rate limiting** via Upstash Redis (cheapest path, serverless):
   ```ts
   // lib/ratelimit.ts
   import { Ratelimit } from "@upstash/ratelimit";
   import { Redis } from "@upstash/redis";

   export const ratelimit = new Ratelimit({
     redis: Redis.fromEnv(),
     limiter: Ratelimit.slidingWindow(5, "1 h"),
     analytics: true,
   });
   ```

4. **Route handler refactor (proposed sketch):**
   ```ts
   import { ratelimit } from "@/lib/ratelimit";
   import { escapeHtml } from "@/lib/escape";
   import { DiscoverySchema, LegacySchema } from "@/lib/schemas/contact";

   export async function POST(request: NextRequest) {
     const ip = request.headers.get("x-forwarded-for") ?? "anon";
     const { success } = await ratelimit.limit(`contact:${ip}`);
     if (!success) return NextResponse.json({ error: "Rate limited" }, { status: 429 });

     const body = await request.json();
     const parsed = DiscoverySchema.safeParse(body) .success
       ? DiscoverySchema.parse(body)
       : LegacySchema.parse(body);

     // honeypot already enforced by schema (website.max(0))

     // Escape every user value before interpolation
     const safe = Object.fromEntries(
       Object.entries(parsed).map(([k, v]) =>
         [k, typeof v === "string" ? escapeHtml(v) : v]
       )
     );

     // ...build normalized HTML using `safe` values...
   }
   ```

5. **Add honeypot field** to `app/components/contact/*.tsx`:
   ```tsx
   <input
     type="text"
     name="website"
     tabIndex={-1}
     autoComplete="off"
     className="absolute left-[-9999px] h-0 w-0"
     aria-hidden="true"
   />
   ```

6. **Also strongly recommended:** swap Gmail for Resend.
   ```bash
   npm install resend
   ```
   ```ts
   import { Resend } from "resend";
   const resend = new Resend(process.env.RESEND_API_KEY);
   await resend.emails.send({ from: "noreply@sofgent.com", to: "support@sofgent.com", ... });
   ```

**Acceptance criteria**
- Malformed payloads return `400` with a safe error message.
- Submitting with the honeypot filled returns `400` or silently succeeds without sending mail.
- 6th submission within an hour from the same IP returns `429`.
- Test payload containing `<script>alert(1)</script>` renders in the email as inert text.
- 500s no longer leak stack traces to clients.

**Validation**
- Curl test with injection payload → email inbox shows escaped, not executed HTML.
- Rapid-fire `for i in {1..10}; do curl …; done` → 6th request blocked.

---

## P2 — Day 2 focus (~3–4 hours combined)

### 6. OpenGraph + Twitter images + metadata

- **Files:**
  - `public/og/default.png` (1200×630, new file)
  - Optional: `public/og/home.png`, `public/og/services.png`, `public/og/contact.png`
  - `app/layout.tsx`
  - `app/data/meta.json`
- **Effort:** 2 hours (1h design, 1h code)

**Design spec for `default.png`**
- 1200 × 630 px, PNG, < 300 KB.
- Background: same slate-950 → slate-900 radial gradient as hero.
- Left: wordmark + tagline `Premium AI Product Studio`.
- Centered headline: `Ship your AI product in 2–4 weeks.`
- Right or bottom: 3 logo/chip row (fintech · legal · ops).
- Minimal grid pattern at 5% opacity for texture.
- Font: same DM Sans used on site.

**Metadata changes — proposed for `app/layout.tsx` `generateMetadata`:**

```ts
return {
  metadataBase: new URL(siteOrigin),
  title: { default: "SofGent", template: "%s | SofGent" },
  description: "Premium AI Product Studio. We ship production-ready AI products, SaaS MVPs, and document automation in 2–4 weeks.",
  openGraph: {
    type: "website",
    siteName: "SofGent",
    locale: "en_US",
    url: siteOrigin,
    title: "SofGent — Premium AI Product Studio",
    description: "Ship AI products in 2–4 weeks. No prototypes, no tech debt.",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "SofGent" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SofGent — Premium AI Product Studio",
    description: "Ship AI products in 2–4 weeks. No prototypes, no tech debt.",
    images: ["/og/default.png"],
    creator: "@sofgent", // if applicable
  },
  robots: previewDeployment ? { index: false, follow: false } : undefined,
};
```

**Acceptance criteria**
- LinkedIn Post Inspector shows correct image, title, description for `/`, `/services`, `/contact`.
- Twitter Card Validator shows `summary_large_image`.
- Slack unfurl matches.
- OG image file size < 300 KB.

---

### 7. Replace static sitemap.xml with `app/sitemap.ts`

- **Files:**
  - Delete: `public/sitemap.xml`
  - Create: `app/sitemap.ts`
- **Effort:** 1–2 hours

**Proposed `app/sitemap.ts` (spec):**

```ts
import type { MetadataRoute } from "next";
import { getSiteOriginFromEnv } from "@/lib/runtime/deployment";
// import { getAllBlogSlugs, getAllProjectSlugs } from "@/lib/sanity/queries";

const STATIC_ROUTES = [
  "/", "/services", "/ai-product-studio", "/how-we-build-saas",
  "/case-studies", "/projects", "/blog", "/about", "/contact",
  "/launch-your-mvp", "/services/ai-ready-data-engineering",
  "/services/document-intelligence-systems",
  "/privacy-policy", "/terms-conditions",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteOriginFromEnv();
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));

  // const blogSlugs = await getAllBlogSlugs();
  // const projectSlugs = await getAllProjectSlugs();
  // const dynamicEntries = [
  //   ...blogSlugs.map((s) => ({ url: `${base}/blog/${s}`, lastModified: now, priority: 0.5 })),
  //   ...projectSlugs.map((s) => ({ url: `${base}/projects/${s}`, lastModified: now, priority: 0.6 })),
  // ];

  return [...staticEntries /*, ...dynamicEntries */];
}
```

**Acceptance criteria**
- `https://sofgent.com/sitemap.xml` returns a generated XML with only real routes.
- No 404s when crawling every URL in it.
- Submitted to Google Search Console; status "success".
- `public/sitemap.xml` is deleted from the repo.

---

## P3 — Day 3 (launch readiness validation)

### 8. Uncomment and validate `production.yml` CI

- **File:** `.github/workflows/production.yml`
- **Effort:** 1 hour

**Proposed workflow (spec):**

```yaml
name: Vercel Production Deployment
on:
  push:
    branches: [main]
env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm install --global vercel@latest
      - run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}
      - run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}
      - run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
```

**Also recommended:** add a `preview.yml` that runs on PRs:

```yaml
name: Preview Deploy
on: pull_request
# ...same steps, drop --prod, output preview URL as PR comment
```

**Acceptance criteria**
- `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` set in repo Secrets.
- A test commit on `main` triggers a green deploy.
- A PR gets a preview URL auto-commented.

---

### 9. Lighthouse audit + fixes

- **Pages to test:** `/`, `/services`, `/contact` (mobile + desktop)
- **Effort:** 2–4 hours
- **Targets:** Performance ≥ 90, A11y ≥ 95, Best Practices ≥ 95, SEO ≥ 95

**Most likely findings + fixes**

| Issue | Fix |
|---|---|
| Large LCP on hero | Add `priority` prop to `next/image` for hero; preload font file |
| Gradient text contrast | Change `from-cyan-400 to-teal-200` to `from-cyan-300 to-cyan-500` |
| Body text too dim on dark hero | Replace `text-slate-400` with `text-slate-300` |
| Unused JS from `aos`, `parallax-js`, `tsparticles` | Remove from `package.json` |
| Missing alt text on images | Audit every `<Image>` and decorative SVG |
| Icons not marked decorative | Add `aria-hidden="true"` to purely-decorative `lucide-react` icons |
| Header scroll-based theme switch runs on every frame | Throttle with `requestAnimationFrame`; respect `prefers-reduced-motion` |
| Mobile nav lacks focus trap | Trap focus in open menu; close on `Escape` |
| Font-display on self-hosted fonts | Ensure `display: "swap"` in `app/fonts/fonts.ts` |

**Acceptance criteria**
- Lighthouse JSON export saved to `docs/lighthouse/` for each page.
- All four scores meet targets on mobile emulation.
- Re-run confirms green.

---

## Execution Order (recommended)

**Day 1 morning (30 min):** Tasks 1 → 2 → 3.
**Day 1 afternoon (4 h):** Task 4 (retire hero + token cleanup).
**Day 2 morning (4 h):** Task 5 (harden contact API).
**Day 2 afternoon (3 h):** Task 6 (OG image + metadata) + Task 7 (sitemap).
**Day 3 morning (1 h):** Task 8 (CI workflow).
**Day 3 afternoon (4 h):** Task 9 (Lighthouse sweep).
**Day 3 end:** Smoke test + green-light to move into Stage 1.

---

## Definition of "Stage 0 Complete"

- [ ] Every CTA goes to a real Calendly event. No `mailto:` disguises.
- [ ] `.env.example` is a complete, runnable template.
- [ ] Only one design system in the repo. `bg-brand`/`text-brand` gone.
- [ ] Contact API: validated, escaped, honeypotted, rate-limited.
- [ ] OG image renders correctly on LinkedIn and Twitter for 3 key pages.
- [ ] `/sitemap.xml` returns real routes only; no 404s.
- [ ] CI deploys on push to `main`; preview on PRs.
- [ ] Lighthouse green on `/`, `/services`, `/contact` (mobile).

Hit all 8 and Stage 1 (trust layer) is safe to start.

---

## What I Recommend Doing Now

1. Send this spec to the dev (or keep it for yourself if you're implementing).
2. Mark the 6 already-created ClickUp tasks with the matching priority (`Urgent`) and assign them to whoever's executing.
3. Import the remaining 38 tasks via the Excel file I generated earlier.
4. Start with tasks 1–3 (literally 30 minutes). Those three alone remove the most embarrassing trust-leaks on the site.
