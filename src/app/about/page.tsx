import type { Metadata } from "next";
import { CTASection, PageHero, StatStrip, card, container, Eyebrow } from "@/components/ui";
import { processSteps, site, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Mella Technologies is a customer-first software company in Ethiopia. We sit with you, learn how your business runs, and replace manual steps with simple digital systems — training and support included.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="A customer-first software company"
        lead="We believe anything done by hand can be done better digitally. So we start with your customers and your day-to-day work, and build around that."
      />

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className={`${container} grid gap-10 md:grid-cols-[1.4fr_1fr]`} data-reveal>
          <div>
            <h2 className="font-display text-[clamp(26px,3.5vw,38px)] leading-tight">Our mission</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              {site.name} replaces the manual steps that slow businesses down — the stock book, the receipt pad, the
              Excel file passed around — with tools that are faster, safer and easy for your team to use.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              We sit with you first. We learn how your business really runs, then digitize one process at a time or
              everything at once — whatever fits you. And we stay after launch, because a tool nobody uses helps no one.
            </p>
          </div>
          <div className="rounded-3xl border border-accent/25 bg-surface p-8 text-center shadow-[0_14px_34px_rgb(44_28_18/0.08)]">
            <p className="font-display text-4xl text-accent">Manual → Digital</p>
            <p className="mt-3 text-xl font-semibold">One process at a time</p>
            <p className="mt-1 text-muted">Start with what costs you the most time</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-line bg-sand py-16 sm:py-20">
        <div className={container}>
          <Eyebrow>What we stand for</Eyebrow>
          <h2 className="font-display text-[clamp(26px,3.5vw,38px)] leading-tight">Why businesses choose us</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
            {values.map((v) => (
              <li key={v.title} className={card}>
                <h3 className="mb-2 text-lg font-semibold">{v.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20">
        <div className={container}>
          <Eyebrow>How a project runs</Eyebrow>
          <h2 className="font-display text-[clamp(26px,3.5vw,38px)] leading-tight">From first visit to ongoing support</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-5 sm:grid-cols-2" data-reveal>
            {processSteps.map((p) => (
              <li key={p.step} className={card}>
                <span className="font-display text-3xl text-accent/40">{p.step}</span>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <StatStrip />
      <CTASection title="Let's talk about your business" />
    </main>
  );
}
