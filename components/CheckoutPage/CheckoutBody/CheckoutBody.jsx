"use client";
import { useEffect, useRef } from "react";
import { applySite } from "@/lib/site";
import "./CheckoutBody.css";

// Renders the checkout (review & pay) markup and runs its interactivity on mount:
// card formatting + brand detection, live price summary (travellers, cabin
// upgrade, bags), add/remove travellers, and the terms gate on the Pay button.
// The Google Maps billing autocomplete is intentionally not loaded; the address
// stays a normal input (the source script already no-ops without google.maps).
export default function CheckoutBody({ bodyHtml }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || root.dataset.coInit) return;
    root.dataset.coInit = "1";

    // ----- card / expiry / cvv -----
    var num = document.getElementById("cc-num"), brand = document.getElementById("cc-brand");
    if (num) {
      num.addEventListener("input", function () {
        var d = num.value.replace(/[^0-9]/g, "").slice(0, 16);
        num.value = d.replace(/(.{4})/g, "$1 ").trim(); num.dataset.full = d;
        brand.textContent = /^4/.test(d) ? "VISA" : /^5[1-5]/.test(d) ? "MASTERCARD" : /^3[47]/.test(d) ? "AMEX" : /^6/.test(d) ? "DISCOVER" : "";
      });
      num.addEventListener("blur", function () { var d = (num.dataset.full || ""); if (d.length >= 4) num.value = "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 " + d.slice(-4); });
      num.addEventListener("focus", function () { var d = num.dataset.full || ""; if (d) num.value = d.replace(/(.{4})/g, "$1 ").trim(); });
    }
    var exp = document.getElementById("cc-exp");
    if (exp) exp.addEventListener("input", function () { var d = exp.value.replace(/[^0-9]/g, "").slice(0, 4); exp.value = d.length > 2 ? d.slice(0, 2) + "/" + d.slice(2) : d; });
    var cvv = document.getElementById("cc-cvv");
    if (cvv) cvv.addEventListener("input", function () { cvv.value = cvv.value.replace(/[^0-9]/g, "").slice(0, 4); });

    // ----- shared state + price -----
    var pax = 1, upg = 0, bags = 0;
    var box = document.querySelector(".co-summary");
    var pb = box ? +box.dataset.b : 0, pt = box ? +box.dataset.t : 0, ps = box ? +box.dataset.s : 0;
    function fmt(n) { return "$" + Number(n).toLocaleString(); }
    function set(id, v) { var el = document.getElementById(id); if (el) el.textContent = v; }
    function render() {
      if (!box) return;
      var b = pb * pax, t = pt * pax, s = ps * pax, u = upg * pax, bg = bags * 10;
      set("v-base", fmt(b)); set("v-tax", fmt(t)); set("v-svc", fmt(s));
      set("pax-q", pax); set("pax-lab", pax + " traveller" + (pax > 1 ? "s" : ""));
      var ru = document.getElementById("row-upg"); if (u > 0) { ru.hidden = false; set("amt-upg", fmt(u)); } else if (ru) ru.hidden = true;
      var rb = document.getElementById("row-bag"); if (bags > 0) { rb.hidden = false; set("amt-bag", fmt(bg)); set("q-bag", bags); } else if (rb) rb.hidden = true;
      var total = b + t + s + u + bg; set("grand", fmt(total));
      var cta = document.querySelector("#paybtn .amt"); if (cta) cta.textContent = fmt(total);
      set("mobar-amt", fmt(total));
    }
    document.querySelectorAll('input[name="cabin"]').forEach(function (r) { r.addEventListener("change", function () { upg = +r.dataset.add || 0; render(); }); });
    var stp = document.getElementById("bagstep");
    if (stp) stp.querySelectorAll("button").forEach(function (b) { b.addEventListener("click", function () { bags = Math.max(0, Math.min(9, bags + (+b.dataset.step))); render(); }); });

    // ----- travellers -----
    var tc = document.getElementById("trav-list"), tpl = document.getElementById("trav-tpl"),
      addBtn = document.getElementById("trav-add"), maxT = tc ? (+tc.dataset.max || 1) : 1;
    function typeFromDob(v) {
      if (!v) return "Adult (12+)";
      var bd = new Date(v), n = new Date(), a = n.getFullYear() - bd.getFullYear(), m = n.getMonth() - bd.getMonth();
      if (m < 0 || (m === 0 && n.getDate() < bd.getDate())) a--;
      return a >= 12 ? "Adult (12+)" : a >= 2 ? "Child (2\u201311)" : "Infant (under 2)";
    }
    function wire(block) {
      var d = block.querySelector(".dob"), bg = block.querySelector(".trav-type"), rm = block.querySelector(".trav-rm");
      if (d) d.addEventListener("change", function () { bg.textContent = typeFromDob(d.value); });
      if (rm) rm.addEventListener("click", function () { block.remove(); renumber(); pax = tc.querySelectorAll(".trav").length; render(); });
    }
    function renumber() {
      var bs = tc.querySelectorAll(".trav");
      bs.forEach(function (b, i) { b.querySelector(".trav-n").textContent = "Traveller " + (i + 1); var rm = b.querySelector(".trav-rm"); if (rm) rm.hidden = bs.length <= 1; });
      if (addBtn) { addBtn.style.display = bs.length >= maxT ? "none" : ""; addBtn.textContent = "+ Add traveller (" + bs.length + " of " + maxT + ")"; }
    }
    if (addBtn) addBtn.addEventListener("click", function () {
      if (tc.querySelectorAll(".trav").length >= maxT) return;
      var node = tpl.content.firstElementChild.cloneNode(true); tc.appendChild(node); wire(node); renumber();
      pax = tc.querySelectorAll(".trav").length; render();
    });
    if (tc) { tc.querySelectorAll(".trav").forEach(wire); renumber(); }

    // ----- terms gate + CTA -----
    var agree = document.getElementById("agree"), pay = document.getElementById("paybtn");
    if (agree && pay) agree.addEventListener("change", function () { pay.disabled = !agree.checked; });
    if (pay) pay.addEventListener("click", function (e) { e.preventDefault(); window.location.href = "/confirmation/"; });
    var mg = document.getElementById("mobar-go"); if (mg) mg.addEventListener("click", function () { var t = document.querySelector(".co-terms"); if (t) t.scrollIntoView({ behavior: "smooth", block: "center" }); });
    render();
  }, [bodyHtml]);

  return <main className="checkout-page" ref={ref} dangerouslySetInnerHTML={{ __html: applySite(bodyHtml) }} />;
}
