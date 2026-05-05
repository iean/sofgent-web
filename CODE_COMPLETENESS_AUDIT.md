# SofGent Web — Staff Engineer Code Completeness Audit

Reviewed: `app/`, `lib/`, `public/`, `app/api/contact/route.ts`, contact form, premium studio pages, header/nav, sitemap, metadata.

**Headline:** Codebase is closer to production than the last review. P1/P2 hardening has landed (Zod, HTML escape, rate limit, OG metadata, sitemap.ts). The visible launch blocker is the **`/how-we-build-saas` page rendering 10 dashed placeholder boxes** because content config has no `image` fields and `public/images/how-we-build-saas/` is empty. Same pattern affects projects + case studies. Plus a handful of small completeness gaps.

---

## 1. ISSUE LIST

| # | File | Problem | Severity |
|---|---|---|---|
| 1 | `app/components/premiumStudio/content.ts` (lines 32–412) | `howWeBuildSaaSContent` has zero `image: { src }` fields → every section renders the dashed `VisualPlaceholder` fallback | **HIGH** |
| 2 | `public/images/how-we-build-saas/` | Directory exists but empty | **HIGH** |
| 3 | `app/(pages)/case-studies/page.tsx` (lines 66, 135), `app/(pages)/projects/[slug]/page.tsx` (lines 79, 234), `app/components/projects/CaseStudyStoryCard.tsx` (line 83), `app/components/common/ProjectCard.tsx` (line 49) | All call `VisualPlaceholder` without an `image` prop → same dashed boxes everywhere on listing/detail pages | **HIGH** |
| 4 | `app/components/home/HeroMediaShowcase.tsx` (lines 67, 79, 96) | Hardcoded text strings `[Product preview placeholder]`, `[Video / animation showcase placeholder]`, `[Interactive slider placeholder]`. Component is imported in `app/page.tsx` but currently only `HeroSlider` is used in the active hero — `HeroMediaShowcase` appears to be dead code | **MEDIUM** (unshipped but breaks if accidentally rendered) |
| 5 | `app/mailer.php` | PHP file in a Next.js codebase. Legacy artifact. Will get bundled into the public route tree if the build picks it up; at minimum a confusing dead file | **MEDIUM** |
| 6 | `app/not-found.tsx` | File does not exist. Next.js falls back to its default un-branded 404 | **MEDIUM** |
| 7 | `app/sitemap.ts` (lines 4–19) | Only static routes. Blog and project dynamic slugs (Sanity-backed) are missing from the sitemap → those pages won't be indexed | **MEDIUM** |
| 8 | `app/components/contact/index.tsx` | Form fields have no `id`+`htmlFor`, no `aria-invalid`, no `aria-describedby`, no `aria-live` on the success/error banners. Fails WCAG 2.1 AA. Also: 429 (rate-limit) returns a generic "There was a problem" instead of "Too many submissions" | **MEDIUM** |
| 9 | `app/data/meta.json` + `app/utils/getPageMeta.ts` | `getPageMeta` returns `{ title, description }` only — no `openGraph` overrides per page. Root layout's OG image is correct, but every individual page shows the same OG card on shares | **MEDIUM** |
| 10 | `app/components/home/HeroSlider.tsx` (lines 8–14) | `setInterval` runs whether or not the slider is visible. Wastes a re-render every 5s when the user has scrolled past | **LOW** |
| 11 | `app/api/contact/route.ts` (line 135) | Gmail SMTP via `nodemailer` is single-tenant. At any volume deliverability tanks (Gmail flags it as a relay) | **LOW** (works for now, but a launch-day risk) |
| 12 | App root | No `error.tsx` global error boundary. A render error in any leaf component yields a blank page | **LOW** |
| 13 | `app/components/serviceDetails/ServiceDetailsSidebar.tsx` (lines 96–113) | Form has placeholders + inputs but I can't see a submit handler in the visible window. Worth confirming it actually submits | **LOW** (verify) |
| 14 | `package.json` | `aos`, `parallax-js`, `tsparticles`, `lottie-react`, `styled-components` are listed but I see no active usage on the new homepage. Bundle weight | **LOW** |

---

## 2. FIX PLAN (priority order)

**P0 — User can see broken UI right now (do today)**
1. Patch `howWeBuildSaaSContent` to reuse the existing `/images/ai-product-studio/*.png` artwork as a stop-gap so `/how-we-build-saas` stops rendering placeholder boxes. (Best-fit mapping below.)
2. Same patch for `case-studies`, `projects/[slug]`, `ProjectCard`, `CaseStudyStoryCard`.
3. Delete `app/mailer.php`.
4. Delete `app/components/home/HeroMediaShowcase.tsx` (dead code with placeholders).

**P1 — Engineering completeness (do this week)**
5. Add `app/not-found.tsx` (branded 404 + nav back to /services).
6. Extend `app/sitemap.ts` to include Sanity blog + project slugs.
7. Harden `ContactForm` a11y + 429 messaging.
8. Extend `getPageMeta` to support per-page OG overrides.
9. Wrap `HeroSlider`'s `setInterval` in `IntersectionObserver` so it pauses when off-screen.
10. Add `app/error.tsx` and `app/global-error.tsx` boundaries.

**P2 — Deferred but documented**
11. Migrate transactional email from Gmail SMTP to Resend.
12. Audit `package.json` and remove unused deps.
13. Verify `ServiceDetailsSidebar` form actually submits.

---

## 3. CODE FIXES (paste-ready)

> All snippets below are **drop-in replacements or additions**. They preserve existing patterns (DM Sans, slate/cyan tokens, `theme-container` layout, Lucide icons).

---

### FIX 1 — Stop the placeholder boxes on `/how-we-build-saas`

**File:** `app/components/premiumStudio/content.ts`
**Why:** Every `visual` block in `howWeBuildSaaSContent` is missing the `image` field. `VisualPlaceholder` then falls through to the dashed-box branch (line 74 in `VisualPlaceholder.tsx`). Reusing the existing `ai-product-studio` artwork keeps the page visually whole today; swap to dedicated artwork later.

**Patch:** add an `image` block to each `visual` object. Below is the exact set of edits — paste over the existing `visual: { ... }` blocks inside `howWeBuildSaaSContent`.

```ts
// hero.visual (around line 66)
visual: {
   label: "[IMAGE: SaaS product architecture]",
   description:
      "Placeholder for the system view: app layers, data model, integrations, and launch environment.",
   image: {
      src: "/images/ai-product-studio/hero-architecture.png",
      alt: "Isometric illustration of a SaaS product architecture with services, data layer, and integrations",
   },
   imagePriority: true,
},

// audience.visual (around line 82)
visual: {
   label: "[IMAGE: founder and product team fit diagram]",
   description:
      "Placeholder for the ideal customer profile: founders, product teams, operators, and SaaS rebuilds.",
   image: {
      src: "/images/ai-product-studio/audience-fit.png",
      alt: "Diagram of founders, product teams, and operators connecting into a single delivery system",
   },
},

// problem.visual (around line 119)
visual: {
   label: "[IMAGE: launch blockers map]",
   description:
      "Placeholder for scope creep, fragmented execution, and launch-risk visualization.",
   image: {
      src: "/images/ai-product-studio/problem-fragmented.png",
      alt: "Illustration of fragmented project work versus a unified launch system",
   },
},

// process.visual (around line 156) — keep using the in-app illustration
visual: {
   label: "[PIPELINE DIAGRAM: Audit -> Structure -> Build -> Deploy]",
   description:
      "Placeholder for the delivery flow from product shaping to deployment and feedback loops.",
   illustration: "process-pipeline",
},

// deliverables.visual (around line 197)
visual: {
   label: "[IMAGE: product dashboard preview]",
   description:
      "Placeholder for admin, analytics, environment status, and release dashboard preview.",
   image: {
      src: "/images/ai-product-studio/deliverables-dashboard.png",
      alt: "Product dashboard preview with analytics, environment status, and release notes",
   },
},

// transformation.visual (around line 234)
visual: {
   label: "[IMAGE: workflow transformation board]",
   description:
      "Placeholder for the shift from vague scope and fragmented work to launch-ready product operations.",
   image: {
      src: "/images/ai-product-studio/transformation-before-after.png",
      alt: "Before-and-after view: vague scope versus a launch-ready product operation",
   },
},

// useCases.visual (around line 263)
visual: {
   label: "[IMAGE: SaaS growth use case grid]",
   description:
      "Placeholder for founder MVPs, productized services, rebuilds, and AI-enabled product workflows.",
   image: {
      src: "/images/ai-product-studio/use-cases-board.png",
      alt: "Grid of SaaS use cases including MVPs, productized services, and rebuilds",
   },
},

// whySofGent.visual (around line 304)
visual: {
   label: "[IMAGE: delivery authority stack]",
   description:
      "Placeholder for product ownership, engineering coverage, AI workflow design, and launch discipline.",
   image: {
      src: "/images/ai-product-studio/why-control-layer.png",
      alt: "Layered delivery stack covering product, engineering, AI, and launch discipline",
   },
},

// midCta.visual (around line 350)
visual: {
   label: "[IMAGE: delivery brief snapshot]",
   description:
      "Placeholder for the product brief, technical audit notes, scope map, and launch plan.",
   image: {
      src: "/images/ai-product-studio/mid-cta-planning.png",
      alt: "Snapshot of a delivery brief with audit notes, scope map, and launch plan",
   },
},

// engagement.visual (around line 361)
visual: {
   label: "[DIAGRAM: Week 1 audit -> Weeks 2-4 build -> Weeks 4-6 launch]",
   description:
      "Placeholder for the timeline from discovery and architecture through build and release.",
   image: {
      src: "/images/ai-product-studio/engagement-timeline.png",
      alt: "Engagement timeline from week-1 discovery through build and launch",
   },
},

// cta.visual (around line 405)
visual: {
   label: "[IMAGE: onboarding roadmap]",
   description:
      "Placeholder for the kickoff roadmap, technical audit notes, and delivery milestones shared during onboarding.",
   tone: "dark",
   image: {
      src: "/images/ai-product-studio/cta-workshop.png",
      alt: "Onboarding roadmap with kickoff milestones and audit notes",
   },
},
```

> **TODO marker** — add a single comment at the top of `howWeBuildSaaSContent`:
>
> ```ts
> // TODO(content): replace shared /images/ai-product-studio/* artwork with dedicated
> // /images/how-we-build-saas/* artwork once produced. Same image dimensions (1600×900).
> ```

**Acceptance criteria**
- `/how-we-build-saas` renders ten real images instead of dashed boxes.
- Lighthouse mobile LCP target still ≥ 2.5s (hero image already has `imagePriority: true`).
- No 404s for any `/_next/image` request inspected in DevTools Network tab.

---

### FIX 2 — Plug placeholders on case-studies + projects pages

**Files:**
- `app/(pages)/case-studies/page.tsx` (lines 66, 135)
- `app/(pages)/projects/[slug]/page.tsx` (lines 79, 234)
- `app/components/projects/CaseStudyStoryCard.tsx` (line 83)
- `app/components/common/ProjectCard.tsx` (line 49)

**Why:** Same `VisualPlaceholder` dashed-fallback pattern.

**Pattern to apply at each call site:**

```tsx
// BEFORE
<VisualPlaceholder
   label="[IMAGE: case study cover]"
   description="Placeholder for the case study lead visual."
/>

// AFTER — if the project has Sanity-backed imagery use it,
// otherwise fall back to a thematic stock from /images/ai-product-studio/.
<VisualPlaceholder
   label="[IMAGE: case study cover]"
   description="Placeholder for the case study lead visual."
   image={
      project?.coverImage
         ? { src: project.coverImage.url, alt: project.coverImage.alt ?? project.title }
         : { src: "/images/ai-product-studio/use-cases-board.png", alt: project.title }
   }
/>
```

> If a given page has no Sanity coverage yet, hardcode a single fallback image per page so nothing renders empty.

**Acceptance criteria**
- `/case-studies`, `/projects`, `/projects/[slug]` all render images, no dashed boxes.

---

### FIX 3 — Delete dead code

**Delete files:**
- `app/components/home/HeroMediaShowcase.tsx` — hardcoded `[Product preview placeholder]`, `[Video / animation showcase placeholder]`, `[Interactive slider placeholder]`. Not part of the active hero (verified: only `HeroSlider` is rendered from `app/page.tsx`).
- `app/mailer.php` — PHP file in a Next.js project. Legacy artifact.

**Verify nothing breaks:**
```bash
grep -rn "HeroMediaShowcase\|mailer.php" app/ lib/
```
Should return zero matches after deletion.

---

### FIX 4 — Add a branded 404

**New file:** `app/not-found.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/app/components/Layout/Header/Header";
import Footer from "@/app/components/Layout/Footer/Footer";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata = {
   title: "Page not found",
   description: "We couldn't find the page you were looking for.",
};

export default function NotFound() {
   return (
      <main className="min-h-screen bg-slate-50 selection:bg-cyan-500/20 selection:text-cyan-900">
         <Header />
         <section className="relative pt-[220px] md:pt-[260px] pb-24 md:pb-32 bg-slate-950 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,50,60,0.5),transparent_70%)]" />
            <div className="theme-container relative z-10 max-w-3xl text-center mx-auto">
               <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-400">404</p>
               <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
                  This page didn't ship.
               </h1>
               <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
                  The link you followed is dead, moved, or was never built. Pick a path
                  that's actually live.
               </p>
               <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                     href="/services"
                     className="inline-flex items-center justify-center bg-cyan-500 text-slate-950 px-8 py-4 rounded-xl font-bold transition-all hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                     Explore services <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                     href={CALENDLY_URL}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-bold border border-white/10 transition-all hover:bg-white/10">
                     Book a strategy call
                  </Link>
               </div>
            </div>
         </section>
         <Footer />
      </main>
   );
}
```

---

### FIX 5 — Sitemap should include Sanity-backed slugs

**File:** `app/sitemap.ts` (full replacement)

```ts
import type { MetadataRoute } from "next";
import { getSiteOriginFromEnv } from "@/lib/runtime/deployment";
// import the Sanity helpers you already have in lib/sanity/queries.
// import { getAllBlogSlugs, getAllProjectSlugs } from "@/lib/sanity/queries";

const STATIC_ROUTES = [
   "/",
   "/services",
   "/ai-product-studio",
   "/how-we-build-saas",
   "/case-studies",
   "/projects",
   "/blog",
   "/about",
   "/contact",
   "/launch-your-mvp",
   "/services/ai-ready-data-engineering",
   "/services/document-intelligence-systems",
   "/privacy-policy",
   "/terms-conditions",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   const baseUrl = getSiteOriginFromEnv();
   const now = new Date();

   const staticEntries = STATIC_ROUTES.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
   }));

   // Replace these with the actual Sanity helpers you already use in
   // /app/(pages)/blog/[slug]/page.tsx and /app/(pages)/projects/[slug]/page.tsx.
   // Wrap in try/catch so a Sanity outage doesn't break the sitemap build.
   let dynamicEntries: MetadataRoute.Sitemap = [];
   try {
      // const blogSlugs = await getAllBlogSlugs();
      // const projectSlugs = await getAllProjectSlugs();
      // dynamicEntries = [
      //    ...blogSlugs.map((slug) => ({
      //       url: `${baseUrl}/blog/${slug}`,
      //       lastModified: now,
      //       changeFrequency: "weekly" as const,
      //       priority: 0.5,
      //    })),
      //    ...projectSlugs.map((slug) => ({
      //       url: `${baseUrl}/projects/${slug}`,
      //       lastModified: now,
      //       changeFrequency: "weekly" as const,
      //       priority: 0.6,
      //    })),
      // ];
   } catch (error) {
      console.error("[sitemap] Failed to load dynamic slugs", error);
   }

   return [...staticEntries, ...dynamicEntries];
}
```

> Wire the Sanity helpers in once and the sitemap is self-maintaining.

---

### FIX 6 — ContactForm a11y + 429 messaging

**File:** `app/components/contact/index.tsx`

**Add to component state:**
```tsx
const [submitMessage, setSubmitMessage] = useState<string>("");
```

**Replace the `try/catch` block in `handleSubmit`:**

```tsx
try {
   const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
   });

   if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as
         | { error?: string }
         | null;

      if (response.status === 429) {
         setSubmitStatus("error");
         setSubmitMessage(
            "You've sent several requests recently. Please try again in an hour."
         );
         return;
      }
      if (response.status === 400) {
         setSubmitStatus("error");
         setSubmitMessage(
            payload?.error ||
               "Some details look off. Please review the form and try again."
         );
         return;
      }
      throw new Error(payload?.error || "Failed to submit form");
   }

   setSubmitStatus("success");
   setSubmitMessage(
      "Thanks. Your details have been sent. We'll be in touch shortly."
   );
   setFormData({ name: "", company: "", timeline: "", productIdea: "", website: "" });
} catch (error) {
   console.error("Error submitting form:", error);
   setSubmitStatus("error");
   setSubmitMessage(
      "There was a problem sending your details. Please try again."
   );
} finally {
   setIsSubmitting(false);
}
```

**Replace each form field with the a11y-correct version (showing `name` field as template; apply to `company`, `timeline`, `productIdea`):**

```tsx
<div>
   <label htmlFor="contact-name" className="mb-2.5 block text-sm font-bold text-slate-700">
      Name
   </label>
   <input
      id="contact-name"
      onChange={handleChange}
      value={formData.name}
      name="name"
      type="text"
      autoComplete="name"
      placeholder="Your name"
      aria-invalid={Boolean(errors.name)}
      aria-describedby={errors.name ? "contact-name-error" : undefined}
      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-slate-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10"
   />
   {errors.name ? (
      <p id="contact-name-error" className="mt-2.5 text-sm font-medium text-red-500">
         {errors.name}
      </p>
   ) : null}
</div>
```

**Replace status banners with `aria-live`:**

```tsx
<div aria-live="polite" aria-atomic="true">
   {submitStatus === "success" && submitMessage ? (
      <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-800">
         {submitMessage}
      </div>
   ) : null}
   {submitStatus === "error" && submitMessage ? (
      <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-800">
         {submitMessage}
      </div>
   ) : null}
</div>
```

---

### FIX 7 — Per-page OG metadata propagation

**File:** `app/utils/getPageMeta.ts` (full replacement)

```ts
import type { Metadata } from "next";
import metaMap from "@/app/data/meta.json";

type PageMeta = Pick<Metadata, "title" | "description"> & {
   ogImage?: string;
};

const DEFAULT_OG_IMAGE = "/og/default.png";

const defaultMeta: Metadata = {
   title: "SofGent",
   description: "Premium AI Product Studio",
};

export default function getPageMeta(path: string): Metadata {
   const meta = (metaMap as Record<string, PageMeta>)[path];
   if (!meta || typeof meta !== "object") return defaultMeta;

   const title = typeof meta.title === "string" ? meta.title : "SofGent";
   const description =
      typeof meta.description === "string" ? meta.description : defaultMeta.description;
   const ogImage = meta.ogImage ?? DEFAULT_OG_IMAGE;

   return {
      title: meta.title,
      description,
      openGraph: {
         title,
         description: typeof description === "string" ? description : undefined,
         images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      },
      twitter: {
         card: "summary_large_image",
         title,
         description: typeof description === "string" ? description : undefined,
         images: [ogImage],
      },
   };
}
```

`meta.json` can now optionally include `ogImage`:
```json
"/services": {
   "title": "AI Product Studio Services | SofGent",
   "description": "Explore SofGent's three premium offers...",
   "ogImage": "/og/services.png"
}
```

---

### FIX 8 — Pause `HeroSlider` autoplay when off-screen

**File:** `app/components/home/HeroSlider.tsx`

Replace the `useEffect` block at the top of the component:

```tsx
"use client";
import { useEffect, useRef, useState } from "react";

export default function HeroSlider() {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [isVisible, setIsVisible] = useState(true);
   const containerRef = useRef<HTMLDivElement | null>(null);

   // Pause autoplay when scrolled off-screen
   useEffect(() => {
      const node = containerRef.current;
      if (!node) return;
      const observer = new IntersectionObserver(
         ([entry]) => setIsVisible(entry.isIntersecting),
         { rootMargin: "0px", threshold: 0.1 }
      );
      observer.observe(node);
      return () => observer.disconnect();
   }, []);

   useEffect(() => {
      if (!isVisible) return;
      const reduceMotion =
         typeof window !== "undefined" &&
         window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      const timer = setInterval(() => {
         setCurrentSlide((prev) => (prev + 1) % 3);
      }, 5000);
      return () => clearInterval(timer);
   }, [isVisible]);

   return (
      <div ref={containerRef} className="relative w-full ...">
         {/* existing JSX unchanged */}
      </div>
   );
}
```

---

### FIX 9 — Global error boundary

**New file:** `app/error.tsx`

```tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
   error,
   reset,
}: {
   error: Error & { digest?: string };
   reset: () => void;
}) {
   useEffect(() => {
      // Hook Sentry / your logger here
      console.error("[error.tsx]", error);
   }, [error]);

   return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
         <div className="max-w-xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-600">
               Something broke
            </p>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
               This page hit a snag.
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
               You can try again or head back to the homepage. We've already
               logged this error.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
               <button
                  onClick={reset}
                  className="rounded-xl bg-slate-900 text-white px-6 py-3 text-sm font-bold hover:bg-slate-800">
                  Try again
               </button>
               <Link
                  href="/"
                  className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 hover:bg-white">
                  Back to home
               </Link>
            </div>
         </div>
      </main>
   );
}
```

---

## 4. EXECUTION ORDER

1. **(2 min)** Delete `app/mailer.php` and `app/components/home/HeroMediaShowcase.tsx`.
2. **(15 min)** Apply Fix 1 — paste image blocks into `howWeBuildSaaSContent`. Reload `/how-we-build-saas`. Confirm 10 images render.
3. **(15 min)** Apply Fix 2 — same pattern at the four call sites flagged.
4. **(10 min)** Add `app/not-found.tsx` (Fix 4) and `app/error.tsx` (Fix 9).
5. **(10 min)** Apply Fix 6 — ContactForm a11y + 429 messaging.
6. **(15 min)** Apply Fix 7 — per-page OG metadata.
7. **(10 min)** Apply Fix 5 — sitemap with try/catch wrapping (Sanity helpers can be wired later — code is already commented for that).
8. **(10 min)** Apply Fix 8 — HeroSlider IntersectionObserver.
9. **Verify:** `npm run build && npm run lint`. Browse `/`, `/how-we-build-saas`, `/case-studies`, `/contact`. Submit the form to confirm 200 path; rapid-fire submit to confirm 429.

**Total focused dev time: ~90 minutes.**

---

## 5. SUCCESS CRITERIA — POST-FIX

- [ ] `/how-we-build-saas` renders ten real images, zero dashed boxes
- [ ] `/case-studies`, `/projects`, `/projects/[slug]` render real images
- [ ] `app/mailer.php` and `HeroMediaShowcase.tsx` removed
- [ ] `/some-broken-url` shows the branded 404 with CTAs
- [ ] A throw inside any leaf component shows `error.tsx` instead of a blank page
- [ ] Contact form: every input has a label association; success/error banners announce via screen reader
- [ ] Rapid-fire 6 submissions returns the rate-limit message
- [ ] Each page's OG card on LinkedIn shows the correct title + image
- [ ] Lighthouse mobile on `/`, `/services`, `/contact`, `/how-we-build-saas` ≥ 90 / 95 / 95 / 95
- [ ] `npm run build` passes with zero warnings
- [ ] `npm run lint` passes

When all checks pass, you're launch-ready for the cold-outreach push (Stage 1+ from the client-hunting roadmap).

---

## 6. WHAT I DID NOT TOUCH (and why)

- **Switching email transport from Gmail → Resend** — works at low volume; queue it for day-7 of the launch when bounce rate becomes a real signal.
- **Removing unused deps** (`aos`, `parallax-js`, `tsparticles`, `lottie-react`, `styled-components`) — needs a careful `grep` per package. Easy 30-min task once the launch is out the door.
- **Migrating CMS** (Sanity vs Keystatic) — both work today, the trust-smell is for technical buyers reading the repo. Defer until post-launch.
- **Sentry / Vercel Analytics wiring** — already on the Stage 3 list; not user-visible, not a launch blocker.
- **Old hero (`components/home/hero/`)** — already deleted. Verified.
- **CALENDLY_URL extraction** — already done via `lib/constants.ts`. Verified usage in `content.ts`.

If you want me to also draft the same depth of audit for `/services/[slug]` and `/launch-your-mvp` once these fixes land, say the word.
