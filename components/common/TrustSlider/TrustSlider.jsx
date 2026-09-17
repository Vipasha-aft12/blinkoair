import { SITE } from "@/config/site";
import { IconBolt, IconGlobe, IconBadge, IconFile } from "@/components/common/icons";
import "./TrustSlider.css";

export default function TrustSlider() {
  return (
    <div className="tslider-wrap">
      <div className="tslider" role="list" aria-label="Why book with us">
        {SITE.arc ? (
          <article className="tcard">
            <span className="tcard-badge tcard-badge--navy tcard-badge--text">{SITE.arc}</span>
            <h3 className="tcard-title">{SITE.arc} Accredited<span>Verified travel agency</span></h3>
            <p className="tcard-sub">Accreditation on file</p>
          </article>
        ) : null}
        <article className="tcard">
          <span className="tcard-badge tcard-badge--navy tcard-badge--text">{SITE.iata}</span>
          <h3 className="tcard-title">{SITE.iata} Accredited<span>Verified travel agency</span></h3>
          <p className="tcard-sub">Accreditation on file</p>
        </article>
        <article className="tcard">
          <span className="tcard-badge tcard-badge--orange"><IconBolt /></span>
          <h3 className="tcard-title">Live Fares<span>via Amadeus GDS</span></h3>
          <p className="tcard-sub">Real-time prices &amp; availability</p>
        </article>
        <article className="tcard">
          <span className="tcard-badge tcard-badge--navy"><IconGlobe /></span>
          <h3 className="tcard-title">Independent<span>Travel Agency</span></h3>
          <p className="tcard-sub">We are not an airline</p>
        </article>
        <article className="tcard">
          <span className="tcard-badge tcard-badge--orange"><IconBadge /></span>
          <h3 className="tcard-title">Operated by<span>{SITE.legalEntity}</span></h3>
          <p className="tcard-sub">U.S.-based travel company</p>
        </article>
        <article className="tcard">
          <span className="tcard-badge tcard-badge--orange"><IconFile /></span>
          <h3 className="tcard-title">Registered<span>in the USA</span></h3>
          <p className="tcard-sub">Strong U.S. presence</p>
        </article>
      </div>
    </div>
  );
}
