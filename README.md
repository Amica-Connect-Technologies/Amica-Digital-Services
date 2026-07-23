# Amica Digital — Marketing Website

Marketing website for **Amica Digital Services** ("The Intelligent Growth Engine") — a UK-based agency offering AI lead generation, automation & CRM systems, AI virtual assistants, SEO/content, care-sector compliance automation and custom software.

Built as a single-page React app (Vite + React Router). All site content is data-driven from one file, so copy, services, pricing, case studies and blog posts can be edited without touching components.

## Tech stack

| | |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Routing | React Router 7 (`BrowserRouter`) |
| Styling | Plain CSS (per-component `.css` files, no framework) |
| Linting | Oxlint |
| Fonts | Plus Jakarta Sans + Inter (Google Fonts) |

No backend, no CMS, no state library — content lives in `src/data/site.js`.

## Getting started

```bash
npm install
npm run dev       # dev server with HMR → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run lint      # oxlint
```

Requires Node 18+ (Node 20+ recommended for Vite 8).

## Project structure

```
index.html              Root HTML — base title, meta description, font preconnects
src/
  main.jsx              App entry: BrowserRouter + all route definitions
  App.jsx               Layout shell: Navbar + <Outlet /> + Footer + FloatingWidgets
  index.css             Global styles, CSS variables, design tokens
  data/site.js          ★ ALL site content (see below)
  data/booking.js       Booking availability: hours, slot length, notice period
  lib/schedule.js       Slot generation + timezone conversion
  lib/submitBooking.js  POSTs the booking to the Google Sheet endpoint
  context/
    BookingContext.jsx  openBooking() — lets any button open the booking modal
  pages/                One component per route
    Home.jsx            Hero, stats, differentiators, services, process, industries…
    About.jsx           Company story, audiences, testimonials
    Services.jsx        Service grid → links to ServiceDetail
    ServiceDetail.jsx   Dynamic page per service (/services/:slug)
    Pricing.jsx         Plans, web pricing, trust markers, industry systems
    CaseStudy.jsx       Client case studies with metrics + quotes
    Blog.jsx            Article listing
    Contact.jsx         Contact form + contact info cards
    NotFound.jsx        404
  components/
    Navbar.jsx          Top nav (routes come from `nav` in site.js)
    BookingModal.jsx    Calendar → time slot → details → confirmation
    Footer.jsx          Footer + company details + social links
    FloatingWidgets.jsx Floating chat launcher → WhatsApp / email / consultation
    PageHero.jsx        Shared page header block
    Reveal.jsx          IntersectionObserver fade-in-on-scroll wrapper
    ScrollToTop.jsx     Resets scroll position on route change
    Icon.jsx            SVG sprite icon component (public/icons.svg)
    Logo.jsx            Brand mark
  hooks/
    useSeo.js           Sets document.title + meta description per page
public/
  icons.svg             SVG sprite consumed by <Icon />
  favicon.svg
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services listing |
| `/services/:slug` | Service detail (slug from `services[]`) |
| `/pricing` | Pricing |
| `/case-studies` | Case studies |
| `/blog` | Blog |
| `/contact` | Contact |
| `*` | 404 |

## Editing content

Everything user-facing is exported from [src/data/site.js](src/data/site.js) — change it there and it updates across every page:

- `company` — name, email, phone, WhatsApp number, address, hours, social links
- `nav` — navbar/footer links
- `stats`, `differentiators`, `process`, `industries`, `audiences` — Home/About sections
- `services` — the 7 core services; each `slug` becomes a `/services/:slug` page (icon, tagline, long copy, feature list, tech tags)
- `pricingPlans`, `webPricing`, `pricingTrust`, `pricingIndustries` — Pricing page
- `caseStudies` — client stories with metrics and quotes
- `posts` — blog article listing
- `testimonials` — quotes used on About/Home

Adding a service is just a new object in `services[]` — the listing card and its detail page are generated from it. Same for blog posts and case studies.

Icons are referenced by name (`<Icon name="shield" />`) and resolve to symbols in [public/icons.svg](public/icons.svg) — add a new `<symbol id="...">` there to add an icon.

## Booking system ("Book a Consultation")

Every "Book…" button on the site opens a booking modal: **pick a date → pick a time → enter details → confirmed**. It is not an embed — it's built into the app.

**How it works**

- Availability is generated in the browser from [src/data/booking.js](src/data/booking.js) — working days, hours, slot length, minimum notice, how far ahead the calendar opens, and any blocked dates. No calendar API, no double-booking check: the team confirms each slot by sending the invite.
- Slots are authored in the company's timezone (`Europe/London`) and **displayed in the visitor's own timezone**, so a client in Karachi sees 01:00 PM for a 09:00 UK slot.
- On submit the booking is POSTed to a **Google Apps Script** endpoint, which appends a row to the marketing team's Google Sheet, emails the team, and sends the client a confirmation email.
- Each booking records **which CTA it came from** (`Navbar`, `Pricing — Growth plan`, `Home hero`…) plus UTM/gclid parameters and the referrer, so marketing can see what converts.
- The client can download an `.ics` calendar file from the confirmation screen.

**Setting up the Google Sheet (one time, ~10 min)**

1. Create a Google Sheet, then **Extensions → Apps Script** and paste in [docs/booking-apps-script.gs](docs/booking-apps-script.gs).
2. Set `TEAM_EMAILS` at the top of that script.
3. **Deploy → New deployment → Web app**, with *Execute as: Me* and *Who has access: **Anyone***. Copy the `/exec` URL.
4. Copy `.env.example` to `.env` and set `VITE_BOOKING_ENDPOINT` to that URL, then rebuild.

Full step-by-step instructions are in the comment block at the top of the script.

> Without `VITE_BOOKING_ENDPOINT` set, the modal works but submission fails with a message asking the visitor to email instead — it never shows a false confirmation.

**Adding a booking button anywhere**

```jsx
import { useBooking } from '../context/BookingContext.jsx'

const { openBooking } = useBooking()
<button onClick={() => openBooking({ source: 'Blog sidebar' })}>Book a call</button>
```

`source` is what shows up in the Sheet's "CTA Source" column.

## Notes / known gaps

- **Contact form does not submit anywhere.** `submit()` in [Contact.jsx](src/pages/Contact.jsx#L18) only shows a success state and clears the fields — wire it to the same Apps Script endpoint (or an email service) before going live. The booking modal *is* wired up; the contact form is not.
- The booking consent text links to `/policy`, but there is **no `/policy` route** in this app — add a privacy policy page or change the link.
- Bookings are requests, not guaranteed slots: two visitors can pick the same time, and the team must confirm each one manually.
- Social links in `company.social` are placeholder root URLs, not real profiles.
- SEO is client-side only (`useSeo` sets title/description after mount). If search-engine indexing of per-page meta matters, consider prerendering or SSR.
- BrowserRouter needs the host to rewrite all paths to `index.html`, otherwise deep links like `/pricing` will 404 on refresh.

## Deployment

`npm run build` outputs a static site to `dist/` — deployable to any static host (Netlify, Vercel, Cloudflare Pages, S3, Nginx). Ensure SPA fallback rewrites are configured (see note above).
