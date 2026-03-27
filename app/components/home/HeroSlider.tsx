"use client";

import { useState, useEffect } from "react";
import { Code2, Database, Network, Play, FileText, Download } from "lucide-react";

export default function HeroSlider() {
   const [currentSlide, setCurrentSlide] = useState(0);

   // Auto-play
   useEffect(() => {
      const timer = setInterval(() => {
         setCurrentSlide((prev) => (prev + 1) % 3);
      }, 5000);
      return () => clearInterval(timer);
   }, []);

   return (
      <div className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[640px] xl:h-[700px] flex flex-col justify-center">
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

               {/* SLIDE 2: Video Player Placeholder */}
               <div className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                  <div className="w-full h-full bg-slate-900 rounded-3xl border border-white/5 overflow-hidden relative group cursor-pointer flex flex-col items-center justify-center shadow-inner">
                     <div className="absolute inset-0 bg-cyan-950 mix-blend-overlay" />
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)] pointer-events-none" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent pointer-events-none" />
                     
                     <div className="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center backdrop-blur-md group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] z-10 mb-6">
                        <Play className="w-10 h-10 text-cyan-300 ml-1.5" fill="currentColor" />
                     </div>
                     <div className="text-center z-10 px-4">
                        <h3 className="text-2xl font-bold text-white mb-2 shadow-sm tracking-tight group-hover:text-cyan-200 transition-colors">How SofGent Operates</h3>
                        <p className="text-sm text-cyan-100/70 font-medium">Watch our 2-minute studio overview</p>
                     </div>
                  </div>
               </div>

               {/* SLIDE 3: Pitch Deck */}
               <div className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out ${currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                  <div className="w-full h-full border-2 border-dashed border-cyan-500/20 rounded-3xl bg-cyan-950/10 flex flex-col items-center justify-center p-8 text-center hover:bg-cyan-950/20 hover:border-cyan-500/40 transition-all">
                     <div className="w-28 h-28 mb-8 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-600 p-1 shadow-2xl rotate-3 hover:rotate-6 transition-transform">
                        <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center flex-col gap-2 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-10 h-10 bg-cyan-500/20 rounded-bl-xl" />
                           <FileText className="w-12 h-12 text-cyan-400" />
                           <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">PDF</span>
                        </div>
                     </div>
                     <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">SofGent Pitch Deck</h3>
                     <p className="text-slate-400 text-sm lg:text-base mb-8 max-w-[300px]">Deep dive into our execution model, technical capabilities, and pricing.</p>
                     
                     <a href="/pitch-deck.pdf" target="_blank" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-950 font-bold hover:bg-cyan-50 hover:text-cyan-900 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        <Download className="w-4 h-4" />
                        Download Pitch Deck
                     </a>
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
