import "./globals.css";
import { inter } from "./fonts/fonts";
import Script from "next/script";
import type { Metadata } from "next";
import CookieConsent from "./components/common/CookieConsent";

const SITE_URL = "https://www.sofgent.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SofGent — AI Product Studio",
    template: "%s | SofGent",
  },
  description:
    "SofGent is an AI product studio. We scope, build, and ship production-grade AI products — document automation, AI SaaS MVPs, and AI integrations — in weeks, not months.",
  openGraph: {
    type: "website",
    siteName: "SofGent",
    url: SITE_URL,
    title: "SofGent — AI Product Studio",
    description:
      "Production-grade AI products — document automation, AI SaaS MVPs, and AI integrations — scoped, built, and shipped in weeks.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SofGent — AI Product Studio",
    description:
      "Production-grade AI products — document automation, AI SaaS MVPs, and AI integrations — scoped, built, and shipped in weeks.",
  },
  robots: { index: true, follow: true },
};

const ORG_ID = `${SITE_URL}/#organization`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "SofGent",
      url: SITE_URL,
      logo: `${SITE_URL}/images/sofgent-logo.svg`,
      description:
        "AI product studio building production-grade AI products — document automation, AI SaaS MVPs, and AI integrations.",
      email: "support@sofgent.com",
      sameAs: [] as string[],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "SofGent",
      description:
        "AI product studio shipping production-grade AI products — document automation, AI SaaS MVPs, and AI integrations — in weeks.",
      publisher: { "@id": ORG_ID },
      inLanguage: "en",
    },
    ...[
      {
        name: "AI Product & MVP Development",
        description:
          "From scoped idea to deployed AI SaaS in 4–6 weeks — full-stack architecture, AI layer, and UI, production-grade from day one.",
      },
      {
        name: "AI Document Automation",
        description:
          "Turn invoices, contracts, and reports into structured data — classify, extract, validate, and route, end to end.",
      },
      {
        name: "AI Integration & Automation",
        description:
          "Connect Claude, GPT-5, and custom models into existing tools via clean, monitored, human-in-the-loop workflows.",
      },
    ].map((s) => ({
      "@type": "Service",
      name: s.name,
      description: s.description,
      serviceType: s.name,
      provider: { "@id": ORG_ID },
      areaServed: ["GB", "US"],
    })),
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
          <head>
        {/* Google Consent Mode v2 — default denied until the user opts in */}
        <Script
          id="consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              var stored;
              try { stored = localStorage.getItem('sg-cookie-consent'); } catch (e) {}
              gtag('consent', 'default', {
                ad_storage: stored === 'granted' ? 'granted' : 'denied',
                ad_user_data: stored === 'granted' ? 'granted' : 'denied',
                ad_personalization: stored === 'granted' ? 'granted' : 'denied',
                analytics_storage: stored === 'granted' ? 'granted' : 'denied',
                wait_for_update: 500
              });
            `,
          }}
        />
        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-55XXD48D');
            `,
          }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif" }}>
        <Script
          id="structured-data-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-55XXD48D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
