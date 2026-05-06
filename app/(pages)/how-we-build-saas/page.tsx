import BreadCrumb from "@/app/components/common/BreadCrumb";
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
         <BreadCrumb
            pageTitle="How We Build SaaS"
            currentPage="How We Build SaaS"
            to="/how-we-build-saas"
         />
         <StudioPage content={howWeBuildSaaSContent} />
      </>
   );
}
