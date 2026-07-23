import { useEffect, useMemo, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import { useBooking } from '../context/BookingContext.jsx'
import { booking } from '../data/booking.js'
import { company, services } from '../data/site.js'
import { submitBooking } from '../lib/submitBooking.js'
import {
  bookingRef,
  formatDate,
  formatSlot,
  formatTime,
  isDayBookable,
  localTimeZone,
  monthMatrix,
  sameDay,
  slotsForDate,
  toKey,
} from '../lib/schedule.js'
import './BookingModal.css'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const emptyForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  companyName: '',
  service: '',
  message: '',
  consent: false,
}

export default function BookingModal() {
  const { open, closeBooking, source, service } = useBooking()
  const [step, setStep] = useState(1)
  const [cursor, setCursor] = useState(() => firstOpenMonth())
  const [date, setDate] = useState(null)
  const [slot, setSlot] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [failed, setFailed] = useState('')
  const [confirmed, setConfirmed] = useState(null)
  const dialogRef = useRef(null)

  // Reset to a clean state every time the modal is opened.
  useEffect(() => {
    if (!open) return
    setStep(1)
    setCursor(firstOpenMonth())
    setDate(null)
    setSlot(null)
    setForm({ ...emptyForm, service: service || '' })
    setErrors({})
    setFailed('')
    setConfirmed(null)
    dialogRef.current?.focus()
  }, [open, service])

  // Lock the page behind the modal and close on Escape.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && closeBooking()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, closeBooking])

  const cells = useMemo(
    () => monthMatrix(cursor.getFullYear(), cursor.getMonth()),
    [cursor]
  )
  const slots = useMemo(() => (date ? slotsForDate(date) : []), [date])

  if (!open) return null

  const monthLabel = cursor.toLocaleDateString([], { month: 'long', year: 'numeric' })
  const canGoBack = cursor > firstOpenMonth()

  const pickDate = (d) => {
    setDate(d)
    setSlot(null)
  }

  // Updating a field clears its error, so the user isn't left staring at a red
  // message on a value they've already corrected.
  const setField = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((e) => (e[name] ? { ...e, [name]: '' } : e))
  }

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim()) e.lastName = 'Last name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) e.email = 'Enter a valid email address'
    if (form.phone.replace(/\D/g, '').length < 7) e.phone = 'Enter a valid phone number'
    if (!form.consent) e.consent = 'Please confirm to continue'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!validate() || !slot) return

    setSending(true)
    setFailed('')
    const ref = bookingRef()

    try {
      await submitBooking({
        reference: ref,
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.companyName.trim(),
        service: form.service,
        message: form.message.trim(),
        startsAt: slot.toISOString(),
        slotLabel: formatSlot(slot),
        source,
      })
      setConfirmed({ ref, slot })
      setStep(3)
    } catch (err) {
      setFailed(
        'We could not confirm your booking just now. Please email us and we will lock in your slot.'
      )
      console.error(err)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="bk" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && closeBooking()}>
      <div
        className="bk__dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Book a consultation"
        ref={dialogRef}
        tabIndex={-1}
      >
        <button className="bk__close" onClick={closeBooking} aria-label="Close booking">
          <Icon name="close" size={20} />
        </button>

        {step === 3 && confirmed ? (
          <Confirmation confirmed={confirmed} form={form} onClose={closeBooking} />
        ) : (
          <div className="bk__grid">
            {/* ---------- Summary rail ---------- */}
            <aside className="bk__aside">
              {step === 2 && (
                <button className="bk__back" onClick={() => setStep(1)}>
                  <Icon name="arrow-left" size={18} /> Back
                </button>
              )}

              <div className="bk__brand">
                <span className="bk__mark">
                  <Icon name="spark" size={22} />
                </span>
                <p className="bk__eyebrow">{booking.subtitle}</p>
                <h3>{booking.title}</h3>
              </div>

              <ul className="bk__meta">
                <li>
                  <Icon name="clock" size={18} />
                  <span>{booking.durationMins} min</span>
                </li>
                <li>
                  <Icon name="calendar" size={18} />
                  <span>{slot ? formatSlot(slot) : date ? formatDate(date) : 'Select a date & time'}</span>
                </li>
                <li>
                  <Icon name="video" size={18} />
                  <span>{booking.meetingType}</span>
                </li>
                <li>
                  <Icon name="globe" size={18} />
                  <span>{localTimeZone}</span>
                </li>
              </ul>

              <p className="bk__note">
                Free, no-obligation call. We&apos;ll map the fastest route to measurable growth for your
                business — no hard sell.
              </p>
            </aside>

            {/* ---------- Step 1: date & time ---------- */}
            {step === 1 && (
              <section className="bk__main">
                <h4 className="bk__title">Select a date &amp; time</h4>

                <div className="bk__picker">
                  <div className="bk__cal">
                    <div className="bk__cal-head">
                      <button
                        className="bk__nav"
                        onClick={() => setCursor(addMonths(cursor, -1))}
                        disabled={!canGoBack}
                        aria-label="Previous month"
                      >
                        <Icon name="chevron-left" size={18} />
                      </button>
                      <strong>{monthLabel}</strong>
                      <button
                        className="bk__nav"
                        onClick={() => setCursor(addMonths(cursor, 1))}
                        aria-label="Next month"
                      >
                        <Icon name="chevron-right" size={18} />
                      </button>
                    </div>

                    <div className="bk__dow">
                      {WEEKDAYS.map((d) => (
                        <span key={d}>{d}</span>
                      ))}
                    </div>

                    <div className="bk__days">
                      {cells.map((d, i) =>
                        d ? (
                          <button
                            key={toKey(d)}
                            className={`bk__day ${sameDay(d, date) ? 'is-selected' : ''} ${
                              isToday(d) ? 'is-today' : ''
                            }`}
                            disabled={!isDayBookable(d)}
                            onClick={() => pickDate(d)}
                            aria-label={formatDate(d)}
                          >
                            {d.getDate()}
                          </button>
                        ) : (
                          <span key={`e${i}`} className="bk__day bk__day--empty" />
                        )
                      )}
                    </div>

                    <p className="bk__tz">
                      <Icon name="globe" size={16} />
                      Times shown in <strong>{localTimeZone}</strong>
                    </p>
                  </div>

                  <div className="bk__slots" aria-live="polite">
                    {!date && (
                      <div className="bk__empty">
                        <Icon name="calendar" size={28} />
                        <p>Pick a day to see available times.</p>
                      </div>
                    )}

                    {date && slots.length === 0 && (
                      <div className="bk__empty">
                        <Icon name="clock" size={28} />
                        <p>No times left on this day. Try the next one.</p>
                      </div>
                    )}

                    {date &&
                      slots.map((s) => {
                        const active = slot && s.getTime() === slot.getTime()
                        return (
                          <div key={s.toISOString()} className={`bk__slot-row ${active ? 'is-active' : ''}`}>
                            <button className="bk__slot" onClick={() => setSlot(s)}>
                              {formatTime(s)}
                            </button>
                            {active && (
                              <button className="bk__confirm" onClick={() => setStep(2)}>
                                Select
                              </button>
                            )}
                          </div>
                        )
                      })}
                  </div>
                </div>
              </section>
            )}

            {/* ---------- Step 2: details ---------- */}
            {step === 2 && (
              <section className="bk__main bk__main--form">
                <h4 className="bk__title">Enter your details</h4>

                <form className="bk__form" onSubmit={submit} noValidate>
                  {/* Scrolls; the actions below stay pinned as a footer. */}
                  <div className="bk__fields">
                    <div className="bk__row">
                      <Field label="First name" name="firstName" required value={form.firstName} error={errors.firstName} onChange={setField} placeholder="Jane" />
                      <Field label="Last name" name="lastName" required value={form.lastName} error={errors.lastName} onChange={setField} placeholder="Smith" />
                    </div>

                    <div className="bk__row">
                      <Field label="Email" name="email" type="email" required value={form.email} error={errors.email} onChange={setField} placeholder="jane@company.com" />
                      <Field label="Phone" name="phone" type="tel" required value={form.phone} error={errors.phone} onChange={setField} placeholder="+44 7446 981768" />
                    </div>

                    <div className="bk__row">
                      <Field label="Company" name="companyName" value={form.companyName} onChange={setField} placeholder="Company Ltd" />
                      <div className="bk__field">
                        <label htmlFor="bk-service">What do you need help with?</label>
                        <select
                          id="bk-service"
                          value={form.service}
                          onChange={(e) => setField('service', e.target.value)}
                        >
                          <option value="">Select a service…</option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <div className="bk__field">
                      <label htmlFor="bk-message">Anything we should know before the call?</label>
                      <textarea
                        id="bk-message"
                        rows={3}
                        value={form.message}
                        onChange={(e) => setField('message', e.target.value)}
                        placeholder="Tell us briefly about your business and what you'd like to fix or grow…"
                      />
                    </div>

                    <label className={`bk__consent ${errors.consent ? 'has-error' : ''}`}>
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => setField('consent', e.target.checked)}
                      />
                      <span>
                        I agree to be contacted about this booking and to Amica Digital storing my details in
                        line with the <a href="/policy" target="_blank" rel="noreferrer">privacy policy</a>.
                      </span>
                    </label>
                    {errors.consent && <p className="bk__err">{errors.consent}</p>}

                    {failed && (
                      <p className="bk__alert">
                        {failed}{' '}
                        <a href={`mailto:${company.email}`}>{company.email}</a>
                      </p>
                    )}
                  </div>

                  <div className="bk__actions">
                    <button type="button" className="btn btn-ghost" onClick={() => setStep(1)}>
                      Change time
                    </button>
                    <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
                      {sending ? 'Confirming…' : 'Schedule Meeting'}
                      {!sending && <Icon name="arrow" size={18} />}
                    </button>
                  </div>
                </form>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// --- Sub-components ---------------------------------------------------------

function Field({ label, name, value, error, onChange, type = 'text', required, placeholder }) {
  return (
    <div className={`bk__field ${error ? 'has-error' : ''}`}>
      <label htmlFor={`bk-${name}`}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={`bk-${name}`}
        type={type}
        value={value}
        placeholder={placeholder}
        aria-invalid={!!error}
        onChange={(e) => onChange(name, e.target.value)}
      />
      {error && <p className="bk__err">{error}</p>}
    </div>
  )
}

function Confirmation({ confirmed, form, onClose }) {
  const { ref, slot } = confirmed
  return (
    <div className="bk__done">
      <span className="bk__tick">
        <Icon name="check" size={34} strokeWidth={2.4} />
      </span>
      <h3>You&apos;re booked in, {form.firstName}.</h3>
      <p className="bk__done-sub">
        We&apos;ve sent a confirmation to <strong>{form.email}</strong>. A calendar invite with the meeting
        link follows shortly.
      </p>

      <div className="bk__ticket">
        <div>
          <span>When</span>
          <strong>{formatSlot(slot)}</strong>
        </div>
        <div>
          <span>Duration</span>
          <strong>{booking.durationMins} minutes · {booking.meetingType}</strong>
        </div>
        <div>
          <span>Reference</span>
          <strong>{ref}</strong>
        </div>
      </div>

      <div className="bk__actions bk__actions--center">
        <button className="btn btn-ghost" onClick={() => downloadIcs(slot, ref, form)}>
          <Icon name="calendar" size={18} /> Add to calendar
        </button>
        <button className="btn btn-primary" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  )
}

// --- Helpers ----------------------------------------------------------------

function firstOpenMonth() {
  const d = new Date()
  return new Date(d.getFullYear(), d.getMonth(), 1)
}

function addMonths(d, n) {
  return new Date(d.getFullYear(), d.getMonth() + n, 1)
}

function isToday(d) {
  return sameDay(d, new Date())
}

/** Generates an .ics file so the client can drop the call into their calendar. */
function downloadIcs(slot, ref, form) {
  const stamp = (d) => d.toISOString().replace(/[-:]|\.\d{3}/g, '')
  const end = new Date(slot.getTime() + booking.durationMins * 60 * 1000)
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Amica Digital//Booking//EN',
    'BEGIN:VEVENT',
    `UID:${ref}@amicadigitalservices.com`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(slot)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${booking.title} — ${company.name}`,
    `DESCRIPTION:Booking reference ${ref}. We'll call you on ${form.phone}.`,
    `ORGANIZER;CN=${company.name}:mailto:${company.email}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }))
  const a = document.createElement('a')
  a.href = url
  a.download = `amica-consultation-${ref}.ics`
  a.click()
  URL.revokeObjectURL(url)
}
