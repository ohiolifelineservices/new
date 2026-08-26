import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { AvailabilityWidget } from "@/components/availability-widget"
import { PlanCards } from "@/components/plan-cards"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionHeading } from "@/components/section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { breadcrumbSchema, faqSchema } from "@/lib/schema-data"
import { states, stateToSlug, cities, getCitiesForState } from "@/lib/city-data"
import { IMAGES } from "@/lib/media"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Check Metronet Fiber Availability by Zip Code & Address",
  description:
    "Check Metronet fiber internet availability by zip code. See if 500 Mbps, 1 Gig, or 2 Gig fiber is available at your address, compare pricing, and order online through Metroconet.",
  alternates: { canonical: "https://metroconet.com/check-availability" },
}

const FAQS = [
  { question: "How do I check if Metronet is available at my address?", answer: "Enter your zip code in the checker on this page. Because fiber is built street by street, final serviceability is confirmed against your exact street address during the ordering process." },
  { question: "My neighbor has Metronet but the checker says my area isn't served. Why?", answer: "Fiber construction happens block by block, so two addresses on the same street can have different answers. If your zip is in an active market but your address isn't serviceable yet, joining the waitlist is the fastest way to hear when it changes." },
  { question: "What happens if Metronet isn't available where I live?", answer: "You can join the waitlist with your address details. There's no cost and no obligation — it simply flags your area." },
  { question: "Does checking availability commit me to anything?", answer: "No. Checking availability is free and does not start an order." },
  { question: "How long does installation take once I order?", answer: "You choose a preferred install date and time window during ordering, and a confirmation follows by email." },
]

export default function CheckAvailabilityPage() {
  const stateEntries = Object.entries(states)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://metroconet.com" }, { name: "Check Availability", url: "https://metroconet.com/check-availability" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      <section className="relative pt-20 pb-20 overflow-hidden" data-testid="availability-hero">
        <div className="absolute inset-0 -z-10 opacity-25">
          <Image src={IMAGES.cityNetwork} alt="" fill sizes="100vw" priority className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/90 to-black" />
        </div>
        <div className="bloom bloom-teal w-[520px] h-[520px] -top-40 right-0 opacity-50" aria-hidden="true" />
        <div className="container relative max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-display font-extrabold text-white leading-[1.04]">
            Is <span className="text-gradient-purple">Metronet fiber</span> available at your address?
          </h1>
          <p className="text-white/65 text-base sm:text-lg mt-6 mb-10 leading-relaxed">
            Enter your zip code to check coverage in your area. If fiber is available, you can move straight into plans
            and ordering — and if it isn&apos;t live yet, you can join the waitlist.
          </p>
          <div className="max-w-xl mx-auto text-left">
            <AvailabilityWidget />
          </div>
          <p className="text-white/35 text-xs mt-6">
            Coverage is built street by street. Final serviceability is confirmed against your exact address during ordering.
          </p>
        </div>
      </section>

      <section className="py-24 border-t border-white/5" data-testid="availability-plans-preview">
        <div className="container">
          <SectionHeading
            eyebrow="Already know it's available?"
            accent="green"
            center
            className="mb-14"
            title="Skip ahead and pick your plan"
            copy="All three Metronet speeds include symmetrical upload, unlimited data, and no annual contract."
          />
          <PlanCards compact />
        </div>
      </section>

      <section className="py-24 border-t border-white/5" data-testid="availability-states-section">
        <div className="container">
          <SectionHeading
            eyebrow="Browse by state"
            accent="teal"
            className="mb-12"
            title={`Metronet service areas across ${stateEntries.length} states`}
            copy={`Metronet fiber is live in ${cities.length}+ markets. Open your state to find your city and check local plans.`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stateEntries.map(([state], i) => (
              <ScrollReveal key={state} delay={i * 0.03}>
                <Link
                  href={`/metronet-state/${stateToSlug(state)}`}
                  data-testid={`availability-state-link-${stateToSlug(state)}`}
                  className="group glass-card glass-card-hover rounded-2xl px-6 py-5 flex items-center justify-between"
                >
                  <span>
                    <span className="block text-white font-display font-bold">{state}</span>
                    <span className="block text-white/40 text-xs mt-0.5">{getCitiesForState(state).length} markets</span>
                  </span>
                  <ArrowRight size={18} className="text-white/35 group-hover:text-mc-purple group-hover:translate-x-1 transition-all" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5" data-testid="availability-content-section">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-7">
            <ScrollReveal className="prose-mc">
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-[1.1] mb-7">
                How Metronet fiber availability actually works
              </h2>
              <p>
                Fiber internet coverage is not a switch that flips on for a whole city at once. Metronet builds its
                network out neighborhood by neighborhood, and sometimes street by street within a neighborhood. That is
                why a zip code check tells you whether your <em>area</em> is inside a served market, while your exact
                street address determines whether service can be installed today.
              </p>
              <p>
                Practically, there are three outcomes when you check. Your address is serviceable and you can order
                immediately. Your area is an active Metronet market but construction hasn&apos;t reached your block —
                joining the waitlist is the right move. Or Metronet hasn&apos;t built in your area at all yet, in which
                case the waitlist still records the demand.
              </p>

              <h3>Why address-level confirmation matters</h3>
              <p>
                An install requires a physical fiber drop from the street to the home. Multi-dwelling units,
                new-construction subdivisions, and rural edges of a market are the most common cases where a zip code
                looks covered but an individual address needs verification. Confirming at the address level up front
                avoids a cancelled install date later.
              </p>

              <h3>What to have ready when you order</h3>
              <ul>
                <li>Your full service address, including unit or apartment number</li>
                <li>A contact email and phone number for install confirmation</li>
                <li>A preferred install date and time window</li>
                <li>The speed you want — see <Link href="/plans-pricing">plans and pricing</Link></li>
              </ul>

              <h3>If Metronet isn&apos;t available yet</h3>
              <p>
                Join the waitlist. It costs nothing, does not create an order, and is the most direct way to be
                contacted when fiber reaches your area. In the meantime, you can browse{" "}
                <Link href="/metronet-state">service areas by state</Link> to see how close the nearest live market is.
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.08}>
              <h2 className="text-2xl font-display font-extrabold text-white mb-5">Availability FAQs</h2>
              <Accordion type="single" collapsible data-testid="availability-faq-accordion">
                {FAQS.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-white/10" data-testid={`availability-faq-item-${i}`}>
                    <AccordionTrigger className="text-left text-white font-display font-semibold hover:text-mc-purple text-sm py-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-white/60 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
