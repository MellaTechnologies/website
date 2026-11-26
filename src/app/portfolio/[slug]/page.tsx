import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/site";
import { CTASection, container, Eyebrow, heroSky, SkyArt } from "@/components/ui";
import { T, type Dict } from "@/lib/i18n";

type Study = (typeof caseStudies)[number];

function getStudy(slug: string): Study | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getStudy(slug);
  if (!c) return { title: "Case study" };
  return {
    title: `${c.client.en} — Case study`,
    description: c.solution.en,
    alternates: { canonical: `/portfolio/${c.slug}` },
  };
}

/** Image frame — real image when we have one, warm brand panel otherwise (no generated art yet). */
function Frame({ image, className = "" }: { image?: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[22px] border border-line ${className}`}>
      {image ? (
        <Image src={image} alt="" fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f4ecdd,#e8926a_55%,#b5461c)]" />
      )}
    </div>
  );
}

/** One "Lead — detail" bullet in a single language: the lead renders bold. */
function PointBody({ text }: { text: string }) {
  const [lead, ...rest] = text.split(" — ");
  return (
    <>
      <span className="font-semibold text-ink">{lead}</span>
      {rest.length ? ` — ${rest.join(" — ")}` : ""}
    </>
  );
}

/** Bullet list where each item is "Lead — detail" in both languages. */
function Points({ items }: { items: Dict[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((p) => (
        <li key={p.en} className="flex gap-3 text-lg leading-relaxed text-muted">
          <span aria-hidden className="mt-[0.6rem] size-1.5 shrink-0 rounded-full bg-accent" />
          <span>
            <T en={<PointBody text={p.en} />} am={<PointBody text={p.am} />} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getStudy(slug);
  if (!c) notFound();

  const image = "image" in c ? (c as { image: string }).image : undefined;
  const more = caseStudies.filter((s) => s.slug !== c.slug).slice(0, 2);

  // Two-paragraph summary built from the project facts, so every case reads at a consistent length.
  const intro: Dict = {
    en: `Like many businesses in ${c.industry.en.toLowerCase()}, ${c.client.en} still ran the day on paper. ${c.challenge.en} As the business grew, keeping up this way only got harder — and the small mistakes added up. They needed one simple digital system the whole team could use day to day, with nothing new to manage.`,
    am: `እንደ ${c.industry.am} ዘርፍ እንደ ብዙ ንግዶች፣ ${c.client.am} አሁንም ቀኑን በወረቀት ያከናውን ነበር። ${c.challenge.am} ንግዱ እያደገ ሲሄድ በዚህ መንገድ መቀጠል ይበልጥ አስቸጋሪ ሆነ — ጥቃቅን ስህተቶችም ተደማመሩ። መላው ቡድን ዕለት ዕለት ሊጠቀምበት የሚችል፣ አዲስ የሚያስተዳድሩት ነገር የሌለው አንድ ቀላል ዲጂታል ሥርዓት ያስፈልጋቸው ነበር።`,
  };
  const approach: Dict = {
    en: `We worked side by side with ${c.client.en}, learning how the team already worked before building anything. ${c.solution.en} ${c.result.en}`,
    am: `ከ${c.client.am} ጎን ለጎን ሠራን፣ ማንኛውንም ነገር ከመገንባታችን በፊት ቡድኑ አስቀድሞ እንዴት እንደሚሠራ ተማርን። ${c.solution.am} ${c.result.am}`,
  };

  return (
    <main>
      {/* Hero */}
      <section className={`relative overflow-hidden ${heroSky} pt-32 pb-14 sm:pt-36`}>
        <SkyArt priority />
        <div className={`${container} relative`} data-enter>
          <div style={{ "--d": "0s" } as React.CSSProperties}>
            <Link
              href="/portfolio"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover-underline"
            >
              <ArrowLeft className="size-4" aria-hidden /> <T en="All work" am="ሁሉም ሥራዎች" />
            </Link>
          </div>
          <div style={{ "--d": "0.06s" } as React.CSSProperties}>
            <Eyebrow>
              <T en={c.industry.en} am={c.industry.am} />
            </Eyebrow>
          </div>
          <h1
            style={{ "--d": "0.12s" } as React.CSSProperties}
            className="max-w-3xl font-display text-[clamp(36px,6vw,60px)] leading-[1.05]"
          >
            <T en={c.client.en} am={c.client.am} />
          </h1>
          <p style={{ "--d": "0.18s" } as React.CSSProperties} className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            <T en={c.solution.en} am={c.solution.am} />
          </p>
        </div>
      </section>

      {/* Hero image */}
      <section className="pb-14">
        <div className={container}>
          <Frame image={image} className="aspect-[16/9]" />
          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-ink/90 sm:text-xl" data-reveal>
            <p>
              <T en={intro.en} am={intro.am} />
            </p>
            <p>
              <T en={approach.en} am={approach.am} />
            </p>
          </div>
        </div>
      </section>

      {/* Challenge + solution */}
      <section className="py-16 sm:py-20">
        <div className={`${container} grid gap-12 md:grid-cols-2`} data-reveal>
          <div>
            <h2 className="font-display text-[clamp(24px,3.2vw,34px)] leading-tight">
              <T en="The challenge" am="ተግዳሮቱ" />
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              <T en={c.challenge.en} am={c.challenge.am} />
            </p>
            <Points items={c.challengePoints} />
          </div>
          <div>
            <h2 className="font-display text-[clamp(24px,3.2vw,34px)] leading-tight">
              <T en="The solution" am="መፍትሔው" />
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              <T en={c.solution.en} am={c.solution.am} />
            </p>
          </div>
        </div>
      </section>

      {/* Solution features — hover a row to reveal its description */}
      <section className="border-t border-line py-16 sm:py-20">
        <div className={`${container} grid gap-10 md:grid-cols-[1fr_1.3fr]`} data-reveal>
          <h2 className="font-display text-[clamp(26px,3.6vw,40px)] leading-tight">
            <T en="Solution features" am="የመፍትሔው ባህሪያት" />
          </h2>
          <ul className="border-b border-line">
            {c.solutionPoints.map((p) => {
              const en = p.en.split(" — ");
              const am = p.am.split(" — ");
              return (
                <li key={p.en} className="feat-row border-t border-line py-5">
                  <div className="flex items-start gap-4">
                    <span aria-hidden className="mt-[0.7rem] size-2 shrink-0 bg-accent" />
                    <div>
                      <p className="feat-name text-xl font-medium text-ink sm:text-2xl">
                        <T en={en[0]} am={am[0]} />
                      </p>
                      <div className="feat-desc">
                        <p className="mt-1.5 max-w-md leading-relaxed text-muted">
                          <T en={en.slice(1).join(" — ")} am={am.slice(1).join(" — ")} />
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* More case studies */}
      <section className="border-t border-line py-16 sm:py-20">
        <div className={container}>
          <h2 className="font-display text-[clamp(22px,3vw,32px)] leading-tight" data-reveal>
            <T en="More work" am="ተጨማሪ ሥራዎች" />
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2" data-reveal>
            {more.map((m) => {
              const mImg = "image" in m ? (m as { image: string }).image : undefined;
              return (
                <li key={m.slug}>
                  <Link href={`/portfolio/${m.slug}`} className="group block">
                    <Frame image={mImg} className="aspect-[16/10]" />
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                          <T en={m.industry.en} am={m.industry.am} />
                        </p>
                        <h3 className="font-display text-xl">
                          <T en={m.client.en} am={m.client.am} />
                        </h3>
                      </div>
                      <ArrowUpRight className="size-5 text-accent" aria-hidden />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CTASection title={<T en="Want a solution like this one?" am="እንደዚህ ያለ መፍትሔ ይፈልጋሉ?" />} />
    </main>
  );
}
