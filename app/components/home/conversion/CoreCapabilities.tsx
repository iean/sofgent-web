import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Database,
  Layers3,
  ScanSearch,
  Sparkles,
  Workflow,
} from "lucide-react";
import SectionReveal from "@/app/components/common/SectionReveal";
import {
  homeConversionContent,
  type HomeCapabilityIconKey,
} from "@/app/content/home-conversion";

const capabilityIcons: Record<HomeCapabilityIconKey, typeof Database> = {
  layers: Layers3,
  sparkles: Sparkles,
  workflow: Workflow,
  scan: ScanSearch,
  database: Database,
  briefcase: BriefcaseBusiness,
};

export default function CoreCapabilities() {
  return (
    <section className="bg-slate-50 py-24 md:py-28" id="solutions">
      <div className="theme-container">
        <SectionReveal>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              What we build
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              AI systems, SaaS products, and internal tools built around business outcomes.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              SofGent sells execution, not vague consulting. Each engagement maps to a system type, a business bottleneck, and a clear production path.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homeConversionContent.capabilities.map((item, index) => {
            const Icon = capabilityIcons[item.icon];

            return (
              <SectionReveal key={item.slug} delay={index * 0.05}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-6 flex-1 text-base leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-700">
                    {item.proof}
                  </div>
                  <div className="mt-6 inline-flex items-center text-sm font-bold text-primary">
                    Explore service <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
