import SectionHeader from "./SectionHeader";
import { features } from "./content";

export default function FeaturesSection() {
   return (
      <section className="py-16 md:py-24">
         <div className="mx-auto theme-container">
            <SectionHeader
               eyebrow="Core Features"
               title="The capabilities behind a strong document intelligence system"
               description="These systems are designed to process documents reliably, extract the right fields, and support review and automation where it matters."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
               {features.map((item) => {
                  const Icon = item.icon;

                  return (
                     <article
                        key={item.title}
                        className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#12324a] text-white">
                           <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.03em] text-slate-950">
                           {item.title}
                        </h3>
                        <p className="mt-4 text-[16px] leading-7 text-slate-600">
                           {item.description}
                        </p>
                     </article>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
