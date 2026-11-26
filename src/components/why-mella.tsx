"use client";

import { useRef } from "react";
import { container } from "./ui";
import { T } from "@/lib/i18n";

const PARAGRAPH = {
  en: "We start by listening to how you and your customers work, and design around that — digitizing one process first or everything at once, whatever fits you. We grow with you, and because pricing is set by the size of your business, small businesses pay small-business prices.",
  am: "እርስዎና ደንበኞችዎ እንዴት እንደሚሠሩ በማዳመጥ እንጀምራለን፣ በዚያም ዙሪያ እንቀርጻለን — መጀመሪያ አንድ ሂደት ወይም ሁሉንም በአንድ ጊዜ ዲጂታል እናደርጋለን፣ የሚስማማዎትን። ከእርስዎ ጋር እናድጋለን፣ ዋጋውም በንግድዎ መጠን ስለሚወሰን ትናንሽ ንግዶች የትናንሽ ንግድ ዋጋ ይከፍላሉ።",
};

function Content({ eyebrow, withId }: { eyebrow: string; withId?: boolean }) {
  return (
    <div className={container}>
      <p className={`mb-4 text-[13px] font-semibold uppercase tracking-[0.16em] ${eyebrow}`}>
        <T en="Why Mella" am="ለምን Mella" />
      </p>
      <h2
        {...(withId ? { id: "why-teaser" } : {})}
        className="max-w-3xl font-display text-[clamp(32px,5vw,56px)] leading-[1.04]"
      >
        <T en="A partner that stays after launch" am="ከጀመረ በኋላ የሚቆይ አጋር" />
      </h2>
      <p
        {...(withId ? { "data-reveal": "" } : {})}
        className="mt-6 max-w-3xl text-[clamp(18px,2.4vw,26px)] leading-relaxed"
      >
        <T en={PARAGRAPH.en} am={PARAGRAPH.am} />
      </p>
    </div>
  );
}

export function WhyMella() {
  const section = useRef<HTMLElement>(null);
  const overlay = useRef<HTMLDivElement>(null);

  const move = (e: React.PointerEvent) => {
    const sec = section.current;
    const ov = overlay.current;
    if (!sec || !ov) return;
    const r = sec.getBoundingClientRect();
    ov.style.setProperty("--x", `${e.clientX - r.left}px`);
    ov.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  const leave = () => overlay.current?.style.setProperty("--x", "-9999px");

  return (
    <section
      ref={section}
      aria-labelledby="why-teaser"
      onPointerMove={move}
      onPointerLeave={leave}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-accent text-white"
    >
      <Content eyebrow="opacity-80" withId />

      {/* Inverted duplicate, revealed inside the cursor circle. */}
      <div
        ref={overlay}
        aria-hidden
        className="why-spotlight pointer-events-none absolute inset-0 flex flex-col justify-center bg-paper text-accent"
      >
        <Content eyebrow="opacity-70" />
      </div>
    </section>
  );
}
