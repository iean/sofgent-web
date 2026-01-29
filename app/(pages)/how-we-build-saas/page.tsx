import BreadCrumb from "@/app/components/common/BreadCrumb";
import HowWeBuildSaaS from "@/app/components/howWeBuildSaaS";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return getPageMeta("/how-we-build-saas");
}

export default function HowWeBuildSaaSPage() {
  return (
    <div>
      <BreadCrumb pageTitle="How We Build SaaS" currentPage="How We Build SaaS" to="/" />
      <HowWeBuildSaaS />
    </div>
  );
}
