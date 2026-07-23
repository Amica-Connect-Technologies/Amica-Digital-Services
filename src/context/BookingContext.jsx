import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const Ctx = createContext(null)

/**
 * Lets any button anywhere on the site open the booking modal:
 *   const { openBooking } = useBooking()
 *   <button onClick={() => openBooking({ source: 'Pricing CTA' })}>Book</button>
 *
 * `source` is stored with the booking so marketing can see which CTA converted.
 */
export function BookingProvider({ children }) {
  const [state, setState] = useState({ open: false, source: '', service: '' })

  const openBooking = useCallback((opts = {}) => {
    setState({ open: true, source: opts.source || 'Website', service: opts.service || '' })
  }, [])

  const closeBooking = useCallback(() => {
    setState((s) => ({ ...s, open: false }))
  }, [])

  const value = useMemo(
    () => ({ ...state, openBooking, closeBooking }),
    [state, openBooking, closeBooking]
  )

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useBooking() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useBooking must be used inside <BookingProvider>')
  return ctx
}
