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
      <section className="bg-[linear-gradient(180deg,#f6f9fc_0%,#eef3f8_100%)]">
         <BreadCrumb
            pageTitle="Case Studies"
            currentPage="Case Studies"
            to="/case-studies"
         />

         <div className="mx-auto theme-container py-16 md:py-24">
            <div className="grid gap-8 rounded-[36px] border border-slate-200 bg-white p-7 shadow-[0_28px_80px_rgba(15,23,42,0.08)] md:p-10 xl:grid-cols-[0.95fr_1.05fr]">
               <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
                     Portfolio Proof
                  </p>
                  <h1 className="mt-5 text-34 font-semibold tracking-[-0.04em] text-slate-950 md:text-[56px] md:leading-[1.04]">
                     Case studies that show how SofGent builds real AI systems
                     and product infrastructure.
                  </h1>
                  <p className="mt-6 text-[18px] leading-8 text-slate-600">
                     These are polished SofGent-branded case studies built to
                     show how we solve document workflows, AI knowledge systems,
                     and custom SaaS operations with production-minded
                     execution.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                     <Button btnText="Book a Strategy Call" href="/contact" />
                     <Button
                        btnText="Discuss Your Product"
                        href="/contact"
                        className="border border-slate-200 bg-white text-slate-900 shadow-none hover:bg-slate-50"
                     />
                  </div>
               </div>

               <VisualPlaceholder
                  label="[IMAGE: portfolio overview board]"
                  description="Placeholder for a clean case-study collage showing document automation, AI knowledge workflows, and a multi-tenant platform dashboard."
                  className="min-h-[320px]"
               />
            </div>

            <div className="mt-8 grid gap-4 rounded-[30px] border border-slate-200 bg-white/90 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:grid-cols-3 md:p-5">
               {[
                  "Production-ready systems, not vague demos",
                  "Document AI, SaaS, and internal workflow software",
                  "Built to sell, operate, and scale",
               ].map((item) => (
                  <div
                     key={item}
                     className="rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
                     {item}
                  </div>
               ))}
            </div>

            <div className="mt-12 grid gap-8">
               {caseStudies.map((study, index) => (
                  <CaseStudyStoryCard
                     key={study.slug}
                     project={study}
                     index={index}
                  />
               ))}
            </div>

            <div className="mt-12 rounded-[36px] border border-slate-900/80 bg-[linear-gradient(135deg,#08111f_0%,#163042_100%)] px-7 py-10 text-white shadow-[0_30px_100px_rgba(8,17,31,0.18)] md:px-10 md:py-12">
               <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
                  <div className="max-w-3xl">
                     <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                        Ready To Build
                     </p>
                     <h2 className="mt-4 text-34 font-semibold tracking-[-0.04em] md:text-48">
                        Want your product or workflow to become the next case
                        study?
                     </h2>
                     <p className="mt-5 text-[18px] leading-8 text-slate-200">
                        We can map the architecture, workflow, and launch plan
                        for your SaaS platform, AI system, or internal business
                        software before the build starts.
                     </p>
                     <div className="mt-8 flex flex-wrap gap-4">
                        <Button btnText="Book a Strategy Call" href="/contact" />
                        <Button
                           btnText="Plan Your AI Workflow"
                           href="/contact"
                           className="border border-white/10 bg-white/5 text-white shadow-none hover:bg-white/10"
                        />
                     </div>
                  </div>

                  <VisualPlaceholder
                     label="[IMAGE: next case study roadmap]"
                     description="Placeholder for a simple product roadmap, system architecture sketch, and discovery workshop output."
                     tone="dark"
                     className="min-h-[240px]"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
