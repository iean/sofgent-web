import type { Metadata } from "next";
import Footer from "@/app/components/Layout/Footer/Footer";
import Header from "@/app/components/Layout/Header/Header";
import CaseStudyHighlights from "@/app/components/home/conversion/CaseStudyHighlights";
import ConversionHero from "@/app/components/home/conversion/ConversionHero";
import CoreCapabilities from "@/app/components/home/conversion/CoreCapabilities";
import DeliveryTimeline from "@/app/components/home/conversion/DeliveryTimeline";
import EngineeringPhilosophy from "@/app/components/home/conversion/EngineeringPhilosophy";
import HomeStructuredData from "@/app/components/home/conversion/HomeStructuredData";
import LeadCaptureBand from "@/app/components/home/conversion/LeadCaptureBand";
import StudioAuthority from "@/app/components/home/conversion/StudioAuthority";
import TrustMetrics from "@/app/components/home/conversion/TrustMetrics";

export const metadata: Metadata = {
  title: "AI Product Studio for Startups, SaaS, and Automation Systems",
  description:
    "SofGent builds AI-powered SaaS products, automation systems, and internal business tools fast. Launch production-ready systems in weeks with architecture-led delivery.",
  keywords: [
    "AI product studio",
    "SaaS MVP development",
    "AI implementation",
    "workflow automation",
    "document intelligence systems",
    "enterprise software architecture",
  ],
  openGraph: {
    title: "SofGent | AI Product Studio for Startups and Automation Systems",
    description:
      "Production-ready AI products, SaaS MVPs, and internal business tools built fast with architecture-first delivery.",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "SofGent AI Product Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SofGent | AI Product Studio",
    description:
      "Build production-ready AI products, internal tools, and automation systems in weeks.",
    images: ["/og/default.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-cyan-500/20 selection:text-cyan-950">
      <HomeStructuredData />
      <Header />
      <ConversionHero />
      <TrustMetrics />
      <CoreCapabilities />
      <CaseStudyHighlights />
      <StudioAuthority />
      <EngineeringPhilosophy />
      <DeliveryTimeline />
      <LeadCaptureBand />
      <Footer />
    </main>
  );
}
