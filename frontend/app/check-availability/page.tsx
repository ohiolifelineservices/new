import type { Metadata } from "next"
import Link from "next/link"
import { AvailabilityWidget } from "@/components/availability-widget"
import { PlanCards } from "@/components/plan-cards"
import { ScrollReveal } from "@/components/scroll-reveal"
import { breadcrumbSchema } from "@/lib/schema-data"
import { states, getAllStateSlugs, stateToSlug } from "@/lib/city-data"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Check Metronet Fiber Availability by Zip Code",
  description:
    "Enter your zip code to check Metronet fiber internet availability. See current plans and pricing and order online if fiber is available at your address.",
  alternates: { canonical: "https://metroconet.com/check-availability" },
}

export default function CheckAvailabilityPage() {
  const stateNames = Object.keys(states)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://metroconet.com" }, { name: "Check Availability", url: "https://metroconet.com/check-availability" }])) }} />

      <section className="pt-16 pb-16" data-testid="availability-hero">
        <div className="container max-w-2xl text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white leading-[1.05]">
            Is Metronet fiber available at your address?
          </h1>
          <p className="text-white/60 text-lg mt-5 mb-10">
            Enter your zip code below. If fiber is available, you can move straight into plans and ordering.
          </p>
          <AvailabilityWidget />
        </div>
      </section>

      <section className="py-16 border-t border-white/5" data-testid="availability-plans-preview">
        <div className="container">
          <ScrollReveal className="max-w-2xl mb-10 text-center mx-auto">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">Already know it's available?</h2>
            <p className="text-white/60 mt-3">Skip ahead and pick your plan now.</p>
          </ScrollReveal>
          <PlanCards compact />
        </div>
      </section>

      <section className="py-16 border-t border-white/5" data-testid="availability-states-section">
        <div className="container">
          <ScrollReveal className="mb-8">
            <h2 className="text-2xl font-display font-extrabold text-white">Browse service areas by state</h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {stateNames.map((state) => (
              <Link
                key={state}
                href={`/metronet-state/${stateToSlug(state)}`}
                data-testid={`availability-state-link-${stateToSlug(state)}`}
                className="px-5 py-2.5 rounded-full border border-white/10 text-white/70 text-sm hover:border-mc-purple hover:text-white transition-colors flex items-center gap-2"
              >
                {state} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
