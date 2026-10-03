# Validation

- PASS — `npm run build`: Next.js 16.3.8 compiles successfully; all six pages, 404, robots and sitemap are prerendered statically.
- PASS — `npm run typecheck`: strict TypeScript, no errors.
- PASS — Chromium layout checks on all six pages at 360, 390, 768, 1024, 1280 and 1536 pixels: no horizontal document overflow; one H1 per page.
- PASS — Mobile menu opens and navigates to About.
- PASS — Portfolio category filtering and reading dialog; Escape closes the dialog.
- PASS — Contact required-field validation; generated WhatsApp URL includes the supplied test visitor name and message and the +91 destination. No message was sent during testing.
- PASS — Insight content remains readable with JavaScript disabled.
- PASS — All 16 generated image files supplied at the required paths, with WebP content images and 1200×630 PNG social preview. All image bytes decoded after one WebP repair.
- PASS — Desktop and mobile screenshots visually reviewed; inline content never starts opacity-hidden.
- PASS — Metadata, canonical links, sitemap, robots, service schema and FAQ schema implemented; no unconfirmed postal address or credentials in schema.
- PASS — Brand palette and specified Google Fonts implemented. Full-name wordmark used instead of unconfirmed PVR initials.
- PASS — Motion respects reduced-motion preference, hover effects gated to pointer devices, semantic focus and keyboard controls implemented.
- REVIEW — Full WCAG audit and measured Lighthouse 95+ scores have not been performed; no score is claimed. Typography and main text/background combinations were reviewed for legibility.
- REVIEW — Real project details, credentials and approved portrait remain explicitly bracketed placeholders. See README for full confirmation list.

This is a built and tested repository, not a claim of deployment to a live Vercel domain.
