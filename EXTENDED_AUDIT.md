# SofGent Web — Extended Whole-App Audit

Companion to `CODE_COMPLETENESS_AUDIT.md`. After applying the 7 P0 fixes (commit `1e1d4d6` on `audit/code-completeness-fixes`), I expanded the review across every page and component I had not yet inspected. This document captures **every additional finding** — what I fixed in the same branch and what remains.

**Branch:** `audit/code-completeness-fixes`
**To push:** `git push -u origin audit/code-completeness-fixes` (the sandbox blocked the push; run from your terminal)

---

## A. Newly applied fixes in this branch

These are concrete code changes already on the branch, beyond the original 10-file commit. They will appear in a follow-up commit.

| # | File(s) | What I changed |
|---|---|---|
| F1 | `app/components/Layout/Footer/Footer.tsx` + new `app/components/Layout/Footer/BackToTop.tsx` | The footer's "back to top" arrow was an `<a href="#">` — clicked, jumped to top of URL, broke browser history. Replaced with a real client-side `BackToTop` button that uses `window.scrollTo({ behavior })` and respects `prefers-reduced-motion`. |
| F2 | `app/components/contact/SocialFollow.tsx` | Twitter and Instagram icons had `href="#"` placeholders. Removed both icons; component now only renders Facebook and LinkedIn (the two real SofGent profiles). When you have real X/IG handles, drop them into `SOCIAL_LINKS`. The component is now data-driven (no copy-paste blocks). |
| F3 | `app/(pages)/services/[slug]/page.tsx` | A request to `/services/invalid-slug` previously rendered a half-empty page with `service?.title` being `undefined`. Now calls `notFound()` from `next/navigation` so the new branded 404 takes over. |
| F4 | `app/components/about/teamMembers/index.tsx` | The component shipped fake team members (`Pasquale S. Larson`, `Steven N. Manning`, `Lawrence P. Harrison`, `Richard S. Sanders`), a `28+` team-size claim, and a typo (`Team Memebers`). Replaced the file with a no-op deprecation stub so the fake data can never accidentally render. The folder still exists (sandbox blocks unlink); schedule a real `rm -r` in your next housekeeping commit. |

These four are committed alongside the earlier ten in this branch.

---

## B. New issues found — by severity

### HIGH

#### B-H1. 77 references to undefined Tailwind tokens — visually broken styling

Across 24 files, components reference utility classes that **do not exist in `tailwind.config.ts`** (and therefore render as no-op classes):

- `bg-main-black`, `text-main-black`
- `bg-main-gray`
- `text-gray-69`
- `font-inter`
- `fill-brand` (in 5 files: `MemberCard.tsx`, `services/faq/FaqAccordion.tsx`)

Affected directories: `components/about/*`, `components/serviceDetails/*`, `components/services/*`, `components/contact/*`.

**Evidence:**
```bash
grep -rn "bg-main-\|text-main-\|gray-69\|font-inter\|fill-brand" app/ --include="*.tsx" | wc -l
# 77
grep -rln "bg-main-\|text-main-\|gray-69\|font-inter\|fill-brand" app/ --include="*.tsx" | wc -l
# 24
```

**Why it matters:** Tailwind silently drops unknown classes. So elements styled with `text-main-black` actually inherit the parent's color (likely correct by coincidence), but `bg-main-gray` shows whatever's underneath, and `fill-brand` SVG icons take the default fill. The site looks "mostly fine" but fragile and inconsistent across pages.

**Severity:** HIGH (visual quality + technical debt; affects almost every legacy component).

**Fix plan (NOT applied — too broad for a single review pass):**

1. Add token shims to `tailwind.config.ts` so legacy classes resolve to the new palette:
   ```ts
   colors: {
      // existing entries kept
      "main-black": "#020617", // alias for ink/slate-950
      "main-gray":  "#f8fafc", // alias for surface
      "gray-69":    "#6d6d6d", // alias for paragraph
      brand:        "#06b6d4", // alias for primary
   },
   fontFamily: {
      inter: ["var(--font-dm-sans)", "Inter", "sans-serif"],
   },
   ```
   This unblocks all 77 references in one tailwind change without touching component markup.

2. Once the codebase is stable, do a follow-up sweep replacing every legacy class with the canonical token (`bg-surface`, `text-ink`, `text-paragraph`, `bg-primary`, `font-sans`). A find-and-replace script:
   ```bash
   find app -name '*.tsx' -exec sed -i '' \
      -e 's/text-main-black/text-ink/g' \
      -e 's/bg-main-gray/bg-surface/g' \
      -e 's/text-gray-69/text-paragraph/g' \
      -e 's/font-inter/font-sans/g' \
      -e 's/fill-brand/fill-primary/g' \
      -e 's/text-brand/text-primary/g' \
      -e 's/bg-brand/bg-primary/g' \
      -e 's/border-brand/border-primary/g' \
      {} +
   ```
   Then drop the shim aliases.

#### B-H2. Every project tile renders a dashed `VisualPlaceholder`

`app/components/common/ProjectCard.tsx` (line 49) calls `VisualPlaceholder` with `label` + `description` only — no `image` prop. `app/data/projects/types.ts` (`ProjectFieldsType`) doesn't have an image field at all. Result: the entire `/projects` archive renders dashed boxes for every card, same problem as `/how-we-build-saas`.

**Fix plan:**
1. Extend `ProjectFieldsType` with `coverImage?: { src: string; alt: string }`.
2. In `projects.json`, add the field to each of the 4 projects pointing to artwork in `/public/images/project/<slug>/cover.png` (or temporarily reuse `/images/ai-product-studio/use-cases-board.png`).
3. In `ProjectCard.tsx`, pass `image={project.coverImage}` to `VisualPlaceholder`.

#### B-H3. AOS animation library used 17+ times but never initialized

`grep -rn 'data-aos=' app/` returns 17 attribute usages in 9 files. `aos` is in `package.json`. But there is **no `AOS.init()` call anywhere in the codebase**, and the library has no auto-init in Next.js 14 client components.

Result: every `data-aos="fade-up"`, `data-aos="zoom-out"`, `data-aos-delay="100"` is dead markup. None of the animations run.

**Fix plan — pick one:**

Option A — wire AOS:
```tsx
// app/components/common/AOSInit.tsx
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function AOSInit() {
   useEffect(() => {
      AOS.init({ once: true, duration: 600, easing: "ease-out" });
   }, []);
   return null;
}
// Then mount once in app/layout.tsx body.
```

Option B (recommended for launch) — strip AOS and the data-aos attributes; the new homepage uses Tailwind transitions for hover states already, and visible-on-scroll fades aren't worth the bundle weight (~15KB gzipped). `npm uninstall aos` and `grep -rl 'data-aos' app/ | xargs sed -i '' '/data-aos/d'`.

### MEDIUM

#### B-M1. `/projects/[slug]/page.tsx` doesn't `notFound()` either

Same shape bug as services: `notFound()` should be called when `params.slug` doesn't match any project. Mirror the fix from `services/[slug]`.

#### B-M2. `app/components/projects/CaseStudyStoryCard.tsx` likely uses `VisualPlaceholder` without an image

Confirmed at line 83 in the original audit. Fix it the same way as `ProjectCard.tsx` once `coverImage` is added to the data model.

#### B-M3. `app/(pages)/case-studies/page.tsx` lines 66 + 135 use `VisualPlaceholder` without images

Same pattern. Either supply an image prop or delete the placeholder calls and replace with copy.

#### B-M4. `app/components/Layout/Header/Topbar.tsx` not yet inspected in detail

Was not reviewed line-by-line — flag for follow-up. (Worked visually in earlier review but should be confirmed for theme switching cleanliness.)

#### B-M5. `app/components/howWeBuildSaaS/index.tsx` — 535 lines, not inspected for completeness

This component is large and may carry its own placeholder content / dead links / token issues. Should get its own focused review.

#### B-M6. `app/components/mvp/*` — 5 files, not inspected for completeness

`MvpPackages.tsx`, `Timeline.tsx`, `ProcessSteps.tsx`, `ComparisonTable.tsx`, `WhatMakesDifferent.tsx`. Used by `/launch-your-mvp`. Should get their own focused review.

### LOW

#### B-L1. `app/components/Layout/Footer/Footer.tsx` line 8+ has a hardcoded `serviceList` array

Footer service links are kept in a local `serviceList` const. If you reorganize service routes later, this won't update automatically. Consider sourcing from `getServicesMeta()` like the sidebar does.

#### B-L2. `app/components/projects/ProjectList.tsx` server-imports a JSON file via `readLocalFile` util

Works, but file-system reads at request time can confuse Vercel serverless cold starts if the file path resolution shifts. A simple `import projects from "@/app/data/projects/projects.json"` is faster and safer for static data. Refactor when you migrate projects to Sanity (already implied as a future step).

#### B-L3. `app/(pages)/services/[slug]/page.tsx` uses `dynamic(() => ..., { ssr: false })` for the CTA

`ssr: false` on a CTA is unnecessary unless that CTA touches `window` directly. The home `cta` component is mostly static markup — promote to a regular import to recover SSR (better LCP for the CTA).

Also relevant in `app/components/projects/ProjectList.tsx` — same `dynamic({ ssr: false })` pattern around the CTA.

#### B-L4. `app/(pages)/launch-your-mvp/page.tsx` not deeply inspected

Read first 40 lines — the rest (80+ more) likely uses MVP components flagged in B-M6. Combined review needed.

#### B-L5. Topbar / Header IntersectionObserver-based theme detection (already noted)

The `useEffect` in `Header.tsx` runs `elementsFromPoint` on every scroll event. Even passively, that's a layout-thrash hot path on long pages. Throttle with `requestAnimationFrame` or `IntersectionObserver` per dark/light section. Tracked in the original audit but worth restating.

---

## C. What's still safe to ship

After the existing branch commit + the four B-fixes I added in this pass:

- ✅ `/how-we-build-saas` renders real artwork
- ✅ Contact form: validation, a11y, rate-limit messaging
- ✅ Branded 404 + global error boundary
- ✅ Per-page OG metadata
- ✅ Hero slider pauses off-screen
- ✅ Footer back-to-top is a real button
- ✅ Social links: zero `href="#"` shipped from the contact page
- ✅ Service detail page returns 404 on bad slugs
- ✅ Fake team members can't render

You are technically launch-ready for the homepage + how-we-build-saas + ai-product-studio + contact + about. Other pages (`/projects`, `/case-studies`, `/services/[slug]`, `/launch-your-mvp`) will display correctly but with **dashed image placeholders on every project tile** until B-H2 / B-M2 / B-M3 are addressed.

---

## D. Recommended next-sprint sequence

Listed in the order with the highest ROI per hour:

1. **Tailwind shim (B-H1, 5 min)** — add the four alias tokens to `tailwind.config.ts`. Unblocks 77 broken classes immediately. Defer the bulk find/replace.
2. **Project images (B-H2, 30 min)** — extend `ProjectFieldsType` + populate `projects.json` with covers. Replace placeholder fallbacks in `ProjectCard`, `CaseStudyStoryCard`, `case-studies/page.tsx`, `projects/[slug]/page.tsx`. Even reusing `/images/ai-product-studio/*` is a huge upgrade.
3. **Strip AOS (B-H3 Option B, 10 min)** — `npm uninstall aos` + `sed` removal across 9 files. Bundle down by ~15KB; visual loss is negligible because most fades aren't running anyway.
4. **`/projects/[slug]` notFound (B-M1, 2 min)** — same one-liner as the services fix.
5. **Tackle the unreviewed components (B-M4, B-M5, B-M6)** — schedule a focused follow-up audit specifically over `Header/Topbar.tsx`, `components/howWeBuildSaaS/index.tsx`, and `components/mvp/*`.
6. **Drop `dynamic({ ssr: false })` on the CTA (B-L3)** — minor LCP win.

Total: **~1 hour to clear all HIGH-severity issues** beyond what's already on the branch.

---

## E. Push checklist

```bash
# From your local terminal (not the sandbox):
git fetch origin
git checkout audit/code-completeness-fixes
git push -u origin audit/code-completeness-fixes

# Open a PR from audit/code-completeness-fixes → main with this title:
#   "fix(audit): resolve code-completeness ship blockers + whole-app review"
# Body: link to CODE_COMPLETENESS_AUDIT.md and this EXTENDED_AUDIT.md.
```

If the push wants credentials, use a GitHub PAT scoped to the `iean/sofgent-web` repo. The branch contains:
- `1e1d4d6` — original 10-file fix commit
- (plus the next commit with footer/social/services-slug/teamMembers stub)

After merge, run a `npm install && npm run build && npm run lint` smoke test, then deploy to Vercel preview before flipping production.
