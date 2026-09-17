import PageChrome from "@/components/common/PageChrome/PageChrome";
import CheckoutBody from "@/components/CheckoutPage/CheckoutBody/CheckoutBody";
import { getCheckout, CHECKOUT_VARIANTS } from "@/content/checkout";
import { SITE } from "@/config/site";

// Unknown variants 404 cleanly (required with output: export) instead of erroring.
export const dynamicParams = false;

export function generateStaticParams() {
  return CHECKOUT_VARIANTS.map((variant) => ({ variant }));
}

export function generateMetadata({ params }) {
  const c = getCheckout(params.variant);
  const url = SITE.domain + "/checkout/" + c.variant + "/";
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: url },
    // checkout is private: keep it out of the index and don't follow its links
    robots: { index: false, follow: false },
  };
}

export default function CheckoutPage({ params }) {
  const c = getCheckout(params.variant);
  return (
    <>
      <PageChrome ribbon />
      <CheckoutBody bodyHtml={c.bodyHtml} />
    </>
  );
}
