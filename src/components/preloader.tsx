"use client";

import { useEffect, useRef, useState } from "react";
import { Orb } from "./orb";

// Plays once per full page load (not on in-app navigation).
let hasPlayed = false;

export function Preloader() {
  const [done, setDone] = useState(false);
  const [bgOut, setBgOut] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasPlayed) {
      setDone(true);
      return;
    }
    hasPlayed = true;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    root.classList.add("orb-loading"); // hide the hero's own orb so there's no duplicate
    const orb = orbRef.current;
    const slot = document.getElementById("hero-orb-slot");

    // Reduced motion: no flight/sweep — a short hold, then a quick gentle fade of the whole
    // splash to reveal the page (WAAPI, so it still animates rather than being force-cut).
    if (reduce) {
      const tReveal = setTimeout(() => {
        root.classList.remove("orb-loading");
        const el = rootRef.current;
        if (el) {
          el.style.pointerEvents = "none";
          el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 500, easing: "ease", fill: "forwards" });
        }
      }, 500);
      const tEnd = setTimeout(() => {
        setDone(true);
        root.style.overflow = "";
      }, 1050);
      return () => {
        clearTimeout(tReveal);
        clearTimeout(tEnd);
        root.style.overflow = "";
        root.classList.remove("orb-loading");
      };
    }

    const hold = 2000;
    const flightMs = 1400;
    const overlap = 200; // begin the dissolve this long before landing, for a soft handoff

    // Hold on the splash, then fly the orb into the hero slot. Uses the Web Animations API,
    // NOT a CSS transition: CSS transitions are force-zeroed under prefers-reduced-motion
    // (which made this snap instantly), whereas WAAPI runs the motion the user asked for.
    const t1 = setTimeout(() => {
      setBgOut(true);
      const rect = slot?.getBoundingClientRect();
      if (orb && rect && rect.width > 20) {
        const r = orb.getBoundingClientRect();
        const scale = rect.width / r.width;
        const dx = rect.left + rect.width / 2 - (r.left + r.width / 2);
        const dy = rect.top + rect.height / 2 - (r.top + r.height / 2);
        orb.animate(
          [
            { transform: "translate(0px, 0px) scale(1)" },
            { transform: `translate(${dx}px, ${dy}px) scale(${scale})` },
          ],
          // easeInOutCubic: accelerate, cruise, decelerate — the travel is clearly seen.
          { duration: flightMs, easing: "cubic-bezier(0.645, 0.045, 0.355, 1)", fill: "forwards" },
        );
      }
    }, hold);

    // Near the landing: reveal the hero orb and dissolve the loader orb out over it.
    const tLand = setTimeout(() => {
      root.classList.remove("orb-loading");
      orb?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 500, easing: "ease", fill: "forwards" });
    }, hold + flightMs - overlap);

    const t2 = setTimeout(() => {
      setDone(true);
      root.style.overflow = "";
    }, hold + flightMs + 400);

    return () => {
      clearTimeout(t1);
      clearTimeout(tLand);
      clearTimeout(t2);
      root.style.overflow = "";
      root.classList.remove("orb-loading");
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className={`fixed inset-0 z-[60] grid place-items-center ${bgOut ? "pointer-events-none" : ""}`}
      aria-hidden
    >
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${bgOut ? "opacity-0" : "opacity-100"}`}
        style={{ background: "linear-gradient(180deg, #ffe9cf 0%, var(--color-paper) 70%)" }}
      />
      <div ref={orbRef} className="relative h-80 w-80 will-change-transform">
        <Orb />
      </div>
    </div>
  );
}
