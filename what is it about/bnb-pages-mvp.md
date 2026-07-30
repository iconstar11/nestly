# BnB Pages — MVP Summary

## What it is

A service that builds landing pages for Nairobi BnB hosts so they can be found directly on Google and AI chatbots (ChatGPT, Claude) without depending entirely on Airbnb.

---

## The problem it solves

Hosts on Airbnb pay 3–15% commission per booking and have no independent web presence. When someone searches "BnB near 2 Rivers Mall" on Google or asks an AI chatbot, the host doesn't show up — only Airbnb does. A direct landing page fixes that.

---

## The offer

- A 1–2 page website for the host with their photos, location, amenities, and booking links
- Optimised for Google search (SEO) and AI tools (schema markup, structured data)
- Hosted free on GitHub Pages, shortened with Bitly
- Free AI-generated promo video as the door-opener for the cold outreach

---

## Pricing

| | Amount |
|---|---|
| Setup fee | 1× the host's nightly rate (one-time) |
| Monthly retainer | ~25% of the nightly rate (hosting + updates) |

A mid-range host at KES 8,000/night breaks even in under 1 extra direct booking. You own the repo — if they stop paying, the page goes down.

---

## Tech stack

| Component | Tool |
|---|---|
| Hosting | GitHub Pages (free) |
| URL | Bitly (free shortener, no custom domain needed) |
| Template | Single HTML file with inline CSS |
| Config | `config.yaml` per client (property name, area, images, landmarks, price, contacts) |
| Generator | `python generate.py clients/<folder>` — fills template from config in seconds |
| Lead tracking | `leads.csv` |

---

## Workflow: cold call → live page

1. **Find lead** — browse Airbnb, note listing URL, phone, area, price
2. **WhatsApp outreach** — send the free AI video + a one-liner about Google visibility
3. **Quick call (10–15 min)** — collect: property name, landmarks nearby, amenities, photos, contact
4. **Build page (5–10 min)** — fill `config.yaml`, run `python generate.py`, push to GitHub
5. **Deliver** — send the Bitly link on WhatsApp

---

## Repo structure

```
bnb-pages/
├── index.html                          ← portfolio page listing all clients
├── template/
│   └── page.html                       ← HTML template (never edited per client)
├── clients/
│   └── westlands-riverside/
│       ├── config.yaml                 ← fill this per client
│       └── index.html                  ← generated, do not edit manually
├── generate.py                         ← python generate.py clients/<folder>
├── leads.csv                           ← CRM: one row per prospect
├── requirements.txt                    ← jinja2, pyyaml
└── .nojekyll                           ← required for GitHub Pages
```

---

## What a client page contains

- Hero image with property name and price pill
- Location section with landmark badges (what people search for)
- Photo grid
- Amenities list
- Booking buttons (Airbnb link, WhatsApp, phone)
- Schema markup so Google and AI tools can read the listing as structured data
