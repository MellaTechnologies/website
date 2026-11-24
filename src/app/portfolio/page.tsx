import type { Metadata } from "next";
import { CTASection, PageHero, container } from "@/components/ui";
import { PortfolioGrid } from "@/components/portfolio-grid";

export const metadata: Metadata = {
  title: "ፖርትፎሊዮ",
  description:
    "ከMella Technologies የተመረጡ ሥራዎች — በችርቻሮ፣ በጤና እንክብካቤ፣ በሎጂስቲክስ፣ በእንግዳ አቀባበል፣ በትምህርትና በአገልግሎቶች ዘርፍ የእጅ ሂደቶችን በቀላል ዲጂታል ሥርዓቶች እንዴት እንደተካናቸው።",
  alternates: { canonical: "/portfolio" },
};

export default function Portfolio() {
  return (
    <main>
      <PageHero
        eyebrow="ፖርትፎሊዮ"
        title="ከእጅ ወደ ዲጂታል፣ በውጤት የሚለካ"
        lead="እንደ እርስዎ ላሉ ንግዶች ዲጂታል ካደረግናቸው ሂደቶች መካከል የተመረጡ። እያንዳንዱ በአንድ ደብተር፣ ስፕረድሺት ወይም የወረቀት ቅጽ ተጀመረ።"
      />

      <section className="py-16 sm:py-20">
        <div className={container}>
          <PortfolioGrid />
          <p className="mt-10 text-center text-sm text-muted/80">
            የሚታዩት ጥናቶች ለማሳያ የቀረቡ ናቸው።
          </p>
        </div>
      </section>

      <CTASection title="ንግድዎ ቀጣዩ ሊሆን ይችላል" />
    </main>
  );
}
