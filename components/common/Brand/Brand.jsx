import Link from "next/link";
import { SITE } from "@/config/site";
import "./Brand.css";

// Logo lockup — SVG + wordmark identical to the source HTML. Used by header + footer.
export default function Brand({ className = "" }) {
  return (
    <Link className={("brand " + className).trim()} href="/" aria-label={SITE.brand + " home"}>
      <span className="mark">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5S18 3 16.5 4.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1Z" />
        </svg>
      </span>
      <span>{SITE.brandBase}<em>{SITE.brandAccent}</em></span>
    </Link>
  );
}
