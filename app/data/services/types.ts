// Local fallback shape that mirrors the Sanity `service` schema.
// Normalized into ServiceView in lib/sanity/content.ts before rendering.

export type ServiceCategory =
   | "ai"
   | "saas"
   | "devops"
   | "integration"
   | "qa"
   | "maintenance";

export interface LocalServiceImage {
   src: string;
   alt: string;
}

export interface LocalServiceProblem {
   eyebrow: string;
   title: string;
   points: Array<{ title: string; body: string }>;
}

export interface LocalServiceApproach {
   eyebrow: string;
   title: string;
   steps: Array<{ step: string; title: string; body: string }>;
}

export interface LocalServiceWhyPillar {
   title: string;
   body: string;
}

export interface LocalServiceUseCase {
   title: string;
   body: string;
   outcome?: string;
}

export interface LocalServicePricing {
   from?: string;
   model?: string;
   note?: string;
}

export interface LocalService {
   slug: string;
   title: string;
   category: ServiceCategory;
   tagline: string;
   summary: string;
   heroImage: LocalServiceImage;
   keywords: string[];
   industries: string[];
   outcomes: string[];
   problem: LocalServiceProblem;
   approach: LocalServiceApproach;
   deliverables: string[];
   techStack: string[];
   whyChooseUs: LocalServiceWhyPillar[];
   useCases: LocalServiceUseCase[];
   pricing?: LocalServicePricing;
   faqSection?: string;
   featured?: boolean;
   order: number;
   publishedAt: string;
   seoTitle?: string;
   seoDescription?: string;
}
