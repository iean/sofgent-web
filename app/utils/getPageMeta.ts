import type { Metadata } from "next";
import metaMap from "@/app/data/meta.json";

const defaultMeta: Metadata = {
  title: "SofGent",
  description: "Software IT Company",
};

export default function getPageMeta(path: string): Metadata {
  const meta = (metaMap as Record<string, Metadata>)[path];
  if (meta && typeof meta === "object") {
    return meta;
  }
  return defaultMeta;
}
