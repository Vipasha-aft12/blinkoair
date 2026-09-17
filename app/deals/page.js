import PageChrome from "@/components/common/PageChrome/PageChrome";
import CtaBand from "@/components/common/CtaBand/CtaBand";
import DealCard from "@/components/DealsPage/DealCard/DealCard";
import { DEAL_CARDS } from "@/content/deals";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbLd } from "@/lib/jsonld";

export const metadata = pageMetadata({
  title: "Flight Deals & Booking — Honest All-In Fares",
  description: "Compare cheap flight deals, one-way fares, reservations and tickets with all-in pricing — taxes included, fees shown before you pay, and real people on the phone 24/7.",
  path: "/deals/",
});

const CRUMBS = [{ name: "Home", path: "/" }, { name: "Flight Deals" }];

export default function DealsIndex() {
  return (
    <>
      <PageChrome ribbon />
      <main>
        <div className="page-head"><div className="wrap">
          <span className="eyebrow">Flight deals &amp; booking</span>
          <h1>Cheap flight deals, honestly priced</h1>
          <p className="lead">Compare genuine deals, one-way fares, reservations and tickets — every option shown with the true, all-in price and a travel expert on call 24/7.</p>
        </div></div>
        <section className="section"><div className="wrap">
          <div className="grid grid-3">
            {DEAL_CARDS.map((c) => (
              <DealCard key={c.href} href={c.href} title={c.title.split(" — ")[0]} blurb={c.blurb} />
            ))}
          </div>
        </div></section>
      </main>
      <CtaBand heading="Prefer to book with a person?" text="Skip the forms — call a travel expert now and we'll compare the deals for you, 24/7." />
      <JsonLd data={breadcrumbLd(CRUMBS)} />
    </>
  );
}
