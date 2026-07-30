# BnB Pages

Landing pages for Nairobi BnB hosts — optimised for Google SEO and AI search (ChatGPT, Claude).

## One-time setup

```bash
# 1. Clone / push this repo to GitHub
git init && git remote add origin https://github.com/<you>/bnb-pages.git

# 2. Install dependencies
pip install -r requirements.txt

# 3. Enable GitHub Pages
# Repo Settings → Pages → Source: Deploy from branch → main / root
```

Your portfolio page will be live at:
`https://<you>.github.io/bnb-pages/`

---

## Adding a new client (5–10 min)

```bash
# 1. Copy the template folder
cp -r clients/westlands-riverside clients/<area-name>

# 2. Fill in the config
nano clients/<area-name>/config.yaml

# 3. Generate the page
python generate.py clients/<area-name>

# 4. Add to the portfolio (index.html listings array)
# open index.html, copy an existing entry, update slug/name/area/price/image

# 5. Push
git add clients/<area-name>/ index.html
git commit -m "Add: <Property Name>"
git push

# 6. Shorten URL
# bitly.com → https://<you>.github.io/bnb-pages/clients/<area-name>/
# → bit.ly/xxxxx  ← send this to the host
```

---

## Config fields reference

| Field | What it is |
|---|---|
| `property_name` | Full display name, shown as the H1 |
| `tagline` | One-line hook under the title |
| `area` | Neighbourhood (Westlands, Kilimani…) |
| `city` | Nairobi |
| `landmarks` | List of nearby places people search for |
| `extra_keywords` | Comma-separated SEO keywords |
| `meta_description` | Google snippet — keep under 155 chars |
| `location_description` | Paragraph shown on the page |
| `price_per_night` | Number only, no commas |
| `min_nights` | Minimum booking length |
| `hero_image` | Main image URL (grab from Airbnb listing) |
| `extra_images` | List of up to 4 extra image URLs |
| `amenities` | List of what's included |
| `phone` | Display phone number |
| `whatsapp` | Number with country code, no + or spaces |
| `booking_link` | Airbnb / Booking.com listing URL |
| `booking_platform` | "Airbnb", "Booking.com", etc. |

---

## Pricing model

| | Amount |
|---|---|
| Setup fee | 1× nightly rate |
| Monthly retainer | ~25% of nightly rate |

You own the repo. If a client stops paying, you take down the page.
