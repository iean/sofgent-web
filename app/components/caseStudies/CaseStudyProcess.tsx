import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import type { CaseStudyView } from "@/lib/sanity/content";

function isPortableText(value: unknown): value is PortableTextBlock[] {
   return (
      Array.isArray(value) &&
      value.length > 0 &&
      typeof value[0] === "object" &&
      value[0] !== null &&
      "_type" in (value[0] as Record<string, unknown>)
   );
}

function isStringList(value: unknown): value is string[] {
   return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function PhaseBody({
   body,
}: {
   body?: CaseStudyView["problem"];
}) {
   if (!body || !Array.isArray(body) || body.length === 0) {
      return null;
   }

   return (
      <div className="prose prose-slate max-w-none text-base leading-7 text-slate-700">
         {isPortableText(body) ? (
            <PortableText value={body} />
         ) : isStringList(body) ? (
            body.map((paragraph, index) => <p key={index}>{paragraph}</p>)
         ) : null}
      </div>
   );
}

export default function CaseStudyProcess({ study }: { study: CaseStudyView }) {
   if (!study.processPhases || study.processPhases.length === 0) {
      return null;
   }

   return (
      <section className="bg-slate-950 py-20 text-white md:py-24">
         <div className="theme-container">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
               Delivery Process
            </p>
            <h2 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl">
               How we moved from diagnosis to planning, build, and release.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
               This is the part founders and operators usually care about most:
               how the problem was discovered, how the solution was planned, and
               what the implementation and testing path looked like before the
               system went live.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
               {study.processPhases.map((phase, index) => (
                  <article
                     key={`${phase.label}-${phase.title}-${index}`}
                     className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)] backdrop-blur-sm">
                     <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                           {String(index + 1).padStart(2, "0")}
                        </div>
                        <div>
                           <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
                              {phase.label}
                           </p>
                           <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                              {phase.title}
                           </h3>
                        </div>
                     </div>

                     <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
                        <PhaseBody body={phase.body} />
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}
