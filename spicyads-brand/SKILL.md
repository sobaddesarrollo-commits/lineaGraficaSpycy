---
name: spicyads-design
description: Use this skill to generate well-branded interfaces and assets for SpicyAds (a direct-tone, Spanish-language digital marketing / performance agency), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** SpicyAds — performance marketing agency. Tone: direct, confident, a little cheeky, Spanish ("nosotros" → "tú", informal). No emoji.
- **Color:** spice ramp mango→ember→berry (`--spice-400/500/700`); warm charcoals (`--warm-*`); paper `--warm-50`. `.on-dark` flips to near-black sections.
- **Type:** Anton (loud uppercase display + numerals), Hanken Grotesk (UI/body), Space Mono (eyebrows / data labels).
- **Signature move:** mono ALL-CAPS Eyebrow + gradient dot above a big heading. Lead with big metrics (Stat).
- **Entry point:** link `styles.css`. Components live under `window.SpicyAdsDesignSystem_ec6a90` after loading `_ds_bundle.js`.

## Files
- `styles.css` + `tokens/` — design tokens (colors, type, spacing, effects, fonts).
- `components/core/` — Button, Badge, Eyebrow, Input, Card, Switch, Stat, Avatar (`.jsx` + `.d.ts` + `.prompt.md`).
- `ui_kits/website/` and `ui_kits/dashboard/` — full reference screens.
- `guidelines/` — foundation specimen cards.
- `assets/logo-aji.svg` — the chili brand mark.
