import ProjectCard from "@/app/components/common/ProjectCard";
import AIHeroIllustration from "@/app/components/home/AIHeroIllustration";
import Button from "@/app/components/common/Button";
import Footer from "@/app/components/Layout/Footer/Footer";
import Header from "@/app/components/Layout/Header/Header";
import type { ProjectFieldsType } from "@/app/data/projects/types";
import getPageMeta from "@/app/utils/getPageMeta";
import readLocalFile from "@/app/utils/readLocalFile";
import type { LucideIcon } from "lucide-react";
import {
   BrainCircuit,
   Clock3,
   Layers3,
   Rocket,
   ShieldCheck,
   Sparkles,
   Waypoints,
   Workflow,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
   return getPageMeta("/");
}

const trustBullets = [
   {
      icon: Layers3,
      eyebrow: "Product delivery",
      title: "Built multiple SaaS products",
      description: "Architecture, product UX, and launch execution in one team.",
   },
   {
      icon: BrainCircuit,
      eyebrow: "AI + engineering",
      title: "AI + full-stack expertise",
      description:
         "Product logic, automation, and scalable app delivery handled together.",
   },
   {
      icon: Rocket,
      eyebrow: "Launch speed",
      title: "Rapid MVP delivery",
      description: "Focused 2–6 week engagements when scope and priorities are clear.",
   },
];

const heroHighlights: {
   label: string;
   icon: LucideIcon;
   tone?: "light" | "accent";
}[] = [
   { label: "AI Product Studio", icon: Sparkles },
   { label: "Launch in 2–6 weeks", icon: Clock3, tone: "accent" },
   { label: "Built for real users", icon: ShieldCheck },
];

const heroSupportCards: {
   eyebrow: string;
   title: string;
   description: string;
   icon: LucideIcon;
   tone?: "light" | "bright";
}[] = [
   {
      eyebrow: "Studio Focus",
      title: "Architecture-first launch team",
      description:
         "MVPs, AI systems, and rebuilds designed for real product rollout.",
      icon: Layers3,
      tone: "light",
   },
   {
      eyebrow: "Delivery Model",
      title: "One team from strategy to launch",
      description:
         "AI workflows, engineering, and production rollout under one roof.",
      icon: Workflow,
      tone: "bright",
   },
];

const capabilityChips: { label: string; icon: LucideIcon }[] = [
   { label: "MVP architecture", icon: Layers3 },
   { label: "AI workflows", icon: BrainCircuit },
   { label: "Launch-ready systems", icon: Waypoints },
];

const offers = [
   {
      label: "Core Offer",
      title: "Launch Your SaaS MVP in 30 Days",
      description:
         "From product planning to launch, we turn early-stage ideas into usable AI-powered SaaS products fast.",
      items: [
         "Product planning",
         "UI/UX design",
         "Full-stack development",
         "AI integration",
         "Deployment",
      ],
      outcome: "Get a working product ready for real users and investors.",
   },
   {
      label: "AI Systems",
      title: "Custom AI Systems for Your Business",
      description:
         "We build operational AI systems that make your documents, workflows, and data more useful every day.",
      items: [
         "Document processing (OCR, RAG)",
         "Chatbots & AI agents",
         "Internal automation tools",
      ],
      outcome: "Turn your data into intelligence and automation.",
   },
   {
      label: "Scale Offer",
      title: "Fix, Rebuild, and Scale Your Product",
      description:
         "When the first version becomes the bottleneck, we clean the architecture and prepare the product for growth.",
      items: [
         "Legacy system cleanup",
         "Performance improvements",
         "Microservices & cloud scaling",
      ],
      outcome: "Make your system production-ready and scalable.",
   },
];

const credibilityPoints = [
   {
      title: "Led by experienced engineers building real SaaS systems",
      description:
         "This is product engineering for founders who need progress, clarity, and a team that can actually ship.",
   },
   {
      title: "AI, microservices, and cloud-native delivery",
      description:
         "We design systems around workflows, integrations, reliability, and product speed, not just isolated features.",
   },
   {
      title: "Multi-tenant foundations built for growth",
      description:
         "Authentication, data boundaries, deployments, and observability are considered early so scaling does not trigger a rewrite.",
   },
];

const buildSteps = [
   {
      step: "Step 1",
      title: "Idea -> Validation",
      description:
         "We sharpen the offer, user, and MVP scope before code starts.",
   },
   {
      step: "Step 2",
      title: "MVP -> Fast Build",
      description:
         "Design, architecture, and development move together to keep momentum high.",
   },
   {
      step: "Step 3",
      title: "Launch -> Feedback",
      description:
         "We release quickly, learn from real usage, and turn feedback into the next sprint.",
   },
   {
      step: "Step 4",
      title: "Scale -> Growth",
      description:
         "We harden infrastructure, refine product systems, and support the next stage of growth.",
   },
];

export default async function Home() {
   const featuredProjects = ((await readLocalFile(
      "/app/data/projects/projects.json"
   )) as ProjectFieldsType[]).slice(0, 3);

   return (
      <main>
         <Header />

         <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f6_100%)] pt-[126px] md:pt-[170px] xl:pt-[198px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(18,50,74,0.08),transparent_26%),radial-gradient(circle_at_top_right,rgba(26,95,111,0.07),transparent_22%)]" />
            <div className="absolute inset-x-0 top-0 h-[420px] bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0)_100%)]" />

            <div className="relative mx-auto theme-container">
               <div className="grid items-center gap-14 pb-16 md:pb-24 xl:grid-cols-[60%_40%] xl:gap-16">
                  <div className="min-w-0 max-w-none xl:pr-12">
                     <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                        <Sparkles className="h-3.5 w-3.5 text-brand" strokeWidth={1.8} />
                        SofGent AI Product Studio
                     </div>
                     <h1 className="mt-7 max-w-[14.5ch] text-[50px] font-semibold leading-[0.9] tracking-[-0.065em] text-slate-950 md:max-w-[13.6ch] md:text-[80px] xl:max-w-[14.2ch] xl:text-[88px]">
                        From Idea to{" "}
                        <span className="inline-block bg-[linear-gradient(90deg,#11324a_0%,#1f5d6c_48%,#4f8da3_100%)] bg-clip-text text-transparent">
                           AI Product
                        </span>
                        <span className="block">
                           in Weeks <span className="text-slate-400">—</span>{" "}
                           Not Months
                        </span>
                     </h1>
                     <p className="mt-7 max-w-[42rem] text-[18px] leading-8 text-slate-600 md:text-[19px]">
                        We design, build, and launch AI-powered SaaS products
                        fast. MVPs, automation systems, and scalable platforms.
                     </p>

                     <div className="mt-11 flex flex-wrap items-center gap-4">
                        <Button
                           btnText="Book a Free Strategy Call"
                           href="/contact"
                           className="px-7 shadow-[0_24px_60px_rgba(18,50,74,0.24)] hover:scale-[1.02] hover:shadow-[0_28px_70px_rgba(18,50,74,0.3)]"
                        />
                        <Button
                           btnText="See Our Work"
                           href="/case-studies"
                           className="border border-slate-200 bg-white text-slate-900 shadow-[0_16px_36px_rgba(15,23,42,0.05)] hover:scale-[1.02] hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                        />
                     </div>

                     <div className="mt-12 grid gap-3 sm:grid-cols-3">
                        {trustBullets.map((item) => (
                           <div
                              key={item.title}
                              className="rounded-[24px] border border-slate-200 bg-white px-5 py-5 shadow-[0_14px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_22px_44px_rgba(15,23,42,0.08)]">
                              <div className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-[#dbe8e4] bg-[#eef5f3] text-brand">
                                 <item.icon className="h-5 w-5" strokeWidth={1.8} />
                              </div>
                              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                                 {item.eyebrow}
                              </p>
                              <p className="mt-2 text-[16px] font-semibold leading-7 tracking-[-0.02em] text-slate-900">
                                 {item.title}
                              </p>
                              <p className="mt-2 text-[14px] leading-6 text-slate-600">
                                 {item.description}
                              </p>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="relative mt-10 min-w-0 md:mt-14 xl:mt-0">
                     <div className="absolute left-1/2 top-12 h-44 w-[82%] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[95px]" />
                     <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(160deg,#06121a_0%,#0b2230_100%)] p-6 shadow-[0_28px_70px_rgba(15,23,42,0.12)] md:p-8">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:28px_28px] opacity-[0.04]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.14)_0%,rgba(6,18,26,0)_44%),radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.08)_0%,rgba(11,34,48,0)_32%)]" />
                        <div className="relative z-10 flex flex-wrap gap-3 border-b border-white/10 pb-6">
                           {heroHighlights.map((item) => (
                              <span
                                 key={item.label}
                                 className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] backdrop-blur-md transition-all duration-300 hover:-translate-y-[2px] ${
                                    item.tone === "accent"
                                       ? "border border-cyan-300/24 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/14"
                                       : "border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
                                 }`}>
                                 <item.icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                                 {item.label}
                              </span>
                           ))}
                        </div>

                        <div className="relative z-10 mt-7 grid gap-4 xl:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)]">
                           <div className="grid min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-1">
                              {heroSupportCards.map((card) => (
                                 <div
                                    key={card.title}
                                    className={`rounded-[22px] border p-5 transition-all duration-300 hover:-translate-y-[2px] ${
                                       card.tone === "bright"
                                          ? "border-white/12 bg-white/[0.96] shadow-[0_16px_36px_rgba(8,17,31,0.14)]"
                                          : "border-white/10 bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.07]"
                                    }`}>
                                    <div className="flex items-start gap-3">
                                       <div
                                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] ${
                                             card.tone === "bright"
                                                ? "bg-[#eef5f3] text-brand"
                                                : "border border-cyan-300/16 bg-cyan-300/10 text-cyan-100"
                                          }`}>
                                          <card.icon className="h-5 w-5" strokeWidth={1.8} />
                                       </div>
                                       <div>
                                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                                             {card.eyebrow}
                                          </p>
                                          <p
                                             className={`mt-3 text-[18px] font-semibold leading-7 tracking-[-0.03em] ${
                                                card.tone === "bright"
                                                   ? "text-slate-950"
                                                   : "text-slate-50"
                                             }`}>
                                             {card.title}
                                          </p>
                                          <p
                                             className={`mt-2.5 text-[13px] leading-6 ${
                                                card.tone === "bright"
                                                   ? "text-slate-600"
                                                   : "text-slate-300"
                                             }`}>
                                             {card.description}
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>

                           <div className="min-w-0">
                              <AIHeroIllustration />
                              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                                 {capabilityChips.map((item) => (
                                    <div
                                       key={item.label}
                                       className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3.5 text-sm font-medium text-slate-100 transition-all duration-300 hover:-translate-y-[2px] hover:bg-white/10">
                                       <div className="flex items-center gap-2.5">
                                          <div className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-cyan-300/14 bg-cyan-300/10 text-cyan-100">
                                             <item.icon
                                                className="h-4 w-4"
                                                strokeWidth={1.8}
                                             />
                                          </div>
                                          <span className="leading-6">
                                             {item.label}
                                          </span>
                                       </div>
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

         <section className="py-16 md:py-24">
            <div className="mx-auto theme-container">
               <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-3xl">
                     <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
                        Core Offers
                     </p>
                     <h2 className="mt-4 text-34 font-semibold tracking-[-0.04em] text-slate-950 md:text-48">
                        Three premium offers built for founders and businesses
                        that need speed, clarity, and usable software.
                     </h2>
                  </div>
                  <p className="max-w-xl text-[16px] leading-7 text-slate-600">
                     SofGent is not a general dev agency. We act like a product
                     studio, helping teams move from concept to launch with
                     clear priorities and strong execution.
                  </p>
               </div>

               <div className="mt-10 grid gap-6 xl:grid-cols-3">
                  {offers.map((offer) => (
                     <article
                        key={offer.title}
                        className="flex h-full flex-col rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-8">
                        <div className="inline-flex w-fit rounded-full border border-[#d5e4e0] bg-[#eef5f3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                           {offer.label}
                        </div>
                        <h3 className="mt-6 text-[28px] font-semibold leading-[1.12] tracking-[-0.04em] text-slate-950">
                           {offer.title}
                        </h3>
                        <p className="mt-4 text-[16px] leading-8 text-slate-600">
                           {offer.description}
                        </p>
                        <ul className="mt-6 space-y-3">
                           {offer.items.map((item) => (
                              <li
                                 key={item}
                                 className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] font-medium text-slate-700">
                                 {item}
                              </li>
                           ))}
                        </ul>
                        <div className="mt-6 rounded-[24px] border border-slate-200 bg-[#08111f] p-5 text-white shadow-[0_20px_50px_rgba(8,17,31,0.12)]">
                           <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                              Outcome
                           </p>
                           <p className="mt-3 text-[16px] leading-7 text-slate-100">
                              {offer.outcome}
                           </p>
                        </div>
                     </article>
                  ))}
               </div>
            </div>
         </section>

         <section className="bg-[#08111f] py-16 text-white md:py-24">
            <div className="mx-auto theme-container">
               <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
                  <div className="max-w-2xl">
                     <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                        Founder Credibility
                     </p>
                     <h2 className="mt-4 text-34 font-semibold tracking-[-0.04em] md:text-48">
                        Built by engineers who know AI systems, cloud
                        infrastructure, and what it takes to ship real products.
                     </h2>
                     <p className="mt-6 max-w-xl text-[17px] leading-8 text-slate-300">
                        We work across AI products, microservices, cloud
                        delivery, and multi-tenant systems, with the mindset of
                        a product team focused on traction, not outsourced task
                        completion.
                     </p>
                     <div className="mt-8">
                        <Button
                           btnText="See How We Build"
                           href="/how-we-build-saas"
                        />
                     </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-1">
                     {credibilityPoints.map((item) => (
                        <div
                           key={item.title}
                           className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                           <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-300/12 text-lg text-cyan-200">
                              ✓
                           </div>
                           <h3 className="mt-5 text-[20px] font-semibold leading-8 text-slate-100">
                              {item.title}
                           </h3>
                           <p className="mt-3 text-[15px] leading-7 text-slate-300">
                              {item.description}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-24">
            <div className="mx-auto theme-container">
               <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
                     How We Build
                  </p>
                  <h2 className="mt-4 text-34 font-semibold tracking-[-0.04em] text-slate-950 md:text-48">
                     A simple four-step path from first idea to growth.
                  </h2>
               </div>

               <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {buildSteps.map((item, index) => (
                     <div
                        key={item.title}
                        className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                        <div className="flex items-center justify-between gap-4">
                           <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef5f3] text-lg font-semibold text-brand">
                              {index + 1}
                           </div>
                           <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                              {item.step}
                           </span>
                        </div>
                        <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.03em] text-slate-950">
                           {item.title}
                        </h3>
                        <p className="mt-4 text-[16px] leading-7 text-slate-600">
                           {item.description}
                        </p>
                     </div>
                  ))}
               </div>

               <div className="mt-8 text-center">
                  <Link
                     href="/how-we-build-saas"
                     className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-brand">
                     View the full build process
                     <span aria-hidden>→</span>
                  </Link>
               </div>
            </div>
         </section>

         <section className="pb-16 md:pb-24">
            <div className="mx-auto theme-container">
               <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-3xl">
                     <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
                        Case Studies
                     </p>
                     <h2 className="mt-4 text-34 font-semibold tracking-[-0.04em] text-slate-950 md:text-48">
                        Product-style case studies that show how we turn ideas,
                        operations, and revenue workflows into software.
                     </h2>
                  </div>
                  <p className="max-w-xl text-[16px] leading-7 text-slate-600">
                     These case studies show how SofGent turns documents,
                     internal workflows, and product operations into serious
                     software systems teams can rely on.
                  </p>
               </div>

               <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {featuredProjects.map((project, index) => (
                     <ProjectCard
                        key={project.slug}
                        project={project}
                        index={index}
                     />
                  ))}
               </div>
               <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                  <Button btnText="View All Case Studies" href="/case-studies" />
                  <Button
                     btnText="Discuss Your Product"
                     href="/contact"
                     className="border border-slate-200 bg-white text-slate-900 shadow-none hover:bg-slate-50"
                  />
               </div>
            </div>
         </section>

         <section className="pb-20 md:pb-24">
            <div className="mx-auto theme-container">
               <div className="rounded-[36px] border border-slate-200 bg-[linear-gradient(135deg,#08111f_0%,#163042_100%)] px-6 py-10 text-white shadow-[0_30px_100px_rgba(8,17,31,0.18)] md:px-10 md:py-14">
                  <div className="max-w-3xl">
                     <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                        Ready To Build
                     </p>
                     <h2 className="mt-4 text-34 font-semibold tracking-[-0.04em] md:text-48">
                        Have an idea? Let&apos;s build it in 30 days.
                     </h2>
                     <p className="mt-4 text-[18px] leading-8 text-slate-200">
                        Start with a focused strategy call. We will map the
                        fastest route from concept to launch.
                     </p>
                     <div className="mt-8 flex flex-wrap gap-4">
                        <Button btnText="Book Call" href="/contact" />
                        <Button
                           btnText="Get Free Consultation"
                           href="/contact"
                           className="border border-white/10 bg-white/5 text-white shadow-none hover:bg-white/10"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </main>
   );
}
