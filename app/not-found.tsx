import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/app/components/Layout/Header/Header";
import Footer from "@/app/components/Layout/Footer/Footer";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata = {
   title: "Page not found",
   description: "We couldn't find the page you were looking for.",
};

export default function NotFound() {
   return (
      <main className="min-h-screen bg-slate-50 selection:bg-cyan-500/20 selection:text-cyan-900">
         <Header />
         <section className="relative pt-[220px] md:pt-[260px] pb-24 md:pb-32 bg-slate-950 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,50,60,0.5),transparent_70%)]" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <div className="theme-container relative z-10 max-w-3xl text-center mx-auto">
               <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-400">
                  404
               </p>
               <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
                  This page didn&apos;t ship.
               </h1>
               <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
                  The link you followed is dead, moved, or was never built.
                  Pick a path that&apos;s actually live.
               </p>
               <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                     href="/services"
                     className="inline-flex items-center justify-center bg-cyan-500 text-slate-950 px-8 py-4 rounded-xl font-bold transition-all hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                     Explore services <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                     href={CALENDLY_URL}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-bold border border-white/10 transition-all hover:bg-white/10">
                     Book a strategy call
                  </Link>
               </div>
            </div>
         </section>
         <Footer />
      </main>
   );
}
