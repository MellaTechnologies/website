"use client";

import { useEffect, useRef, useState } from "react";
import { Orb } from "./orb";

// Plays once per full page load (not on in-app navigation).
let hasPlayed = false;

export function Preloader() {
  const [done, setDone] = useState(false);
  const [bgOut, setBgOut] = useState(false);
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

    const hold = reduce ? 150 : 2000;
    const flightMs = reduce ? 0 : 1150;
    if (orb) orb.style.transition = `transform ${flightMs}ms cubic-bezier(0.65, 0, 0.35, 1), opacity 400ms ease`;

    // Hold on the loading splash, then fly the orb to the hero slot and reveal the page.
    const t1 = setTimeout(() => {
      const rect = slot?.getBoundingClientRect();
      if (orb && rect && rect.width > 20 && !reduce) {
        const r = orb.getBoundingClientRect();
        const scale = rect.width / r.width;
        const dx = rect.left + rect.width / 2 - (r.left + r.width / 2);
        const dy = rect.top + rect.height / 2 - (r.top + r.height / 2);
        orb.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
      }
      setBgOut(true);
    }, hold);

    // On landing: reveal the hero's own orb and fade the loader orb out, in the same spot.
    const tLand = setTimeout(() => {
      root.classList.remove("orb-loading");
      if (orb) orb.style.opacity = "0";
    }, hold + flightMs);

    const t2 = setTimeout(() => {
      setDone(true);
      root.style.overflow = "";
    }, hold + flightMs + 450);

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
    <div className={`fixed inset-0 z-[60] grid place-items-center ${bgOut ? "pointer-events-none" : ""}`} aria-hidden>
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
