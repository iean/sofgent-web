import { isSanityConfigured } from "@/lib/sanity/env";
import { sanityFetch } from "@/lib/sanity/client";
import {
  BLOG_POST_QUERY,
  BLOG_POST_SLUGS_QUERY,
  BLOG_POSTS_QUERY,
  FAQS_QUERY,
} from "@/lib/sanity/queries";
import type {
  SanityBlogListItem,
  SanityBlogPost,
  SanityFaqItem,
} from "@/lib/sanity/types";
import type { SharedFaqItem } from "@/lib/content/types";

function logSanityError(scope: string, error: unknown) {
  console.error(`[sanity] ${scope}`, error);
}

export async function getBlogPosts(): Promise<SanityBlogListItem[]> {
  if (!isSanityConfigured) {
    return [];
  }

  try {
    return await sanityFetch({
      query: BLOG_POSTS_QUERY,
      revalidate: 60,
    });
  } catch (error) {
    logSanityError("Failed to fetch blog posts", error);
    return [];
  }
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<SanityBlogPost | null> {
  if (!isSanityConfigured) {
    return null;
  }

  try {
    const post = await sanityFetch({
      query: BLOG_POST_QUERY,
      params: { slug },
      revalidate: 60,
    });

    return post ?? null;
  } catch (error) {
    logSanityError(`Failed to fetch blog post for slug "${slug}"`, error);
    return null;
  }
}

export async function getBlogSlugs(): Promise<string[]> {
  if (!isSanityConfigured) {
    return [];
  }

  try {
    const slugs = await sanityFetch({
      query: BLOG_POST_SLUGS_QUERY,
      revalidate: 60,
    });

    return (slugs as Array<{ slug?: string }>)
      .map((item) => item.slug)
      .filter((slug): slug is string => Boolean(slug));
  } catch (error) {
    logSanityError("Failed to fetch blog slugs", error);
    return [];
  }
}

export async function getSanityFaqItems(
  section: string,
): Promise<SharedFaqItem[]> {
  if (!isSanityConfigured) {
    return [];
  }

  try {
    const items = (await sanityFetch({
      query: FAQS_QUERY,
      params: { section },
      revalidate: 60,
    })) as SanityFaqItem[];

    return items.map((item, index) => ({
      section: item.section,
      order: item.order ?? index + 1,
      question: item.question,
      answer: item.answer,
    }));
  } catch (error) {
    logSanityError(`Failed to fetch FAQ items for section "${section}"`, error);
    return [];
  }
}
