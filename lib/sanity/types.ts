import type { PortableTextBlock } from "sanity";

export interface SanityImageAsset {
  url: string;
}

export interface SanityImage {
  alt?: string;
  asset?: SanityImageAsset;
}

export interface SanityBlogListItem {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  author?: string;
  publishedAt?: string;
  readTime?: string;
  categories?: string[];
  coverImage?: SanityImage;
}

export interface SanityBlogPost extends SanityBlogListItem {
  body: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface SanityFaqItem {
  _id: string;
  question: string;
  answer: string;
  section: string;
  order?: number;
}
