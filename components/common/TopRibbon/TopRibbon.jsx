import { SITE } from "@/config/site";
import "./TopRibbon.css";

export default function TopRibbon() {
  return (
    <div className="ribbon"><div className="wrap">
      <span>All-in pricing — taxes included, fees shown before you pay.</span>
      {SITE.arc ? (<><span className="dot" /> <strong>{SITE.arc} Accredited</strong></>) : null}
      <span className="dot" /> <strong>{SITE.iata} Accredited</strong>
      <span className="dot" /> Live Amadeus fares
      <span className="dot" />{" "}
      <a href={"tel:" + SITE.phoneTel}>Call {SITE.phoneDisplay} · 24 hours a day, 7 days a week</a>
    </div></div>
  );
}
