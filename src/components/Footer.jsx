import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { company, services } from '../data/site.js'
import './Footer.css'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="logo logo--light">
            <span className="logo__mark">
              <svg viewBox="0 0 32 32" width="34" height="34">
                <defs>
                  <linearGradient id="lgf" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
                <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#lgf)" />
                <path d="M16 8l6 12h-3l-.9-2h-4.2l-.9 2H10l6-12zm0 4.6L14.7 16h2.6L16 12.6z" fill="#fff" />
              </svg>
            </span>
            <span className="logo__text">Amica<span className="logo__accent">Digital</span></span>
          </Link>
          <p>
            AI growth solutions for care agencies &amp; service businesses. We automate
            recruitment, lead generation and compliance workflows with intelligent AI —
            built by operators who understand your industry.
          </p>
          <div className="footer__social">
            {[
              ['linkedin', company.social.linkedin],
              ['x', company.social.x],
              ['facebook', company.social.facebook],
              ['instagram', company.social.instagram],
            ].map(([name, href]) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}>
                <Icon name={name} size={19} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/case-studies">Case Studies</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get in touch</h4>
          <ul className="footer__contact">
            <li>
              <Icon name="pin" size={18} />
              <span>{company.address}</span>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            </li>
            <li>
              <Icon name="clock" size={18} />
              <span>{company.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>© {year} {company.legalName}. All rights reserved.</p>
          <div className="footer__legal">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
            <Link to="/contact">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
