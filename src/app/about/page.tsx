import type { Metadata } from "next";
import { CTASection, PageHero, container } from "@/components/ui";
import { site } from "@/lib/site";

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
        <div className={`${container} max-w-3xl`} data-reveal>
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
      </section>

      {/* Who we are */}
      <section className="border-y border-line bg-sand py-16 sm:py-20">
        <div className={`${container} grid gap-10 md:grid-cols-[1fr_2fr]`} data-reveal>
          <h2 className="font-display text-[clamp(26px,3.5vw,38px)] leading-tight">Who we are</h2>
          <div className="grid gap-x-10 gap-y-6 text-[17px] leading-relaxed text-muted sm:grid-cols-2">
            <p>
              {site.name} was founded by three university graduates — Yohana, Rediet and Haymanot — around one
              belief: that the everyday work businesses still do by hand can be done better digitally.
            </p>
            <p>
              We are a team of developers, designers and marketers. Before {site.name}, we worked as freelancers
              on a wide range of projects, learning how real businesses run and what actually helps them.
            </p>
            <p>
              That experience shapes how we work today. We listen first, build around the way your team already
              works, and keep things simple enough that people actually use them.
            </p>
            <p>
              And we keep looking ahead — at new tools and better ways of working — so the systems we build stay
              useful long after launch.
            </p>
          </div>
        </div>
      </section>

      <CTASection title="Let's talk about your business" />
    </main>
  );
}
