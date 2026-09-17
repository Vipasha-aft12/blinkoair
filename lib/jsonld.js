import { SITE } from "@/config/site";

// Central JSON-LD builders. Only mark up content that is actually rendered.
export function travelAgencyLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: SITE.brand,
    url: SITE.domain,
    telephone: SITE.phoneDisplay,
    email: SITE.email,
    slogan: SITE.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressCountry: "US",
    },
    parentOrganization: { "@type": "Organization", name: SITE.legalEntity },
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.brand,
    url: SITE.domain,
  };
}

export function breadcrumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.path ? { item: SITE.domain + it.path } : {}),
    })),
  };
}

export function faqLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Small server component to inject a JSON-LD script.
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
