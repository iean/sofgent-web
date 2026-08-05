export const SERVICES_QUERY = `
  *[
    _type == "service" &&
    defined(slug.current)
  ] | order(order asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    icon,
    content,
    order,
    eyebrow,
    proof,
    isPrimary,
    "catalogPlacements": catalogPlacements[]{
      section,
      tag,
      title,
      description,
      graphic,
      order
    }
  }
`;

export const SERVICE_QUERY = `
  *[
    _type == "service" &&
    slug.current == $slug
  ][0]{
    _id,
    title,
    "slug": slug.current,
    description,
    icon,
    content,
    order,
    eyebrow,
    proof,
    isPrimary,
    "catalogPlacements": catalogPlacements[]{
      section,
      tag,
      title,
      description,
      graphic,
      order
    }
  }
`;

export const SERVICE_SLUGS_QUERY = `
  *[_type == "service" && defined(slug.current)]{
    "slug": slug.current
  }
`;

export const PROJECTS_QUERY = `
  *[
    _type in ["projectEntry", "caseStudy"] &&
    defined(slug.current)
  ] | order(coalesce(publishedAt, _createdAt) desc) {
    _id,
    title,
    "slug": slug.current,
    "category": select(_type == "caseStudy" => "case-study", "project"),
    "publishDate": coalesce(string(publishedAt), publishDate),
    "previewLink": previewLink,
    description,
    overview,
    challenge,
    solution,
    architectureHighlight,
    technologies,
    outcomes,
    "cardImage": cardImage.asset->url,
    "thumbnail": coalesce(cardImage.asset->url, heroImage.asset->url, thumbnail.asset->url, thumbnail),
    "thumbnailAlt": coalesce(cardImage.alt, heroImage.alt, title),
    "screenshots": screenshots[]{
      title,
      "image": coalesce(image.asset->url, image)
    }
  }
`;

export const PROJECT_QUERY = `
  *[
    _type in ["projectEntry", "caseStudy"] &&
    slug.current == $slug
  ][0]{
    _id,
    title,
    "slug": slug.current,
    "category": select(_type == "caseStudy" => "case-study", "project"),
    "publishDate": coalesce(string(publishedAt), publishDate),
    "previewLink": previewLink,
    description,
    overview,
    challenge,
    solution,
    architectureHighlight,
    technologies,
    outcomes,
    "cardImage": cardImage.asset->url,
    "thumbnail": coalesce(cardImage.asset->url, heroImage.asset->url, thumbnail.asset->url, thumbnail),
    "thumbnailAlt": coalesce(cardImage.alt, heroImage.alt, title),
    "screenshots": screenshots[]{
      title,
      "image": coalesce(image.asset->url, image)
    }
  }
`;

export const PROJECT_SLUGS_QUERY = `
  *[_type in ["projectEntry", "caseStudy"] && defined(slug.current)]{
    "slug": slug.current
  }
`;

export const HOMEPAGE_CASE_STUDIES_QUERY = `
  *[
    _type == "caseStudy" &&
    defined(slug.current) &&
    (featuredOnHomepage == true || !defined(featuredOnHomepage))
  ] | order(
    coalesce(homepageOrder, 999) asc,
    coalesce(publishedAt, _createdAt) desc
  )[0...3] {
    _id,
    title,
    "slug": slug.current,
    "category": "case-study",
    "publishDate": coalesce(string(publishedAt), publishDate),
    description,
    overview,
    challenge,
    solution,
    architectureHighlight,
    technologies,
    outcomes,
    "cardImage": cardImage.asset->url,
    "thumbnail": coalesce(cardImage.asset->url, heroImage.asset->url, thumbnail.asset->url, thumbnail),
    "thumbnailAlt": coalesce(cardImage.alt, heroImage.alt, title)
  }
`;

export const LIVE_PROJECTS_QUERY = `
  *[
    _type == "liveProject" &&
    defined(slug.current) &&
    isVisible != false
  ] | order(order asc, _createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    eyebrow,
    relationship,
    description,
    overview,
    supportScope,
    websiteUrl,
    "imageUrl": cardImage.asset->url,
    "imageAlt": coalesce(cardImage.alt, title),
    technologies,
    "highlights": highlights[]{value, label},
    order
  }
`;

export const LIVE_PROJECT_QUERY = `
  *[
    _type == "liveProject" &&
    slug.current == $slug &&
    isVisible != false
  ][0] {
    _id,
    title,
    "slug": slug.current,
    eyebrow,
    relationship,
    description,
    overview,
    supportScope,
    websiteUrl,
    "imageUrl": cardImage.asset->url,
    "imageAlt": coalesce(cardImage.alt, title),
    technologies,
    "highlights": highlights[]{value, label},
    order
  }
`;

export const LIVE_PROJECT_SLUGS_QUERY = `
  *[
    _type == "liveProject" &&
    defined(slug.current) &&
    isVisible != false
  ] {
    "slug": slug.current
  }
`;

export const BLOG_POSTS_QUERY = `
  *[
    _type == "blogPost" &&
    defined(slug.current)
  ] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "author": coalesce(author, "SofGent"),
    "date": string(publishedAt),
    "imageUrl": coverImage.asset->url,
    "readTime": coalesce(readTime, "5 min read"),
    categories
  }
`;

export const BLOG_POST_QUERY = `
  *[
    _type == "blogPost" &&
    slug.current == $slug
  ][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "author": coalesce(author, "SofGent"),
    "date": string(publishedAt),
    "imageUrl": coverImage.asset->url,
    "readTime": coalesce(readTime, "5 min read"),
    categories,
    "content": body[]{
      ...,
      markDefs[]{
        ...,
        href
      },
      _type == "image" => {
        ...,
        "imageUrl": asset->url
      }
    }
  }
`;

export const FAQS_QUERY = `
  *[
    _type == "faq" &&
    (!defined($section) || section == $section)
  ] | order(order asc, _createdAt asc) {
    _id,
    question,
    answer,
    section,
    order
  }
`;
