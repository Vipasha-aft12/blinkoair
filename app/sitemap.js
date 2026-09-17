import { SITE } from "@/config/site";
import { ROUTE_SLUGS } from "@/content/routes";
import { DESTINATION_SLUGS } from "@/content/destinations";
import { LEGAL_SLUGS } from "@/content/legal";

export default function sitemap() {
  const base = SITE.domain;
  const now = new Date();
  const urls = ["/", "/sitemap/", "/deals/"];
  ROUTE_SLUGS.forEach((s) => urls.push("/routes/" + s + "/"));
  DESTINATION_SLUGS.forEach((s) => urls.push("/destination/" + s + "/"));
  LEGAL_SLUGS.forEach((s) => urls.push("/" + s + "/"));
  // Excluded on purpose (noindex, follow paid landing pages): /book-flights/ and
  // every /deals/<slug>/ page. The /deals/ hub above IS indexed.
  return urls.map((u) => ({ url: base + u, lastModified: now }));
}
