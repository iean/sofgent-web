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

               <div className="relative z-10 mx-auto grid max-w-5xl gap-10 text-left lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <div>
                     <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-400 mb-6">
                        Ready to scope the build
                     </p>
                     <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                        Let&apos;s map the fastest production path for your {service.title.toLowerCase()} project.
                     </h2>
                     <p className="mt-6 text-xl text-slate-300 leading-relaxed">
                        Book a free consultation or send the project details async. We&apos;ll review the workflow, likely architecture shape, delivery window, and where the real technical risk sits.
                     </p>

                     <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
                        <Link
                           href={CALENDLY_URL}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex w-full sm:w-auto items-center justify-center bg-cyan-500 text-slate-950 px-10 py-4 rounded-xl font-bold transition-all hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:-translate-y-0.5">
                           Book free consultation
                           <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link
                           href="/contact"
                           className="inline-flex w-full sm:w-auto items-center justify-center bg-white/5 text-white px-10 py-4 rounded-xl font-bold border border-white/10 transition-all hover:bg-white/10">
                           Send project details
                        </Link>
                     </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                     <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
                        What we&apos;ll cover
                     </p>
                     <div className="mt-5 space-y-4">
                        {[
                           "The business bottleneck worth solving first",
                           "A likely architecture and delivery shape",
                           "The best-fit engagement model for your stage",
                        ].map((item) => (
                           <div
                              key={item}
                              className="rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-base leading-7 text-slate-200">
                              {item}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
