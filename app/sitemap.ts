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

   // Wrap dynamic-slug fetches in try/catch so a Sanity outage doesn't break
   // the sitemap build. When the helpers are wired in, uncomment below:
   let dynamicEntries: MetadataRoute.Sitemap = [];
   try {
      // const blogSlugs = await getAllBlogSlugs();
      // const projectSlugs = await getAllProjectSlugs();
      // dynamicEntries = [
      //    ...blogSlugs.map((slug) => ({
      //       url: `${baseUrl}/blog/${slug}`,
      //       lastModified: now,
      //       changeFrequency: "weekly" as const,
      //       priority: 0.5,
      //    })),
      //    ...projectSlugs.map((slug) => ({
      //       url: `${baseUrl}/projects/${slug}`,
      //       lastModified: now,
      //       changeFrequency: "weekly" as const,
      //       priority: 0.6,
      //    })),
      // ];
   } catch (error) {
      console.error("[sitemap] Failed to load dynamic slugs", error);
   }

   return [...staticEntries, ...dynamicEntries];
}
