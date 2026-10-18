import type { MetadataRoute } from "next";
import { getServiceSlugs, getProjectSlugs, getLiveProjectSlugs, getSitemapDates } from "@/lib/sanity/content";
import { getFallbackServices } from "@/lib/content/fallback";
import { getAllBlogPosts } from "@/app/lib/blogs";
import { isPlaceholderProjectSlug } from "@/app/components/seo/indexing";

const BASE_URL = "https://www.sofgent.com";

/*
 * lastModified policy: only emit a date we actually know. Google ignores
 * <lastmod> that always equals "now", so static routes omit it and CMS
 * routes use Sanity's _updatedAt.
 */
const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/ai-product-studio", priority: 0.9, changeFrequency: "weekly" },
  { path: "/custom-software", priority: 0.8, changeFrequency: "monthly" },
  { path: "/product-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/how-we-build-saas", priority: 0.7, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.8, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms-conditions", priority: 0.2, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [sanityServiceSlugs, projectSlugs, liveProjectSlugs, blogPosts, dates] = await Promise.all([
    getServiceSlugs().catch(() => [] as string[]),
    getProjectSlugs().catch(() => [] as string[]),
    getLiveProjectSlugs().catch(() => [] as string[]),
    getAllBlogPosts().catch(() => []),
    getSitemapDates().catch(() => new Map<string, Date>()),
  ]);

  const fallbackServiceSlugs = getFallbackServices().map((s) => s.slug);
  const serviceSlugs = Array.from(new Set([...sanityServiceSlugs, ...fallbackServiceSlugs]));

  const withDate = (key: string) => {
    const d = dates.get(key);
    return d ? { lastModified: d } : {};
  };

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    ...withDate(`services/${slug}`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectEntries: MetadataRoute.Sitemap = projectSlugs
    .filter((slug) => !isPlaceholderProjectSlug(slug))
    .map((slug) => ({
      url: `${BASE_URL}/projects/${slug}`,
      ...withDate(`projects/${slug}`),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  const liveProjectEntries: MetadataRoute.Sitemap = liveProjectSlugs.map((slug) => ({
    url: `${BASE_URL}/live-projects/${slug}`,
    ...withDate(`live-projects/${slug}`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug.toLowerCase()}`,
    ...(post.date && !Number.isNaN(new Date(post.date).getTime()) ? { lastModified: new Date(post.date) } : {}),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...serviceEntries, ...projectEntries, ...liveProjectEntries, ...blogEntries];
}
