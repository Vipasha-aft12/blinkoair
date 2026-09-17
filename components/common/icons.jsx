// Reusable inline SVGs. Single definition, used across sections (no duplication).
const S = (p) => ({ viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...p });

export const IconPhone = (p) => (<svg {...S(p)}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2Z"/></svg>);
export const IconShield = (p) => (<svg {...S(p)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>);
export const IconCheck = (p) => (<svg {...S({strokeWidth:2.4,...p})}><path d="m5 12 5 5L20 6"/></svg>);
export const IconBolt = (p) => (<svg {...S(p)}><path d="M13 2 3 14h8l-1 8 10-12h-8l1-6Z"/></svg>);
export const IconGlobe = (p) => (<svg {...S(p)}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/></svg>);
export const IconClock = (p) => (<svg {...S(p)}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>);
export const IconLock = (p) => (<svg {...S(p)}><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>);
export const IconTag = (p) => (<svg {...S(p)}><path d="M20.6 13.4 12 22l-9-9V4a1 1 0 0 1 1-1h8l8.6 8.6a2 2 0 0 1 0 2.8Z"/><circle cx="7.5" cy="7.5" r="1.5" fill="currentColor"/></svg>);
export const IconChat = (p) => (<svg {...S(p)}><path d="M21 12a8 8 0 0 1-11.3 7.3L3 21l1.7-6.7A8 8 0 1 1 21 12Z"/></svg>);
export const IconDoc = (p) => (<svg {...S(p)}><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>);
export const IconBadge = (p) => (<svg {...S(p)}><circle cx="12" cy="8" r="6"/><path d="m9 7.5 2 2 4-4"/><path d="M8.2 13.5 7 22l5-3 5 3-1.2-8.5"/></svg>);
export const IconFile = (p) => (<svg {...S(p)}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"/><path d="M14 3v6h6"/><path d="m9 15 2 2 4-4"/></svg>);
