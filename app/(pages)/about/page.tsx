import PageIntro from "@/app/components/common/PageIntro";
import Button from "@/app/components/common/Button";
import { CALENDLY_URL } from "@/lib/constants";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";
import Image from "next/image";

export function generateMetadata(): Metadata {
   return getPageMeta("/about");
}

const strengths = [
   "Architecture-led SaaS platform delivery",
   "AI systems for document, knowledge, and workflow operations",
   "Cloud infrastructure, deployment, and integration ownership",
   "Product execution shaped for founders, SMEs, and modernization teams",
];

const proofStats = [
   { value: "2-6 weeks", label: "typical first delivery window" },
   { value: "Weekly", label: "working demos and iteration checkpoints" },
   { value: "1 build team", label: "covering architecture, AI, app delivery, and integrations" },
];

export default function About() {
   return (
      <main className="min-h-screen bg-slate-50">
         <PageIntro
            eyebrow="About SofGent"
            title="An AI product studio built for teams that need serious software, not agency theater."
            description="SofGent helps founders, operators, and modernizing businesses move from product idea to production system with clear architecture, fast delivery, and engineering discipline built in."
            currentPage="About"
            currentPath="/about"
         />

         <div className="mx-auto theme-container py-16 md:py-24 space-y-8">
            <div className="grid gap-8 xl:grid-cols-[1fr_1fr]">
               <div className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm md:p-14 relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-48 bg-grid-paper opacity-50 pointer-events-none" />
                  <div className="relative z-10">
                     <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                        Who We Are
                     </p>
                     <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.05]">
                        SofGent is an engineering-led studio for AI products, internal systems, and SaaS delivery.
                     </h2>
                     <p className="mt-6 text-lg leading-relaxed text-slate-600">
                        We work with founders, CTOs, operations leaders, and growing businesses that need software built fast without taking on fragile architecture or delivery confusion.
                     </p>
                     <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        The work sits where architecture, delivery, and applied AI meet: SaaS MVPs, workflow automation, document systems, integrations, and modernization efforts that need to hold up in real operations.
                     </p>
                  </div>
               </div>

               <div className="rounded-[2.5rem] border border-slate-800 bg-slate-900 p-10 text-white shadow-xl md:p-14 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(50,109,109,0.3),transparent_60%)] pointer-events-none" />
                  <div className="relative z-10">
                     <div className="relative mb-8 overflow-hidden rounded-[2rem] border border-white/10">
                        <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-300 backdrop-blur-md">
                           Studio delivery room
                        </div>
                        <div className="relative aspect-[16/10]">
                           <Image
                              src="/images/about/studio-delivery-board.png"
                              alt="SofGent planning room with architecture board, delivery roadmap, and AI pipeline sketches."
                              fill
                              sizes="(max-width: 1280px) 100vw, 45vw"
                              className="object-cover"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                        </div>
                     </div>
                     <p className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-6">
                        Studio leadership
                     </p>
                     <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
                        Company-first delivery, led by senior engineering judgment.
                     </h2>
                     <p className="text-lg font-medium text-cyan-100/80 mb-8">
                        SofGent combines product thinking, system design, AI implementation, and delivery ownership in one execution model.
                     </p>
                     <p className="text-lg leading-relaxed text-slate-300 mb-4">
                        The studio is built around architecture-first execution: define the system boundaries, data model, workflow shape, and deployment path early so the build can move quickly without creating expensive rewrites.
                     </p>
                     <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {proofStats.map((stat) => (
                           <div
                              key={stat.label}
                              className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-5">
                              <p className="text-2xl font-bold text-white">{stat.value}</p>
                              <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                           </div>
                        ))}
                     </div>
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
                     If the bottleneck is product architecture, AI execution, or system delivery, let&apos;s talk.
                  </h2>
                  <Button btnText="Book a Free Strategy Call" href={CALENDLY_URL} external={true} variant="primary" />
               </div>
            </div>
         </div>
      </main>
   );
}
