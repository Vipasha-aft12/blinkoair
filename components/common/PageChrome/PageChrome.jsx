import TopRibbon from "@/components/common/TopRibbon/TopRibbon";
import Header from "@/components/common/Header/Header";
import OperatedByBar from "@/components/common/OperatedByBar/OperatedByBar";

export default function PageChrome({ ribbon = false }) {
  return (
    <>
      {ribbon ? <TopRibbon /> : null}
      <Header />
      <OperatedByBar />
    </>
  );
}
