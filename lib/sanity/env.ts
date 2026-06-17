const readEnv = (key: string) => process.env[key]?.trim();

export const projectId =
   readEnv("NEXT_PUBLIC_SANITY_PROJECT_ID") ?? readEnv("SANITY_STUDIO_PROJECT_ID");
export const dataset =
   readEnv("NEXT_PUBLIC_SANITY_DATASET") ?? readEnv("SANITY_STUDIO_DATASET");
export const apiVersion =
   readEnv("NEXT_PUBLIC_SANITY_API_VERSION") ?? "2026-03-29";
export const readToken =
   readEnv("SANITY_API_READ_TOKEN") ??
   readEnv("SANITY_READ_TOKEN") ??
   readEnv("SANITY_TOKEN");

export const missingSanityEnvKeys = [
   !projectId ? "NEXT_PUBLIC_SANITY_PROJECT_ID" : null,
   !dataset ? "NEXT_PUBLIC_SANITY_DATASET" : null,
].filter(Boolean) as string[];

export const isSanityConfigured = missingSanityEnvKeys.length === 0;
