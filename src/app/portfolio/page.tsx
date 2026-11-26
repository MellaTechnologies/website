import type { Metadata } from "next";
import { CTASection, PageHero, container } from "@/components/ui";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { T } from "@/lib/i18n";

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
        eyebrow={<T en="Portfolio" am="ፖርትፎሊዮ" />}
        title={<T en="Manual to digital, measured in results" am="ከእጅ ወደ ዲጂታል፣ በውጤት የሚለካ" />}
        lead={
          <T
            en="A selection of the processes we've digitized for businesses like yours. Each started with one notebook, spreadsheet or paper form."
            am="እንደ እርስዎ ላሉ ንግዶች ዲጂታል ካደረግናቸው ሂደቶች መካከል የተመረጡ። እያንዳንዱ በአንድ ደብተር፣ ስፕረድሺት ወይም የወረቀት ቅጽ ተጀመረ።"
          />
        }
      />

      <section className="py-16 sm:py-20">
        <div className={container}>
          <PortfolioGrid />
          <p className="mt-10 text-center text-sm text-muted/80">
            <T en="Case studies shown are illustrative examples." am="የሚታዩት ጥናቶች ለማሳያ የቀረቡ ናቸው።" />
          </p>
        </div>
      </section>

      <CTASection title={<T en="Your business could be next" am="ንግድዎ ቀጣዩ ሊሆን ይችላል" />} />
    </main>
  );
}
