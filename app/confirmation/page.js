import PageChrome from "@/components/common/PageChrome/PageChrome";
import ConfirmationBody from "@/components/ConfirmationPage/ConfirmationBody/ConfirmationBody";
import { CONFIRMATION } from "@/content/confirmation";
import { SITE } from "@/config/site";

export const metadata = {
  title: CONFIRMATION.meta.title,
  description: CONFIRMATION.meta.description,
  alternates: { canonical: SITE.domain + "/confirmation/" },
  robots: { index: false, follow: false }, // private booking confirmation
};

export default function ConfirmationPage() {
  return (
    <>
      <PageChrome ribbon />
      <ConfirmationBody bodyHtml={CONFIRMATION.bodyHtml} />
    </>
  );
}