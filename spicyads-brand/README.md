# SpicyAds — Design System

> **SpicyAds** es una agencia de marketing digital (performance) con un tono **directo, sin rodeos y un punto descarado**. La identidad gira en torno al *ají* (chile) — calor, energía, "picante" — y a la idea de que la publicidad debe medirse en resultados, no en humo.

This design system encodes that brand into tokens, components, and full UI kits so any new
SpicyAds artifact — site, deck, report, prototype — looks and sounds on-brand.

---

## Sources provided

| Source | What it was | Notes |
|---|---|---|
| `uploads/logo-aji.svg` → `assets/logo-aji.svg` | The brand logo (an *ají*/chili pepper emitting broadcast/sound waves) | The **only** visual asset provided. Gradient `#F07422 → #E53130 → #A5244A`. |
| Brief | "SpicyAds es una agencia de marketing digital con un tono directo" (Spanish) | One line — everything else here is an opinionated extrapolation from the logo + brief. |
| `assets/` (mounted) | Contained only the logo SVG | No codebase or Figma was available to recreate from. |

> ⚠️ **There was no existing product codebase or Figma.** Colors are derived from the logo gradient; type, spacing, components, and the two UI kits are an original, internally-consistent system built to fit the brand. Treat them as a strong v1 to react to, not a recreation of an existing product.

---

## CONTENT FUNDAMENTALS — how SpicyAds writes

- **Language:** Spanish (España, with LATAM reach — "Madrid · Ciudad de México"). Neutral-ish Castilian.
- **Tone:** Direct, confident, a little cheeky. Says the uncomfortable truth. *"Te decimos la verdad aunque escueza."*
- **Person:** Speaks as **"nosotros"** (the agency) to **"tú"** (the client) — informal *tú*, never *usted*. *"¿Hablamos sin rodeos?"*
- **Casing:** Sentence case in body. **Display headlines in Anton are ALL CAPS.** Mono eyebrows are ALL CAPS with wide tracking.
- **Length:** Short. Punchy. Verbs first. *"Pide tu propuesta." "Empieza ya." "Sube el budget."*
- **Signature phrases / vibe:** "menos humo", "sin postureo", "sin rodeos", "que escueza", "hecho con picante". Heat/chili metaphors are welcome but used sparingly (plan names: *Picante · Habanero · Carolina*).
- **Numbers lead.** Results are shown as big metrics (ROAS, CPA, leads, %), formatted ES (`14,20 €`, `18.6k€`, `6.4x`).
- **Emoji:** **No.** The brand is hot but not cutesy. Use the spice gradient, the chili mark, and bold type for energy — never emoji.

---

## VISUAL FOUNDATIONS

- **Color vibe:** Hot. A single brand ramp runs **mango → ember red → deep berry/magenta** (`--spice-400/500/700`, straight from the logo gradient). Neutrals are **warm charcoals** with a faint chili tint (`--warm-*`) — never cold blue-gray. Paper is `--warm-50` (`#faf7f4`).
- **Two contexts:** light "paper" surfaces (default) and **`.on-dark`** near-black sections (`--warm-900`). Drop `.on-dark` on a section to flip text/surfaces. Heroes, footers, and app sidebars are dark; content sections are light.
- **Gradients:** `--gradient-spice` (105° linear) for CTAs, gradient text, and accents; `--gradient-ember` (radial) for filled "spice" cards and the avatar fallback; `--gradient-spice-soft` for tinted icon chips. Used as **accents**, not as full-page washes — no aimless purple gradients.
- **Type:** **Anton** (condensed, single-weight) for loud uppercase display + big numerals; **Hanken Grotesk** (300–900) for headings/body/UI; **Space Mono** for eyebrows, data labels, and table headers. Headlines tracked `-0.02em`; mono eyebrows tracked `0.18em` uppercase.
- **The signature move:** a mono ALL-CAPS **Eyebrow** with a small gradient dot, sitting above a big heading. It opens nearly every section.
- **Backgrounds:** solid warm colors, not imagery (no stock photos were available). Dark sections may carry one soft blurred ember radial glow in a corner. Optional very subtle grain (`--noise-opacity: 0.04`) — off by default.
- **Corners:** moderately tight for a direct, edgy feel — `--radius-sm 8` (buttons/inputs), `--radius-lg 18` (cards), `--radius-xl 28` (hero CTA panels), `--radius-pill` (badges/switch).
- **Cards:** warm paper, `1px` warm border, soft **warm-tinted** shadow (`--shadow-sm`, berry-based rgba — never gray). Hover lifts `-3px` to `--shadow-lg`. Variants: `default`, `flat` (sunken), `outline`, `dark`, `spice` (ember fill).
- **Shadows & glow:** elevation `xs→lg` all use `rgba(83,18,40,…)` (berry). Primary actions and "on" switches carry a **spice glow** (`--glow-spice`, ember rgba) instead of a neutral drop shadow.
- **Borders:** `--border` (warm-200) on light; `rgba(255,255,255,0.12)` on dark. Focus uses a 3px spice ring (`--ring`).
- **Motion:** quick and confident. `--dur-fast 120ms` / `--dur-base 200ms`, `--ease-out` for most, `--ease-pop` (slight overshoot) only for the switch thumb. Fades + small `translateY`. No long, bouncy, or infinite decorative animations.
- **Hover:** buttons lift `-1px` + intensify glow; cards lift; links underline. **Press:** buttons sink (`translateY(1px) scale(.99)`). Disabled = 50% opacity.
- **Transparency/blur:** used sparingly — the sticky site header is `rgba(23,18,16,0.72)` + `blur(14px)`; the contact modal scrim is `blur(4px)`. Not a glassmorphism system.
- **Imagery color:** N/A (no photography supplied). If photos are added later, treat them **warm** and high-contrast to sit with the palette; flag if you need art direction.

---

## ICONOGRAPHY

- **No icon assets were provided** beyond the logo. The kits use a small set of **inline stroke SVG icons** drawn at a consistent **1.75–1.8px stroke**, rounded caps/joins, 24×24 box — a Lucide/Feather-compatible look.
- **Recommendation / substitution flagged:** adopt **[Lucide](https://lucide.dev)** as the official icon set (same stroke style as the kit icons). Link from CDN or copy the SVGs you need into `assets/icons/`. Until then, the inline icons in `ui_kits/*/` are the reference style.
- **The chili mark** (`assets/logo-aji.svg`) is the one brand glyph — used as the app/site logo and favicon. Don't recolor it; it carries the gradient itself.
- **Emoji / unicode as icons:** avoid. The only unicode "icons" used are simple trend arrows (▲ ▼) in metrics/tables, which is intentional and fine.

---

## Index / manifest

**Foundations (root)**
- `styles.css` — the single entry point consumers link (imports only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `assets/logo-aji.svg` — brand mark.

**Specimen cards** — `guidelines/` (rendered in the Design System tab)
- Colors: `color-spice`, `color-neutral`, `color-semantic`, `color-gradients`
- Type: `type-display`, `type-headings`, `type-body-mono`, `type-scale`
- Spacing: `spacing-scale`, `radii`, `shadows`
- Brand: `brand-logo`

**Components** — `components/core/` (namespace `window.SpicyAdsDesignSystem_ec6a90`)
- `Button`, `Badge`, `Eyebrow`, `Input`, `Card`, `Switch`, `Stat`, `Avatar`
- Each has `.jsx` + `.d.ts` + `.prompt.md`; `core.card.html` is the gallery thumbnail.

**UI kits** — `ui_kits/`
- `website/` — agency marketing homepage (hero, services, case study, pricing, CTA, footer, contact modal).
- `dashboard/` — client performance-reporting panel (sidebar, KPIs, revenue chart, campaigns table).

**Other**
- `SKILL.md` — Agent-Skills-compatible entry for use in Claude Code.

---

## Caveats / open questions
1. Built from a logo + one-line brief — **no source product** to recreate. Validate the direction.
2. Fonts are served from **Google Fonts** (`@import` in `tokens/fonts.css`), not bundled binaries — if you need offline/self-hosted, supply the licensed files and I'll swap to local `@font-face`.
3. Icons are a **flagged Lucide substitution** — confirm or provide the real set.
4. No photography/illustration was supplied; the system is type- and color-led. Provide art if you want imagery-driven layouts.
