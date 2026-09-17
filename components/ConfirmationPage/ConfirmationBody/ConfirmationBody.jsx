import { applySite } from "@/lib/site";
import "./ConfirmationBody.css";

// Booking confirmation (final step of the flow). Static content — no JS needed;
// rendered verbatim with config placeholders filled.
export default function ConfirmationBody({ bodyHtml }) {
  return <main className="wrap confirmation-page" dangerouslySetInnerHTML={{ __html: applySite(bodyHtml) }} />;
}