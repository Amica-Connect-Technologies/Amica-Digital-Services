import { booking } from '../data/booking.js'
import { localTimeZone } from './schedule.js'

/**
 * Sends a booking to the Google Apps Script endpoint, which appends a row to
 * the marketing team's Google Sheet and emails them.
 *
 * The body is sent as text/plain on purpose: it keeps the request "simple" so
 * the browser skips the CORS preflight, which Apps Script cannot answer.
 */
export async function submitBooking(payload) {
  const body = {
    ...payload,
    durationMins: booking.durationMins,
    visitorTimeZone: localTimeZone,
    submittedAt: new Date().toISOString(),
    pageUrl: window.location.href,
    // Marketing attribution — captured from the URL if the visitor arrived
    // from an ad or campaign link.
    ...campaignParams(),
  }

  if (!booking.endpoint) {
    throw new Error('Booking endpoint is not configured.')
  }

  const res = await fetch(booking.endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(body),
  })

  if (!res.ok) throw new Error(`Booking failed (${res.status})`)

  const data = await res.json().catch(() => ({}))
  if (data.status && data.status !== 'ok') {
    throw new Error(data.message || 'Booking failed')
  }
  return data
}

function campaignParams() {
  const q = new URLSearchParams(window.location.search)
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid']
  const out = {}
  keys.forEach((k) => {
    const v = q.get(k)
    if (v) out[k] = v
  })
  out.referrer = document.referrer || 'direct'
  return out
}
