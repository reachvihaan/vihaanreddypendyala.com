# Validation

- PASS: `npm ci` with the specified dependency versions.
- PASS: `npm run build`; all pages statically prerendered.
- PASS: `npm run typecheck`.
- PASS: 14 generated images bundled at the requested paths; 1200×630 PNG social image; SVG wordmark, stacked lockup and favicon.
- PASS: source review for client/server boundaries, local imports, URL-encoded WhatsApp messages, required-field validation, honeypot, focus on validation errors, no invented business results.
- PASS: responsive media queries, reduced-motion rules and readable server-rendered content implemented.
- NOT VERIFIED IN BROWSER: responsive widths 360–1536, keyboard flows, interactive controls, visual contrast and no-JavaScript appearance. Playwright browser installation failed because its downloaded archive was invalid. A successful build is not a substitute for these checks.
- NOT MEASURED: Lighthouse 95+, mobile frame rate, full WCAG AA audit.
- NOT DEPLOYED: Vercel production. Import the repository to deploy.

Unknown business facts are marked on pages and listed in README.md. Products/books are enquiry catalogues pending confirmed inventory and pricing. No fabricated testimonials or success metrics.

- PASS: parsed generated HTML on all seven pages for one h1, canonical URL, image paths/alt attributes, and correct contact links. Verified all 14 image files and OG dimensions. Executed enquiry-helper test for real answers, URL encoding and omission of empty values.
