import "./Faq.css";

// faqs: [{q, a}]. Renders native <details> so content is in the HTML and
// needs no JavaScript to read.
export default function Faq({ faqs, heading = "Frequently asked questions" }) {
  return (
    <section className="section"><div className="wrap prose faq">
      <h2>{heading}</h2>
      {faqs.map((f, i) => (
        <details key={i}>
          <summary>{f.q}</summary>
          <div className="a">{f.a}</div>
        </details>
      ))}
    </div></section>
  );
}
