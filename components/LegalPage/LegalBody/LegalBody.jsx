import { applySite } from "@/lib/site";
import "./LegalBody.css";

// h1, lead, updated, bodyHtml (the inner content of the legal article)
export default function LegalBody({ h1, lead, updated, bodyHtml }) {
  return (
    <main>
      <div className="page-head"><div className="wrap">
        <h1>{h1}</h1>
        {lead ? <p className="lead">{lead}</p> : null}
        {updated ? <p className="updated">Last updated: {updated}</p> : null}
      </div></div>
      <section className="section"><div className="wrap">
        <div className="legal" dangerouslySetInnerHTML={{ __html: applySite(bodyHtml) }} />
      </div></section>
    </main>
  );
}
