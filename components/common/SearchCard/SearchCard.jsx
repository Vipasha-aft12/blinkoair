"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SITE } from "@/config/site";
import "./SearchCard.css";

// Airport autocomplete field. The airport dataset is dynamically imported on
// first focus so it never weighs down the initial page load.
function AirportField({ id, label, initial = "" }) {
  const [value, setValue] = useState(initial);
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const searchFn = useRef(null);
  const blurTimer = useRef(null);

  async function ensureData() {
    if (!searchFn.current) {
      const mod = await import("@/lib/airports");
      searchFn.current = mod.searchAirports;
    }
  }
  function runSearch(q) {
    const fn = searchFn.current;
    if (!fn) return;
    const res = fn(q, 7);
    setItems(res);
    setOpen(res.length > 0);
    setActive(res.length ? 0 : -1);
  }
  async function onChange(e) {
    setValue(e.target.value);
    await ensureData();
    runSearch(e.target.value);
  }
  function choose(it) {
    setValue(it.city + " (" + it.code + ")");
    setOpen(false);
    setActive(-1);
  }
  function onKeyDown(e) {
    if (!open || !items.length) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => (a + 1) % items.length); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => (a - 1 + items.length) % items.length); }
    else if (e.key === "Enter" && active >= 0) { e.preventDefault(); choose(items[active]); }
    else if (e.key === "Escape") { setOpen(false); }
  }
  useEffect(() => () => clearTimeout(blurTimer.current), []);

  return (
    <div className="field ac">
      <label htmlFor={id}>{label}</label>
      <input
        id={id} name={id} type="text" autoComplete="off"
        placeholder="City or airport code" value={value}
        role="combobox" aria-expanded={open ? "true" : "false"}
        aria-autocomplete="list" aria-controls={id + "-list"}
        onFocus={async () => { await ensureData(); if (value) runSearch(value); }}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={() => { blurTimer.current = setTimeout(() => setOpen(false), 120); }}
      />
      {open ? (
        <ul className="ac-list" id={id + "-list"} role="listbox">
          {items.map((it, i) => (
            <li key={it.code + i} role="option" aria-selected={i === active}
              className={"ac-item" + (i === active ? " active" : "")}
              onMouseDown={(e) => { e.preventDefault(); choose(it); }}
              onMouseEnter={() => setActive(i)}>
              <span className="ac-code">{it.code}</span>
              <span className="ac-meta">
                <span className="ac-city">{it.city}{it.metro ? " · All airports" : ""}</span>
                <span className="ac-name">{it.name}{it.country ? " · " + it.country : ""}</span>
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function Stepper({ value, setValue, min = 0, labelMinus, labelPlus }) {
  return (
    <div className="stepper">
      <button type="button" aria-label={labelMinus} onClick={() => setValue(Math.max(min, value - 1))}>−</button>
      <span>{value}</span>
      <button type="button" aria-label={labelPlus} onClick={() => setValue(Math.min(9, value + 1))}>+</button>
    </div>
  );
}

function DateField({ id, label }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} className="date-field" type="text" placeholder="Add date" autoComplete="off"
        onFocus={(e) => { e.target.type = "date"; if (e.target.showPicker) { try { e.target.showPicker(); } catch {} } }}
        onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }} />
    </div>
  );
}

// from/to may be prefilled on route pages.
export default function SearchCard({ from = "", to = "" }) {
  const [trip, setTrip] = useState("round");
  const [paxOpen, setPaxOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabin, setCabin] = useState("Economy");
  const noteRef = useRef(null);
  const router = useRouter();

  const total = adults + children + infants;
  const paxLabel = total + " Traveller" + (total > 1 ? "s" : "") + " · " + cabin;

  const onSubmit = (e) => {
    e.preventDefault();
    router.push(trip === "oneway" ? "/flight-results/one-way/" : "/flight-results/round-trip/");
  };

  return (
    <div className="search-card" id="search">
      <div className="trip-tabs" role="tablist" aria-label="Trip type">
        <button role="tab" aria-selected={trip === "round"} onClick={() => setTrip("round")}>Round trip</button>
        <button role="tab" aria-selected={trip === "oneway"} onClick={() => setTrip("oneway")}>One way</button>
      </div>
      <form noValidate onSubmit={onSubmit}>
        <div className="search-grid">
          <AirportField id="from" label="From" initial={from} />
          <AirportField id="to" label="To" initial={to} />
          <DateField id="depart" label="Depart" />
          <div className="field" data-role="return" style={{ opacity: trip === "oneway" ? 0.45 : 1 }}>
            <label htmlFor="ret">Return</label>
            <input id="ret" name="ret" className="date-field" type="text" placeholder="Add date" autoComplete="off" disabled={trip === "oneway"}
              onFocus={(e) => { e.target.type = "date"; if (e.target.showPicker) { try { e.target.showPicker(); } catch {} } }}
              onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }} />
          </div>
          <div className="field pax">
            <label>Travellers &amp; class</label>
            <button type="button" className="pax-btn" onClick={() => setPaxOpen((v) => !v)}>
              <span className="pax-label">{paxLabel}</span><span className="chev">▾</span>
            </button>
            <div className={"pax-panel" + (paxOpen ? " open" : "")} onClick={(e) => e.stopPropagation()}>
              <div className="pax-row"><div><div className="t">Adults</div><div className="s">12+ years</div></div>
                <Stepper value={adults} setValue={setAdults} min={1} labelMinus="Fewer adults" labelPlus="More adults" /></div>
              <div className="pax-row"><div><div className="t">Children</div><div className="s">2–11 years</div></div>
                <Stepper value={children} setValue={setChildren} labelMinus="Fewer children" labelPlus="More children" /></div>
              <div className="pax-row"><div><div className="t">Infants</div><div className="s">Under 2</div></div>
                <Stepper value={infants} setValue={setInfants} labelMinus="Fewer infants" labelPlus="More infants" /></div>
              <div className="pax-row pax-row--class"><div><div className="t">Cabin class</div><div className="s">Choose one</div></div>
                <select aria-label="Cabin class" value={cabin} onChange={(e) => setCabin(e.target.value)}>
                  <option>Economy</option><option>Premium Economy</option><option>Business</option><option>First</option>
                </select></div>
            </div>
          </div>
          <div className="field search-btn">
            <button className="btn btn--accent btn--lg btn--block" type="submit">Search flights</button>
          </div>
        </div>
      </form>
      <p className="fare-note" ref={noteRef}>
        <strong>How our pricing works:</strong> the fare shown includes the base fare and all mandatory airline taxes. A service fee may apply to your booking, depending on how the booking is made and the itinerary. For human-assisted bookings, the applicable service fee is quoted and confirmed before you pay. Optional extras such as seats, bags, and upgrades are displayed separately and confirmed before checkout. Payments are processed securely by our named merchant of record. Eligible tickets may qualify for cancellation within 24 hours of booking for a full refund under applicable U.S. DOT rules. 
      </p>
    </div>
  );
}
