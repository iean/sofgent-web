import fs from "fs";
import matter from "gray-matter";
import path from "path";
import projects from "@/app/data/projects/projects.json";
import { curatedServiceSlugs } from "@/lib/content/serviceCatalog";
import type { SanityProjectItem, SanityServiceItem } from "@/lib/sanity/types";

const curatedServiceOrder = [...curatedServiceSlugs];
const curatedServiceSlugSet = new Set<string>(curatedServiceOrder);

const syntheticAiStudioServices: SanityServiceItem[] = [
   {
      _id: "document-intelligence-systems",
      slug: "document-intelligence-systems",
      title: "OCR Document Automation",
      description:
         "Turn PDFs, forms, scans, and attachments into structured, validated operational data with OCR pipelines.",
      icon: "/icons/services/image-processing.svg",
      order: 2,
      eyebrow: "OCR workflows",
      proof: "Capture, extract, validate, and route documents end to end.",
      isPrimary: true,
      content: `
# OCR Document Automation

SofGent builds OCR-based document processing systems for teams that still depend on PDFs, scans, forms, and emailed attachments to run operations.

## What this service covers

- OCR and document ingestion pipelines
- Structured extraction for forms, PDFs, and scanned files
- Confidence scoring and exception handling
- Review queues for confidence-based exceptions
- Routing into downstream systems and approvals
- Auditability, traceability, and retry-safe workflow design

## Best fit

This fits onboarding, finance operations, claims processing, compliance, healthcare administration, and any workflow where documents slow down execution.
`,
   },
];

const aiStudioServiceOverrides: Record<
   string,
   Pick<SanityServiceItem, "title" | "description" | "eyebrow" | "proof" | "isPrimary">
> = {
   "saas-micro-saas-solutions": {
      title: "AI Knowledge Base",
      description:
         "An intelligent knowledge platform that turns SOPs, playbooks, and team expertise into trusted, searchable answers.",
      eyebrow: "AI knowledge systems",
      proof: "Grounded retrieval, governed content, and role-aware access built for dependable operational use.",
      isPrimary: true,
   },
   "advanced-ai-solutions": {
      title: "AI Knowledge & Quality Platform",
      description:
         "Capture expert knowledge, guide execution, and continuously improve operational quality with an intelligent platform.",
      eyebrow: "AI operations platform",
      proof: "Turns tacit expertise into governed workflows, measurable standards, and actionable improvement signals.",
      isPrimary: true,
   },
   "system-integration": {
      title: "AI Employee Onboarding",
      description:
         "A role-aware onboarding platform that connects tasks, learning, knowledge, and progress into one guided employee journey.",
      eyebrow: "AI-enabled onboarding",
      proof: "Standardise the first 30, 60, and 90 days while giving every new hire contextual guidance.",
      isPrimary: true,
   },
   "custom-software-development": {
      title: "AI-Enabled Custom CRM",
      description:
         "A customer intelligence platform tailored to your pipeline, service model, communications, and operational workflow.",
      eyebrow: "AI customer intelligence",
      proof: "Unifies customer activity and adds intelligent recommendations without forcing a generic CRM template.",
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

   return items
      .filter((item) => curatedServiceSlugSet.has(item.slug))
      .sort((left, right) => {
         return curatedServiceOrder.indexOf(left.slug as (typeof curatedServiceOrder)[number]) -
            curatedServiceOrder.indexOf(right.slug as (typeof curatedServiceOrder)[number]);
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
            "For a knowledge-intensive services organization, operational knowledge was buried across documents, SOPs, and disconnected team systems. SofGent designed a retrieval platform that made institutional knowledge searchable, governed, and usable in production.",
         challenge:
            "A knowledge-intensive services organization had operational knowledge buried across documents, SOPs, and disconnected team systems.",
         solution:
            "Built a multi-tenant knowledge platform with ingestion, vector search, access controls, and answer workflows.",
         architectureHighlight:
            "Tenant-isolated retrieval architecture with ingestion, indexing, and review controls.",
         technologies: ["Next.js", "Python", "PostgreSQL", "pgvector", "AWS"],
         outcomes: ["Searchable institutional knowledge", "Governed, tenant-isolated access"],
         thumbnail: "/images/case-studies/knowledge-platform.svg",
         screenshots: [
            {
               title: "Knowledge platform overview",
               image: "/images/case-studies/knowledge-platform.svg",
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
            "A fintech operations team depended on manual reconciliation, inconsistent partner APIs, and fragile back-office handoffs. The resulting platform normalized events and cleaned up operational risk.",
         challenge:
            "A fintech operations team depended on manual reconciliation, inconsistent partner APIs, and fragile back-office handoffs.",
         solution:
            "Designed an integration and orchestration layer for payments, reconciliation, ledger updates, and exception handling.",
         architectureHighlight:
            "Separated payment events, ledger logic, and retry-safe integration workflows.",
         technologies: [".NET", "PostgreSQL", "Stripe", "AWS SQS", "Docker"],
         outcomes: ["Automated reconciliation", "Retry-safe partner integrations"],
         thumbnail: "/images/case-studies/payments-integration.svg",
         screenshots: [
            {
               title: "Payments workflow overview",
               image: "/images/case-studies/payments-integration.svg",
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
            "At a document-heavy operations firm, high-volume forms and PDFs were slowing onboarding and increasing manual review costs. The new platform turned document-heavy operations into a governed pipeline.",
         challenge:
            "A document-heavy operations firm had high-volume forms and PDFs slowing onboarding and increasing manual review costs.",
         solution:
            "Built OCR, classification, extraction, validation, and human review into one document pipeline.",
         architectureHighlight:
            "OCR and extraction pipeline with structured outputs, review queue, and API delivery layer.",
         technologies: ["FastAPI", "Transformers", "Tesseract", "Angular", "AWS"],
         outcomes: ["Manual review eliminated", "Structured, validated outputs"],
         thumbnail: "/images/case-studies/document-automation.svg",
         screenshots: [
            {
               title: "Document pipeline overview",
               image: "/images/case-studies/document-automation.svg",
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
