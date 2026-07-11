// Lightweight inline SVG icon set (stroke-based, currentColor).
const paths = {
  shield: <><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" /></>,
  bolt: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></>,
  gauge: <><path d="M12 13l4-4" /><path d="M20.5 16a9 9 0 10-17 0" /><circle cx="12" cy="13" r="1.4" /></>,
  infinity: <path d="M6.5 9a3 3 0 100 6c2 0 3-1.5 5.5-3s3.5-3 5.5-3a3 3 0 110 6c-2 0-3-1.5-5.5-3S8.5 9 6.5 9z" />,
  code: <><path d="M8 8l-4 4 4 4" /><path d="M16 8l4 4-4 4" /><path d="M13 6l-2 12" /></>,
  cloud: <path d="M7 18a4 4 0 01-.5-8A5.5 5.5 0 0117 9.5a3.5 3.5 0 01.5 8.5H7z" />,
  headset: <><path d="M4 13v-1a8 8 0 0116 0v1" /><path d="M4 13a2 2 0 002 2h1v-4H6a2 2 0 00-2 2z" /><path d="M20 13a2 2 0 01-2 2h-1v-4h1a2 2 0 012 2z" /><path d="M18 15v1a3 3 0 01-3 3h-3" /></>,
  devices: <><rect x="2" y="4" width="14" height="10" rx="1.5" /><path d="M2 18h12" /><rect x="17" y="9" width="5" height="11" rx="1.2" /></>,
  spark: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path d="M12 8l1.5 2.5L16 12l-2.5 1.5L12 16l-1.5-2.5L8 12l2.5-1.5L12 8z" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" /></>,
  chart: <><path d="M4 20V4" /><path d="M4 20h16" /><path d="M8 16v-4M12 16V8M16 16v-6" /></>,
  health: <path d="M12 20s-7-4.5-7-9.5A4 4 0 0112 8a4 4 0 017 2.5C19 15.5 12 20 12 20z" />,
  home: <><path d="M4 11l8-6 8 6" /><path d="M6 10v9h12v-9" /><path d="M10 19v-5h4v5" /></>,
  cross: <path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6V4z" />,
  scale: <><path d="M12 3v18M7 21h10" /><path d="M12 6l-6 2 3 5a3 3 0 01-6 0l3-5M12 6l6 2-3 5a3 3 0 006 0l-3-5" /></>,
  shop: <><path d="M4 9h16l-1 11H5L4 9z" /><path d="M9 9V6a3 3 0 016 0v3" /></>,
  bank: <><path d="M4 10h16M5 10l7-5 7 5M6 10v7M10 10v7M14 10v7M18 10v7M4 20h16" /></>,
  factory: <><path d="M3 20V10l5 3V10l5 3V7l5 3v10H3z" /><path d="M7 20v-3M12 20v-3M17 20v-3" /></>,
  building: <><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" /></>,
  cap: <><path d="M12 5l9 4-9 4-9-4 9-4z" /><path d="M6 11v4c0 1 3 2 6 2s6-1 6-2v-4" /></>,
  rocket: <><path d="M12 3c3 1 6 4 6 9l-3 3H9l-3-3c0-5 3-8 6-9z" /><circle cx="12" cy="9" r="1.5" /><path d="M9 15l-3 4M15 15l3 4" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 12h18" /></>,
  check: <path d="M5 12l4 4 10-11" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  phone: <path d="M5 4h3l1.5 4-2 1.5a11 11 0 005 5l1.5-2 4 1.5V19a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  pin: <><path d="M12 21s-6-5-6-10a6 6 0 1112 0c0 5-6 10-6 10z" /><circle cx="12" cy="11" r="2" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  star: <path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.6 9.8l6.5-.9L12 3z" />,
  quote: <path d="M7 7h4v4c0 3-2 5-4 6M13 7h4v4c0 3-2 5-4 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  whatsapp: <path d="M12 3a9 9 0 00-7.7 13.6L3 21l4.5-1.2A9 9 0 1012 3zm4.3 12.4c-.2.5-1 1-1.5 1.1-.4.1-.9.1-1.4-.1-.3-.1-.8-.3-1.4-.5-2.4-1-4-3.5-4.1-3.7-.1-.2-1-1.3-1-2.5s.6-1.7.8-2c.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.5l.7 1.7c.1.1.1.3 0 .5l-.3.5c-.1.1-.3.3-.1.6.1.3.6 1 1.3 1.6.9.8 1.6 1 1.9 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.3.1.1.1.6-.1 1z" />,
  chat: <path d="M4 5h16v11H9l-4 3v-3H4V5z" />,
  lightning: <path d="M13 2L4 13h6l-1 9 9-11h-6l1-9z" />,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0112 0" /><path d="M16 6a3 3 0 010 6M21 20a5 5 0 00-4-5" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" /></>,
  handshake: <path d="M3 12l4-4 3 2 3-2 4 4-3 3-4-3-4 3-3-3z" />,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4" /></>,
  x: <path d="M4 4l16 16M20 4L4 20" />,
  facebook: <path d="M14 8h2V5h-2a3 3 0 00-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8a1 1 0 011-1z" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17 7v.01" /></>,
}

export default function Icon({ name, size = 24, className = '', strokeWidth = 1.7, ...rest }) {
  const filled = ['whatsapp', 'facebook'].includes(name)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {paths[name] || null}
    </svg>
  )
}
