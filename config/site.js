// ==========================================================================
// Blinkoair — SINGLE source of truth for all real-world identity values.
// Fill these once before publishing; every page, JSON-LD block, canonical URL
// and the sitemap reads from here.
// ==========================================================================
export const SITE = {
  brand:        "Blinkoair",
  brandBase:    "Blinko",   // logo splits Blinko + air
  brandAccent:  "air",
  tagline:      "Book in a blink. Clear fares, real people, no surprises.",

  // Your real https domain (used for canonical, OG, sitemap). No trailing slash.
  domain:       "https://flights.blinkoair.com",

  legalEntity:  "<<Your Legal Entity LLC>>",  // legal company / merchant of record
  merchant:     "<<Your Legal Entity LLC>>",

  // Accreditations — LEAVE arc EMPTY ("") unless you truly hold ARC.
  // Publishing an ARC number you don't have is the misrepresentation that gets
  // OTAs suspended. Empty => the trust ribbon simply won't claim it.
  arc:  "ARC",
  iata: "IATA",

  // Phone (call-first model). display = shown text; tel = digits for tel: links.
  phoneDisplay:    "<<(000) 000-0000>>",
  phoneTel:        "+10000000000",
  tollFreeDisplay: "<<1-800-000-0000>>",
  tollFreeTel:     "+18000000000",

  email:   "<<support@blinkoair.com>>",
  address: "<<Street, City, State ZIP, United States>>",

  // Per-ticket service-fee range shown in fare disclosures.
  serviceFeeMin: "$9",
  serviceFeeMax: "$49",

  // Optional: Microsoft Clarity project id (heatmaps + recordings on paid
  // traffic). Leave "" to disable.
  clarityId: "",
};
