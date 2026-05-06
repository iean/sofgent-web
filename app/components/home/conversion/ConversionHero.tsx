import { CircuitBoard, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Button from "@/app/components/common/Button";
import HeroSlider from "@/app/components/home/HeroSlider";
import SectionReveal from "@/app/components/common/SectionReveal";
import { homeConversionContent } from "@/app/content/home-conversion";

export default function ConversionHero() {
  const { hero } = homeConversionContent;

  return (
    <section className="relative overflow-hidden bg-slate-950 pb-20 pt-[220px] text-white md:pb-24 md:pt-[260px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,50,60,0.55),transparent_72%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="theme-container relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-cyan-400">
                <CircuitBoard className="h-4 w-4" />
                {hero.eyebrow}
              </div>
              <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-[64px] lg:text-[72px]">
                {hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                {hero.subheadline}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  btnText={hero.primaryCta.label}
                  href={hero.primaryCta.href}
                  external={hero.primaryCta.external}
                  className="px-8 py-4 text-base"
                />
                <Button
                  btnText={hero.secondaryCta.label}
                  href={hero.secondaryCta.href}
                  variant="outline"
                  className="border-white/15 bg-white/5 px-8 py-4 text-base text-white hover:border-white/30 hover:bg-white/10 hover:text-white"
                />
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {hero.trustIndicators.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"
                  >
                    <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_90px_-35px_rgba(0,0,0,0.75)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/80">
                <HeroSlider />
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {hero.supportCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-[1.35rem] border border-white/10 bg-slate-900/75 px-5 py-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                      {card.label}
                    </p>
                    <p className="mt-2 text-lg font-bold text-white">{card.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between rounded-[1.35rem] border border-cyan-500/20 bg-cyan-500/10 px-5 py-4 text-sm text-cyan-100">
                <span>See how SofGent structures AI delivery for real products.</span>
                <Link href="/how-we-build-saas" className="inline-flex items-center font-bold text-cyan-300">
                  Explore process <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
