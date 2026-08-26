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
