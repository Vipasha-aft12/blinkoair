import AsideCall from "@/components/common/AsideCall/AsideCall";
import { applySite } from "@/lib/site";

export default function DestinationContent({ bodyHtml, related }) {
  return (
    <section className="section"><div className="wrap"><div className="split">
      <div className="prose" dangerouslySetInnerHTML={{ __html: applySite(bodyHtml) }} />
      <AsideCall
        heading="Talk to a real person"
        blurb="Tell us your dates and we'll find the best fare into this destination — and explain every charge before you pay."
        related={related}
        relatedTitle="More destinations"
      />
    </div></div></section>
  );
}
