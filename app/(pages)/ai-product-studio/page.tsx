import BreadCrumb from "@/app/components/common/BreadCrumb";
import StudioPage from "@/app/components/premiumStudio/StudioPage";
import { aiProductStudioContent } from "@/app/components/premiumStudio/content";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/ai-product-studio");
}

export default function AIProductStudio() {
   return (
      <>
         <BreadCrumb
            pageTitle="AI Product Studio"
            currentPage="AI Product Studio"
            to="/ai-product-studio"
         />
         <StudioPage content={aiProductStudioContent} />
      </>
   );
}
