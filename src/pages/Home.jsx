import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { useBooking } from '../context/BookingContext.jsx'
import useSeo from '../hooks/useSeo.js'
import {
  stats, differentiators, services, process, industries,
  audiences, caseStudies, posts, testimonials,
} from '../data/site.js'
import './Home.css'

function Hero() {
  const { openBooking } = useBooking()
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__orb hero__orb--1" />
        <span className="hero__orb hero__orb--2" />
        <span className="hero__grid" />
      </div>
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow eyebrow--onDark">
            <span className="dot" /> Intelligent Growth Engine
          </span>
          <h1>
            AI-Powered Digital Growth for <span className="gradient-text">2026 Businesses</span>
          </h1>
          <p className="hero__lead">
            Marketing. Automation. Intelligence. Results. Amica Digital Services helps
            ambitious businesses grow using AI-driven marketing, intelligent automation,
            and next-generation digital infrastructure.
          </p>
          <div className="hero__actions">
            <button
              className="btn btn-white btn-lg"
              onClick={() => openBooking({ source: 'Home hero' })}
            >
              Book a Free AI Growth Consultation <Icon name="arrow" size={18} />
            </button>
            <Link to="/services" className="btn btn-ghost-light btn-lg">
              Explore Our Services
            </Link>
          </div>
          <ul className="hero__trust">
            <li><Icon name="check" size={18} /> AI-first, not agency methods</li>
            <li><Icon name="check" size={18} /> Responsible &amp; compliant AI</li>
            <li><Icon name="check" size={18} /> Built by operators</li>
          </ul>
        </div>

        <div className="hero__panel">
          <div className="hero__card hero__card--main">
            <div className="hero__card-head">
              <span className="hero__pulse" /> Growth engine · Live
            </div>
            <div className="hero__metric">
              <strong>5x</strong>
              <span>Conversion vs. industry-average outreach</span>
            </div>
            <div className="hero__bars">
              {[54, 62, 70, 78, 66, 88, 96].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="hero__card hero__card--float hero__card--a">
            <Icon name="headset" size={22} />
            <div>
              <strong>AI Assistants</strong>
              <span>Live 24/7 · chat &amp; voice</span>
            </div>
          </div>
          <div className="hero__card hero__card--float hero__card--b">
            <Icon name="target" size={22} />
            <div>
              <strong>New lead scored</strong>
              <span>Predictive CRM · +38% ✓</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__stats">
        <div className="container hero__stats-inner">
          {stats.map((s) => (
            <div key={s.label} className="hero__stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section className="section why">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow"><span className="dot" /> Intelligent Growth Engine</span>
          <h2>Why Amica Digital Services?</h2>
          <p>We don’t just follow trends; we engineer the future of digital presence using proprietary AI models and battle-tested workflows.</p>
        </Reveal>
        <div className="why__grid">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 70} className="why__card card">
              <span className="why__icon"><Icon name={d.icon} size={24} /></span>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const [active, setActive] = useState(services[0].slug)
  const current = services.find((s) => s.slug === active)
  return (
    <section className="section services-sec">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow"><span className="dot" /> Core Capabilities</span>
          <h2>Core Capabilities</h2>
          <p>Our suite of intelligent services designed to automate every touchpoint of your customer journey.</p>
        </Reveal>

        <div className="services-sec__layout">
          <div className="services-sec__tabs">
            {services.map((s) => (
              <button
                key={s.slug}
                className={`services-sec__tab ${active === s.slug ? 'is-active' : ''}`}
                onClick={() => setActive(s.slug)}
              >
                <span className="services-sec__tab-icon"><Icon name={s.icon} size={20} /></span>
                <span>{s.title}</span>
                <Icon name="arrow" size={16} className="services-sec__tab-arrow" />
              </button>
            ))}
          </div>

          <Reveal key={current.slug} className="services-sec__detail card">
            <span className="services-sec__tag">{current.tag}</span>
            <span className="services-sec__detail-icon"><Icon name={current.icon} size={30} /></span>
            <h3>{current.title}</h3>
            <p>{current.long}</p>
            <ul className="services-sec__features">
              {current.features.map((f) => (
                <li key={f}><Icon name="check" size={17} /> {f}</li>
              ))}
            </ul>
            <div className="services-sec__tech">
              {current.tech.map((t) => <span key={t}>{t}</span>)}
            </div>
            <Link to={`/services/${current.slug}`} className="btn btn-primary">
              Learn more <Icon name="arrow" size={17} />
            </Link>
          </Reveal>
        </div>

        <div className="services-sec__all">
          <Link to="/services" className="btn btn-outline">See all services <Icon name="arrow" size={17} /></Link>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section process">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow eyebrow--onDark"><span className="dot" /> How We Work</span>
          <h2>How We Work</h2>
          <p>A systematic, 5-step engine designed for rapid deployment and sustainable scale.</p>
        </Reveal>
        <div className="process__track">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 90} className="process__step">
              <div className="process__num">{p.step}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              {i < process.length - 1 && <span className="process__line" aria-hidden="true" />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedCase() {
  const cs = caseStudies[0]
  return (
    <section className="section featured">
      <div className="container">
        <Reveal className="section-head" style={{ marginBottom: 32 }}>
          <span className="eyebrow"><span className="dot" /> Featured Case Study</span>
        </Reveal>
        <Reveal className="featured__card">
          <div className="featured__body">
            <div className="featured__badges">
              <span><Icon name="health" size={15} /> {cs.sector}</span>
              <span><Icon name="clock" size={15} /> {cs.duration}</span>
            </div>
            <h2>{cs.title}</h2>
            <p className="featured__summary">{cs.summary}</p>

            <div className="featured__metrics">
              {cs.metrics.map((m) => (
                <div key={m.label}>
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>

            <div className="featured__foot">
              <div className="featured__client">
                <span className="featured__avatar">{cs.author.charAt(0)}</span>
                <div>
                  <strong>{cs.client}</strong>
                  <span>{cs.location}</span>
                </div>
              </div>
              <Link to="/case-studies" className="btn btn-primary">
                Read the case study <Icon name="arrow" size={17} />
              </Link>
            </div>
          </div>

          <div className="featured__quote">
            <Icon name="quote" size={34} />
            <blockquote>“{cs.quote}”</blockquote>
            <cite>— {cs.author}, {cs.role}</cite>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Audiences() {
  return (
    <section className="section audiences">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow"><span className="dot" /> Who We Help</span>
          <h2>Trusted Across Businesses, Healthcare &amp; Professional Services</h2>
          <p>Specialized AI digital solutions built for the unique challenges of businesses, care agencies, clinics, and professional service firms.</p>
        </Reveal>
        <div className="audiences__grid">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 80} className="audiences__card card">
              <span className="audiences__icon"><Icon name={a.icon} size={26} /></span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              <ul>
                {a.points.map((pt) => (
                  <li key={pt}><Icon name="check" size={16} /> {pt}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Industries() {
  const { openBooking } = useBooking()
  return (
    <section className="section industries">
      <div className="container industries__inner">
        <Reveal className="industries__copy">
          <span className="eyebrow"><span className="dot" /> Industries We Serve</span>
          <h2>Industry-specific AI brains for your market</h2>
          <p>
            We build industry-specific AI brains that understand the nuances, jargon
            and pain points of your unique market.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => openBooking({ source: 'Home — industries' })}
          >
            Book Free AI Growth Consultation <Icon name="arrow" size={17} />
          </button>
        </Reveal>
        <div className="industries__grid">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 55} className="industries__item">
              <span><Icon name={ind.icon} size={22} /></span>
              {ind.name}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow"><span className="dot" /> Client Voices</span>
          <h2>Businesses growing with AI-powered systems</h2>
        </Reveal>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 90} className="testimonials__card card">
              <div className="testimonials__stars">
                {Array.from({ length: 5 }).map((_, s) => <Icon key={s} name="star" size={17} />)}
              </div>
              <p>“{t.quote}”</p>
              <div className="testimonials__author">
                <span className="testimonials__avatar">{t.author.charAt(0)}</span>
                <div>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogPreview() {
  return (
    <section className="section blog-preview">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow"><span className="dot" /> Blog &amp; Resources</span>
          <h2>Blog &amp; Resources</h2>
          <p>Insights on AI, digital marketing and automation — practical guidance to help you grow smarter.</p>
        </Reveal>
        <div className="blog-preview__grid">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link to="/blog" className="blog-preview__card card">
                <div className={`blog-preview__thumb thumb-${i % 3}`}>
                  <span className="blog-preview__cat">{post.category}</span>
                </div>
                <div className="blog-preview__body">
                  <div className="blog-preview__meta">
                    <span>{post.date}</span> · <span>{post.read}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="blog-preview__more">Read article <Icon name="arrow" size={16} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="blog-preview__all">
          <Link to="/blog" className="btn btn-outline">View all articles <Icon name="arrow" size={17} /></Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  useSeo(
    'AI-Powered Digital Growth for 2026 Businesses',
    'Amica Digital Services is an AI-powered growth engine — AI lead generation, intelligent CRM, virtual assistants and automation for ambitious businesses, healthcare and professional services.'
  )
  return (
    <>
      <Hero />
      <WhyUs />
      <ServicesSection />
      <Process />
      <FeaturedCase />
      <Audiences />
      <Industries />
      <Testimonials />
      <BlogPreview />
      <CtaBanner
        title="Ready to future-proof your digital growth?"
        text="Stop paying for disconnected services. Start building an AI-powered growth system that compounds results over time."
        primary={{ label: 'Book a Free AI Growth Consultation' }}
        source="Home — CTA banner"
        secondary={{ label: 'Explore Our Services', to: '/services' }}
      />
    </>
  )
}
