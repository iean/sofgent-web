import type { Metadata } from "next";
import metaMap from "@/app/data/meta.json";

const defaultMeta: Metadata = {
  title: "SofGent",
  description: "Software IT Company",
};

export default function getPageMeta(path: string): Metadata {
  const meta = (metaMap as Record<string, Metadata>)[path];
  const base = meta && typeof meta === "object" ? meta : defaultMeta;
  return {
    ...base,
    alternates: {
      canonical: `https://www.sofgent.com${path}`,
    },
  };
}
