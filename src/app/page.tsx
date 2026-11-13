import {
  ArrowRight,
  BadgePercent,
  BarChart3,
  Boxes,
  CalendarCheck,
  FileCheck,
  Globe,
  GraduationCap,
  HeartHandshake,
  LifeBuoy,
  Mail,
  MessagesSquare,
  Phone,
  ScanBarcode,
  Sheet,
  SlidersHorizontal,
  Smartphone,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Header } from "@/components/header";
import { Logo, LogoMark } from "@/components/logo";
import { appointmentHref, site, solutions } from "@/lib/site";

const solutionIcons: Record<(typeof solutions)[number]["slug"], LucideIcon> = {
  inventory: Boxes,
  sales: ScanBarcode,
  customers: Users,
  bookings: CalendarCheck,
  staff: UserRound,
  reports: BarChart3,
  forms: FileCheck,
  spreadsheets: Sheet,
  websites: Globe,
  custom: Smartphone,
};

const whyUs = [
  {
    icon: HeartHandshake,
    title: "Customer first",
    body: "We start by listening to how you and your customers work today, and design around that.",
  },
  {
    icon: SlidersHorizontal,
    title: "Built around you",
    body: "Digitize one process first or everything at once. You choose, and we grow with you.",
  },
  {
    icon: BadgePercent,
    title: "Affordable",
    body: "Pricing set by the size of your business, so small businesses pay small-business prices.",
  },
  {
    icon: MessagesSquare,
    title: "Free consultation",
    body: "We visit, look at your current paperwork and show you what going digital would look like.",
  },
  {
    icon: GraduationCap,
    title: "Full training",
    body: "We train your staff until they are confident, so nobody goes back to the notebook.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing support",
    body: "After launch we check in regularly and fix issues quickly. A local team you can call or meet.",
  },
];

const container = "mx-auto max-w-6xl px-5";
const h2 = "font-display text-[clamp(30px,4vw,42px)] leading-tight";
const card =
  "rounded-2xl border border-line bg-plum-card p-6 transition duration-200 hover:-translate-y-0.5 hover:border-orchid/45";
const btnPrimary =
  "inline-flex items-center gap-2 rounded-full bg-orchid px-6 py-3 font-semibold text-ink transition hover:-translate-y-px hover:bg-orchid-dark";
const btnOutline =
  "inline-flex items-center gap-2 rounded-full border border-orchid px-6 py-3 font-semibold text-orchid transition hover:bg-orchid/10";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section
          aria-labelledby="hero-title"
          className="bg-[radial-gradient(600px_360px_at_85%_20%,rgb(242_160_245/0.16),transparent_70%),radial-gradient(500px_300px_at_10%_90%,rgb(242_160_245/0.08),transparent_70%)] py-20 sm:py-28"
        >
          <div className={`${container} grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]`}>
            <div>
              <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-orchid">
                Welcome to {site.name}
              </p>
              <h1 id="hero-title" className="font-display text-[clamp(38px,6vw,62px)] leading-[1.1]">
                From manual work to digital — built around your customers
              </h1>
              <p className="mt-5 text-lg font-semibold tracking-wide text-orchid">Customer first · Reliable · Affordable</p>
              <p className="mt-4 max-w-xl text-lg text-mauve">
                We turn paper records, notebooks and spreadsheets into simple digital systems — so you spend less time
                on paperwork and more time on your customers.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={appointmentHref} className={btnPrimary}>
                  <CalendarCheck className="size-4" aria-hidden /> Make an appointment
                </a>
                <a href="#solutions" className={btnOutline}>
                  See what we digitize <ArrowRight className="size-4" aria-hidden />
                </a>
              </div>
            </div>

            <div aria-hidden className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgb(242_160_245/0.28),transparent_65%)]" />
              <div className="absolute inset-[14%] grid place-items-center rounded-[48%_48%_24px_24px] border border-orchid/40 bg-plum-card/60">
                <LogoMark className="h-40 w-[132px] text-orchid" />
              </div>
            </div>
          </div>
        </section>

        {/* Intro + module teaser */}
        <section id="about" aria-labelledby="about-title" className="py-16 sm:py-22">
          <div className={`${container} grid items-center gap-10 md:grid-cols-[1.4fr_1fr]`}>
            <div>
              <h2 id="about-title" className={h2}>
                Anything done by hand can be done better digitally
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-mauve">
                {site.name} is a customer-first software company. We sit with you, learn how your business runs, and
                replace the manual steps — the stock book, the receipt pad, the Excel file passed around — with tools
                that are faster, safer and easy for your team to use.
              </p>
            </div>
            <div className="rounded-3xl border border-orchid/40 bg-plum-card p-8 text-center">
              <p className="font-display text-4xl text-orchid">Manual → Digital</p>
              <p className="mt-3 text-xl font-semibold">One process at a time</p>
              <p className="mt-1 text-mauve">Start with what costs you the most time</p>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section id="why-us" aria-labelledby="why-title" className="bg-plum-deep py-16 sm:py-22">
          <div className={container}>
            <h2 id="why-title" className={h2}>
              Why us?
            </h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whyUs.map(({ icon: Icon, title, body }) => (
                <li key={title} className={card}>
                  <Icon className="mb-4 size-7 text-orchid" strokeWidth={1.6} aria-hidden />
                  <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                  <p className="text-[15px] leading-relaxed text-mauve">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What we digitize */}
        <section id="solutions" aria-labelledby="solutions-title" className="py-16 sm:py-22">
          <div className={container}>
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-orchid">What we digitize</p>
            <h2 id="solutions-title" className={h2}>
              From paper and spreadsheets to simple systems
            </h2>
            <p className="mt-2 text-[17px] text-mauve">Pick the processes that slow you down. We connect them as you grow.</p>
            <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {solutions.map((m) => {
                const Icon = solutionIcons[m.slug];
                return (
                  <li key={m.slug} className={`${card} flex flex-col items-center p-5 text-center`}>
                    <span className="mb-3 grid size-14 place-items-center rounded-2xl bg-orchid/12 text-orchid">
                      <Icon className="size-7" strokeWidth={1.6} aria-hidden />
                    </span>
                    <h3 className="font-semibold">{m.name}</h3>
                    <p className="mt-1 text-[13px] leading-snug text-mauve">{m.body}</p>
                  </li>
                );
              })}
            </ul>
            <p className="mt-8 text-center text-mauve">
              Not on the list? If it is done by hand today, we can digitize it.{" "}
              <a href={appointmentHref} className="font-semibold text-orchid underline-offset-4 hover:underline">
                Tell us about it
              </a>
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          aria-labelledby="contact-title"
          className="border-t border-line bg-plum-deep bg-[radial-gradient(700px_320px_at_50%_0%,rgb(242_160_245/0.18),transparent_70%)] py-16 sm:py-22"
        >
          <div className={`${container} grid gap-6 md:grid-cols-2`}>
            <div className="rounded-3xl border border-line bg-plum-card/70 p-8 text-center">
              <h2 id="contact-title" className="font-display text-[32px]">
                Want to chat first?
              </h2>
              <p className="mt-2 mb-7 text-mauve">Call or email us — we&apos;ll answer your questions.</p>
              <address className="flex flex-wrap justify-center gap-3 not-italic">
                <a href={`tel:${site.phone}`} className={btnOutline}>
                  <Phone className="size-4" aria-hidden /> {site.phoneDisplay}
                </a>
                <a href={`mailto:${site.email}`} className={btnOutline}>
                  <Mail className="size-4" aria-hidden /> {site.email}
                </a>
              </address>
            </div>
            <div className="rounded-3xl border border-orchid/40 bg-plum-card/70 p-8 text-center">
              <h2 className="font-display text-[32px]">Make an appointment</h2>
              <p className="mt-2 mb-7 text-mauve">Book a free consultation at your office or ours.</p>
              <a href={appointmentHref} className={btnPrimary}>
                <CalendarCheck className="size-4" aria-hidden /> Book a free consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-10 text-sm text-mauve">
        <div className={`${container} flex flex-col items-center gap-5`}>
          <a href="#" aria-label="Back to top">
            <Logo markClassName="h-[29px] w-6" wordClassName="text-[22px]" />
          </a>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#about" className="hover:text-orchid">About</a>
            <a href="#why-us" className="hover:text-orchid">Why us</a>
            <a href="#solutions" className="hover:text-orchid">What we digitize</a>
            <a href="#contact" className="hover:text-orchid">Contact</a>
          </nav>
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
