import type { Metadata } from "next";
import { CTASection, PageHero, container } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "ስለ እኛ",
  description:
    "Mella Technologies ደንበኛን ቀዳሚ የምታደርግ በኢትዮጵያ የምትገኝ የሶፍትዌር ኩባንያ ናት። ከእርስዎ ጋር እንቀመጣለን፣ ንግድዎ እንዴት እንደሚሠራ እንማራለን፣ የእጅ ሥራ ደረጃዎችንም በቀላል ዲጂታል ሥርዓቶች እንተካለን — ከስልጠናና ድጋፍ ጋር።",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="ስለ እኛ"
        title="ደንበኛን ቀዳሚ የምታደርግ የሶፍትዌር ኩባንያ"
        lead="በእጅ የሚሠራ ማንኛውም ነገር በዲጂታል በተሻለ ሊሠራ እንደሚችል እናምናለን። ስለዚህ ከደንበኞችዎና ከዕለት ተዕለት ሥራዎ እንጀምራለን፣ በዚያም ዙሪያ እንገነባለን።"
      />

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className={`${container} max-w-3xl`} data-reveal>
          <h2 className="font-display text-[clamp(26px,3.5vw,38px)] leading-tight">ተልዕኮአችን</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            {site.name} ንግዶችን የሚያዘገዩ የእጅ ሥራ ደረጃዎችን — የዕቃ መዝገብን፣ የደረሰኝ ደብተርን፣ የሚዘዋወረውን የኤክሴል ፋይል — ፈጣን፣ ደህንነታቸው የተጠበቀና ቡድንዎ ለመጠቀም ቀላል በሆኑ መሣሪያዎች ይተካል።
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            መጀመሪያ ከእርስዎ ጋር እንቀመጣለን። ንግድዎ በትክክል እንዴት እንደሚሠራ እንማራለን፣ ከዚያም አንድ ሂደት በአንድ ጊዜ ወይም ሁሉንም በአንድ ላይ ዲጂታል እናደርጋለን — የሚስማማዎትን። ከጀመርን በኋላም እንቆያለን፣ ምክንያቱም ማንም የማይጠቀምበት መሣሪያ ማንንም አይጠቅምም።
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-y border-line bg-sand py-16 sm:py-20">
        <div className={`${container} grid gap-10 md:grid-cols-[1fr_2fr]`} data-reveal>
          <h2 className="font-display text-[clamp(26px,3.5vw,38px)] leading-tight">እኛ ማን ነን</h2>
          <div className="grid gap-x-10 gap-y-6 text-[17px] leading-relaxed text-muted sm:grid-cols-2">

            <p>
              እኛ የገንቢዎች፣ የዲዛይነሮችና የገበያተኞች ቡድን ነን። ከ{site.name} በፊት፣ ከበርካታ አገር ውስጥና ዓለም አቀፍ ኩባንያዎች ጋር በፍሪላንስ፣ በውል ወይም በረጅም ጊዜ ተሳትፎ ሠርተናል፣ እውነተኛ ንግዶች እንዴት እንደሚሠሩና በትክክል ምን እንደሚጠቅማቸውም ተምረናል።
            </p>
            <p>
              ያ ልምድ ዛሬ የምንሠራበትን መንገድ ይቀርጻል። መጀመሪያ እናዳምጣለን፣ ቡድንዎ አስቀድሞ በሚሠራበት ዘይቤ ዙሪያ እንገነባለን፣ ነገሮችንም ሰዎች በትክክል እንዲጠቀሙባቸው በበቂ ሁኔታ ቀላል እናደርጋለን።
            </p>
            <p>
              እንዲሁም ወደፊት መመልከታችንን እንቀጥላለን — አዳዲስ መሣሪያዎችንና የተሻሉ የአሠራር ዘዴዎችን — ስለዚህ የምንገነባቸው ሥርዓቶች ከጀመሩ ከረጅም ጊዜ በኋላም ጠቃሚ ሆነው ይቆያሉ።
            </p>
          </div>
        </div>
      </section>

      <CTASection title="ስለ ንግድዎ እንነጋገር" />
    </main>
  );
}
