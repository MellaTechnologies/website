import type { Metadata } from "next";
import { CTASection, PageHero, container } from "@/components/ui";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected work from Mella Technologies — how we replaced manual processes with simple digital systems across retail, healthcare, logistics, hospitality, education and services.",
  alternates: { canonical: "/portfolio" },
};

export default function Portfolio() {
  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title="Manual to digital, measured in results"
        lead="A selection of the processes we've digitized for businesses like yours. Each started with one notebook, spreadsheet or paper form."
      />

      <section className="py-16 sm:py-20">
        <div className={container}>
          <ul className="grid gap-6 md:grid-cols-2" data-reveal>
            {caseStudies.map((c) => (
              <li
                key={c.slug}
                className="flex flex-col rounded-2xl border border-line bg-surface p-7 shadow-[0_1px_2px_rgb(44_28_18/0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgb(44_28_18/0.09)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[13px] font-semibold uppercase tracking-wide text-accent/80">{c.industry}</p>
                  <span className="rounded-full bg-accent/10 px-3 py-1 font-display text-sm text-accent">
                    {c.metric}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-2xl">{c.client}</h2>
                <dl className="mt-4 space-y-3 text-[15px] leading-relaxed">
                  <div>
                    <dt className="font-semibold text-ink">Challenge</dt>
                    <dd className="text-muted">{c.challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">What we built</dt>
                    <dd className="text-muted">{c.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Result</dt>
                    <dd className="text-muted">{c.result}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center text-sm text-muted/80">
            Case studies shown are illustrative examples.
          </p>
        </div>
      </section>

      <CTASection title="Your business could be next" />
    </main>
  );
}
