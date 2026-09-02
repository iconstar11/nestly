# Nestly Africa

Property websites for short-stay accommodation in Nairobi — mobile-friendly pages with photo galleries, amenities, location, pricing, and direct WhatsApp enquiries.

## One-time setup

```bash
# 1. Clone / push this repo to GitHub
git init && git remote add origin https://github.com/<you>/nestly.git

# 2. Install dependencies
pip install -r requirements.txt

# 3. Enable GitHub Pages
# Repo Settings → Pages → Source: Deploy from branch → main / root
```

Your portfolio page will be live at:
`https://<you>.github.io/nestly/`

---

## Adding a new client (5–10 min)

```bash
# 1. Copy the template folder
cp -r clients/example clients/<area-name>

# 2. Fill in the config
nano clients/<area-name>/config.yaml

# 3. Generate the page
python generate.py clients/<area-name>

# 4. Add to the portfolio (src/data/listings.js array)
# copy an existing entry, update slug/name/area/price/image

# 5. Rebuild the business site
npm run build

# 6. Push
git add clients/<area-name>/ src/data/listings.js index.html
git commit -m "Add: <Property Name>"
git push

# 7. Shorten URL
# bitly.com → https://<you>.github.io/nestly/clients/<area-name>/
# → bit.ly/xxxxx  ← send this to the owner
```

---

## Config fields reference

| Field | What it is |
|---|---|
| `property_name` | Full display name, shown as the H1 |
| `tagline` | One-line hook under the title |
| `property_type` | e.g. "Furnished studio", "Serviced apartment" |
| `area` | Neighbourhood (Westlands, Kilimani…) |
| `city` | Nairobi |
| `landmarks` | List of nearby places people search for |
| `extra_keywords` | Comma-separated SEO keywords |
| `meta_description` | Google snippet — keep under 155 chars |
| `location_description` | Paragraph shown on the page |
| `price_per_night` | Number only, no commas |
| `currency` | Currency code (default KES) |
| `min_nights` | Minimum stay length |
| `hero_image` | Main image URL |
| `extra_images` | List of up to 4 extra image URLs |
| `image_alt_text` | Alt text per image, same order as `extra_images` |
| `amenities` | List of what's included |
| `house_rules` | Optional list of rules |
| `faqs` | Optional list of `{ q, a }` pairs |
| `phone` | Display phone number |
| `whatsapp` | Number with country code, no + or spaces |
| `email` | Optional contact email |
| `external_reservation_url` | Optional availability link — leave empty to hide the button |
| `external_reservation_label` | Button label for the link above (default "Check availability") |
| `client_domain` | The owner's .site domain, once purchased |
| `branded_email` | e.g. `hello@yourproperty.site`, once set up |
| `email_provider` | Provider used for the branded email |
| `email_setup_included` | Whether email setup ships with the package |
| `canonical_url` | Live page URL once deployed (also used for Open Graph) |

---

## Pricing

| Package | Price |
|---|---|
| Starter | KES 11,000 one-time |
| Professional | KES 15,000 one-time |

One-time payment. No monthly website fee. The .site domain and branded email are included for the first year; renewal after the first year is charged separately at the provider's current renewal price. See the business site for the full package contents.
