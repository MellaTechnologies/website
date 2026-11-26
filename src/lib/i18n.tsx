import type { ReactNode } from "react";

/** A string that exists in both site languages. */
export type Dict = { en: string; am: string };

export const LANG_STORAGE_KEY = "mella-lang";
export const DEFAULT_LANG = "am" as const;
export type Lang = "en" | "am";

/**
 * Renders both languages inline; CSS (see globals.css) shows only the one that
 * matches the <html data-lang> attribute. Works in server components — the
 * actual switch is done client-side by LangToggle flipping the attribute, so
 * there is no re-render and no hydration mismatch.
 */
export function T({ en, am }: { en: ReactNode; am: ReactNode }) {
  return (
    <>
      <span data-lang-text="en">{en}</span>
      <span data-lang-text="am">{am}</span>
    </>
  );
}

/**
 * Inline script that sets the saved language on <html> before first paint,
 * so the correct language shows immediately with no flash of the default.
 * Injected as a blocking script in <head>.
 */
export const langBootScript = `(function(){try{var l=localStorage.getItem('${LANG_STORAGE_KEY}');if(l!=='en'&&l!=='am')l='${DEFAULT_LANG}';document.documentElement.setAttribute('data-lang',l);document.documentElement.lang=l;}catch(e){document.documentElement.setAttribute('data-lang','${DEFAULT_LANG}');}})();`;
