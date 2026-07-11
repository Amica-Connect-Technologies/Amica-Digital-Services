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

## Notes / known gaps

- **Contact form does not submit anywhere.** `submit()` in [Contact.jsx](src/pages/Contact.jsx#L18) only shows a success state and clears the fields — wire it to an email service or API endpoint before going live.
- Social links in `company.social` are placeholder root URLs, not real profiles.
- SEO is client-side only (`useSeo` sets title/description after mount). If search-engine indexing of per-page meta matters, consider prerendering or SSR.
- BrowserRouter needs the host to rewrite all paths to `index.html`, otherwise deep links like `/pricing` will 404 on refresh.

## Deployment

`npm run build` outputs a static site to `dist/` — deployable to any static host (Netlify, Vercel, Cloudflare Pages, S3, Nginx). Ensure SPA fallback rewrites are configured (see note above).
