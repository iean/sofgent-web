import BreadCrumb from "@/app/components/common/BreadCrumb";
import Button from "@/app/components/common/Button";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
   return getPageMeta("/services");
}

const services = [
   {
      label: "Core Offer",
      title: "Launch Your SaaS MVP in 30 Days",
      description:
         "We help founders move from rough product idea to a launch-ready SaaS MVP with speed, structure, and production-minded execution.",
      includes: [
         "Product planning",
         "UI/UX design",
         "Full-stack development",
         "AI integration",
         "Deployment",
      ],
      outcome: "Get a working product ready for real users and investors.",
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
      outcome: "Turn your data into intelligence and automation.",
      context: "Ideal for teams ready to automate knowledge and workflows.",
   },
   {
      label: "Scale Offer",
      title: "Fix, Rebuild, and Scale Your Product",
      description:
         "We step in when a product is slow, brittle, or difficult to extend and rebuild the foundation for stability, speed, and future growth.",
      includes: [
         "Legacy system cleanup",
         "Performance improvements",
         "Microservices & cloud scaling",
      ],
      outcome: "Make your system production-ready and scalable.",
      context: "Ideal for products that have outgrown the first version.",
   },
];

const specializedPages = [
   {
      title: "AI-Ready Data Engineering",
      description:
         "Turn messy business data into structured infrastructure for analytics, automation, and AI systems.",
      href: "/services/ai-ready-data-engineering",
   },
   {
      title: "Document Intelligence Systems",
      description:
         "Build OCR, extraction, validation, and workflow automation for document-heavy operations.",
      href: "/services/document-intelligence-systems",
   },
];

export default function Services() {
   return (
      <section className="bg-[linear-gradient(180deg,#f6f9fc_0%,#eef3f8_100%)]">
         <BreadCrumb pageTitle="Services" currentPage="Services" to="/services" />

         <div className="mx-auto theme-container py-16 md:py-24">
            <div className="grid gap-8 rounded-[34px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-9 xl:grid-cols-[1fr_0.8fr]">
               <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
                     AI Product Studio
                  </p>
                  <h1 className="mt-4 text-34 font-semibold tracking-[-0.04em] text-slate-950 md:text-48">
                     Three ways we help founders and businesses turn ideas into
                     products, systems, and scalable revenue engines.
                  </h1>
                  <p className="mt-6 text-[17px] leading-8 text-slate-600">
                     SofGent is built for teams that want product-level
                     execution, not generic outsourced development. We focus on
                     launch speed, technical clarity, and software that can
                     survive real growth.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                     <Button btnText="Book a Strategy Call" href="/contact" />
                     <Button
                        btnText="Plan Your AI Workflow"
                        href="/contact"
                        className="border border-slate-200 bg-white text-slate-900 shadow-none hover:bg-slate-50"
                     />
                  </div>
               </div>

               <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 md:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                     Studio Signals
                  </p>
                  <div className="mt-5 grid gap-4">
                     {[
                        "Trusted by founders building next-generation products",
                        "Launch-minded delivery in 2–6 weeks",
                        "AI, cloud, and full-stack engineering under one roof",
                     ].map((item) => (
                        <div
                           key={item}
                           className="rounded-[20px] border border-white bg-white px-4 py-4 text-[16px] text-slate-700 shadow-sm">
                           {item}
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="mt-10 grid gap-8">
               {services.map((service) => (
                  <div
                     key={service.title}
                     className="rounded-[34px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-9">
                     <div className="grid gap-8 xl:grid-cols-[1fr_0.9fr]">
                        <div>
                           <div className="inline-flex rounded-full border border-[#d5e4e0] bg-[#eef5f3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                              {service.label}
                           </div>
                           <h2 className="mt-5 text-24 font-semibold tracking-[-0.03em] text-slate-950 md:text-[34px]">
                              {service.title}
                           </h2>
                           <p className="mt-4 max-w-2xl text-[17px] leading-8 text-slate-600">
                              {service.description}
                           </p>

                           <div className="mt-8">
                              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                                 Included
                              </p>
                              <div className="mt-4 flex flex-wrap gap-3">
                                 {service.includes.map((item) => (
                                    <span
                                       key={item}
                                       className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                                       {item}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        </div>

                        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 md:p-7">
                           <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                              Outcome
                           </p>
                           <p className="mt-3 text-[28px] font-semibold tracking-[-0.04em] text-slate-950">
                              {service.outcome}
                           </p>

                           <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                              Best Fit
                           </p>
                           <p className="mt-3 text-[17px] leading-8 text-slate-700">
                              {service.context}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-12 rounded-[34px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-9">
               <div className="grid gap-8 xl:grid-cols-[1fr_0.9fr] xl:items-center">
                  <div className="max-w-3xl">
                     <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
                        Need Help Choosing
                     </p>
                     <h2 className="mt-4 text-24 font-semibold tracking-[-0.03em] text-slate-950 md:text-[34px]">
                        If the scope is still unclear, we can map the right
                        build path before you commit budget to the wrong
                        engagement.
                     </h2>
                     <p className="mt-5 text-[17px] leading-8 text-slate-600">
                        We help teams decide whether they need an MVP launch, an
                        AI workflow system, or a product rebuild so the next
                        step is commercially and technically sound.
                     </p>
                  </div>
                  <div className="flex flex-wrap gap-4 xl:justify-end">
                     <Button btnText="Discuss Your Product" href="/contact" />
                     <Button
                        btnText="Turn My Data Into a Working System"
                        href="/contact"
                        className="border border-slate-200 bg-white text-slate-900 shadow-none hover:bg-slate-50"
                     />
                  </div>
               </div>
            </div>

            <div className="mt-12">
               <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
                     Specialized Systems
                  </p>
                  <h2 className="mt-4 text-24 font-semibold tracking-[-0.03em] text-slate-950 md:text-[34px]">
                     Explore focused solution pages for data engineering and
                     document AI.
                  </h2>
               </div>

               <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {specializedPages.map((item) => (
                     <Link
                        key={item.href}
                        href={item.href}
                        className="group rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.1)] md:p-8">
                        <div className="inline-flex rounded-full border border-[#d5e4e0] bg-[#eef5f3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                           Solution Page
                        </div>
                        <h3 className="mt-6 text-24 font-semibold tracking-[-0.03em] text-slate-950">
                           {item.title}
                        </h3>
                        <p className="mt-4 text-[16px] leading-8 text-slate-600">
                           {item.description}
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand">
                           View service page
                           <span className="transition-transform duration-200 group-hover:translate-x-1">
                              →
                           </span>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>

            <div className="mt-12 rounded-[34px] border border-slate-200 bg-[#08111f] px-7 py-10 text-white shadow-[0_30px_100px_rgba(8,17,31,0.16)] md:px-10">
               <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                     Ready To Build
                  </p>
                  <h2 className="mt-4 text-34 font-semibold tracking-[-0.04em] md:text-48">
                     Have an idea? Let&apos;s build it in 30 days.
                  </h2>
                  <p className="mt-4 text-[17px] leading-8 text-slate-200">
                     We can map the fastest route to launch, automation, or a
                     product rebuild based on your current stage.
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
            </div>
         </div>
      </section>
   );
}
