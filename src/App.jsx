import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingWidgets from './components/FloatingWidgets.jsx'
import BookingModal from './components/BookingModal.jsx'
import { BookingProvider } from './context/BookingContext.jsx'

export default function App() {
  return (
    <BookingProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWidgets />
      <BookingModal />
    </BookingProvider>
  )
}
