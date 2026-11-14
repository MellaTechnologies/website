import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "./logo";
import { container } from "./ui";
import { site } from "@/lib/site";

const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-sand pt-14 text-sm text-muted">
      <div className={`${container} grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]`}>
        <div>
          <Link href="/" aria-label="Mella Technologies — home">
            <Logo markClassName="h-[29px] w-6" wordClassName="text-[22px]" />
          </Link>
          <p className="mt-4 max-w-xs leading-relaxed">
            A customer-first software company turning paper records, notebooks and spreadsheets into simple digital
            systems.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-3 font-semibold text-ink">Pages</h2>
          <ul className="flex flex-col gap-2">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 font-semibold text-ink">Get in touch</h2>
          <address className="flex flex-col gap-2 not-italic">
            <a href={`tel:${site.phone}`} className="inline-flex items-center gap-2 hover:text-accent">
              <Phone className="size-4" aria-hidden /> {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-accent">
              <Mail className="size-4" aria-hidden /> {site.email}
            </a>
          </address>
        </div>
      </div>

      <div className={`${container} mt-12 flex flex-wrap justify-between gap-2 border-t border-line py-6`}>
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>Customer first · Manual to digital</p>
      </div>

      {/* Oversized wordmark — a quiet closing moment. */}
      <div aria-hidden className="overflow-hidden">
        <p className="-mb-[0.18em] select-none text-center font-display leading-none text-accent/12 text-[clamp(90px,24vw,340px)]">
          Mella
        </p>
      </div>
    </footer>
  );
}
