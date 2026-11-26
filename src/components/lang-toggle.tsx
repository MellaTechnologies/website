"use client";

import { LANG_STORAGE_KEY, type Lang } from "@/lib/i18n";

/**
 * EN / አማ segmented switch. The active option is highlighted purely by CSS
 * (html[data-lang="…"]), so it is correct on first paint with no hydration
 * mismatch. Clicking flips the <html data-lang> attribute and persists it;
 * every <T> on the page reveals the matching language instantly.
 */
export function LangToggle({ className = "" }: { className?: string }) {
  const set = (l: Lang) => {
    const root = document.documentElement;
    root.setAttribute("data-lang", l);
    root.lang = l;
    try {
      localStorage.setItem(LANG_STORAGE_KEY, l);
    } catch {}
  };

  return (
    <div className={`lang-toggle ${className}`} role="group" aria-label="Language / ቋንቋ">
      <button type="button" data-lang-btn="am" aria-label="አማርኛ" onClick={() => set("am")}>
        አማ
      </button>
      <span aria-hidden className="lang-toggle__sep">/</span>
      <button type="button" data-lang-btn="en" aria-label="English" onClick={() => set("en")}>
        EN
      </button>
    </div>
  );
}
