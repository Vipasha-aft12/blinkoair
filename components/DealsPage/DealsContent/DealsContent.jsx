import { applySite } from "@/lib/site";
// The authored body reuses the shared FAQ styles; deals-only rules live alongside.
import "@/components/common/Faq/Faq.css";
import "./DealsContent.css";

// Renders the page body after the hero (intro, value grid, steps, not-an-airline
// banner, good-to-know, FAQ) verbatim, with placeholders filled from config.
export default function DealsContent({ bodyHtml }) {
  return <div className="deals-body" dangerouslySetInnerHTML={{ __html: applySite(bodyHtml) }} />;
}
