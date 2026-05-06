import Button from "@/app/components/common/Button";
import SectionReveal from "@/app/components/common/SectionReveal";
import { homeConversionContent } from "@/app/content/home-conversion";

export default function LeadCaptureBand() {
  const { leadCapture } = homeConversionContent;

  return (
    <section className="bg-slate-50 py-24 md:py-28">
      <div className="theme-container">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[3rem] border border-slate-900/80 bg-slate-950 px-8 py-14 text-white shadow-2xl md:px-14 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.2),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.18),transparent_40%)]" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-400">
                  {leadCapture.eyebrow}
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                  {leadCapture.headline}
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  {leadCapture.body}
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button
                    btnText={leadCapture.primaryCta.label}
                    href={leadCapture.primaryCta.href}
                    external={leadCapture.primaryCta.external}
                    className="px-8 py-4 text-base"
                  />
                  <Button
                    btnText={leadCapture.secondaryCta.label}
                    href={leadCapture.secondaryCta.href}
                    variant="outline"
                    className="border-white/15 bg-white/5 px-8 py-4 text-base text-white hover:border-white/30 hover:bg-white/10 hover:text-white"
                  />
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
                  What you will get
                </p>
                <div className="mt-5 space-y-4">
                  {leadCapture.bullets.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-base leading-7 text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
