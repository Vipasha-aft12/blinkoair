"use client";
import { useEffect, useRef } from "react";
import { applySite } from "@/lib/site";
import "./ResultsBody.css";

// Renders the flight-results markup exactly as designed. The only behaviour added
// is invisible: each "Select" button is pointed at the matching /checkout/<trip>-<stops>/
// page (search → result → checkout). No markup is injected, so the design is unchanged.
export default function ResultsBody({ bodyHtml, variant = "one-way" }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const trip = variant.indexOf("one-way") === 0 ? "one-way" : "round-trip";
    root.querySelectorAll("a.fbook").forEach((a) => {
      const card = a.closest(".fresult");
      let stops = "nonstop";
      const sl = card && card.querySelector(".leg__stops");
      if (sl) {
        const m = sl.textContent.trim().toLowerCase().match(/(\d+)\s*stop/);
        if (m) stops = m[1] + "-stop";
      }
      a.setAttribute("href", "/checkout/" + trip + "-" + stops + "/");
    });
  }, [bodyHtml, variant]);

  return <main className="results-page" ref={ref} dangerouslySetInnerHTML={{ __html: applySite(bodyHtml) }} />;
}
