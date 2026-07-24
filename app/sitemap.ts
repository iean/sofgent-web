import type { MetadataRoute } from "next";
import { getServiceSlugs, getProjectSlugs } from "@/lib/sanity/content";
import { getFallbackServices } from "@/lib/content/fallback";
import { getAllBlogPosts } from "@/app/lib/blogs";

const BASE_URL = "https://www.sofgent.com";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/ai-product-studio", priority: 0.9, changeFrequency: "weekly" },
  { path: "/custom-software", priority: 0.8, changeFrequency: "monthly" },
  { path: "/product-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/how-we-build-saas", priority: 0.7, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.8, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.7, changeFrequency: "daily" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms-conditions", priority: 0.2, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const [sanityServiceSlugs, projectSlugs, blogPosts] = await Promise.all([
    getServiceSlugs().catch(() => [] as string[]),
    getProjectSlugs().catch(() => [] as string[]),
    getAllBlogPosts().catch(() => []),
  ]);

  const fallbackServiceSlugs = getFallbackServices().map((s) => s.slug);
  const serviceSlugs = Array.from(new Set([...sanityServiceSlugs, ...fallbackServiceSlugs]));

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectEntries: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...serviceEntries, ...projectEntries, ...blogEntries];
}
