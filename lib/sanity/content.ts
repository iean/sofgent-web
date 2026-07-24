import { getFallbackProjectBySlug, getFallbackProjectCollections, getFallbackServiceBySlug, getFallbackServices } from "@/lib/content/fallback";
import { curatedServiceSlugs } from "@/lib/content/serviceCatalog";
import { sanityFetch } from "@/lib/sanity/client";
import { isSanityConfigured } from "@/lib/sanity/env";
import { FAQS_QUERY, PROJECT_QUERY, PROJECT_SLUGS_QUERY, PROJECTS_QUERY, SERVICE_QUERY, SERVICE_SLUGS_QUERY, SERVICES_QUERY } from "@/lib/sanity/queries";
import type { SanityFaqItem, SanityProjectItem, SanityServiceItem } from "@/lib/sanity/types";

function logSanityError(scope: string, error: unknown) {
   console.error(`[sanity] ${scope}`, error);
}

const curatedServiceSlugSet = new Set<string>(curatedServiceSlugs);

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
         caseStudies: items.filter((item) => item.category === "case-study"),
         projects: items.filter((item) => item.category === "project"),
      };
   } catch (error) {
      logSanityError("Failed to fetch project collections", error);
      return getFallbackProjectCollections();
   }
}

export async function getProjectBySlug(slug: string): Promise<SanityProjectItem | null> {
   if (!isSanityConfigured) {
      return getFallbackProjectBySlug(slug);
   }

   try {
      const item = await sanityFetch<SanityProjectItem | null>({
         query: PROJECT_QUERY,
         params: { slug },
         revalidate: 60,
      });

      return item ?? getFallbackProjectBySlug(slug);
   } catch (error) {
      logSanityError(`Failed to fetch project "${slug}"`, error);
      return getFallbackProjectBySlug(slug);
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
