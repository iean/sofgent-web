import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Admin",
   // Keep the CMS admin surface out of search indexes (defense-in-depth
   // alongside the X-Robots-Tag header in next.config.mjs).
   robots: { index: false, follow: false, nocache: true },
};

export default function AdminPage() {
   return (
      <section className="min-h-screen bg-slate-950">
         <iframe
            src="/studio/index.html"
            title="SofGent admin"
            className="h-screen w-full border-0"
         />
      </section>
   );
}
