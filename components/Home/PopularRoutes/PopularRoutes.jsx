import DestinationTile from "@/components/common/DestinationTile/DestinationTile";
import { ROUTE_TILES } from "@/content/routes";

export default function PopularRoutes() {
  return (
    <section className="section" id="routes"><div className="wrap">
      <div className="sec-head">
        <span className="eyebrow">Route guides</span>
        <h2>Popular flight routes</h2>
        <p className="lead">Honest fare guides for the routes travellers search most — how prices move, which airlines fly them, and when to book.</p>
      </div>
      <div className="grid grid-3">
        {ROUTE_TILES.map((t) => (<DestinationTile key={t.href} {...t} />))}
      </div>
    </div></section>
  );
}
