import BreadCrumb from "@/app/components/common/BreadCrumb";
import Button from "@/app/components/common/Button";
import { CALENDLY_URL } from "@/lib/constants";
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
      <main className="min-h-screen bg-slate-50">
         <BreadCrumb pageTitle="About" currentPage="About" to="/about" />

         <div className="mx-auto theme-container py-16 md:py-24 space-y-8">
            <div className="grid gap-8 xl:grid-cols-[1fr_1fr]">
               <div className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm md:p-14 relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-48 bg-grid-paper opacity-50 pointer-events-none" />
                  <div className="relative z-10">
                     <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                        Who We Are
                     </p>
                     <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.05]">
                        SofGent is a product studio focused on SaaS & AI.
                     </h1>
                     <p className="mt-6 text-lg leading-relaxed text-slate-600">
                        We work with founders, CTOs, and business owners who need
                        help turning product ideas into real software with a rock-solid
                        technical foundation.
                     </p>
                     <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        Our work sits at the intersection of scalable architecture,
                        product delivery, and AI. The goal: help companies launch 
                        faster without building systems they outgrow too early.
                     </p>
                  </div>
               </div>

               <div className="rounded-[2.5rem] border border-slate-800 bg-slate-900 p-10 text-white shadow-xl md:p-14 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(50,109,109,0.3),transparent_60%)] pointer-events-none" />
                  <div className="relative z-10">
                     <p className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-6">
                        Founder
                     </p>
                     <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                        Masud Alam
                     </h2>
                     <p className="text-lg font-medium text-cyan-100/80 mb-8">
                        Founder & Chief Architect
                     </p>
                     <p className="text-lg leading-relaxed text-slate-300 mb-4">
                        Senior software architect with extensive experience building scalable
                        SaaS platforms, AI systems, and cloud infrastructure operations.
                     </p>
                     <p className="text-lg leading-relaxed text-slate-400">
                        My role is not just to write code. It is to shape product
                        direction, reduce technical risk, and help teams build
                        systems that are both powerful and maintainable in the long run.
                     </p>
                  </div>
               </div>
            </div>

            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm md:p-14">
               <div className="grid gap-12 xl:grid-cols-[0.85fr_1.15fr]">
                  <div>
                     <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                        What We Bring
                     </p>
                     <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        A clearer path from idea, to architecture, to launch.
                     </h2>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                     {strengths.map((item) => (
                        <div
                           key={item}
                           className="flex flex-col justify-center rounded-[2rem] border border-slate-100 bg-slate-50 p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
                           <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary font-bold text-xl mb-4">
                              ✓
                           </div>
                           <p className="text-base font-medium text-slate-700 leading-snug">
                              {item}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="rounded-[2.5rem] border border-primary/20 bg-primary/5 p-10 md:p-14 text-center grid place-items-center">
               <div className="max-w-3xl">
                  <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                     Work With Us
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-10">
                     If you need a product builder and technical architect, let&apos;s talk.
                  </h2>
                  <Button btnText="Book a Free Strategy Call" href={CALENDLY_URL} external={true} variant="primary" />
               </div>
            </div>
         </div>
      </main>
   );
}
