import { SITE } from "@/config/site";
import { IconShield, IconClock, IconTag, IconPhone } from "@/components/common/icons";
import "./CallBar.css";

export default function CallBar() {
  return (
    <div className="callbar" role="complementary" aria-label="Call to book">
      <div className="callbar-trust">
        <span><IconShield /> Secure booking</span>
        <span><IconClock /> 24/7 human support</span>
        <span><IconTag /> No hidden fees</span>
      </div>
      <a className="btn btn--brand callbar-btn" href={"tel:" + SITE.tollFreeTel}>
        <IconPhone /> Call toll-free {SITE.tollFreeDisplay}
      </a>
    </div>
  );
}
