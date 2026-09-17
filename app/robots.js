import { SITE } from "@/config/site";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/book-flights/", "/checkout/", "/confirmation/"] }],
    sitemap: SITE.domain + "/sitemap.xml",
  };
}
