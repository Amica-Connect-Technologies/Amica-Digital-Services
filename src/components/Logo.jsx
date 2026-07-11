import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} aria-label="Amica Digital home">
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="34" height="34">
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#lg)" />
          <path d="M16 8l6 12h-3l-.9-2h-4.2l-.9 2H10l6-12zm0 4.6L14.7 16h2.6L16 12.6z" fill="#fff" />
        </svg>
      </span>
      <span className="logo__text">
        Amica<span className="logo__accent">Digital</span>
      </span>
    </Link>
  )
}
