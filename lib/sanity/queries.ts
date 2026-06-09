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

export const CASE_STUDIES_QUERY = defineQuery(`
  *[
    _type == "caseStudy" &&
    defined(slug.current) &&
    coalesce(publishedAt, _createdAt) <= now()
  ] | order(featured desc, coalesce(publishedAt, _createdAt) desc) {
    _id,
    title,
    "slug": slug.current,
    client,
    industry,
    summary,
    duration,
    publishedAt,
    featured,
    heroImage{
      alt,
      asset->{ url }
    },
    metrics
  }
`);

export const CASE_STUDY_SLUGS_QUERY = defineQuery(`
  *[
    _type == "caseStudy" &&
    defined(slug.current) &&
    coalesce(publishedAt, _createdAt) <= now()
  ]{
    "slug": slug.current
  }
`);

export const SERVICES_QUERY = defineQuery(`
  *[
    _type == "service" &&
    defined(slug.current) &&
    coalesce(publishedAt, _createdAt) <= now()
  ] | order(order asc, coalesce(publishedAt, _createdAt) desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    tagline,
    summary,
    heroImage{
      alt,
      asset->{ url }
    },
    industries,
    outcomes,
    proofMetrics,
    idealFit,
    featured,
    order,
    publishedAt
  }
`);

export const SERVICE_SLUGS_QUERY = defineQuery(`
  *[
    _type == "service" &&
    defined(slug.current) &&
    coalesce(publishedAt, _createdAt) <= now()
  ]{
    "slug": slug.current
  }
`);

export const SERVICE_QUERY = defineQuery(`
  *[
    _type == "service" &&
    slug.current == $slug &&
    coalesce(publishedAt, _createdAt) <= now()
  ][0]{
    _id,
    title,
    "slug": slug.current,
    category,
    tagline,
    summary,
    keywords,
    industries,
    outcomes,
    featured,
    order,
    publishedAt,
    heroImage{
      alt,
      asset->{ url }
    },
    problem,
    approach,
    deliverables,
    techStack,
    whyChooseUs,
    useCases,
    proofMetrics,
    architectureHighlights,
    idealFit,
    pricing,
    faqSection,
    seoTitle,
    seoDescription
  }
`);

export const CASE_STUDY_QUERY = defineQuery(`
  *[
    _type == "caseStudy" &&
    slug.current == $slug &&
    coalesce(publishedAt, _createdAt) <= now()
  ][0]{
    _id,
    title,
    "slug": slug.current,
    client,
    industry,
    summary,
    duration,
    publishedAt,
    featured,
    heroImage{
      alt,
      asset->{ url }
    },
    architectureImage{
      alt,
      caption,
      asset->{ url }
    },
    metrics,
    processPhases[]{
      label,
      title,
      body
    },
    problem,
    approach,
    outcome,
    techStack,
    seoTitle,
    seoDescription
  }
`);
