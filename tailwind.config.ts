import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         fontSize: {
            18: [
               "18px",
               {
                  lineHeight: "27px",
                  letterSpacing: "-0.03em",
               },
            ],
            20: [
               "20px",
               {
                  lineHeight: "30px",
                  letterSpacing: "-0.03em",
               },
            ],
            22: [
               "22px",
               {
                  lineHeight: "30px",
                  letterSpacing: "-0.03em",
               },
            ],
            24: [
               "24px",
               {
                  lineHeight: "35px",
                  letterSpacing: "-0.03em",
               },
            ],
            34: [
               "34px",
               {
                  lineHeight: "44px",
                  letterSpacing: "-0.03em",
               },
            ],
            48: [
               "48px",
               {
                  lineHeight: "56px",
                  letterSpacing: "-0.03em",
               },
            ],
            65: [
               "65px",
               {
                  lineHeight: "70px",
                  letterSpacing: "-0.03em",
               },
            ],
            75: [
               "75px",
               {
                  lineHeight: "85px",
                  letterSpacing: "-0.03em",
               },
            ],
            pone: ["16px", "30px"],
            ptwo: ["16px", "26px"],
         },
         fontFamily: {
            ibm: ['var(--font-ibm)', 'monospace'],
            baloo: ['var(--font-baloo)', 'cursive'],
            sans: ['Inter', 'sans-serif'], // or fallback
          },
         letterSpacing: {
            tight: "-0.03em",
         },
         colors: {
            brand: "#326d6d",
            secondary: "#53aa82",
            gray: "#f4f7f6",
            paragraph: "#6d6d6d",
            brandBorder:"#326d6d2a"
         },
         boxShadow: {
            common: "0px 10px 60px 0px rgba(50, 109, 109, 0.2)",
            small: "0px 10px 20px -8px rgba(50, 109, 109, 0.3)",
            "business-red": "0px 10px 60px 0px #326d6d",
            "business-red-sm": "0px 16px 32px 0px #326d6d",
            card: "0px 10px 60px 0px rgba(50, 109, 109, 0.1)",
            "blue-card": "0px 10px 60px 0px #326d6d",
            "card-sm": "0px 16px 32px 0px #1615191A",
            "card-xm": "rgba(0, 0, 0, 0.1) 0px 4px 12px",
         },
      },
   },
   plugins: [],
};
export default config;
