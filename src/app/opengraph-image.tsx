import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "Cloud-Based AI Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#0B1020",
        color: "#F5F7FF",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ color: "#6F9FE8", fontSize: 24, letterSpacing: 4, textTransform: "uppercase" }}>
        NPS Briefing · 2026
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 28 }}>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1, letterSpacing: -5 }}>
          Cloud-Based
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: -5,
            color: "#6F9FE8",
          }}
        >
          AI Engineering
        </div>
      </div>
      <div style={{ marginTop: 38, fontSize: 26, color: "#A5AEC2" }}>
        The machine, the context, and the fleet.
      </div>
    </div>,
    { ...size },
  );
}
