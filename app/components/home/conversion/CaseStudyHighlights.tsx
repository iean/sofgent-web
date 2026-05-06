import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/app/components/common/Button";
import SectionReveal from "@/app/components/common/SectionReveal";
import { homeConversionContent } from "@/app/content/home-conversion";

export default function CaseStudyHighlights() {
  return (
    <section className="bg-white py-24 md:py-28" id="case-studies">
      <div className="theme-container">
        <SectionReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
                Case studies
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Sanitized delivery stories with real architecture decisions behind them.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                These are not mockups. They reflect the kind of systems SofGent is built to deliver: AI knowledge layers, payment workflow infrastructure, and document-heavy automation platforms.
              </p>
            </div>
            <Button btnText="Explore all case studies" href="/case-studies" variant="outline" />
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {homeConversionContent.caseStudies.map((study, index) => (
            <SectionReveal key={study.title} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                    Premium build
                  </p>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                    {study.technologies[0]}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
                  {study.title}
                </h3>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                    Challenge
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{study.challenge}</p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                    Solution
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{study.solution}</p>
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                    Architecture highlight
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {study.architectureHighlight}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {study.technologies.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 space-y-2">
                  {study.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-900"
                    >
                      {outcome}
                    </div>
                  ))}
                </div>

                <Link
                  href={study.href}
                  className="mt-8 inline-flex items-center font-bold text-primary"
                >
                  View case study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
