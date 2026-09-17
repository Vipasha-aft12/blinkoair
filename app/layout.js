import "./globals.css";
import { SITE } from "@/config/site";
import Footer from "@/components/common/Footer/Footer";
import CallBar from "@/components/common/CallBar/CallBar";
import Clarity from "@/components/common/Clarity/Clarity";
import { JsonLd, travelAgencyLd, websiteLd } from "@/lib/jsonld";

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: { default: SITE.brand + " — Cheap Flights, Honest Prices, Real Support", template: "%s | " + SITE.brand },
  description: "Compare cheap flights across hundreds of airlines with all-in pricing — taxes included, fees shown before you pay, and real people on the phone 24/7.",
  icons: { icon: "/assets/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={travelAgencyLd()} />
        <JsonLd data={websiteLd()} />
      </head>
      <body>
        {children}
        <Footer />
        <CallBar />
        <Clarity />
      </body>
    </html>
  );
}
