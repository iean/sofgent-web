import BreadCrumb from "@/app/components/common/BreadCrumb";
import Button from "@/app/components/common/Button";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/about");
}

const strengths = [
   "Scalable SaaS platform architecture",
   "AI systems and knowledge workflows",
   "Cloud infrastructure and delivery pipelines",
   "Product-oriented engineering for startups",
];

export default function About() {
   return (
      <section className="bg-[linear-gradient(180deg,#f6f9fc_0%,#eef3f8_100%)]">
         <BreadCrumb pageTitle="About" currentPage="About" to="/about" />

         <div className="mx-auto theme-container py-16 md:py-24">
            <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
               <div className="rounded-[34px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-9">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
                     Who We Are
                  </p>
                  <h1 className="mt-4 text-34 font-semibold tracking-[-0.04em] text-slate-950 md:text-48">
                     SofGent is a product-minded software studio focused on
                     SaaS systems and AI products.
                  </h1>
                  <p className="mt-6 text-[17px] leading-8 text-slate-600">
                     We work with founders, CTOs, and business owners who need
                     help turning product ideas into real software with a clear
                     technical foundation.
                  </p>
                  <p className="mt-4 text-[17px] leading-8 text-slate-600">
                     Our work sits at the intersection of architecture,
                     product delivery, AI workflows, and cloud infrastructure.
                     The goal is simple: help companies launch faster without
                     creating systems they outgrow too early.
                  </p>
               </div>

               <div className="rounded-[34px] border border-slate-200 bg-[#08111f] p-7 text-white shadow-[0_30px_100px_rgba(8,17,31,0.16)] md:p-9">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                     Founder
                  </p>
                  <h2 className="mt-4 text-[34px] font-semibold tracking-[-0.04em] md:text-[44px]">
                     Masud Alam
                  </h2>
                  <p className="mt-2 text-lg text-slate-200">
                     Founder of SofGent
                  </p>
                  <p className="mt-6 text-[17px] leading-8 text-slate-200">
                     Senior software architect with experience building scalable
                     SaaS platforms, AI systems, and cloud infrastructure.
                  </p>
                  <p className="mt-4 text-[17px] leading-8 text-slate-300">
                     The role is not just to write code. It is to shape product
                     direction, reduce technical risk, and help teams build
                     systems that stay maintainable as the business grows.
                  </p>
               </div>
            </div>

            <div className="mt-8 rounded-[34px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-9">
               <div className="grid gap-10 xl:grid-cols-[0.85fr_1.15fr]">
                  <div>
                     <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
                        What We Bring
                     </p>
                     <h2 className="mt-4 text-24 font-semibold tracking-[-0.03em] text-slate-950 md:text-[34px]">
                        A clearer path from idea, to architecture, to launch.
                     </h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                     {strengths.map((item) => (
                        <div
                           key={item}
                           className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef5f3] text-brand">
                              ✓
                           </div>
                           <p className="mt-4 text-[17px] leading-8 text-slate-700">
                              {item}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="mt-8 rounded-[34px] border border-slate-200 bg-[#eef3f8] px-7 py-10 md:px-9">
               <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
                     Work With Us
                  </p>
                  <h2 className="mt-4 text-34 font-semibold tracking-[-0.04em] text-slate-950 md:text-48">
                     If you need a product builder and technical architect, this
                     is the conversation to start.
                  </h2>
                  <div className="mt-8">
                     <Button btnText="Book a Free Strategy Call" href="/contact" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
