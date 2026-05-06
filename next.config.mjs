/** @type {import('next').NextConfig} */
const verboseFetchLogging =
  process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development";

const nextConfig = {
   // output:'export',
   // images: {
   //    unoptimized: true,
   // },
   logging: {
      fetches: {
         fullUrl: verboseFetchLogging,
      },
   },
   images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
      ],
    },
};

export default nextConfig;
