import type { Metadata } from "next";
import { CalendarCheck, Mail, Phone } from "lucide-react";
import { appointmentHref, processSteps, site } from "@/lib/site";
import { PageHero, btnOutline, btnPrimary, card, container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mella Technologies. Call or email us, or book a free on-site consultation to see what going digital would look like for your business.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your business"
        lead="Call or email us with a question, or book a free consultation at your office or ours. We'll look at your paperwork and show you what going digital would look like — no obligation."
      />

      {/* Contact cards */}
      <section className="py-16 sm:py-20">
        <div className={`${container} grid gap-5 md:grid-cols-3`} data-reveal>
          <div className={`${card} text-center`}>
            <Phone className="mx-auto mb-4 size-7 text-accent" strokeWidth={1.6} aria-hidden />
            <h2 className="text-lg font-semibold">Call us</h2>
            <p className="mt-1 mb-5 text-muted">We&apos;re happy to answer questions.</p>
            <div className="flex flex-col items-center gap-2">
              {site.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className={btnOutline}>
                  {p.display}
                </a>
              ))}
            </div>
          </div>
          <div className={`${card} text-center`}>
            <Mail className="mx-auto mb-4 size-7 text-accent" strokeWidth={1.6} aria-hidden />
            <h2 className="text-lg font-semibold">Email us</h2>
            <p className="mt-1 mb-5 text-muted">Tell us what you&apos;d like to digitize.</p>
            <a href={`mailto:${site.email}`} className={btnOutline}>
              {site.email}
            </a>
          </div>
          <div className="rounded-2xl border border-accent/25 bg-surface p-6 text-center shadow-[0_14px_34px_rgb(44_28_18/0.08)]">
            <CalendarCheck className="mx-auto mb-4 size-7 text-accent" strokeWidth={1.6} aria-hidden />
            <h2 className="text-lg font-semibold">Book a visit</h2>
            <p className="mt-1 mb-5 text-muted">A free on-site consultation.</p>
            <a href={appointmentHref} className={btnPrimary}>
              <CalendarCheck className="size-4" aria-hidden /> Make an appointment
            </a>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="border-y border-line bg-sand py-16 sm:py-20">
        <div className={container}>
          <Eyebrow>What to expect</Eyebrow>
          <h2 className="font-display text-[clamp(26px,3.5vw,38px)] leading-tight">After you reach out</h2>
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
    </main>
  );
}
