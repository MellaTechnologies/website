import type { Metadata } from "next";
import { CTASection, PageHero, container } from "@/components/ui";
import { PortfolioGrid } from "@/components/portfolio-grid";

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
          <PortfolioGrid />
          <p className="mt-10 text-center text-sm text-muted/80">
            Case studies shown are illustrative examples.
          </p>
        </div>
      </section>

      <CTASection title="Your business could be next" />
    </main>
  );
}
