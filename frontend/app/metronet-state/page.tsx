import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { states, stateToSlug, getStateAbbreviation } from "@/lib/city-data"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Metronet Service Areas by State",
  description: "Find Metronet fiber internet service areas by state. Browse markets and check availability at your address.",
  alternates: { canonical: "https://metroconet.com/metronet-state" },
}

export default function ServiceAreasIndexPage() {
  const entries = Object.entries(states)

  return (
    <section className="pt-16 pb-24" data-testid="service-areas-index">
      <div className="container">
        <ScrollReveal className="max-w-2xl mb-14">
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white leading-[1.05]">Metronet service areas</h1>
          <p className="text-white/60 text-lg mt-5">Metronet fiber internet is available across {entries.length} states. Find your state below.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {entries.map(([state, cities]) => (
            <ScrollReveal key={state}>
              <Link
                href={`/metronet-state/${stateToSlug(state)}`}
                data-testid={`state-index-link-${stateToSlug(state)}`}
                className="group flex items-center justify-between bg-mc-navy/30 border border-white/10 rounded-2xl p-6 hover:border-mc-purple transition-colors"
              >
                <div>
                  <h2 className="text-white font-display font-bold text-lg">{state}</h2>
                  <p className="text-white/40 text-sm">{cities.length} {cities.length === 1 ? "market" : "markets"} &bull; {getStateAbbreviation(state)}</p>
                </div>
                <ArrowRight className="text-white/40 group-hover:text-mc-purple group-hover:translate-x-1 transition-all" size={20} />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
