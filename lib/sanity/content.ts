import { isSanityConfigured } from "@/lib/sanity/env";
import { sanityFetch } from "@/lib/sanity/client";
import {
  BLOG_POST_QUERY,
  BLOG_POST_SLUGS_QUERY,
  BLOG_POSTS_QUERY,
  CASE_STUDIES_QUERY,
  CASE_STUDY_QUERY,
  CASE_STUDY_SLUGS_QUERY,
  FAQS_QUERY,
  SERVICES_QUERY,
  SERVICE_QUERY,
  SERVICE_SLUGS_QUERY,
} from "@/lib/sanity/queries";
import type {
  SanityBlogListItem,
  SanityBlogPost,
  SanityCaseStudy,
  SanityCaseStudyListItem,
  SanityFaqItem,
  SanityService,
  SanityServiceListItem,
} from "@/lib/sanity/types";
import type { SharedFaqItem } from "@/lib/content/types";
import localCaseStudies from "@/app/data/case-studies/case-studies.json";
import type { LocalCaseStudy } from "@/app/data/case-studies/types";
import localServices from "@/app/data/services/services.json";
import type { LocalService, ServiceCategory } from "@/app/data/services/types";

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

// =================== CASE STUDIES ====================

const LOCAL_CASE_STUDIES = localCaseStudies as LocalCaseStudy[];

export type CaseStudyView = {
   source: "sanity" | "local";
   slug: string;
   title: string;
   client?: string;
   industry: string;
   summary: string;
   duration?: string;
   publishedAt?: string;
   featured?: boolean;
   heroImage: { src: string; alt: string };
   architectureImage?: { src: string; alt: string; caption?: string };
   architectureSvg?: "process-pipeline";
   metrics: Array<{ value: string; label: string; hint?: string }>;
   processPhases?: Array<{
      label: string;
      title: string;
      body?: LocalCaseStudy["problem"] | SanityCaseStudy["problem"];
   }>;
   problem?: LocalCaseStudy["problem"] | SanityCaseStudy["problem"];
   approach?: LocalCaseStudy["approach"] | SanityCaseStudy["approach"];
   outcome?: LocalCaseStudy["outcome"] | SanityCaseStudy["outcome"];
   techStack: string[];
   seoTitle?: string;
   seoDescription?: string;
};

const FALLBACK_HERO = {
   src: "/images/ai-product-studio/use-cases-board.png",
   alt: "Case study cover",
};

function fromSanityListItem(item: SanityCaseStudyListItem): CaseStudyView {
   return {
      source: "sanity",
      slug: item.slug,
      title: item.title,
      client: item.client,
      industry: item.industry,
      summary: item.summary,
      duration: item.duration,
      publishedAt: item.publishedAt,
      featured: item.featured,
      heroImage: item.heroImage?.asset?.url
         ? {
              src: item.heroImage.asset.url,
              alt: item.heroImage.alt ?? item.title,
           }
         : FALLBACK_HERO,
      metrics: item.metrics ?? [],
      techStack: [],
   };
}

function fromSanityFull(item: SanityCaseStudy): CaseStudyView {
   const base = fromSanityListItem(item);
   return {
      ...base,
      architectureImage: item.architectureImage?.asset?.url
         ? {
              src: item.architectureImage.asset.url,
              alt: item.architectureImage.alt ?? `${item.title} architecture`,
              caption: item.architectureImage.caption,
           }
         : undefined,
      architectureSvg: item.architectureImage?.asset?.url
         ? undefined
         : "process-pipeline",
      processPhases: item.processPhases?.map((phase) => ({
         label: phase.label,
         title: phase.title,
         body: phase.body,
      })),
      problem: item.problem,
      approach: item.approach,
      outcome: item.outcome,
      techStack: item.techStack ?? [],
      seoTitle: item.seoTitle,
      seoDescription: item.seoDescription,
   };
}

function fromLocal(item: LocalCaseStudy): CaseStudyView {
   return {
      source: "local",
      slug: item.slug,
      title: item.title,
      client: item.client,
      industry: item.industry,
      summary: item.summary,
      duration: item.duration,
      publishedAt: item.publishedAt,
      featured: item.featured,
      heroImage: item.heroImage,
      architectureImage: item.architectureImage,
      architectureSvg: item.architectureSvg,
      metrics: item.metrics,
      processPhases: item.processPhases,
      problem: item.problem,
      approach: item.approach,
      outcome: item.outcome,
      techStack: item.techStack,
      seoTitle: item.seoTitle,
      seoDescription: item.seoDescription,
   };
}

function mergeCaseStudyViews(
   primary: CaseStudyView,
   fallback?: CaseStudyView | null,
): CaseStudyView {
   if (!fallback) {
      return primary;
   }

   return {
      ...fallback,
      ...primary,
      heroImage: primary.heroImage ?? fallback.heroImage,
      architectureImage: primary.architectureImage ?? fallback.architectureImage,
      architectureSvg:
         primary.architectureImage || primary.architectureSvg
            ? primary.architectureSvg
            : fallback.architectureSvg,
      metrics: primary.metrics.length > 0 ? primary.metrics : fallback.metrics,
      processPhases: primary.processPhases && primary.processPhases.length > 0
         ? primary.processPhases
         : fallback.processPhases,
      problem: primary.problem && primary.problem.length > 0 ? primary.problem : fallback.problem,
      approach: primary.approach && primary.approach.length > 0 ? primary.approach : fallback.approach,
      outcome: primary.outcome && primary.outcome.length > 0 ? primary.outcome : fallback.outcome,
      techStack: primary.techStack.length > 0 ? primary.techStack : fallback.techStack,
      seoTitle: primary.seoTitle || fallback.seoTitle,
      seoDescription: primary.seoDescription || fallback.seoDescription,
   };
}

export async function getCaseStudies(): Promise<CaseStudyView[]> {
   if (!isSanityConfigured) {
      return LOCAL_CASE_STUDIES.map(fromLocal);
   }

   try {
      const items = (await sanityFetch({
         query: CASE_STUDIES_QUERY,
         revalidate: 60,
      })) as SanityCaseStudyListItem[];

      if (items && items.length > 0) {
         return items.map(fromSanityListItem);
      }

      return LOCAL_CASE_STUDIES.map(fromLocal);
   } catch (error) {
      logSanityError("Failed to fetch case studies", error);
      return LOCAL_CASE_STUDIES.map(fromLocal);
   }
}

export async function getCaseStudyBySlug(
   slug: string,
): Promise<CaseStudyView | null> {
   const fallback = LOCAL_CASE_STUDIES.find((item) => item.slug === slug);
   const fallbackView = fallback ? fromLocal(fallback) : null;

   if (!isSanityConfigured) {
      return fallbackView;
   }

   try {
      const item = (await sanityFetch({
         query: CASE_STUDY_QUERY,
         params: { slug },
         revalidate: 60,
      })) as SanityCaseStudy | null;

      if (item) {
         return mergeCaseStudyViews(fromSanityFull(item), fallbackView);
      }
   } catch (error) {
      logSanityError(`Failed to fetch case study for slug "${slug}"`, error);
   }

   return fallbackView;
}

export async function getCaseStudySlugs(): Promise<string[]> {
   const localSlugs = LOCAL_CASE_STUDIES.map((item) => item.slug);

   if (!isSanityConfigured) {
      return localSlugs;
   }

   try {
      const items = (await sanityFetch({
         query: CASE_STUDY_SLUGS_QUERY,
         revalidate: 60,
      })) as Array<{ slug?: string }>;

      const sanitySlugs = items
         .map((item) => item.slug)
         .filter((slug): slug is string => Boolean(slug));

      return Array.from(new Set([...sanitySlugs, ...localSlugs]));
   } catch (error) {
      logSanityError("Failed to fetch case study slugs", error);
      return localSlugs;
   }
}

// =================== SERVICES ====================

const LOCAL_SERVICES = localServices as LocalService[];

export type ServiceListView = {
   source: "sanity" | "local";
   slug: string;
   title: string;
   category: string;
   tagline: string;
   summary: string;
   heroImage: { src: string; alt: string };
   industries: string[];
   outcomes: string[];
   proofMetrics: Array<{ value: string; label: string }>;
   idealFit: Array<{ title: string; body: string }>;
   featured?: boolean;
   order: number;
   publishedAt?: string;
};

export type ServiceView = ServiceListView & {
   keywords: string[];
   problem?: {
      eyebrow?: string;
      title?: string;
      points: Array<{ title: string; body: string }>;
   };
   approach?: {
      eyebrow?: string;
      title?: string;
      steps: Array<{ step: string; title: string; body: string }>;
   };
   deliverables: string[];
   techStack: string[];
   whyChooseUs: Array<{ title: string; body: string }>;
   useCases: Array<{ title: string; body: string; outcome?: string }>;
   proofMetrics: Array<{ value: string; label: string }>;
   architectureHighlights: Array<{ title: string; body: string }>;
   idealFit: Array<{ title: string; body: string }>;
   pricing?: { from?: string; model?: string; note?: string };
   faqSection?: string;
   seoTitle?: string;
   seoDescription?: string;
};

const FALLBACK_SERVICE_HERO = {
   src: "/images/ai-product-studio/use-cases-board.png",
   alt: "Service overview",
};

function fromSanityServiceList(item: SanityServiceListItem): ServiceListView {
   return {
      source: "sanity",
      slug: item.slug,
      title: item.title,
      category: item.category,
      tagline: item.tagline,
      summary: item.summary,
      heroImage: item.heroImage?.asset?.url
         ? { src: item.heroImage.asset.url, alt: item.heroImage.alt ?? item.title }
         : FALLBACK_SERVICE_HERO,
      industries: item.industries ?? [],
      outcomes: item.outcomes ?? [],
      proofMetrics: item.proofMetrics ?? [],
      idealFit: item.idealFit ?? [],
      featured: item.featured,
      order: typeof item.order === "number" ? item.order : 999,
      publishedAt: item.publishedAt,
   };
}

function fromSanityServiceFull(item: SanityService): ServiceView {
   const list = fromSanityServiceList(item);
   return {
      ...list,
      keywords: item.keywords ?? [],
      problem: item.problem
         ? {
              eyebrow: item.problem.eyebrow,
              title: item.problem.title,
              points: item.problem.points ?? [],
           }
         : undefined,
      approach: item.approach
         ? {
              eyebrow: item.approach.eyebrow,
              title: item.approach.title,
              steps: item.approach.steps ?? [],
           }
         : undefined,
      deliverables: item.deliverables ?? [],
      techStack: item.techStack ?? [],
      whyChooseUs: item.whyChooseUs ?? [],
      useCases: item.useCases ?? [],
      proofMetrics: item.proofMetrics ?? [],
      architectureHighlights: item.architectureHighlights ?? [],
      idealFit: item.idealFit ?? [],
      pricing: item.pricing,
      faqSection: item.faqSection,
      seoTitle: item.seoTitle,
      seoDescription: item.seoDescription,
   };
}

function fromLocalService(item: LocalService): ServiceView {
   return {
      source: "local",
      slug: item.slug,
      title: item.title,
      category: item.category as ServiceCategory,
      tagline: item.tagline,
      summary: item.summary,
      heroImage: item.heroImage,
      industries: item.industries,
      outcomes: item.outcomes,
      featured: item.featured,
      order: item.order,
      publishedAt: item.publishedAt,
      keywords: item.keywords,
      problem: item.problem,
      approach: item.approach,
      deliverables: item.deliverables,
      techStack: item.techStack,
      whyChooseUs: item.whyChooseUs,
      useCases: item.useCases,
      proofMetrics: item.proofMetrics ?? [],
      architectureHighlights: item.architectureHighlights ?? [],
      idealFit: item.idealFit ?? [],
      pricing: item.pricing,
      faqSection: item.faqSection,
      seoTitle: item.seoTitle,
      seoDescription: item.seoDescription,
   };
}

export async function getServices(): Promise<ServiceListView[]> {
   const fallbackServices = LOCAL_SERVICES.map(fromLocalService);

   if (!isSanityConfigured) {
      return fallbackServices;
   }

   try {
      const items = (await sanityFetch({
         query: SERVICES_QUERY,
         revalidate: 60,
      })) as SanityServiceListItem[];

      if (items && items.length > 0) {
         const merged = new Map<string, ServiceListView>();

         for (const item of fallbackServices) {
            merged.set(item.slug, item);
         }

         for (const item of items.map(fromSanityServiceList)) {
            merged.set(item.slug, item);
         }

         return Array.from(merged.values());
      }
   } catch (error) {
      logSanityError("Failed to fetch services", error);
   }

   return fallbackServices;
}

export async function getServiceBySlug(
   slug: string,
): Promise<ServiceView | null> {
   const fallback = LOCAL_SERVICES.find((item) => item.slug === slug);

   if (!isSanityConfigured) {
      return fallback ? fromLocalService(fallback) : null;
   }

   try {
      const item = (await sanityFetch({
         query: SERVICE_QUERY,
         params: { slug },
         revalidate: 60,
      })) as SanityService | null;

      if (item) {
         return fromSanityServiceFull(item);
      }
   } catch (error) {
      logSanityError(`Failed to fetch service for slug "${slug}"`, error);
   }

   return fallback ? fromLocalService(fallback) : null;
}

export async function getServiceSlugs(): Promise<string[]> {
   const localSlugs = LOCAL_SERVICES.map((item) => item.slug);

   if (!isSanityConfigured) {
      return localSlugs;
   }

   try {
      const items = (await sanityFetch({
         query: SERVICE_SLUGS_QUERY,
         revalidate: 60,
      })) as Array<{ slug?: string }>;

      const sanitySlugs = items
         .map((item) => item.slug)
         .filter((slug): slug is string => Boolean(slug));

      return Array.from(new Set([...sanitySlugs, ...localSlugs]));
   } catch (error) {
      logSanityError("Failed to fetch service slugs", error);
      return localSlugs;
   }
}

// =================== FAQs ====================

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
