import TrustStrip from "@/components/common/TrustStrip/TrustStrip";

// Paid landing supporting content (kept lean + message-matched; page is noindex).
export default function BookIntro() {
  return (
    <>
      <TrustStrip />
      <section className="section"><div className="wrap">
        <div className="prose" style={{ maxWidth: 820 }}>
          <h2>Book your flight with a real travel expert</h2>
          <p>Tell us where and when — our team compares hundreds of airlines, holds the fare, and explains every charge before you pay. The price we quote includes the base fare and mandatory airline taxes; any service fee is shown up front, and eligible tickets can be cancelled within 24 hours for a full refund under U.S. DOT rules.</p>
          <div className="callout accent"><strong>No surprises:</strong> taxes are included in the fare, optional extras are confirmed at checkout, and your card is billed by our named merchant of record.</div>
        </div>
      </div></section>
    </>
  );
}
