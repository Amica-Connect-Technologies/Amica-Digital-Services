import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { company } from '../data/site.js'
import './FloatingWidgets.css'

export default function FloatingWidgets() {
  const [open, setOpen] = useState(false)
  const waLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hi Amica Digital, I'd like to talk about an IT project."
  )}`

  return (
    <div className="fw">
      {open && (
        <div className="fw__panel" role="dialog" aria-label="Chat with us">
          <div className="fw__panel-head">
            <div className="fw__avatar"><Icon name="chat" size={20} /></div>
            <div>
              <strong>Amica Digital</strong>
              <span>Typically replies in minutes</span>
            </div>
            <button className="fw__x" onClick={() => setOpen(false)} aria-label="Close chat">
              <Icon name="close" size={18} />
            </button>
          </div>
          <div className="fw__panel-body">
            <p className="fw__bubble">
              👋 Hi there! Have a question about our IT services? Chat with us here.
            </p>
            <a className="fw__opt" href={waLink} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={20} /> Message us on WhatsApp
            </a>
            <a className="fw__opt" href={`mailto:${company.email}`}>
              <Icon name="mail" size={20} /> Email the team
            </a>
            <Link className="fw__opt" to="/contact" onClick={() => setOpen(false)}>
              <Icon name="phone" size={20} /> Book a free consultation
            </Link>
          </div>
        </div>
      )}

      <div className="fw__buttons">
        <a className="fw__btn fw__btn--wa" href={waLink} target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <Icon name="whatsapp" size={28} />
        </a>
        <button
          className={`fw__btn fw__btn--chat ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close chat' : 'Open chat'}
        >
          <Icon name={open ? 'close' : 'chat'} size={26} />
        </button>
      </div>
    </div>
  )
}
