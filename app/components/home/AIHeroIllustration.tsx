import {
   BrainCircuit,
   Database,
   FileText,
   LayoutGrid,
   ShieldCheck,
   Sparkles,
   Waypoints,
} from "lucide-react";

const flowCards = [
   {
      icon: FileText,
      title: "Inputs",
      description: "Documents, records, and workflow events.",
      chips: ["Docs", "Data", "Rules"],
   },
   {
      icon: LayoutGrid,
      title: "Product Output",
      description: "Dashboards, automation, and launch-ready software.",
      chips: ["SaaS", "Automation", "Insights"],
   },
];

const supportCards = [
   {
      icon: Database,
      eyebrow: "AI-ready data",
      title: "Structured for search, reporting, and workflows",
   },
   {
      icon: ShieldCheck,
      eyebrow: "Production ready",
      title: "Built for rollout, reliability, and scale",
   },
];

export default function AIHeroIllustration() {
   return (
      <div className="relative w-full min-w-0">
         <div className="absolute left-1/2 top-10 h-32 w-[68%] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[82px]" />

         <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(160deg,#06121a_0%,#0b2230_100%)] p-4 backdrop-blur-md md:p-5">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:28px_28px] opacity-[0.04]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.15)_0%,rgba(6,18,26,0)_46%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.12)_0%,rgba(11,34,48,0)_32%)]" />

            <div className="relative z-10">
               <div className="flex flex-wrap items-center justify-between gap-3 rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <div className="flex items-center gap-2.5">
                     <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-cyan-300/90" />
                        <span className="h-2 w-2 rounded-full bg-white/35" />
                        <span className="h-2 w-2 rounded-full bg-white/20" />
                     </div>
                     <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-100">
                        SaaS Architecture Preview
                     </span>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100 transition-all duration-300 hover:-translate-y-[2px] hover:bg-white/10">
                     <Sparkles className="h-3.5 w-3.5" strokeWidth={1.8} />
                     AI workflow preview
                  </span>
               </div>

               <div className="mt-4 rounded-[22px] border border-white/10 bg-[#07151f]/55 p-4 md:p-5">
                  <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,0.9fr)_auto_minmax(0,0.9fr)] lg:items-center">
                     {flowCards.map((card, index) => (
                        <div
                           key={card.title}
                           className={`min-w-0 rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200 transition-all duration-300 hover:-translate-y-[2px] hover:bg-white/10 ${
                              index === 1 ? "lg:order-3" : ""
                           }`}>
                           <div className="flex items-center gap-3">
                              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-cyan-300/16 bg-cyan-300/10 text-cyan-100">
                                 <card.icon className="h-5 w-5" strokeWidth={1.8} />
                              </div>
                              <div className="min-w-0">
                                 <p className="text-[15px] font-semibold tracking-[-0.02em] text-white">
                                    {card.title}
                                 </p>
                                 <p className="mt-1 text-[13px] leading-6 text-slate-300">
                                    {card.description}
                                 </p>
                              </div>
                           </div>

                           <div className="mt-4 flex flex-wrap gap-2">
                              {card.chips.map((chip) => (
                                 <span
                                    key={chip}
                                    className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200">
                                    {chip}
                                 </span>
                              ))}
                           </div>
                        </div>
                     ))}

                     <div className="relative mx-auto flex w-full max-w-[220px] flex-col items-center lg:order-2">
                        <div className="studio-line-flow absolute left-1/2 top-[4.1rem] hidden h-px w-10 -translate-x-[142px] bg-gradient-to-r from-transparent via-cyan-300/75 to-cyan-300/10 lg:block" />
                        <div className="studio-line-flow absolute left-1/2 top-[4.1rem] hidden h-px w-10 translate-x-[102px] bg-gradient-to-r from-cyan-300/10 via-cyan-300/75 to-transparent lg:block" />

                        <div className="relative flex h-[138px] w-[138px] items-center justify-center">
                           <div className="absolute inset-0 rounded-full border border-cyan-300/18" />
                           <div className="absolute inset-4 rounded-full border border-cyan-300/14 border-dashed" />
                           <div className="absolute inset-[2.9rem] rounded-full bg-cyan-300/10 blur-[30px]" />

                           <div className="studio-orbit-pulse relative z-10 rounded-[30px] p-[1px]">
                              <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(160deg,rgba(103,232,249,0.88),rgba(14,116,144,0.14),rgba(103,232,249,0.72))] opacity-70 blur-sm" />
                              <div className="relative flex h-[108px] w-[108px] flex-col items-center justify-center rounded-[30px] border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(12,39,58,0.96)_0%,rgba(10,27,41,0.98)_100%)] px-4 text-center shadow-[0_20px_48px_rgba(5,12,24,0.26)]">
                                 <BrainCircuit
                                    className="h-8 w-8 text-cyan-100"
                                    strokeWidth={1.9}
                                 />
                                 <p className="mt-2.5 text-[14px] font-semibold tracking-[-0.02em] text-white">
                                    AI Orchestration
                                 </p>
                              </div>
                           </div>
                        </div>

                        <div className="mt-3 flex flex-wrap justify-center gap-2">
                           {["Structuring", "AI logic", "Automation"].map((item) => (
                              <span
                                 key={item}
                                 className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200">
                                 {item}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>

                  <div className="mt-4 grid gap-3 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)]">
                     <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 transition-all duration-300 hover:-translate-y-[2px] hover:bg-white/[0.06]">
                        <div className="flex items-center gap-2 text-cyan-100/80">
                           <Waypoints className="h-4 w-4" strokeWidth={1.8} />
                           <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                              System path
                           </span>
                        </div>
                        <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.16em] text-white/70">
                           Inputs &rarr; Structuring &rarr; AI Logic &rarr;
                           Product Output
                        </p>
                     </div>

                     {supportCards.map((card) => (
                        <div
                           key={card.title}
                           className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 hover:-translate-y-[2px] hover:bg-white/10">
                           <div className="flex items-center gap-2.5">
                              <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-cyan-300/16 bg-cyan-300/10 text-cyan-100">
                                 <card.icon
                                    className="h-[18px] w-[18px]"
                                    strokeWidth={1.8}
                                 />
                              </div>
                              <div className="min-w-0">
                                 <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                                    {card.eyebrow}
                                 </p>
                                 <p className="mt-2 text-[14px] font-semibold leading-6 tracking-[-0.02em] text-white">
                                    {card.title}
                                 </p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
