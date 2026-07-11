import CtaBanner from '../components/CtaBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import useSeo from '../hooks/useSeo.js'
import './pages.css'

const philosophy = [
  {
    icon: 'spark',
    title: 'AI should enhance, not replace humans',
    text: 'We believe AI is a tool to amplify human capability, not eliminate it. Our solutions are designed to empower your team.',
  },
  {
    icon: 'gauge',
    title: 'Automation should save time, not create chaos',
    text: 'Smart automation removes friction and repetitive work, giving you more time to focus on what matters most.',
  },
  {
    icon: 'chart',
    title: 'Marketing should convert, not just impress',
    text: 'Beautiful campaigns mean nothing without results. We build strategies that drive measurable growth and revenue.',
  },
  {
    icon: 'shield',
    title: 'Compliance should be built-in, not bolted on',
    text: 'Security and compliance aren’t afterthoughts. We architect them into the foundation of every solution.',
  },
]

const understand = [
  'Regulated environments',
  'High-trust industries',
  'Multi-country operations',
  'Scaling without losing control',
]

const tiles = ['scale', 'globe', 'check', 'target']

export default function About() {
  useSeo(
    'About Us',
    'Amica Digital Services was created to help businesses grow smarter, faster and more responsibly — bridging strategy, technology, AI and execution into one intelligent system.'
  )
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ background: 'var(--slate-50)' }}>
        <div className="container split">
          <Reveal className="prose">
            <span className="eyebrow"><span className="dot" /> About Amica Digital Services</span>
            <h1 style={{ fontSize: 'clamp(2.1rem, 4.4vw, 3.1rem)', margin: '10px 0 20px' }}>
              Built for the <span className="gradient-text">AI-first</span> future
            </h1>
            <p>Amica Digital Services was created to solve a growing problem:</p>
            <p>
              Businesses are buying more tools, more software, more marketing — but getting
              less clarity, less control, and less real growth.
            </p>
            <p style={{ marginBottom: 0 }}>
              We bridge strategy, technology, AI, and execution into one intelligent system.
            </p>
          </Reveal>

          <Reveal className="split__media" delay={120}>
            <div className="split__media-stat tl">
              <Icon name="spark" size={34} />
            </div>
            <div className="about-badge">
              <span className="about-badge__icon"><Icon name="check" size={18} /></span>
              <div>
                <strong>AI Implementation</strong>
                <span>98% of our deployments result in immediate operational efficiency gains.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow"><span className="dot" /> Our Philosophy</span>
            <h2>The principles that guide everything we build</h2>
          </Reveal>
          <div className="philosophy-grid">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="value-card card">
                <span className="value-card__icon"><Icon name={p.icon} size={24} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Background */}
      <section className="section" style={{ background: 'var(--slate-50)' }}>
        <div className="container split">
          <Reveal className="icon-tiles">
            {tiles.map((t) => (
              <div key={t} className="icon-tile card">
                <Icon name={t} size={44} strokeWidth={1.5} />
              </div>
            ))}
          </Reveal>

          <Reveal className="prose" delay={100}>
            <span className="eyebrow"><span className="dot" /> Our Background</span>
            <h2>Leadership from real operational businesses</h2>
            <p>
              Our leadership comes from real operational businesses — healthcare, care services,
              SaaS platforms, law firms, recruitment agencies, food chains, and international markets.
            </p>
            <h3 style={{ marginBottom: 12 }}>We understand:</h3>
            <ul className="ticks">
              {understand.map((u) => (
                <li key={u}><Icon name="check" size={18} /> {u}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section mission-band">
        <div className="container mission-band__inner">
          <Reveal>
            <div className="mission-band__quote"><Icon name="quote" size={40} /></div>
            <span className="mission-band__eyebrow">Our Mission</span>
            <h2>
              To help businesses grow smarter, faster, and more responsibly using
              AI-driven digital systems.
            </h2>
            <div className="mission-band__rule" />
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Ready to work with us?"
        text="Let’s discuss how we can help you bridge strategy, technology, and AI into one intelligent system that drives real growth."
        primary={{ label: 'View Our Services', to: '/services' }}
        secondary={{ label: 'Book a Consultation', to: '/contact' }}
      />
    </>
  )
}
