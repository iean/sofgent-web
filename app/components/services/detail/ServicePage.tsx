import ServiceApproach from "./ServiceApproach";
import ServiceCTA from "./ServiceCTA";
import ServiceDeliverables from "./ServiceDeliverables";
import ServiceFAQ from "./ServiceFAQ";
import ServiceHero from "./ServiceHero";
import ServicePricing from "./ServicePricing";
import ServiceProblem from "./ServiceProblem";
import ServiceTechStack from "./ServiceTechStack";
import ServiceTrustBar from "./ServiceTrustBar";
import ServiceUseCases from "./ServiceUseCases";
import ServiceWhyChooseUs from "./ServiceWhyChooseUs";
import StickyServiceCta from "./StickyServiceCta";
import type { ServiceView } from "@/lib/sanity/content";

export default function ServicePage({ service }: { service: ServiceView }) {
   return (
      <>
         <ServiceHero service={service} />
         <ServiceTrustBar service={service} />
         <ServiceProblem service={service} />
         <ServiceApproach service={service} />
         <ServiceDeliverables service={service} />
         <ServiceUseCases service={service} />
         <ServiceTechStack service={service} />
         <ServiceWhyChooseUs service={service} />
         <ServicePricing service={service} />
         <ServiceFAQ service={service} />
         <ServiceCTA service={service} />
         <StickyServiceCta />
      </>
   );
}
