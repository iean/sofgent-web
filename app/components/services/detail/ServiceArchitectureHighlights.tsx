import { Cpu, Network, ShieldCheck } from "lucide-react";
import type { ServiceView } from "@/lib/sanity/content";

const icons = [Cpu, Network, ShieldCheck];

export default function ServiceArchitectureHighlights({
  service,
}: {
  service: ServiceView;
}) {
  if (!service.architectureHighlights?.length) return null;

  return (
    <section className="bg-slate-950 py-20 text-white md:py-24">
      <div className="theme-container">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-400">
            Architecture highlights
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            How this service is structured to survive production.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            The differentiator is not just shipping functionality. It is shipping the system boundaries, workflow reliability, and operational structure that keep the product usable after launch.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {service.architectureHighlights.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <Icon className="h-10 w-10 text-cyan-300" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
