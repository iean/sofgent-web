import fs from "node:fs";
import path from "node:path";

type EnvMap = Record<string, string | undefined>;

const importMetaEnv =
  ((import.meta as ImportMeta & { env?: EnvMap }).env ?? {}) as EnvMap;

const processEnv: EnvMap =
  typeof process !== "undefined" ? (process.env as EnvMap) : {};

function readEnvFile(filePath: string): EnvMap {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  return fs
    .readFileSync(filePath, "utf8")
    .split("\n")
    .reduce<EnvMap>((accumulator, line) => {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith("#")) {
        return accumulator;
      }

      const separatorIndex = trimmed.indexOf("=");

      if (separatorIndex === -1) {
        return accumulator;
      }

      const key = trimmed.slice(0, separatorIndex).trim();
      const value = trimmed
        .slice(separatorIndex + 1)
        .trim()
        .replace(/^['"]|['"]$/g, "");

      accumulator[key] = value;
      return accumulator;
    }, {});
}

const cwd = typeof process !== "undefined" ? process.cwd() : "";
const fileEnv: EnvMap = cwd
  ? {
      ...readEnvFile(path.join(cwd, ".env")),
      ...readEnvFile(path.join(cwd, ".env.local")),
      ...readEnvFile(path.join(cwd, "..", ".env")),
      ...readEnvFile(path.join(cwd, "..", ".env.local")),
    }
  : {};

function getEnvValue(primaryKey: string, fallbackKey?: string) {
  return (
    importMetaEnv[primaryKey] ||
    (fallbackKey ? importMetaEnv[fallbackKey] : "") ||
    processEnv[primaryKey] ||
    (fallbackKey ? processEnv[fallbackKey] : "") ||
    fileEnv[primaryKey] ||
    (fallbackKey ? fileEnv[fallbackKey] : "") ||
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
