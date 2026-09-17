import Link from "next/link";
import PageChrome from "@/components/common/PageChrome/PageChrome";
import { pageMetadata } from "@/lib/metadata";
import { FOOTER_ROUTES, FOOTER_DESTINATIONS, FOOTER_DEALS, FOOTER_LEGAL, PRIMARY_NAV } from "@/lib/nav";

export const metadata = pageMetadata({ title: "Sitemap", description: "All Blinkoair pages — routes, destinations, and policies — in one place.", path: "/sitemap/" });

function Group({ title, links }) {
  return (
    <div className="prose">
      <h2>{title}</h2>
      <ul>{links.map((l) => (<li key={l.href}><Link href={l.href}>{l.label}</Link></li>))}</ul>
    </div>
  );
}

export default function SitemapPage() {
  return (
    <>
      <PageChrome ribbon />
      <main>
        <div className="page-head"><div className="wrap"><h1>Sitemap</h1><p className="lead">Every page on Blinkoair, in one place.</p></div></div>
        <section className="section"><div className="wrap">
          <Group title="Main" links={PRIMARY_NAV.filter((n) => !n.href.includes('#'))} />
          <Group title="Popular routes" links={FOOTER_ROUTES} />
          <Group title="Destinations" links={FOOTER_DESTINATIONS} />
          <Group title="Flight deals" links={FOOTER_DEALS} />
          <Group title="Transparency & policies" links={FOOTER_LEGAL} />
        </div></section>
      </main>
    </>
  );
}
