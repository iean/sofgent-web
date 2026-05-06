import { homeConversionContent } from "@/app/content/home-conversion";
import { getSiteOriginFromEnv } from "@/lib/runtime/deployment";

export default function HomeStructuredData() {
  const siteOrigin = getSiteOriginFromEnv();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SofGent",
    url: siteOrigin,
    description:
      "SofGent builds AI-powered SaaS products, automation systems, and internal business tools fast.",
    areaServed: "Global",
    serviceType: homeConversionContent.capabilities.map((item) => item.title),
    knowsAbout: [
      "AI implementation",
      "SaaS MVP development",
      "workflow automation",
      "enterprise software architecture",
      "document intelligence systems",
      "system integrations",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
