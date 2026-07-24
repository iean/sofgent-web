"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "sg-cookie-consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function updateConsent(value: "granted" | "denied") {
  window.dataLayer = window.dataLayer || [];
  // Mirrors the gtag() shim defined in the consent-default script.
  window.dataLayer.push([
    "consent",
    "update",
    {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
    },
  ]);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* localStorage unavailable */
    }
    if (stored !== "granted" && stored !== "denied") {
      setVisible(true);
    }
  }, []);

  const choose = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    updateConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed z-[60] left-4 right-4 bottom-4 md:left-auto md:right-6 md:bottom-6 md:max-w-[420px] rounded-[16px] p-5"
      style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}
    >
      <p className="text-[13.5px] leading-[1.6] mb-4" style={{ color: "rgba(255,255,255,0.72)" }}>
        We use cookies to understand how the site is used and to improve it. You can accept analytics
        cookies or continue with only what’s essential. See our{" "}
        <Link href="/privacy-policy" className="underline" style={{ color: "#67e8f9" }}>
          Privacy Policy
        </Link>
        .
      </p>
      <div className="flex items-center gap-2.5">
        <button
          onClick={() => choose("granted")}
          className="inline-flex items-center justify-center text-[13px] font-semibold px-4 py-2.5 rounded-[8px] transition-opacity hover:opacity-90"
          style={{ background: "#326d6d", color: "#fff" }}
        >
          Accept all
        </button>
        <button
          onClick={() => choose("denied")}
          className="inline-flex items-center justify-center text-[13px] font-medium px-4 py-2.5 rounded-[8px] transition-colors"
          style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.16)" }}
        >
          Essential only
        </button>
      </div>
    </div>
  );
}
