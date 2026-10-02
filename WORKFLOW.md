# Nestly — Workflow

## Lead → Free sample → Paying customer

---

### Phase 0 — Prep the free sample (first lead only)

The first lead gets a **free pre-built website** — it's the proof every other pitch points to. It lives on the existing site (`nestlyafrica.cloud/stays/<slug>/`): **no own domain, no email, no extra cost**.

1. Grab 3–8 photos of the lead's property from their Instagram/Facebook profile (booking platforms hide owner contact — always go to the social profile the lead was found on)
2. Build the page: copy `stays/example`, fill in `config.yaml`, run `python generate.py stays/<client-slug>`
3. Verify the phone number from the original ad before sending anything
4. Update `leads.json` status → `page_live`

---

### Phase 1 — Free lead: WhatsApp first, call as the nudge

Send this message with the page link:

> "Hi, I saw your property on Instagram. I build mobile-friendly websites for short-stay properties, and I made a free sample for yours so you can see exactly what it would look like: [link]. No charge, no obligation — if you'd rather not have it public, just tell me and I'll take it down today."

- No reply in 24–48 h → call: *"Hi, I sent you a WhatsApp message — did you get a chance to see the website I made for your property?"*
- They like it → ask permission to keep it in the portfolio (and later, a testimonial)
- They don't → take the page down
- Update status → `contacted`; → `paying` if they ever upgrade to the paid package (own domain + email)

---

### Phase 2 — Paid leads (everyone else)

Send this message (points at the free sample as proof):

> "Hi, I saw your property on Instagram. I build mobile-friendly websites for short-stay properties — photos, amenities, location, and direct WhatsApp enquiries, all on your own domain with a branded email. One-time payment of KES 11,000, no monthly fee. Here's one I made for a property in Thika: [free sample link]. Would you like one for yours?"

- No reply in 24–48 h → same nudge call
- Interested → 10–15 min call to collect:
  - Property name / branding
  - Area + nearby landmarks
  - Amenities
  - Photos (ask them to share 5–8 on WhatsApp)
  - Price per night
  - WhatsApp number for enquiries
  - Optional external availability link
- Build the page (`stays/<client-slug>`, same as Phase 0 step 2) and deploy
- They pay (M-Pesa) → **then** register their `.site` domain, set up the branded email, and point the domain at the site. First year of domain + email included; renewal after that is at the provider's price — never quote a renewal figure
- Shorten the page URL with Bitly and send it to the owner
- Update status → `paying`

---

## Lead statuses (`leads.json`)

| Status | Meaning |
|---|---|
| `found` | Lead identified, not yet contacted |
| `contacted` | WhatsApp sent (+ nudge call if needed) |
| `call_booked` | Info call scheduled |
| `call_done` | Info collected |
| `page_live` | Page built and link sent |
| `paying` | One-time package paid |
| `dead` | Not interested |

---

## Build commands

```bash
# 1. Copy the example client folder
cp -r stays/example stays/<client-slug>

# 2. Fill in config.yaml, then generate
python generate.py stays/<client-slug>

# 3. Deploy
git add stays/<client-slug>/
git commit -m "Add page: <client-slug>"
git push
```

Page is live at:
`https://nestlyafrica.cloud/stays/<client-slug>/`

---

## Pricing Reminder
- Starter — KES 11,000 one-time (one revision round)
- Professional — KES 15,000 one-time (two revision rounds + 30 days minor updates)
- No monthly fee. Domain and email renewal after year one is billed separately at the provider's price.
