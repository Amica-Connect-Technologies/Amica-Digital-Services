import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import useSeo from '../hooks/useSeo.js'
import { company, services } from '../data/site.js'
import './pages.css'

export default function Contact() {
  useSeo(
    'Contact Us',
    'Get in touch with Amica Digital — book a free consultation for software, cloud, cybersecurity or managed IT support. UK-based, worldwide delivery.'
  )
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', company: '', service: '', message: '' })
  }

  const infoCards = [
    { icon: 'mail', title: 'Email us', value: company.email, href: `mailto:${company.email}` },
    { icon: 'phone', title: 'Call us', value: company.phone, href: `tel:${company.phoneHref}` },
    { icon: 'whatsapp', title: 'WhatsApp', value: 'Message us instantly', href: `https://wa.me/${company.whatsapp}` },
    { icon: 'pin', title: 'Visit us', value: company.address },
    { icon: 'clock', title: 'Hours', value: company.hours },
  ]

  return (
    <>
      <PageHero
        eyebrow={<><span className="dot" /> Contact</>}
        title="Let’s talk about your project"
        crumb="Contact"
        subtitle="Book a free, no-obligation consultation. Tell us what you’re working on and we’ll come back within one working day."
      />

      <section className="section">
        <div className="container contact-layout">
          <Reveal className="contact-info">
            <span className="eyebrow"><span className="dot" /> Get in Touch</span>
            <h2 style={{ fontSize: '1.7rem', marginBottom: 20 }}>We’d love to hear from you</h2>
            {infoCards.map((c) => {
              const inner = (
                <>
                  <span className="contact-info__icon"><Icon name={c.icon} size={22} /></span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.value}</p>
                  </div>
                </>
              )
              return c.href ? (
                <a key={c.title} className="contact-info__card" href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={c.title} className="contact-info__card">{inner}</div>
              )
            })}
          </Reveal>

          <Reveal className="card form-card" delay={120}>
            {sent && (
              <div className="form-success">
                <Icon name="check" size={22} />
                <span>Thanks! Your message has been received — we’ll be in touch within one working day.</span>
              </div>
            )}
            <form onSubmit={submit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" value={form.name} onChange={update} required placeholder="Jane Smith" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email address</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={update} required placeholder="jane@company.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" value={form.company} onChange={update} placeholder="Company Ltd" />
                </div>
                <div className="field">
                  <label htmlFor="service">Service of interest</label>
                  <select id="service" name="service" value={form.service} onChange={update}>
                    <option value="">Select a service…</option>
                    {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="message">How can we help?</label>
                <textarea id="message" name="message" value={form.message} onChange={update} required placeholder="Tell us a little about your project or challenge…" />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Send message <Icon name="arrow" size={18} />
              </button>
              <p className="muted" style={{ fontSize: '0.82rem', textAlign: 'center', marginTop: 14, marginBottom: 0 }}>
                By submitting, you agree to our privacy policy. We never share your details.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="split__media" style={{ minHeight: 260 }}>
            <div className="split__media-stat tl">
              <Icon name="globe" size={34} />
              <div style={{ marginTop: 10 }}>
                <strong style={{ fontSize: '1.4rem' }}>Worldwide delivery</strong>
                <span style={{ display: 'block', color: 'var(--slate-300)' }}>Headquartered in Manchester, UK</span>
              </div>
            </div>
            <div className="split__media-stat br">
              <strong>40+</strong>
              <span>Countries served</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
