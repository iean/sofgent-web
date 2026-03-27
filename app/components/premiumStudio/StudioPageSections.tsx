import Button from "@/app/components/common/Button";
import { ArrowRightLeft, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import VisualPlaceholder from "./VisualPlaceholder";
import type {
   AudienceSectionContent,
   CTASectionContent,
   DeliverablesSectionContent,
   EngagementSectionContent,
   HeroContent,
   MidCTASectionContent,
   ProblemSectionContent,
   ProcessSectionContent,
   TransformationSectionContent,
   UseCasesSectionContent,
   WhySofGentSectionContent,
} from "./types";

function IconBadge({ icon: Icon, invert = false }: { icon: LucideIcon; invert?: boolean }) {
   return (
      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
         invert ? "bg-white/10 text-cyan-200" : "bg-brand/10 text-brand"
      }`}>
         <Icon className="h-6 w-6" />
      </div>
   );
}

export function HeroSection({ content }: { content: HeroContent }) {
   return (
      <div className="relative overflow-hidden grid gap-12 rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] md:p-14 lg:grid-cols-[1.1fr_0.9fr] items-center bg-grid-paper">
         <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white to-transparent pointer-events-none" />
         
         <div className="relative z-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-6">
               {content.eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]">
               {content.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl">
               {content.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
               <Button btnText={content.primaryCta.label} href={content.primaryCta.href} variant="primary" />
               <Button
                  btnText={content.secondaryCta.label}
                  href={content.secondaryCta.href}
                  variant="outline"
               />
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
               {content.highlights.map((item) => (
                  <div key={item} className="flex items-center justify-center text-center rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm">
                     {item}
                  </div>
               ))}
            </div>
         </div>

         <div className="relative z-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm h-full flex flex-col justify-center min-h-[400px]">
            <div className="flex flex-wrap gap-2 mb-8">
               {content.badges.map((badge) => (
                  <span key={badge} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-500 shadow-sm">
                     {badge}
                  </span>
               ))}
            </div>
            {content.visual ? (
               <VisualPlaceholder
                  label={content.visual.label}
                  description={content.visual.description}
                  tone={content.visual.tone}
                  className="w-full flex-grow text-sm"
               />
            ) : null}
         </div>
      </div>
   );
}

export function TrustBar({ items }: { items: string[] }) {
   return (
      <div className="grid gap-4 rounded-[2rem] border border-slate-100 bg-slate-50 p-6 md:grid-cols-3 md:p-8">
         {items.map((item) => (
            <div key={item} className="flex items-center justify-center text-center rounded-2xl border border-slate-200 bg-white px-5 py-4 text-xs font-bold uppercase tracking-widest text-slate-500 shadow-sm">
               {item}
            </div>
         ))}
      </div>
   );
}

export function AudienceSection({ content }: { content: AudienceSectionContent }) {
   return (
      <section className="py-24">
         <div className="theme-container">
            <div className="grid gap-16 xl:grid-cols-[1fr_1.2fr] items-start">
               <div className="sticky top-10">
                  <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
                  {content.visual ? (
                     <VisualPlaceholder label={content.visual.label} description={content.visual.description} tone={content.visual.tone} className="mt-10 min-h-[300px]" />
                  ) : null}
               </div>
               <div className="grid gap-6 sm:grid-cols-2">
                  {content.items.map((item) => (
                     <article key={item.title} className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
                        <IconBadge icon={item.icon} />
                        <h3 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">{item.title}</h3>
                        <p className="mt-4 text-slate-600 leading-relaxed">{item.description}</p>
                     </article>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export function ProblemSection({ content }: { content: ProblemSectionContent }) {
   return (
      <section className="py-24 bg-slate-50">
         <div className="theme-container">
            <div className="grid gap-16 xl:grid-cols-[1fr_1.2fr] items-start">
               <div>
                  <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
                  {content.visual ? (
                     <VisualPlaceholder label={content.visual.label} description={content.visual.description} tone={content.visual.tone} className="mt-10 min-h-[300px]" />
                  ) : null}
               </div>
               <div className="grid gap-6 sm:grid-cols-2">
                  {content.items.map((item) => (
                     <article key={item.title} className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <IconBadge icon={item.icon} />
                        <h3 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">{item.title}</h3>
                        <p className="mt-4 text-slate-600 leading-relaxed">{item.description}</p>
                     </article>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export function ProcessSection({ content }: { content: ProcessSectionContent }) {
   return (
      <section id="process" className="py-24 bg-white border-y border-slate-100">
         <div className="theme-container">
            <div className="max-w-3xl">
               <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
            </div>
            {content.visual ? (
               <VisualPlaceholder label={content.visual.label} description={content.visual.description} tone={content.visual.tone} className="mt-12 min-h-[300px]" />
            ) : null}
            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
               {content.steps.map((step) => (
                  <article key={step.title} className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:border-brand/20 hover:shadow-lg">
                     <div className="flex items-center justify-between gap-4 mb-8">
                        <IconBadge icon={step.icon} />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{step.step}</span>
                     </div>
                     <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">{step.title}</h3>
                     <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}

export function DeliverablesSection({ content }: { content: DeliverablesSectionContent }) {
   return (
      <section className="py-24">
         <div className="theme-container">
            <div className="grid gap-16 xl:grid-cols-[1fr_1.2fr]">
               <div>
                  <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
                  {content.visual ? (
                     <VisualPlaceholder label={content.visual.label} description={content.visual.description} tone={content.visual.tone} className="mt-10 min-h-[350px]" />
                  ) : null}
               </div>
               <div className="grid gap-6 sm:grid-cols-2">
                  {content.items.map((item) => (
                     <article key={item.title} className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-lg">
                        <IconBadge icon={item.icon} />
                        <h3 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 mb-4">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                     </article>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export function TransformationSection({ content }: { content: TransformationSectionContent }) {
   return (
      <section className="py-24 bg-slate-50 border-y border-slate-100">
         <div className="theme-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
               <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} align="center" />
            </div>
            {content.visual ? (
               <VisualPlaceholder label={content.visual.label} description={content.visual.description} tone={content.visual.tone} className="mx-auto mt-10 max-w-5xl min-h-[300px]" />
            ) : null}
            <div className="mt-16 grid gap-8 xl:grid-cols-[1fr_auto_1fr] items-center max-w-5xl mx-auto">
               <div className="rounded-[2.5rem] border border-rose-100 bg-white p-10 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:scale-150" />
                  <p className="relative z-10 text-xs font-bold uppercase tracking-widest text-rose-500 mb-6">Before</p>
                  <h3 className="relative z-10 text-3xl font-bold tracking-tight text-slate-900 mb-8">{content.before.title}</h3>
                  <div className="relative z-10 space-y-5">
                     {content.before.points.map((point) => (
                        <div key={point} className="flex items-start gap-4">
                           <span className="flex shrink-0 w-6 h-6 items-center justify-center rounded-full bg-rose-100 text-rose-600 text-lg leading-none">-</span>
                           <p className="text-slate-700 leading-snug">{point}</p>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="hidden xl:flex justify-center -mx-4 z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xl text-brand">
                     <ArrowRightLeft className="w-6 h-6" />
                  </div>
               </div>

               <div className="rounded-[2.5rem] border border-emerald-100 bg-white p-10 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:scale-150" />
                  <p className="relative z-10 text-xs font-bold uppercase tracking-widest text-emerald-500 mb-6">After</p>
                  <h3 className="relative z-10 text-3xl font-bold tracking-tight text-slate-900 mb-8">{content.after.title}</h3>
                  <div className="relative z-10 space-y-5">
                     {content.after.points.map((point) => (
                        <div key={point} className="flex items-start gap-4">
                           <span className="flex shrink-0 w-6 h-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-lg leading-none">+</span>
                           <p className="text-slate-700 leading-snug">{point}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export function UseCasesSection({ content }: { content: UseCasesSectionContent }) {
   return (
      <section className="py-24">
         <div className="theme-container">
            <div className="grid gap-16 xl:grid-cols-[1fr_1.2fr]">
               <div>
                  <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
                  {content.visual ? (
                     <VisualPlaceholder label={content.visual.label} description={content.visual.description} tone={content.visual.tone} className="mt-10 min-h-[300px]" />
                  ) : null}
               </div>
               <div className="grid gap-6 sm:grid-cols-2">
                  {content.items.map((item) => (
                     <article key={item.title} className="flex flex-col rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <IconBadge icon={item.icon} />
                        <h3 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 mb-4">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{item.description}</p>
                        <div className="mt-auto rounded-2xl bg-slate-50 p-5">
                           <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Business Impact</p>
                           <p className="text-sm font-medium text-slate-700">{item.outcome}</p>
                        </div>
                     </article>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export function WhySofGentSection({ content }: { content: WhySofGentSectionContent }) {
   return (
      <section className="py-24 bg-white">
         <div className="theme-container">
            <div className="rounded-[3rem] border border-slate-800 bg-slate-900 p-10 md:p-16 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
               <div className="relative z-10 grid gap-16 xl:grid-cols-[0.9fr_1.1fr]">
                  <div>
                     <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} invert />
                     {content.visual ? (
                        <VisualPlaceholder label={content.visual.label} description={content.visual.description} tone="dark" className="mt-10 min-h-[300px]" />
                     ) : null}
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                     {content.items.map((item) => (
                        <article key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                           <IconBadge icon={item.icon} invert />
                           <h3 className="mt-8 text-xl font-bold tracking-tight text-white mb-4">{item.title}</h3>
                           <p className="text-slate-300 leading-relaxed">{item.description}</p>
                        </article>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export function MidCTASection({ content }: { content: MidCTASectionContent }) {
   return (
      <section className="py-24">
         <div className="theme-container">
            <div className="grid gap-12 rounded-[3.5rem] border border-brand/20 bg-brand/5 p-10 md:p-16 shadow-sm xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
               <div className="max-w-3xl">
                  <p className="text-brand font-semibold uppercase tracking-widest mb-4">{content.eyebrow}</p>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">{content.title}</h2>
                  <p className="text-lg text-slate-600 mb-10">{content.description}</p>
                  <div className="flex flex-wrap items-center gap-4">
                     <Button btnText={content.primaryCta.label} href={content.primaryCta.href} variant="primary" />
                     <Button btnText={content.secondaryCta.label} href={content.secondaryCta.href} variant="outline" />
                  </div>
               </div>
               {content.visual ? (
                  <VisualPlaceholder label={content.visual.label} description={content.visual.description} tone={content.visual.tone} className="min-h-[300px]" />
               ) : null}
            </div>
         </div>
      </section>
   );
}

export function EngagementModelSection({ content }: { content: EngagementSectionContent }) {
   return (
      <section id="engagement" className="py-24 bg-slate-50">
         <div className="theme-container">
            <div className="max-w-3xl">
               <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
            </div>
            {content.visual ? (
               <VisualPlaceholder label={content.visual.label} description={content.visual.description} tone={content.visual.tone} className="mt-12 min-h-[320px]" />
            ) : null}
            <div className="mt-16 grid gap-6 md:grid-cols-3">
               {content.phases.map((phase) => (
                  <article key={phase.title} className="rounded-[2.5rem] border border-slate-100 bg-white p-8 md:p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                     <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">{phase.window}</p>
                     <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">{phase.title}</h3>
                     <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}

export function CTASection({ content }: { content: CTASectionContent }) {
   return (
      <section className="py-24">
         <div className="theme-container">
            <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 px-8 py-20 md:px-20 md:py-24 shadow-2xl grid gap-12 xl:grid-cols-[1fr_0.8fr] xl:items-center">
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(50,109,109,0.3),transparent_50%)]" />
               <div className="relative z-10 max-w-2xl">
                  <p className="text-cyan-200 font-semibold uppercase tracking-widest mb-4">{content.eyebrow}</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">{content.title}</h2>
                  <p className="text-xl text-slate-300 mb-10">{content.description}</p>
                  <div className="flex flex-wrap items-center gap-4 mb-10">
                     <Button btnText={content.primaryCta.label} href={content.primaryCta.href} variant="primary" />
                     <Button btnText={content.secondaryCta.label} href={content.secondaryCta.href} variant="outline" className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white" />
                  </div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-2.5 text-sm font-bold text-cyan-200 backdrop-blur-md">
                     <ClockBadge />
                     {content.urgency}
                  </div>
               </div>
               {content.visual ? (
                  <VisualPlaceholder label={content.visual.label} description={content.visual.description} tone="dark" className="min-h-[350px] relative z-10" />
               ) : null}
            </div>
         </div>
      </section>
   );
}

function ClockBadge() {
   return <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-200" />;
}
