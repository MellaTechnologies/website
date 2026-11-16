"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  /** Internal path ("/...") or external/mailto URL renders a link; omit for a button. */
  href?: string;
  onClick?: () => void;
  /** "outline" (default): transparent → terracotta fill. "primary": terracotta → cream fill.
   *  "overlay": frosted cream on dark imagery → cream fill, text flips dark. */
  variant?: "outline" | "primary" | "overlay";
  /** Show the trailing arrow (default true); set false when children carry their own icon. */
  showArrow?: boolean;
  /** "md" (default) matches the main CTAs; "sm" matches the compact header pill. */
  size?: "sm" | "md";
  className?: string;
  "aria-label"?: string;
};

/**
 * Pill button whose fill expands from the cursor origin (mouse/pen), or from the
 * centre for touch and keyboard focus, then fades the label to the on-accent colour.
 * Driven by pointer/focus events (not :hover), so it never fires the action on hover
 * and works regardless of the browser's hover-media quirk. Reduced motion → opacity only.
 */
export function MoveButton({
  children,
  href,
  onClick,
  variant = "outline",
  showArrow = true,
  size = "md",
  className = "",
  "aria-label": ariaLabel,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  // Set the fill origin + a diameter that covers the button from any point.
  const setOrigin = (clientX?: number, clientY?: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mb-x", `${clientX == null ? r.width / 2 : clientX - r.left}px`);
    el.style.setProperty("--mb-y", `${clientY == null ? r.height / 2 : clientY - r.top}px`);
    el.style.setProperty("--mb-d", `${2 * Math.hypot(r.width, r.height)}px`);
  };
  const fill = (on: boolean) => ref.current?.setAttribute("data-fill", on ? "on" : "off");

  const onPointerEnter = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === "touch") setOrigin(); // touch previews from the centre
    else setOrigin(e.clientX, e.clientY); // mouse / pen from the cursor
    fill(true);
  };
  const onPointerLeave = () => fill(false); // shrinks back toward the last origin
  const onFocus = (e: React.FocusEvent<HTMLElement>) => {
    if (e.currentTarget.matches(":focus-visible")) {
      setOrigin(); // keyboard focus previews from the centre
      fill(true);
    }
  };
  const onBlur = () => fill(false);

  // React synthetic handlers — nothing to clean up (no addEventListener / rAF).
  const common = {
    className:
      `move-btn ${variant !== "outline" ? `move-btn--${variant} ` : ""}` +
      `inline-flex items-center justify-center gap-2 rounded-full font-semibold ${size === "sm" ? "px-[18px] py-2.5" : "px-6 py-3"} ` +
      "outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 " +
      "focus-visible:ring-offset-paper " +
      className,
    onClick,
    onPointerEnter,
    onPointerLeave,
    onFocus,
    onBlur,
    "aria-label": ariaLabel,
  };

  const content = (
    <>
      <span className="move-btn__fill" aria-hidden="true" />
      <span className="relative z-[1] inline-flex items-center gap-2">
        {children}
        {showArrow && <ArrowRight className="size-[1.1em]" aria-hidden="true" />}
      </span>
    </>
  );

  if (href?.startsWith("/")) {
    return (
      <Link href={href} ref={ref as React.Ref<HTMLAnchorElement>} {...common}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} ref={ref as React.Ref<HTMLAnchorElement>} {...common}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" ref={ref as React.Ref<HTMLButtonElement>} {...common}>
      {content}
    </button>
  );
}
