import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import useSeo from '../hooks/useSeo.js'
import { services, webPricing } from '../data/site.js'
import './pages.css'

function ServiceRow({ service, index }) {
  const reversed = index % 2 === 1
  return (
    <Reveal className={`svc-row ${reversed ? 'svc-row--rev' : ''} ${reversed ? 'svc-row--alt' : ''}`}>
      <div className="svc-row__copy">
        <span className="svc-row__icon"><Icon name={service.icon} size={26} /></span>
        <h2>{service.title}</h2>
        <p className="svc-row__tagline">{service.short}</p>
        <ul className="ticks ticks--brand" style={{ margin: '0 0 18px', display: 'grid', gap: 12 }}>
          {service.features.map((f) => (
            <li key={f}><Icon name="check" size={18} /> {f}</li>
          ))}
        </ul>
        {service.note && <p className="svc-row__note">{service.note}</p>}
        <Link to={`/services/${service.slug}`} className="btn btn-primary">
          Learn More <Icon name="arrow" size={17} />
        </Link>
      </div>
      <div className="svc-row__media">
        <Icon name={service.icon} size={72} strokeWidth={1.3} />
      </div>
    </Reveal>
  )
}

function WebSoftwareSection({ service }) {
  return (
    <div className="container web-sec">
      <Reveal className="web-sec__build">
        <span className="svc-row__icon"><Icon name={service.icon} size={26} /></span>
        <h2>{service.title}</h2>
        <p className="svc-row__tagline">{service.short}</p>
        <p className="muted">{service.long}</p>
        <h3 style={{ margin: '20px 0 12px', fontSize: '1.15rem' }}>What We Build</h3>
        <ul className="ticks ticks--brand" style={{ display: 'grid', gap: 12 }}>
          {service.features.map((f) => (
            <li key={f}><Icon name="check" size={18} /> {f}</li>
          ))}
        </ul>
        <div className="web-sec__media">
          <Icon name="devices" size={64} strokeWidth={1.3} />
        </div>
      </Reveal>

      <Reveal className="card price-guide" delay={120}>
        <div className="price-guide__head">
          <span className="price-guide__badge">Pricing Guide</span>
          <h3>Indicative Investment</h3>
          <p>Every project is different. The figures below are guides only and depend on scope, integrations, and complexity.</p>
        </div>

        {webPricing.map((tier) => (
          <div key={tier.name} className={`price-tier ${tier.popular ? 'price-tier--popular' : ''}`}>
            {tier.popular && <span className="price-tier__badge">Most Popular</span>}
            <div className="price-tier__top">
              <h4>{tier.name}</h4>
              <span className="price-tier__price">
                {tier.from}
                {tier.note && <span className="price-tier__note">{tier.note}</span>}
              </span>
            </div>
            <ul>
              {tier.features.map((f) => (
                <li key={f}><Icon name="check" size={15} /> {f}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="price-guide__note">
          <Icon name="bolt" size={18} />
          <span>
            <strong>Important:</strong> We do not offer “one size fits all” development.
            Final pricing is confirmed after a technical discovery session.
          </span>
        </div>

        <div className="price-guide__actions">
          <Link to="/contact" className="btn btn-primary">Request a Technical Discovery Call</Link>
          <Link to="/contact" className="btn btn-outline">Get a Project Cost Estimate</Link>
        </div>
      </Reveal>
    </div>
  )
}

export default function Services() {
  useSeo(
    'Services',
    'End-to-end digital growth solutions enhanced with AI automation, virtual assistants and intelligent agents — lead generation, CRM, SEO, compliance automation and custom software.'
  )
  const rowServices = services.filter((s) => s.slug !== 'web-custom-software')
  const webService = services.find((s) => s.slug === 'web-custom-software')

  return (
    <>
      <PageHero
        eyebrow={<><span className="dot" /> Innovative Digital Agency</>}
        title={<>Next-Generation Digital <span className="gradient-text">&amp; AI Services</span></>}
        crumb="Services"
        subtitle="We provide end-to-end digital growth solutions, enhanced with AI automation, virtual assistants, and intelligent agents."
      />

      <section className="section">
        <div className="container">
          {rowServices.map((s, i) => (
            <ServiceRow key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      {webService && (
        <section className="section" style={{ background: 'var(--slate-50)' }}>
          <WebSoftwareSection service={webService} />
        </section>
      )}

      <CtaBanner
        title="Not sure which service you need?"
        text="Book a free consultation and we’ll map the fastest route to real, measurable growth for your business — no hard sell."
        primary={{ label: 'Book a Free AI Growth Consultation', to: '/contact' }}
        secondary={{ label: 'View Pricing', to: '/pricing' }}
      />
    </>
  )
}
