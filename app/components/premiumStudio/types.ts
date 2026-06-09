import type { LucideIcon } from "lucide-react";

export type CTAButton = {
   label: string;
   href: string;
};

export type PlaceholderContent = {
   label: string;
   description: string;
   tone?: "light" | "dark";
   /** When set, shows a themed illustration instead of the dashed placeholder box */
   image?: {
      src: string;
      alt: string;
   };
   /** Pass through to next/image for LCP (e.g. hero) */
   imagePriority?: boolean;
   /** Sharp vector illustration (preferred over AI raster where clarity matters) */
   illustration?: "process-pipeline" | "saas-delivery-workflow" | "release-architecture";
};

export type StudioSectionIntro = {
   eyebrow: string;
   title: string;
   description: string;
   visual?: PlaceholderContent;
   /** Optional icon beside the section eyebrow (premium studio pages) */
   headingIcon?: LucideIcon;
};

export type HeroBadge = {
   label: string;
   icon: LucideIcon;
};

export type HeroHighlight = {
   text: string;
   icon: LucideIcon;
};

export type HeroContent = StudioSectionIntro & {
   badges: HeroBadge[];
   highlights: HeroHighlight[];
   primaryCta: CTAButton;
   secondaryCta: CTAButton;
};

export type TrustBarItem = {
   label: string;
   icon: LucideIcon;
};

export type IconCardItem = {
   icon: LucideIcon;
   title: string;
   description: string;
};

export type ProblemSectionContent = StudioSectionIntro & {
   items: IconCardItem[];
};

export type AudienceSectionContent = StudioSectionIntro & {
   items: IconCardItem[];
};

export type ProcessStep = {
   icon: LucideIcon;
   step: string;
   title: string;
   description: string;
};

export type ProcessSectionContent = StudioSectionIntro & {
   steps: ProcessStep[];
};

export type DeliverablesSectionContent = StudioSectionIntro & {
   items: IconCardItem[];
};

export type TransformationColumn = {
   title: string;
   points: string[];
};

export type TransformationSectionContent = StudioSectionIntro & {
   before: TransformationColumn;
   after: TransformationColumn;
};

export type UseCaseItem = {
   icon: LucideIcon;
   title: string;
   description: string;
   outcome: string;
};

export type UseCasesSectionContent = StudioSectionIntro & {
   items: UseCaseItem[];
};

export type WhySofGentSectionContent = StudioSectionIntro & {
   items: IconCardItem[];
};

export type EngagementPhase = {
   window: string;
   title: string;
   description: string;
   icon: LucideIcon;
};

export type EngagementSectionContent = StudioSectionIntro & {
   phases: EngagementPhase[];
};

export type CTASectionContent = StudioSectionIntro & {
   urgency: string;
   primaryCta: CTAButton;
   secondaryCta: CTAButton;
};

export type MidCTASectionContent = StudioSectionIntro & {
   primaryCta: CTAButton;
   secondaryCta: CTAButton;
};

export type StudioPageContent = {
   hero: HeroContent;
   trustBar: TrustBarItem[];
   audience: AudienceSectionContent;
   problem: ProblemSectionContent;
   process: ProcessSectionContent;
   deliverables: DeliverablesSectionContent;
   transformation: TransformationSectionContent;
   useCases: UseCasesSectionContent;
   whySofGent: WhySofGentSectionContent;
   midCta: MidCTASectionContent;
   engagement: EngagementSectionContent;
   cta: CTASectionContent;
};
