import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — turn manual work into digital systems`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const c = site.colors.accent;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: `radial-gradient(circle at 80% 8%, #ffcf9e 0%, ${site.colors.paper} 60%)`,
          color: site.colors.ink,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, color: c }}>
          <svg width="60" height="72" viewBox="0 0 40 48" fill="none">
            <path d="M7 41V19a13 13 0 0 1 26 0v22" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="20" cy="17" r="4.6" fill={c} />
            <path d="M20 24.5Q21.6 31.4 29.5 33.5Q21.6 35.6 20 46Q18.4 35.6 10.5 33.5Q18.4 31.4 20 24.5Z" fill={c} />
          </svg>
          <div style={{ fontSize: 56 }}>Mella</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.1, maxWidth: 950 }}>From manual work to digital, built around your customers</div>
          <div style={{ marginTop: 28, fontSize: 30, color: site.colors.accent }}>
            Stock · Sales · Customers · Staff · Reports · Websites
          </div>
        </div>
      </div>
    ),
    size,
  );
}
