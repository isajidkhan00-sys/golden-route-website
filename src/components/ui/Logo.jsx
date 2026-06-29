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
      <img
        src="/logo.png"
        alt="Golden Route — Overseas Employment Promoters"
        className="logo__mark"
        width={size}
        height={size}
      />

      {showWordmark && (
        <span className={`logo__wordmark ${isLight ? 'logo__wordmark--light' : ''}`}>
          <span className="logo__name">Golden Route</span>
          <span className="logo__tagline">Overseas Employment Promoters</span>
        </span>
      )}
    </div>
  );
}
