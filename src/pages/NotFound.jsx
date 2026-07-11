import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import useSeo from '../hooks/useSeo.js'
import './pages.css'

export default function NotFound() {
  useSeo('Page Not Found', 'The page you are looking for could not be found.')
  return (
    <section className="notfound">
      <div className="container">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>Sorry, the page you’re looking for doesn’t exist or has moved.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary btn-lg">Back to Home <Icon name="arrow" size={18} /></Link>
          <Link to="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}
