import PageChrome from "@/components/common/PageChrome/PageChrome";
import HeroSearch from "@/components/common/HeroSearch/HeroSearch";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import DealsContent from "@/components/DealsPage/DealsContent/DealsContent";
import TrustStrip from "@/components/common/TrustStrip/TrustStrip";
import CtaBand from "@/components/common/CtaBand/CtaBand";
import { getDeal, DEAL_SLUGS } from "@/content/deals";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbLd } from "@/lib/jsonld";

// Unknown slugs 404 cleanly (required with output: export) instead of erroring.
export const dynamicParams = false;

export function generateStaticParams() {
  return DEAL_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const d = getDeal(params.slug);
  return pageMetadata({ title: d.meta.title, description: d.meta.description, path: "/deals/" + d.slug + "/", noindex: true });
}

export default function DealPage({ params }) {
  const d = getDeal(params.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Flight Deals", path: "/deals/" },
    { name: d.meta.h1.split(" — ")[0] },
  ];
  return (
    <>
      <PageChrome ribbon />
      <main>
        <HeroSearch h1={d.meta.h1} lead={d.lead} badges={d.badges} />
        <Breadcrumbs items={crumbs} />
        <DealsContent bodyHtml={d.bodyHtml} />
        <TrustStrip />
      </main>
      <CtaBand heading={d.cta.heading} text={d.cta.text} />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
