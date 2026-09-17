import Link from "next/link";
import PageChrome from "@/components/common/PageChrome/PageChrome";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <PageChrome />
      <main>
        <section className="section"><div className="wrap prose" style={{ textAlign: "center" }}>
          <h1>Page not found</h1>
          <p>The page you're looking for doesn't exist or has moved.</p>
          <p><Link className="btn btn--accent btn--lg" href="/">Back to home</Link></p>
        </div></section>
      </main>
    </>
  );
}
