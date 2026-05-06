import SectionReveal from "@/app/components/common/SectionReveal";
import { homeConversionContent } from "@/app/content/home-conversion";

export default function StudioAuthority() {
  const { authority } = homeConversionContent;

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_55%)]" />
      <div className="theme-container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionReveal>
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-400">
                {authority.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                {authority.headline}
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                {authority.body}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {authority.stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.6rem] border border-white/10 bg-white/5 px-5 py-5"
                  >
                    <div className="text-2xl font-bold text-white">{item.value}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <div className="grid gap-4">
            {authority.highlights.map((item, index) => (
              <SectionReveal key={item.title} delay={index * 0.06}>
                <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">{item.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
