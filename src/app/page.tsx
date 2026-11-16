import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Orb } from "@/components/orb";
import { Preloader } from "@/components/preloader";
import { StackedWork } from "@/components/stacked-work";
import { WhyMella } from "@/components/why-mella";
import { CTASection, SkyArt, StatStrip, btnOutline, btnPrimary, container, Eyebrow, heroSky } from "@/components/ui";
import { appointmentHref } from "@/lib/site";

/** Hero slot holding the glass object; the preloader animates its orb into this slot on load. */
function HeroObject() {
  return (
    <div id="hero-orb-slot" aria-hidden className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block">
      <Orb />
    </div>
  );
}

const pillars = [
  { num: "01", title: "Digitize", img: "/nat-digitize.png", body: "We replace the stock book, receipt pad and shared Excel file with simple tools built around how you work." },
  { num: "02", title: "Train", img: "/nat-train.png", body: "We train your staff hands-on until they're confident — so nobody slips back to the notebook." },
  { num: "03", title: "Support", img: "/nat-support.png", body: "A local team you can call or meet. We check in, fix issues fast, and grow the system with you." },
];

export default function Home() {
  return (
    <>
      <Preloader />
    <main>
      {/* Hero */}
      <section
        aria-labelledby="hero-title"
        className={`relative overflow-hidden ${heroSky} pt-28 pb-20 sm:pt-36 sm:pb-28`}
      >
        <SkyArt priority />
        <div className={`${container} relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]`}>
          <div data-enter>
            <h1
              id="hero-title"
              style={{ "--d": "0s" } as React.CSSProperties}
              className="font-display text-[clamp(40px,6.4vw,66px)] leading-[1.04]"
            >
              Let&apos;s optimize your workflow
            </h1>
            <p style={{ "--d": "0.12s" } as React.CSSProperties} className="mt-5 max-w-xl text-lg text-muted">
              We turn paper records, notebooks and spreadsheets into simple digital systems — so you spend more time on
              your customers.
            </p>
            <div style={{ "--d": "0.27s" } as React.CSSProperties} className="mt-9 flex flex-wrap gap-3">
              <a href={appointmentHref} className={btnPrimary}>
                <CalendarCheck className="size-4" aria-hidden /> Make an appointment
              </a>
              <Link href="/services" className={btnOutline}>
                See what we digitize <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>

          <HeroObject />
        </div>
      </section>

      <StatStrip />

      {/* What we do — numbered pillars */}
      <section aria-labelledby="pillars-title" className="py-20 sm:py-24">
        <div className={container}>
          <Eyebrow>How we work</Eyebrow>
          <h2 id="pillars-title" className="max-w-2xl font-display text-[clamp(30px,4vw,44px)] leading-tight">
            Anything done by hand can be done better digitally
          </h2>
          <div className="mt-12 grid items-start gap-5 md:grid-cols-3" data-reveal>
            {pillars.map(({ num, title, img, body }) => (
              <div
                key={num}
                className="howcard overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_2px_rgb(44_28_18/0.04)]"
              >
                {/* Text only at rest; the illustration expands in above on hover (see .howcard rules in globals.css). */}
                <div className="howcard-reveal">
                  <div>
                    <div className="relative aspect-[16/9] border-b border-line">
                      <Image src={img} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="howcard-img object-cover" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <span className="font-display text-2xl text-accent/30">{num}</span>
                  </div>
                  <p className="mt-2 leading-relaxed text-muted">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work — stacked cards */}
      <StackedWork />

      {/* Why Mella — full-screen stacking card with a cursor spotlight that reverses colours */}
      <WhyMella />

      <CTASection />
    </main>
    </>
  );
}
