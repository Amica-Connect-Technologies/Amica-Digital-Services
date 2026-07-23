// Booking configuration — controls the "Book a Consultation" calendar.
// Change these values to change availability across the whole site.

export const booking = {
  title: 'AI Growth Consultation',
  subtitle: 'Amica Digital Services',
  durationMins: 20,
  meetingType: 'Google Meet / Phone call',

  // Availability is defined in the company's own timezone, then shown to the
  // visitor in their local timezone.
  timeZone: 'Europe/London',
  workingDays: [1, 2, 3, 4, 5], // 0 = Sun … 6 = Sat
  startHour: 9, // 09:00
  endHour: 18, // last slot ends by 18:00
  slotStepMins: 45, // gap between slot start times (20 min call + 25 min buffer)

  minNoticeHours: 3, // can't book anything sooner than this
  maxDaysAhead: 60, // how far into the future the calendar opens

  // Dates the team is unavailable (YYYY-MM-DD) — holidays, closures, etc.
  blockedDates: [],

  // Where the booking is sent. Set VITE_BOOKING_ENDPOINT in .env to your
  // Google Apps Script web-app URL (see docs/booking-apps-script.gs).
  endpoint: import.meta.env.VITE_BOOKING_ENDPOINT || '',
}
