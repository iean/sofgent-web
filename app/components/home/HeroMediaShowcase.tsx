import {
   ArrowUpRight,
   ChevronLeft,
   ChevronRight,
   CirclePlay,
   PanelsTopLeft,
   SlidersHorizontal,
   Sparkles,
} from "lucide-react";

const mediaModes = [
   { label: "Preview", icon: PanelsTopLeft },
   { label: "Animation", icon: Sparkles },
   { label: "YouTube Video", icon: CirclePlay },
   { label: "Slider", icon: SlidersHorizontal },
];

export default function HeroMediaShowcase() {
   return (
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(234,240,245,0.98)_0%,rgba(220,230,237,0.94)_100%)] p-4 shadow-[0_24px_54px_rgba(7,19,29,0.14)] md:p-5">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,141,163,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(17,50,74,0.12),transparent_34%)]" />

         <div className="relative z-10">
            <div className="flex items-start justify-between gap-4">
               <div className="max-w-[26rem]">
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-600 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                     <PanelsTopLeft className="h-3.5 w-3.5 text-brand" strokeWidth={1.8} />
                     Media Showcase
                  </span>
                  <p className="mt-3 max-w-[28rem] text-[15px] leading-7 text-slate-600">
                     Use this slot for a polished product teaser: preview frames,
                     animation, YouTube demo, or an interactive slider before the
                     systems view below.
                  </p>
               </div>

               <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-[#ff9f71] text-slate-950 shadow-[0_20px_44px_rgba(255,159,113,0.22)] sm:flex">
                  <ArrowUpRight className="h-7 w-7" strokeWidth={2.2} />
               </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
               {mediaModes.map((item) => (
                  <span
                     key={item.label}
                     className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/75 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                     <item.icon className="h-3.5 w-3.5 text-brand" strokeWidth={1.8} />
                     {item.label}
                  </span>
               ))}
            </div>

            <div className="relative mt-4 overflow-hidden rounded-[28px] bg-[#111315] p-4 sm:p-5">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,159,113,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(103,232,249,0.12),transparent_34%)]" />
               <div className="absolute right-[-2.25rem] top-8 h-40 w-40 rounded-full border border-white/10" />
               <div className="absolute bottom-[-1.75rem] left-8 h-28 w-28 rounded-full border border-white/10" />
               <div className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#ff9f71] text-slate-950 shadow-[0_16px_36px_rgba(255,159,113,0.22)] sm:hidden">
                  <ArrowUpRight className="h-6 w-6" strokeWidth={2.2} />
               </div>

               <div className="relative min-h-[252px]">
                  <div className="max-w-[14rem] rounded-[22px] border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-sm">
                     <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
                        Preview
                     </p>
                     <p className="mt-2 text-[13px] leading-6 text-white/65">
                        [Product preview placeholder]
                     </p>
                  </div>

                  <div className="absolute inset-x-6 top-16 rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),rgba(255,255,255,0.02)_55%,rgba(255,255,255,0.01)_100%)] px-6 py-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:inset-x-10 sm:top-12 sm:px-8 sm:py-12">
                     <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
                        <CirclePlay className="ml-0.5 h-7 w-7" strokeWidth={1.9} />
                     </div>
                     <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#ffb08a]">
                        Animation + YouTube
                     </p>
                     <p className="mt-3 text-[14px] leading-7 text-white/72 sm:text-[15px]">
                        [Video / animation showcase placeholder]
                     </p>
                  </div>

                  <div className="absolute left-4 top-[8.85rem] rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/82 backdrop-blur-sm sm:left-8 sm:top-[10rem]">
                     Animation
                  </div>
                  <div className="absolute right-4 top-[8.85rem] rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/82 backdrop-blur-sm sm:right-8 sm:top-[10rem]">
                     YouTube Video
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                     <div className="max-w-[16rem] rounded-[20px] border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-sm">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
                           Slider
                        </p>
                        <p className="mt-2 text-[13px] leading-6 text-white/65">
                           [Interactive slider placeholder]
                        </p>
                     </div>

                     <div className="flex items-center justify-between gap-4 rounded-[20px] border border-white/10 bg-white/[0.94] px-4 py-3 text-slate-900 shadow-[0_18px_36px_rgba(0,0,0,0.12)] sm:min-w-[18rem]">
                        <div>
                           <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                              Slider Control
                           </p>
                           <p className="mt-1 text-[14px] font-medium text-slate-800">
                              Preview frame 01 / 04
                           </p>
                        </div>
                        <div className="flex items-center gap-2">
                           <button
                              type="button"
                              aria-label="Previous preview"
                              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 transition-all duration-300 hover:-translate-y-[1px] hover:border-slate-300">
                              <ChevronLeft className="h-4 w-4" strokeWidth={2} />
                           </button>
                           <button
                              type="button"
                              aria-label="Next preview"
                              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-900 bg-slate-950 text-white transition-all duration-300 hover:-translate-y-[1px] hover:bg-slate-800">
                              <ChevronRight className="h-4 w-4" strokeWidth={2} />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
