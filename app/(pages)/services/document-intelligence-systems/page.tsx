import CTASection from "@/app/components/services/documentIntelligenceSystems/CTASection";
import DeliverablesSection from "@/app/components/services/documentIntelligenceSystems/DeliverablesSection";
import FeaturesSection from "@/app/components/services/documentIntelligenceSystems/FeaturesSection";
import HeroSection from "@/app/components/services/documentIntelligenceSystems/HeroSection";
import ProblemSection from "@/app/components/services/documentIntelligenceSystems/ProblemSection";
import PipelineSection from "@/app/components/services/documentIntelligenceSystems/PipelineSection";
import UseCasesSection from "@/app/components/services/documentIntelligenceSystems/UseCasesSection";
import WhySofGentSection from "@/app/components/services/documentIntelligenceSystems/WhySofGentSection";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/services/document-intelligence-systems");
}

export default function DocumentIntelligenceSystemsPage() {
   return (
      <main>
         <HeroSection />
         <ProblemSection />
         <PipelineSection />
         <FeaturesSection />
         <DeliverablesSection />
         <UseCasesSection />
         <WhySofGentSection />
         <CTASection />
      </main>
   );
}
