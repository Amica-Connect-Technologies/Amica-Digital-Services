import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import './CtaBanner.css'

export default function CtaBanner({
  title = 'Ready to build IT that scales?',
  text = 'Stop paying for disconnected tools and reactive support. Book a free consultation and get a clear, no-obligation roadmap.',
  primary = { label: 'Book a Free Consultation', to: '/contact' },
  secondary = { label: 'Explore Services', to: '/services' },
}) {
  return (
    <section className="cta-banner section">
      <div className="container">
        <div className="cta-banner__card">
          <div className="cta-banner__glow" aria-hidden="true" />
          <div className="cta-banner__content">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="cta-banner__actions">
              <Link to={primary.to} className="btn btn-white btn-lg">
                {primary.icon && <Icon name={primary.icon} size={18} />}
                {primary.label} {!primary.icon && <Icon name="arrow" size={18} />}
              </Link>
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
