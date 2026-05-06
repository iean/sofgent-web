import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";
import type { ServiceView } from "@/lib/sanity/content";

export default function ServiceCTA({ service }: { service: ServiceView }) {
   return (
      <section className="bg-slate-50 py-24" id="contact">
         <div className="theme-container">
            <div className="relative overflow-hidden rounded-[3rem] border border-cyan-900/50 bg-slate-950 px-8 py-20 md:px-20 md:py-28 shadow-2xl text-center">
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_45%)] pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(50,109,109,0.32),transparent_45%)] pointer-events-none" />

               <div className="relative z-10 max-w-3xl mx-auto">
                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-400 mb-6">
                     Ready to start
                  </p>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                     Let&apos;s scope your {service.title.toLowerCase()} engagement.
                  </h2>
                  <p className="mt-6 text-xl text-slate-300 leading-relaxed">
                     Book a free 20-minute strategy call. We&apos;ll review your
                     stack, surface the highest-ROI workflow, and outline a
                     production path.
                  </p>

                  <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                     <Link
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full sm:w-auto items-center justify-center bg-cyan-500 text-slate-950 px-10 py-4 rounded-xl font-bold transition-all hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:-translate-y-0.5">
                        Book a strategy call
                        <ArrowRight className="ml-2 w-5 h-5" />
                     </Link>
                     <Link
                        href="/contact"
                        className="inline-flex w-full sm:w-auto items-center justify-center bg-white/5 text-white px-10 py-4 rounded-xl font-bold border border-white/10 transition-all hover:bg-white/10">
                        Send project details
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
