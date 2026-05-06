import type { ServiceView } from "@/lib/sanity/content";

export default function ServiceProofMetrics({
  service,
}: {
  service: ServiceView;
}) {
  if (!service.proofMetrics?.length) return null;

  return (
    <section className="border-b border-slate-200 bg-white py-12 md:py-14">
      <div className="theme-container">
        <div className="grid gap-4 md:grid-cols-3">
          {service.proofMetrics.map((item) => (
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
      </div>
    </section>
  );
}
