import PageChrome from "@/components/common/PageChrome/PageChrome";
import ResultsBody from "@/components/ResultsPage/ResultsBody/ResultsBody";
import { getResult, RESULT_VARIANTS } from "@/content/results";
import { pageMetadata } from "@/lib/metadata";

// Unknown variants 404 cleanly (required with output: export) instead of erroring.
export const dynamicParams = false;

export function generateStaticParams() {
  return RESULT_VARIANTS.map((variant) => ({ variant }));
}

export function generateMetadata({ params }) {
  const r = getResult(params.variant);
  return pageMetadata({
    title: r.meta.title,
    description: r.meta.description,
    path: "/flight-results/" + r.variant + "/",
    noindex: true, // search-results pages are noindex, follow
  });
}

export default function FlightResultsPage({ params }) {
  const r = getResult(params.variant);
  return (
    <>
      <PageChrome ribbon />
      <ResultsBody bodyHtml={r.bodyHtml} variant={params.variant} />
    </>
  );
}
