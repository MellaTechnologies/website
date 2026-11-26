import type { Metadata } from "next";
import { appointmentHref } from "@/lib/site";
import { SolutionsGrid } from "@/components/solutions-grid";
// import { WorkCarousel } from "@/components/work-carousel"; // temporarily hidden — no projects yet
import { CTASection, PageHero, container, Eyebrow } from "@/components/ui";
import { T } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "አገልግሎቶች",
  description:
    "Mella Technologies ዲጂታል የሚያደርገው፦ ዕቃና ክምችት፣ ሽያጭና የሽያጭ ነጥብ፣ የደንበኛ መዝገቦች፣ ቀጠሮዎች፣ ሠራተኞችና ደመወዝ፣ ሪፖርቶች፣ ቅጾች፣ ኤክሴልን ወደ መተግበሪያ፣ ድር ጣቢያዎችና ብጁ መተግበሪያዎች — ከስልጠናና ድጋፍ ጋር።",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow={<T en="Services" am="አገልግሎቶች" />}
        title={<T en="From paper and spreadsheets to simple systems" am="ከወረቀትና ስፕረድሺት ወደ ቀላል ሥርዓቶች" />}
        lead={
          <T
            en="Pick the processes that slow you down. We connect them as you grow. If it's done by hand today, we can digitize it."
            am="የሚያዘገዩዎትን ሂደቶች ይምረጡ። እርስዎ ሲያድጉ እናገናኛቸዋለን። ዛሬ በእጅ የሚሠራ ከሆነ ዲጂታል ልናደርገው እንችላለን።"
          />
        }
      />

      {/* Core services */}
      <section className="py-16 sm:py-20">
        <div className={container}>
          <Eyebrow>
            <T en="Our services" am="አገልግሎቶቻችን" />
          </Eyebrow>
          <h2 className="mb-10 max-w-2xl font-display text-[clamp(30px,4vw,44px)] leading-tight">
            <T en="Our core services" am="ዋና ዋና አገልግሎቶቻችን" />
          </h2>
          <SolutionsGrid />
          <p className="mt-10 text-center text-muted">
            <T
              en="Not on the list? If it is done by hand today, we can digitize it. "
              am="በዝርዝሩ ውስጥ የለም? ዛሬ በእጅ የሚሠራ ከሆነ ዲጂታል ልናደርገው እንችላለን። "
            />
            <a href={appointmentHref} className="font-semibold text-accent underline-offset-4 hover-underline">
              <T en="Tell us about it" am="ስለ እሱ ይንገሩን" />
            </a>
          </p>
        </div>
      </section>

      {/* Selected work — temporarily hidden until we have real projects to show.
          Restore by uncommenting this and the WorkCarousel import above. */}
      {/* <WorkCarousel /> */}

      <CTASection />
    </main>
  );
}
