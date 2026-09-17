import Link from "next/link";
import Brand from "@/components/common/Brand/Brand";
import { SITE } from "@/config/site";
import { FOOTER_ROUTES, FOOTER_DESTINATIONS, FOOTER_DEALS, FOOTER_LEGAL } from "@/lib/nav";
import "./Footer.css";

function Col({ title, links }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>{links.map((l) => (<li key={l.href}><Link href={l.href}>{l.label}</Link></li>))}</ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer"><div className="wrap">
      <div className="footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>{SITE.tagline} An independent travel agency helping you compare and book flights with honest, all-in pricing.</p>
          <div className="footer-call">
            <span className="lbl">24/7 support</span><br />
            <a className="num" href={"tel:" + SITE.phoneTel}>{SITE.phoneDisplay}</a>
          </div>
        </div>
        <Col title="Popular Routes" links={FOOTER_ROUTES} />
        <Col title="Destinations" links={FOOTER_DESTINATIONS} />
        {/* Flight Deals category is intentionally not listed in the footer
            (noindex paid landing pages). Re-enable by uncommenting:
            <Col title="Flight Deals" links={FOOTER_DEALS} /> */}
        <Col title="Transparency" links={FOOTER_LEGAL} />
      </div>
      <div className="foot-bottom">
        <span>© {new Date().getFullYear()} {SITE.legalEntity}. All rights reserved.</span>
        <span className="links">
          <Link href="/about/">About</Link>
          <Link href="/contact/">Contact</Link>
          <Link href="/sitemap/">Sitemap</Link>
        </span>
      </div>
      <p className="disclaimer">
        {SITE.brand} is a trading name of {SITE.legalEntity}, an independent online travel agency. We are not an airline and are not affiliated with, endorsed by, or acting on behalf of any airline. All airline names, logos, and trademarks are the property of their respective owners and are used for identification only. Fares shown are indicative, may change without notice, and are subject to availability and the fare rules of the operating airline. A per-ticket service fee (disclosed before you pay) may apply. See our <Link href="/fare-disclosure/">Fare Disclosure</Link>, <Link href="/taxes-and-fees/">Taxes &amp; Fees</Link>, and <Link href="/terms/">Terms &amp; Conditions</Link>.
      </p>
    </div></footer>
  );
}
