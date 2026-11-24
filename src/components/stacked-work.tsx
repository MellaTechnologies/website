"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { caseStudies } from "@/lib/site";
import { Eyebrow, container } from "./ui";
import { MoveButton } from "./move-button";

const featured = caseStudies.filter((c) => "image" in c).slice(0, 3) as (typeof caseStudies[number] & {
  image: string;
})[];

export function StackedWork() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-stack-item]");
      items.forEach((item, i) => {
        if (i === items.length - 1) return;
        const card = item.querySelector<HTMLElement>("[data-stack-card]");
        if (!card) return;
        // As the next card covers this one, it recedes: scale + dim (composite-only).
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.55,
          ease: "none",
          transformOrigin: "50% 0%",
          scrollTrigger: {
            trigger: items[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: 0.4,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="border-y border-line bg-sand py-20 sm:py-24">
      <div className={`${container} flex flex-wrap items-end justify-between gap-4`}>
        <div>
          <Eyebrow>የተመረጡ ሥራዎች</Eyebrow>
          <h2 className="font-display text-[clamp(30px,4vw,44px)] leading-tight">ሊለኩ የሚችሉ ውጤቶች</h2>
        </div>
        <Link href="/portfolio" className="font-semibold text-accent underline-offset-4 hover-underline">
          ፖርትፎሊዮ ይመልከቱ <ArrowUpRight className="inline size-4" aria-hidden />
        </Link>
      </div>

      <div className={`${container} mt-10`}>
        {featured.map((c, i) => (
          <div
            key={c.slug}
            data-stack-item
            className="sticky"
            style={{ top: `calc(96px + ${i} * 26px)`, paddingBottom: i < featured.length - 1 ? "28px" : undefined }}
          >
            <article
              data-stack-card
              className="relative h-[clamp(26rem,66vh,38rem)] overflow-hidden rounded-[28px] border border-ink/10 bg-ink text-onaccent shadow-[0_34px_90px_-34px_rgb(44_28_18/0.55)] will-change-transform"
            >
              <Image
                src={c.image}
                alt=""
                fill
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/35 to-ink/55" />

              <div className="relative flex h-full flex-col justify-between p-7 sm:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <span className="font-display text-3xl text-onaccent/70">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-onaccent/50">ደንበኛ</p>
                      <p className="font-semibold">{c.client}</p>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-[11px] uppercase tracking-[0.14em] text-onaccent/50">ዘርፍ</p>
                      <p className="font-semibold">{c.industry}</p>
                    </div>
                  </div>
                  <MoveButton href="/portfolio" variant="overlay" size="sm" className="text-sm">
                    ፕሮጀክቱን ይመልከቱ
                  </MoveButton>
                </div>

                <div>
                  <span className="inline-block rounded-full bg-accent/90 px-3 py-1 font-display text-sm text-onaccent">
                    {c.metric}
                  </span>
                  <h3 className="mt-4 font-display text-[clamp(30px,4.6vw,52px)] leading-[1.05]">{c.client}</h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-onaccent/75">{c.solution}</p>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
