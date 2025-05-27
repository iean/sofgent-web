import type { Metadata } from "next";
import { inter, manrope } from "./fonts/fonts";
import "./globals.css";
import Script from "next/script";

// Meta title & description
export const metadata: Metadata = {
   title: "SofGent",
   description: "Software IT Company",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
      <head>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-0NS73E455B"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0NS73E455B');
          `,
        }}
      />
    </head>
         <body className={`${manrope.className} ${inter.variable}`}>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
         </body>
      </html>
   );
}
