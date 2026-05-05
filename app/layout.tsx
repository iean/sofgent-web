import "./globals.css";
import { dmSans, rubik } from "./fonts/fonts";
import Script from "next/script";
import type { Metadata } from "next";
import WhatsAppWidget from "./components/WhatsAppWidget";
import {
  getSiteOriginFromEnv,
  isPreviewDeployment,
} from "@/lib/runtime/deployment";

export function generateMetadata(): Metadata {
  const siteOrigin = getSiteOriginFromEnv();
  const previewDeployment = isPreviewDeployment();

  return {
    metadataBase: new URL(siteOrigin),
    title: {
      default: "SofGent",
      template: "%s | SofGent",
    },
    description:
      "Premium AI Product Studio. We ship production-ready AI products, SaaS MVPs, and document automation in 2–4 weeks.",
    openGraph: {
      type: "website",
      siteName: "SofGent",
      locale: "en_US",
      url: siteOrigin,
      title: "SofGent — Premium AI Product Studio",
      description:
        "Ship AI products in 2–4 weeks. No prototypes, no tech debt.",
      images: [
        {
          url: "/og/default.png",
          width: 1200,
          height: 630,
          alt: "SofGent — Premium AI Product Studio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "SofGent — Premium AI Product Studio",
      description:
        "Ship AI products in 2–4 weeks. No prototypes, no tech debt.",
      images: ["/og/default.png"],
    },
    robots: previewDeployment
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${rubik.variable}`}>
          <head>
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
      <body className="font-dmSans">
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
        <WhatsAppWidget />
      </body>
    </html>
  );
}
