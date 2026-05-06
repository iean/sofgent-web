import { createClient, defineQuery, type QueryParams } from "next-sanity";
import {
  apiVersion,
  dataset,
  isSanityConfigured,
  missingSanityEnvKeys,
  projectId,
  studioUrl,
} from "@/lib/sanity/env";

export { defineQuery };

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      stega: {
        studioUrl,
      },
    })
  : null;

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  if (!client) {
    console.warn(
      `[sanity] Missing environment variables: ${missingSanityEnvKeys.join(", ") || "unknown"}`,
    );
    throw new Error("Sanity is not configured");
  }

  return client.fetch(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate,
      tags,
    },
  });
}
