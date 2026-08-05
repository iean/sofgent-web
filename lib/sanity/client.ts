import { createClient } from "@sanity/client";
import { apiVersion, dataset, isSanityConfigured, projectId, readToken } from "@/lib/sanity/env";

export const sanityClient = isSanityConfigured
   ? createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: false,
        token: readToken || undefined,
        perspective: "published",
     })
   : null;

export async function sanityFetch<QueryResponse>({
   query,
   params = {},
   revalidate = 60,
}: {
   query: string;
   params?: Record<string, unknown>;
   revalidate?: number | false;
}): Promise<QueryResponse> {
   if (!sanityClient) {
      throw new Error("Sanity is not configured");
   }

   return sanityClient.fetch<QueryResponse>(query, params, {
      next: {
         revalidate,
      },
   });
}
