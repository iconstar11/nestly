# CLAUDE.md

## Project
Nestly Africa — direct booking landing pages for African BnB hosts. We build SEO-optimized, single-page sites so hosts get found on Google and AI tools (ChatGPT, Claude) instead of relying solely on Airbnb. Zero commission on direct bookings.

**Stack:** React 19 + Vite 6 + Tailwind CSS 4. Deployed via GitHub Pages.

## Commands
```
npm run dev      # start dev server
npm run build    # production build + copy to root for GitHub Pages
npm run preview  # preview production build locally
```

## Architecture
- `src/main.jsx` — entry point, mounts React to `#root` in `index.html`
- `src/App.jsx` — single-page layout: Nav → Hero → Calculator → HowItWorks → Features → Portfolio → Pricing → FAQ → Footer → WhatsAppButton
- `src/data/listings.js` — portfolio listings data
- `src/data/leads.json` — lead/sales-prospect data extracted from social media
- `index.html` at project root is the **built output** for GitHub Pages (committed so Pages can serve it)
- After `npm run build`, a script copies `dist/` contents to root `index.html`

## Conventions
- **Ship fast.** This is pre-revenue. Polish comes after paying customers.
- Components are in `src/components/`. One component per file. Default exports.
- Tailwind utility classes only — no custom CSS separate from `src/index.css`.
- All copy must be Africa-wide, not Nairobi-only.
- Don't over-engineer. No state management libraries, no router, no backend.
- `leads.json` is the working lead list — update it as leads progress through the pipeline.

## Current phase
Pre-revenue. Priority: get first paid customers. The business site acts as both the sales pitch and a portfolio. Every change should either improve conversion or add credible social proof.
