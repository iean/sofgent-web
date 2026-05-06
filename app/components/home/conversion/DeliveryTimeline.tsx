import SectionReveal from "@/app/components/common/SectionReveal";
import { homeConversionContent } from "@/app/content/home-conversion";

export default function DeliveryTimeline() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28" id="process">
      <div className="theme-container">
        <SectionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              Delivery process
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              A structured build path that keeps speed, visibility, and engineering quality aligned.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Buyers do not just need a vendor. They need a delivery model that reduces uncertainty. This is the cadence SofGent uses to move teams from idea to production.
            </p>
          </div>
        </SectionReveal>

        <div className="relative mt-14 grid gap-6 xl:grid-cols-6">
          <div className="pointer-events-none absolute left-6 right-6 top-12 hidden h-px bg-slate-200 xl:block" />
          {homeConversionContent.process.map((item, index) => (
            <SectionReveal key={item.step} delay={index * 0.05}>
              <div className="relative z-10 h-full rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-100 bg-cyan-50 text-sm font-bold text-cyan-700">
                  {item.step}
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                  Output
                </p>
                <p className="mt-2 text-base leading-7 text-slate-600">{item.output}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
