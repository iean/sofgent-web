import PageIntro from "@/app/components/common/PageIntro";
import StudioPage from "@/app/components/premiumStudio/StudioPage";
import { howWeBuildSaaSContent } from "@/app/components/premiumStudio/content";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/how-we-build-saas");
}

export default function HowWeBuildSaaSPage() {
   return (
      <>
         <PageIntro
            eyebrow="SaaS Delivery Process"
            title="How SofGent Builds SaaS Products That Can Actually Launch"
            description="A founder-facing breakdown of how product scoping, architecture, software development, release preparation, and production launch work inside a disciplined SaaS engagement."
            currentPage="How We Build SaaS"
            currentPath="/how-we-build-saas"
            compact
         />
         <StudioPage content={howWeBuildSaaSContent} />
      </>
   );
}
