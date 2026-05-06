type EnvMap = Record<string, string | undefined>;

const importMetaEnv =
  ((import.meta as ImportMeta & { env?: EnvMap }).env ?? {}) as EnvMap;

const processEnv: EnvMap =
  typeof process !== "undefined" ? (process.env as EnvMap) : {};

function getEnvValue(primaryKey: string, fallbackKey?: string) {
  return (
    importMetaEnv[primaryKey] ||
    (fallbackKey ? importMetaEnv[fallbackKey] : "") ||
    processEnv[primaryKey] ||
    (fallbackKey ? processEnv[fallbackKey] : "") ||
    ""
  );
}

export const projectId = getEnvValue(
  "SANITY_STUDIO_PROJECT_ID",
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
);

export const dataset =
  getEnvValue("SANITY_STUDIO_DATASET", "NEXT_PUBLIC_SANITY_DATASET") ||
  "production";

export function assertStudioEnv() {
  const missing = [
    projectId ? null : "SANITY_STUDIO_PROJECT_ID",
    dataset ? null : "SANITY_STUDIO_DATASET",
  ].filter(Boolean);

  if (missing.length) {
    throw new Error(
      `Missing required Sanity Studio environment variables: ${missing.join(", ")}`,
    );
  }
}
