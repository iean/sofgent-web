import { getSiteOriginFromEnv } from "@/lib/runtime/deployment";

const SERVICE_TYPES = [
  "SaaS MVP development",
  "AI implementation",
  "Workflow automation",
  "AI document systems",
  "AI-ready data engineering",
  "Custom business systems",
];

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
    serviceType: SERVICE_TYPES,
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
