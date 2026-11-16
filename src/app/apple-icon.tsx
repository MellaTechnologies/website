import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const c = site.colors.accent;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: site.colors.paper }}>
        <svg width="110" height="132" viewBox="0 0 40 48" fill="none">
          <path d="M7 41V19a13 13 0 0 1 26 0v22" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="20" cy="17" r="4.6" fill={c} />
          <path d="M20 24.5Q21.6 31.4 29.5 33.5Q21.6 35.6 20 46Q18.4 35.6 10.5 33.5Q18.4 31.4 20 24.5Z" fill={c} />
        </svg>
      </div>
    ),
    size,
  );
}
