# SkyTrack ICT — skytrackict.com.ng

A React + Vite + TypeScript rebuild of skytrackict.com.ng (migrated off WordPress), combining
SkyTrack's existing services (testing centre, software, background checks, recruitment,
scholarships) with the full feature set of fynestinnovationhub.com (exam-prep training,
coworking/private offices, conference rooms, business solutions).

- **Frontend-only.** No backend server — payments go straight to Paystack from the browser,
  and content/bookings are stored in Contentful.
- **Payments:** Paystack Inline JS (popup checkout).
- **Content & submissions:** Contentful (reads via Content Delivery API, writes via Content
  Management API — see the security note below before using writes in production).

## Quick start

```bash
npm install
cp .env.example .env   # then fill in your keys
npm run dev
```

Build for production:

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Environment variables

Copy `.env.example` to `.env` and fill in:

```
VITE_CONTENTFUL_SPACE_ID=
VITE_CONTENTFUL_ACCESS_TOKEN=
VITE_CONTENTFUL_ENVIRONMENT=master

VITE_CONTENTFUL_MANAGEMENT_TOKEN=   # optional, see "Contentful write access" below

VITE_PAYSTACK_PUBLIC_KEY=
```

The site works with **none of these set** — every page falls back to the bundled static
content in `src/data/content.ts`, and the enrolment modal will tell you Paystack isn't
configured yet if you try to pay without a public key. This makes it safe to preview and
deploy immediately, then wire up real services when you're ready.

## Paystack integration

- Uses Paystack's Inline JS (`https://js.paystack.co/v2/inline.js`), loaded on demand from
  `src/lib/paystack.ts`. No server, no secret key in the frontend — only your **public** key
  (`pk_live_...` / `pk_test_...`) goes in `VITE_PAYSTACK_PUBLIC_KEY`.
- Every "Enrol / Book Now" button across the site (courses, coworking desks, private offices,
  conference rooms, business services, testing-centre bookings) opens the same
  `EnrollModal` (`src/components/EnrollModal.tsx`), which collects name/email/phone and then
  launches the Paystack popup for the item's price.
- On successful payment, the booking is recorded via `recordEnrollment()`
  (`src/lib/submissions.ts`) — see below.
- **Important — frontend-only payment verification:** because there's no backend, this setup
  trusts the `callback`/`onSuccess` event from Paystack's popup to mark a booking as paid.
  For a small business this is usually fine, but it means a determined user could in theory
  fake a "successful" booking without actually paying. If you later want server-side
  verification (calling Paystack's `/transaction/verify/:reference` endpoint with your
  **secret** key), that has to happen from a small backend or serverless function — it can
  never be done safely from the browser, since it requires your secret key.

## Contentful integration

### Reads (safe to use as-is)

`src/lib/contentful.ts` uses the Content Delivery API with your `VITE_CONTENTFUL_ACCESS_TOKEN`
(a read-only token — safe to expose in frontend code). Pages currently render from the bundled
static data in `src/data/content.ts` by default; `fetchEntries()` is ready for you to wire up
per-page once your Contentful space has matching content types, without changing the read-only
access model.

Suggested content types to mirror the static data:

| Content type      | Key fields                                                                          |
|--------------------|--------------------------------------------------------------------------------------|
| `course`           | name, category, summary, duration, priceMin, priceMax, format, outcomes, featured    |
| `pricingPlan`      | group, name, capacity, price, period, note                                           |
| `businessService`  | name, summary, priceMin, priceMax, period, deliverables                              |
| `testingService`   | name, summary, priceMin, priceMax, period                                            |
| `teamMember`       | name, role, bio, photo                                                               |
| `testimonial`      | quote, name, role                                                                    |
| `faqItem`          | question, answer                                                                     |

### Writes — enrolments & contact messages

`src/lib/submissions.ts` saves every enrolment/booking and contact-form submission:

1. **Always** to `localStorage` (`skytrackict:enrollments`, `skytrackict:contact-messages`) —
   works with zero configuration, useful for local testing.
2. **Optionally** to Contentful, as `enrollment` / `contactMessage` entries, if
   `VITE_CONTENTFUL_MANAGEMENT_TOKEN` is set.

**⚠️ Security note on `VITE_CONTENTFUL_MANAGEMENT_TOKEN`:** Contentful's write API (the
Content Management API) requires a token with full read/write access to your space. Any
`VITE_...` variable gets bundled into the public JavaScript that ships to every visitor's
browser — so setting this token means **anyone can view your site's source and extract a
token that can read, edit or delete anything in your Contentful space.**

This is acceptable for prototyping or an internal/staging site, but for the live production
site we strongly recommend **not** setting `VITE_CONTENTFUL_MANAGEMENT_TOKEN`, and instead
proxying writes through a small serverless function (a Netlify/Vercel function, Cloudflare
Worker, or similar) that holds the token server-side. `createEntry()` in
`src/lib/submissions.ts` is written so that swap only touches that one function — point it at
your serverless endpoint instead of `api.contentful.com` directly.

Suggested content types for writes:

| Content type     | Fields                                                                              |
|-------------------|--------------------------------------------------------------------------------------|
| `enrollment`      | fullName, email, phone, itemId, itemName, amountKobo, reference, status, createdAt   |
| `contactMessage`  | fullName, email, phone, subject, message, createdAt                                  |

## Project structure

```
src/
  components/     Shared UI (Navbar, Footer, cards, modal, icons, etc.)
  data/content.ts Static fallback content — services, courses, pricing, team, FAQs
  lib/
    contentful.ts Content Delivery API client + fallback logic
    submissions.ts Enrolment/contact write logic (localStorage + optional Contentful CMA)
    paystack.ts    Paystack Inline JS loader + checkout helper
  pages/          One file per route
  types/          Shared TypeScript types
```

## Pages

`/`, `/about`, `/training`, `/testing-centre`, `/software`, `/workspace`,
`/business-solutions`, `/background-checks`, `/recruitment`, `/scholarships`, `/pricing`,
`/contact`, `/enroll`, `/terms`, `/privacy`, `/refund-policy`.

## Before going live

- Replace the placeholder content in `src/data/content.ts` — team bios, testimonials, stats,
  address and contact details — with SkyTrack ICT's real information.
- Replace `src/assets/logo.png` with a higher-resolution version of your logo if you have one
  (the uploaded file was quite small — 66×54px).
- Decide on your Contentful write strategy (see security note above) before launch.
- Point your domain's DNS at wherever you deploy `dist/` (Netlify, Vercel, Cloudflare Pages,
  or any static host all work well with a Vite build).
