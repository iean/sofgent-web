"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Code2, Database, Network, Download } from "lucide-react";

const TOTAL_SLIDES = 3;
const SLIDE_DURATION_MS = 5000;

export default function HeroSlider() {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [isVisible, setIsVisible] = useState(true);
   const containerRef = useRef<HTMLDivElement | null>(null);

   // Pause autoplay when scrolled off-screen
   useEffect(() => {
      const node = containerRef.current;
      if (!node || typeof IntersectionObserver === "undefined") return;
      const observer = new IntersectionObserver(
         ([entry]) => setIsVisible(entry.isIntersecting),
         { rootMargin: "0px", threshold: 0.1 }
      );
      observer.observe(node);
      return () => observer.disconnect();
   }, []);

   // Auto-play, but only when visible and motion is allowed
   useEffect(() => {
      if (!isVisible) return;
      if (typeof window === "undefined") return;
      const reduceMotion = window.matchMedia(
         "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduceMotion) return;

      const timer = setInterval(() => {
         setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
      }, SLIDE_DURATION_MS);
      return () => clearInterval(timer);
   }, [isVisible]);

   return (
      <div
         ref={containerRef}
         className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[640px] xl:h-[700px] flex flex-col justify-center">
         <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] rounded-full" />
         
         <div className="relative z-10 w-full h-full rounded-[32px] border border-white/10 bg-slate-900/50 backdrop-blur-xl p-8 shadow-2xl flex flex-col overflow-hidden">
            
            {/* Slide Content Container */}
            <div className="flex-grow relative overflow-hidden flex items-center justify-center">
               
               {/* SLIDE 1: Architecture Graphic */}
               <div className={`absolute inset-0 flex flex-col justify-between transition-opacity duration-500 ease-in-out ${currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                  <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-4">
                     <div className="w-3 h-3 rounded-full bg-slate-700" />
                     <div className="w-3 h-3 rounded-full bg-slate-700" />
                     <div className="w-3 h-3 rounded-full bg-slate-700" />
                     <div className="ml-4 px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-cyan-500 border border-white/5">POST /api/v1/orchestrate</div>
                  </div>
                  <div className="flex-grow flex flex-col gap-5 justify-center relative px-2">
                     <div className="absolute left-[39px] top-6 bottom-6 w-px bg-gradient-to-b from-cyan-500/50 via-teal-500/50 to-emerald-500/50" />
                     <div className="flex items-center gap-6 relative z-10">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center shadow-lg relative shrink-0">
                           <Database className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />
                           <div className="absolute -right-1.5 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
                        </div>
                        <div className="flex-grow bg-slate-800/50 rounded-xl border border-white/5 p-3 sm:p-4 backdrop-blur-sm">
                           <p className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-widest mb-1">Data Ingestion</p>
                           <p className="text-xs sm:text-sm font-light text-slate-500">Unstructured inputs securely parsed</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-6 relative z-10">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.1)] relative shrink-0">
                           <Network className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-300" />
                           <div className="absolute -left-1.5 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
                           <div className="absolute -right-1.5 w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_10px_#2dd4bf]" />
                        </div>
                        <div className="flex-grow bg-cyan-950/20 rounded-xl border border-cyan-500/20 p-3 sm:p-4 backdrop-blur-sm">
                           <p className="text-[10px] sm:text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1">AI Processing</p>
                           <p className="text-xs sm:text-sm font-light text-cyan-100/60">Semantic routing & inference</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-6 relative z-10">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center shadow-lg relative shrink-0">
                           <Code2 className="w-7 h-7 sm:w-8 sm:h-8 text-teal-400" />
                           <div className="absolute -left-1.5 w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_10px_#2dd4bf]" />
                        </div>
                        <div className="flex-grow bg-slate-800/50 rounded-xl border border-white/5 p-3 sm:p-4 backdrop-blur-sm">
                           <p className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-widest mb-1">Production App</p>
                           <p className="text-xs sm:text-sm font-light text-slate-500">Structured UI & Webhooks out</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* SLIDE 2: Studio Overview */}
               <div className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                  <div className="w-full h-full overflow-hidden rounded-3xl border border-white/5 bg-slate-900 shadow-inner relative">
                     <Image
                        src="/images/home/sofgent-hero-dashboard.png"
                        alt="SofGent platform dashboard showing AI product delivery architecture and live system operations."
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/15" />
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_42%)]" />

                     <div className="absolute left-5 top-5 rounded-full border border-cyan-400/20 bg-slate-950/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-300 backdrop-blur-md">
                        Studio overview
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                        <h3 className="max-w-lg text-2xl font-bold tracking-tight text-white sm:text-[30px]">
                           The delivery system behind faster AI product execution.
                        </h3>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200/80 sm:text-base">
                           A clear architecture layer, measurable operating metrics, and deployment visibility from the first build sprint.
                        </p>
                     </div>
                  </div>
               </div>

               {/* SLIDE 3: Capability Brief */}
               <div className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out ${currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                  <div className="w-full h-full overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-950/60 relative">
                     <Image
                        src="/images/about/studio-delivery-board.png"
                        alt="SofGent strategy and architecture planning board used as a capability brief cover."
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/15" />
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.18),transparent_38%)]" />

                     <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-slate-200 backdrop-blur-md">
                        Capability brief
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                        <h3 className="max-w-lg text-2xl font-bold tracking-tight text-white sm:text-[30px]">
                           Download the SofGent pitch deck.
                        </h3>
                        <p className="mt-3 max-w-md text-sm leading-6 text-slate-200/80 sm:text-base">
                           A short overview of delivery model, architecture priorities, and the types of AI systems we ship.
                        </p>

                        <a
                           href="/pitch-deck.pdf"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-bold text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:scale-105 hover:bg-cyan-50 hover:text-cyan-900">
                           <Download className="w-4 h-4" />
                           Download Pitch Deck
                        </a>
                     </div>
                  </div>
               </div>

            </div>

            {/* Slider Navigation Dots */}
            <div className="flex items-center justify-center gap-3 mt-8 relative z-20 h-4">
               {[0, 1, 2].map((idx) => (
                  <button
                     key={idx}
                     onClick={() => setCurrentSlide(idx)}
                     aria-label={`Go to slide ${idx + 1}`}
                     className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-10 h-2 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)]' : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'}`}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}
