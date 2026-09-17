import { IconTag, IconPhone, IconGlobe, IconLock } from "@/components/common/icons";
import "./WhyBlinkoair.css";

const CARDS = [
  { Icon: IconTag, h: "All-in pricing", p: "The fare you see includes taxes. Our service fee is shown before you pay — never sprung on you at the end." },
  { Icon: IconPhone, h: "Real people, 24/7", p: "Speak to a live travel expert any hour. No phone trees designed to make you give up." },
  { Icon: IconGlobe, h: "Hundreds of airlines", p: "We don't play favourites. You get unbiased options across full-service and low-cost carriers." },
  { Icon: IconLock, h: "Secure checkout", p: "Encrypted payments processed by our named merchant of record. You always know who you're paying." },
];

export default function WhyBlinkoair() {
  return (
    <section className="section"><div className="wrap">
      <div className="sec-head center">
        <span className="eyebrow">Why Blinkoair</span>
        <h2>Booking a flight shouldn't feel like a trap</h2>
        <p className="lead">We built Blinkoair around one idea: tell travellers the truth about price, and be reachable when plans change.</p>
      </div>
      <div className="grid grid-4 value">
        {CARDS.map(({ Icon, h, p }, i) => (
          <div className="card" key={i}>
            <div className="ic"><Icon /></div>
            <h3>{h}</h3><p>{p}</p>
          </div>
        ))}
      </div>
    </div></section>
  );
}
