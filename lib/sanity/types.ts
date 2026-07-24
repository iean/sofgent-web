export interface SanityImage {
   alt?: string;
   asset?: {
      url?: string;
   };
}

export interface SanityPortableTextSpan {
   _key?: string;
   _type: "span";
   text: string;
   marks?: string[];
}

export interface SanityPortableTextMarkDef {
   _key: string;
   _type: string;
   href?: string;
}

export interface SanityPortableTextBlock {
   _key?: string;
   _type: string;
   style?: string;
   listItem?: "bullet" | "number";
   level?: number;
   children?: SanityPortableTextSpan[];
   markDefs?: SanityPortableTextMarkDef[];
   alt?: string;
   caption?: string;
   imageUrl?: string;
}

export interface SanityServiceItem {
   _id: string;
   title: string;
   slug: string;
   description: string;
   icon?: string;
   content?: string;
   order?: number;
   eyebrow?: string;
   proof?: string;
   isPrimary?: boolean;
   catalogPlacements?: SanityServiceCatalogPlacement[];
}

export interface SanityServiceCatalogPlacement {
   section: "primary" | "legacy";
   tag?: "Core" | "Add-on" | "Standalone";
   title?: string;
   description?: string;
   graphic?: string;
   order?: number;
}

export interface SanityProjectScreenshot {
   title: string;
   image: string;
}

export interface SanityProjectItem {
   _id: string;
   title: string;
   slug: string;
   category: "project" | "case-study";
   publishDate?: string;
   previewLink?: string;
   description: string;
   overview?: string;
   thumbnail?: string;
   challenge?: string;
   solution?: string;
   architectureHighlight?: string;
   technologies?: string[];
   outcomes?: string[];
   screenshots?: SanityProjectScreenshot[];
}

export interface SanityBlogPostSummary {
   _id: string;
   slug: string;
   title: string;
   excerpt: string;
   author: string;
   date: string | null;
   imageUrl: string | null;
   readTime: string;
   categories?: string[];
}

export interface SanityBlogPostDetail extends SanityBlogPostSummary {
   content: SanityPortableTextBlock[];
}

export interface SanityFaqItem {
   _id: string;
   question: string;
   answer: string;
   section: string;
   order?: number;
}
