import Link from "next/link";
import "./Breadcrumbs.css";

// items: [{name, href?}] — last item has no href (current page).
export default function Breadcrumbs({ items }) {
  return (
    <div className="wrap">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        {items.map((it, i) => (
          <span key={i}>
            {it.href ? <Link href={it.href}>{it.name}</Link> : <span>{it.name}</span>}
            {i < items.length - 1 ? <span aria-hidden="true"> / </span> : null}
          </span>
        ))}
      </nav>
    </div>
  );
}
