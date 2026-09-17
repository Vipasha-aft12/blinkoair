import { SITE } from "@/config/site";

// Builds a Next.js Metadata object from a page's meta row (title/description),
// its canonical path, and index/noindex flag — mirrors the SEO meta sheet.
export function pageMetadata({ title, description, path = "/", noindex = false }) {
  const url = SITE.domain + path;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: SITE.brand,
      title,
      description,
      url,
    },
    twitter: { card: "summary_large_image", title, description },
    other: { "geo.region": "US" },
  };
}
