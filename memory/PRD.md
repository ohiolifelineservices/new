# Metroconet.com Rebuild — PRD

## Original Problem Statement
Rebuild the production website Metroconet.com (independent authorized retailer for NEW Metronet
fiber internet service) from the supplied source archive, combining: conversion optimization,
SEO recovery (site suffered a ~96% impression / ~90% click collapse around the Aug 2026 Google
spam update), content-quality rebuild, technical SEO, visual redesign (premium dark theme, brand
palette), and production engineering. Primary business outcome: NEW SERVICE ORDERS. Full detailed
spec covered plans/pricing, First Month Free promo, ZIP tool, order form preservation, geographic
URL history (/city/ vs /metronet/ duplication), removal of fabricated SEO content, GA4 preservation,
and Google Apps Script order/lead submission preservation.

## Evidence-Based Findings (from supplied GSC data + source audit)
- Pre-crash: ~9,000 impr/day, ~125-130 clicks/day. GSC Pages export confirmed `/city/[slug]` and
  `/metronet/[slug]` are FULLY DUPLICATED URL families for the same ~250 markets — city family
  had ~5.5x more historical clicks than the metronet family in the sampled window.
  → Root SEO risk: sitewide duplicate content across ~500 near-identical pages.
- `middleware.ts` in the original repo force-redirected a hardcoded list of 123 markets'
  `/city/` and `/metronet/` URLs to generic `/metronet-state/[state]` hub pages — destroying
  specific high-intent market URLs (none of which had residual clicks in the crash window,
  consistent with equity already lost). This mismatched source/destination intent exactly as
  described in the "redirect evidence" brief.
- `lib/city-data.ts`'s `getStateData()` used `Math.random()` to fabricate fiber-mile counts,
  invented launch years, fake testimonials, and fake community-initiative copy per state —
  textbook programmatic-SEO spam pattern, a strong candidate root cause for the Aug 2026
  spam-update impact.
- `availability-checker.tsx` imported a real `serviceableZipCodes` list but never used it —
  always returned "available" regardless of ZIP (dead logic, fixed to use the real list).

## Architecture Decision
Rebuilt as **Next.js 15 (App Router) + TypeScript + Tailwind**, replacing the CRA/FastAPI/Mongo
starter template. Rationale: this is a content/SEO-critical marketing+conversion site needing
per-page metadata, canonical tags, sitemap.ts, robots.ts, redirects, and SSR — Next.js is what the
original site already used and is materially better suited than a client-only SPA. There is
**no backend/DB usage** — order + lead submission POST directly from the browser to the existing
Google Apps Script endpoint (preserved exactly, no proxy). `frontend` supervisor service now runs
`next dev -H 0.0.0.0 -p 3000`.

## What Was Implemented (as of Aug 26, 2026)
- **Commercial data centralized** (`lib/commercial-data.ts`): 500 Mbps $60 / 1 Gig $70 (most
  popular) / 2 Gig $80, AutoPay pricing, First Month Free promo — single source of truth consumed
  everywhere (no hardcoded pricing across pages).
- **Order form** (`order-form.tsx`, `order-form-context.tsx`): preserved exact payload shape and
  Google Apps Script endpoint; UI redesigned; plan context carried into the form when opened from
  any "Order Now"/"Choose Plan" button sitewide; phone-service checkbox removed from UI (discontinued)
  but `addPhoneService` field still sent as "No" to avoid breaking the receiving payload contract.
- **ZIP availability widget** (`availability-widget.tsx`): real serviceable-ZIP check (bug fixed),
  "available" → plans CTA; "not available" → waitlist lead-capture form posting to the same endpoint
  with `formType: noServiceAvailability`. Never gates the primary shopping funnel.
- **Pages built**: Home, Plans & Pricing, Promotions, Why Metronet (5 numbered chapters), Check
  Availability, Support, Contact Us, Careers, Privacy Policy, Terms, `/metronet-state` index +
  14 state hub pages, `/city/[slug]` for all ~232 real markets — all with direct Order Now / plan
  CTAs, no fabricated stats/testimonials/reviews anywhere.
- **SEO/technical**: `middleware.ts` now 301s `/metronet/[slug]` → `/city/[slug]` (consolidates the
  duplicate-content family into the historically stronger, specific-market URL rather than a
  generic state page); discontinued product URLs (`/5-gig`, `/home-phone`) redirect to
  `/plans-pricing`; `sitemap.ts` covers all static + 14 state + 232 city pages; `robots.ts`;
  per-page metadata/canonicals; Organization/WebSite/Product/BreadcrumbList/FAQPage/Service JSON-LD
  with no fabricated reviews/ratings/addresses.
- **Design**: premium dark theme on exact brand palette (Black/Purple/Green/White primary, Navy/Teal/
  Yellow/Gray secondary), Outfit (display) + Manrope (body) fonts, marquee strip, sticky mobile CTA
  bar, plan cards as the primary conversion component sitewide.
- **Reliability fix**: removed framer-motion/`prefers-reduced-motion` mount-animation logic that could
  leave hero/heading content stuck at partial opacity in some rendering contexts — all critical
  content now renders immediately and fully visible (no JS/animation-gated visibility risk).
- **Preserved**: GA4 (G-07QK0ZSDWH), Google Apps Script order/lead endpoint and payload contract.
- Production build verified (`yarn build`): 261 pages, no type/compile errors.
- Tested by testing_agent (iteration 1): ~95% pass; fixed waitlist-modal clipping + Esc-to-close.

## User Personas
- **Ready-to-buy shopper** (highest priority): wants plan + price + Order Now within 1-2 clicks.
- **Comparison shopper**: wants 500 Mbps vs 1 Gig vs 2 Gig guidance before choosing.
- **Local/geo searcher**: arrives via city-specific query, wants local availability + fast path to order.
- **Existing Metronet customer** (out of scope for sales): needs redirect to official support.

## Backlog / Next Tasks (P0/P1/P2)
- P0: None outstanding — core funnel (home → plans → order, ZIP → plans → order, city pages → order)
  is functional end-to-end per testing.
- P1: Expand city-page nearby-market linking depth; consider adding a lightweight internal search/
  filter on `/metronet-state` for very large states (Minnesota has 60+ markets).
- P1: Add custom AI-generated hero/lifestyle imagery (currently curated stock) if the user wants a
  fully bespoke visual identity beyond stock photography.
- P2: Add Core Web Vitals monitoring / Lighthouse pass once deployed to a real domain.
- P2: Optional: server-side zip→city redirect suggestions ("Did you mean /city/lexington?") for
  check-availability zip misses.

---

## Session Update — 26 Aug 2026 (Design + Content Rebuild)

### Root cause of user's "this looks terrible" report
The preview was serving an **unstyled HTTP 404** for every route. The previous session deleted
`/app/frontend/.next` while the Next dev server was still running (to clear a lint-blocker on
generated artifacts), which corrupted the running dev server's state. The user never saw the
actual design. Fixed by: stop frontend -> `rm -rf .next` -> start frontend.
**Never delete `.next` while the dev server is running.** Lint exclusion is now handled by
`/app/.oxlintrc.json` (ignores `**/.next/**`) plus `.next/` in `/app/.gitignore`.

### Brand assets recovered from the original site
Downloaded from the original repo's Vercel blob URLs into `/app/frontend/public/`:
- `metronet-reseller-logo.png` — the official **"metronet Authorized Reseller"** wordmark
- `og-image.png`, `family-hero.png` (original hero photo, kept as a spare)
Placement matches the ORIGINAL site: reseller logo is the PRIMARY logo in the header and footer.
It also appears in the order-form modal header, the home trust bar, and the 404 page.

### Custom imagery generated (Gemini 3.1 Flash Image), stored in `/app/frontend/public/images/`
- `hero-family.jpg` — new sunlit family living-room hero (same spirit as the original, new shot)
- `fiber-abstract.jpg` — purple/green fiber-optic light art
- `install-tech.jpg` — fiber installation technician
- `city-network.jpg` — dark city network topology art

### Design system implemented (exact user palette)
Black #000000 base, Purple #964DFF primary, Green #00C800 (pricing/positive), White, Gray #6E6E70,
Navy #212145 (panels), Teal #00A89C, Yellow #FFFF00 (promo). Fonts: Outfit (display) + Manrope (body).
New CSS utilities in `app/globals.css`: `.glass-card`, `.glass-card-hover`, `.glass-panel`,
`.bloom` light blooms, `.tech-grid`, `.btn-shine`, `.text-gradient-purple`, `.text-gradient-green`,
`.prose-mc` (long-form editorial content), film-grain overlay.

### Components added / rebuilt
- `components/navigation.tsx` — reseller logo primary + Metroconet wordmark, 6 nav links,
  gradient active underline, scroll-aware background, purple CTA
- `components/footer.tsx` — reseller logo, social links, all 14 state links, disclaimer
- `components/home/hero.tsx` — full-bleed family hero, kinetic 3-line headline, promo + authorized
  reseller pills, benefit checklist, ZIP widget
- `components/home/trust-bar.tsx` (new), `components/home/how-it-works.tsx` (new),
  `components/home/seo-content.tsx` (new long-form buyer's guide), `components/section-heading.tsx` (new)
- `components/plan-cards.tsx`, `home/fiber-comparison.tsx`, `home/lifestyle-grid.tsx`,
  `home/service-areas-teaser.tsx`, `home/faq-section.tsx`, `marquee-strip.tsx` — all restyled
- `components/scroll-reveal.tsx` — rewritten: SSR-visible, IntersectionObserver reveal on mount,
  **2s safety timer force-reveals** so content can never stay invisible (fixes the old regression)

### Keyword-rich content expansion
- Home: buyer's-guide long-form section + 12-question FAQ (was 6) with FAQPage schema + Product schema
- `/plans-pricing`: full spec comparison table, 6 fit cards, long-form guide, 10-question FAQ
- `/promotions`: offer ticket card, per-plan coverage, long-form "deals without the asterisk maze", 6 FAQs
- `/check-availability`: how-availability-works long-form, all 14 state cards, 5 FAQs
- `/why-metronet`: 6 chapters (was 5), all with new imagery
- `/city/[slug]` (232 pages): new `lib/city-content.ts` provides **deterministic per-city variation**
  (4 intro variants, 4 angle variants, 3 availability variants) + "at a glance" sidebar + 7 FAQs
  + nearby-market internal links. No fabricated local stats.
- `/metronet-state/[slug]` (15 pages): long-form state guide, top-market cards, full chip list, 5 FAQs
- `/metronet-state`: coverage index with popular-markets block + explainer
- `/support`, `/contact-us`, `/careers`, `/not-found`: rebuilt with real content + schema

### Next 15 fix
`city/[slug]` and `metronet-state/[slug]` now `await params` in both `generateMetadata` and the page
component (was throwing sync-dynamic-api errors on every request).

### PRESERVED UNCHANGED (hard user constraint)
Order form logic (`components/order-form.tsx`) and ZIP tool logic (`components/availability-widget.tsx`):
endpoint, payload shape, `mode: "no-cors"`, opaque-response success handling, validation rules,
serviceable ZIP set, GA4 events. Only container/input/button CSS classes and a logo in the modal
header were touched.

### Verification (testing agent, `/app/test_reports/iteration_2.json`) — 100% frontend pass
- All 16 routes 200; 404 route 404; `/metronet/indianapolis` and `/5-gig` still 301
- Reseller logo renders in header, footer, order modal, 404
- ZIP tool: 46240 -> available modal; 90210 -> waitlist -> thank-you confirmed
- ZIP validation (empty, 3-digit) intact
- Order form: opens from nav + plan card with correct plan/price, full submit -> confirmation
- Order validation blocks bad zip + bad phone
- Scroll-reveal regression: no hidden sections on /, /plans-pricing, /why-metronet, /city/indianapolis
- Mobile 390x844: waitlist submit reachable (iteration_1 clipping bug FIXED), no horizontal overflow
- No console errors or page errors

### Known / deferred
- Waitlist submit shows "Submitting..." ~13s because it awaits the opaque Apps Script response.
  An optimistic thank-you would improve perceived speed, but was NOT changed to respect the
  "don't change ZIP tool functionality" constraint. Needs user sign-off.
- GA4 events and the live Apps Script endpoint are wired but only verified in preview, not against
  a real production domain / GA4 debug view.
- No production deployment or domain cutover has been performed.

### Backlog (P0 -> P2)
- P0: user visual sign-off on the new design
- P1: optimistic waitlist confirmation (needs approval); hero image `priority` LCP tuning;
  compress the 4 generated JPGs (~0.9 MB each) to WebP
- P1: blog/resource hub for informational fiber queries (currently zero informational content depth
  outside `/why-metronet`)
- P2: comparison landing pages (Metronet vs Xfinity/Spectrum/AT&T) for high-intent commercial queries
- P2: live GSC reconnection + indexing monitoring after deployment
