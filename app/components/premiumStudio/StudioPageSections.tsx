import Button from "@/app/components/common/Button";
import {
   ArrowRightLeft,
   CheckCircle2,
} from "lucide-react";
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

function IconBadge({
   icon: Icon,
   invert = false,
}: {
   icon: LucideIcon;
   invert?: boolean;
}) {
   return (
      <div
         className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
            invert
               ? "border-white/10 bg-white/5 text-cyan-200"
               : "border-slate-200 bg-[#eef5f3] text-brand"
         }`}>
         <Icon className="h-5 w-5" />
      </div>
   );
}

export function HeroSection({ content }: { content: HeroContent }) {
   return (
      <div className="grid gap-8 rounded-[36px] border border-slate-200 bg-white p-7 shadow-[0_28px_80px_rgba(15,23,42,0.08)] md:p-10 xl:grid-cols-[0.95fr_1.05fr]">
         <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
               {content.eyebrow}
            </p>
            <h1 className="mt-5 text-[42px] font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950 md:text-[68px]">
               {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[19px] leading-8 text-slate-600">
               {content.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
               <Button
                  btnText={content.primaryCta.label}
                  href={content.primaryCta.href}
               />
               <Button
                  btnText={content.secondaryCta.label}
                  href={content.secondaryCta.href}
                  className="border border-slate-200 bg-white text-slate-900 shadow-none hover:bg-slate-50"
               />
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
               {content.highlights.map((item) => (
                  <div
                     key={item}
                     className="rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-5 text-[15px] font-medium leading-7 text-slate-700">
                     {item}
                  </div>
               ))}
            </div>
         </div>

         <div className="rounded-[34px] border border-slate-200 bg-[linear-gradient(180deg,#f7fbff_0%,#edf3f8_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] md:p-8">
            <div className="flex flex-wrap gap-3">
               {content.badges.map((badge) => (
                  <span
                     key={badge}
                     className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                     {badge}
                  </span>
               ))}
            </div>
            {content.visual ? (
               <VisualPlaceholder
                  label={content.visual.label}
                  description={content.visual.description}
                  tone={content.visual.tone}
                  className="mt-6 flex min-h-[320px] flex-col justify-center"
               />
            ) : null}
         </div>
      </div>
   );
}

export function TrustBar({ items }: { items: string[] }) {
   return (
      <div className="grid gap-4 rounded-[30px] border border-slate-200 bg-white/90 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:grid-cols-3 md:p-5">
         {items.map((item) => (
            <div
               key={item}
               className="rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
               {item}
            </div>
         ))}
      </div>
   );
}

export function AudienceSection({
   content,
}: {
   content: AudienceSectionContent;
}) {
   return (
      <section className="py-20 md:py-24">
         <div className="mx-auto theme-container">
            <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
               <div>
                  <SectionHeading
                     eyebrow={content.eyebrow}
                     title={content.title}
                     description={content.description}
                  />
                  {content.visual ? (
                     <VisualPlaceholder
                        label={content.visual.label}
                        description={content.visual.description}
                        tone={content.visual.tone}
                        className="mt-8 min-h-[250px]"
                     />
                  ) : null}
               </div>
               <div className="grid gap-5 md:grid-cols-2">
                  {content.items.map((item) => {
                     const Icon = item.icon;

                     return (
                        <article
                           key={item.title}
                           className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                           <IconBadge icon={Icon} />
                           <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.03em] text-slate-950">
                              {item.title}
                           </h3>
                           <p className="mt-4 text-[16px] leading-7 text-slate-600">
                              {item.description}
                           </p>
                        </article>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
}

export function ProblemSection({ content }: { content: ProblemSectionContent }) {
   return (
      <section className="py-20 md:py-24">
         <div className="mx-auto theme-container">
            <div className="grid gap-10 xl:grid-cols-[0.96fr_1.04fr]">
               <div>
                  <SectionHeading
                     eyebrow={content.eyebrow}
                     title={content.title}
                     description={content.description}
                  />
                  {content.visual ? (
                     <VisualPlaceholder
                        label={content.visual.label}
                        description={content.visual.description}
                        tone={content.visual.tone}
                        className="mt-8 min-h-[260px]"
                     />
                  ) : null}
               </div>

               <div className="grid gap-5 md:grid-cols-2">
                  {content.items.map((item) => {
                     const Icon = item.icon;

                     return (
                        <article
                           key={item.title}
                           className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
                           <IconBadge icon={Icon} />
                           <h3 className="mt-5 text-[24px] font-semibold leading-[1.18] tracking-[-0.04em] text-slate-950">
                              {item.title}
                           </h3>
                           <p className="mt-4 text-[16px] leading-7 text-slate-600">
                              {item.description}
                           </p>
                        </article>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
}

export function ProcessSection({ content }: { content: ProcessSectionContent }) {
   return (
      <section
         id="process"
         className="border-y border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.75)_0%,rgba(243,248,252,0.95)_100%)] py-20 md:py-24">
         <div className="mx-auto theme-container">
            <SectionHeading
               eyebrow={content.eyebrow}
               title={content.title}
               description={content.description}
            />
            {content.visual ? (
               <VisualPlaceholder
                  label={content.visual.label}
                  description={content.visual.description}
                  tone={content.visual.tone}
                  className="mt-10"
               />
            ) : null}
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
               {content.steps.map((step) => {
                  const Icon = step.icon;

                  return (
                     <article
                        key={step.title}
                        className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                        <div className="flex items-center justify-between gap-4">
                           <IconBadge icon={Icon} />
                           <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                              {step.step}
                           </span>
                        </div>
                        <h3 className="mt-5 text-[24px] font-semibold leading-[1.15] tracking-[-0.04em] text-slate-950">
                           {step.title}
                        </h3>
                        <p className="mt-4 text-[16px] leading-7 text-slate-600">
                           {step.description}
                        </p>
                     </article>
                  );
               })}
            </div>
         </div>
      </section>
   );
}

export function DeliverablesSection({
   content,
}: {
   content: DeliverablesSectionContent;
}) {
   return (
      <section className="py-20 md:py-24">
         <div className="mx-auto theme-container">
            <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
               <div>
                  <SectionHeading
                     eyebrow={content.eyebrow}
                     title={content.title}
                     description={content.description}
                  />
                  {content.visual ? (
                     <VisualPlaceholder
                        label={content.visual.label}
                        description={content.visual.description}
                        tone={content.visual.tone}
                        className="mt-8 min-h-[280px]"
                     />
                  ) : null}
               </div>
               <div className="grid gap-5 md:grid-cols-2">
                  {content.items.map((item) => {
                     const Icon = item.icon;

                     return (
                        <article
                           key={item.title}
                           className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
                           <IconBadge icon={Icon} />
                           <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.03em] text-slate-950">
                              {item.title}
                           </h3>
                           <p className="mt-4 text-[16px] leading-7 text-slate-600">
                              {item.description}
                           </p>
                        </article>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
}

export function TransformationSection({
   content,
}: {
   content: TransformationSectionContent;
}) {
   return (
      <section className="py-20 md:py-24">
         <div className="mx-auto theme-container">
            <SectionHeading
               eyebrow={content.eyebrow}
               title={content.title}
               description={content.description}
               align="center"
            />
            {content.visual ? (
               <VisualPlaceholder
                  label={content.visual.label}
                  description={content.visual.description}
                  tone={content.visual.tone}
                  className="mx-auto mt-10 max-w-5xl"
               />
            ) : null}
            <div className="mt-10 grid gap-6 xl:grid-cols-[1fr_auto_1fr] xl:items-center">
               <div className="rounded-[32px] border border-rose-100 bg-[linear-gradient(180deg,#fff7f7_0%,#fffdfd_100%)] p-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-rose-400">
                     Before
                  </p>
                  <h3 className="mt-4 text-[28px] font-semibold tracking-[-0.04em] text-slate-950">
                     {content.before.title}
                  </h3>
                  <div className="mt-6 space-y-4">
                     {content.before.points.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                           <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                              -
                           </span>
                           <p className="text-[16px] leading-7 text-slate-700">{point}</p>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="hidden xl:flex">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                     <ArrowRightLeft className="h-6 w-6 text-brand" />
                  </div>
               </div>

               <div className="rounded-[32px] border border-emerald-100 bg-[linear-gradient(180deg,#f4fdfa_0%,#fcfefd_100%)] p-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-500">
                     After
                  </p>
                  <h3 className="mt-4 text-[28px] font-semibold tracking-[-0.04em] text-slate-950">
                     {content.after.title}
                  </h3>
                  <div className="mt-6 space-y-4">
                     {content.after.points.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                           <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                              +
                           </span>
                           <p className="text-[16px] leading-7 text-slate-700">{point}</p>
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
      <section className="border-y border-slate-200/70 bg-[linear-gradient(180deg,rgba(247,250,252,0.9)_0%,rgba(239,245,249,0.95)_100%)] py-20 md:py-24">
         <div className="mx-auto theme-container">
            <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
               <div>
                  <SectionHeading
                     eyebrow={content.eyebrow}
                     title={content.title}
                     description={content.description}
                  />
                  {content.visual ? (
                     <VisualPlaceholder
                        label={content.visual.label}
                        description={content.visual.description}
                        tone={content.visual.tone}
                        className="mt-8 min-h-[260px]"
                     />
                  ) : null}
               </div>
               <div className="grid gap-5 md:grid-cols-2">
                  {content.items.map((item) => {
                     const Icon = item.icon;

                     return (
                        <article
                           key={item.title}
                           className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                           <IconBadge icon={Icon} />
                           <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.03em] text-slate-950">
                              {item.title}
                           </h3>
                           <p className="mt-4 text-[16px] leading-7 text-slate-600">
                              {item.description}
                           </p>
                           <div className="mt-5 rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-4">
                              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                                 Business Impact
                              </p>
                              <p className="mt-2 text-[15px] leading-7 text-slate-700">
                                 {item.outcome}
                              </p>
                           </div>
                        </article>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
}

export function WhySofGentSection({
   content,
}: {
   content: WhySofGentSectionContent;
}) {
   return (
      <section className="py-20 md:py-24">
         <div className="mx-auto theme-container">
            <div className="rounded-[36px] border border-slate-900/80 bg-[#08111f] p-7 shadow-[0_32px_100px_rgba(8,17,31,0.18)] md:p-10">
               <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr]">
                  <div>
                     <SectionHeading
                        eyebrow={content.eyebrow}
                        title={content.title}
                        description={content.description}
                        invert
                     />
                     {content.visual ? (
                        <VisualPlaceholder
                           label={content.visual.label}
                           description={content.visual.description}
                           tone="dark"
                           className="mt-8 min-h-[240px]"
                        />
                     ) : null}
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                     {content.items.map((item) => {
                        const Icon = item.icon;

                        return (
                           <article
                              key={item.title}
                              className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                              <IconBadge icon={Icon} invert />
                              <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.03em] text-white">
                                 {item.title}
                              </h3>
                              <p className="mt-4 text-[16px] leading-7 text-slate-300">
                                 {item.description}
                              </p>
                           </article>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export function MidCTASection({
   content,
}: {
   content: MidCTASectionContent;
}) {
   return (
      <section className="pb-20 md:pb-24">
         <div className="mx-auto theme-container">
            <div className="grid gap-8 rounded-[34px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-9 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
               <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
                     {content.eyebrow}
                  </p>
                  <h2 className="mt-4 text-34 font-semibold tracking-[-0.04em] text-slate-950 md:text-48">
                     {content.title}
                  </h2>
                  <p className="mt-5 text-[17px] leading-8 text-slate-600">
                     {content.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                     <Button
                        btnText={content.primaryCta.label}
                        href={content.primaryCta.href}
                     />
                     <Button
                        btnText={content.secondaryCta.label}
                        href={content.secondaryCta.href}
                        className="border border-slate-200 bg-white text-slate-900 shadow-none hover:bg-slate-50"
                     />
                  </div>
               </div>

               {content.visual ? (
                  <VisualPlaceholder
                     label={content.visual.label}
                     description={content.visual.description}
                     tone={content.visual.tone}
                     className="min-h-[240px]"
                  />
               ) : null}
            </div>
         </div>
      </section>
   );
}

export function EngagementModelSection({
   content,
}: {
   content: EngagementSectionContent;
}) {
   return (
      <section id="engagement" className="py-20 md:py-24">
         <div className="mx-auto theme-container">
            <SectionHeading
               eyebrow={content.eyebrow}
               title={content.title}
               description={content.description}
            />
            {content.visual ? (
               <VisualPlaceholder
                  label={content.visual.label}
                  description={content.visual.description}
                  tone={content.visual.tone}
                  className="mt-10"
               />
            ) : null}
            <div className="mt-10 grid gap-5 md:grid-cols-3">
               {content.phases.map((phase) => (
                  <article
                     key={phase.title}
                     className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                     <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                        {phase.window}
                     </p>
                     <h3 className="mt-4 text-[26px] font-semibold tracking-[-0.04em] text-slate-950">
                        {phase.title}
                     </h3>
                     <p className="mt-4 text-[16px] leading-7 text-slate-600">
                        {phase.description}
                     </p>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}

export function CTASection({ content }: { content: CTASectionContent }) {
   return (
      <section className="pb-20 md:pb-24">
         <div className="mx-auto theme-container">
            <div className="grid gap-8 rounded-[36px] border border-slate-900/80 bg-[linear-gradient(135deg,#08111f_0%,#163042_100%)] px-7 py-10 text-white shadow-[0_30px_100px_rgba(8,17,31,0.18)] md:px-10 md:py-12 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
               <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                     {content.eyebrow}
                  </p>
                  <h2 className="mt-4 text-34 font-semibold tracking-[-0.04em] md:text-48">
                     {content.title}
                  </h2>
                  <p className="mt-5 text-[18px] leading-8 text-slate-200">
                     {content.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                     <Button
                        btnText={content.primaryCta.label}
                        href={content.primaryCta.href}
                     />
                     <Button
                        btnText={content.secondaryCta.label}
                        href={content.secondaryCta.href}
                        className="border border-white/15 bg-white/5 text-white shadow-none hover:bg-white/10"
                     />
                  </div>
                  <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-white/5 px-5 py-3 text-sm font-medium text-cyan-100">
                     <ClockBadge />
                     {content.urgency}
                  </div>
               </div>

               {content.visual ? (
                  <VisualPlaceholder
                     label={content.visual.label}
                     description={content.visual.description}
                     tone="dark"
                     className="min-h-[250px]"
                  />
               ) : null}
            </div>
         </div>
      </section>
   );
}

function ClockBadge() {
   return <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-200" />;
}
