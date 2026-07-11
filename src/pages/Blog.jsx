import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import useSeo from '../hooks/useSeo.js'
import { posts } from '../data/site.js'
import './pages.css'

export default function Blog() {
  useSeo(
    'Blog & Resources',
    'Practical insights on IT, cybersecurity, cloud and digital growth from the engineers at Amica Digital.'
  )
  const categories = useMemo(() => ['All', ...new Set(posts.map((p) => p.category))], [])
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? posts : posts.filter((p) => p.category === filter)
  const featured = posts[0]

  return (
    <>
      <PageHero
        eyebrow={<><span className="dot" /> Blog &amp; Resources</>}
        title="Ideas, guides and honest opinions"
        crumb="Blog"
        subtitle="Practical writing on technology, security and growth — from the people who build and run it every day."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <Link to="/blog" className="cs-card card" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', overflow: 'hidden' }}>
              <div className="cs-card__top" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '48px' }}>
                <div className="cs-card__tags"><span>Featured</span><span>{featured.category}</span></div>
                <h3 style={{ fontSize: '1.7rem' }}>{featured.title}</h3>
                <p style={{ color: 'var(--slate-300)', marginTop: 12 }}>{featured.excerpt}</p>
                <span className="svc-card__more" style={{ color: '#fff', marginTop: 16 }}>
                  Read article <Icon name="arrow" size={16} />
                </span>
              </div>
              <div className="blog-preview__thumb thumb-0" style={{ minHeight: 260 }}>
                <span className="blog-preview__cat">{featured.date} · {featured.read}</span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="blog-filter">
            {categories.map((c) => (
              <button key={c} className={filter === c ? 'is-active' : ''} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
          <div className="blog-grid">
            {filtered.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <Link to="/blog" className="blog-preview__card card">
                  <div className={`blog-preview__thumb thumb-${i % 3}`}>
                    <span className="blog-preview__cat">{post.category}</span>
                  </div>
                  <div className="blog-preview__body">
                    <div className="blog-preview__meta"><span>{post.date}</span> · <span>{post.read}</span></div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="blog-preview__more">Read article <Icon name="arrow" size={16} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Get insights in your inbox"
        text="Occasional, genuinely useful emails on technology and security for growing businesses. No spam, unsubscribe anytime."
        primary={{ label: 'Talk to Us', to: '/contact' }}
        secondary={{ label: 'Browse Services', to: '/services' }}
      />
    </>
  )
}
