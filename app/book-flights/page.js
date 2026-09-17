import PageChrome from "@/components/common/PageChrome/PageChrome";
import HeroSearch from "@/components/common/HeroSearch/HeroSearch";
import BookIntro from "@/components/BookFlights/BookIntro/BookIntro";
import CtaBand from "@/components/common/CtaBand/CtaBand";
import { BOOK_META } from "@/content/book";
import { pageMetadata } from "@/lib/metadata";

const BOOK_BADGES = ["All-in pricing", "Fees shown before you pay", "24/7 human support", "24-hour free cancellation"];

export const metadata = pageMetadata({
  title: BOOK_META.title,
  description: BOOK_META.description,
  path: "/book-flights/",
  noindex: true, // per SEO sheet: this paid landing page is kept out of the index
});

export default function BookFlightsPage() {
  return (
    <>
      <PageChrome ribbon />
      <main>
        <HeroSearch h1={BOOK_META.h1} lead="Tell us where you're going — a real travel expert compares hundreds of airlines, holds your fare, and explains every charge before you pay." badges={BOOK_BADGES} />
        <BookIntro />
      </main>
      <CtaBand heading="Book by phone in minutes" text="Skip the forms — call a travel expert now and we'll do the searching for you, 24/7." />
    </>
  );
}
