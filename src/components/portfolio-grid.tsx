"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { caseStudies } from "@/lib/site";
import { MoveButton } from "./move-button";
import { T } from "@/lib/i18n";

/** Portfolio as image cards: name + industry at rest, description + CTA on hover. */
export function PortfolioGrid() {
  const root = useRef<HTMLUListElement>(null);

  // Staggered scroll-reveal; hidden state set in JS only so no-JS/reduced-motion stays visible.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-port-card]");
      gsap.set(cards, { opacity: 0, y: 24 });
      ScrollTrigger.batch(cards, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.08, overwrite: true }),
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <ul ref={root} className="grid gap-6 md:grid-cols-2">
      {caseStudies.map((c) => (
        <li key={c.slug}>
          <article
            data-port-card
            className="port-card group relative aspect-[16/11] overflow-hidden rounded-[22px] border border-line"
          >
            {"image" in c ? (
              <Image
                src={(c as { image: string }).image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="port-img object-cover"
              />
            ) : (
              // Fallback until a real image exists — add `image` in site.ts to replace.
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#f4ecdd,#e8926a_55%,#b5461c)]" />
            )}

            <div className="port-shade absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 text-onaccent sm:p-7">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-onaccent/70">
                <T en={c.industry.en} am={c.industry.am} />
              </p>
              <h2 className="mt-1 font-display text-2xl leading-tight sm:text-[26px]">
                <T en={c.client.en} am={c.client.am} />
              </h2>

              <div className="port-reveal">
                <div className="port-reveal-inner">
                  <p className="mt-2 max-w-md text-[14px] leading-relaxed text-onaccent/85">
                    <T en={c.solution.en} am={c.solution.am} />
                  </p>
                  <MoveButton href={`/portfolio/${c.slug}`} variant="overlay" size="sm" className="mt-3 text-sm">
                    <T en="View project" am="ፕሮጀክቱን ይመልከቱ" />
                  </MoveButton>
                </div>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
