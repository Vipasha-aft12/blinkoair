import "./RouteFacts.css";

// facts: [{k, v, n}]
export default function RouteFacts({ facts }) {
  return (
    <section className="section--tight"><div className="wrap">
      <div className="route-facts">
        {facts.map((f, i) => (
          <div className="fact" key={i}>
            <div className="k">{f.k}</div>
            <div className="v">{f.v}</div>
            <div className="n">{f.n}</div>
          </div>
        ))}
      </div>
    </div></section>
  );
}
