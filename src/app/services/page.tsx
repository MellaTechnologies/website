import type { Metadata } from "next";
import { appointmentHref } from "@/lib/site";
import { SolutionsGrid } from "@/components/solutions-grid";
import { WorkCarousel } from "@/components/work-carousel";
import { CTASection, PageHero, container, Eyebrow } from "@/components/ui";

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

      {/* Core services */}
      <section className="py-16 sm:py-20">
        <div className={container}>
          <Eyebrow>Our services</Eyebrow>
          <h2 className="mb-10 max-w-2xl font-display text-[clamp(30px,4vw,44px)] leading-tight">
            Our core services
          </h2>
          <SolutionsGrid />
          <p className="mt-10 text-center text-muted">
            Not on the list? If it is done by hand today, we can digitize it.{" "}
            <a href={appointmentHref} className="font-semibold text-accent underline-offset-4 hover:underline">
              Tell us about it
            </a>
          </p>
        </div>
      </section>

      {/* Selected work */}
      <WorkCarousel />

      <CTASection />
    </main>
  );
}
