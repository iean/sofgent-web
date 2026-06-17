import { sanityFetch } from "@/lib/sanity/client";
import { isSanityConfigured } from "@/lib/sanity/env";
import { BLOG_POST_QUERY, BLOG_POSTS_QUERY } from "@/lib/sanity/queries";
import type { SanityBlogPostDetail, SanityBlogPostSummary } from "@/lib/sanity/types";

export type BlogPostSummary = SanityBlogPostSummary;

export type BlogPostDetail = SanityBlogPostDetail;

function logBlogError(scope: string, error: unknown) {
   console.error(`[sanity] ${scope}`, error);
}

export async function getAllBlogPosts(): Promise<BlogPostSummary[]> {
   if (!isSanityConfigured) {
      return [];
   }

   try {
      return await sanityFetch<BlogPostSummary[]>({
         query: BLOG_POSTS_QUERY,
         revalidate: 60,
      });
   } catch (error) {
      logBlogError("Failed to fetch blog posts", error);
      return [];
   }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostDetail | null> {
   if (!isSanityConfigured) {
      return null;
   }

   try {
      return await sanityFetch<BlogPostDetail | null>({
         query: BLOG_POST_QUERY,
         params: { slug },
         revalidate: 60,
      });
   } catch (error) {
      logBlogError(`Failed to fetch blog post "${slug}"`, error);
      return null;
   }
}
