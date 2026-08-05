import type { Metadata } from "next";
import metaMap from "@/app/data/meta.json";

const defaultMeta: Metadata = {
  title: "SofGent — AI Product Studio",
  description:
    "SofGent is an AI product studio. We scope, build, and ship production-grade AI products — document automation, AI SaaS MVPs, and AI integrations — in weeks, not months.",
};

const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "SofGent — AI Product Studio",
};

export default function getPageMeta(path: string): Metadata {
  const meta = (metaMap as Record<string, Metadata>)[path];
  const base = meta && typeof meta === "object" ? meta : defaultMeta;
  const url = `https://www.sofgent.com${path}`;
  const title = typeof base.title === "string" ? base.title : "SofGent — AI Product Studio";
  const description =
    typeof base.description === "string" ? base.description : (defaultMeta.description as string);

  return {
    ...base,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      siteName: "SofGent",
      url,
      title,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}
