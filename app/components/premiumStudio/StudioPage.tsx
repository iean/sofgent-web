import {
   AudienceSection,
   CTASection,
   DeliverablesSection,
   EngagementModelSection,
   HeroSection,
   MidCTASection,
   ProblemSection,
   ProcessSection,
   TransformationSection,
   TrustBar,
   UseCasesSection,
   WhySofGentSection,
} from "./StudioPageSections";
import type { StudioPageContent } from "./types";

export default function StudioPage({
   content,
}: {
   content: StudioPageContent;
}) {
   return (
      <div className="min-h-screen bg-white">
         <section className="pt-16 md:pt-20">
            <div className="mx-auto space-y-6 theme-container md:space-y-8">
               <HeroSection content={content.hero} />
               <TrustBar items={content.trustBar} />
            </div>
         </section>
         <AudienceSection content={content.audience} />
         <ProblemSection content={content.problem} />
         <ProcessSection content={content.process} />
         <DeliverablesSection content={content.deliverables} />
         <TransformationSection content={content.transformation} />
         <UseCasesSection content={content.useCases} />
         <WhySofGentSection content={content.whySofGent} />
         <MidCTASection content={content.midCta} />
         <EngagementModelSection content={content.engagement} />
         <CTASection content={content.cta} />
      </div>
   );
}
