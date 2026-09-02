# Context

## What is Nestly Africa?
A service that builds professional, mobile-friendly property websites for short-stay accommodation providers in Nairobi. Each owner gets one clean, shareable website where guests can view photos, amenities, location, pricing, and contact the owner directly on WhatsApp.

Nestly is NOT a property-management system, a payment system, a reservation system, a guest check-in service, or a guarantee of bookings or Google rankings.

## Why this exists
- Nairobi accommodation owners have almost no independent web presence — they depend on booking platforms that keep the guest relationship
- Most owners have no affordable, low-effort way to get a professional website
- A single shareable link (with a real domain) makes an owner look established on WhatsApp, Instagram, and in person

## Target customer
Owners of short-stay accommodation in Nairobi — furnished apartments, serviced apartments, holiday stays — who want a professional online presence and direct enquiries.

## Current phase: pre-revenue
- The business site (`nestly`) is both the sales pitch and the portfolio
- 9 leads identified (Aug 2026) from Instagram/Facebook in `src/data/leads.json`
- No paying customers yet — priority is closing the first one
- Outreach workflow is WhatsApp-first: find owner → send free preview video → book call → build page → deliver

## Revenue model
Two one-time packages, no monthly fee:
- **Starter — KES 11,000**: property website, gallery, amenities, location, pricing, WhatsApp button, basic Google setup, .site domain + branded email for year one, one revision round
- **Professional — KES 15,000**: everything in Starter plus detailed copy, house rules & FAQs, enhanced local search setup, social preview, visitor & enquiry tracking, two revision rounds, 30 days of minor updates

The .site domain and branded email are included for the first year; renewal is billed separately at the provider's price.

## Key decisions made
- **One-time pricing, no monthly fees** (Aug 2026) — simpler to sell, no collection overhead
- **Neutral public language** — never mention booking platforms, platform fees, or competitors on any public page, template, README, sample content, or visible UI. Use: short-stay accommodation, furnished apartment, property owner, direct enquiry, check availability, enquire on WhatsApp
- **GitHub Pages for hosting** — free, fast, and the owner doesn't need to manage anything
- **Static single-page sites** — no backend, no database, no moving parts. Fast to build, impossible to break
- **WhatsApp as primary channel** — it's how owners already communicate with guests

## Current open questions
- Should we offer a free tier (basic page, Nestly branding) to build portfolio?
- What's the minimum viable portfolio size before the business site converts well?
- Expand beyond Nairobi, or stay focused until the first paying customers?
