# Amica Digital Services website

Static marketing site for amicadigitalservices.com, built with [Astro](https://astro.build).

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static files to dist/
npm run preview    # serves dist/
```

Node 20 or later.

## Deploying on Hostinger

Either option works:

- **Static (recommended):** build command `npm run build`, output directory `dist`.
- **Node web app:** build command `npm run build`, start command `npm start` (serves `dist/` on `$PORT`, default 3000).

After go-live, submit `https://amicadigitalservices.com/sitemap-index.xml` in Google Search Console.

## Where to edit things

| What | File |
| --- | --- |
| Company details, phone, address, booking and form links, GA4 ID | `src/data/site.ts` |
| Service pages (copy, FAQs, images) | `src/data/services.ts` |
| Care agency package page and pricing | `src/pages/care-agency-automation.astro`, `src/pages/pricing.astro` |
| Colours, spacing, buttons | `src/styles/global.css` |
| Images | `public/images/` |

## Images

Page images live in `public/images/`. If a file is missing, a built-in workflow graphic is shown instead:

- `website-crm.jpg`, `recruitment-automation.jpg`, `ai-receptionist.jpg`, `ai-chatbot.jpg`, `seo.jpg`, `social-media.jpg` (supplied by Amica, October 2026)

## Analytics and cookies

Google Analytics 4 (`G-PGDEKR5YCR`) loads only after a visitor accepts analytics cookies. The choice is stored in `localStorage` under `amica-consent-v1`. No Google Tag Manager container is used.

## Forms and booking

The contact form and booking calendar are GoHighLevel embeds. Their IDs live in `src/data/site.ts`.
