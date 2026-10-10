import { ImageResponse } from "next/og";

export const alt = "Swiftlyph — great software, built swiftly";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#006241",
          color: "#F8F6F0",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <svg width={56} height={56} viewBox="0 0 64 64">
            <defs>
              <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#F4E5A1" />
                <stop offset="100%" stopColor="#B8860B" />
              </linearGradient>
            </defs>
            <path
              d="M6 32 L38 16 L38 25 L58 32 L38 39 L38 48 Z"
              fill="#00754A"
              stroke="url(#g)"
              strokeWidth="1.5"
            />
            <circle cx="44" cy="29" r="2" fill="url(#g)" />
          </svg>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 28,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#F4E5A1",
              display: "flex",
            }}
          >
            Software Engineering Studio · Philippines
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "#F8F6F0",
              fontFamily: "Georgia, serif",
              maxWidth: 1040,
            }}
          >
            Great software, built swiftly.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 36,
              fontSize: 24,
              color: "#F8F6F0",
              fontFamily: "Inter, sans-serif",
              opacity: 0.85,
              letterSpacing: "-0.01em",
            }}
          >
            swiftlyph — a Philippine software engineering studio · custom · subscription · FDE
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "Georgia, serif",
            color: "#F4E5A1",
          }}
        >
          <div
            style={{
              display: "flex",
              fontStyle: "italic",
              fontSize: 22,
              opacity: 0.9,
              maxWidth: 720,
              lineHeight: 1.4,
            }}
          >
            “The least of you will become a thousand…I will do this swiftly.”
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Inter, sans-serif",
              fontSize: 18,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#F4E5A1",
            }}
          >
            Isaiah 60:22
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
