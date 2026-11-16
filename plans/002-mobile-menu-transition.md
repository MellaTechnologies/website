# Plan 002 — Animate the mobile nav menu open (and exit)

- **Commit stamp:** `243cd75`
- **Severity:** MEDIUM (missed opportunity — jarring state change)
- **Category:** Missed opportunity / preventing a jarring change
- **Repo:** Next.js 16 App Router + React 19 + Tailwind CSS v4. Plain CSS (`@starting-style`) for enter; optional small JS for exit.

## Background

In `src/components/header.tsx`, the mobile menu is a conditional mount:

```tsx
{open && (
  <nav aria-label="Mobile" className="mt-2 rounded-2xl border border-line bg-paper px-4 py-3 shadow-xl md:hidden">
    …
  </nav>
)}
```

It pops in and vanishes instantly — a jarring change for an occasional, deliberate action (tapping the menu button). Purpose of adding motion here: **state indication + spatial consistency** (the panel comes from the button above it). Frequency: occasional → a standard ~200ms animation is appropriate.

This is **not** a hover interaction, so the Tailwind-`hover:` browser limitation (see Plan 001) does not apply; CSS transitions fire normally.

## Approach A — Enter only, via `@starting-style` (minimal, recommended)

Smooth open, instant close. The skill's guidance allows exits to be simpler; an instant unmount on close is acceptable and needs no JS.

### Step 1 — CSS

Append to `src/app/globals.css` (anywhere after the `@theme` block; group it near the other component rules):

```css
/* Mobile nav menu — animate its entrance from just under the menu button. */
.mobile-menu {
  transform-origin: top;
  transition: opacity 200ms ease, transform 200ms cubic-bezier(0.22, 1, 0.36, 1);
}
@starting-style {
  .mobile-menu {
    opacity: 0;
    transform: translateY(-8px);
  }
}
```

`transform`/`opacity` only (GPU). `cubic-bezier(0.22, 1, 0.36, 1)` is the strong ease-out already used by this codebase's `enter-up`. Reduced-motion: the global `@media (prefers-reduced-motion: reduce)` block zeroes the transition → instant appear (content always visible). No extra guard needed.

### Step 2 — Add the class

In `src/components/header.tsx`, add `mobile-menu` to the conditionally-rendered `<nav aria-label="Mobile" …>`:

```tsx
<nav aria-label="Mobile" className="mobile-menu mt-2 rounded-2xl border border-line bg-paper px-4 py-3 shadow-xl md:hidden">
```

That's the whole change for Approach A.

## Approach B — Enter AND exit (if you want a symmetric close)

Only if a smooth close is wanted. Requires keeping the node mounted through the exit.

1. Add state: `const [render, setRender] = useState(false);` driven off `open` — on `open === true` set `render = true`; on `open === false` wait 200ms (a `setTimeout`, cleared on re-open) then `setRender(false)`.
2. Render the `<nav>` while `render` is true; drive a `data-state={open ? "open" : "closed"}` attribute on it.
3. CSS:
   ```css
   .mobile-menu { transform-origin: top; transition: opacity 200ms ease, transform 200ms cubic-bezier(0.22, 1, 0.36, 1); }
   .mobile-menu[data-state="closed"] { opacity: 0; transform: translateY(-8px); }
   ```
   (Replace the `@starting-style` version; the `[data-state="closed"]` start state covers the enter too because the node mounts closed then flips to open on the next frame — set `open`-driven class after mount.)
4. Under reduced-motion, keep the 200ms unmount timeout but the transition is zeroed, so it's effectively instant — acceptable.

Prefer **Approach A** unless the instant close reads badly in testing.

## Scope boundaries (do NOT)

- Do not change the menu's open/close toggle logic (`setOpen`), the `aria-expanded` button, or the links inside.
- Do not animate the desktop nav.
- Do not add a motion library or `AnimatePresence` — this is CSS.

## Verification

1. `/` returns 200; TypeScript passes (Approach B only, which adds state).
2. On a narrow viewport (<768px), tap the menu button: the panel slides down ~8px and fades in over ~200ms from the top edge.
3. **Feel-check:** open it a few times — it should feel like it drops from the button, not pop. In DevTools, throttle animations or record and scrub the first 200ms.
4. Reduced-motion emulation: the menu appears instantly, fully visible, no layout breakage.
5. Approach A: closing is instant (expected). Approach B: closing reverses the same motion.
