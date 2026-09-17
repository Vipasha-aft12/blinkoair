import { IconDoc, IconShield, IconCheck, IconChat } from "@/components/common/icons";
import "./TrustStrip.css";

const ITEMS = [
  { Icon: IconDoc, h: "Fees disclosed upfront", p: "Every charge itemised before payment." },
  { Icon: IconShield, h: "24-hour free cancellation", p: "Cancel within 24 hrs of booking for a full refund on eligible tickets, per U.S. DOT rules." },
  { Icon: IconCheck, h: "Named merchant of record", p: "You see exactly which company bills your card." },
  { Icon: IconChat, h: "Human support, day or night", p: "No bots-only walls. Reach a person 24/7." },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip"><div className="wrap">
      {ITEMS.map(({ Icon, h, p }, i) => (
        <div className="trust-item" key={i}>
          <div className="ic"><Icon /></div>
          <div><h4>{h}</h4><p>{p}</p></div>
        </div>
      ))}
    </div></section>
  );
}
