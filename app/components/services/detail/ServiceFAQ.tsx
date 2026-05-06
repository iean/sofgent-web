import { getFaqItems } from "@/lib/content/shared";
import FaqAccordion from "@/app/components/services/faq/FaqAccordion";
import type { ServiceView } from "@/lib/sanity/content";

export default async function ServiceFAQ({ service }: { service: ServiceView }) {
   const sectionKey = service.faqSection ?? `service:${service.slug}`;

   // Try the service-specific section first; fall back to the global services FAQ
   // so a freshly-added service still shows useful content.
   const serviceFaqs = await getFaqItems(sectionKey);
   const faqs =
      serviceFaqs.length > 0 ? serviceFaqs : await getFaqItems("services");

   if (!faqs || faqs.length === 0) return null;

   return (
      <section className="bg-white py-20 md:py-24 border-b border-slate-100" id="faq">
         <div className="theme-container">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
               <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary mb-4">
                     FAQ
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                     Answers to the questions clients ask before they book.
                  </h2>
                  <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-md">
                     Don&apos;t see your question? Mention it on the strategy call —
                     we&apos;ll cover the specifics for your stack and stage.
                  </p>
               </div>
               <div>
                  <FaqAccordion items={faqs} />
               </div>
            </div>
         </div>
      </section>
   );
}
