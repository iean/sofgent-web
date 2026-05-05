export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-03-29";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const studioUrl = "/studio";
export const missingSanityEnvKeys = [
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    ? null
    : "NEXT_PUBLIC_SANITY_PROJECT_ID",
  process.env.NEXT_PUBLIC_SANITY_DATASET ? null : "NEXT_PUBLIC_SANITY_DATASET",
].filter(Boolean) as string[];

export const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET,
);
