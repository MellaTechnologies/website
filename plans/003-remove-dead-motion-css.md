# Plan 003 — Remove dead motion CSS

- **Commit stamp:** `243cd75`
- **Severity:** LOW (cleanup / cohesion)
- **Category:** Dead tokens
- **Repo:** `src/app/globals.css` only.

## Background

Two sets of CSS motion helpers are defined but referenced nowhere in JSX (verified by grep across `src/`):

1. **Seven keyframes** for the old icon-motif service cards — the cards were rebuilt as numbered cards without icons, so nothing uses them: `barGrow`, `popIn`, `drawTick`, `ringOut`, `pulseNode`, `cellPulse`, `sparkle`. They sit under the comment `/* Motifs for the interactive solution cards (run on card hover). */`.
2. **`.fx` and `.fx-bottom`** — `transform-box`/`transform-origin` helpers for those removed motif SVGs. Comment: `/* Per-element transform origin for animated SVG motifs. */`.

## Before you delete — re-verify unused

From the repo root, confirm each name appears ONLY in `globals.css` (its definition), not in any `.tsx`:

```bash
grep -rnE "barGrow|popIn|drawTick|ringOut|pulseNode|cellPulse|sparkle" src --include=*.tsx
grep -rnE "className=\"[^\"]*\\bfx\\b" src --include=*.tsx
```

Both must return **no matches**. If any match exists, do NOT delete that item; report it instead.

Also confirm these are NOT dead (they ARE used — do not touch): `enter-up`, `floatY`, `floatYb`, `floatYc`, `spinSlow`, `glowPulse`, `auroraWave`, `auroraGlow`.

## Change

In `src/app/globals.css`, delete:

1. The `.fx` and `.fx-bottom` rules (the block under `/* Per-element transform origin for animated SVG motifs. */`, roughly lines 46–54 including that comment).
2. The seven keyframe blocks under `/* Motifs for the interactive solution cards (run on card hover). */` (roughly lines 73–101): `@keyframes barGrow`, `popIn`, `drawTick`, `ringOut`, `pulseNode`, `cellPulse`, `sparkle`, and the comment line.

Leave every other rule and keyframe intact.

## Scope boundaries (do NOT)

- Do not remove any keyframe in the "do not touch" list above.
- Do not touch the `@media (prefers-reduced-motion: reduce)` block.
- Do not reorder or reformat surrounding rules.

## Verification

1. `/`, `/services`, `/portfolio` return 200; the home hero orb still floats/spins, the aurora still animates, hero text still enters — i.e. the kept keyframes still work.
2. `grep -nE "@keyframes (barGrow|popIn|drawTick|ringOut|pulseNode|cellPulse|sparkle)" src/app/globals.css` returns nothing.
3. No visual change anywhere (these were unused).
