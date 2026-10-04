# Vihaan AI Verse

A responsive Next.js 16, React 19, TypeScript and Tailwind v4 website with Motion, Lenis, Space Grotesk and Sora. Seven main pages: Home, Learn AI, Solutions, Products, Books & Insights, About & Innovation, and Connect. Legacy Focus, Portfolio and Insights URLs redirect to their new equivalents.

## Preview locally

Use Node 20.9+:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build` followed by `npm start`. `npm run typecheck` checks TypeScript. No API keys or environment variables are required; Google Fonts need internet during the build.

## Deploy on Vercel

1. In Vercel, select **Add New → Project**.
2. Import `reachvihaan/vihaanreddypendyala.com` from GitHub.
3. Keep the Next.js defaults and click **Deploy**.
4. Optionally set `NEXT_PUBLIC_SITE_URL` to your final HTTPS domain and redeploy.
5. Add your domain under **Settings → Domains** and follow the DNS instructions.

Default canonical domain: https://vihaanreddypendyala.com. A GitHub push does not create a Vercel project; deployment has not been performed in this task.

## Edit content

- `lib/content.ts`: brand/contact information, navigation, FAQs, starter articles and illustrative project data.
- `components/Explore.tsx`: learning paths, skill list and illustrative lab concepts.
- `app/*/page.tsx`: page-specific products, books, services and copy.
- `app/globals.css`: brand tokens, responsive layouts and effects.
- `lib/whatsapp.ts`: safe URL encoding and enquiry message builder.
- `public/logo.svg`, `public/logo-stacked.svg`, `app/icon.svg`: orbital SVG identity.
- `public/images/`: all 14 newly generated images plus retained original repository artwork. The prompt set is in `IMAGES.md`.

The site supports persona selection, skill selection, lab status filters, searchable/filterable insights, a project carousel with native reading/image dialogs, FAQs, mobile navigation and validated WhatsApp enquiries. The visitor reviews and sends the WhatsApp message themselves. This website does not collect payments, store contact answers or subscribe visitors to a mailing list.

## Confirm before launch

- Country code +91 and contact hours 9 AM–9 PM IST; number 9014885994 and email VihaanAIVerse@gmail.com are from the brief.
- Online-first operation, physical address if applicable, final domain and ownership of @reachvihaan social accounts.
- Founding year/story, milestones and any credentials.
- Course curricula, duration, mode, schedules and prices.
- Product contents, availability, prices, payment/delivery arrangements and downloadable files.
- Book titles, previews, release dates, formats and prices.
- Approved AI platforms for the tools directory.
- Real lab projects and their statuses: current entries are explicitly illustrative.
- Verified case studies, results, testimonials and permission to publish them.

No unverified awards, clients, reviews or impact statistics are presented as real. Google Business Profile registration needs the owner's business details and account and has not been performed.

## Accessibility and verification

Semantic landmarks, skip link, visible focus, labelled forms, native dialogs/details, reduced-motion treatment and server-rendered content. See `QA.md` for actual checks and limitations. No Lighthouse score or comprehensive browser accessibility audit is claimed.
