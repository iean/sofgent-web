import BreadCrumb from "@/app/components/common/BreadCrumb";
import AiProductStudioPage from "@/app/components/aiProductStudio";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/ai-product-studio");
}

export default function AIProductStudioPageRoute() {
   return (
      <section>
         <BreadCrumb
            pageTitle="AI Product Studio"
            currentPage="AI Product Studio"
            to="/ai-product-studio"
         />
         <AiProductStudioPage />
      </section>
   );
}
