import { getFallbackProjectBySlug, getFallbackProjectCollections, getFallbackServiceBySlug, getFallbackServices } from "@/lib/content/fallback";
import { curatedServiceSlugs } from "@/lib/content/serviceCatalog";
import { sanityFetch } from "@/lib/sanity/client";
import { isSanityConfigured } from "@/lib/sanity/env";
import { FAQS_QUERY, HOMEPAGE_CASE_STUDIES_QUERY, LIVE_PROJECT_QUERY, LIVE_PROJECT_SLUGS_QUERY, LIVE_PROJECTS_QUERY, PROJECT_QUERY, PROJECT_SLUGS_QUERY, PROJECTS_QUERY, SERVICE_QUERY, SERVICE_SLUGS_QUERY, SERVICES_QUERY } from "@/lib/sanity/queries";
import type { SanityFaqItem, SanityLiveProjectItem, SanityProjectItem, SanityServiceItem } from "@/lib/sanity/types";

function logSanityError(scope: string, error: unknown) {
   console.error(`[sanity] ${scope}`, error);
}

const curatedServiceSlugSet = new Set<string>(curatedServiceSlugs);

const caseStudyImageFallbacks: Record<string, string> = {
   "ai-knowledge-platform": "/images/case-studies/knowledge-platform.svg",
   "fintech-payment-integration-system": "/images/case-studies/payments-integration.svg",
   "ocr-document-automation-system": "/images/case-studies/document-automation.svg",
};

const liveProjectOverridesBySlug: Record<string, Partial<SanityLiveProjectItem>> = {
   "easykt-ai-knowledge-base": {
      title: "EasyKT — Knowledge Transfer & Onboarding Platform",
      eyebrow: "Knowledge ops · SaaS",
      relationship: "Ongoing product engineering",
      description:
         "A live workspace for knowledge transfer, onboarding, and governed internal search that syncs source material and turns team know-how into usable training content.",
      overview:
         "EasyKT is a live product for teams that need operational knowledge to stay usable after the meeting ends and after the expert walks away. The current platform combines workspace sync for Google Drive and uploads, pipeline tracking, searchable knowledge, onboarding flows, skill matrices, and source-scoped training draft generation so teams can capture, find, and reuse what matters.",
      supportScope:
         "SofGent continues to support product design, engineering, and release hardening as EasyKT expands its source sync, onboarding, and knowledge operations workflows.",
      technologies: [
         "Google Drive sync",
         "Knowledge search",
         "Onboarding flows",
         "Training drafts",
      ],
      highlights: [
         { value: "Live", label: "easykt.com" },
         { value: "Synced", label: "Drive + uploads" },
         { value: "Role-based", label: "Onboarding workflows" },
      ],
   },
};

function withAccurateProjectImage(item: SanityProjectItem): SanityProjectItem {
   const projectImage = item.cardImage ?? item.thumbnail ?? caseStudyImageFallbacks[item.slug];

   return {
      ...item,
      thumbnail: projectImage ?? item.thumbnail,
      screenshots: item.screenshots?.map((screenshot) => ({
         ...screenshot,
         image:
            projectImage && screenshot.image.startsWith("/images/project/haven/")
               ? projectImage
               : screenshot.image,
      })),
   };
}

function withLiveProjectOverrides(item: SanityLiveProjectItem): SanityLiveProjectItem {
   const override = liveProjectOverridesBySlug[item.slug];
   if (!override) {
      return item;
   }

   return {
      ...item,
      ...override,
   };
}

function mergeCuratedServices(items: SanityServiceItem[]): SanityServiceItem[] {
   const sanityBySlug = new Map(items.map((item) => [item.slug, item]));

   return getFallbackServices().map((fallbackItem) => {
      const sanityItem = sanityBySlug.get(fallbackItem.slug);
      if (!sanityItem) {
         return fallbackItem;
      }

      return {
         ...sanityItem,
         ...fallbackItem,
         _id: sanityItem._id,
         icon: sanityItem.icon ?? fallbackItem.icon,
      };
   });
}

export async function getServices(): Promise<SanityServiceItem[]> {
   if (!isSanityConfigured) {
      return getFallbackServices();
   }

   try {
      const items = await sanityFetch<SanityServiceItem[]>({
         query: SERVICES_QUERY,
         revalidate: 60,
      });

      const filteredItems = items.filter((item) => curatedServiceSlugSet.has(item.slug));
      return mergeCuratedServices(filteredItems);
   } catch (error) {
      logSanityError("Failed to fetch services", error);
      return getFallbackServices();
   }
}

export async function getServiceBySlug(slug: string): Promise<SanityServiceItem | null> {
   if (!curatedServiceSlugSet.has(slug)) {
      return null;
   }

   if (!isSanityConfigured) {
      return getFallbackServiceBySlug(slug);
   }

   try {
      const item = await sanityFetch<SanityServiceItem | null>({
         query: SERVICE_QUERY,
         params: { slug },
         revalidate: 60,
      });

      const fallbackItem = getFallbackServiceBySlug(slug);
      if (!item) {
         return fallbackItem;
      }

      return fallbackItem
         ? {
              ...item,
              ...fallbackItem,
              _id: item._id,
              icon: item.icon ?? fallbackItem.icon,
           }
         : item;
   } catch (error) {
      logSanityError(`Failed to fetch service "${slug}"`, error);
      return getFallbackServiceBySlug(slug);
   }
}

export async function getServiceSlugs(): Promise<string[]> {
   if (!isSanityConfigured) {
      return getFallbackServices().map((item) => item.slug);
   }

   try {
      const items = await sanityFetch<Array<{ slug?: string }>>({
         query: SERVICE_SLUGS_QUERY,
         revalidate: 60,
      });

      const slugs = items
         .map((item) => item.slug)
         .filter((slug): slug is string => typeof slug === "string")
         .filter((slug) => curatedServiceSlugSet.has(slug));
      return slugs.length > 0 ? slugs : getFallbackServices().map((item) => item.slug);
   } catch (error) {
      logSanityError("Failed to fetch service slugs", error);
      return getFallbackServices().map((item) => item.slug);
   }
}

export async function getProjectCollections(): Promise<{
   caseStudies: SanityProjectItem[];
   projects: SanityProjectItem[];
}> {
   if (!isSanityConfigured) {
      return getFallbackProjectCollections();
   }

   try {
      const items = await sanityFetch<SanityProjectItem[]>({
         query: PROJECTS_QUERY,
         revalidate: 60,
      });

      if (items.length === 0) {
         return getFallbackProjectCollections();
      }

      return {
         caseStudies: items
            .filter((item) => item.category === "case-study")
            .map(withAccurateProjectImage),
         projects: items
            .filter((item) => item.category === "project")
            .map(withAccurateProjectImage),
      };
   } catch (error) {
      logSanityError("Failed to fetch project collections", error);
      return getFallbackProjectCollections();
   }
}

export async function getHomepageCaseStudies(): Promise<SanityProjectItem[]> {
   const fallbackStudies = getFallbackProjectCollections().caseStudies.slice(0, 3);

   if (!isSanityConfigured) {
      return fallbackStudies;
   }

   try {
      const items = await sanityFetch<SanityProjectItem[]>({
         query: HOMEPAGE_CASE_STUDIES_QUERY,
         revalidate: 60,
      });

      return items.length > 0 ? items.map(withAccurateProjectImage) : fallbackStudies;
   } catch (error) {
      logSanityError("Failed to fetch homepage case studies", error);
      return fallbackStudies;
   }
}

export async function getLiveProjects(): Promise<SanityLiveProjectItem[]> {
   if (!isSanityConfigured) {
      return [];
   }

   try {
      const items = await sanityFetch<SanityLiveProjectItem[]>({
         query: LIVE_PROJECTS_QUERY,
         revalidate: 60,
      });
      return items.map(withLiveProjectOverrides);
   } catch (error) {
      logSanityError("Failed to fetch live projects", error);
      return [];
   }
}

export async function getLiveProjectBySlug(slug: string): Promise<SanityLiveProjectItem | null> {
   if (!isSanityConfigured) {
      return null;
   }

   try {
      const item = await sanityFetch<SanityLiveProjectItem | null>({
         query: LIVE_PROJECT_QUERY,
         params: { slug },
         revalidate: 60,
      });
      return item ? withLiveProjectOverrides(item) : null;
   } catch (error) {
      logSanityError(`Failed to fetch live project "${slug}"`, error);
      return null;
   }
}

export async function getLiveProjectSlugs(): Promise<string[]> {
   if (!isSanityConfigured) {
      return [];
   }

   try {
      const items = await sanityFetch<Array<{ slug?: string }>>({
         query: LIVE_PROJECT_SLUGS_QUERY,
         revalidate: 60,
      });

      return items.map((item) => item.slug).filter(Boolean) as string[];
   } catch (error) {
      logSanityError("Failed to fetch live project slugs", error);
      return [];
   }
}

export async function getProjectBySlug(slug: string): Promise<SanityProjectItem | null> {
   if (!isSanityConfigured) {
      const fallbackItem = getFallbackProjectBySlug(slug);
      return fallbackItem ? withAccurateProjectImage(fallbackItem) : null;
   }

   try {
      const item = await sanityFetch<SanityProjectItem | null>({
         query: PROJECT_QUERY,
         params: { slug },
         revalidate: 60,
      });

      const project = item ?? getFallbackProjectBySlug(slug);
      return project ? withAccurateProjectImage(project) : null;
   } catch (error) {
      logSanityError(`Failed to fetch project "${slug}"`, error);
      const fallbackItem = getFallbackProjectBySlug(slug);
      return fallbackItem ? withAccurateProjectImage(fallbackItem) : null;
   }
}

export async function getProjectSlugs(): Promise<string[]> {
   if (!isSanityConfigured) {
      const fallback = getFallbackProjectCollections();
      return [...fallback.caseStudies, ...fallback.projects].map((item) => item.slug);
   }

   try {
      const items = await sanityFetch<Array<{ slug?: string }>>({
         query: PROJECT_SLUGS_QUERY,
         revalidate: 60,
      });

      const slugs = items.map((item) => item.slug).filter(Boolean) as string[];
      if (slugs.length > 0) {
         return slugs;
      }

      const fallback = getFallbackProjectCollections();
      return [...fallback.caseStudies, ...fallback.projects].map((item) => item.slug);
   } catch (error) {
      logSanityError("Failed to fetch project slugs", error);
      const fallback = getFallbackProjectCollections();
      return [...fallback.caseStudies, ...fallback.projects].map((item) => item.slug);
   }
}

export async function getFaqs(section?: string): Promise<SanityFaqItem[]> {
   if (!isSanityConfigured) {
      return [];
   }

   try {
      return await sanityFetch<SanityFaqItem[]>({
         query: FAQS_QUERY,
         params: { section: section ?? null },
         revalidate: 60,
      });
   } catch (error) {
      logSanityError(`Failed to fetch FAQs for section "${section ?? "all"}"`, error);
      return [];
   }
}
