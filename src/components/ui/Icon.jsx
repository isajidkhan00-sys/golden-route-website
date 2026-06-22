import './Icon.css';

// ==========================================================================
// ICON — a single component rendering any icon by name.
// Add a new icon by adding a key to ICONS below; nothing else changes.
// ==========================================================================

const ICONS = {
  users: (
    <>
      <circle cx="9" cy="8" r="3.25" />
      <path d="M3 19c0-3.31 2.69-6 6-6s6 2.69 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M21 19c0-2.5-1.5-4.5-3.5-5.2" />
    </>
  ),
  document: (
    <>
      <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 16h6" />
    </>
  ),
  shield: (
    <path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z M9 12l2 2 4-4" />
  ),
  plane: (
    <path d="M3 12 21 4l-7 17-2-7-7-2Z" />
  ),
  'check-badge': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.3 2.3 4.7-5.1" />
    </>
  ),
  support: (
    <>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
      <path d="M6.5 19v1a2 2 0 0 0 2 2h3" />
    </>
  ),
  phone: (
    <path d="M6.6 10.8a14.7 14.7 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 9.7 9.7 0 0 0 3 .48 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 9.7 9.7 0 0 0 .48 3 1 1 0 0 1-.25 1Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  whatsapp: (
    <path d="M12 3a9 9 0 0 0-7.78 13.6L3 21l4.5-1.18A9 9 0 1 0 12 3Zm4.86 12.7c-.2.57-1.18 1.1-1.6 1.16-.42.07-.85.1-2.5-.55-2.1-.85-3.5-2.95-3.6-3.08-.1-.13-.86-1.14-.86-2.18s.55-1.55.74-1.76c.2-.2.43-.26.57-.26h.4c.13 0 .31-.05.48.37.18.43.6 1.48.65 1.59.06.1.1.23.02.37-.32.6-.66.86-.9 1.13-.16.18-.13.32-.05.46.4.78 1.6 2 2.83 2.5.18.08.3.07.42-.04.34-.36.7-.97 1-1.1.13-.06.27-.04.39 0 .35.13 1.4.66 1.64.78.24.13.4.2.45.31.06.12.06.62-.13 1.2Z" />
  ),
  facebook: (
    <path d="M14 9.5h2.5V6.5H14c-1.93 0-3.5 1.57-3.5 3.5v2H8.5v3H10.5V21h3v-6h2.2l.5-3H13.5v-1.5c0-.6.4-1 1-1Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  'chevron-down': <path d="M6 9l6 6 6-6" />,
  'arrow-right': <path d="M5 12h14M13 5l7 7-7 7" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  quote: (
    <path d="M9.5 7C7 7 5 9 5 12.5S7 18 9.5 18M9.5 7v4.5H7v3.5h2.5V7Zm9 0c-2.5 0-4.5 2-4.5 5.5S16 18 18.5 18m0-11v4.5H16v3.5h2.5V7Z" />
  ),
  spark: (
    <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" />
  ),
};

export default function Icon({ name, size = 24, strokeWidth = 1.8, className = '' }) {
  const glyph = ICONS[name];
  if (!glyph) return null;

  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {glyph}
    </svg>
  );
}
