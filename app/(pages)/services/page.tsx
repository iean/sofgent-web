import BreadCrumb from "@/app/components/common/BreadCrumb";
import Button from "@/app/components/common/Button";
import getPageMeta from "@/app/utils/getPageMeta";
import { CALENDLY_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Settings, FileText } from "lucide-react";

export function generateMetadata(): Metadata {
   return getPageMeta("/services");
}

const services = [
   {
      label: "MVP Offer",
      title: "Launch Your SaaS MVP in 30 Days",
      description:
         "We help founders move from rough product idea to a launch-ready SaaS MVP with speed, structure, and production-minded execution.",
      includes: [
         "Architecture design",
         "Full-stack development",
         "AI integration",
         "Deployment",
      ],
      outcome: "Working product for users and investors.",
      context: "Ideal for founders validating a new product fast.",
   },
   {
      label: "AI Systems",
      title: "Custom AI Systems for Your Business",
      description:
         "We build AI products and internal systems that turn company data, workflows, and documents into useful operational leverage.",
      includes: [
         "Document processing (OCR, RAG)",
         "Chatbots & AI agents",
         "Internal automation tools",
      ],
      outcome: "Turn your data into active intelligence.",
      context: "Ideal for teams ready to automate knowledge workflows.",
   },
   {
      label: "Scale Offer",
      title: "Fix, Rebuild, and Scale Your Product",
      description:
         "We step in when a product is slow, brittle, or difficult to extend and rebuild the foundation for stability, speed, and future growth.",
      includes: [
         "Legacy system cleanup",
         "Performance improvements",
         "Microservices scaling",
      ],
      outcome: "Production-ready and scalable systems.",
      context: "Ideal for products outgrowing their first version.",
   },
];

const specializedPages = [
   {
      title: "AI-Ready Data Engineering",
      description:
         "Turn messy business data into structured infrastructure for analytics, automation, and AI systems.",
      href: "/services/ai-ready-data-engineering",
      icon: Settings,
   },
   {
      title: "Document Intelligence Systems",
      description:
         "Build OCR, extraction, validation, and workflow automation for document-heavy operations.",
      href: "/services/document-intelligence-systems",
      icon: FileText,
   },
];

export default function Services() {
   return (
      <main className="min-h-screen bg-white">
         <BreadCrumb pageTitle="Services" currentPage="Services" to="/services" />

         {/* HERO HEADER */}
         <section className="relative pt-12 pb-24 overflow-hidden bg-grid-paper border-b border-slate-100">
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white to-transparent pointer-events-none" />
            <div className="theme-container relative z-10">
               <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center bg-white/60 backdrop-blur-3xl rounded-[2.5rem] p-10 md:p-14 border border-slate-200/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
                  <div className="max-w-3xl">
                     <p className="text-primary font-semibold uppercase tracking-widest mb-4">
                        AI Product Studio
                     </p>
                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                        Three ways we turn ideas into <span className="text-primary">scalable systems.</span>
                     </h1>
                     <p className="mt-6 text-lg leading-relaxed text-slate-600">
                        SofGent is built for teams that want product-level
                        execution, not generic outsourced development. We focus on
                        launch speed, technical clarity, and software that can
                        survive real growth.
                     </p>
                     <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Button btnText="Book a Strategy Call" href={CALENDLY_URL} external={true} variant="primary" />
                        <Button
                           btnText="Plan Your AI Workflow"
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

         {/* SERVICE TIERS */}
         <section className="py-24 bg-slate-50">
            <div className="theme-container">
               <div className="grid gap-10">
                  {services.map((service) => (
                     <div
                        key={service.title}
                        className="rounded-[2.5rem] border border-slate-100 bg-white p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all">
                        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20">
                           <div>
                              <div className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
                                 {service.label}
                              </div>
                              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                                 {service.title}
                              </h2>
                              <p className="text-lg leading-relaxed text-slate-600 mb-8 max-w-2xl">
                                 {service.description}
                              </p>

                              <div>
                                 <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                                    Included
                                 </p>
                                 <div className="flex flex-wrap gap-3">
                                    {service.includes.map((item) => (
                                       <span
                                          key={item}
                                          className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700">
                                          {item}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                           </div>

                           <div className="flex flex-col justify-center rounded-[2rem] bg-slate-900 p-8 md:p-10 text-white">
                              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                                 Outcome
                              </p>
                              <p className="text-2xl font-bold tracking-tight text-slate-100 mb-10">
                                 {service.outcome}
                              </p>

                              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                                 Best Fit
                              </p>
                              <p className="text-base text-slate-300">
                                 {service.context}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* DECIDE & SPECIALIZED PAGES */}
         <section className="py-24">
            <div className="theme-container">
               {/* Need help block */}
               <div className="rounded-[2.5rem] border border-primary/20 bg-primary/5 p-10 md:p-16 mb-16">
                  <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
                     <div>
                        <p className="text-primary font-semibold uppercase tracking-widest mb-3">
                           Need Help Choosing
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                           Unclear scope? Let&apos;s map the right path before you commit.
                        </h2>
                        <p className="text-lg text-slate-600">
                           We help teams decide whether they need an MVP launch, an
                           AI workflow system, or a product rebuild so the next
                           step is commercially and technically sound.
                        </p>
                     </div>
                     <div className="flex flex-col gap-4">
                        <Button btnText="Discuss Your Product" href="/contact" variant="primary" />
                        <Button
                           btnText="Turn Data Into a System"
                           href="/contact"
                           variant="outline"
                        />
                     </div>
                  </div>
               </div>

               {/* Specialized pages */}
               <div>
                  <div className="mb-10">
                     <p className="text-primary font-semibold uppercase tracking-widest mb-3">
                        Specialized Systems
                     </p>
                     <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                        Explore focused solutions for data and document AI.
                     </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                     {specializedPages.map((item) => (
                        <Link
                           key={item.href}
                           href={item.href}
                           className="group flex flex-col rounded-[2rem] border border-slate-200 bg-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(50,109,109,0.15)]">
                           <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                              <item.icon className="w-7 h-7" />
                           </div>
                           <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
                              {item.title}
                           </h3>
                           <p className="text-base text-slate-600 flex-grow mb-8">
                              {item.description}
                           </p>
                           <div className="flex items-center text-sm font-bold text-primary uppercase tracking-wider">
                              View service page
                              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                           </div>
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* BOTTOM CTA */}
         <section className="py-24">
            <div className="theme-container">
               <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 px-8 py-20 md:px-20 md:py-24 shadow-2xl">
                  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(50,109,109,0.3),transparent_50%)]" />
                  
                  <div className="relative z-10 max-w-3xl">
                     <p className="text-cyan-200 font-semibold uppercase tracking-widest mb-4">
                        Ready To Build
                     </p>
                     <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Have an idea? Let&apos;s build it in 30 days.
                     </h2>
                     <p className="text-xl text-slate-300 mb-10 max-w-xl">
                        We can map the fastest route to launch, automation, or a
                        product rebuild based on your current stage.
                     </p>
                     <div className="flex flex-wrap gap-4">
                        <Button btnText="Book a Strategy Call" href={CALENDLY_URL} external={true} variant="primary" />
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
