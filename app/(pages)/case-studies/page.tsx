import BreadCrumb from "@/app/components/common/BreadCrumb";
import Button from "@/app/components/common/Button";
import VisualPlaceholder from "@/app/components/premiumStudio/VisualPlaceholder";
import CaseStudyStoryCard from "@/app/components/projects/CaseStudyStoryCard";
import type { ProjectFieldsType } from "@/app/data/projects/types";
import getPageMeta from "@/app/utils/getPageMeta";
import readLocalFile from "@/app/utils/readLocalFile";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/case-studies");
}

const featuredSlugs = [
   "ocr-document-automation-system",
   "ai-knowledge-platform",
   "custom-ecommerce-builder",
];

export default async function CaseStudies() {
   const projects = (await readLocalFile(
      "/app/data/projects/projects.json"
   )) as ProjectFieldsType[];

   const caseStudies = featuredSlugs
      .map((slug) => projects.find((project) => project.slug === slug))
      .filter(Boolean) as ProjectFieldsType[];

   return (
      <main className="min-h-screen bg-slate-50">
         <BreadCrumb
            pageTitle="Case Studies"
            currentPage="Case Studies"
            to="/case-studies"
         />

         {/* HERO HEADER */}
         <section className="relative pt-12 pb-24 overflow-hidden bg-grid-paper border-b border-slate-100">
            <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />
            
            <div className="theme-container relative z-10">
               <div className="grid gap-12 rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm md:p-14 xl:grid-cols-[1.1fr_0.9fr] items-center">
                  <div className="max-w-3xl">
                     <p className="text-sm font-bold uppercase tracking-widest text-brand mb-6">
                        Portfolio Proof
                     </p>
                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]">
                        How we build real AI systems & product infrastructure.
                     </h1>
                     <p className="mt-6 text-lg leading-relaxed text-slate-600">
                        These case studies show how we solve complex document workflows, AI knowledge systems,
                        and scale SaaS operations with production-minded execution.
                     </p>
                     <div className="mt-8 flex flex-wrap gap-4">
                        <Button btnText="Book a Strategy Call" href="/contact" variant="primary" />
                        <Button
                           btnText="Discuss Your Product"
                           href="/contact"
                           variant="outline"
                        />
                     </div>
                  </div>

                  <div className="relative z-10 rounded-[2rem] border border-slate-100 bg-slate-50 p-6 shadow-sm h-full flex flex-col justify-center min-h-[350px]">
                     <VisualPlaceholder
                        label="[IMAGE: portfolio overview board]"
                        description="Clean case-study collage showing document automation, AI knowledge workflows, and a multi-tenant platform dashboard."
                        className="w-full flex-grow text-sm shadow-none"
                     />
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
         <section className="py-24 bg-white">
            <div className="theme-container">
               <div className="grid gap-16">
                  {caseStudies.map((study, index) => (
                     <CaseStudyStoryCard
                        key={study.slug}
                        project={study}
                        index={index}
                     />
                  ))}
               </div>
            </div>
         </section>

         {/* BOTTOM CTA */}
         <section className="py-24 bg-slate-50">
            <div className="theme-container">
               <div className="relative overflow-hidden rounded-[3rem] border border-slate-800 bg-slate-900 px-8 py-20 md:px-20 md:py-24 shadow-2xl grid gap-12 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(50,109,109,0.25),transparent_50%)]" />
                  
                  <div className="relative z-10 max-w-2xl">
                     <p className="text-cyan-200 font-semibold uppercase tracking-widest mb-4">
                        Ready To Build
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
                        <Button btnText="Book a Strategy Call" href="/contact" variant="primary" />
                        <Button
                           btnText="Plan Your AI Workflow"
                           href="/contact"
                           variant="outline"
                           className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
                        />
                     </div>
                  </div>

                  <div className="relative z-10 w-full h-full min-h-[300px]">
                     <VisualPlaceholder
                        label="[IMAGE: next case study roadmap]"
                        description="Product roadmap, system architecture sketch, and discovery workshop output."
                        tone="dark"
                        className="h-full shadow-xl"
                     />
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
}
