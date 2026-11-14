import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { appointmentHref, stats } from "@/lib/site";

export const container = "mx-auto max-w-6xl px-5";
export const card =
  "rounded-2xl border border-line bg-surface p-6 shadow-[0_1px_2px_rgb(44_28_18/0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgb(44_28_18/0.09)]";
export const btnPrimary =
  "inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-onaccent transition hover:-translate-y-px hover:bg-accent-strong active:translate-y-0 active:scale-[0.98]";
export const btnOutline =
  "inline-flex items-center gap-2 rounded-full border border-accent/40 px-6 py-3 font-semibold text-accent transition hover:-translate-y-px hover:bg-accent/8 active:translate-y-0 active:scale-[0.98]";

/**
 * Warm sunrise gradient ground. The absolutely-positioned [data-sky-art] layer is
 * the slot for a Higgsfield-generated painterly sky — set its backgroundImage to drop art in.
 */
export const heroSky =
  "bg-[radial-gradient(1100px_620px_at_72%_-8%,#ffcf9e,transparent_60%),radial-gradient(820px_520px_at_6%_8%,#ffe6c4,transparent_55%),linear-gradient(180deg,#ffe9cf_0%,var(--color-paper)_62%)]";

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
      className="pointer-events-none absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black_50%,transparent)]"
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
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
}) {
  return (
    <section className={`relative overflow-hidden ${heroSky} pt-32 pb-20 sm:pt-36 sm:pb-24`}>
      <SkyArt priority />
      <div className={`${container} relative max-w-3xl`} data-enter>
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
    <section className="border-y border-line bg-sand py-12">
      <dl className={`${container} grid grid-cols-2 gap-6 text-center lg:grid-cols-4`}>
        {stats.map((s) => (
          <div key={s.label} data-reveal>
            <dt className="font-display text-[clamp(30px,4.4vw,46px)] text-accent">{s.value}</dt>
            <dd className="mt-1 text-sm text-muted">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/** Closing call-to-action band, shared across pages. */
export function CTASection({
  title = "Ready to go from manual to digital?",
  body = "Book a free consultation at your office or ours. We'll look at your paperwork and show you what going digital would look like — no obligation.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className={`relative overflow-hidden border-t border-line ${heroSky} py-24`}>
      <SkyArt />
      <div className={`${container} relative max-w-2xl text-center`} data-reveal>
        <h2 className="font-display text-[clamp(30px,4.4vw,46px)] leading-tight">{title}</h2>
        <p className="mt-4 text-lg text-muted">{body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={appointmentHref} className={btnPrimary}>
            <CalendarCheck className="size-4" aria-hidden /> Make an appointment
          </a>
          <Link href="/contact" className={btnOutline}>
            Contact us <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
