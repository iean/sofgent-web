import SectionTag from "@/app/components/common/SectionTag";
import { getFaqs, getProjectCollections, getServices } from "@/lib/sanity/content";
import Link from "next/link";
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
      <div className="bg-white pb-24 pt-20 md:pb-32 md:pt-28">
         <section className="max-w-[1140px] mx-auto px-8">
            <div className="max-w-3xl">
               <SectionTag tag="What We Build" className="inline-flex px-4 py-2 text-sm" />
               <h2 className="mt-6 text-30 font-semibold text-main-black md:text-48">
                  AI software that becomes part of how your business runs
               </h2>
               <p className="mt-5 text-base leading-8 text-paragraph md:text-lg">
                  We build AI apps, internal tools, and SaaS systems that cut manual workflow load and improve decision speed — software your team uses every day, not a one-off experiment.
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

         <section className="max-w-[1140px] mx-auto px-8 mt-20 md:mt-28">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
               <div className="rounded-[32px] border border-[#e7e8e9] bg-[#f7fbff] p-7 md:p-10">
                  <SectionTag tag="Service Focus" className="inline-flex px-4 py-2 text-sm" />
                  <h2 className="mt-6 text-30 font-semibold text-main-black md:text-48">
                     Two core lanes, backed by full delivery capability
                  </h2>
                  <p className="mt-5 text-base leading-8 text-paragraph md:text-lg">
                     AI Product Studio is the core offer. SaaS delivery is how that product becomes usable, scalable, and ready for your team to operate in production.
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
                     The capabilities that ship with every build
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-paragraph md:text-base">
                     Data engineering, integrations, DevOps, and QA — the work that makes the core product reliable in production.
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
                        <Link href="/services" className="font-semibold text-brand hover:underline">
                           services
                        </Link>{" "}
                        and{" "}
                        <Link href="/how-we-build-saas" className="font-semibold text-brand hover:underline">
                           delivery process
                        </Link>
                        .
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="max-w-[1140px] mx-auto px-8 mt-20 md:mt-28">
            <div className="max-w-3xl">
               <SectionTag tag="Proof" className="inline-flex px-4 py-2 text-sm" />
               <h2 className="mt-6 text-30 font-semibold text-main-black md:text-48">
                  Real projects, shipped to production
               </h2>
               <p className="mt-5 text-base leading-8 text-paragraph md:text-lg">
                  Case studies and live products behind the positioning — outcomes you can see, not abstract claims.
               </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
               <ProofGrid title="Case Studies" items={caseStudies.slice(0, 2)} />
               <ProofGrid title="Projects" items={projects.slice(0, 2)} />
            </div>
         </section>

         <section className="max-w-[1140px] mx-auto px-8 mt-20 md:mt-28 pb-4">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
               <div>
                  <SectionTag tag="FAQs" className="inline-flex px-4 py-2 text-sm" />
                  <h2 className="mt-6 text-30 font-semibold text-main-black md:text-48">
                     Questions, answered
                  </h2>
                  <p className="mt-5 text-base leading-8 text-paragraph md:text-lg">
                     You&apos;re hiring a team to build and ship AI software your operations can run on — not just strategy decks. Here&apos;s what that looks like.
                  </p>
               </div>
               <FaqAccordion items={faqItems.length > 0 ? faqItems : fallbackFaqs} />
            </div>
         </section>
      </div>
   );
}
