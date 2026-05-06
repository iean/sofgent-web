import {
   BrainCircuit,
   Database,
   FileText,
   LayoutGrid,
   ShieldCheck,
   Sparkles,
   Waypoints,
} from "lucide-react";

const flowPanels = [
   {
      icon: FileText,
      title: "Inputs",
      description: "Documents, records, and workflow events.",
      chips: ["Docs", "Data", "Rules"],
   },
   {
      icon: LayoutGrid,
      title: "Product Output",
      description: "Dashboards, automations, and launch-ready software.",
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

const capabilityChips = ["MVP Architecture", "AI Workflows", "Launch-ready"];

function DiagramPanel({
   icon: Icon,
   title,
   description,
   chips,
}: {
   icon: typeof FileText;
   title: string;
   description: string;
   chips: string[];
}) {
   return (
      <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md">
         <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-cyan-300/16 bg-cyan-300/10 text-cyan-100">
               <Icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <div className="min-w-0">
               <p className="text-[15px] font-semibold tracking-[-0.02em] text-white">
                  {title}
               </p>
               <p className="mt-2 text-[13px] leading-6 text-slate-300">
                  {description}
               </p>
            </div>
         </div>

         <div className="mt-4 flex flex-wrap gap-2">
            {chips.map((chip) => (
               <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200">
                  {chip}
               </span>
            ))}
         </div>
      </div>
   );
}

export default function AIHeroIllustration() {
   return (
      <div className="relative w-full min-w-0">
         <div className="absolute left-1/2 top-10 h-32 w-[70%] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[84px]" />

         <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(160deg,rgba(8,26,37,0.92)_0%,rgba(7,21,31,0.98)_100%)] p-4 backdrop-blur-md md:p-5">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:28px_28px] opacity-[0.04]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.12)_0%,rgba(6,18,26,0)_46%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.1)_0%,rgba(11,34,48,0)_32%)]" />

            <div className="relative z-10">
               <div className="flex flex-wrap items-center justify-between gap-3 rounded-[18px] border border-white/10 bg-white/[0.05] px-4 py-3">
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

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100">
                     <Sparkles className="h-3.5 w-3.5" strokeWidth={1.8} />
                     AI workflow preview
                  </span>
               </div>

               <div className="mt-4 hidden rounded-[24px] border border-white/10 bg-[#07151f]/88 p-5 sm:block md:p-6">
                  <div className="relative min-h-[308px]">
                     <div className="absolute left-[29%] top-[44%] h-px w-[13%] bg-gradient-to-r from-cyan-300/15 via-cyan-300/65 to-transparent" />
                     <div className="absolute right-[29%] top-[44%] h-px w-[13%] bg-gradient-to-l from-cyan-300/15 via-cyan-300/65 to-transparent" />

                     <div className="absolute left-0 top-1/2 w-[29%] min-w-0 -translate-y-1/2">
                        <DiagramPanel {...flowPanels[0]} />
                     </div>

                     <div className="absolute left-1/2 top-1/2 z-10 w-[170px] -translate-x-1/2 -translate-y-1/2">
                        <div className="relative rounded-[30px] p-[1px]">
                           <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(160deg,rgba(103,232,249,0.88),rgba(14,116,144,0.18),rgba(103,232,249,0.7))] opacity-70 blur-md" />
                           <div className="relative overflow-hidden rounded-[30px] border border-cyan-300/18 bg-[linear-gradient(180deg,rgba(12,39,58,0.98)_0%,rgba(10,27,41,1)_100%)] px-5 py-6 text-center shadow-[0_20px_54px_rgba(5,12,24,0.28)]">
                              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
                              <BrainCircuit
                                 className="mx-auto h-8 w-8 text-cyan-100"
                                 strokeWidth={1.9}
                              />
                              <p className="mt-3 text-[14px] font-semibold tracking-[-0.02em] text-white">
                                 AI Orchestration
                              </p>
                              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                                 Structuring + AI Logic + Automation
                              </p>
                           </div>
                        </div>
                     </div>

                     <div className="absolute right-0 top-1/2 w-[29%] min-w-0 -translate-y-1/2">
                        <DiagramPanel {...flowPanels[1]} />
                     </div>

                     <div className="absolute inset-x-0 bottom-0 flex flex-wrap justify-center gap-2 px-2">
                        <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200">
                           Data -&gt; Structuring
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200">
                           AI Logic
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200">
                           Product Output
                        </span>
                     </div>
                  </div>
               </div>

               <div className="mt-4 grid gap-3 sm:hidden">
                  <DiagramPanel {...flowPanels[0]} />

                  <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,39,58,0.96)_0%,rgba(10,27,41,1)_100%)] px-5 py-6 text-center">
                     <BrainCircuit
                        className="mx-auto h-8 w-8 text-cyan-100"
                        strokeWidth={1.9}
                     />
                     <p className="mt-3 text-[15px] font-semibold tracking-[-0.02em] text-white">
                        AI Orchestration
                     </p>
                     <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                        Structuring + AI Logic + Automation
                     </p>
                  </div>

                  <DiagramPanel {...flowPanels[1]} />
               </div>

               <div className="mt-4 grid gap-3 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 transition-all duration-300 hover:-translate-y-[2px] hover:bg-white/[0.06]">
                     <div className="flex items-center gap-2 text-cyan-100/80">
                        <Waypoints className="h-4 w-4" strokeWidth={1.8} />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                           System path
                        </span>
                     </div>
                     <p className="mt-3 font-mono text-[11px] uppercase leading-6 tracking-[0.16em] text-white/70">
                        Data -&gt; Structuring -&gt; AI Logic -&gt; Product
                        Output
                     </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                     {supportCards.map((card) => (
                        <div
                           key={card.title}
                           className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-4 transition-all duration-300 hover:-translate-y-[2px] hover:bg-white/[0.08]">
                           <div className="flex items-start gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-cyan-300/16 bg-cyan-300/10 text-cyan-100">
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

               <div className="mt-4 flex flex-wrap gap-2">
                  {capabilityChips.map((chip) => (
                     <span
                        key={chip}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200 transition-all duration-300 hover:-translate-y-[2px] hover:bg-white/[0.09]">
                        {chip}
                     </span>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
