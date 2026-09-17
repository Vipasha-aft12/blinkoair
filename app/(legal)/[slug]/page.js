import PageChrome from "@/components/common/PageChrome/PageChrome";
import LegalBody from "@/components/LegalPage/LegalBody/LegalBody";
import { getLegal, LEGAL_SLUGS } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

// Unknown slugs 404 cleanly (required with output: export) instead of erroring.
export const dynamicParams = false;

export function generateStaticParams() {
  return LEGAL_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const p = getLegal(params.slug);
  return pageMetadata({ title: p.meta.title, description: p.meta.description, path: "/" + p.slug + "/" });
}

export default function LegalPage({ params }) {
  const p = getLegal(params.slug);
  return (
    <>
      <PageChrome ribbon />
      <LegalBody h1={p.h1} lead={p.lead} updated={p.updated} bodyHtml={p.bodyHtml} />
    </>
  );
}
