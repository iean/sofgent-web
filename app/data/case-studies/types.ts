// Local-fallback shape that mirrors the Sanity caseStudy schema.
// The page layer normalizes Sanity + this shape into a single
// `CaseStudyView` type before rendering — see lib/sanity/content.ts.

export interface LocalCaseStudyMetric {
   value: string;
   label: string;
   hint?: string;
}

export interface LocalCaseStudyImage {
   src: string;
   alt: string;
   caption?: string;
}

export interface LocalCaseStudyProcessPhase {
   label: string;
   title: string;
   body: string[];
}

export interface LocalCaseStudy {
   slug: string;
   title: string;
   client?: string;
   industry: string;
   summary: string;
   duration?: string;
   publishedAt: string;
   featured?: boolean;
   heroImage: LocalCaseStudyImage;
   architectureImage?: LocalCaseStudyImage;
   /** When set, the detail page renders the in-app SVG illustration instead. */
   architectureSvg?: "process-pipeline";
   metrics: LocalCaseStudyMetric[];
   processPhases?: LocalCaseStudyProcessPhase[];
   problem: string[];
   approach: string[];
   outcome: string[];
   techStack: string[];
   seoTitle?: string;
   seoDescription?: string;
}
