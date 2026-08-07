# Context

## What is Nestly Africa?
A service that builds SEO-optimized direct-booking landing pages for BnB hosts across Africa. Hosts currently rely almost entirely on Airbnb and Booking.com for visibility — and pay 15-20% commission on every booking. Nestly gives them a page that ranks on Google and surfaces in AI tools (ChatGPT, Claude), so guests can book directly at zero commission.

## Why this exists
- African BnB hosts have almost no independent web presence — Airbnb owns the guest relationship
- AI search (ChatGPT, Claude) is changing how travelers find accommodation — most hosts are invisible there
- Setting up a website is too technical and expensive for the average host
- No direct-booking page builder specifically targets the African market

## Target customer
Any African BnB host with an active Airbnb/Booking.com listing who wants more direct bookings. Currently focused on Kenya (Nairobi, Mombasa, Coast) as the beachhead, expanding to the rest of Africa.

## Current phase: pre-revenue
- The business site (`nestly-africa`) is both the sales pitch and the portfolio
- 9 leads identified (Aug 2026) from Instagram/Facebook in `src/data/leads.json`
- No paying customers yet — priority is closing the first one
- Outreach workflow is WhatsApp-first: find host → send free preview video → book call → build page → deliver

## Revenue model
- One-time setup fee = 1× the host's nightly rate
- Monthly retainer = ~25% of one night's rate
- Host gets commission-free bookings; Nestly owns the page (takedown = non-payment)

## Key decisions made
- **Africa-wide scope** (broadened from Nairobi-only in Jul 2026) — bigger market, same value prop
- **GitHub Pages for hosting** — free, fast, and the host doesn't need to manage anything
- **Static single-page sites** — no backend, no database, no moving parts. Fast to build, impossible to break
- **WhatsApp as primary channel** — it's how African hosts already communicate with guests

## Current open questions
- Should we offer a free tier (basic page, Nestly branding) to build portfolio?
- What's the minimum viable portfolio size before the business site converts well?
- Should we niche down to a specific city/region first, or stay Africa-wide from day one?
