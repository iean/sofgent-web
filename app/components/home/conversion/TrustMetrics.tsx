import SectionReveal from "@/app/components/common/SectionReveal";
import { homeConversionContent } from "@/app/content/home-conversion";

export default function TrustMetrics() {
  return (
    <section className="border-b border-slate-200 bg-white py-8 md:py-10">
      <div className="theme-container">
        <SectionReveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {homeConversionContent.proofMetrics.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm"
              >
                <div className="text-3xl font-bold tracking-tight text-slate-950">
                  {item.value}
                </div>
                <div className="mt-2 text-sm font-medium leading-6 text-slate-600">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
