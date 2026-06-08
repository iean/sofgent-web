import { CONTACT_TO_EMAIL } from "@/lib/constants";
import { getSiteOriginFromEnv } from "@/lib/runtime/deployment";

const SAME_AS = [
  "https://www.facebook.com/people/Sofgent/61564357926545/",
  "https://www.linkedin.com/company/sofgent/",
];

export default function GlobalStructuredData() {
  const siteOrigin = getSiteOriginFromEnv();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteOrigin}/#organization`,
        name: "SofGent",
        url: siteOrigin,
        logo: `${siteOrigin}/og/default.png`,
        email: CONTACT_TO_EMAIL,
        telephone: "+8801537740365",
        sameAs: SAME_AS,
        description:
          "SofGent is an AI product studio that builds AI-powered SaaS products, workflow automation systems, and internal business software for growing teams.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteOrigin}/#website`,
        url: siteOrigin,
        name: "SofGent",
        publisher: {
          "@id": `${siteOrigin}/#organization`,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
