"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { MoveButton } from "./move-button";
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

  // Logo always goes to the home hero: scroll up if already home, else navigate (lands at top).
  const onLogoClick = (e: React.MouseEvent) => {
    setOpen(false);
    if (pathname !== "/") return;
    e.preventDefault();
    const lenis = (window as unknown as { lenis?: { scrollTo: (t: number) => void } }).lenis;
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-4 z-30 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="flex h-14 items-center justify-between rounded-full border border-line/60 bg-paper/30 pl-6 pr-2.5 shadow-[0_12px_34px_-12px_rgb(44_28_18/0.28)] backdrop-blur-md">
          <Link href="/" aria-label="Mella Technologies — home" onClick={onLogoClick}>
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`hover-accent ${isActive(l.href) ? "text-accent" : "text-muted"}`}
              >
                {l.label}
              </Link>
            ))}
            <MoveButton href={appointmentHref} variant="primary" showArrow={false} size="sm">
              Make an appointment
            </MoveButton>
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
          <nav aria-label="Mobile" className="mobile-menu mt-2 rounded-2xl border border-line bg-paper px-4 py-3 shadow-xl md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 ${isActive(l.href) ? "bg-sand text-accent" : "text-muted hover-accent"}`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <MoveButton
              href={appointmentHref}
              onClick={() => setOpen(false)}
              variant="primary"
              showArrow={false}
              className="mt-3 w-full"
            >
              Make an appointment
            </MoveButton>
          </nav>
        )}
      </div>
    </header>
  );
}
