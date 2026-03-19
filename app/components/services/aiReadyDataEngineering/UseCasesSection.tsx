import SectionHeader from "./SectionHeader";
import { useCases } from "./content";

export default function UseCasesSection() {
   return (
      <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#eef3f7_100%)] py-16 md:py-24">
         <div className="mx-auto theme-container">
            <SectionHeader
               eyebrow="Use Cases"
               title="What this unlocks for the business"
               description="AI-ready data engineering creates leverage across reporting, operations, and product experiences. These are the systems teams usually want next."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
               {useCases.map((item) => {
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
