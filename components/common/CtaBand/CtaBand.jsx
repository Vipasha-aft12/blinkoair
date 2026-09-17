import Link from "next/link";
import { SITE } from "@/config/site";
import { IconPhone } from "@/components/common/icons";
import "./CtaBand.css";

export default function CtaBand({ heading, text }) {
  return (
    <section className="section--tight"><div className="wrap">
      <div className="cta-band">
        <div>
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
        <div className="actions">
          <a className="btn btn--call btn--lg" href={"tel:" + SITE.phoneTel}>
            <IconPhone /> Call {SITE.phoneDisplay}
          </a>
          <Link className="btn btn--ghost btn--lg" href="/transparency/">See our promises</Link>
        </div>
      </div>
    </div></section>
  );
}
