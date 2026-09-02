# Nestly — Workflow

## Cold call → Live page in under 30 minutes

---

### Step 1 — Find lead (2 min)
- Browse short-stay listings on Instagram, Facebook, and listing sites; filter by Nairobi area
- Note: owner name, property details, area, nightly price, phone (if visible)
- Add to `leads.csv` with status = `found`

---

### Step 2 — WhatsApp outreach (1 min)
Send this message (with the free video attached):

> "Hi [Name], I saw your property online. I made you a short video for it — no charge. I also build mobile-friendly property websites for owners in Nairobi, with a .site domain, branded email, and direct WhatsApp enquiries. Would you be open to a quick call this week?"

Update CSV status → `contacted`

---

### Step 3 — Quick call (10–15 min)
Confirm:
- Property name / branding they want
- Area + key landmarks nearby
- Amenities list
- Photos (ask them to share 5–8 on WhatsApp)
- Their price per night
- WhatsApp number for enquiries
- Any external availability link they use (optional)

Update CSV status → `call_done`

---

### Step 4 — Build the page (5–10 min)

```bash
# 1. Copy the example client folder
cp -r clients/example clients/<client-slug>
# e.g. clients/westlands-jane

# 2. Fill in config.yaml with call notes
# Use AI to help draft meta_description and location_description

# 3. Generate the page
python generate.py clients/<client-slug>

# 4. Open and review
open clients/<client-slug>/index.html
```

---

### Step 5 — Deploy (2 min)
```bash
git add clients/<client-slug>/
git commit -m "Add page: <client-slug>"
git push
```

Page is live at:
`https://<your-github-username>.github.io/nestly/clients/<client-slug>/`

---

### Step 6 — Bitly + deliver (1 min)
- Go to bitly.com → shorten the GitHub Pages URL
- Add Bitly URL to `leads.csv`
- Send the link to the owner on WhatsApp

Update CSV status → `page_live`

---

## CSV Status Values
| Status | Meaning |
|---|---|
| `found` | Lead identified, not yet contacted |
| `contacted` | WhatsApp sent + video delivered |
| `call_booked` | Call scheduled |
| `call_done` | Call completed, info collected |
| `page_live` | Page built and link sent |
| `paying` | One-time package paid |
| `dead` | Not interested |

---

## Pricing Reminder
- Starter — KES 11,000 one-time (one revision round)
- Professional — KES 15,000 one-time (two revision rounds + 30 days minor updates)
- No monthly fee. Domain and email renewal after year one is billed separately at the provider's price.
