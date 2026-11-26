import type { Metadata } from "next";
import { CTASection, PageHero, container } from "@/components/ui";
import { site } from "@/lib/site";
import { T } from "@/lib/i18n";

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
        eyebrow={<T en="About us" am="ስለ እኛ" />}
        title={<T en="A customer-first software company" am="ደንበኛን ቀዳሚ የምታደርግ የሶፍትዌር ኩባንያ" />}
        lead={
          <T
            en="We believe anything done by hand can be done better digitally. So we start with your customers and your day-to-day work, and build around that."
            am="በእጅ የሚሠራ ማንኛውም ነገር በዲጂታል በተሻለ ሊሠራ እንደሚችል እናምናለን። ስለዚህ ከደንበኞችዎና ከዕለት ተዕለት ሥራዎ እንጀምራለን፣ በዚያም ዙሪያ እንገነባለን።"
          />
        }
      />

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className={`${container} max-w-3xl`} data-reveal>
          <h2 className="font-display text-[clamp(26px,3.5vw,38px)] leading-tight">
            <T en="Our mission" am="ተልዕኮአችን" />
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            <T
              en={`${site.name} replaces the manual steps that slow businesses down — the stock book, the receipt pad, the Excel file passed around — with tools that are faster, safer and easy for your team to use.`}
              am={`${site.name} ንግዶችን የሚያዘገዩ የእጅ ሥራ ሂደቶችን — የዕቃ መዝገብን፣ የደረሰኝ፣ የሚዘዋወረውን የኤክሴል ፋይል — ፈጣን፣ ደህንነታቸው የተጠበቀና ቡድንዎ ለመጠቀም ቀላል በሆኑ ሶፍትዌሮች ይተካል።`}
            />
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            <T
              en="We sit with you first. We learn how your business really runs, then digitize one process at a time or everything at once — whatever fits you. And we stay after launch, because a tool nobody uses helps no one."
              am="መጀመሪያ ከእርስዎ ጋር እንቀመጣለን። ንግድዎ በትክክል እንዴት እንደሚሠራ እንማራለን፣ ከዚያም አንድ ሂደት በአንድ ጊዜ ወይም ሁሉንም በአንድ ላይ ዲጂታል እናደርጋለን — የሚስማማዎትን። ከጀመርን በኋላም እንቆያለን፣ ምክንያቱም ማንም የማይጠቀምበት መሣሪያ ማንንም አይጠቅምም።"
            />
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-y border-line bg-sand py-16 sm:py-20">
        <div className={`${container} grid gap-10 md:grid-cols-[1fr_2fr]`} data-reveal>
          <h2 className="font-display text-[clamp(26px,3.5vw,38px)] leading-tight">
            <T en="Who we are" am="እኛ ማን ነን" />
          </h2>
          <div className="grid gap-x-10 gap-y-6 text-[17px] leading-relaxed text-muted sm:grid-cols-2">

            <p>
              <T
                en={`Before ${site.name}, we worked with multiple local and international companies in freelancing, contractual or long term engagements, learning how real businesses run and what actually helps them.`}
                am={`እኛ ${site.name}ዎች ከበርካታ አገር ውስጥና ዓለም አቀፍ ኩባንያዎች ጋር በፍሪላንስ፣ በውል ወይም በረጅም ጊዜ ተሳትፎ ሠርተናል፣ እውነተኛ ንግዶች እንዴት እንደሚሠሩና በትክክል ምን እንደሚጠቅማቸውም ተምረናል።`}
              />
            </p>
            <p>
              <T
                en="That experience shapes how we work today. We listen first, build around the way your team already works, and keep things simple enough that people actually use them."
                am="ያ ልምድ ዛሬ የምንሠራበትን መንገድ ይቀርጻል። መጀመሪያ እናዳምጣለን፣ ቡድንዎ አስቀድሞ በሚሠራበት ዘይቤ ዙሪያ እንገነባለን፣ ነገሮችንም ሰዎች በትክክል እንዲጠቀሙባቸው በበቂ ሁኔታ ቀላል እናደርጋለን።"
              />
            </p>
            <p>
              <T
                en="And we keep looking ahead — at new tools and better ways of working — so the systems we build stay useful long after launch."
                am="እንዲሁም ወደፊት መመልከታችንን እንቀጥላለን — አዳዲስ ሶፍትዌሮችንና የተሻሉ የአሠራር ዘዴዎችን — ስለዚህ የምንገነባቸው ሥርዓቶች ከጀመሩ ከረጅም ጊዜ በኋላም ጠቃሚ ሆነው ይቆያሉ።"
              />
            </p>
          </div>
        </div>
      </section>

      <CTASection title={<T en="Let's talk about your business" am="ስለስራዎ እንነጋገር" />} />
    </main>
  );
}
