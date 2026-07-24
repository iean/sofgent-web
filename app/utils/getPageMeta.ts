import type { Metadata } from "next";
import metaMap from "@/app/data/meta.json";

const defaultMeta: Metadata = {
  title: "SofGent — AI Product Studio",
  description:
    "SofGent is an AI product studio. We scope, build, and ship production-grade AI products — document automation, AI SaaS MVPs, and AI integrations — in weeks, not months.",
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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
