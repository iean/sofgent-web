import { cache } from "react";
import services from "@/app/data/services/services.json";
import type { LocalService } from "@/app/data/services/types";

const CATEGORY_ICON: Record<string, string> = {
   ai: "/icons/services/ui-ux-design.svg",
   saas: "/icons/services/software-development.svg",
   devops: "/icons/services/dev-ops.svg",
   integration: "/icons/services/system-integration.svg",
   qa: "/icons/services/software-testing.svg",
   maintenance: "/icons/services/system-maintainance.svg",
};

export type ServiceMeta = {
   slug: string;
   title: string;
   description: string;
   icon: string;
   category: string;
   order: number;
};

/**
 * Synchronous service metadata for SSR components on the home page,
 * sidebars, and the legacy services list. Sources from
 * app/data/services/services.json — the same inventory that drives the
 * dynamic /services/[slug] route. Sanity-backed services are surfaced
 * through getServices() in lib/sanity/content.ts.
 */
const getServicesMeta = cache((): ServiceMeta[] => {
   return (services as LocalService[])
      .map((service) => ({
         slug: service.slug,
         title: service.title,
         description: service.tagline ?? service.summary,
         icon:
            CATEGORY_ICON[service.category] ??
            "/icons/services/software-development.svg",
         category: service.category,
         order: typeof service.order === "number" ? service.order : 999,
      }))
      .sort((a, b) => a.order - b.order);
});

export default getServicesMeta;
