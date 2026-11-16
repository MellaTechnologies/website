# Plan 001 — Restore hover feedback on buttons, cards and links

- **Commit stamp:** `243cd75`
- **Severity:** MEDIUM (every primary CTA site-wide has no hover feedback) · highest leverage
- **Category:** Feedback / cohesion
- **Repo:** Next.js 16 App Router + React 19 + Tailwind CSS v4. No animation libs for this change — plain CSS only.

## Background (why this exists)

This project deliberately hand-writes `:hover` rules in CSS because Tailwind's `hover:` utilities compile to `@media (hover: hover)`, which **does not match in the target browser** — so Tailwind hover styles never fire there. That is why `globals.css` already has hand-written hover rules for `.svc-card`, `.port-card`, `.feat-row`, `.howcard` inside an `@media (pointer: fine)` block (see the block that starts with the comment `/* Hover states — pointer devices only. */`).

The workaround was **not** applied to the shared button/card primitives or to text links, so they still rely on Tailwind `hover:` and therefore have **no hover feedback** in the target browser: the primary CTA (`btnPrimary`) on every page, the outline button, the generic `card` (contact page), nav links, and "View portfolio / View full portfolio" underline links.

## STEP 0 — Verify the premise (required; do this first)

Open the running site in the project's target browser (Chrome/Edge). In DevTools → **Rendering** panel, check **"Emulate CSS media features"** is NOT forcing anything, then hover the "Make an appointment" button on the home page.

- If the button **already lifts/darkens on hover** → Tailwind `hover:` works in this browser, the premise is wrong, and this plan is unnecessary. **Stop and report** that the hand-written card CSS is instead the redundant code; do not make the changes below.
- If the button **does not react to hover** → premise confirmed. Proceed.

Also confirm `@media (pointer: fine)` matches on desktop: the existing `.svc-card` hover (hover a service card at `/services`) should already work. If it does, `(pointer: fine)` is the correct gate to use below.

## STEP 1 — Add hand-written interaction CSS

In `src/app/globals.css`, **append** this block immediately AFTER the existing `@media (pointer: fine) { … }` block (the one holding `.svc-card:hover` etc.). Do not modify that existing block.

```css
/* Shared interactive primitives — hover gated to pointer devices (Tailwind hover:
   variants don't fire in the target browser), press feedback ungated. */
.btn-primary,
.btn-outline {
  transition: background-color 160ms ease, transform 160ms ease;
}
.card-interactive {
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.hover-accent {
  transition: color 160ms ease;
}
@media (pointer: fine) {
  .btn-primary:hover {
    background-color: var(--color-accent-strong);
    transform: translateY(-1px);
  }
  .btn-outline:hover {
    background-color: rgb(181 70 28 / 0.08);
    transform: translateY(-1px);
  }
  .card-interactive:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 34px rgb(44 28 18 / 0.09);
  }
  .hover-accent:hover {
    color: var(--color-accent);
  }
  .hover-underline:hover {
    text-decoration-line: underline;
  }
}
/* Press feedback — placed after the @media so it wins over :hover while pressing. */
.btn-primary:active,
.btn-outline:active {
  transform: translateY(0) scale(0.98);
}
```

Notes for the executor:
- `--color-accent-strong` and `--color-accent` already exist as `@theme` tokens in `globals.css` (`#9a3a14` and `#b5461c`). `rgb(181 70 28 / 0.08)` is `--color-accent` at 8% — this reproduces Tailwind's `bg-accent/8`.
- These durations/curves match the existing hand-written card rules (160–200ms, `ease`).

## STEP 2 — Update the shared primitives (core change)

In `src/components/ui.tsx`, replace the three constants. Remove the Tailwind **`hover:`** and **`transition`** utilities (now handled in CSS) and add the new class. **Keep** all static styling utilities and the `active:` utilities you are NOT replacing in CSS — actually, since Step 1 handles `:active` for the buttons in CSS, remove the button `active:` utilities too so there's one source of truth.

Current (`ui.tsx` lines ~7–12):
```ts
export const card =
  "rounded-2xl border border-line bg-surface p-6 shadow-[0_1px_2px_rgb(44_28_18/0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgb(44_28_18/0.09)]";
export const btnPrimary =
  "inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-onaccent transition hover:-translate-y-px hover:bg-accent-strong active:translate-y-0 active:scale-[0.98]";
export const btnOutline =
  "inline-flex items-center gap-2 rounded-full border border-accent/40 px-6 py-3 font-semibold text-accent transition hover:-translate-y-px hover:bg-accent/8 active:translate-y-0 active:scale-[0.98]";
```

Replace with:
```ts
export const card =
  "card-interactive rounded-2xl border border-line bg-surface p-6 shadow-[0_1px_2px_rgb(44_28_18/0.04)]";
export const btnPrimary =
  "btn-primary inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-onaccent";
export const btnOutline =
  "btn-outline inline-flex items-center gap-2 rounded-full border border-accent/40 px-6 py-3 font-semibold text-accent";
```

This fixes the primary CTA, outline button, and the generic `card` (used on the contact page) everywhere they're referenced.

## STEP 3 — Update scattered text-link hovers (extended change)

Replace Tailwind hover utilities with the helper classes from Step 1. Match by string content (line numbers may drift).

1. `src/components/header.tsx` — desktop nav link. Find `transition-colors hover:text-accent` and replace `hover:text-accent` with `hover-accent` (drop `transition-colors`, the helper has its own transition). The mobile nav link `text-muted hover:text-accent` → `text-muted hover-accent`.
2. `src/components/stacked-work.tsx`:
   - "View portfolio" link: `font-semibold text-accent underline-offset-4 hover:underline` → replace `hover:underline` with `hover-underline`.
   - "View project" link: `... transition hover:bg-onaccent/10` → this is a one-off on a dark card. Replace `hover:bg-onaccent/10` with nothing and add a scoped rule to the Step 1 `@media (pointer: fine)` block: `.view-project:hover { background-color: rgb(252 243 230 / 0.1); }` (that's `--color-onaccent` #fcf3e6 at 10%), then add class `view-project` to that `<Link>`. (Lower priority — skip if time-boxed.)
3. `src/components/work-carousel.tsx` — "View full portfolio" link: `... underline-offset-4 hover:underline` → replace `hover:underline` with `hover-underline`.

## Scope boundaries (do NOT)

- Do **not** touch the existing `@media (pointer: fine)` card-hover block or any `.svc/.port/.feat/.howcard` rule.
- Do **not** change `active:` press feedback on the carousel arrow buttons (`active:scale-95`) — `active:` works fine; only `hover:` is broken.
- Do **not** add a motion library.
- Do **not** reformat unrelated lines.

## Verification

1. Build/typecheck passes; `/`, `/contact`, `/portfolio`, `/services` all return 200.
2. In the target browser on desktop (pointer: fine): the "Make an appointment" button lifts 1px and darkens on hover; the outline button lifts and tints; contact-page cards lift with a shadow; nav links turn terracotta; "View portfolio" underlines on hover.
3. **Feel-check:** hover is near-instant (160–200ms), not sluggish — scrub isn't needed, just confirm it doesn't lag.
4. Touch/narrow emulation (pointer: coarse): none of these fire on tap and none stick — same gate behavior as the existing cards.
5. Reduced-motion: with "Emulate prefers-reduced-motion: reduce", hovers still change color but the global rule zeroes the transform transition — acceptable (feedback preserved, movement dropped).
