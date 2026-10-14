/**
 * Sanity still holds template "Personal Portfolio" project docs. Until they are
 * deleted in the Studio, keep them out of the sitemap and out of the index.
 */
const PLACEHOLDER_PROJECT_SLUG = /^personal-portfolio\d*$/i;

export function isPlaceholderProjectSlug(slug: string): boolean {
  return PLACEHOLDER_PROJECT_SLUG.test(slug);
}
