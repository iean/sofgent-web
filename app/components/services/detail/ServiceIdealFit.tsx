import type { ServiceView } from "@/lib/sanity/content";

export default function ServiceIdealFit({ service }: { service: ServiceView }) {
  if (!service.idealFit?.length) return null;

  return (
    <section className="border-b border-slate-100 bg-white py-20 md:py-24">
      <div className="theme-container">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
            Best fit
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Who this service is built for.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            A strong project starts with fit. These are the kinds of teams and operating problems where this engagement creates the clearest return.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {service.idealFit.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold tracking-tight text-slate-900">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
