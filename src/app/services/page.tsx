import type { Metadata } from "next";
import { appointmentHref, processSteps } from "@/lib/site";
import { SolutionsGrid } from "@/components/solutions-grid";
import { CTASection, PageHero, card, container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "What Mella Technologies digitizes: stock and inventory, sales and point of sale, customer records, bookings, staff and payroll, reports, forms, Excel-to-app, websites and custom apps — with training and support.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="From paper and spreadsheets to simple systems"
        lead="Pick the processes that slow you down. We connect them as you grow. If it's done by hand today, we can digitize it."
      />

      {/* All solutions */}
      <section className="py-16 sm:py-20">
        <div className={container}>
          <div data-reveal>
            <SolutionsGrid />
          </div>
          <p className="mt-10 text-center text-muted">
            Not on the list? If it is done by hand today, we can digitize it.{" "}
            <a href={appointmentHref} className="font-semibold text-accent underline-offset-4 hover:underline">
              Tell us about it
            </a>
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-line bg-sand py-16 sm:py-20">
        <div className={container}>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="font-display text-[clamp(26px,3.5vw,38px)] leading-tight">A clear path, one process at a time</h2>
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

      {/* Pricing philosophy */}
      <section className="py-16 sm:py-20">
        <div
          className={`${container} max-w-3xl rounded-3xl border border-accent/25 bg-surface p-8 text-center shadow-[0_14px_34px_rgb(44_28_18/0.08)] sm:p-12`}
          data-reveal
        >
          <Eyebrow>Fair pricing</Eyebrow>
          <h2 className="font-display text-[clamp(26px,3.5vw,38px)] leading-tight">
            Small businesses pay small-business prices
          </h2>
          <p className="mt-4 text-lg text-muted">
            Pricing is set by the size of your business, not a fixed package. Start with one process to keep costs low,
            and add more when you&apos;re ready. The first consultation is always free.
          </p>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
