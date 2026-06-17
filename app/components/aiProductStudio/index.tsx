import Button from "@/app/components/common/Button";
import SectionTag from "@/app/components/common/SectionTag";
import { getFaqs, getProjectCollections, getServices } from "@/lib/sanity/content";
import FaqAccordion from "./FaqAccordion";
import ProofGrid from "./ProofGrid";

const fallbackFaqs = [
   {
      _id: "ai-studio-fallback-1",
      question: "What do you actually build in an AI Product Studio engagement?",
      answer:
         "We build AI apps, internal AI tools, and SaaS products with AI workflows for operations teams. That can include workflow automation, document intelligence, operator dashboards, and customer-facing product features.",
   },
   {
      _id: "ai-studio-fallback-2",
      question: "Is this for a new product or improving an existing one?",
      answer:
         "Both. We can shape and launch a new AI product, or rebuild a fragile internal tool or SaaS system so it is easier to operate, extend, and deploy.",
   },
   {
      _id: "ai-studio-fallback-3",
      question: "How do AI and SaaS fit together in your delivery?",
      answer:
         "AI Product Studio is the core offer. SaaS delivery is the product layer that turns AI workflows into usable software with interfaces, permissions, data models, integrations, and production deployment.",
   },
];

const buildPillars = [
   {
      title: "AI apps for real business workflows",
      description:
         "Customer-facing or operator-facing apps that use AI to reduce repetitive work and improve decision speed.",
   },
   {
      title: "Internal AI tools for operations teams",
      description:
         "Dashboards, assistants, data workflows, and document systems that help internal teams move faster with fewer manual steps.",
   },
   {
      title: "SaaS systems with AI built into the product",
      description:
         "Production-ready SaaS products where AI is part of the workflow, not a disconnected add-on.",
   },
];

export default async function AiProductStudioPage() {
   const [services, { caseStudies, projects }, serviceFaqs] = await Promise.all([
      getServices(),
      getProjectCollections(),
      getFaqs("services"),
   ]);

   const primaryServices = services.filter((service) => service.isPrimary).slice(0, 2);
   const selectedPrimaryServices = primaryServices.length > 0 ? primaryServices : services.slice(0, 2);
   const supportingCapabilities = services
      .filter((service) => !selectedPrimaryServices.some((primary) => primary._id === service._id))
      .slice(0, 4);
   const faqItems = serviceFaqs.slice(0, 4);

   return (
      <div className="bg-white pb-24 pt-8 md:pb-32 md:pt-12">
         <section className="theme-container">
            <div className="grid gap-10 rounded-[36px] bg-[linear-gradient(135deg,#10263a_0%,#163854_55%,#0b2032_100%)] px-6 py-10 text-white shadow-[0_30px_80px_rgba(2,12,27,0.22)] md:px-10 md:py-14 lg:grid-cols-[1.3fr_0.9fr] lg:gap-14 lg:px-14">
               <div>
                  <SectionTag
                     tag="AI Product Studio"
                     className="mb-6 inline-flex bg-white/10 px-4 py-2 text-sm font-medium text-cyan-300"
                  />
                  <h1 className="max-w-3xl text-34 font-semibold leading-tight md:text-[52px] md:leading-[1.08]">
                     AI apps, internal AI tools, and SaaS systems for operations teams
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                     We design and deliver production-ready AI software for operations-heavy businesses. The focus is simple: build software your team can use, launch, and improve without a long agency cycle.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                     <Button
                        href="/contact"
                        btnText="Talk About Your AI Product"
                        className="bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                     />
                     <Button
                        href="/how-we-build-saas"
                        btnText="See How We Build"
                        className="border border-white/15 bg-white/10 text-white hover:bg-white/15"
                     />
                  </div>
                  <div className="mt-8 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
                     {[
                        "AI apps that fit existing operations",
                        "Internal tools with real workflow impact",
                        "SaaS delivery built for production",
                     ].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                           {item}
                        </div>
                     ))}
                  </div>
               </div>

               <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                     What clients are buying
                  </p>
                  <div className="mt-6 space-y-5">
                     <div className="rounded-[24px] bg-white/10 p-5">
                        <h2 className="text-xl font-semibold">AI Product Delivery</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-200">
                           Shape the product, define the workflow, build the AI layer, and ship a usable system.
                        </p>
                     </div>
                     <div className="rounded-[24px] bg-white/10 p-5">
                        <h2 className="text-xl font-semibold">SaaS MVP Delivery</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-200">
                           Turn the AI workflow into a secure product with interfaces, data structure, admin controls, and deployment readiness.
                        </p>
                     </div>
                  </div>
                  <div className="mt-6 rounded-[24px] border border-cyan-400/20 bg-cyan-400/10 p-5">
                     <p className="text-sm font-medium text-cyan-100">
                        This page is the plain-English version of the offer: SofGent builds AI-related software, not abstract innovation work.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="theme-container mt-20 md:mt-28">
            <div className="max-w-3xl">
               <SectionTag tag="What We Build" className="inline-flex px-4 py-2 text-sm" />
               <h2 className="mt-6 text-30 font-semibold text-main-black md:text-48">
                  The offer stays focused on AI product delivery, with SaaS as the shipping layer
               </h2>
               <p className="mt-5 text-base leading-8 text-paragraph md:text-lg">
                  Clients should understand the offer quickly. We build AI software that improves operations, reduces manual workflow load, and becomes part of how the business runs day to day.
               </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
               {buildPillars.map((pillar) => (
                  <article
                     key={pillar.title}
                     className="rounded-[28px] border border-[#e7e8e9] bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
                  >
                     <h3 className="text-2xl font-semibold text-main-black">{pillar.title}</h3>
                     <p className="mt-4 text-sm leading-7 text-paragraph md:text-base">
                        {pillar.description}
                     </p>
                  </article>
               ))}
            </div>
         </section>

         <section className="theme-container mt-20 md:mt-28">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
               <div className="rounded-[32px] border border-[#e7e8e9] bg-[#f7fbff] p-7 md:p-10">
                  <SectionTag tag="Service Focus" className="inline-flex px-4 py-2 text-sm" />
                  <h2 className="mt-6 text-30 font-semibold text-main-black md:text-48">
                     Two core lanes, supported by the right delivery capabilities
                  </h2>
                  <p className="mt-5 text-base leading-8 text-paragraph md:text-lg">
                     The positioning should stay narrow. AI Product Studio is the main offer. SaaS delivery is how that product becomes usable, scalable, and ready for teams to operate.
                  </p>

                  <div className="mt-8 grid gap-4">
                     {selectedPrimaryServices.map((service) => (
                        <div
                           key={service._id}
                           className="rounded-[24px] border border-white bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)]"
                        >
                           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                              Primary lane
                           </p>
                           <h3 className="mt-3 text-xl font-semibold text-main-black">
                              {service.title}
                           </h3>
                           <p className="mt-3 text-sm leading-7 text-paragraph md:text-base">
                              {service.description}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="rounded-[32px] border border-[#e7e8e9] bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
                     Supporting capabilities
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold text-main-black md:text-[32px]">
                     The supporting work stays visible without becoming the headline
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-paragraph md:text-base">
                     These capabilities help the core offer succeed, but they should not read like a generic agency menu.
                  </p>

                  <div className="mt-8 grid gap-4">
                     {supportingCapabilities.map((service) => (
                        <div key={service._id} className="rounded-[22px] bg-[#f8fafc] px-5 py-4">
                           <h4 className="text-lg font-semibold text-main-black">{service.title}</h4>
                           <p className="mt-2 text-sm leading-7 text-paragraph">
                              {service.description}
                           </p>
                        </div>
                     ))}
                  </div>

                  <div className="mt-8 rounded-[22px] border border-dashed border-brand/20 bg-brand/5 px-5 py-4">
                     <p className="text-sm leading-7 text-paragraph">
                        Need the detailed service list? Use this page as the strategic overview, then link deeper into{" "}
                        <a href="/services" className="font-semibold text-brand hover:underline">
                           services
                        </a>{" "}
                        and{" "}
                        <a href="/how-we-build-saas" className="font-semibold text-brand hover:underline">
                           delivery process
                        </a>
                        .
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="theme-container mt-20 md:mt-28">
            <div className="max-w-3xl">
               <SectionTag tag="Proof" className="inline-flex px-4 py-2 text-sm" />
               <h2 className="mt-6 text-30 font-semibold text-main-black md:text-48">
                  Recent delivery proof should show both outcomes and product execution
               </h2>
               <p className="mt-5 text-base leading-8 text-paragraph md:text-lg">
                  This page should not depend on abstract claims. It needs real projects and case studies behind the positioning.
               </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
               <ProofGrid title="Case Studies" items={caseStudies.slice(0, 2)} />
               <ProofGrid title="Projects" items={projects.slice(0, 2)} />
            </div>
         </section>

         <section className="theme-container mt-20 md:mt-28">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
               <div>
                  <SectionTag tag="FAQs" className="inline-flex px-4 py-2 text-sm" />
                  <h2 className="mt-6 text-30 font-semibold text-main-black md:text-48">
                     Clear answers for buyers evaluating AI-related delivery
                  </h2>
                  <p className="mt-5 text-base leading-8 text-paragraph md:text-lg">
                     The wording needs to stay simple. Clients should understand they are hiring a team to build AI apps and AI-enabled software, not just strategy.
                  </p>
               </div>
               <FaqAccordion items={faqItems.length > 0 ? faqItems : fallbackFaqs} />
            </div>
         </section>

         <section className="theme-container mt-20 md:mt-28">
            <div className="rounded-[36px] bg-[#10263a] px-6 py-10 text-white md:px-10 md:py-14">
               <div className="max-w-3xl">
                  <SectionTag
                     tag="Next Step"
                     className="inline-flex bg-white/10 px-4 py-2 text-sm font-medium text-cyan-300"
                  />
                  <h2 className="mt-6 text-30 font-semibold md:text-48">
                     If you need AI software that fits real operations, start with the product, not just the model
                  </h2>
                  <p className="mt-5 text-base leading-8 text-slate-200 md:text-lg">
                     We can help shape the product, define the workflow, and ship an AI-enabled system your team can actually operate.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                     <Button
                        href="/contact"
                        btnText="Start the Conversation"
                        className="bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                     />
                     <Button
                        href="/services"
                        btnText="Review Service Scope"
                        className="border border-white/15 bg-white/10 text-white hover:bg-white/15"
                     />
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
