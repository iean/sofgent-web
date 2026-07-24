import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getCliClient } from "sanity/cli";

const studioDir = process.cwd();
const rootDir = path.resolve(studioDir, "..");
const servicesDir = path.join(rootDir, "app/data/services");

const serviceCatalogPlacements = {
  "saas-micro-saas-solutions": [
    {
      _type: "serviceCatalogPlacement",
      section: "primary",
      tag: "Core",
      graphic: "mvp",
      order: 1,
      title: "AI SaaS MVP Development",
      description:
        "From scoped idea to deployed product in 4–6 weeks. Full stack — architecture, AI layer, UI. Fixed price, you own the code.",
    },
    {
      _type: "serviceCatalogPlacement",
      section: "legacy",
      graphic: "mvp",
      order: 3,
      title: "Custom SaaS & Micro SaaS Solutions",
      description: "Tailored SaaS and Micro SaaS solutions.",
    },
  ],
  "document-intelligence-systems": [
    {
      _type: "serviceCatalogPlacement",
      section: "primary",
      tag: "Core",
      graphic: "document-automation",
      order: 2,
      title: "AI Document Automation",
      description:
        "Turn invoices, contracts, and reports into structured data. OCR, extraction, validation, and routing — end to end.",
    },
  ],
  "ai-ready-data-engineering": [
    {
      _type: "serviceCatalogPlacement",
      section: "primary",
      tag: "Core",
      graphic: "data",
      order: 3,
      title: "AI-Ready Data Infrastructure",
      description:
        "Clean, label, and structure your data for AI. ETL pipelines, schema design, vector search, and RAG infrastructure.",
    },
  ],
  "system-integration": [
    {
      _type: "serviceCatalogPlacement",
      section: "primary",
      tag: "Add-on",
      graphic: "integration",
      order: 4,
      title: "AI Integration & APIs",
      description:
        "Connect OpenAI, Anthropic, or custom models to your existing systems via clean, versioned, documented APIs.",
    },
    {
      _type: "serviceCatalogPlacement",
      section: "legacy",
      graphic: "integration",
      order: 7,
      title: "System Integration",
      description:
        "Connecting different systems so data flows reliably without manual handoffs or re-entry.",
    },
  ],
  "product-design-ux": [
    {
      _type: "serviceCatalogPlacement",
      section: "primary",
      tag: "Add-on",
      graphic: "design",
      order: 5,
      title: "Product Design & UX",
      description:
        "Interface design that converts — from wireframes to pixel-perfect, accessible components. Design system + handoff.",
    },
  ],
  "devops-deployment-continuous-delivery": [
    {
      _type: "serviceCatalogPlacement",
      section: "primary",
      tag: "Add-on",
      graphic: "devops",
      order: 6,
      title: "DevOps & Infrastructure",
      description:
        "CI/CD pipelines, containerised cloud architecture, monitoring, and production alerting from day one.",
    },
    {
      _type: "serviceCatalogPlacement",
      section: "legacy",
      graphic: "devops",
      order: 4,
      title: "DevOps Services",
      description:
        "Streamlining software releases, delivery pipelines, cloud deployment, and operations.",
    },
  ],
  "web-application-development": [
    {
      _type: "serviceCatalogPlacement",
      section: "primary",
      tag: "Standalone",
      graphic: "web",
      order: 7,
      title: "Web Application Development",
      description:
        "Full-stack web apps on Next.js, React, and Node. Scalable architecture, SEO-ready, production-hardened.",
    },
  ],
  "mobile-app-development": [
    {
      _type: "serviceCatalogPlacement",
      section: "primary",
      tag: "Standalone",
      graphic: "mobile",
      order: 8,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile apps (React Native) with native-feel performance. App Store and Play Store submission included.",
    },
  ],
  "software-testing": [
    {
      _type: "serviceCatalogPlacement",
      section: "primary",
      tag: "Standalone",
      graphic: "qa",
      order: 9,
      title: "QA & Testing",
      description:
        "Manual and automated coverage — unit, integration, E2E, and load testing — run every sprint before anything ships.",
    },
    {
      _type: "serviceCatalogPlacement",
      section: "legacy",
      graphic: "qa",
      order: 6,
      title: "Software Testing",
      description:
        "Validates functionality, reliability, performance, and security before software reaches users.",
    },
  ],
  "custom-software-development": [
    {
      _type: "serviceCatalogPlacement",
      section: "legacy",
      graphic: "web",
      order: 1,
      title: "Custom Software Development",
      description:
        "Tailored software development services for specific business workflows and operational needs.",
    },
  ],
  "net-core-api-clean-architecture-design-services": [
    {
      _type: "serviceCatalogPlacement",
      section: "legacy",
      graphic: "integration",
      order: 2,
      title: ".NET and Angular development",
      description:
        ".NET Core API solutions using clean architecture for maintainable, scalable systems.",
    },
  ],
  "advanced-ai-solutions": [
    {
      _type: "serviceCatalogPlacement",
      section: "legacy",
      graphic: "data",
      order: 5,
      title: "AI Advanced Services",
      description:
        "Unlock innovation with AI solutions including automation, LLM workflows, and enterprise AI use cases.",
    },
  ],
  "system-maintenance": [
    {
      _type: "serviceCatalogPlacement",
      section: "legacy",
      graphic: "devops",
      order: 8,
      title: "System Maintenance",
      description:
        "Ensuring delivered systems stay stable, updated, secure, and operational over time.",
    },
  ],
};

const syntheticAiStudioServices = [
  {
    _id: "service.document-intelligence-systems",
    _type: "service",
    title: "AI document systems",
    slug: { _type: "slug", current: "document-intelligence-systems" },
    description:
      "Turn PDFs, forms, scans, and attachments into validated operational data with OCR and extraction pipelines.",
    icon: "/icons/services/image-processing.svg",
    order: 4,
    eyebrow: "Document-heavy operations",
    proof: "OCR, classification, extraction, and review in one system.",
    isPrimary: true,
    content: `# AI Document Systems

SofGent designs document-heavy operational systems where OCR, classification, extraction, validation, and human review work in one governed workflow.

## What this service covers

- OCR and document ingestion pipelines
- Structured extraction for forms, PDFs, and scanned files
- Review queues for confidence-based exceptions
- API delivery into downstream business systems
- Auditability and retry-safe workflow design

## Best fit

This is a strong fit for onboarding, compliance, finance ops, healthcare admin, claims handling, and other document-bound team workflows.
`,
  },
  {
    _id: "service.ai-ready-data-engineering",
    _type: "service",
    title: "AI-ready data engineering",
    slug: { _type: "slug", current: "ai-ready-data-engineering" },
    description:
      "Structure fragmented business data into schemas, pipelines, and APIs your analytics and AI systems can trust.",
    icon: "/icons/services/system-integration.svg",
    order: 5,
    eyebrow: "Data foundation",
    proof: "Designed for retrieval, automation, and reporting.",
    isPrimary: true,
    content: `# AI-ready Data Engineering

SofGent helps teams turn fragmented operational data into reliable schemas, pipelines, and interfaces that support reporting, automation, and AI systems.

## What this service covers

- Data modeling for operational systems
- ETL and event pipeline design
- API normalization across disconnected tools
- Retrieval-ready content and structured records
- Reporting foundations for AI-assisted workflows

## Best fit

This fits teams whose AI goals are blocked by inconsistent data, duplicated records, missing schemas, or disconnected business tools.
`,
  },
];

const overrides = {
  "saas-micro-saas-solutions": {
    title: "SaaS MVP development",
    description:
      "Launch customer-ready SaaS products with tenancy, auth, billing, and deployment already in place.",
    eyebrow: "Launch fast",
    proof: "Built for real customers, not prototype rewrites.",
    isPrimary: true,
  },
  "advanced-ai-solutions": {
    title: "AI implementation",
    description:
      "Deploy AI features, assistants, and workflow automation inside the systems your team already runs.",
    eyebrow: "Operational AI",
    proof: "Control layers, validation, and human review included.",
    isPrimary: true,
  },
  "system-integration": {
    title: "Workflow automation & integrations",
    description:
      "Connect ERPs, CRMs, payment tools, and internal apps so data moves without manual re-entry.",
    eyebrow: "Connected stack",
    proof: "Built for resilience, retries, and auditability.",
    isPrimary: true,
  },
  "custom-software-development": {
    title: "Custom business systems",
    description:
      "Replace brittle spreadsheets and legacy tools with internal software built around the way your team actually operates.",
    eyebrow: "Internal modernization",
    proof: "Production-grade software aligned to workflow reality.",
    isPrimary: true,
  },
};

function loadLocalServices() {
  const files = fs.readdirSync(servicesDir).filter((file) => file.endsWith(".md"));

  const localItems = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(servicesDir, filename), "utf8");
    const parsed = matter(fileContent);
    const slug = filename.replace(".md", "");
    const override = overrides[slug];

    return {
      _id: `service.${slug}`,
      _type: "service",
      title: override?.title ?? parsed.data.title,
      slug: { _type: "slug", current: slug },
      description: override?.description ?? parsed.data.description,
      icon: parsed.data.icon ?? "",
      content: parsed.content.trim(),
      order: parsed.data.order ?? undefined,
      eyebrow: override?.eyebrow ?? "",
      proof: override?.proof ?? "",
      isPrimary: override?.isPrimary ?? false,
      catalogPlacements: serviceCatalogPlacements[slug] ?? [],
    };
  });

  return [...syntheticAiStudioServices, ...localItems]
    .map((service) => ({
      ...service,
      catalogPlacements:
        service.catalogPlacements ?? serviceCatalogPlacements[service.slug.current] ?? [],
    }))
    .filter(
      (item, index, items) =>
        items.findIndex((entry) => entry.slug.current === item.slug.current) === index,
    );
}

async function run() {
  const client = getCliClient({ apiVersion: "2026-03-29" });
  const services = loadLocalServices();

  for (const service of services) {
    await client.createOrReplace(service);
    console.log(`Upserted ${service._id}`);
  }

  console.log(`Finished upserting ${services.length} services.`);
}

await run();
