import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import useSeo from '../hooks/useSeo.js'
import { pricingPlans, pricingTrust, pricingIndustries, company } from '../data/site.js'
import './pages.css'

// A feature that ends with "plus:" is treated as the "Everything in …" lead line.
const isLead = (f) => /plus:$/.test(f)

export default function Pricing() {
  useSeo(
    'Pricing',
    'AI-powered growth, automation and digital systems for modern businesses — transparent monthly plans from £199/mo. Cancel anytime, fast deployment.'
  )
  const waLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hi Amica Digital, I'd like to discuss a growth system."
  )}`

  return (
    <>
      <PageHero
        eyebrow={<><span className="dot" /> Our Growth Systems</>}
        title={<>AI-Powered Growth, Automation &amp; <span className="gradient-text">Digital Systems for Modern Businesses</span></>}
        crumb="Pricing"
        subtitle="We don’t just offer marketing. We build intelligent systems that help you generate more leads, automate operations, convert enquiries faster, and scale without increasing workload."
      />

      {/* Plans */}
      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {pricingPlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 80} className={`price-card card ${plan.featured ? 'price-card--featured' : ''}`}>
                {plan.featured && <span className="price-card__badge">Most Popular</span>}
                <h3>{plan.name}</h3>
                <p className="price-card__tagline">{plan.subtitle}</p>
                <div className="price-card__price">
                  <strong>{plan.price}</strong>
                  <span>{plan.period}</span>
                </div>
                {plan.setup && <p className="price-card__setup">{plan.setup} setup fee</p>}
                <div className="price-card__divider" />
                <ul>
                  {plan.features.map((f) => (
                    <li key={f} className={isLead(f) ? 'is-lead' : ''}>
                      {!isLead(f) && <Icon name="check" size={18} />}
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${plan.featured ? 'btn-white' : 'btn-outline'}`}>
                  {plan.cta}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="section--tight" style={{ background: 'var(--slate-50)', borderTop: '1px solid var(--slate-200)', borderBottom: '1px solid var(--slate-200)' }}>
        <div className="container">
          <div className="pricing-trust">
            {pricingTrust.map((t) => (
              <span key={t.label} className="pricing-trust__item">
                <Icon name={t.icon} size={20} /> {t.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-specific systems */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow"><span className="dot" /> Specialist Sectors</span>
            <h2>Industry-Specific Systems Available</h2>
            <p>We also build tailored systems for regulated and specialist industries.</p>
          </Reveal>
          <div className="pindustry-grid">
            {pricingIndustries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 70} className="pindustry-card card">
                <span className="pindustry-card__icon"><Icon name={ind.icon} size={26} /></span>
                <h3>{ind.name}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Build a Smarter Business?"
        text="Book a free consultation and discover how automation can transform your operations."
        primary={{ label: 'Book Free Strategy Call', to: '/contact' }}
        secondary={{ label: 'Speak on WhatsApp', href: waLink, icon: 'whatsapp' }}
      />
    </>
  )
}
