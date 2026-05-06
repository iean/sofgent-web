import type { MetadataRoute } from "next";
import {
  getSiteOriginFromEnv,
  isPreviewDeployment,
} from "@/lib/runtime/deployment";

export default function robots(): MetadataRoute.Robots {
  const siteOrigin = getSiteOriginFromEnv();
  const previewDeployment = isPreviewDeployment();

  return {
    rules: previewDeployment
      ? {
          userAgent: "*",
          disallow: "/",
        }
      : {
          userAgent: "*",
          allow: "/",
        },
    sitemap: `${siteOrigin}/sitemap.xml`,
    host: siteOrigin,
  };
}
