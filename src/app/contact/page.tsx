import type { Metadata } from "next";
import { CalendarCheck, Mail, Phone } from "lucide-react";
import { appointmentHref, site } from "@/lib/site";
import { PageHero, card, container } from "@/components/ui";
import { MoveButton } from "@/components/move-button";

export const metadata: Metadata = {
  title: "ያግኙን",
  description:
    "Mella Technologies ያግኙ። ይደውሉልን ወይም ኢሜይል ይላኩልን፣ ወይም ዲጂታል መሆን ለንግድዎ ምን እንደሚመስል ለማየት ነፃ የቦታ ላይ ምክክር ይያዙ።",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="ያግኙን"
        title="ስለ ንግድዎ እንነጋገር"
        lead="ጥያቄ ካለዎት ይደውሉልን ወይም ኢሜይል ይላኩልን፣ ወይም በቢሮዎ ወይም በእኛ ቢሮ ነፃ ምክክር ይያዙ። የወረቀት ሥራዎን እንመለከታለን፣ ዲጂታል መሆን ምን እንደሚመስል እናሳይዎታለን — ምንም ግዴታ የለም።"
      />

      {/* Contact cards */}
      <section className="py-16 sm:py-20">
        <div className={`${container} grid gap-5 md:grid-cols-3`} data-reveal>
          <div className={`${card} text-center`}>
            <Phone className="mx-auto mb-4 size-7 text-accent" strokeWidth={1.6} aria-hidden />
            <h2 className="text-lg font-semibold">ይደውሉልን</h2>
            <p className="mt-1 mb-5 text-muted">ጥያቄዎችን ለመመለስ ደስተኞች ነን።</p>
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
            <h2 className="text-lg font-semibold">ኢሜይል ይላኩልን</h2>
            <p className="mt-1 mb-5 text-muted">ምን ዲጂታል ማድረግ እንደሚፈልጉ ይንገሩን።</p>
            <MoveButton href={`mailto:${site.email}`} showArrow={false}>
              {site.email}
            </MoveButton>
          </div>
          <div className="rounded-2xl border border-accent/25 bg-surface p-6 text-center shadow-[0_14px_34px_rgb(44_28_18/0.08)]">
            <CalendarCheck className="mx-auto mb-4 size-7 text-accent" strokeWidth={1.6} aria-hidden />
            <h2 className="text-lg font-semibold">ጉብኝት ይያዙ</h2>
            <p className="mt-1 mb-5 text-muted">ነፃ የቦታ ላይ ምክክር።</p>
            <MoveButton href={appointmentHref} variant="primary" showArrow={false}>
              <CalendarCheck className="size-[1.1em]" aria-hidden /> ቀጠሮ ይያዙ
            </MoveButton>
          </div>
        </div>
      </section>
    </main>
  );
}
