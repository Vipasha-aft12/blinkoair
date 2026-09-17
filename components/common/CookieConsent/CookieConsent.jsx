"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./CookieConsent.css";

const KEY = "blinkoair-cookie-consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch (e) {
      setShow(true);
    }
  }, []);

  const choose = (value) => {
    try {
      localStorage.setItem(KEY, value);
    } catch (e) {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookie notice">
      <div className="cookie-consent__text">
        <strong>We use cookies</strong>
        <p>
          We use essential cookies to run this site and optional cookies to understand traffic and improve your
          experience. See our <Link href="/cookies-policy/">Cookies Policy</Link>.
        </p>
      </div>
      <div className="cookie-consent__actions">
        <button type="button" className="btn btn--ghost" onClick={() => choose("declined")}>
          Decline
        </button>
        <button type="button" className="btn btn--accent" onClick={() => choose("accepted")}>
          Accept all
        </button>
      </div>
    </div>
  );
}
