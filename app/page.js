import PageChrome from "@/components/common/PageChrome/PageChrome";
import HeroSearch from "@/components/common/HeroSearch/HeroSearch";
import TrustStrip from "@/components/common/TrustStrip/TrustStrip";
import WhyBlinkoair from "@/components/Home/WhyBlinkoair/WhyBlinkoair";
import PopularRoutes from "@/components/Home/PopularRoutes/PopularRoutes";
import TopDestinations from "@/components/Home/TopDestinations/TopDestinations";
import Difference from "@/components/Home/Difference/Difference";
import Faq from "@/components/common/Faq/Faq";
import CtaBand from "@/components/common/CtaBand/CtaBand";
import { JsonLd, faqLd } from "@/lib/jsonld";
import CookieConsent from "@/components/common/CookieConsent/CookieConsent";

const HOME_FAQS = [
  { q: "Is Blinkoair an airline?", a: "No. Blinkoair is an independent travel agency. We help you compare and book flights across hundreds of airlines, and we're reachable 24/7 — but we are not an airline ourselves." },
  { q: "Are your prices really all-in?", a: "The fare we show includes the base fare and mandatory airline taxes. Our per-ticket service fee is shown before you pay, and optional extras like seats and bags are always confirmed at checkout. Nothing is added after payment. See our Fare Disclosure for the full detail." },
  { q: "Can I cancel for free?", a: "If you book at least seven days before departure, you can cancel within 24 hours of purchase for a full refund on eligible tickets, in line with U.S. Department of Transportation rules. After that, your fare rules apply — and we'll always tell you what they are before you buy." },
  { q: "Who will bill my card?", a: "Your payment is processed by our named merchant of record, which appears on your statement. You always know exactly who you're paying." },
  { q: "Can I speak to a real person?", a: "Yes, any hour. Call us and a live travel expert will answer — no bots-only wall and no phone maze designed to make you give up." },
];

const HOME_BADGES = ["Taxes included in the fare", "Fees shown before you pay", "24/7 human support", "24-hour free cancellation"];

export default function HomePage() {
  return (
    <>
      <PageChrome />
      <main>
        <HeroSearch h1="Cheap flights, honestly priced" srOnlyH1 badges={HOME_BADGES} />
        <TrustStrip />
        <WhyBlinkoair />
        <PopularRoutes />
        <TopDestinations />
        <Difference />
        <Faq faqs={HOME_FAQS} heading="Questions travellers ask us" />
      </main>
      <CtaBand heading="Ready to book — or just have a question?" text="Our travel experts can hold fares, compare options, and explain every fee — 24 hours a day, 7 days a week." />
      <JsonLd data={faqLd(HOME_FAQS)} />
      <CookieConsent />
    </>
  );
}
