"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Mella's core services. Name shows at rest; the line reveals on hover. */
const services = [
  {
    name: "የሶፍትዌር ልማት",
    body: "ንግድዎ በትክክል በሚሠራበት ዘይቤ ዙሪያ የተገነቡ ብጁ ሥርዓቶች — እንዲመጥን የሚያጣምሙት ዝግጁ ሶፍትዌር አይደለም።",
  },
  {
    name: "ተግባራዊ ማድረግ",
    body: "እናዘጋጀዋለን፣ ያሉዎትን መዝገቦች እናስገባለን፣ በእውነተኛ የሥራ ፍሰትዎ ውስጥም እናስኬደዋለን።",
  },
  {
    name: "ጥገና",
    body: "በተቀላጠፈ ሁኔታ እንዲሠራ እናደርጋለን፣ ችግሮችን በፍጥነት እናስተካክላለን፣ ፍላጎትዎ ሲቀየርም ሥርዓቱን እናስማማለን።",
  },
  {
    name: "ስልጠና",
    body: "ቡድንዎ እስኪተማመን ድረስ ተግባራዊ ክፍለ ጊዜዎች — ስለዚህ ማንም ወደ ደብተሩ አይመለስም።",
  },
  {
    name: "ቴክኒካል ድጋፍ",
    body: "አንድ ነገር ትኩረት ባስፈለገው ጊዜ የሚደውሉለት ወይም የሚጎበኙት አካባቢያዊ ቡድን።",
  },
];

export function SolutionsGrid() {
  const root = useRef<HTMLUListElement>(null);

  // Staggered scroll-reveal; initial hidden state set in JS only so no-JS/reduced-motion stays visible.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-svc-card]");
      gsap.set(cards, { opacity: 0, y: 20 });
      ScrollTrigger.create({
        trigger: root.current!,
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(cards, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.07 }),
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <ul ref={root} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <li
          key={s.name}
          data-svc-card
          className="svc-card group relative flex min-h-[20rem] flex-col overflow-hidden rounded-[22px] border border-line p-7"
        >
          <span className="svc-num font-display text-2xl">{String(i + 1).padStart(2, "0")}</span>
          <p className="svc-desc mt-4 max-w-[26ch] text-[15px] leading-relaxed">{s.body}</p>
          <h3 className="svc-name mt-auto font-display text-[clamp(22px,2.4vw,30px)] leading-tight">
            {s.name}
          </h3>
        </li>
      ))}
    </ul>
  );
}
