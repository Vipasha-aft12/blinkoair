import Link from "next/link";

export default function Difference() {
  return (
    <section className="section--tight"><div className="wrap">
      <div className="prose" style={{ maxWidth: 820 }}>
        <span className="eyebrow">The Blinkoair difference</span>
        <h2>The price you see is the price you pay</h2>
        <p>Most flight sites make money from what they <em>don't</em> tell you — a low fare that balloons at checkout, fees buried three clicks deep, a support line that never picks up. Blinkoair is built the other way around. We show the base fare plus taxes together, disclose our small service fee before you pay, and publish every post-ticketing charge in a plain table you can read in advance. When plans change, a real person answers the phone.</p>
        <p>We're an independent agency, so we don't push one airline over another. You get options on their merits — schedule, price, and fare conditions — and an honest opinion on whether today's fare is a good one. That's the whole idea behind <Link href="/transparency/">our Transparency Promise</Link>.</p>
      </div>
    </div></section>
  );
}
