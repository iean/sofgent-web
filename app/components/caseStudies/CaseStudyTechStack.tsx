import type { CaseStudyView } from "@/lib/sanity/content";

export default function CaseStudyTechStack({
   study,
}: {
   study: CaseStudyView;
}) {
   if (!study.techStack || study.techStack.length === 0) return null;

   return (
      <section className="bg-slate-50 py-16 md:py-20 border-t border-slate-200">
         <div className="theme-container">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary mb-6">
               Tech Stack
            </p>
            <ul className="flex flex-wrap gap-3">
               {study.techStack.map((tech) => (
                  <li
                     key={tech}
                     className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                     {tech}
                  </li>
               ))}
            </ul>
         </div>
      </section>
   );
}
