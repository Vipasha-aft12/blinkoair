import PageChrome from "@/components/common/PageChrome/PageChrome";
import HeroSearch from "@/components/common/HeroSearch/HeroSearch";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import DestinationContent from "@/components/Destination/DestinationContent/DestinationContent";
import Faq from "@/components/common/Faq/Faq";
import CtaBand from "@/components/common/CtaBand/CtaBand";
import { getDestination, DESTINATION_SLUGS } from "@/content/destinations";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbLd, faqLd } from "@/lib/jsonld";

const DEST_BADGES = ["All-in pricing", "24/7 human support", "24-hour free cancellation"];

// Unknown slugs 404 cleanly (required with output: export) instead of erroring.
export const dynamicParams = false;

export function generateStaticParams() {
  return DESTINATION_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const d = getDestination(params.slug);
  return pageMetadata({ title: d.meta.title, description: d.meta.description, path: "/destination/" + d.slug + "/" });
}

export default function DestinationPage({ params }) {
  const d = getDestination(params.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/#destinations" },
    { name: d.meta.h1.replace(/^Cheap Flights to /, "") },
  ];
  return (
    <>
      <PageChrome ribbon />
      <main>
        <HeroSearch h1={d.meta.h1} lead={d.lead} badges={DEST_BADGES} />
        <Breadcrumbs items={crumbs} />
        <DestinationContent bodyHtml={d.bodyHtml} related={d.related} />
        <Faq faqs={d.faqs} />
      </main>
      <CtaBand heading="Prefer to book with a person?" text="Our travel experts can find the best fare into this destination and explain every fee — 24/7." />
      <JsonLd data={breadcrumbLd(crumbs)} />
      <JsonLd data={faqLd(d.faqs)} />
    </>
  );
}
