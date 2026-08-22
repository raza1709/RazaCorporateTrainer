import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Quality Engineering Consultant";
  const subtitle = searchParams.get("subtitle") ?? "Fractional QA Head · Playwright Expert · Corporate Trainer";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0B2341",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(16,185,129,0.12)",
            border: "1px solid rgba(16,185,129,0.3)",
            borderRadius: "100px",
            padding: "6px 16px",
            width: "fit-content",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#10B981",
            }}
          />
          <span style={{ color: "#10B981", fontSize: "14px", fontWeight: 600 }}>
            razashah.dev
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 50 ? "44px" : "56px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.5)",
            fontWeight: 400,
            marginBottom: "48px",
          }}
        >
          {subtitle}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(16,185,129,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#10B981",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            RS
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ color: "#ffffff", fontSize: "18px", fontWeight: 700 }}>
              Raza Shah
            </span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
              Quality Engineering Consultant · Pune, India
            </span>
          </div>

          <div
            style={{
              marginLeft: "auto",
              background: "#10B981",
              color: "#ffffff",
              padding: "10px 24px",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            Book Free QA Assessment
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
