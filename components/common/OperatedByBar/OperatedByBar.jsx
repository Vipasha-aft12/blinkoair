import { SITE } from "@/config/site";
import { IconShield } from "@/components/common/icons";
import "./OperatedByBar.css";

export default function OperatedByBar() {
  return (
    <div className="opbar"><div className="wrap">
      <IconShield />
      <span>Operated by <strong>{SITE.legalEntity}</strong> — an independent travel agency, not an airline.</span>
    </div></div>
  );
}
