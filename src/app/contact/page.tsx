import type { Metadata } from "next";
import { CalendarCheck, Mail, Phone } from "lucide-react";
import { appointmentHref, site } from "@/lib/site";
import { PageHero, card, container } from "@/components/ui";
import { MoveButton } from "@/components/move-button";

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
                <MoveButton key={p.tel} href={`tel:${p.tel}`} showArrow={false}>
                  {p.display}
                </MoveButton>
              ))}
            </div>
          </div>
          <div className={`${card} text-center`}>
            <Mail className="mx-auto mb-4 size-7 text-accent" strokeWidth={1.6} aria-hidden />
            <h2 className="text-lg font-semibold">Email us</h2>
            <p className="mt-1 mb-5 text-muted">Tell us what you&apos;d like to digitize.</p>
            <MoveButton href={`mailto:${site.email}`} showArrow={false}>
              {site.email}
            </MoveButton>
          </div>
          <div className="rounded-2xl border border-accent/25 bg-surface p-6 text-center shadow-[0_14px_34px_rgb(44_28_18/0.08)]">
            <CalendarCheck className="mx-auto mb-4 size-7 text-accent" strokeWidth={1.6} aria-hidden />
            <h2 className="text-lg font-semibold">Book a visit</h2>
            <p className="mt-1 mb-5 text-muted">A free on-site consultation.</p>
            <MoveButton href={appointmentHref} variant="primary" showArrow={false}>
              <CalendarCheck className="size-[1.1em]" aria-hidden /> Make an appointment
            </MoveButton>
          </div>
        </div>
      </section>
    </main>
  );
}
