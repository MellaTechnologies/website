"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { appointmentHref } from "@/lib/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed inset-x-0 top-4 z-30 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="flex h-14 items-center justify-between rounded-full border border-line/60 bg-paper/30 pl-6 pr-2.5 shadow-[0_12px_34px_-12px_rgb(44_28_18/0.28)] backdrop-blur-md">
          <Link href="/" aria-label="Mella Technologies — home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`transition-colors hover:text-accent ${isActive(l.href) ? "text-accent" : "text-muted"}`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={appointmentHref}
              className="rounded-full bg-accent px-[18px] py-2.5 font-semibold text-onaccent transition hover:bg-accent-strong"
            >
              Make an appointment
            </a>
          </nav>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-line text-accent md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <nav aria-label="Mobile" className="mt-2 rounded-2xl border border-line bg-paper px-4 py-3 shadow-xl md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 ${isActive(l.href) ? "bg-sand text-accent" : "text-muted hover:text-accent"}`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={appointmentHref}
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-accent px-5 py-3 text-center font-semibold text-onaccent"
            >
              Make an appointment
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
