import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, isSanityConfigured, projectId } from "@/lib/sanity/env";
import type { Image } from "sanity";

const builder = isSanityConfigured
  ? createImageUrlBuilder({
      projectId,
      dataset,
    })
  : null;

export function urlFor(source: Image) {
  if (!builder) {
    throw new Error("Sanity is not configured");
  }

  return builder.image(source);
}
