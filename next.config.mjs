/** @type {import('next').NextConfig} */
const securityHeaders = [
   { key: "X-Content-Type-Options", value: "nosniff" },
   { key: "X-Frame-Options", value: "SAMEORIGIN" },
   { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
   { key: "X-DNS-Prefetch-Control", value: "on" },
   {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
   },
   {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
   },
];

const noIndexHeader = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];

const nextConfig = {
   // Remove framework disclosure (drops the X-Powered-By: Next.js header)
   poweredByHeader: false,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'images.unsplash.com',
         },
         {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
         },
      ],
   },
   async headers() {
      return [
         // Baseline security headers on every route
         { source: "/:path*", headers: securityHeaders },
         // Keep the CMS admin + embedded Sanity Studio out of search indexes
         { source: "/admin", headers: noIndexHeader },
         { source: "/studio/:path*", headers: noIndexHeader },
      ];
   },
};

export default nextConfig;
