"use client";
import { useState } from "react";
import Link from "next/link";
import "./DestinationTile.css";

const SKYLINE = [[0,80,30,40],[34,60,22,60],[60,90,26,30],[90,50,18,70],[112,72,28,48],[144,40,16,80],[164,84,30,36],[198,64,20,56],[222,78,26,42],[252,54,18,66],[274,88,30,32],[308,68,22,52],[334,46,16,74],[354,80,46,40]];

// tile: {href, name, img, gradient}
export default function DestinationTile({ href, name, img, gradient }) {
  const [ok, setOk] = useState(Boolean(img));
  return (
    <div className="tile">
      <Link href={href} aria-label={name}>
        <div className="ph" style={{ background: gradient }}>
          {ok ? (
            <img
              className="tile-img"
              src={img}
              alt={name}
              loading="lazy"
              decoding="async"
              width="480"
              height="300"
              onError={() => setOk(false)}
            />
          ) : null}
          <svg className="sky" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true">
            <g fill="#fff">{SKYLINE.map((r, i) => (<rect key={i} x={r[0]} y={r[1]} width={r[2]} height={r[3]} />))}</g>
          </svg>
          <span className="tile-go">View →</span>
          <span className="tile-name">{name}</span>
        </div>
      </Link>
    </div>
  );
}