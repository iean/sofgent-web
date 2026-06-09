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

export interface SanityImageWithCaption extends SanityImage {
  caption?: string;
}

export interface SanityMetric {
  value: string;
  label: string;
  hint?: string;
}

export interface SanityCaseStudyProcessPhase {
  label: string;
  title: string;
  body?: PortableTextBlock[];
}

export interface SanityCaseStudyListItem {
  _id: string;
  title: string;
  slug: string;
  client?: string;
  industry: string;
  summary: string;
  duration?: string;
  publishedAt?: string;
  featured?: boolean;
  heroImage?: SanityImage;
  metrics?: SanityMetric[];
}

export interface SanityCaseStudy extends SanityCaseStudyListItem {
  architectureImage?: SanityImageWithCaption;
  processPhases?: SanityCaseStudyProcessPhase[];
  problem?: PortableTextBlock[];
  approach?: PortableTextBlock[];
  outcome?: PortableTextBlock[];
  techStack?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface SanityServiceProblemPoint {
  title: string;
  body: string;
}

export interface SanityServiceApproachStep {
  step: string;
  title: string;
  body: string;
}

export interface SanityServiceUseCase {
  title: string;
  body: string;
  outcome?: string;
}

export interface SanityServiceWhyPillar {
  title: string;
  body: string;
}

export interface SanityServicePricing {
  from?: string;
  model?: string;
  note?: string;
}

export interface SanityServiceProofMetric {
  value: string;
  label: string;
}

export interface SanityServiceArchitectureHighlight {
  title: string;
  body: string;
}

export interface SanityServiceIdealFit {
  title: string;
  body: string;
}

export interface SanityServiceListItem {
  _id: string;
  title: string;
  slug: string;
  category: string;
  tagline: string;
  summary: string;
  heroImage?: SanityImage;
  industries?: string[];
  outcomes?: string[];
  proofMetrics?: SanityServiceProofMetric[];
  idealFit?: SanityServiceIdealFit[];
  featured?: boolean;
  order?: number;
  publishedAt?: string;
}

export interface SanityService extends SanityServiceListItem {
  keywords?: string[];
  problem?: {
    eyebrow?: string;
    title?: string;
    points?: SanityServiceProblemPoint[];
  };
  approach?: {
    eyebrow?: string;
    title?: string;
    steps?: SanityServiceApproachStep[];
  };
  deliverables?: string[];
  techStack?: string[];
  whyChooseUs?: SanityServiceWhyPillar[];
  useCases?: SanityServiceUseCase[];
  proofMetrics?: SanityServiceProofMetric[];
  architectureHighlights?: SanityServiceArchitectureHighlight[];
  idealFit?: SanityServiceIdealFit[];
  pricing?: SanityServicePricing;
  faqSection?: string;
  seoTitle?: string;
  seoDescription?: string;
}
