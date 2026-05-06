const DEFAULT_LOCAL_ORIGIN = "http://localhost:3000";

function stripProtocol(value: string) {
  return value.replace(/^https?:\/\//, "");
}

function stripPath(value: string) {
  return value.split("/")[0] ?? value;
}

function sanitizeHost(value?: string | null) {
  if (!value) {
    return "";
  }

  return stripPath(stripProtocol(value.trim().toLowerCase()));
}

export function getHostname(value?: string | null) {
  return sanitizeHost(value).split(":")[0] ?? "";
}

function toOrigin(value: string) {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return new URL(value).origin;
  }

  const host = sanitizeHost(value);
  const protocol = host.startsWith("localhost") || host.startsWith("127.0.0.1")
    ? "http"
    : "https";

  return `${protocol}://${host}`;
}

export function isPreviewDeployment() {
  return process.env.VERCEL_ENV === "preview";
}

export function getSiteOriginFromEnv() {
  const explicitOrigin =
    process.env.NEXT_PUBLIC_SITE_ORIGIN ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL;

  if (explicitOrigin) {
    return toOrigin(explicitOrigin);
  }

  if (
    process.env.VERCEL_ENV === "production" &&
    process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return toOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL);
  }

  if (process.env.VERCEL_BRANCH_URL) {
    return toOrigin(process.env.VERCEL_BRANCH_URL);
  }

  if (process.env.VERCEL_URL) {
    return toOrigin(process.env.VERCEL_URL);
  }

  return DEFAULT_LOCAL_ORIGIN;
}

export function getRequestOrigin(host?: string | null, proto?: string | null) {
  const normalizedHost = sanitizeHost(host);

  if (!normalizedHost) {
    return getSiteOriginFromEnv();
  }

  const protocol =
    proto ||
    (normalizedHost.startsWith("localhost") ||
    normalizedHost.startsWith("127.0.0.1")
      ? "http"
      : "https");

  return `${protocol}://${normalizedHost}`;
}

export function getDeploymentDiagnostics(host?: string | null) {
  return {
    host: sanitizeHost(host),
    hostname: getHostname(host),
    environment: process.env.VERCEL_ENV || process.env.NODE_ENV || "development",
    gitBranch: process.env.VERCEL_GIT_COMMIT_REF || "",
    deploymentUrl: process.env.VERCEL_URL || "",
    branchUrl: process.env.VERCEL_BRANCH_URL || "",
    productionUrl: process.env.VERCEL_PROJECT_PRODUCTION_URL || "",
    isPreview: isPreviewDeployment(),
  };
}
