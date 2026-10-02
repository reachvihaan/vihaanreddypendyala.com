# Vihaan Reddy — Human + AI

A complete six-page Next.js 16 / React 19 website with TypeScript, Tailwind CSS v4, Motion, Lenis, Space Grotesk and Sora. All routes render statically. Includes 16 generated local images, SVG wordmark and favicon, metadata, social preview, sitemap, robots and structured data.

## Run

Use Node 20.9 or newer (Node 24 used for verification).

```sh
npm ci
npm run dev
npm run typecheck
npm run build
npm start
```

No environment variables or API keys are required to build. Google Fonts are fetched during the build by next/font/google; artwork is already bundled, so no image service is needed.

## Deploy on Vercel

1. Sign in to Vercel with GitHub.
2. Choose **Add New → Project**, import `reachvihaan/vihaanreddypendyala.com`.
3. Leave the Next.js preset, root directory and build defaults unchanged. Click **Deploy**.
4. Optionally set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain under Settings → Environment Variables and redeploy. Fallback: `https://vihaanreddypendyala.com`.
5. Add the domain in Settings → Domains and apply the DNS instructions Vercel provides.

The repository push does not itself create a Vercel project. No production deployment is claimed.

## Edit

- `lib/content.ts`: offerings, contact settings, focus areas, portfolio samples, articles and FAQs.
- `app/*/page.tsx`: page narratives and section composition.
- `app/globals.css`: responsive styles and brand tokens.
- `lib/whatsapp.ts`: WhatsApp number and default message.
- `public/images/`: generated assets, exact filenames documented in `IMAGES.md`.
- `public/logo.svg`: Vihaan Reddy wordmark. Uses the full name because the brief's proposed PVR initials are unverified.

Portfolio and Insights have working filters, native expandable content and keyboard-dismissable reading dialogs. Contact validates inline and compiles real answers into a WhatsApp URL. It opens WhatsApp; the visitor sends the message themselves. No form data is stored or sent to a backend. No analytics or newsletter service is installed.

## Confirm before promoting the site

All unknown claims are marked with brackets rather than fabricated.

- Approved photograph of Vihaan. The three supplied reference URLs were unavailable. The generated portrait is explicitly labelled illustrative and is not a verified likeness.
- Education: institutions, qualifications and dates.
- Journey: actual milestones and dates.
- Achievements, recognitions, certification names/issuers/dates.
- Portfolio: real projects, clients, scope, completion status, dates, results, images and permission to publish. Current entries are clearly labelled sample concepts, including the Completed Work category.
- Coaching formats, duration, pricing; development scope, timeline and pricing; digital guide title, release, contents and availability.
- Testimonials, audience counts and people/businesses coached.
- India country code +91, WhatsApp activation, contact hours 9 AM–9 PM interpreted as IST, remote-first India-based positioning.
- Physical location/address. No address or map was invented; address omitted from structured data.
- Final domain and social profile ownership; Instagram, Facebook and YouTube links use @reachvihaan as supplied.
- Optional PVR initials/order; primary branding uses Vihaan Reddy pending confirmation.
- Collaboration types (brand partnerships, learning sessions, speaking and digital projects).

The site includes general original educational starter articles. Review these and all positioning copy before active promotion. No client results, awards or statistics are asserted.

## Motion and accessibility

Semantic landmarks, skip link, visible keyboard focus, reduced-motion styles, labelled form controls, native details/summary accordions and native modal dialogs. Scroll effects animate position only and never hide server-rendered content. Lenis is skipped for reduced-motion users. Mouse spotlight and magnetic effects are disabled on touch. No distractingly looping decorations.

See `QA.md` for actual validation results and remaining limitations. A Lighthouse score is not claimed without a measured audit.
