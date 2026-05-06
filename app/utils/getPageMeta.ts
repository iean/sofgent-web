import type { Metadata } from "next";
import metaMap from "@/app/data/meta.json";

type PageMeta = {
   title?: string;
   description?: string;
   ogImage?: string;
};

const DEFAULT_OG_IMAGE = "/og/default.png";

const defaultMeta: Metadata = {
   title: "SofGent",
   description: "Premium AI Product Studio",
};

export default function getPageMeta(path: string): Metadata {
   const meta = (metaMap as Record<string, PageMeta>)[path];
   if (!meta || typeof meta !== "object") {
      return defaultMeta;
   }

   const title =
      typeof meta.title === "string" && meta.title.length > 0
         ? meta.title
         : "SofGent";
   const description =
      typeof meta.description === "string" && meta.description.length > 0
         ? meta.description
         : (defaultMeta.description as string | undefined);
   const ogImage = meta.ogImage ?? DEFAULT_OG_IMAGE;

   return {
      title: meta.title,
      description,
      openGraph: {
         title,
         description,
         images: [
            {
               url: ogImage,
               width: 1200,
               height: 630,
               alt: title,
            },
         ],
      },
      twitter: {
         card: "summary_large_image",
         title,
         description,
         images: [ogImage],
      },
   };
}
