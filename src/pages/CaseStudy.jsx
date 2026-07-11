import { useState } from 'react'
import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import useSeo from '../hooks/useSeo.js'
import { company } from '../data/site.js'
import './pages.css'
import './CaseStudy.css'

const heroChips = [
  'Faster onboarding',
  'Better compliance visibility',
  'Less document chasing',
  'More staff ready to work',
  'Fewer delays between placements',
]

const painTeam = [
  'Chase missing documents',
  'Collect right-to-work evidence',
  'Track training completion',
  'Verify references',
  'Organise compliance stages',
  'Keep managers updated',
  'Get staff ready before service users are seen',
]
const painResult = [
  'Onboarding delays',
  'Compliance risks',
  'Staff not ready when packages start',
  'Internal teams stretched too thin',
]

const solution = [
  { icon: 'infinity', title: 'Centralise all applications', text: 'Collect applications from multiple channels into one organised pipeline.' },
  { icon: 'bolt', title: 'Automated document chasing', text: 'Send reminders automatically for missing compliance documents.' },
  { icon: 'compass', title: 'Track onboarding stages', text: 'See exactly where each applicant is in the process.' },
  { icon: 'gauge', title: 'Reduce admin overload', text: 'Free your managers and coordinators from repetitive chasing and manual updates.' },
]

const included = [
  { icon: 'users', title: 'Recruitment Intake Automation', items: ['Centralised applicant capture', 'Smart-source application tracking', 'Unlimited job postings'] },
  { icon: 'shield', title: 'Compliance Workflow Automation', items: ['DBS tracking', 'Right-to-work checks', 'Training completion', 'Reference chasing'] },
  { icon: 'chart', title: 'White-Label CRM', items: ['Fully branded to your agency', 'Team visibility', 'Notes, tasks & pipeline tracking', 'Custom stages based on your process'] },
  { icon: 'chat', title: 'Email & WhatsApp Automation', items: ['Instant acknowledgement messages', 'Automated follow-ups', 'Interview reminders'] },
  { icon: 'gauge', title: 'Dashboard Visibility', items: ['New applicants', 'In progress', 'Ready-to-work / awaiting clearance'] },
]

const insteadOf = ['Spreadsheets', 'Manual chasing', 'Scattered applications', 'Slow responses', 'Uncertainty around readiness']
const youGet = ['One structured system', 'Faster communication', 'Clearer compliance tracking', 'Faster onboarding flow', 'Automated onboarding flow', 'Better workforce visibility']

const idealFor = [
  'Domiciliary care agencies',
  'Care providers recruiting regularly',
  'Supported living providers',
  'Agencies with onboarding backlogs',
  'Managers overloaded with compliance admin',
]

const builtChecklist = [
  'Industry-aware automation',
  'Operator-built technology',
  'Real implementation & support',
  'Practical systems, not jargon',
  'Built for real care workflows',
]

const caseOutcomes = [
  'Faster onboarding',
  'Better recruitment visibility',
  'Reduced admin pressure',
  'A structured pipeline of compliant staff',
]
const caseMetrics = [
  { value: '42%', label: 'Reduction in manual document chasing' },
  { value: '37%', label: 'Faster onboarding cycle' },
  { value: '55%', label: 'Less time on admin' },
  { value: '30%', label: 'More staff ready on time' },
]

const faqs = [
  { q: 'How long does implementation take?', a: 'Most agencies are live within 2–4 weeks, depending on how many channels and compliance stages we need to connect.' },
  { q: 'Is this suitable for small care agencies?', a: 'Yes. The system scales down as easily as it scales up — smaller agencies often feel the admin relief fastest.' },
  { q: 'Do you replace our current software?', a: 'Not necessarily. We integrate with what already works and only replace the tools that are holding you back.' },
  { q: 'Can this be adapted to our onboarding process?', a: 'Absolutely. Every stage is configured around how your agency actually onboards — never a fixed template.' },
]

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <div key={f.q} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            {f.q} <Icon name={open === i ? 'close' : 'arrow'} size={20} />
          </button>
          <div className="faq-a"><p>{f.a}</p></div>
        </div>
      ))}
    </div>
  )
}

function ReviewForm() {
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); setSent(true) }
  if (sent) {
    return (
      <div className="form-success" style={{ margin: 0 }}>
        <Icon name="check" size={22} />
        <span>Thanks! We’ll be in touch to arrange your free workflow review within one working day.</span>
      </div>
    )
  }
  return (
    <form onSubmit={submit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="fn">Full name</label>
          <input id="fn" name="fn" required placeholder="Jane Smith" />
        </div>
        <div className="field">
          <label htmlFor="ag">Agency name</label>
          <input id="ag" name="ag" required placeholder="Your Care Agency Ltd" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="wa">Mobile / WhatsApp</label>
          <input id="wa" name="wa" required placeholder="+44 …" />
        </div>
        <div className="field">
          <label htmlFor="vol">Onboarding volume / month</label>
          <select id="vol" name="vol" defaultValue="">
            <option value="" disabled>Select…</option>
            <option>1–5 staff</option>
            <option>6–15 staff</option>
            <option>16–40 staff</option>
            <option>40+ staff</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="rec">Current recruitment status</label>
        <select id="rec" name="rec" defaultValue="">
          <option value="" disabled>Select…</option>
          <option>No visibility over onboarding</option>
          <option>Recruiting occasionally</option>
          <option>Recruiting constantly</option>
          <option>Large onboarding backlog</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="ch">Biggest challenge right now</label>
        <textarea id="ch" name="ch" placeholder="Tell us where your team is losing the most time…" />
      </div>
      <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
        Get My Automation Review <Icon name="arrow" size={18} />
      </button>
    </form>
  )
}

export default function CaseStudy() {
  useSeo(
    'Case Study — Care Agency Automation',
    'How Amica Digital automates recruitment, compliance and staff onboarding for care agencies — reducing manual document chasing by 42% and onboarding time by 37%.'
  )
  const waLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hi Amica Digital, I'd like a free workflow review for my care agency."
  )}`

  return (
    <>
      {/* Hero */}
      <section className="cs2-hero">
        <div className="container cs2-hero__inner">
          <Reveal>
            <span className="eyebrow eyebrow--onDark"><span className="dot" /> Designed for care providers who need it</span>
            <h1>Stop Losing Time on Recruitment Admin, Compliance Chasing &amp; <span className="gradient-text">Staff Onboarding</span></h1>
            <p>
              We help care agencies automate recruitment, onboarding workflows and compliance —
              so you get fully-compliant staff faster, reduce admin pressure and improve
              operational continuity.
            </p>
            <div className="cs2-hero__actions">
              <Link to="/contact" className="btn btn-white btn-lg">Book a Free Workflow Review <Icon name="arrow" size={18} /></Link>
              <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-ghost-light btn-lg">
                <Icon name="whatsapp" size={18} /> Speak on WhatsApp
              </a>
            </div>
            <div className="cs2-chips">
              {heroChips.map((c) => (
                <span key={c} className="cs2-chip"><Icon name="check" size={15} /> {c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Pain */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow eyebrow--danger"><span className="dot" /> The Pain</span>
            <h2>If you run a care agency, you already know the pain</h2>
            <p>Applications come from everywhere — Indeed, CV-Library, Facebook, your website, word of mouth. Then the real challenge begins.</p>
          </Reveal>
          <div className="compare">
            <Reveal className="compare__col compare__col--bad">
              <h3>Your team has to:</h3>
              <ul>
                {painTeam.map((p) => (
                  <li key={p}><span className="compare__ic compare__ic--bad"><Icon name="close" size={13} /></span> {p}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="compare__col compare__col--bad" delay={100}>
              <h3>The result?</h3>
              <ul>
                {painResult.map((p) => (
                  <li key={p}><span className="compare__ic compare__ic--bad"><Icon name="close" size={13} /></span> {p}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <p className="compare__note">This is not just a staffing issue. It’s a workflow issue.</p>
        </div>
      </section>

      {/* The Solution */}
      <section className="section" style={{ background: 'var(--slate-50)' }}>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow"><span className="dot" /> The Solution</span>
            <h2>The Care Agency Automation System</h2>
            <p>We install a structured recruitment and compliance automation system that moves applicants from enquiry to work-ready faster — with far less manual effort.</p>
          </Reveal>
          <div className="values-grid">
            {solution.map((s, i) => (
              <Reveal key={s.title} delay={i * 70} className="value-card card">
                <span className="value-card__icon"><Icon name={s.icon} size={24} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow"><span className="dot" /> What’s Included</span>
            <h2>Your Care Agency Automation System includes</h2>
          </Reveal>
          <div className="incl-grid">
            {included.map((inc, i) => (
              <Reveal key={inc.title} delay={i * 60} className="incl-card card">
                <div className="incl-card__head">
                  <span className="incl-card__ic"><Icon name={inc.icon} size={22} /></span>
                  <h3>{inc.title}</h3>
                </div>
                <ul>
                  {inc.items.map((it) => (
                    <li key={it}><Icon name="check" size={16} /> {it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="section" style={{ background: 'var(--slate-50)' }}>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow eyebrow--amber"><span className="dot" /> The Transformation</span>
            <h2>What changes after implementation?</h2>
          </Reveal>
          <div className="compare">
            <Reveal className="compare__col compare__col--bad">
              <h3>Instead of…</h3>
              <ul>
                {insteadOf.map((p) => (
                  <li key={p}><span className="compare__ic compare__ic--bad"><Icon name="close" size={13} /></span> {p}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="compare__col compare__col--good" delay={100}>
              <h3>You get…</h3>
              <ul>
                {youGet.map((p) => (
                  <li key={p}><span className="compare__ic compare__ic--good"><Icon name="check" size={14} /></span> {p}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ideal for */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow eyebrow--success"><span className="dot" /> Who This Is For</span>
            <h2>This is ideal for</h2>
          </Reveal>
          <Reveal>
            <ul className="checklist" style={{ maxWidth: 820, margin: '0 auto' }}>
              {idealFor.map((f) => (
                <li key={f}><Icon name="check" size={18} /> {f}</li>
              ))}
            </ul>
          </Reveal>
          <p className="compare__note">
            If your agency onboards staff every month and still depends heavily on manual admin, this system is for you.
          </p>
        </div>
      </section>

      {/* Built for care */}
      <section className="section" style={{ background: 'var(--slate-50)' }}>
        <div className="container split">
          <Reveal className="prose">
            <span className="eyebrow"><span className="dot" /> Built for Care Agencies</span>
            <h2>We understand the care sector because we come from it</h2>
            <p>
              This is not generic automation. We understand recruitment pressures, onboarding
              delays, compliance risk, CQC expectations, staff shortages and the operational gap
              between available packages and ready-to-work staff.
            </p>
            <p className="muted" style={{ marginBottom: 0 }}>
              We build systems around real sector challenges — not generic software templates.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="ticks" style={{ display: 'grid', gap: 12 }}>
              {builtChecklist.map((b) => (
                <li key={b} style={{ display: 'flex', gap: 11, alignItems: 'center', padding: '15px 18px', background: '#fff', border: '1px solid var(--slate-200)', borderRadius: 12 }}>
                  <Icon name="check" size={18} /> {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Case study card */}
      <section className="section">
        <div className="container">
          <Reveal className="cs2-case">
            <div className="cs2-case__grid">
              <div>
                <div className="cs2-case__badges">
                  <span>Healthcare Automation</span>
                  <span>90-Day Delivery</span>
                </div>
                <h3>RSM Care Links Ltd, Manchester</h3>
                <p>
                  A leading domiciliary home care and supported-living provider was struggling with
                  fragmented recruitment channels, manual document verification, slow onboarding and
                  inconsistent staff-readiness visibility.
                </p>
                <ul className="cs2-case__outcomes">
                  {caseOutcomes.map((o) => (
                    <li key={o}><Icon name="check" size={17} /> {o}</li>
                  ))}
                </ul>
                <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-white">
                  Request the Full Case Study <Icon name="arrow" size={17} />
                </a>
              </div>
              <div className="cs2-case__metrics">
                {caseMetrics.map((m) => (
                  <div key={m.label} className="cs2-metric">
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing duo */}
      <section className="section" style={{ background: 'var(--slate-50)' }}>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow"><span className="dot" /> Pricing</span>
            <h2>Simple and flexible pricing</h2>
            <p>Two ways to get started — commit for the best value, or test the system before you scale.</p>
          </Reveal>
          <div className="cs2-pricing">
            <Reveal className="cs2-price-card card cs2-price-card--best">
              <span className="cs2-price-card__badge">Best Value</span>
              <h3>Growth Commitment</h3>
              <p>Best for care agencies committed to structured, sustainable growth.</p>
              <Link to="/contact" className="btn btn-white">Book a Workflow Review</Link>
            </Reveal>
            <Reveal className="cs2-price-card card" delay={100}>
              <h3>Flexible Start</h3>
              <p>Great for agencies wanting to test the system before a longer commitment.</p>
              <Link to="/contact" className="btn btn-outline">Start Flexible</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Repeat band */}
      <section className="section cs2-band">
        <div className="container cs2-band__inner">
          <Reveal>
            <h2>Stop Losing Time on Recruitment Admin, Compliance Chasing &amp; Staff Onboarding</h2>
            <p>Give your agency fully-compliant staff faster, reduce admin pressure and improve operational continuity.</p>
            <div className="cs2-band__actions">
              <Link to="/contact" className="btn btn-white btn-lg">Book a Free Workflow Review</Link>
              <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-ghost-light btn-lg">
                <Icon name="whatsapp" size={18} /> Speak on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow"><span className="dot" /> FAQ</span>
            <h2>Common questions</h2>
          </Reveal>
          <Faq />
        </div>
      </section>

      {/* Free workflow review form */}
      <section className="section" style={{ background: 'var(--slate-50)' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal className="section-head">
            <span className="eyebrow"><span className="dot" /> Free Workflow Review</span>
            <h2>Get your free workflow review</h2>
            <p>No obligation. Just a personal review of where automation can save your team time.</p>
          </Reveal>
          <Reveal className="card form-card">
            <ReviewForm />
          </Reveal>
        </div>
      </section>

      {/* Quote band */}
      <section className="section cs2-quote">
        <div className="container cs2-quote__inner">
          <Reveal>
            <div className="cs2-quote__mark"><Icon name="quote" size={40} /></div>
            <blockquote>“The difference is not just digital — it is operational clarity.”</blockquote>
            <div className="cs2-quote__author">
              <span className="cs2-quote__avatar">A</span>
              <div style={{ textAlign: 'left' }}>
                <strong>A. Afzal</strong>
                <span>Managing Director, RSM Care Links</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Ready to reduce onboarding delays and compliance pressure?"
        text="Book a free workflow review and we’ll show you how your agency can automate recruitment and staff onboarding more effectively."
        primary={{ label: 'Book a Free Workflow Review', to: '/contact' }}
        secondary={{ label: 'Speak on WhatsApp', href: waLink, icon: 'whatsapp' }}
      />
    </>
  )
}
