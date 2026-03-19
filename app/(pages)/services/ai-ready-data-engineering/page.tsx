import CTASection from "@/app/components/services/aiReadyDataEngineering/CTASection";
import DeliverablesSection from "@/app/components/services/aiReadyDataEngineering/DeliverablesSection";
import HeroSection from "@/app/components/services/aiReadyDataEngineering/HeroSection";
import ProblemSection from "@/app/components/services/aiReadyDataEngineering/ProblemSection";
import ProcessSection from "@/app/components/services/aiReadyDataEngineering/ProcessSection";
import UseCasesSection from "@/app/components/services/aiReadyDataEngineering/UseCasesSection";
import WhySofGentSection from "@/app/components/services/aiReadyDataEngineering/WhySofGentSection";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/services/ai-ready-data-engineering");
}

export default function AIReadyDataEngineeringPage() {
   return (
      <main>
         <HeroSection />
         <ProblemSection />
         <ProcessSection />
         <DeliverablesSection />
         <UseCasesSection />
         <WhySofGentSection />
         <CTASection />
      </main>
   );
}
