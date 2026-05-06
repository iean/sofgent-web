import SectionReveal from "@/app/components/common/SectionReveal";
import { homeConversionContent } from "@/app/content/home-conversion";

export default function EngineeringPhilosophy() {
  return (
    <section className="bg-slate-50 py-24 md:py-28">
      <div className="theme-container">
        <SectionReveal>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              Engineering philosophy
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Architecture-driven delivery, without the usual agency fluff.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              SofGent is positioned around systems that survive real usage. That changes how we scope, how we sequence work, and how we decide what gets built first.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {homeConversionContent.philosophy.map((item, index) => (
            <SectionReveal key={item.title} delay={index * 0.06}>
              <div className="h-full rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                  Pillar {index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.body}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
