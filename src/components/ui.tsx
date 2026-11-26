import Image from "next/image";
import { CalendarCheck } from "lucide-react";
import { MoveButton } from "@/components/move-button";
import { appointmentHref, stats } from "@/lib/site";
import { T } from "@/lib/i18n";

export const container = "mx-auto max-w-6xl px-5";
export const card =
  "card-interactive rounded-2xl border border-line bg-surface p-6 shadow-[0_1px_2px_rgb(44_28_18/0.04)]";
export const btnPrimary =
  "btn-primary inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-onaccent";
export const btnOutline =
  "btn-outline inline-flex items-center gap-2 rounded-full border border-accent/40 px-6 py-3 font-semibold text-accent";

/**
 * Warm sunrise gradient ground. The absolutely-positioned [data-sky-art] layer is
 * the slot for a Higgsfield-generated painterly sky — set its backgroundImage to drop art in.
 */
export const heroSky =
  "bg-[radial-gradient(1100px_620px_at_72%_-8%,#ffcf9e,transparent_60%),radial-gradient(820px_520px_at_6%_8%,#ffe6c4,transparent_55%),linear-gradient(180deg,#ffe9cf_0%,var(--color-paper)_92%)]";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-accent">{children}</p>
  );
}

/** Higgsfield-generated painterly sky, layered over the heroSky gradient and faded into cream.
 *  next/image optimizes the source PNG to webp/avif at serve time. */
export function SkyArt({ priority = false }: { priority?: boolean }) {
  return (
    <div
      data-sky-art
      data-parallax
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-95 [mask-image:linear-gradient(to_bottom,black_88%,transparent)]"
    >
      <Image src="/sky-hero.png" alt="" fill priority={priority} sizes="100vw" className="object-cover object-top" />
    </div>
  );
}

/** Top-of-page hero used on every subpage, over the warm sky ground. */
export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  lead: React.ReactNode;
}) {
  return (
    <section className={`relative flex min-h-[80vh] items-center overflow-hidden ${heroSky} pt-32 pb-20 sm:pt-36 sm:pb-24`}>
      <SkyArt priority />
      <div className={`${container} relative w-full max-w-3xl`} data-enter>
        <div style={{ "--d": "0s" } as React.CSSProperties}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1
          style={{ "--d": "0.07s" } as React.CSSProperties}
          className="font-display text-[clamp(38px,6.2vw,62px)] leading-[1.06]"
        >
          {title}
        </h1>
        <p style={{ "--d": "0.14s" } as React.CSSProperties} className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {lead}
        </p>
      </div>
    </section>
  );
}

/** Credibility figures. */
export function StatStrip() {
  return (
    <section className="border-y border-line bg-sand py-5 sm:py-6">
      <dl className={`${container} grid grid-cols-2 gap-x-4 gap-y-3 text-center lg:grid-cols-4`}>
        {stats.map((s) => (
          <div key={s.label.en} data-reveal>
            <dt className="font-display text-[clamp(20px,2.6vw,30px)] text-accent">
              {typeof s.value === "string" ? s.value : <T en={s.value.en} am={s.value.am} />}
            </dt>
            <dd className="mt-0.5 text-[13px] text-muted">
              <T en={s.label.en} am={s.label.am} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/** Northern-lights aurora: waving vertical light curtains in the warm palette, glowing on a dark sky. */
function Aurora() {
  // Different shades of the primary terracotta.
  const curtains = [
    { left: "4%", w: "22%", c: "#e8926a", wave: "12s", glow: "7s", d: "0s" },
    { left: "20%", w: "16%", c: "#b5461c", wave: "9s", glow: "6s", d: "-3s" },
    { left: "34%", w: "26%", c: "#d0693a", wave: "14s", glow: "8s", d: "-6s" },
    { left: "52%", w: "18%", c: "#c85a2a", wave: "10s", glow: "5s", d: "-2s" },
    { left: "66%", w: "24%", c: "#e8926a", wave: "13s", glow: "7s", d: "-5s" },
    { left: "82%", w: "18%", c: "#b5461c", wave: "8s", glow: "6s", d: "-1s" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-2/3 bg-[radial-gradient(120%_80%_at_50%_0%,rgb(181_70_28/0.3),transparent_70%)]" />
      {curtains.map((c, i) => (
        <div
          key={i}
          className="absolute -top-[25%] h-[150%] blur-2xl will-change-transform"
          style={{
            left: c.left,
            width: c.w,
            background: `linear-gradient(to bottom, ${c.c} 0%, ${c.c}80 35%, ${c.c}00 72%)`,
            transformOrigin: "top center",
            animation: `auroraWave ${c.wave} ease-in-out ${c.d} infinite, auroraGlow ${c.glow} ease-in-out ${c.d} infinite`,
          }}
        />
      ))}
    </div>
  );
}

/** Closing call-to-action band, shared across pages. */
export function CTASection({
  title = <T en="Ready to go from manual to digital?" am="ከእጅ ሥራ ወደ ዲጂታል ለመሸጋገር ዝግጁ ኖት?" />,
  body = (
    <T
      en="Book a free consultation at your office or ours. We'll look at your paperwork and show you what going digital would look like — no obligation."
      am="ያነጋግሩን። የወረቀት ሥራዎን እንመለከታለን፣ ዲጂታል መሆን ምን እንደሚመስል እናሳይዎታለን።"
    />
  ),
}: {
  title?: React.ReactNode;
  body?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-t border-line bg-[#fbeede] py-24">
      <Aurora />
      <div className={`${container} relative max-w-2xl text-center`} data-reveal>
        <h2 className="font-display text-[clamp(30px,4.4vw,46px)] leading-tight">{title}</h2>
        <p className="mt-4 text-lg text-muted">{body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <MoveButton href={appointmentHref} variant="primary" showArrow={false}>
            <CalendarCheck className="size-[1.1em]" aria-hidden /> <T en="Make an appointment" am="ቀጠሮ ይያዙ" />
          </MoveButton>
          <MoveButton href="/contact">
            <T en="Contact us" am="ያግኙን" />
          </MoveButton>
        </div>
      </div>
    </section>
  );
}
