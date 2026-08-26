import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PlanCards } from "@/components/plan-cards"
import { AvailabilityWidget } from "@/components/availability-widget"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PromoBadge } from "@/components/promo-badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  getAllCitySlugs, slugToCity, getStateForCity, getCitiesForState,
  cityToSlug, getStateAbbreviation, stateToSlug, PRIORITY_MARKET_SLUGS,
} from "@/lib/city-data"
import { breadcrumbSchema, faqSchema, localServiceSchema } from "@/lib/schema-data"
import { ArrowRight } from "lucide-react"

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const city = slugToCity(params.slug)
  const state = getStateForCity(city)
  if (!state) return {}
  const abbr = getStateAbbreviation(state)
  return {
    title: `Metronet Fiber Internet in ${city}, ${abbr} | Plans & Availability`,
    description: `Shop Metronet fiber internet plans in ${city}, ${abbr}. Compare 500 Mbps, 1 Gig, and 2 Gig pricing, check availability, and order online through Metroconet.`,
    alternates: { canonical: `https://metroconet.com/city/${params.slug}` },
  }
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = slugToCity(params.slug)
  const state = getStateForCity(city)
  if (!state) return notFound()

  const abbr = getStateAbbreviation(state)
  const siblingCities = getCitiesForState(state).filter((c) => c !== city)
  const nearby = siblingCities
    .filter((c) => PRIORITY_MARKET_SLUGS.includes(cityToSlug(c)))
    .concat(siblingCities)
    .filter((v, i, a) => a.indexOf(v) === i)
    .slice(0, 8)

  const faqs = [
    { question: `Is Metronet fiber available throughout ${city}?`, answer: `Coverage can vary by street and address within ${city}. Enter your zip code using the availability checker to confirm service at your specific address.` },
    { question: `What plans are available in ${city}?`, answer: `Metroconet offers Metronet's current lineup in ${city}: 500 Mbps, 1 Gig, and 2 Gig, all with symmetrical speeds, no data caps, and no annual contract.` },
    { question: `How do I order Metronet service in ${city}?`, answer: `Choose a plan above and click Order Now. You'll enter your address and pick a preferred install date and time — a confirmation follows by email.` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "https://metroconet.com" },
        { name: state, url: `https://metroconet.com/metronet-state/${stateToSlug(state)}` },
        { name: city, url: `https://metroconet.com/city/${params.slug}` },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs.map((f) => ({ question: f.question, answer: f.answer })))) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema(`${city}, ${abbr}`, "City")) }} />

      <section className="pt-16 pb-10" data-testid="city-hero">
        <div className="container">
          <p className="text-white/40 text-sm mb-4" data-testid="city-breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href={`/metronet-state/${stateToSlug(state)}`} className="hover:text-white">{state}</Link> / {city}
          </p>
          <PromoBadge className="mb-5" />
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white max-w-2xl leading-[1.05]" data-testid="city-heading">
            Metronet Fiber Internet in {city}, {abbr}
          </h1>
          <p className="text-white/60 text-lg max-w-xl mt-5">
            Compare current Metronet plans and pricing for {city}, then order online in minutes.
          </p>
          <div className="max-w-lg mt-8">
            <AvailabilityWidget />
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5" data-testid="city-plans-section">
        <div className="container">
          <ScrollReveal className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">Plans available in {city}</h2>
          </ScrollReveal>
          <PlanCards />
        </div>
      </section>

      <section className="py-16 border-t border-white/5" data-testid="city-fiber-benefits">
        <div className="container max-w-2xl">
          <ScrollReveal>
            <h2 className="text-2xl font-display font-extrabold text-white mb-4">Fiber internet for {city} households</h2>
            <p className="text-white/60 leading-relaxed">
              Metronet's fiber-optic network delivers symmetrical upload and download speeds — a meaningful upgrade over
              cable for households in {city} that stream, work remotely, or run multiple connected devices at once.
              Every plan includes unlimited data and requires no annual contract.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="py-16 border-t border-white/5" data-testid="city-nearby-markets">
          <div className="container">
            <ScrollReveal className="mb-6">
              <h2 className="text-xl font-display font-extrabold text-white">Nearby {state} markets</h2>
            </ScrollReveal>
            <div className="flex flex-wrap gap-3">
              {nearby.map((c) => (
                <Link key={c} href={`/city/${cityToSlug(c)}`} data-testid={`nearby-city-${cityToSlug(c)}`} className="px-5 py-2.5 rounded-full border border-white/10 text-white/70 text-sm hover:border-mc-purple hover:text-white transition-colors">
                  {c}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 border-t border-white/5" data-testid="city-faq-section">
        <div className="container max-w-2xl">
          <ScrollReveal className="mb-8">
            <h2 className="text-2xl font-display font-extrabold text-white">Frequently asked questions</h2>
          </ScrollReveal>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10" data-testid={`city-faq-item-${i}`}>
                <AccordionTrigger className="text-left text-white font-display font-semibold hover:text-mc-purple">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-white/60">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Link href="/plans-pricing" data-testid="city-bottom-cta" className="inline-flex items-center gap-2 bg-mc-purple text-white font-display font-bold px-8 py-4 rounded-full mt-10 hover:bg-mc-teal transition-colors">
            View Plans &amp; Order Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
