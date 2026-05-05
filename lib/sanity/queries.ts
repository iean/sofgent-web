import { defineQuery } from "@/lib/sanity/client";

export const BLOG_POSTS_QUERY = defineQuery(`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    coalesce(publishedAt, _createdAt) <= now()
  ] | order(coalesce(publishedAt, _createdAt) desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    author,
    publishedAt,
    readTime,
    categories,
    coverImage{
      alt,
      asset->{
        url
      }
    }
  }
`);

export const BLOG_POST_SLUGS_QUERY = defineQuery(`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    coalesce(publishedAt, _createdAt) <= now()
  ]{
    "slug": slug.current
  }
`);

export const BLOG_POST_QUERY = defineQuery(`
  *[
    _type == "blogPost" &&
    slug.current == $slug &&
    coalesce(publishedAt, _createdAt) <= now()
  ][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    author,
    publishedAt,
    readTime,
    categories,
    seoTitle,
    seoDescription,
    coverImage{
      alt,
      asset->{
        url
      }
    },
    body
  }
`);

export const FAQS_QUERY = defineQuery(`
  *[_type == "faq" && section == $section] | order(order asc, _createdAt asc) {
    _id,
    question,
    answer,
    section,
    order
  }
`);

export const PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    summary,
    seoTitle,
    seoDescription,
    body
  }
`);
