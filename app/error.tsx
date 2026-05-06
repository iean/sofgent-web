"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
   error,
   reset,
}: {
   error: Error & { digest?: string };
   reset: () => void;
}) {
   useEffect(() => {
      // Hook Sentry / your logger here when wired:
      // Sentry.captureException(error);
      console.error("[error.tsx]", error);
   }, [error]);

   return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
         <div className="max-w-xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-600">
               Something broke
            </p>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
               This page hit a snag.
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
               You can try again or head back to the homepage. We&apos;ve already
               logged this error.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
               <button
                  onClick={reset}
                  className="rounded-xl bg-slate-900 text-white px-6 py-3 text-sm font-bold transition-colors hover:bg-slate-800">
                  Try again
               </button>
               <Link
                  href="/"
                  className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-100">
                  Back to home
               </Link>
            </div>
            {error.digest ? (
               <p className="mt-8 text-xs text-slate-400">Error ref: {error.digest}</p>
            ) : null}
         </div>
      </main>
   );
}
