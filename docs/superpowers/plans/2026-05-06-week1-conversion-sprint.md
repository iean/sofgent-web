# SofGent Week 1 Conversion Sprint Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the homepage and service pages into a conversion-focused AI Product Studio funnel that drives more booked consultations and qualified project submissions.

**Architecture:** Keep the existing Next.js App Router structure and current Sanity-first service architecture, but replace the homepage composition with a stronger conversion narrative and extend the service content model to support architecture/process/proof sections. Reuse structured content, modular sections, and shared CTA patterns so the site can scale without one-off page implementations.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, Sanity, next-sanity, Lucide, Next Script, optional Framer Motion

---

## File Structure

### Homepage foundation

- Create: `/Volumes/Code/sofgent/sofgent-web/app/content/home-conversion.ts`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/ConversionHero.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/TrustMetrics.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/CoreCapabilities.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/CaseStudyHighlights.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/StudioAuthority.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/EngineeringPhilosophy.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/DeliveryTimeline.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/LeadCaptureBand.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/HomeStructuredData.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/page.tsx`

### Shared motion / CTA utilities

- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/common/SectionReveal.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/package.json`
- Modify: `/Volumes/Code/sofgent/sofgent-web/package-lock.json`

### Service content model

- Modify: `/Volumes/Code/sofgent/sofgent-web/app/data/services/types.ts`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/data/services/services.json`
- Modify: `/Volumes/Code/sofgent/sofgent-web/lib/sanity/types.ts`
- Modify: `/Volumes/Code/sofgent/sofgent-web/lib/sanity/queries.ts`
- Modify: `/Volumes/Code/sofgent/sofgent-web/lib/sanity/content.ts`
- Modify: `/Volumes/Code/sofgent/sofgent-web/studio-app/schemaTypes/documents/service.ts`
- Modify: `/Volumes/Code/sofgent/sofgent-web/studio-app/scripts/seed-services.mjs`

### Service detail UI

- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceProofMetrics.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceArchitectureHighlights.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceIdealFit.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceHero.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceTrustBar.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceApproach.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServicePage.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceCTA.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/StickyServiceCta.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/(pages)/services/page.tsx`

### Verification

- Test: `/Volumes/Code/sofgent/sofgent-web`

## Task 1: Add Conversion Content and Motion Foundation

**Files:**
- Create: `/Volumes/Code/sofgent/sofgent-web/app/content/home-conversion.ts`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/common/SectionReveal.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/package.json`
- Modify: `/Volumes/Code/sofgent/sofgent-web/package-lock.json`

- [ ] **Step 1: Add Framer Motion dependency**

```json
{
  "dependencies": {
    "framer-motion": "^11.18.2"
  }
}
```

- [ ] **Step 2: Install the dependency and refresh the lockfile**

Run: `npm install`
Expected: `added` / `updated` dependency graph and `package-lock.json` changes for `framer-motion`

- [ ] **Step 3: Create the structured homepage conversion content module**

```ts
// /Volumes/Code/sofgent/sofgent-web/app/content/home-conversion.ts
export const homeConversionContent = {
  hero: {
    eyebrow: "AI Product Studio",
    headline: "Build production-ready AI products in weeks.",
    subheadline:
      "SofGent builds AI-powered SaaS products, automation systems, and internal business tools fast — from MVP to enterprise-ready systems.",
    primaryCta: { label: "Book Free Consultation", href: CALENDLY_URL, external: true },
    secondaryCta: { label: "View Case Studies", href: "/case-studies" },
    trustIndicators: [
      "AI Integrations",
      "SaaS Architecture",
      "Multi-Tenant Systems",
      "Enterprise Workflows",
      "Fast MVP Delivery",
    ],
  },
  proofMetrics: [
    { value: "4 weeks", label: "to launch first production MVP" },
    { value: "78%", label: "document processing time reduction" },
    { value: "60%+", label: "manual workflow reduction" },
    { value: "Multi-tenant", label: "architecture from day one" },
  ],
  caseStudies: [
    {
      slug: "ai-knowledge-platform",
      title: "AI Knowledge Platform",
      challenge: "Fragmented company documents blocked search, onboarding, and decision-making.",
      solution: "Built a multi-tenant knowledge SaaS with ingestion, document processing, and AI-powered retrieval workflows.",
      technologies: ["Next.js", "Python", "pgvector", "PostgreSQL", "AWS"],
      outcomes: ["3x faster knowledge retrieval", "Centralized internal intelligence layer"],
      architectureHighlight: "Tenant-isolated RAG architecture with ingestion and review pipeline",
    },
    {
      slug: "fintech-payment-integration-system",
      title: "Fintech & Payment Integration System",
      challenge: "Payment workflows and backend integrations were slowing growth and increasing operational risk.",
      solution: "Designed a scalable backend and integration layer for payouts, reconciliation, and workflow orchestration.",
      technologies: [".NET", "PostgreSQL", "Stripe", "AWS SQS", "Docker"],
      outcomes: ["55% faster ops handling", "Enterprise-grade payment workflow reliability"],
      architectureHighlight: "Service-layer separation for payments, ledger events, and reconciliation",
    },
    {
      slug: "ai-document-automation-platform",
      title: "AI Document Automation Platform",
      challenge: "Manual OCR and review steps were delaying onboarding and back-office operations.",
      solution: "Built OCR, extraction, validation, and workflow automation into one production pipeline.",
      technologies: ["FastAPI", "Transformers", "Tesseract", "Angular", "AWS"],
      outcomes: ["78% less manual document work", "Faster verification turnaround"],
      architectureHighlight: "OCR + extraction + human review workflow with structured output APIs",
    },
  ],
} as const;
```

- [ ] **Step 4: Create a reusable reveal wrapper**

```tsx
// /Volumes/Code/sofgent/sofgent-web/app/components/common/SectionReveal.tsx
"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function SectionReveal({
  children,
  delay = 0,
}: PropsWithChildren<{ delay?: number }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 5: Run a focused type/build verification**

Run: `npm run build`
Expected: successful production build with `framer-motion` resolved and no runtime/type regressions

## Task 2: Rebuild the Homepage Into a Conversion Funnel

**Files:**
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/ConversionHero.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/TrustMetrics.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/CoreCapabilities.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/CaseStudyHighlights.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/StudioAuthority.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/EngineeringPhilosophy.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/DeliveryTimeline.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/LeadCaptureBand.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/HomeStructuredData.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/page.tsx`

- [ ] **Step 1: Build the conversion hero component**

```tsx
// /Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/ConversionHero.tsx
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { homeConversionContent } from "@/app/content/home-conversion";
import HeroSlider from "@/app/components/home/HeroSlider";

export default function ConversionHero() {
  const { hero } = homeConversionContent;
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-[220px] pb-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,50,60,0.52),transparent_72%)]" />
      <div className="theme-container relative z-10 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">
            <Sparkles className="h-4 w-4" />
            {hero.eyebrow}
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-[68px] lg:text-[76px]">{hero.headline}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">{hero.subheadline}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href={hero.primaryCta.href} className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 hover:bg-cyan-400">
              {hero.primaryCta.label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href={hero.secondaryCta.href} className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white hover:bg-white/10">
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
        <HeroSlider />
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Build the trust metric and case-study preview sections**

```tsx
// /Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/TrustMetrics.tsx
import { homeConversionContent } from "@/app/content/home-conversion";

export default function TrustMetrics() {
  return (
    <section className="border-y border-slate-200 bg-white py-8">
      <div className="theme-container grid gap-4 md:grid-cols-4">
        {homeConversionContent.proofMetrics.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
            <div className="text-2xl font-bold text-slate-950">{item.value}</div>
            <div className="mt-2 text-sm font-medium text-slate-600">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

```tsx
// /Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/CaseStudyHighlights.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeConversionContent } from "@/app/content/home-conversion";

export default function CaseStudyHighlights() {
  return (
    <section className="bg-white py-24">
      <div className="theme-container">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">Case Studies</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">Sanitized production work, with real architecture decisions behind it.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {homeConversionContent.caseStudies.map((study) => (
            <article key={study.slug} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="text-2xl font-bold tracking-tight text-slate-950">{study.title}</h3>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Challenge</p>
              <p className="mt-2 text-slate-600">{study.challenge}</p>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-primary">Solution</p>
              <p className="mt-2 text-slate-600">{study.solution}</p>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-primary">Outcomes</p>
              <ul className="mt-2 space-y-2 text-slate-700">
                {study.outcomes.map((outcome) => <li key={outcome}>• {outcome}</li>)}
              </ul>
              <Link href="/case-studies" className="mt-8 inline-flex items-center font-bold text-primary">
                View case studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Build authority, philosophy, process, and lead capture sections**

```tsx
// Representative composition pattern
export default function StudioAuthority() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="theme-container grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-400">Why SofGent</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">An engineering-led studio for serious product builds.</h2>
        </div>
        <div className="grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">Architecture-led delivery</div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">AI-native execution</div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">Production-first systems thinking</div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Replace the homepage composition**

```tsx
// /Volumes/Code/sofgent/sofgent-web/app/page.tsx
import Header from "@/app/components/Layout/Header/Header";
import Footer from "@/app/components/Layout/Footer/Footer";
import ConversionHero from "@/app/components/home/conversion/ConversionHero";
import TrustMetrics from "@/app/components/home/conversion/TrustMetrics";
import CoreCapabilities from "@/app/components/home/conversion/CoreCapabilities";
import CaseStudyHighlights from "@/app/components/home/conversion/CaseStudyHighlights";
import StudioAuthority from "@/app/components/home/conversion/StudioAuthority";
import EngineeringPhilosophy from "@/app/components/home/conversion/EngineeringPhilosophy";
import DeliveryTimeline from "@/app/components/home/conversion/DeliveryTimeline";
import LeadCaptureBand from "@/app/components/home/conversion/LeadCaptureBand";
import HomeStructuredData from "@/app/components/home/conversion/HomeStructuredData";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <HomeStructuredData />
      <Header />
      <ConversionHero />
      <TrustMetrics />
      <CoreCapabilities />
      <CaseStudyHighlights />
      <StudioAuthority />
      <EngineeringPhilosophy />
      <DeliveryTimeline />
      <LeadCaptureBand />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 5: Verify homepage rendering and visual hierarchy**

Run: `npm run build`
Expected: homepage builds, case-study section is present, hero CTAs render, and no legacy WhatsApp code returns

## Task 3: Extend the Service Content Model for Technical Depth

**Files:**
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/data/services/types.ts`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/data/services/services.json`
- Modify: `/Volumes/Code/sofgent/sofgent-web/lib/sanity/types.ts`
- Modify: `/Volumes/Code/sofgent/sofgent-web/lib/sanity/queries.ts`
- Modify: `/Volumes/Code/sofgent/sofgent-web/lib/sanity/content.ts`
- Modify: `/Volumes/Code/sofgent/sofgent-web/studio-app/schemaTypes/documents/service.ts`
- Modify: `/Volumes/Code/sofgent/sofgent-web/studio-app/scripts/seed-services.mjs`

- [ ] **Step 1: Add new local service content types**

```ts
// /Volumes/Code/sofgent/sofgent-web/app/data/services/types.ts
export interface LocalServiceProofMetric {
  value: string;
  label: string;
}

export interface LocalServiceArchitectureHighlight {
  title: string;
  body: string;
}

export interface LocalServiceIdealFit {
  title: string;
  body: string;
}

export interface LocalService {
  // existing fields...
  proofMetrics?: LocalServiceProofMetric[];
  architectureHighlights?: LocalServiceArchitectureHighlight[];
  idealFit?: LocalServiceIdealFit[];
}
```

- [ ] **Step 2: Extend each service record with proof, architecture, and ideal-fit data**

```json
{
  "slug": "ai-solutions",
  "proofMetrics": [
    { "value": "4 weeks", "label": "to first production workflow" },
    { "value": "60%+", "label": "manual workflow reduction" }
  ],
  "architectureHighlights": [
    {
      "title": "Control layer around the model",
      "body": "Retrieval, validation, and human review sit around the model so outputs are operationally safe."
    }
  ],
  "idealFit": [
    {
      "title": "Best for ops-heavy AI adoption",
      "body": "Teams with repeatable workflows, high document volume, or clear internal knowledge bottlenecks."
    }
  ]
}
```

- [ ] **Step 3: Extend the Sanity schema and query layer**

```ts
// /Volumes/Code/sofgent/sofgent-web/studio-app/schemaTypes/documents/service.ts
defineField({
  name: "proofMetrics",
  title: "Proof metrics",
  type: "array",
  of: [{
    type: "object",
    fields: [
      defineField({ name: "value", type: "string" }),
      defineField({ name: "label", type: "string" }),
    ],
  }],
}),
defineField({
  name: "architectureHighlights",
  title: "Architecture highlights",
  type: "array",
  of: [{
    type: "object",
    fields: [
      defineField({ name: "title", type: "string" }),
      defineField({ name: "body", type: "text", rows: 3 }),
    ],
  }],
}),
defineField({
  name: "idealFit",
  title: "Ideal fit",
  type: "array",
  of: [{
    type: "object",
    fields: [
      defineField({ name: "title", type: "string" }),
      defineField({ name: "body", type: "text", rows: 3 }),
    ],
  }],
}),
```

```ts
// /Volumes/Code/sofgent/sofgent-web/lib/sanity/queries.ts
proofMetrics,
architectureHighlights,
idealFit,
```

- [ ] **Step 4: Map the new fields in the content adapter and seed script**

```ts
// /Volumes/Code/sofgent/sofgent-web/lib/sanity/content.ts
export type ServiceView = ServiceListView & {
  // existing fields...
  proofMetrics: Array<{ value: string; label: string }>;
  architectureHighlights: Array<{ title: string; body: string }>;
  idealFit: Array<{ title: string; body: string }>;
};
```

```js
// /Volumes/Code/sofgent/sofgent-web/studio-app/scripts/seed-services.mjs
proofMetrics: (item.proofMetrics || []).map((metric) =>
  createArrayObject({ value: metric.value, label: metric.label }),
),
architectureHighlights: (item.architectureHighlights || []).map((item) =>
  createArrayObject({ title: item.title, body: item.body }),
),
idealFit: (item.idealFit || []).map((item) =>
  createArrayObject({ title: item.title, body: item.body }),
),
```

- [ ] **Step 5: Verify the seed script still works**

Run: `cd /Volumes/Code/sofgent/sofgent-web/studio-app && npm run seed:services:dry`
Expected: all services print `Would upsert service.<slug>` with no schema-related failures

## Task 4: Redesign Service Detail Pages for Architecture and Conversion

**Files:**
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceProofMetrics.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceArchitectureHighlights.tsx`
- Create: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceIdealFit.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceHero.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceTrustBar.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceApproach.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServicePage.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceCTA.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/components/services/detail/StickyServiceCta.tsx`

- [ ] **Step 1: Build proof metric and architecture sections**

```tsx
// /Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceProofMetrics.tsx
import type { ServiceView } from "@/lib/sanity/content";

export default function ServiceProofMetrics({ service }: { service: ServiceView }) {
  if (!service.proofMetrics?.length) return null;
  return (
    <section className="border-b border-slate-200 bg-white py-14">
      <div className="theme-container grid gap-4 md:grid-cols-3">
        {service.proofMetrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
            <div className="text-3xl font-bold tracking-tight text-slate-950">{metric.value}</div>
            <div className="mt-2 text-sm font-medium text-slate-600">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

```tsx
// /Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceArchitectureHighlights.tsx
import type { ServiceView } from "@/lib/sanity/content";

export default function ServiceArchitectureHighlights({ service }: { service: ServiceView }) {
  if (!service.architectureHighlights?.length) return null;
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="theme-container">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-400">Architecture Highlights</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {service.architectureHighlights.map((item) => (
            <article key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add ideal-fit qualification section**

```tsx
// /Volumes/Code/sofgent/sofgent-web/app/components/services/detail/ServiceIdealFit.tsx
import type { ServiceView } from "@/lib/sanity/content";

export default function ServiceIdealFit({ service }: { service: ServiceView }) {
  if (!service.idealFit?.length) return null;
  return (
    <section className="bg-white py-20 border-b border-slate-100">
      <div className="theme-container">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">Best Fit</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">Who this engagement is built for.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {service.idealFit.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Strengthen hero, trust bar, and process copy**

```tsx
// representative ServicePage composition
export default function ServicePage({ service }: { service: ServiceView }) {
  return (
    <>
      <ServiceHero service={service} />
      <ServiceProofMetrics service={service} />
      <ServiceTrustBar service={service} />
      <ServiceProblem service={service} />
      <ServiceArchitectureHighlights service={service} />
      <ServiceApproach service={service} />
      <ServiceDeliverables service={service} />
      <ServiceIdealFit service={service} />
      <ServiceUseCases service={service} />
      <ServiceTechStack service={service} />
      <ServiceWhyChooseUs service={service} />
      <ServicePricing service={service} />
      <ServiceFAQ service={service} />
      <ServiceCTA service={service} />
      <StickyServiceCta />
    </>
  );
}
```

- [ ] **Step 4: Improve CTA surfaces**

```tsx
// /Volumes/Code/sofgent/sofgent-web/app/components/services/detail/StickyServiceCta.tsx
<div className="fixed bottom-4 inset-x-4 z-30 md:bottom-6 md:right-6 md:left-auto">
  <div className="flex gap-3 rounded-full border border-slate-200 bg-white/95 p-2 shadow-2xl backdrop-blur">
    <Link href={CALENDLY_URL} className="rounded-full bg-cyan-500 px-5 py-3 font-bold text-slate-950">Book Free Consultation</Link>
    <Link href="/contact" className="rounded-full border border-slate-200 px-5 py-3 font-bold text-slate-700">Send Project Details</Link>
  </div>
</div>
```

- [ ] **Step 5: Verify service page build and routes**

Run: `npm run build`
Expected: `/services/[slug]` renders all eight service pages with new sections and no missing-field failures

## Task 5: Refresh the Services Archive and Shared Conversion Shell

**Files:**
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/(pages)/services/page.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/components/Layout/Header/Header.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/components/Layout/Footer/Footer.tsx`
- Modify: `/Volumes/Code/sofgent/sofgent-web/app/layout.tsx`

- [ ] **Step 1: Reframe the services archive as a technical consultative entry point**

```tsx
// /Volumes/Code/sofgent/sofgent-web/app/(pages)/services/page.tsx
<h1 className="text-5xl font-bold tracking-tight text-slate-950">
  Deep engineering services for AI products, internal tools, and automation systems.
</h1>
<p className="mt-6 text-lg leading-8 text-slate-600">
  Every service page explains the problem, architecture, process, and engagement model so buyers can evaluate fit fast.
</p>
```

- [ ] **Step 2: Keep the top navigation CTA language consistent**

```tsx
// /Volumes/Code/sofgent/sofgent-web/app/components/Layout/Header/Header.tsx
const primaryCtaLabel = "Book Free Consultation";
```

- [ ] **Step 3: Keep the footer service links conversion-relevant**

```tsx
// /Volumes/Code/sofgent/sofgent-web/app/components/Layout/Footer/Footer.tsx
const serviceList = (await getServices())
  .sort((a, b) => a.order - b.order)
  .slice(0, 6);
```

- [ ] **Step 4: Add homepage/service structured data support**

```tsx
// /Volumes/Code/sofgent/sofgent-web/app/components/home/conversion/HomeStructuredData.tsx
import Script from "next/script";

export default function HomeStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SofGent",
    description: "AI Product Studio building SaaS products, automation systems, and internal business tools fast.",
    areaServed: "Global",
    serviceType: [
      "AI implementation",
      "SaaS MVP development",
      "workflow automation",
      "internal business systems",
      "document intelligence systems"
    ]
  };

  return <Script id="home-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
```

- [ ] **Step 5: Verify shared shell still builds and renders**

Run: `npm run build`
Expected: no layout/header/footer regressions and metadata/structured data compile cleanly

## Task 6: Full Verification and Browser QA

**Files:**
- Test: `/Volumes/Code/sofgent/sofgent-web`

- [ ] **Step 1: Run the production build**

Run: `npm run build`
Expected: successful build with homepage, `/services`, and all `/services/[slug]` routes generated cleanly

- [ ] **Step 2: Start the local dev server**

Run: `npm run dev`
Expected: local app available at `http://localhost:3000`

- [ ] **Step 3: Verify homepage conversion flow in the browser**

Run: inspect `http://localhost:3000/`
Expected:
- strong hero above the fold
- trust metrics visible early
- case-study section looks premium
- repeated CTAs are visible every 1–2 sections

- [ ] **Step 4: Verify at least three service pages**

Run:
- `http://localhost:3000/services/ai-solutions`
- `http://localhost:3000/services/saas-mvp-development`
- `http://localhost:3000/services/document-intelligence-systems`

Expected:
- architecture/process sections visible
- dual CTAs render
- sticky CTA appears on scroll
- FAQ and pricing remain intact

- [ ] **Step 5: Refresh CMS sync**

Run: `cd /Volumes/Code/sofgent/sofgent-web/studio-app && npm run seed:services`
Expected: service records update in Sanity with the new architecture/proof/fit fields

---

Plan complete and saved to `docs/superpowers/plans/2026-05-06-week1-conversion-sprint.md`. Two execution options:

1. Subagent-Driven (recommended) - I dispatch a fresh subagent per task, review between tasks, fast iteration

2. Inline Execution - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
