import PageChrome from "@/components/common/PageChrome/PageChrome";
import HeroSearch from "@/components/common/HeroSearch/HeroSearch";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import RouteFacts from "@/components/RoutePage/RouteFacts/RouteFacts";
import RouteContent from "@/components/RoutePage/RouteContent/RouteContent";
import Faq from "@/components/common/Faq/Faq";
import CtaBand from "@/components/common/CtaBand/CtaBand";
import { getRoute, ROUTE_SLUGS } from "@/content/routes";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbLd, faqLd } from "@/lib/jsonld";

const ROUTE_BADGES = ["All-in pricing", "24/7 human support", "24-hour free cancellation"];

// Unknown slugs 404 cleanly (required with output: export) instead of erroring.
export const dynamicParams = false;

export function generateStaticParams() {
  return ROUTE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const r = getRoute(params.slug);
  return pageMetadata({ title: r.meta.title, description: r.meta.description, path: "/routes/" + r.slug + "/" });
}

export default function RoutePage({ params }) {
  const r = getRoute(params.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Routes", path: "/#routes" },
    { name: r.meta.h1.replace(/^Cheap Flights from /, "") },
  ];
  return (
    <>
      <PageChrome ribbon />
      <main>
        <HeroSearch h1={r.meta.h1} lead={r.lead} from={r.from} to={r.to} badges={ROUTE_BADGES} />
        <Breadcrumbs items={crumbs} />
        {r.facts?.length ? <RouteFacts facts={r.facts} /> : null}
        <RouteContent bodyHtml={r.bodyHtml} related={r.related} />
        <Faq faqs={r.faqs} />
      </main>
      <CtaBand heading="Prefer to book with a person?" text="Our travel experts can hold fares, compare options, and explain every fee — 24 hours a day, 7 days a week." />
      <JsonLd data={breadcrumbLd(crumbs)} />
      <JsonLd data={faqLd(r.faqs)} />
    </>
  );
}
