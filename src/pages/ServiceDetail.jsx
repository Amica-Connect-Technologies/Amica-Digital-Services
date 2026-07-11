import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import useSeo from '../hooks/useSeo.js'
import { services } from '../data/site.js'
import './pages.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  useSeo(service ? service.title : 'Service', service ? service.short : '')

  if (!service) {
    return (
      <>
        <PageHero title="Service not found" subtitle="The service you’re looking for doesn’t exist." crumb="Not found" />
        <section className="section">
          <div className="container mini-cta">
            <Link to="/services" className="btn btn-primary">Back to all services <Icon name="arrow" size={17} /></Link>
          </div>
        </section>
      </>
    )
  }

  const others = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={<><span className="dot" /> {service.tag}</>}
        title={service.title}
        subtitle={service.short}
        crumb={service.title}
      />

      <section className="section">
        <div className="container split">
          <Reveal className="prose">
            <span className="eyebrow"><span className="dot" /> Overview</span>
            <h2>What we deliver</h2>
            <p>{service.long}</p>
            <ul className="ticks">
              {service.features.map((f) => (
                <li key={f}><Icon name="check" size={18} /> {f}</li>
              ))}
            </ul>
            <div className="services-sec__tech" style={{ marginTop: 20 }}>
              {service.tech.map((t) => <span key={t}>{t}</span>)}
            </div>
            <div style={{ marginTop: 28 }}>
              <Link to="/contact" className="btn btn-primary">Discuss your project <Icon name="arrow" size={17} /></Link>
            </div>
          </Reveal>

          <Reveal className="split__media" delay={120}>
            <div className="split__media-stat tl">
              <Icon name={service.icon} size={34} />
            </div>
            <div className="split__media-stat br">
              <strong>{service.tag}</strong>
              <span>{service.title}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--slate-50)' }}>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow"><span className="dot" /> Explore More</span>
            <h2>Related services</h2>
          </Reveal>
          <div className="svc-grid">
            {others.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="svc-card card">
                <span className="svc-card__icon"><Icon name={s.icon} size={26} /></span>
                <span className="svc-card__tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="svc-card__more">Learn more <Icon name="arrow" size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
