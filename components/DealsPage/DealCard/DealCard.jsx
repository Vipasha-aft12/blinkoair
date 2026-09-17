import Link from "next/link";
import "./DealCard.css";

export default function DealCard({ href, title, blurb }) {
  return (
    <Link className="card deal-card" href={href}>
      <h3>{title}</h3>
      <p>{blurb}</p>
      <span className="deal-go">Explore →</span>
    </Link>
  );
}
