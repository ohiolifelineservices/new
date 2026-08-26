import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PlanCards } from "@/components/plan-cards"
import { AvailabilityWidget } from "@/components/availability-widget"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PromoBadge } from "@/components/promo-badge"
import {
  getAllStateSlugs, slugToState, getCitiesForState, cityToSlug,
  getStateAbbreviation, getStateContent, PRIORITY_MARKET_SLUGS,
} from "@/lib/city-data"
import { breadcrumbSchema, localServiceSchema } from "@/lib/schema-data"
import { ArrowRight } from "lucide-react"

export async function generateStaticParams() {
  return getAllStateSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const state = slugToState(params.slug)
  const cities = getCitiesForState(state)
  if (cities.length === 0) return {}
  return {
    title: `Metronet Fiber Internet in ${state} | Service Areas & Plans`,
    description: `Metronet fiber internet is available in ${cities.length} ${state} markets. Compare plans, pricing, and current promotions, and find your city.`,
    alternates: { canonical: `https://metroconet.com/metronet-state/${params.slug}` },
  }
}

export default function StatePage({ params }: { params: { slug: string } }) {
  const state = slugToState(params.slug)
  const cities = getCitiesForState(state)
  if (cities.length === 0) return notFound()

  const content = getStateContent(state)
  const priorityFirst = cities
    .filter((c) => PRIORITY_MARKET_SLUGS.includes(cityToSlug(c)))
    .concat(cities)
    .filter((v, i, a) => a.indexOf(v) === i)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "https://metroconet.com" },
        { name: "Service Areas", url: "https://metroconet.com/metronet-state" },
        { name: state, url: `https://metroconet.com/metronet-state/${params.slug}` },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema(state, "State")) }} />

      <section className="pt-16 pb-10" data-testid="state-hero">
        <div className="container">
          <p className="text-white/40 text-sm mb-4">
            <Link href="/metronet-state" className="hover:text-white">Service Areas</Link> / {state}
          </p>
          <PromoBadge className="mb-5" />
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white max-w-2xl leading-[1.05]" data-testid="state-heading">
            Metronet Fiber Internet in {state}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mt-5">{content.description}</p>
          <div className="max-w-lg mt-8">
            <AvailabilityWidget />
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5" data-testid="state-plans-section">
        <div className="container">
          <ScrollReveal className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">Plans available across {state}</h2>
          </ScrollReveal>
          <PlanCards compact />
        </div>
      </section>

      <section className="py-16 border-t border-white/5" data-testid="state-markets-section">
        <div className="container">
          <ScrollReveal className="mb-8">
            <h2 className="text-2xl font-display font-extrabold text-white">
              {state} service areas <span className="text-white/40 text-base font-normal">({cities.length} {cities.length === 1 ? "market" : "markets"})</span>
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3" data-testid="state-city-list">
            {priorityFirst.map((c) => (
              <Link key={c} href={`/city/${cityToSlug(c)}`} data-testid={`state-city-link-${cityToSlug(c)}`} className="px-5 py-2.5 rounded-full border border-white/10 text-white/70 text-sm hover:border-mc-purple hover:text-white transition-colors">
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5 text-center" data-testid="state-cta">
        <div className="container">
          <Link href="/plans-pricing" className="inline-flex items-center gap-2 bg-mc-purple text-white font-display font-bold px-8 py-4 rounded-full hover:bg-mc-teal transition-colors" data-testid="state-bottom-cta">
            View Plans &amp; Order Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
