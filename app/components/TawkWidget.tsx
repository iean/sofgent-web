import Script from "next/script";

const TAWK_TO_SRC =
  "https://embed.tawk.to/69fb290cdd30e51c30efd47e/1jnuhgmvk";

export default function TawkWidget() {
  return (
    <Script
      id="tawk-to-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API = window.Tawk_API || {}, Tawk_LoadStart = new Date();
          (function() {
            var s1 = document.createElement("script"),
              s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = "${TAWK_TO_SRC}";
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            s0.parentNode.insertBefore(s1, s0);
          })();
        `,
      }}
    />
  );
}
