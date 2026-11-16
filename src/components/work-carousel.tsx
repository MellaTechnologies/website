"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/site";
import { Eyebrow, container } from "./ui";
import { MoveButton } from "./move-button";

const featured = caseStudies.filter((c) => "image" in c) as (typeof caseStudies[number] & {
  image: string;
})[];

/** Selected work as a snap carousel (same projects as the home page, scrolled not stacked). */
export function WorkCarousel() {
  const track = useRef<HTMLUListElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8; // gap-5 = 20px
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="border-y border-line bg-sand py-16 sm:py-20">
      <div className={`${container} flex flex-wrap items-end justify-between gap-4`}>
        <div>
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="font-display text-[clamp(30px,4vw,44px)] leading-tight">Results you can measure</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous project"
            className="grid size-11 place-items-center rounded-full border border-ink/25 text-ink transition active:scale-95"
          >
            <ArrowLeft className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next project"
            className="grid size-11 place-items-center rounded-full border border-ink/25 text-ink transition active:scale-95"
          >
            <ArrowRight className="size-5" aria-hidden />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        data-reveal
        className={`${container} mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
      >
        {featured.map((c, i) => (
          <li key={c.slug} data-card className="w-[86%] shrink-0 snap-start sm:w-[62%] lg:w-[47%]">
            <article className="relative h-[clamp(24rem,58vh,32rem)] overflow-hidden rounded-[28px] border border-ink/10 bg-ink text-onaccent shadow-[0_34px_90px_-40px_rgb(44_28_18/0.55)]">
              <Image
                src={c.image}
                alt=""
                fill
                sizes="(max-width: 640px) 86vw, (max-width: 1024px) 62vw, 540px"
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/35 to-ink/55" />

              <div className="relative flex h-full flex-col justify-between p-7 sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-5">
                    <span className="font-display text-3xl text-onaccent/70">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-onaccent/50">Client</p>
                      <p className="font-semibold">{c.client}</p>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-[11px] uppercase tracking-[0.14em] text-onaccent/50">Expertise</p>
                      <p className="font-semibold">{c.industry}</p>
                    </div>
                  </div>
                  <MoveButton href="/portfolio" variant="overlay" size="sm" className="text-sm">
                    View
                  </MoveButton>
                </div>

                <div>
                  <span className="inline-block rounded-full bg-accent/90 px-3 py-1 font-display text-sm text-onaccent">
                    {c.metric}
                  </span>
                  <h3 className="mt-4 font-display text-[clamp(26px,3.6vw,40px)] leading-[1.05]">{c.client}</h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-onaccent/75">{c.solution}</p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className={`${container} mt-6`}>
        <Link href="/portfolio" className="font-semibold text-accent underline-offset-4 hover-underline">
          View full portfolio <ArrowUpRight className="inline size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
