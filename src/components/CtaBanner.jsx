import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { useBooking } from '../context/BookingContext.jsx'
import './CtaBanner.css'

/**
 * The primary action opens the booking modal by default. Pass `primary.to` to
 * make it a normal link instead.
 */
export default function CtaBanner({
  title = 'Ready to build IT that scales?',
  text = 'Stop paying for disconnected tools and reactive support. Book a free consultation and get a clear, no-obligation roadmap.',
  primary = { label: 'Book a Free Consultation' },
  secondary = { label: 'Explore Services', to: '/services' },
  source = 'CTA banner',
}) {
  const { openBooking } = useBooking()

  return (
    <section className="cta-banner section">
      <div className="container">
        <div className="cta-banner__card">
          <div className="cta-banner__glow" aria-hidden="true" />
          <div className="cta-banner__content">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="cta-banner__actions">
              {primary.to ? (
                <Link to={primary.to} className="btn btn-white btn-lg">
                  {primary.icon && <Icon name={primary.icon} size={18} />}
                  {primary.label} {!primary.icon && <Icon name="arrow" size={18} />}
                </Link>
              ) : (
                <button className="btn btn-white btn-lg" onClick={() => openBooking({ source })}>
                  {primary.icon && <Icon name={primary.icon} size={18} />}
                  {primary.label} {!primary.icon && <Icon name="arrow" size={18} />}
                </button>
              )}
              {secondary && (
                secondary.href ? (
                  <a href={secondary.href} target="_blank" rel="noreferrer" className="btn btn-ghost-light btn-lg">
                    {secondary.icon && <Icon name={secondary.icon} size={18} />}
                    {secondary.label}
                  </a>
                ) : (
                  <Link to={secondary.to} className="btn btn-ghost-light btn-lg">
                    {secondary.icon && <Icon name={secondary.icon} size={18} />}
                    {secondary.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
