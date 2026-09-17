import { SITE } from "@/config/site";

// Replaces the design's <<placeholder>> tokens and demo tel: numbers inside
// stored editorial HTML with the live values from config/site.js, so prose
// content stays in sync with the one config file.
export function applySite(html) {
  if (!html) return html;
  return html
    .replaceAll("&amp;amp;", "&amp;")
    .replaceAll("<<Your Legal Entity LLC>>", SITE.legalEntity)
    .replaceAll("<<(000) 000-0000>>", SITE.phoneDisplay)
    .replaceAll("<<1-800-000-0000>>", SITE.tollFreeDisplay)
    .replaceAll("<<support@blinkoair.com>>", SITE.email)
    .replaceAll("<<Street, City, State ZIP, United States>>", SITE.address)
    .replaceAll('tel:+18000000000', 'tel:' + SITE.tollFreeTel)
    .replaceAll('tel:+10000000000', 'tel:' + SITE.phoneTel);
}
