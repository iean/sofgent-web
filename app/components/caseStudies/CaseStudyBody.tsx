import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import type { CaseStudyView } from "@/lib/sanity/content";

type Section = {
   eyebrow: string;
   heading: string;
   content?: CaseStudyView["problem"];
};

function isPortableText(value: unknown): value is PortableTextBlock[] {
   return (
      Array.isArray(value) &&
      value.length > 0 &&
      typeof value[0] === "object" &&
      value[0] !== null &&
      // PortableText blocks have `_type`; local fallback strings do not.
      "_type" in (value[0] as Record<string, unknown>)
   );
}

function isStringList(value: unknown): value is string[] {
   return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function SectionRenderer({ section }: { section: Section }) {
   if (!section.content || (Array.isArray(section.content) && section.content.length === 0)) {
      return null;
   }

   return (
      <article className="border-t border-slate-200 first:border-t-0 pt-12 first:pt-0 mt-12 first:mt-0">
         <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary mb-4">
            {section.eyebrow}
         </p>
         <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 max-w-3xl mb-6">
            {section.heading}
         </h2>
         <div className="prose prose-slate max-w-3xl text-lg leading-relaxed text-slate-700">
            {isPortableText(section.content) ? (
               <PortableText value={section.content} />
            ) : isStringList(section.content) ? (
               section.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
               ))
            ) : null}
         </div>
      </article>
   );
}

export default function CaseStudyBody({ study }: { study: CaseStudyView }) {
   const sections: Section[] = [
      { eyebrow: "The Problem", heading: "Where the engagement started.", content: study.problem },
      { eyebrow: "Our Approach", heading: "How we cut the scope and de-risked the build.", content: study.approach },
      { eyebrow: "The Outcome", heading: "What changed after the system shipped.", content: study.outcome },
   ];

   const hasAny = sections.some((section) => {
      if (!section.content) return false;
      return Array.isArray(section.content) && section.content.length > 0;
   });

   if (!hasAny) return null;

   return (
      <section className="bg-white py-20 md:py-24">
         <div className="theme-container">
            {sections.map((section) => (
               <SectionRenderer key={section.eyebrow} section={section} />
            ))}
         </div>
      </section>
   );
}
