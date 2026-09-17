import Link from "next/link";
import { SITE } from "@/config/site";
import "./AsideCall.css";

// heading, blurb, related:[{label,href}], relatedTitle
export default function AsideCall({ heading, blurb, related = [], relatedTitle = "Related" }) {
  return (
    <aside className="aside-card">
      <h3>{heading}</h3>
      <p>{blurb}</p>
      <p className="num">{SITE.phoneDisplay}</p>
      <a className="btn btn--call btn--block" href={"tel:" + SITE.phoneTel}>Call now</a>
      <p className="aside-note">Open 24 hours a day, 7 days a week. No phone trees — a person answers.</p>
      {related.length ? (
        <>
          <hr className="aside-rule" />
          <h3 className="aside-related-h">{relatedTitle}</h3>
          <ul className="aside-related">
            {related.map((r) => (<li key={r.href}><Link href={r.href}>{r.label}</Link></li>))}
          </ul>
        </>
      ) : null}
    </aside>
  );
}
