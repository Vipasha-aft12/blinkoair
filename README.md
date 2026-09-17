# Blinkoair (Next.js)

Static-export Next.js App Router site generated from the Blinkoair design.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Before publishing
Edit **`config/site.js`** once — brand, phone, legal entity, merchant of record,
ARC/IATA, service-fee range, domain, email, address. Those values flow to every
page, the JSON-LD, canonicals and the sitemap. Leave `arc` empty unless you truly
hold ARC accreditation (publishing an unheld number is misrepresentation).

Drop card images into `public/assets/img/` using the filenames in the tiles.

## Structure
- `app/*` — route files (`.js`), one data-driven template per page type
- `components/common/*` — sections reused across pages (Header, Footer, CallBar, SearchCard, ...)
- `components/<Page>/<Section>/*` — sections unique to a page type (`.jsx` + `.css`)
- `content/*` — page content data (routes, destinations, legal)
- `app/globals.css` — design tokens + primitives reused site-wide
