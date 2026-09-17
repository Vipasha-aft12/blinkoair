import SearchCard from "@/components/common/SearchCard/SearchCard";
import TrustSlider from "@/components/common/TrustSlider/TrustSlider";
import { IconCheck } from "@/components/common/icons";
import "./HeroSearch.css";

// h1, srOnlyH1, lead, from, to, badges:[string]
export default function HeroSearch({ h1, srOnlyH1 = false, lead, from = "", to = "", badges = [] }) {
  return (
    <section className="hero"><div className="wrap">
      {srOnlyH1
        ? <h1 className="sr-only">{h1}</h1>
        : <><h1>{h1}</h1>{lead ? <p className="lead">{lead}</p> : null}</>}
      <SearchCard from={from} to={to} />
      <TrustSlider />
      <div className="hero-badges">
        {badges.map((b, i) => (<span className="pill" key={i}><IconCheck />{b}</span>))}
      </div>
    </div></section>
  );
}
