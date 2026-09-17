import DestinationTile from "@/components/common/DestinationTile/DestinationTile";
import { DEST_TILES } from "@/content/destinations";

export default function TopDestinations() {
  return (
    <section className="section" id="destinations"><div className="wrap">
      <div className="sec-head">
        <span className="eyebrow">Where to fly</span>
        <h2>Top destinations</h2>
        <p className="lead">Compare nearby airports, see itemised taxes on international trips, and book with all-in pricing.</p>
      </div>
      <div className="grid grid-3">
        {DEST_TILES.map((t) => (<DestinationTile key={t.href} {...t} />))}
      </div>
    </div></section>
  );
}
