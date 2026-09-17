"use client";
import { useState } from "react";
import Link from "next/link";
import Brand from "@/components/common/Brand/Brand";
import { SITE } from "@/config/site";
import { PRIMARY_NAV } from "@/lib/nav";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={"site-header" + (open ? " open" : "")}>
      <div className="wrap">
        <Brand />
        <button
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
        <nav className="nav" aria-label="Primary">
          {PRIMARY_NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
        </nav>
        <div className="header-call">
          <span className="lbl">Talk to a travel expert</span>
          <a className="num" href={"tel:" + SITE.phoneTel}> {SITE.phoneDisplay}</a>
        </div>
      </div>
    </header>
  );
}
