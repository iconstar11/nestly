# Nestly Africa

Property websites for short-stay accommodation in Nairobi — mobile-friendly pages with photo galleries, amenities, location, pricing, and direct WhatsApp enquiries.

## One-time setup

```bash
# 1. Clone / push this repo to GitHub
git init && git remote add origin https://github.com/<you>/nestly.git

# 2. Install dependencies
pip install -r requirements.txt

# 3. Enable GitHub Pages
# Repo Settings → Pages → Source: Deploy from branch → master / root
```

Your business site will be live at:
`https://nestlyafrica.cloud/` (custom domain — see Deployment below)

---

## Deployment (one-time)

Hosted free on GitHub Pages from the `master` branch (repo root is the docroot;
built files are committed). Live at **https://nestlyafrica.cloud** — a custom
domain served by GitHub Pages with DNS on Cloudflare's free plan. The domain is
registered at Hostinger; the `CNAME` file at the repo root holds the domain.

1. Push the repo (Settings → Pages → Deploy from branch → `master` / root).
2. Add the site to Cloudflare (free plan) and set Cloudflare's two nameservers on
   the Hostinger panel (Domain → DNS → Change nameservers). Propagation usually
   takes under an hour, up to 24–48h.
3. In Cloudflare DNS, keep any email records, delete any stale web A record, and
   add (proxy status **DNS only** — GitHub serves its own TLS):

   | Type | Name | Content | Proxy status |
   |---|---|---|---|
   | A | @ | 185.199.108.153 | DNS only |
   | A | @ | 185.199.109.153 | DNS only |
   | A | @ | 185.199.110.153 | DNS only |
   | A | @ | 185.199.111.153 | DNS only |

   (These are GitHub Pages' four IPs — the official way to point an apex.
   Alternative: one `CNAME @ → <user>.github.io` record with Cloudflare CNAME
   flattening. `www` is intentionally not configured yet; later it can be a
   CNAME to `<user>.github.io` or a Cloudflare redirect rule to the apex.)
4. Repo → Settings → Pages → Custom domain: `nestlyafrica.cloud` → Save → wait for
   the green DNS check → enable **Enforce HTTPS**.
5. Verify: open https://nestlyafrica.cloud and
   https://nestlyafrica.cloud/stays/westlands-riverside/ — old github.io links
   redirect here, and `/clients/westlands-riverside/` is a redirect stub that
   forwards to the `/stays/` page.

### Future: per-client subdomains / paid-client domains (not built yet)

A single Pages site holds one custom domain, so a client's own domain gets its
own Pages site: a repo per client site, serve it from that domain, add A/CNAME
records in Cloudflare, and regenerate the page with `canonical_url` set to that
domain. Document only — build when a paid client needs it.

---

## Adding a new client (5–10 min)

```bash
# 1. Copy the template folder
cp -r stays/example stays/<area-name>

# 2. Fill in the config
nano stays/<area-name>/config.yaml

# 3. Generate the page
python generate.py stays/<area-name>

# 4. Add to the portfolio (src/data/listings.js array)
# copy an existing entry, update slug/name/area/price/image

# 5. Rebuild the business site
npm run build

# 6. Push
git add stays/<area-name>/ src/data/listings.js index.html
git commit -m "Add: <Property Name>"
git push

# 7. Shorten URL
# bitly.com → https://nestlyafrica.cloud/stays/<area-name>/
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
