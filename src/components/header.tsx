import Link from "next/link";
import { Logo } from "./logo";
import { appointmentHref } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why us" },
  { href: "#solutions", label: "What we digitize" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-plum/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label="Mella Technologies — home">
          <Logo />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-6 text-[15px] text-mauve">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hidden transition-colors hover:text-orchid md:inline">
              {l.label}
            </a>
          ))}
          <a
            href={appointmentHref}
            className="rounded-full bg-orchid px-[18px] py-2 font-semibold text-ink transition hover:bg-orchid-dark"
          >
            Make an appointment
          </a>
        </nav>
      </div>
    </header>
  );
}
