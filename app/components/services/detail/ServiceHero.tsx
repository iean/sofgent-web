import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
   return (
      <section className="relative overflow-hidden bg-slate-950 text-white pt-24 md:pt-32 pb-20 md:pb-28">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,50,60,0.5),transparent_70%)]" />
         <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

         <div className="theme-container relative z-10">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
               <div>
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
                        Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                     </Link>
                     <Link
                        href="#approach"
                        className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-bold border border-white/10 transition-all hover:bg-white/10">
                        See how it works
                     </Link>
                  </div>
               </div>

               <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-md shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
                  <Image
                     src={service.heroImage.src}
                     alt={service.heroImage.alt}
                     width={1600}
                     height={900}
                     priority
                     sizes="(max-width: 1024px) 100vw, 720px"
                     className="h-auto w-full rounded-[1.5rem] object-cover"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
