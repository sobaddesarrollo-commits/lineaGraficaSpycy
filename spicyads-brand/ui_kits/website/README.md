# Website UI kit — SpicyAds marketing site

A high-fidelity recreation of the SpicyAds agency homepage, composed entirely from
design-system primitives (`Button`, `Card`, `Stat`, `Badge`, `Eyebrow`, `Input`, `Switch`, `Avatar`).

## Files
- `index.html` — mounts the full page; open this.
- `SiteApp.jsx` — all sections (`Header`, `Hero`, `Clients`, `Services`, `CaseStudy`, `Pricing`, `CTA`, `Footer`, `ContactModal`), exposed as `window.SiteApp`.

## Interactions
- Sticky blurred header.
- "Pide propuesta / auditoría" buttons open a contact modal with a fake submit → success state.
- Pricing has a monthly/annual `Switch` that recalculates prices.
- Cards lift on hover.

## Notes
Dark hero (`.on-dark` scope) → light services → tinted case study → light pricing → gradient CTA → near-black footer. Copy is Spanish, direct/cheeky ("menos humo", "sin postureo").
