# Dashboard UI kit — SpicyAds client reporting

A high-fidelity client-facing reporting panel, composed from design-system primitives
(`Card`, `Stat`, `Badge`, `Button`, `Switch`, `Avatar`, `Eyebrow`).

## Files
- `index.html` — mounts the dashboard; open this.
- `DashApp.jsx` — `Sidebar`, `Topbar`, `BarChart` (inline SVG, brand gradient), `CampaignTable`, exposed as `window.DashApp`.

## Interactions
- Sidebar nav items switch the active state.
- "En vivo" `Switch` in the topbar.
- KPI cards, a 12-month revenue bar chart, a spice "recommendation" card, and a campaigns table with status badges + trend deltas.

## Notes
Dark sidebar (near-black) against a light working canvas — the standard SpicyAds app chrome.
