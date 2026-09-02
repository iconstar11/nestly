# CLAUDE.md

## Project
Nestly Africa — professional, mobile-friendly property websites for short-stay accommodation providers in Nairobi. One clean, shareable website per property: photos, amenities, location, pricing, and direct WhatsApp enquiries. One-time pricing, no monthly fee.

Nestly is NOT a property-management system, a payment system, a reservation system, a guest check-in service, or a guarantee of bookings or Google rankings.

**Stack:** React 19 + Vite 6 + Tailwind CSS 4 (business site) + Python/Jinja2 static generator (client pages). Deployed via GitHub Pages.

## Commands
```
npm run dev      # start dev server
npm run build    # production build + copy to root for GitHub Pages
npm run preview  # preview production build locally
python generate.py clients/<slug>   # generate a client property page
```

## Architecture
- `src/main.jsx` — entry point, mounts React to `#root` in `src/index.html` (Vite entry)
- `src/App.jsx` — single-page layout: Nav → Hero → Calculator → HowItWorks → WhatYouReceive → Portfolio → Pricing → FAQ → Footer → WhatsAppButton
- `src/data/listings.js` — portfolio listings data
- `src/data/leads.json` — lead/sales-prospect data extracted from social media
- `generate.py` + `template/page.html` — static client page generator (Jinja2 + YAML config per client in `clients/<slug>/config.yaml`)
- `index.html` at project root is the **built output** for GitHub Pages (committed so Pages can serve it)
- After `npm run build`, a script copies `dist/` contents to root `index.html`
- `public/robots.txt` and `public/sitemap.xml` are copied into the build

## Conventions
- **Ship fast.** This is pre-revenue. Polish comes after paying customers.
- Components are in `src/components/`. One component per file. Default exports.
- Tailwind utility classes only — no custom CSS separate from `src/index.css`.
- All public copy targets short-stay accommodation in Nairobi.
- **Neutral public language.** Never mention booking platforms, platform commissions, property-management software, or any company/platform name in public pages, templates, README, sample content, config labels, or visible UI. Approved vocabulary: short-stay accommodation, furnished apartment, serviced apartment, holiday stay, property owner, accommodation provider, direct enquiry, property website, check availability, enquire on WhatsApp.
- Don't over-engineer. No state management libraries, no router, no backend.
- `leads.json` is the working lead list — update it as leads progress through the pipeline.
- The main enquiry CTA everywhere is "Enquire on WhatsApp".

## Pricing (public)
- Starter — KES 11,000 one-time. Professional — KES 15,000 one-time. "One-time payment. No monthly website fee."
- The .site domain and branded email are included for the first year. Renewal after the first year is charged separately at the provider's current renewal price — never quote an exact renewal price unless configured and verified.

## Current phase
Pre-revenue. Priority: get first paid customers. The business site acts as both the sales pitch and a portfolio. Every change should either improve conversion or add credible social proof.
