import fallbackFaqs from "@/app/content/shared/faqs.json";
import homeSections from "@/app/content/shared/home-sections.json";
import { getSanityFaqItems } from "@/lib/sanity/content";
import type { SharedFaqItem, SharedHomeSections } from "@/lib/content/types";

export const sharedHomeSections = homeSections as SharedHomeSections;

export function getFallbackFaqItems(section = "services"): SharedFaqItem[] {
  return (fallbackFaqs as SharedFaqItem[])
    .filter((item) => item.section === section)
    .sort((a, b) => a.order - b.order);
}

export async function getFaqItems(section = "services"): Promise<SharedFaqItem[]> {
  const sanityFaqs = await getSanityFaqItems(section);

  if (sanityFaqs.length > 0) {
    return sanityFaqs;
  }

  return getFallbackFaqItems(section);
}
