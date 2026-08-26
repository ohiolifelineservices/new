// Serves city-level content for markets where /metronet/[slug] is the
// historically winning canonical URL per GSC evidence. Non-canonical slugs
// are redirected by middleware before they reach this component.

import { METRONET_CANONICAL_SLUGS, getCanonicalCityPath } from "@/lib/canonical-map"
import { slugToCity, getStateForSlug, getStateForCity, getStateAbbreviation, getAllCitySlugs } from "@/lib/city-data"

export { default } from "@/app/city/[slug]/page"

export async function generateStaticParams() {
  return getAllCitySlugs()
    .filter((slug) => METRONET_CANONICAL_SLUGS.has(slug))
    .map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const city = slugToCity(slug)
  const state = getStateForSlug(slug) || getStateForCity(city)
  if (!state) return {}
  const abbr = getStateAbbreviation(state)
  const canonical = getCanonicalCityPath(slug)
  return {
    title: `Metronet Fiber Internet in ${city}, ${abbr} — Plans, Pricing & Availability`,
    description: `Shop Metronet fiber internet in ${city}, ${abbr}. Compare 500 Mbps ($60/mo), 1 Gig ($70/mo), and 2 Gig ($80/mo) plans, check availability at your address, and order online through Metroconet.`,
    alternates: { canonical: `https://metroconet.com${canonical}` },
  }
}
