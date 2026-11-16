# CLAUDE.md

## Project
Nestly Africa — professional, mobile-friendly property websites for short-stay accommodation providers in Nairobi. One clean, shareable website per property: photos, amenities, location, pricing, and direct WhatsApp enquiries. One-time pricing, no monthly fee.

Nestly is NOT a property-management system, a guest check-in service, or a guarantee of bookings or Google rankings. Nestly never holds guest money. The Premium package adds an availability calendar and M-Pesa deposits paid straight to the owner's own Till/Paybill (not built yet; deposit amount, cancellations and refunds are agreed with each owner when their website is created; backend platform, Supabase or Firebase, to be chosen once the first Premium offer comes in).

**Stack:** React 19 + Vite 6 + Tailwind CSS 4 (business site) + Python/Jinja2 static generator (client pages). Deployed via GitHub Pages on `nestlyafrica.cloud` (repo root = docroot, `CNAME` file at root; DNS on Cloudflare free plan).

## Commands
```
npm run dev      # start dev server
npm run build    # production build + copy to root for GitHub Pages
npm run preview  # preview production build locally
python generate.py stays/<slug>   # generate a client property page
```

## Architecture
- `src/main.jsx` — entry point, mounts React to `#root` in `src/index.html` (Vite entry)
- `src/App.jsx` — single-page layout: Nav → Hero → Calculator → HowItWorks → WhatYouReceive → Portfolio → Pricing → FAQ → Footer → WhatsAppButton
- `src/data/listings.js` — portfolio listings data
- `src/data/leads.json` — lead/sales-prospect data extracted from social media
- `partner.html` + `src/partner.jsx` + `src/components/PartnerDashboard.jsx` — affiliate sign-in and dashboard at `/partner.html` (source copy in `src/partner.html`, synced by prebuild like `index.html`)
- `src/lib/referral.js` — referral code (from `?ref=CODE` or the code box), prices, discount, WhatsApp link builder
- `generate.py` + `template/page.html` — static client page generator (Jinja2 + YAML config per client in `stays/<slug>/config.yaml`; live at `/stays/<slug>/`). On each run it upserts the page's `canonical_url` into both sitemaps
- `index.html` at project root is the **built output** for GitHub Pages (committed so Pages can serve it)
- After `npm run build`, a script copies `dist/` contents to root `index.html`
- `public/robots.txt` and `public/sitemap.xml` are copied into the build
- `CNAME` at root (nestlyafrica.cloud) is a root-only file the build never touches; `clients/westlands-riverside/` is a redirect stub to `/stays/westlands-riverside/` for old shared links

## Conventions
- **Ship fast.** This is pre-revenue. Polish comes after paying customers.
- Components are in `src/components/`. One component per file. Default exports.
- Tailwind utility classes only — no custom CSS separate from `src/index.css`.
- Public copy presents Nestly as an African brand (short-stay accommodation across Africa). Don't label the site as Nairobi-only; Nairobi is still where outreach happens.
- **Neutral public language.** Never mention booking platforms (M-Pesa is allowed as the Premium deposit method), platform commissions, property-management software, or any company/platform name in public pages, templates, README, sample content, config labels, or visible UI. Approved vocabulary: short-stay accommodation, furnished apartment, serviced apartment, holiday stay, property owner, accommodation provider, direct enquiry, property website, check availability, enquire on WhatsApp.
- Don't over-engineer. No state management libraries, no router. The only backend is Supabase (affiliate logins + referrals, schema in `supabase/schema.sql`), called directly from the browser — no custom server.
- `leads.json` is the working lead list — update it as leads progress through the pipeline.
- The main enquiry CTA everywhere is "Enquire on WhatsApp".

## Pricing (public)
- Starter — KES 18,000 one-time. Premium (online booking + M-Pesa deposit) — KES 35,000 one-time. Professional was removed in Nov 2026. "One-time payment. No monthly website fee."
- Referral code gives the owner 10% off (Starter KES 16,200, Premium KES 31,500). The affiliate earns 20% of what the owner pays.
- The .site domain is included for the first three years on both packages. A branded email is included on Premium only (not Starter). Renewal after that is charged separately at the provider's current renewal price — never quote an exact renewal price unless configured and verified.

## Current phase
Pre-revenue. Priority: get first paid customers. The business site acts as both the sales pitch and a portfolio. Every change should either improve conversion or add credible social proof.
