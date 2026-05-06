import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            dmSans: ['var(--font-dm-sans)', 'sans-serif'],
            rubik: ['var(--font-rubik)', 'sans-serif'],
            sans: ['var(--font-dm-sans)', 'sans-serif'],
         },
         letterSpacing: {
            tight: "-0.03em",
         },
         colors: {
            primary: {
               DEFAULT: "#06b6d4",
               foreground: "#020617",
            },
            ink: "#020617",
            surface: "#f8fafc",
            muted: "#64748b",
            gray: "#f4f7f6",
            paragraph: "#6d6d6d",
         },
         boxShadow: {
            common: "0px 10px 60px 0px rgba(6, 182, 212, 0.2)",
            small: "0px 10px 20px -8px rgba(6, 182, 212, 0.3)",
            card: "0px 10px 60px 0px rgba(6, 182, 212, 0.1)",
            "card-sm": "0px 16px 32px 0px #1615191A",
            "card-xm": "rgba(0, 0, 0, 0.1) 0px 4px 12px",
         },
      },
   },
   plugins: [],
};
export default config;
