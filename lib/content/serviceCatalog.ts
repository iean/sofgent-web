import type { SanityServiceCatalogPlacement, SanityServiceItem } from "@/lib/sanity/types";

export type ServiceGraphicName =
  | "mvp"
  | "document-automation"
  | "data"
  | "integration"
  | "design"
  | "devops"
  | "web"
  | "mobile"
  | "qa"
  | "architecture"
  | "ai-feature";

export type ServiceCatalogSection = "primary" | "legacy";
export type ServiceCatalogTag = "Core" | "Add-on" | "Standalone";

export interface ServiceCatalogEntry {
  id: string;
  slug: string;
  href: string;
  title: string;
  description: string;
  artwork: string;
  artworkAlt: string;
  graphic: ServiceGraphicName;
  section: ServiceCatalogSection;
  order: number;
  tag?: ServiceCatalogTag;
}

export const curatedServiceSlugs = [
  "saas-micro-saas-solutions",
  "document-intelligence-systems",
  "advanced-ai-solutions",
  "system-integration",
  "custom-software-development",
] as const;

const defaultPlacementsBySlug: Record<string, SanityServiceCatalogPlacement[]> = {
  "saas-micro-saas-solutions": [
    {
      section: "primary",
      tag: "Core",
      graphic: "mvp",
      order: 1,
      title: "AI Knowledge Base",
      description:
        "An intelligent knowledge platform that turns SOPs, playbooks, and team expertise into trusted, searchable answers.",
    },
  ],
  "document-intelligence-systems": [
    {
      section: "primary",
      tag: "Core",
      graphic: "document-automation",
      order: 2,
      title: "OCR Document Automation",
      description:
        "Convert forms, PDFs, scans, and attachments into structured, validated business data with OCR workflows.",
    },
  ],
  "advanced-ai-solutions": [
    {
      section: "primary",
      tag: "Core",
      graphic: "data",
      order: 3,
      title: "AI Knowledge & Quality Platform",
      description:
        "A system for knowledge transfer, quality standards, process capture, and guided execution.",
    },
  ],
  "system-integration": [
    {
      section: "primary",
      tag: "Add-on",
      graphic: "integration",
      order: 4,
      title: "AI Employee Onboarding",
      description:
        "A structured onboarding system with role-based checklists, training flows, SOP access, and progress tracking.",
    },
  ],
  "custom-software-development": [
    {
      section: "primary",
      tag: "Standalone",
      graphic: "web",
      order: 5,
      title: "AI-Enabled Custom CRM",
      description:
        "A sales and operations CRM tailored to your workflow, pipeline stages, customer records, and internal processes.",
    },
  ],
};

const artworkBySlug: Record<string, { src: string; alt: string }> = {
  "saas-micro-saas-solutions": {
    src: "/images/services/ai-solutions/ai-knowledge-base.webp",
    alt: "AI knowledge base connecting verified enterprise information, semantic search, and secure team access",
  },
  "document-intelligence-systems": {
    src: "/images/services/ai-solutions/ocr-document-automation.webp",
    alt: "AI document automation pipeline extracting and validating structured data from business documents",
  },
  "advanced-ai-solutions": {
    src: "/images/services/ai-solutions/knowledge-quality-platform.webp",
    alt: "AI knowledge transfer and quality platform connecting procedures, controls, and operational analytics",
  },
  "system-integration": {
    src: "/images/services/ai-solutions/employee-onboarding.webp",
    alt: "AI-enabled employee onboarding platform connecting identity, learning, tasks, documents, and analytics",
  },
  "custom-software-development": {
    src: "/images/services/ai-solutions/custom-crm.webp",
    alt: "AI-enabled custom CRM connecting customer profiles, sales workflows, communication, and forecasting",
  },
};

function normalizePlacement(
  service: SanityServiceItem,
  placement: SanityServiceCatalogPlacement,
  index: number,
): ServiceCatalogEntry {
  const artwork = artworkBySlug[service.slug] ?? {
    src: "/images/services/ai-solutions/custom-crm.webp",
    alt: "AI-enabled enterprise software platform",
  };

  return {
    id: `${service._id}-${placement.section}-${placement.order ?? index}`,
    slug: service.slug,
    href: `/services/${service.slug}`,
    title: placement.title ?? service.title,
    description: placement.description ?? service.description,
    artwork: artwork.src,
    artworkAlt: artwork.alt,
    graphic: (placement.graphic ?? "web") as ServiceGraphicName,
    section: placement.section,
    order: placement.order ?? service.order ?? index + 1,
    tag: placement.tag,
  };
}

export function getServiceCatalogEntries(services: SanityServiceItem[]): ServiceCatalogEntry[] {
  return services
    .filter((service) => curatedServiceSlugs.includes(service.slug as (typeof curatedServiceSlugs)[number]))
    .flatMap((service) => {
      const placements =
        defaultPlacementsBySlug[service.slug] ??
        (service.catalogPlacements && service.catalogPlacements.length > 0
          ? service.catalogPlacements
          : []);

      return placements.map((placement, index) => normalizePlacement(service, placement, index));
    })
    .sort((left, right) => {
      if (left.section !== right.section) {
        return left.section === "primary" ? -1 : 1;
      }

      if (left.order !== right.order) {
        return left.order - right.order;
      }

      return left.title.localeCompare(right.title);
    });
}

export function getPrimaryServiceCatalogEntry(
  service: SanityServiceItem,
): ServiceCatalogEntry | null {
  const placements =
    defaultPlacementsBySlug[service.slug] ??
    (service.catalogPlacements && service.catalogPlacements.length > 0
      ? service.catalogPlacements
      : []);

  const primaryPlacement = placements
    .filter((placement) => placement.section === "primary")
    .sort((left, right) => (left.order ?? 999) - (right.order ?? 999))[0];

  if (!primaryPlacement) {
    return null;
  }

  return normalizePlacement(service, primaryPlacement, 0);
}
