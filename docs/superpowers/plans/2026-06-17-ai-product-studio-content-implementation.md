# AI Product Studio Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the public site around AI Product Studio as the main offer, keep the dedicated `ai-product-studio`, `services`, and `how-we-build-saas` pages, and make services, FAQs, blogs, case studies, and projects dynamic from Sanity.

**Architecture:** Keep the current design system and route structure, replace generic broad-agency messaging with AI-product-for-operations messaging, add the missing `ai-product-studio` route, and centralize dynamic content reads through the existing `lib/sanity/*` layer. Split work by page slice and content type so homepage, services/FAQ, and AI Studio/process pages can be updated independently.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, `next-sanity`, Sanity Studio schemas in `studio-app/`

---

## File Structure

- `app/page.tsx` — homepage composition
- `app/(pages)/services/page.tsx` — services page assembly
- `app/(pages)/how-we-build-saas/page.tsx` — process page route
- `app/(pages)/ai-product-studio/page.tsx` — new AI Product Studio route
- `app/components/home/*` — homepage sections
- `app/components/services/*` — services intro, services grid, FAQs
- `app/components/howWeBuildSaaS/index.tsx` — process-page content
- `app/components/projects/ProjectList.tsx` — reusable Sanity proof section
- `app/components/common/BlogCard.tsx` and blog listing route — existing dynamic trust content
- `app/utils/getPageMeta.ts` and `app/data/meta.json` — metadata updates
- `lib/sanity/queries.ts` — add FAQ and any page-specific queries
- `lib/sanity/types.ts` — FAQ types
- `lib/sanity/content.ts` — FAQ fetch helpers
- `studio-app/schemaTypes/*` — schema alignment only if frontend needs additional FAQ grouping fields

---

### Task 1: Protect the current baseline

**Files:**
- Modify: none
- Git only: branch refs

- [ ] **Step 1: Verify local branch state**

Run: `git branch --show-current && git status --short`

Expected:
- current work is on `codex/current-deployment`
- existing uncommitted work is visible before further changes

- [ ] **Step 2: Refresh refs for `main`**

Run: `git fetch origin main --prune`

Expected:
- local repo has the latest `origin/main` reference

- [ ] **Step 3: Create backup branch from `main`**

Run:

```bash
git branch backup/main-2026-06-17 origin/main
git branch --list 'backup/main-2026-06-17'
```

Expected:
- branch `backup/main-2026-06-17` exists and points to `origin/main`

- [ ] **Step 4: Record backup branch in working notes**

Add a short note to the implementation log or final handoff that backup branch exists before content merge work continues.

---

### Task 2: Add dynamic FAQ support from Sanity

**Files:**
- Modify: `lib/sanity/types.ts`
- Modify: `lib/sanity/queries.ts`
- Modify: `lib/sanity/content.ts`
- Modify: `app/components/services/faq/index.tsx`

- [ ] **Step 1: Add FAQ types**

Add a typed FAQ shape in `lib/sanity/types.ts`:

```ts
export interface SanityFaqItem {
  _id: string;
  question: string;
  answer: string;
  section: string;
  order?: number;
}
```

- [ ] **Step 2: Add FAQ queries**

Add list queries in `lib/sanity/queries.ts`:

```ts
export const FAQS_QUERY = `
  *[
    _type == "faq" &&
    (!defined($section) || section == $section)
  ] | order(order asc, _createdAt asc) {
    _id,
    question,
    answer,
    section,
    order
  }
`;
```

- [ ] **Step 3: Add FAQ content helper**

Add fetch helper in `lib/sanity/content.ts`:

```ts
export async function getFaqs(section?: string): Promise<SanityFaqItem[]> {
  if (!isSanityConfigured) return [];
  try {
    return await sanityFetch<SanityFaqItem[]>({
      query: FAQS_QUERY,
      params: { section },
      revalidate: 60,
    });
  } catch (error) {
    logSanityError(`Failed to fetch FAQs for section "${section ?? "all"}"`, error);
    return [];
  }
}
```

- [ ] **Step 4: Convert services FAQ section to server-fed content**

Update `app/components/services/faq/index.tsx` to read from Sanity and keep the existing accordion UI:

```tsx
const faqItems = await getFaqs("services");
```

Behavior:
- render Sanity FAQs when available
- keep current visual design
- optionally keep current hardcoded array only as last-resort fallback if the page must remain populated during empty datasets

- [ ] **Step 5: Verify FAQ data path**

Run:

```bash
npm run build
```

Expected:
- build passes with FAQ content coming from Sanity data path

---

### Task 3: Create AI Product Studio route and content shell

**Files:**
- Create: `app/(pages)/ai-product-studio/page.tsx`
- Create: `app/components/aiProductStudio/index.tsx`
- Create: `app/components/aiProductStudio/sections/*` as needed
- Modify: `app/components/Layout/Header/Header.tsx`
- Modify: `app/components/Layout/Footer/Footer.tsx`
- Modify: `app/data/meta.json`

- [ ] **Step 1: Add route metadata**

Add `/ai-product-studio` metadata in `app/data/meta.json`:

```json
"/ai-product-studio": {
  "title": "AI Product Studio for Production-Ready Systems | SofGent",
  "description": "SofGent builds AI apps, internal AI tools, and AI-powered SaaS systems for operations teams."
}
```

- [ ] **Step 2: Add route entry**

Create `app/(pages)/ai-product-studio/page.tsx`:

```tsx
import BreadCrumb from "@/app/components/common/BreadCrumb";
import AiProductStudioPage from "@/app/components/aiProductStudio";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return getPageMeta("/ai-product-studio");
}

export default function Page() {
  return (
    <section>
      <BreadCrumb pageTitle="AI Product Studio" currentPage="AI Product Studio" to="/" />
      <AiProductStudioPage />
    </section>
  );
}
```

- [ ] **Step 3: Build the page around approved messaging**

Create `app/components/aiProductStudio/index.tsx` with sections for:
- hero / offer explanation
- what we build
- AI + SaaS delivery explanation
- project/case-study proof
- FAQ support
- CTA

Core copy direction:

```tsx
<h1>AI apps, internal AI tools, and SaaS systems for operations teams</h1>
<p>We design and deliver production-ready AI software that improves workflows, internal operations, and service delivery.</p>
```

- [ ] **Step 4: Reuse dynamic proof blocks**

Use existing Sanity-backed blocks where possible:
- `ProjectList` patterns for proof
- FAQ component patterns for trust content

- [ ] **Step 5: Expose route in header/footer navigation**

Update nav arrays so `/ai-product-studio` appears as a first-class destination.

---

### Task 4: Rewrite homepage around AI Product Studio

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/components/home/hero/index.tsx`
- Modify: `app/components/home/about/index.tsx`
- Modify: `app/components/home/howWeWork/index.tsx`
- Modify: `app/components/home/services/index.tsx`
- Modify: `app/components/home/whyChooseUs/index.tsx`
- Modify or replace: `app/components/home/expertise/index.tsx`
- Reuse: `app/components/projects/ProjectList.tsx` patterns or create a lighter homepage proof section

- [ ] **Step 1: Replace generic hero messaging**

Update hero copy to:
- state AI product offering plainly
- send primary CTA to `/ai-product-studio`
- keep secondary CTA to consultation/contact

- [ ] **Step 2: Replace broad company/about copy**

Update the about section so it becomes:
- “what we actually build”
- AI apps
- internal AI tools
- AI-powered SaaS systems

Remove broad catalog-style copy.

- [ ] **Step 3: Keep the homepage concise**

Recompose `app/page.tsx` to match approved structure:
- Hero
- What we build
- Core offer / services teaser
- Proof
- Process teaser
- Blog/FAQ trust layer
- CTA

Reduce or remove sections that dilute the AI + SaaS focus.

- [ ] **Step 4: Keep homepage proof dynamic**

Use Sanity-backed project/case-study data in a smaller homepage proof block instead of a full dense listing.

- [ ] **Step 5: Verify route copy and CTA flow**

Check that homepage routes users toward:
- `/ai-product-studio`
- `/how-we-build-saas`
- consultation/contact

---

### Task 5: Simplify services page around AI + SaaS

**Files:**
- Modify: `app/(pages)/services/page.tsx`
- Modify: `app/components/services/aboutService/index.tsx`
- Modify: `app/components/services/mainServices/index.tsx`
- Modify: `app/components/home/services/ServiceCard.tsx` if needed for support labeling
- Modify: `app/data/meta.json`

- [ ] **Step 1: Replace services hero intro**

Update `app/components/services/aboutService/index.tsx` to remove:
- “wide range of services”
- generic software-agency copy

Replace with AI Product Studio framing and a short explanation of AI apps + SaaS delivery.

- [ ] **Step 2: Keep primary service lanes obvious**

Adjust `app/components/services/mainServices/index.tsx` so section copy emphasizes:
- AI Product Delivery
- SaaS MVP Delivery

Supporting capabilities may still render below, but the top framing must narrow the message.

- [ ] **Step 3: Keep services dynamic**

Continue using `getServices()` from Sanity, but ensure the page wording does not present every item as equal headline positioning.

- [ ] **Step 4: Update metadata**

Change `/services` metadata to reflect AI Product Studio-oriented services rather than broad enterprise software language.

---

### Task 6: Align How We Build SaaS with AI product delivery

**Files:**
- Modify: `app/components/howWeBuildSaaS/index.tsx`
- Modify: `app/(pages)/how-we-build-saas/page.tsx`
- Modify: `app/data/meta.json`

- [ ] **Step 1: Keep route, tighten copy**

Retain the current process-page structure but rewrite copy so it supports:
- AI product delivery
- SaaS launch readiness
- architecture-first execution

- [ ] **Step 2: Remove overly broad examples**

Reduce sections that read as unrelated vertical marketing unless they directly support the AI + SaaS message.

- [ ] **Step 3: End with focused CTA**

Close the page with a CTA back to:
- `/ai-product-studio`
- or consultation/contact

- [ ] **Step 4: Update metadata**

Ensure `/how-we-build-saas` metadata aligns with the approved positioning and no longer reads as a generic SaaS build page.

---

### Task 7: End-to-end verification

**Files:**
- Verify only

- [ ] **Step 1: Run build**

Run:

```bash
npm run build
```

Expected:
- no type or build errors

- [ ] **Step 2: Run local dev verification**

Run:

```bash
npm run dev
```

Verify:
- `/`
- `/ai-product-studio`
- `/services`
- `/how-we-build-saas`
- `/blog`
- `/projects`

- [ ] **Step 3: Verify Sanity-driven content**

Confirm:
- services render live Sanity items
- FAQs render from Sanity
- blogs render from Sanity
- projects/case studies render from Sanity

- [ ] **Step 4: Verify message consistency**

Check that all top-level pages consistently communicate:
- AI apps
- internal AI tools
- AI-powered SaaS systems
- operations-team focus

