import type { MetadataRoute } from "next";
import { getSiteOriginFromEnv } from "@/lib/runtime/deployment";
import { getCaseStudySlugs, getServiceSlugs } from "@/lib/sanity/content";

const STATIC_ROUTES = [
   "/",
   "/services",
   "/ai-product-studio",
   "/how-we-build-saas",
   "/case-studies",
   "/blog",
   "/about",
   "/contact",
   "/launch-your-mvp",
   "/privacy-policy",
   "/terms-conditions",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   const baseUrl = getSiteOriginFromEnv();
   const now = new Date();

   const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
   }));

   let caseStudyEntries: MetadataRoute.Sitemap = [];
   try {
      const slugs = await getCaseStudySlugs();
      caseStudyEntries = slugs.map((slug) => ({
         url: `${baseUrl}/case-studies/${slug}`,
         lastModified: now,
         changeFrequency: "weekly" as const,
         priority: 0.6,
      }));
   } catch (error) {
      console.error("[sitemap] Failed to load case-study slugs", error);
   }

   let serviceEntries: MetadataRoute.Sitemap = [];
   try {
      const slugs = await getServiceSlugs();
      serviceEntries = slugs.map((slug) => ({
            url: `${baseUrl}/services/${slug}`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.7,
         }));
   } catch (error) {
      console.error("[sitemap] Failed to load service slugs", error);
   }

   return [...staticEntries, ...caseStudyEntries, ...serviceEntries];
}
