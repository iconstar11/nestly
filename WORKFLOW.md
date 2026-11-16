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

> "Hi, I saw your property on Instagram. I build mobile-friendly websites for short-stay properties — photos, amenities, location, and direct WhatsApp enquiries, all on your own domain. One-time payment from KES 18,000, no monthly fee. Here's one I made for a property in Thika: [free sample link]. Would you like one for yours?"

- No reply in 24–48 h → same nudge call
- Interested → 10–15 min call to collect:
  - Property name / branding
  - Area + nearby landmarks
  - Amenities
  - Photos (ask them to share 5–8 on WhatsApp)
  - Price per night
  - WhatsApp number for enquiries
  - Optional external availability link
  - Premium only: M-Pesa Till or Paybill number for deposits
- Build the page (`stays/<client-slug>`, same as Phase 0 step 2) and deploy
- They pay (M-Pesa) → **then** register their `.site` domain (and, on Premium, set up the branded email) and point the domain at the site. First three years of domain included; renewal after that is at the provider's price — never quote a renewal figure
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
- Starter — KES 18,000 one-time (one revision round)
- Premium — KES 35,000 one-time (online booking + M-Pesa deposit, two revision rounds + 30 days minor updates)
- No monthly fee. Domain and email renewal after year three is billed separately at the provider's price.

---

## WhatsApp quick replies

Set these in WhatsApp Business → Settings → Business tools → Quick replies. Type `/` in a chat to use one.
Rules: shortcut is one short lowercase word; messages you send first (cold outreach, `/followup`) stay under ~160 characters; replies end with one clear question or next step; every reply stays under ~500 characters (fits the app limit and shows without much scrolling). Delete the old `/professional` reply.

**/welcome**
```
Hi, welcome to Nestly Africa 👋 We build professional websites for short-stay properties, with direct WhatsApp enquiries and a one-time payment.

What's your property called, and which area is it in?
```

**/price**
```
We have two one-time packages, no monthly fee:

*Starter: KES 18,000*
Your property website + free .site domain for 3 years

*Premium: KES 35,000*
Everything in Starter, plus online booking with M-Pesa deposits paid straight to you

Which one suits your property?
```

**/starter**
```
*Starter: KES 18,000 one-time*
✅ Mobile-friendly property website
✅ Photo gallery, amenities and location
✅ Prices and a WhatsApp enquiry button
✅ Basic Google search setup
✅ Free .site domain for 3 years
✅ One round of changes

No monthly fee. Shall I send what I need from you to start?
```

**/premium**
```
*Premium: KES 35,000 one-time*
Everything in Starter, plus:
✅ Availability calendar on your website
✅ Guests book and pay a deposit by M-Pesa, straight to your own Till or Paybill
✅ Dashboard to block dates and see bookings
✅ Branded email, e.g. hello@yourproperty.site
✅ House rules, FAQs and fuller descriptions
✅ Two rounds of changes + 30 days of small updates

Would you like to go with Premium?
```

**/start**
```
Great! Please send these here on WhatsApp:
1. Property name
2. Area and nearby landmarks
3. 5–8 clear photos
4. Amenities (Wi-Fi, parking, etc.)
5. Price per night
6. Check-in and check-out times
7. House rules
8. A short description in your own words
9. The WhatsApp number guests should contact

For Premium, also send your M-Pesa Till or Paybill number.
```

**/domain**
```
Your website gets its own address, like *yourproperty.site*, free for the first 3 years. After that, the domain renews at the provider's yearly price. There is no monthly website fee.
```

**/timeline**
```
How it works:
1. You send your photos and details
2. We send you a preview link within a few days
3. You tell us what to change
4. You pay, and your site goes live on your own domain

Premium takes a little longer because of the booking setup.
```

**/followup**
```
Hi, just checking in. Did you get a chance to look at the website link I sent? Happy to answer any questions.
```

**/thanks**
```
Asante sana for choosing Nestly Africa 🙏 It's a pleasure working with you. If you know another property owner who needs a website, feel free to send them our way!
```

**/affiliate**
```
Know other property owners? Join the Nestly Africa affiliate program 🤝

They get 10% off, and you earn 20% of what they pay: KES 3,240 per Starter or KES 6,300 per Premium, sent to your M-Pesa once they pay in full.

Sign up: https://nestlyafrica.cloud/partner.html
```
