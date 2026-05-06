import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";
import type { ServiceView } from "@/lib/sanity/content";

const CATEGORY_LABEL: Record<string, string> = {
   ai: "AI Solutions",
   saas: "SaaS Engineering",
   devops: "DevOps & Delivery",
   integration: "System Integration",
   qa: "Quality Engineering",
   maintenance: "Support & Maintenance",
};

export default function ServiceHero({ service }: { service: ServiceView }) {
   const fitPreview = service.idealFit?.slice(0, 2) ?? [];

   return (
      <section className="relative overflow-hidden bg-slate-950 text-white pt-24 md:pt-32 pb-20 md:pb-28">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,50,60,0.5),transparent_70%)]" />
         <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

         <div className="theme-container relative z-10">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
               <div>
                  <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-400">
                     <Link href="/" className="hover:text-white transition-colors">
                        Home
                     </Link>
                     <ChevronRight className="w-4 h-4 text-cyan-400" />
                     <Link href="/services" className="hover:text-white transition-colors">
                        Services
                     </Link>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-400 mb-6">
                     {CATEGORY_LABEL[service.category] ?? "Service"}
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                     {service.title}
                  </h1>
                  <p className="mt-6 text-xl md:text-2xl text-slate-200 font-medium max-w-2xl leading-snug">
                     {service.tagline}
                  </p>
                  <p className="mt-5 text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
                     {service.summary}
                  </p>

                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                     <Link
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-cyan-500 text-slate-950 px-8 py-4 rounded-xl font-bold transition-all hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                        Book free consultation <ArrowRight className="ml-2 w-5 h-5" />
                     </Link>
                     <Link
                        href="/contact"
                        className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-bold border border-white/10 transition-all hover:bg-white/10">
                        Send project details
                     </Link>
                  </div>

                  {service.outcomes.length > 0 ? (
                     <div className="mt-10 flex flex-wrap gap-3">
                        {service.outcomes.map((item) => (
                           <span
                              key={item}
                              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                              {item}
                           </span>
                        ))}
                     </div>
                  ) : null}
               </div>

               <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                     <Image
                        src={service.heroImage.src}
                        alt={service.heroImage.alt}
                        width={1600}
                        height={900}
                        priority
                        sizes="(max-width: 1024px) 100vw, 720px"
                        className="h-auto w-full object-cover"
                     />
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                     {(service.proofMetrics ?? []).slice(0, 2).map((item) => (
                        <div
                           key={item.label}
                           className="rounded-[1.4rem] border border-white/10 bg-slate-900/70 px-5 py-4">
                           <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                              {item.label}
                           </p>
                           <p className="mt-2 text-lg font-bold text-white">{item.value}</p>
                        </div>
                     ))}
                  </div>

                  {fitPreview.length > 0 ? (
                     <div className="mt-4 rounded-[1.4rem] border border-cyan-500/20 bg-cyan-500/10 px-5 py-4">
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                           Best fit
                        </p>
                        <div className="mt-3 space-y-2 text-sm leading-6 text-slate-200">
                           {fitPreview.map((item) => (
                              <p key={item.title}>{item.title}</p>
                           ))}
                        </div>
                     </div>
                  ) : null}
               </div>
            </div>
         </div>
      </section>
   );
}
