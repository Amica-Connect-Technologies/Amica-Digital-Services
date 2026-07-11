import { Link } from 'react-router-dom'
import './PageHero.css'

// Inner-page hero banner with breadcrumb.
export default function PageHero({ eyebrow, title, subtitle, crumb }) {
  return (
    <section className="page-hero">
      <div className="page-hero__glow" aria-hidden="true" />
      <div className="container page-hero__inner">
        <nav className="page-hero__crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="current">{crumb || title}</span>
        </nav>
        {eyebrow && <span className="eyebrow eyebrow--onDark">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
