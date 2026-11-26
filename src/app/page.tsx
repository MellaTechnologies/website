import Image from "next/image";
import { CalendarCheck } from "lucide-react";
import { Orb } from "@/components/orb";
import { Preloader } from "@/components/preloader";
// import { StackedWork } from "@/components/stacked-work"; // temporarily hidden — no projects yet
import { WhyMella } from "@/components/why-mella";
import { MoveButton } from "@/components/move-button";
import { CTASection, SkyArt, StatStrip, container, Eyebrow, heroSky } from "@/components/ui";
import { appointmentHref } from "@/lib/site";
import { T, type Dict } from "@/lib/i18n";

/** Hero slot holding the glass object; the preloader animates its orb into this slot on load. */
function HeroObject() {
  return (
    <div id="hero-orb-slot" aria-hidden className="relative mx-auto aspect-square w-full max-w-[240px] sm:max-w-xs lg:max-w-sm">
      <Orb />
    </div>
  );
}

const pillars: { num: string; title: Dict; img: string; body: Dict }[] = [
  {
    num: "01",
    title: { en: "Digitize", am: "ዲጂታል ማድረግ" },
    img: "/nat-digitize.png",
    body: {
      en: "We replace the stock book, receipt pad and shared Excel file with simple tools built around how you work.",
      am: "የዕቃ መዝገብን፣ የደረሰኝ ደብተርንና የጋራ የኤክሴል ፋይልን በሥራ ዘይቤዎ ዙሪያ በተገነቡ ቀላል ሶፍትዌሮች እንተካለን።",
    },
  },
  {
    num: "02",
    title: { en: "Train", am: "ማሠልጠን" },
    img: "/nat-train.png",
    body: {
      en: "We train your staff hands-on until they're confident — so nobody slips back to the notebook.",
      am: "ሠራተኞችዎ እስኪተማመኑ ድረስ በተግባር እናሠለጥናለን — ማንም ወደ ደብተሩ አይመለስም።",
    },
  },
  {
    num: "03",
    title: { en: "Support", am: "ድጋፍ" },
    img: "/nat-support.png",
    body: {
      en: "A local team you can call or meet. We check in, fix issues fast, and grow the system with you.",
      am: "የሚደውሉለት እና በአቅራቢያዋ የሚገኝ። እንከታተላለን፣ ችግሮችን በፍጥነት እናስተካክላለን፣ ሥርዓቱንም ከእርስዎ ጋር እናሳድጋለን።",
    },
  },
];

export default function Home() {
  return (
    <>
      <Preloader />
    <main>
      {/* Hero */}
      <section
        aria-labelledby="hero-title"
        className={`relative overflow-hidden ${heroSky} pt-28 pb-20 sm:pt-36 sm:pb-28`}
      >
        <SkyArt priority />
        <div className={`${container} relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]`}>
          <div data-enter>
            <h1
              id="hero-title"
              style={{ "--d": "0s" } as React.CSSProperties}
              className="font-display text-[clamp(40px,6.4vw,66px)] leading-[1.04]"
            >
              <T en="Let's optimize your workflow" am="የሥራ ፍሰትዎን እናሻሽል" />
            </h1>
            <p style={{ "--d": "0.12s" } as React.CSSProperties} className="mt-5 max-w-xl text-lg text-muted">
              <T
                en="We turn paper records, notebooks and spreadsheets into simple digital systems — so you spend more time on your customers."
                am="የወረቀት መዝገቦችን፣ ደብተሮችንና ስፕረድሺቶችን ወደ ቀላል ዲጂታል ሥርዓቶች እንቀይራለን — ስለሆነም ለደንበኞችዎ የበለጠ ጊዜ ይሰጣሉ።"
              />
            </p>
            <div style={{ "--d": "0.27s" } as React.CSSProperties} className="mt-9 flex flex-wrap gap-3">
              <MoveButton href={appointmentHref} variant="primary" showArrow={false}>
                <CalendarCheck className="size-[1.1em]" aria-hidden /> <T en="Make an appointment" am="ቀጠሮ ይያዙ" />
              </MoveButton>
              <MoveButton href="/services">
                <T en="See what we digitize" am="ምን ዲጂታል እንደምናደርግ ይመልከቱ" />
              </MoveButton>
            </div>
          </div>

          <HeroObject />
        </div>
      </section>

      <StatStrip />

      {/* What we do — numbered pillars */}
      <section aria-labelledby="pillars-title" className="py-20 sm:py-24">
        <div className={container}>
          <Eyebrow>
            <T en="How we work" am="እንዴት እንደምንሠራ" />
          </Eyebrow>
          <h2 id="pillars-title" className="max-w-2xl font-display text-[clamp(30px,4vw,44px)] leading-tight">
            <T en="Anything done by hand can be done better digitally" am="በእጅ የሚሠራ ማንኛውም ነገር በዲጂታል በተሻለ ሊሠራ ይችላል" />
          </h2>
          <div className="mt-12 grid items-start gap-5 md:grid-cols-3" data-reveal>
            {pillars.map(({ num, title, img, body }) => (
              <div
                key={num}
                className="howcard overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_2px_rgb(44_28_18/0.04)]"
              >
                {/* Text only at rest; the illustration expands in above on hover (see .howcard rules in globals.css). */}
                <div className="howcard-reveal">
                  <div>
                    <div className="relative aspect-[16/9] border-b border-line">
                      <Image src={img} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="howcard-img object-cover" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">
                      <T en={title.en} am={title.am} />
                    </h3>
                    <span className="font-display text-2xl text-accent/30">{num}</span>
                  </div>
                  <p className="mt-2 leading-relaxed text-muted">
                    <T en={body.en} am={body.am} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work — temporarily hidden until we have real projects to show.
          Restore by uncommenting this and the StackedWork import above. */}
      {/* <StackedWork /> */}

      {/* Why Mella — full-screen stacking card with a cursor spotlight that reverses colours */}
      <WhyMella />

      <CTASection />
    </main>
    </>
  );
}
