# BnB Pages — Workflow

## Cold call → Live page in under 30 minutes

---

### Step 1 — Find lead (2 min)
- Open Airbnb, filter by Nairobi area
- Note: host name, listing URL, area, nightly price, phone (if visible)
- Add to `leads.csv` with status = `found`

---

### Step 2 — WhatsApp outreach (1 min)
Send this message (with the free video attached):

> "Hi [Name], I saw your listing on Airbnb. I made you a short video for it — no charge. I also help BnB hosts like you get found directly on Google and AI tools like ChatGPT, without depending on Airbnb. Would you be open to a quick call this week?"

Update CSV status → `contacted`

---

### Step 3 — Quick call (10–15 min)
Confirm:
- Property name / branding they want
- Area + key landmarks nearby
- Amenities list
- Photos (ask them to share 5–8 on WhatsApp)
- Their price per night
- WhatsApp number for bookings
- Airbnb / Booking.com link

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
`https://<your-github-username>.github.io/bnb-pages/clients/<client-slug>/`

---

### Step 6 — Bitly + deliver (1 min)
- Go to bitly.com → shorten the GitHub Pages URL
- Add Bitly URL to `leads.csv`
- Send the link to the host on WhatsApp

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
| `paying` | On monthly retainer |
| `dead` | Not interested |

---

## Pricing Reminder
- Setup fee = 1 night's rate (one-time)
- Monthly = ~20–25% of 1 night's rate (hosting + updates)
- You own the GitHub repo; if they stop paying, the page goes down
