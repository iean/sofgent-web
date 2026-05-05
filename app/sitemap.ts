import type { MetadataRoute } from "next";
import { getSiteOriginFromEnv } from "@/lib/runtime/deployment";
// When the Sanity helpers are ready, import them here:
// import { getAllBlogSlugs, getAllProjectSlugs } from "@/lib/sanity/queries";

const STATIC_ROUTES = [
   "/",
   "/services",
   "/ai-product-studio",
   "/how-we-build-saas",
   "/case-studies",
   "/projects",
   "/blog",
   "/about",
   "/contact",
   "/launch-your-mvp",
   "/services/ai-ready-data-engineering",
   "/services/document-intelligence-systems",
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

   // When the Sanity helpers are wired in, replace this with the dynamic blog
   // and project entries.
   const dynamicEntries: MetadataRoute.Sitemap = [];

   return [...staticEntries, ...dynamicEntries];
}
