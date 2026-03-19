export interface ProjectTheme {
   primary: string;
   secondary: string;
   surface: string;
}

export interface ProjectFieldsType {
   title: string;
   slug: string;
   category: string;
   publish_date: string;
   summary: string;
   description: string;
   problem: string;
   solution: string;
   outcome: string;
   capabilities: string[];
   industries?: string[];
   technologies?: string[];
   impact?: string;
   whyItMatters?: string;
   systemAngle?: string;
   visualLabel?: string;
   ctaLabel?: string;
   ctaHref?: string;
   theme: ProjectTheme;
}
