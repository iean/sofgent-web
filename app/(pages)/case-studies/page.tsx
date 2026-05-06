import BreadCrumb from "@/app/components/common/BreadCrumb";
import Button from "@/app/components/common/Button";
import CaseStudyArchiveCard from "@/app/components/caseStudies/CaseStudyArchiveCard";
import getPageMeta from "@/app/utils/getPageMeta";
import { CALENDLY_URL } from "@/lib/constants";
import { getCaseStudies } from "@/lib/sanity/content";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/case-studies");
}

export const revalidate = 60;

export default async function CaseStudies() {
   const studies = await getCaseStudies();

   return (
      <main className="min-h-screen bg-slate-50">
         <BreadCrumb
            pageTitle="Case Studies"
            currentPage="Case Studies"
            to="/case-studies"
         />

         {/* HERO HEADER */}
         <section className="relative pt-12 pb-24 overflow-hidden border-b border-slate-100">
            <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />

            <div className="theme-container relative z-10">
               <div className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm md:p-14">
                  <div className="max-w-3xl">
                     <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                        Portfolio Proof
                     </p>
                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]">
                        How we build real AI systems & product infrastructure.
                     </h1>
                     <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl">
                        These case studies show how we solve complex document
                        workflows, AI knowledge systems, and SaaS rebuilds with
                        production-minded execution.
                     </p>
                     <div className="mt-8 flex flex-wrap gap-4">
                        <Button
                           btnText="Book a Strategy Call"
                           href={CALENDLY_URL}
                           external={true}
                           variant="primary"
                        />
                        <Button
                           btnText="Discuss Your Product"
                           href="/contact"
                           variant="outline"
                        />
                     </div>
                  </div>
               </div>

               <div className="mt-8 grid gap-4 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm md:grid-cols-3">
                  {[
                     "Production-ready systems, not vague demos",
                     "Document AI, SaaS, and internal workflows",
                     "Built to sell, operate, and scale",
                  ].map((item) => (
                     <div
                        key={item}
                        className="flex items-center justify-center text-center rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                        {item}
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* CASE STUDIES LIST */}
         <section className="py-20 md:py-24 bg-white">
            <div className="theme-container">
               {studies.length === 0 ? (
                  <div className="rounded-[2.5rem] border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
                     <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-400 mb-3">
                        Coming soon
                     </p>
                     <h2 className="text-2xl font-bold text-slate-900">
                        Case studies will appear here once published.
                     </h2>
                     <p className="mt-3 text-slate-600">
                        Studio is configured at studio.sofgent.com — published case
                        studies surface in both preview and production environments.
                     </p>
                  </div>
               ) : (
                  <div className="grid gap-10">
                     {studies.map((study, index) => (
                        <CaseStudyArchiveCard
                           key={study.slug}
                           study={study}
                           index={index}
                        />
                     ))}
                  </div>
               )}
            </div>
         </section>

         {/* BOTTOM CTA */}
         <section className="py-24 bg-slate-50">
            <div className="theme-container">
               <div className="relative overflow-hidden rounded-[3rem] border border-slate-800 bg-slate-900 px-8 py-20 md:px-20 md:py-24 shadow-2xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(50,109,109,0.25),transparent_50%)]" />
                  <div className="relative z-10 max-w-2xl">
                     <p className="text-cyan-200 font-semibold uppercase tracking-widest mb-4">
                        Ready to build
                     </p>
                     <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Want your product to become the next case study?
                     </h2>
                     <p className="text-xl text-slate-300 mb-10">
                        We can map the architecture, workflow, and launch plan
                        for your SaaS platform, AI system, or internal logic
                        before the build starts.
                     </p>
                     <div className="flex flex-wrap items-center gap-4">
                        <Button
                           btnText="Book a Strategy Call"
                           href={CALENDLY_URL}
                           external={true}
                           variant="primary"
                        />
                        <Button
                           btnText="Plan Your AI Workflow"
                           href="/contact"
                           variant="outline"
                           className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
}
