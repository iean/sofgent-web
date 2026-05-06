import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";
import type { ServiceView } from "@/lib/sanity/content";

export default function ServicePricing({ service }: { service: ServiceView }) {
   if (!service.pricing) return null;
   const { from, model, note } = service.pricing;
   if (!from && !model) return null;

   return (
      <section className="bg-white py-20 md:py-24 border-b border-slate-100">
         <div className="theme-container">
            <div className="rounded-[3rem] border border-slate-800 bg-slate-900 p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.18),transparent_55%)] pointer-events-none" />

               <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
                  <div>
                     <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-400 mb-4">
                        Pricing
                     </p>
                     <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        {from ?? "Custom scope"}
                     </h2>
                     {model ? (
                        <p className="mt-3 text-lg font-semibold text-cyan-200/90">
                           {model}
                        </p>
                     ) : null}
                     {note ? (
                        <p className="mt-5 text-base text-slate-300 leading-relaxed max-w-xl">
                           {note}
                        </p>
                     ) : null}
                  </div>

                  <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
                     <Link
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-cyan-500 text-slate-950 px-8 py-4 rounded-xl font-bold transition-all hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                        Book a strategy call <ArrowRight className="ml-2 w-5 h-5" />
                     </Link>
                     <Link
                        href="/contact"
                        className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-bold border border-white/10 transition-all hover:bg-white/10">
                        Send project details
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
