import { ImageResponse } from "next/og";

// Generates the OG/Twitter share image automatically at /opengraph-image
// See: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image

export const runtime = "edge";
export const alt = "Paradon Thonthong — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background:
            "linear-gradient(135deg, #FFF8F1 0%, #FFE4D6 50%, #FFD4B8 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 32,
            color: "#666",
            letterSpacing: 4,
            marginBottom: 24,
          }}
        >
          PARADON
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#111",
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          Full Stack
          <br />
          Developer
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#444",
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Building scalable web applications with Next.js, Angular, Spring Boot
          and MySQL.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            fontSize: 24,
            color: "#888",
          }}
        >
          portfolio.paradon.work
        </div>
      </div>
    ),
    { ...size }
  );
}
