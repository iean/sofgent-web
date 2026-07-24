import { ImageResponse } from "next/og";

export const alt = "SofGent — AI Product Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0c0c0c",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(50,109,109,0.5), transparent 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#67e8f9",
            marginBottom: "36px",
          }}
        >
          SofGent · AI Product Studio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "70px",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-3px",
            maxWidth: "1000px",
          }}
        >
          Most AI projects die in pilot. We ship yours to production.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "36px",
            fontSize: "30px",
            color: "rgba(255,255,255,0.65)",
            maxWidth: "920px",
          }}
        >
          Document automation, AI SaaS MVPs & AI integrations — live in weeks.
        </div>
      </div>
    ),
    { ...size }
  );
}
