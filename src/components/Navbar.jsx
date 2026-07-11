import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'
import { nav } from '../data/site.js'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Logo />

        <nav className={`nav__menu ${open ? 'nav__menu--open' : ''}`} aria-label="Primary">
          <button className="nav__close" onClick={() => setOpen(false)} aria-label="Close menu">
            <Icon name="close" size={24} />
          </button>
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/contact" className="btn btn-primary nav__cta-mobile">
            Book a Consultation
          </NavLink>
        </nav>

        <div className="nav__actions">
          <NavLink to="/contact" className="btn btn-primary nav__cta">
            Book a Consultation
          </NavLink>
          <button className="nav__burger" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
            <Icon name="menu" size={26} />
          </button>
        </div>
      </div>
      {open && <div className="nav__backdrop" onClick={() => setOpen(false)} />}
    </header>
  )
}
