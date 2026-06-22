import './Logo.css';

// ==========================================================================
// LOGO — globe + ascending wing mark, echoing the business card emblem.
// variant="light" for use on dark navy backgrounds (header/footer),
// variant="dark" for use on light backgrounds.
// ==========================================================================

export default function Logo({ variant = 'dark', showWordmark = true, size = 44 }) {
  const isLight = variant === 'light';

  return (
    <div className="logo">
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="19" fill={isLight ? '#15326f' : '#0f2557'} />
        <path
          d="M7 28c4-3 10-3.5 15-1.5S33 30 41 27"
          stroke="var(--gold-500)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M9 33c4-2.5 9-3 13.5-1.2C27 33.6 32 34.5 39 31.5"
          stroke="var(--gold-300)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        <circle cx="24" cy="20" r="2.6" fill="#fff" />
        <path
          d="M18 27c0-3.3 2.7-6 6-6s6 2.7 6 6"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M30 15l9-3.5-2 3.3 2.6 2.2-9.6 1.5-.3-3.5z"
          fill="var(--gold-500)"
        />
      </svg>

      {showWordmark && (
        <span className={`logo__wordmark ${isLight ? 'logo__wordmark--light' : ''}`}>
          <span className="logo__name">Golden Route</span>
          <span className="logo__tagline">Overseas Employment Promoters</span>
        </span>
      )}
    </div>
  );
}
