import AsideCall from "@/components/common/AsideCall/AsideCall";
import { applySite } from "@/lib/site";
import "./RouteContent.css";

export default function RouteContent({ bodyHtml, related }) {
  return (
    <section className="section"><div className="wrap"><div className="split">
      <div className="prose" dangerouslySetInnerHTML={{ __html: applySite(bodyHtml) }} />
      <AsideCall
        heading="Talk to a real person"
        blurb="Not sure if today's fare is a good one? Our travel experts watch this route daily and will tell you honestly."
        related={related}
        relatedTitle="Related routes"
      />
    </div></div></section>
  );
}
