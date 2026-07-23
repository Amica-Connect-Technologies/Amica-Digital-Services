import { booking } from '../data/booking.js'

// --- Timezone helpers -------------------------------------------------------
// Availability is authored in the company's timezone (Europe/London) but the
// visitor sees slots in their own. These two helpers convert between the two
// without pulling in a date library.

function tzOffsetMs(date, timeZone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
    .formatToParts(date)
    .reduce((acc, p) => ({ ...acc, [p.type]: p.value }), {})

  const asUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour) % 24,
    Number(parts.minute),
    Number(parts.second)
  )
  return asUtc - date.getTime()
}

// A wall-clock time in `timeZone` → the real instant it represents.
function zonedToInstant(year, month, day, hour, minute, timeZone) {
  const guess = Date.UTC(year, month, day, hour, minute)
  const offset = tzOffsetMs(new Date(guess), timeZone)
  return new Date(guess - offset)
}

export const localTimeZone =
  Intl.DateTimeFormat().resolvedOptions().timeZone || booking.timeZone

// --- Date helpers -----------------------------------------------------------

export const toKey = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

export const sameDay = (a, b) => a && b && toKey(a) === toKey(b)

export function monthMatrix(year, month) {
  const first = new Date(year, month, 1)
  const cells = []
  for (let i = 0; i < first.getDay(); i++) cells.push(null)
  const days = new Date(year, month + 1, 0).getDate()
  for (let d = 1; d <= days; d++) cells.push(new Date(year, month, d))
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

/** Is this calendar day open for booking at all? */
export function isDayBookable(date) {
  if (!date) return false

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const day = new Date(date)
  day.setHours(0, 0, 0, 0)

  if (day < today) return false

  const last = new Date(today)
  last.setDate(last.getDate() + booking.maxDaysAhead)
  if (day > last) return false

  if (!booking.workingDays.includes(day.getDay())) return false
  if (booking.blockedDates.includes(toKey(day))) return false

  return slotsForDate(day).length > 0
}

/**
 * Bookable slots for a date, as real Date instants.
 * Generated from the company's working hours, filtered by the minimum notice
 * period, and returned ready to render in the visitor's local timezone.
 */
export function slotsForDate(date) {
  if (!date) return []

  const { timeZone, startHour, endHour, slotStepMins, durationMins, minNoticeHours } = booking
  const earliest = Date.now() + minNoticeHours * 60 * 60 * 1000
  const slots = []

  const totalMins = (endHour - startHour) * 60
  for (let offset = 0; offset + durationMins <= totalMins; offset += slotStepMins) {
    const hour = startHour + Math.floor(offset / 60)
    const minute = offset % 60
    const start = zonedToInstant(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hour,
      minute,
      timeZone
    )
    if (start.getTime() < earliest) continue
    slots.push(start)
  }

  return slots
}

// --- Formatting -------------------------------------------------------------

export const formatTime = (d) =>
  d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })

export const formatDate = (d) =>
  d.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })

/** "03:00 PM – 03:20 PM, Tue, Jul 14, 2026" */
export function formatSlot(start) {
  const end = new Date(start.getTime() + booking.durationMins * 60 * 1000)
  return `${formatTime(start)} – ${formatTime(end)}, ${formatDate(start)}`
}

/** Short human reference the client can quote back, e.g. AMD-4K92. */
export function bookingRef() {
  return `AMD-${Math.random().toString(36).slice(2, 6).toUpperCase()}`
}
