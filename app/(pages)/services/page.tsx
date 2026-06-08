import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Button from "@/app/components/common/Button";
import getPageMeta from "@/app/utils/getPageMeta";
import { CALENDLY_URL } from "@/lib/constants";
import { getServices } from "@/lib/sanity/content";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/services");
}

export const revalidate = 60;

const CATEGORY_LABEL: Record<string, string> = {
   ai: "AI",
   saas: "SaaS",
   devops: "DevOps",
   integration: "Integration",
   qa: "QA",
   maintenance: "Support",
};

export default async function Services() {
   const services = await getServices();
   const sorted = [...services].sort((a, b) => a.order - b.order);

   return (
      <main className="min-h-screen bg-white">
         {/* HERO */}
         <section className="relative overflow-hidden bg-slate-950 pb-24 pt-24 text-white md:pb-28 md:pt-32">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,50,60,0.52),transparent_72%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="theme-container relative z-10">
               <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                  <div className="max-w-3xl">
                     <p className="text-cyan-400 font-semibold uppercase tracking-widest mb-4">
                        AI Product Studio
                     </p>
                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
                        Services built to ship AI systems, SaaS products, and internal business tools fast.
                     </h1>
                     <p className="mt-6 text-lg leading-relaxed text-slate-300">
                        Each service is structured as a buyable engagement with a clear production outcome: architecture first, working demos every week, and systems designed for real usage instead of fragile prototypes.
                     </p>
                     <div className="mt-8 flex flex-wrap gap-3">
                        {[
                           "2-6 week delivery windows",
                           "Architecture before build",
                           "Dual CTA: book or send project brief",
                        ].map((item) => (
                           <span
                              key={item}
                              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                              {item}
                           </span>
                        ))}
                     </div>
                     <div className="mt-10 flex flex-wrap items-center gap-4">
                        <Button
                           btnText="Book Free Consultation"
                           href={CALENDLY_URL}
                           external={true}
                           variant="primary"
                           className="px-8 py-4 text-base"
                        />
                        <Button
                           btnText="Send Project Details"
                           href="/contact"
                           variant="outline"
                           className="border-white/15 bg-white/5 px-8 py-4 text-base text-white hover:border-white/30 hover:bg-white/10 hover:text-white"
                        />
                     </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-md">
                     <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300 mb-6">
                        Delivery signals
                     </p>
                     <div className="space-y-4">
                        {[
                           "One team for AI, backend, frontend, integrations, and deployment",
                           "Weekly checkpoints with working software, not abstract status updates",
                           "Scoped for launch, then structured for iteration and scale",
                        ].map((item, idx) => (
                           <div
                              key={idx}
                              className="rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-[15px] font-medium text-slate-200 leading-relaxed">
                              {item}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* SERVICE GRID */}
         <section className="py-20 md:py-24 bg-slate-50" id="all-services">
            <div className="theme-container">
               <div className="max-w-3xl mb-12">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary mb-4">
                     Service Catalog
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                     Pick the engagement that matches the bottleneck.
                  </h2>
                  <p className="mt-4 text-base text-slate-600 leading-relaxed">
                     Each page breaks down the business problem, architecture shape, delivery process, outcomes, pricing, and best-fit buyer profile.
                  </p>
               </div>

               {sorted.length === 0 ? (
                  <div className="rounded-[2.5rem] border border-dashed border-slate-300 bg-white p-12 text-center">
                     <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-400 mb-3">
                        Coming soon
                     </p>
                     <p className="text-slate-700">
                        Service pages will appear here as new engagements are published.
                      </p>
                  </div>
               ) : (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                     {sorted.map((service) => (
                        <Link
                           key={service.slug}
                           href={`/services/${service.slug}`}
                           className="group flex flex-col rounded-[2rem] border border-slate-100 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                           <div className="relative h-48 bg-slate-100">
                              <Image
                                 src={service.heroImage.src}
                                 alt={service.heroImage.alt}
                                 fill
                                 sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                                 className="object-cover"
                              />
                           </div>
                           <div className="p-6 md:p-7 flex flex-col flex-grow">
                              <span className="self-start rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4">
                                 {CATEGORY_LABEL[service.category] ?? "Service"}
                              </span>
                              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                 {service.title}
                              </h3>
                              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                 {service.tagline}
                              </p>
                              {service.proofMetrics?.slice(0, 2).map((metric) => (
                                 <div
                                    key={`${service.slug}-${metric.label}`}
                                    className="mb-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                                    <p className="text-sm font-bold text-slate-900">{metric.value}</p>
                                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                                       {metric.label}
                                    </p>
                                 </div>
                              ))}
                              {service.idealFit?.[0] ? (
                                 <div className="mt-1 mb-5 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-semibold leading-6 text-emerald-900">
                                    {service.idealFit[0].title}
                                 </div>
                              ) : (
                                 <div className="mb-5 flex-grow" />
                              )}
                              <span className="inline-flex items-center text-sm font-bold text-primary">
                                 Read more
                                 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                              </span>
                           </div>
                        </Link>
                     ))}
                  </div>
               )}
            </div>
         </section>

         {/* CTA */}
         <section className="py-20 md:py-24 bg-slate-50">
            <div className="theme-container">
               <div className="relative overflow-hidden rounded-[3rem] border border-slate-800 bg-slate-900 p-10 md:p-16 shadow-2xl text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_50%)] pointer-events-none" />
                  <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                     <div>
                        <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-400 mb-4 inline-flex items-center gap-2">
                           <Sparkles className="w-4 h-4" aria-hidden="true" />
                           Not sure which path fits?
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                           Book a free consultation.
                        </h2>
                        <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-2xl">
                           Share where the current bottleneck lives. We&apos;ll identify the best-fit engagement, likely timeline, and the architecture risks worth solving first.
                        </p>
                        <div className="mt-6 space-y-3 text-sm text-slate-200">
                           {[
                              "Recommended service path based on your actual workflow problem",
                              "Likely delivery range and team involvement",
                              "Up-front architecture concerns that could slow the build later",
                           ].map((item) => (
                              <div key={item} className="inline-flex items-center gap-3">
                                 <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                 <span>{item}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
                        <Button
                           btnText="Book Free Consultation"
                           href={CALENDLY_URL}
                           external={true}
                           variant="primary"
                           className="px-8 py-4 text-base"
                        />
                        <Button
                           btnText="Send project details"
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
