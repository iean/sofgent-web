import Button from "@/app/components/common/Button";
import Link from "next/link";
import { ArrowRight, Bot, Database, Sparkles } from "lucide-react";

export default function HeroSection() {
   return (
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef3f7_100%)] pt-[128px] md:pt-[210px]">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(18,50,74,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(103,232,249,0.12),transparent_24%)]" />
         <div className="absolute inset-x-0 top-0 h-[440px] bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0)_100%)]" />

         <div className="relative mx-auto theme-container pb-16 md:pb-24">
            <div className="grid items-center gap-10 xl:grid-cols-[0.9fr_1.1fr]">
               <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                     <Link href="/services" className="hover:text-slate-900">
                        Services
                     </Link>
                     <span className="text-slate-300">/</span>
                     <span className="text-slate-700">
                        AI-Ready Data Engineering
                     </span>
                  </div>

                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-brand">
                     Data Foundation for AI
                  </p>
                  <h1 className="mt-4 max-w-[12ch] text-[44px] font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950 md:text-[72px]">
                     Turn Your Data Into AI-Ready Infrastructure
                  </h1>
                  <p className="mt-6 max-w-2xl text-[19px] leading-8 text-slate-600">
                     SofGent transforms raw, scattered, and messy business data
                     into structured systems your AI products can actually use.
                     We design schemas, pipelines, storage layers, and APIs so
                     your data is ready for analytics, automation, and AI.
                  </p>

                  <div className="mt-9 flex flex-wrap items-center gap-4">
                     <Button btnText="Book Free Data Audit" href="/contact" />
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                     {[
                        "Structured for analytics and reporting",
                        "Ready for assistants and automation",
                        "Built for production, not one-off cleanup",
                     ].map((item) => (
                        <div
                           key={item}
                           className="rounded-[20px] border border-slate-200 bg-white px-4 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                           <div className="h-2.5 w-2.5 rounded-full bg-[#12324a]" />
                           <p className="mt-3 text-[15px] font-medium leading-7 text-slate-700">
                              {item}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="relative">
                  <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-[#0c1724] p-6 shadow-[0_34px_90px_rgba(15,23,42,0.14)] md:p-8">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.15)_0%,rgba(12,23,36,0)_48%)]" />

                     <div className="relative z-10 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                        <div>
                           <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                              Data Readiness Map
                           </p>
                           <p className="mt-2 text-lg font-medium text-white">
                              From fragmented inputs to usable AI infrastructure
                           </p>
                        </div>
                        <span className="rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100">
                           AI-ready in weeks
                        </span>
                     </div>

                     <div className="relative z-10 mt-6 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
                        <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                           <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                              Raw Inputs
                           </p>
                           <div className="mt-4 space-y-3">
                              {["Docs", "CRMs", "Sheets", "App events"].map(
                                 (item) => (
                                    <div
                                       key={item}
                                       className="rounded-[16px] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100">
                                       {item}
                                    </div>
                                 )
                              )}
                           </div>
                        </div>

                        <div className="hidden items-center justify-center lg:flex">
                           <ArrowRight className="h-5 w-5 text-cyan-200" />
                        </div>

                        <div className="rounded-[24px] border border-white/10 bg-white p-5 shadow-[0_18px_45px_rgba(8,17,31,0.18)]">
                           <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                              Data Foundation
                           </p>
                           <div className="mt-4 space-y-3">
                              {[
                                 {
                                    icon: Database,
                                    label: "Schema design",
                                 },
                                 {
                                    icon: Sparkles,
                                    label: "Structured storage",
                                 },
                                 {
                                    icon: Bot,
                                    label: "AI access layer",
                                 },
                              ].map((item) => {
                                 const Icon = item.icon;
                                 return (
                                    <div
                                       key={item.label}
                                       className="flex items-center gap-3 rounded-[16px] border border-slate-200 bg-slate-50 px-4 py-3">
                                       <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#12324a] text-white">
                                          <Icon className="h-4 w-4" />
                                       </div>
                                       <div className="text-sm font-medium text-slate-700">
                                          {item.label}
                                       </div>
                                    </div>
                                 );
                              })}
                           </div>
                        </div>

                        <div className="hidden items-center justify-center lg:flex">
                           <ArrowRight className="h-5 w-5 text-cyan-200" />
                        </div>

                        <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#12253a_0%,#102133_100%)] p-5">
                           <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                              Business Outcomes
                           </p>
                           <div className="mt-4 space-y-3">
                              {[
                                 "Trusted reporting",
                                 "Automation workflows",
                                 "AI assistants",
                                 "Faster decisions",
                              ].map((item) => (
                                 <div
                                    key={item}
                                    className="rounded-[16px] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100">
                                    {item}
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
