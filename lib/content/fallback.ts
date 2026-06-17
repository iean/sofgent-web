import fs from "fs";
import matter from "gray-matter";
import path from "path";
import projects from "@/app/data/projects/projects.json";
import type { SanityProjectItem, SanityServiceItem } from "@/lib/sanity/types";

const syntheticAiStudioServices: SanityServiceItem[] = [
   {
      _id: "document-intelligence-systems",
      slug: "document-intelligence-systems",
      title: "AI document systems",
      description:
         "Turn PDFs, forms, scans, and attachments into validated operational data with OCR and extraction pipelines.",
      icon: "/icons/services/image-processing.svg",
      order: 4,
      eyebrow: "Document-heavy operations",
      proof: "OCR, classification, extraction, and review in one system.",
      isPrimary: true,
      content: `
# AI Document Systems

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
      _id: "ai-ready-data-engineering",
      slug: "ai-ready-data-engineering",
      title: "AI-ready data engineering",
      description:
         "Structure fragmented business data into schemas, pipelines, and APIs your analytics and AI systems can trust.",
      icon: "/icons/services/system-integration.svg",
      order: 5,
      eyebrow: "Data foundation",
      proof: "Designed for retrieval, automation, and reporting.",
      isPrimary: true,
      content: `
# AI-ready Data Engineering

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

const aiStudioServiceOverrides: Record<
   string,
   Pick<SanityServiceItem, "title" | "description" | "eyebrow" | "proof" | "isPrimary">
> = {
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

export function getFallbackServices(): SanityServiceItem[] {
   const servicesPath = path.join(process.cwd(), "app/data/services");
   const files = fs.readdirSync(servicesPath);

   const localItems = files.map((filename) => {
      const fileContent = fs.readFileSync(path.join(servicesPath, filename), "utf8");
      const parsed = matter(fileContent);
      const slug = filename.replace(".md", "");
      const override = aiStudioServiceOverrides[slug];

      return {
         _id: slug,
         slug,
         title: override?.title ?? parsed.data.title,
         description: override?.description ?? parsed.data.description,
         icon: parsed.data.icon,
         content: parsed.content,
         order: parsed.data.order,
         eyebrow: override?.eyebrow,
         proof: override?.proof,
         isPrimary: override?.isPrimary ?? false,
      } satisfies SanityServiceItem;
   });

   const items = [...syntheticAiStudioServices, ...localItems].reduce<SanityServiceItem[]>(
      (accumulator, currentItem) => {
         if (accumulator.some((item) => item.slug === currentItem.slug)) {
            return accumulator;
         }

         accumulator.push(currentItem);
         return accumulator;
      },
      [],
   );

   return items.sort((left, right) => {
      const leftPrimary = left.isPrimary ? 0 : 1;
      const rightPrimary = right.isPrimary ? 0 : 1;

      if (leftPrimary !== rightPrimary) {
         return leftPrimary - rightPrimary;
      }

      return (left.order ?? 999) - (right.order ?? 999);
   });
}

export function getFallbackServiceBySlug(slug: string) {
   return getFallbackServices().find((service) => service.slug === slug) ?? null;
}

export function getFallbackCaseStudies(): SanityProjectItem[] {
   return [
      {
         _id: "case-ai-knowledge-platform",
         title: "AI Knowledge Platform",
         slug: "ai-knowledge-platform",
         category: "case-study",
         publishDate: "2026-06-10",
         description:
            "Built a multi-tenant knowledge platform with ingestion, vector search, access controls, and answer workflows.",
         overview:
            "Operational knowledge was buried across documents, SOPs, and disconnected team systems. SofGent designed a retrieval platform that made institutional knowledge searchable, governed, and usable in production.",
         challenge:
            "Operational knowledge was buried across documents, SOPs, and disconnected team systems.",
         solution:
            "Built a multi-tenant knowledge platform with ingestion, vector search, access controls, and answer workflows.",
         architectureHighlight:
            "Tenant-isolated retrieval architecture with ingestion, indexing, and review controls.",
         technologies: ["Next.js", "Python", "PostgreSQL", "pgvector", "AWS"],
         outcomes: ["3x faster knowledge retrieval", "Lower onboarding friction"],
         thumbnail: "/images/project/haven/banner_01.png",
         screenshots: [
            {
               title: "Knowledge platform overview",
               image: "/images/project/haven/banner_01.png",
            },
         ],
      },
      {
         _id: "case-fintech-payments",
         title: "Fintech & Payment Integration System",
         slug: "fintech-payment-integration-system",
         category: "case-study",
         publishDate: "2026-06-10",
         description:
            "Designed an integration and orchestration layer for payments, reconciliation, ledger updates, and exception handling.",
         overview:
            "Payment operations depended on manual reconciliation, inconsistent partner APIs, and fragile back-office handoffs. The resulting platform normalized events and cleaned up operational risk.",
         challenge:
            "Payment operations depended on manual reconciliation, inconsistent partner APIs, and fragile back-office handoffs.",
         solution:
            "Designed an integration and orchestration layer for payments, reconciliation, ledger updates, and exception handling.",
         architectureHighlight:
            "Separated payment events, ledger logic, and retry-safe integration workflows.",
         technologies: [".NET", "PostgreSQL", "Stripe", "AWS SQS", "Docker"],
         outcomes: ["55% faster ops handling", "Cleaner reconciliation workflow"],
         thumbnail: "/images/project/haven/banner_02.jpg",
         screenshots: [
            {
               title: "Payments workflow overview",
               image: "/images/project/haven/banner_02.jpg",
            },
         ],
      },
      {
         _id: "case-ocr-document-automation",
         title: "AI Document Automation Platform",
         slug: "ocr-document-automation-system",
         category: "case-study",
         publishDate: "2026-06-10",
         description:
            "Built OCR, classification, extraction, validation, and human review into one document pipeline.",
         overview:
            "High-volume forms and PDFs were slowing onboarding and increasing manual review costs. The new platform turned document-heavy operations into a governed pipeline.",
         challenge:
            "High-volume forms and PDFs were slowing onboarding and increasing manual review costs.",
         solution:
            "Built OCR, classification, extraction, validation, and human review into one document pipeline.",
         architectureHighlight:
            "OCR and extraction pipeline with structured outputs, review queue, and API delivery layer.",
         technologies: ["FastAPI", "Transformers", "Tesseract", "Angular", "AWS"],
         outcomes: ["78% less manual document work", "Faster verification turnaround"],
         thumbnail: "/images/project/haven/banner_03.png",
         screenshots: [
            {
               title: "Document pipeline overview",
               image: "/images/project/haven/banner_03.png",
            },
         ],
      },
   ];
}

export function getFallbackProjects(): SanityProjectItem[] {
   return projects.map((project) => ({
      _id: project.slug,
      title: project.title,
      slug: project.slug,
      category: "project" as const,
      publishDate: project.publish_date,
      previewLink: project.preview_link,
      description: project.description,
      overview: project.overview,
      thumbnail: project.thumbnail,
      screenshots: project.screenshots,
      technologies: [],
      outcomes: [],
   }));
}

export function getFallbackProjectCollections() {
   return {
      caseStudies: getFallbackCaseStudies(),
      projects: getFallbackProjects(),
   };
}

export function getFallbackProjectBySlug(slug: string) {
   const allItems = [
      ...getFallbackCaseStudies(),
      ...getFallbackProjects(),
   ];

   return allItems.find((item) => item.slug === slug) ?? null;
}
