import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import BreadCrumb from "@/app/components/common/BreadCrumb";
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
         <BreadCrumb pageTitle="Services" currentPage="Services" to="/services" />

         {/* HERO */}
         <section className="relative pt-12 pb-24 overflow-hidden bg-grid-paper border-b border-slate-100">
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white to-transparent pointer-events-none" />
            <div className="theme-container relative z-10">
               <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center bg-white/60 backdrop-blur-3xl rounded-[2.5rem] p-10 md:p-14 border border-slate-200/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
                  <div className="max-w-3xl">
                     <p className="text-primary font-semibold uppercase tracking-widest mb-4">
                        AI Product Studio
                     </p>
                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                        The services we use to turn product ideas into{" "}
                        <span className="text-primary">scalable systems.</span>
                     </h1>
                     <p className="mt-6 text-lg leading-relaxed text-slate-600">
                        SofGent is built for teams that want product-level
                        execution, not generic outsourced development. From
                        custom software to AI workflows, every engagement is
                        scoped for launch and built for scale.
                     </p>
                     <div className="mt-8 flex flex-wrap items-center gap-4">
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

                  <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                     <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-6">
                        Studio Signals
                     </p>
                     <div className="space-y-4">
                        {[
                           "Trusted by founders building next-generation products",
                           "Launch-minded delivery in 2–6 weeks",
                           "AI, cloud, and full-stack engineering under one roof",
                        ].map((item, idx) => (
                           <div
                              key={idx}
                              className="rounded-2xl border border-white bg-white px-5 py-4 text-[15px] font-medium text-slate-700 shadow-sm leading-relaxed">
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
                     Pick the engagement that matches the problem.
                  </h2>
                  <p className="mt-4 text-base text-slate-600 leading-relaxed">
                     Each service has its own dedicated page with the full
                     scope, pricing, FAQs, and how we deliver.
                  </p>
               </div>

               {sorted.length === 0 ? (
                  <div className="rounded-[2.5rem] border border-dashed border-slate-300 bg-white p-12 text-center">
                     <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-400 mb-3">
                        Coming soon
                     </p>
                     <p className="text-slate-700">
                        Services are being authored in studio.sofgent.com.
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
                              <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-grow">
                                 {service.tagline}
                              </p>
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
                           Not sure which service fits?
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                           Book a 20-minute strategy call.
                        </h2>
                        <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-2xl">
                           Share where your team is stuck. We&apos;ll surface
                           the right engagement, the rough timeline, and what a
                           launch path looks like — no pitch deck, no upsell.
                        </p>
                     </div>
                     <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
                        <Button
                           btnText="Book a Strategy Call"
                           href={CALENDLY_URL}
                           external={true}
                           variant="primary"
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
