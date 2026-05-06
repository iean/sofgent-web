import { CALENDLY_URL } from "@/lib/constants";

export const homeConversionContent = {
  hero: {
    eyebrow: "AI Product Studio",
    headline: "Build production-ready AI products and internal systems in weeks.",
    subheadline:
      "SofGent builds AI-powered SaaS products, automation systems, and internal business tools fast, with architecture strong enough for real operations and real growth.",
    primaryCta: {
      label: "Book Free Consultation",
      href: CALENDLY_URL,
      external: true,
    },
    secondaryCta: {
      label: "View Case Studies",
      href: "/case-studies",
    },
    trustIndicators: [
      "AI Integrations",
      "SaaS Architecture",
      "Multi-Tenant Systems",
      "Enterprise Workflows",
      "Fast MVP Delivery",
    ],
    supportCards: [
      {
        label: "Typical delivery",
        value: "2-6 weeks",
      },
      {
        label: "Working demos",
        value: "Weekly",
      },
      {
        label: "Build style",
        value: "Architecture first",
      },
      {
        label: "Best for",
        value: "Founders, SMEs, ops teams",
      },
    ],
  },
  proofMetrics: [
    {
      value: "4 weeks",
      label: "to ship first production AI workflow",
    },
    {
      value: "78%",
      label: "reduction in manual document handling in sanitized delivery work",
    },
    {
      value: "60%+",
      label: "manual workflow reduction on ops-heavy internal systems",
    },
    {
      value: "Multi-tenant",
      label: "SaaS architecture designed from day one",
    },
  ],
  capabilities: [
    {
      slug: "saas-mvp-development",
      eyebrow: "Launch fast",
      title: "SaaS MVP development",
      description:
        "Launch customer-ready SaaS products with tenancy, auth, billing, and deployment already in place.",
      proof: "Built for real customers, not prototype rewrites.",
      icon: "layers",
    },
    {
      slug: "ai-solutions",
      eyebrow: "Operational AI",
      title: "AI implementation",
      description:
        "Deploy AI features, assistants, and workflow automation inside the systems your team already runs.",
      proof: "Control layers, validation, and human review included.",
      icon: "sparkles",
    },
    {
      slug: "system-integration",
      eyebrow: "Connected stack",
      title: "Workflow automation & integrations",
      description:
        "Connect ERPs, CRMs, payment tools, and internal apps so data moves without manual re-entry.",
      proof: "Built for resilience, retries, and auditability.",
      icon: "workflow",
    },
    {
      slug: "document-intelligence-systems",
      eyebrow: "Document-heavy operations",
      title: "AI document systems",
      description:
        "Turn PDFs, forms, scans, and attachments into validated operational data with OCR and extraction pipelines.",
      proof: "OCR, classification, extraction, and review in one system.",
      icon: "scan",
    },
    {
      slug: "ai-ready-data-engineering",
      eyebrow: "Data foundation",
      title: "AI-ready data engineering",
      description:
        "Structure fragmented business data into schemas, pipelines, and APIs your analytics and AI systems can trust.",
      proof: "Designed for retrieval, automation, and reporting.",
      icon: "database",
    },
    {
      slug: "custom-software-development",
      eyebrow: "Internal modernization",
      title: "Custom business systems",
      description:
        "Replace brittle spreadsheets and legacy tools with internal software built around the way your team actually operates.",
      proof: "Production-grade software aligned to workflow reality.",
      icon: "briefcase",
    },
  ],
  caseStudies: [
    {
      href: "/case-studies/ai-knowledge-platform",
      title: "AI Knowledge Platform",
      challenge:
        "Operational knowledge was buried across documents, SOPs, and disconnected team systems.",
      solution:
        "Built a multi-tenant knowledge platform with ingestion, vector search, access controls, and answer workflows.",
      technologies: ["Next.js", "Python", "PostgreSQL", "pgvector", "AWS"],
      outcomes: ["3x faster knowledge retrieval", "Lower onboarding friction"],
      architectureHighlight:
        "Tenant-isolated retrieval architecture with ingestion, indexing, and review controls.",
    },
    {
      href: "/case-studies",
      title: "Fintech & Payment Integration System",
      challenge:
        "Payment operations depended on manual reconciliation, inconsistent partner APIs, and fragile back-office handoffs.",
      solution:
        "Designed an integration and orchestration layer for payments, reconciliation, ledger updates, and exception handling.",
      technologies: [".NET", "PostgreSQL", "Stripe", "AWS SQS", "Docker"],
      outcomes: ["55% faster ops handling", "Cleaner reconciliation workflow"],
      architectureHighlight:
        "Separated payment events, ledger logic, and retry-safe integration workflows.",
    },
    {
      href: "/case-studies/ocr-document-automation-system",
      title: "AI Document Automation Platform",
      challenge:
        "High-volume forms and PDFs were slowing onboarding and increasing manual review costs.",
      solution:
        "Built OCR, classification, extraction, validation, and human review into one document pipeline.",
      technologies: ["FastAPI", "Transformers", "Tesseract", "Angular", "AWS"],
      outcomes: ["78% less manual document work", "Faster verification turnaround"],
      architectureHighlight:
        "OCR and extraction pipeline with structured outputs, review queue, and API delivery layer.",
    },
  ],
  authority: {
    eyebrow: "Why SofGent",
    headline: "An engineering-led studio for AI products, internal systems, and serious software builds.",
    body:
      "SofGent operates like a product engineering studio, not a generic outsourcing shop. We combine architecture planning, full-stack delivery, AI systems, and deployment ownership so teams can move from idea to production without stacking agencies or guessing through technical decisions.",
    highlights: [
      {
        title: "Team-first execution",
        body: "AI, backend, frontend, integrations, and delivery systems handled in one build team.",
      },
      {
        title: "Architecture before build",
        body: "Every engagement starts with technical scoping, system boundaries, data flow, and deployment decisions.",
      },
      {
        title: "Weekly working demos",
        body: "Progress stays visible through sprint checkpoints instead of long black-box delivery cycles.",
      },
      {
        title: "Built for production",
        body: "Monitoring, permissions, validation, rollback paths, and handover are part of the plan.",
      },
    ],
    stats: [
      { value: "2-6 weeks", label: "typical first delivery window" },
      { value: "1 team", label: "for architecture, build, and deployment" },
      { value: "Weekly", label: "demo and iteration cadence" },
    ],
  },
  philosophy: [
    {
      title: "Architecture first",
      body: "We design the data model, integration boundaries, tenancy, permissions, and deployment path before feature velocity takes over.",
    },
    {
      title: "AI-native where it creates leverage",
      body: "We use AI to remove operational drag, unlock product capability, and accelerate knowledge work, not to pad a pitch deck.",
    },
    {
      title: "Fast iteration without fragile builds",
      body: "Speed matters, but not if the result becomes a rewrite. We scope hard and ship on a production path.",
    },
    {
      title: "Business systems over vanity features",
      body: "The work is anchored to throughput, accuracy, automation, and execution quality, not decorative feature counts.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Discovery & Strategy",
      output: "Problem framing, workflow audit, and delivery recommendation.",
    },
    {
      step: "02",
      title: "Architecture & Planning",
      output: "System blueprint, scope boundaries, data model, and milestone plan.",
    },
    {
      step: "03",
      title: "Sprint-Based Development",
      output: "Core app, API layer, AI workflow, or integration surface built in focused sprints.",
    },
    {
      step: "04",
      title: "Weekly Demos & Iteration",
      output: "Working software reviewed every week with scope refinements based on real progress.",
    },
    {
      step: "05",
      title: "Deployment & Scaling",
      output: "Production deployment, observability, security checks, and scale-ready environment setup.",
    },
    {
      step: "06",
      title: "Support & Optimization",
      output: "Post-launch stabilization, next-priority roadmap, and measured system improvements.",
    },
  ],
  leadCapture: {
    eyebrow: "Free consultation",
    headline: "Get a free AI workflow audit or SaaS architecture review.",
    body:
      "We will review where the current bottleneck lives, what the first production scope should be, and whether AI, SaaS engineering, or system integration creates the fastest return.",
    bullets: [
      "Recommended build path and likely engagement type",
      "High-risk architecture or workflow issues to fix early",
      "Rough delivery range for MVP, automation, or modernization work",
    ],
    primaryCta: {
      label: "Book Free Consultation",
      href: CALENDLY_URL,
      external: true,
    },
    secondaryCta: {
      label: "Send Project Details",
      href: "/contact",
    },
  },
} as const;

export type HomeCapabilityIconKey =
  (typeof homeConversionContent.capabilities)[number]["icon"];
