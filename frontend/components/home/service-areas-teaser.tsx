"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PRIORITY_MARKET_SLUGS, slugToCity } from "@/lib/city-data"

export function ServiceAreasTeaser() {
  const markets = PRIORITY_MARKET_SLUGS.slice(0, 12)

  return (
    <section className="py-20 sm:py-28 border-t border-white/5" data-testid="service-areas-teaser">
      <div className="container">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-mc-teal font-display font-bold text-sm uppercase tracking-widest mb-3">Where we serve</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">Popular Metronet markets</h2>
          </div>
          <Link href="/check-availability" className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-display font-semibold" data-testid="service-areas-see-all">
            Check your address <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
        <ScrollReveal>
          <div className="flex flex-wrap gap-3" data-testid="service-areas-market-list">
            {markets.map((slug) => (
              <Link
                key={slug}
                href={`/city/${slug}`}
                data-testid={`market-chip-${slug}`}
                className="px-5 py-2.5 rounded-full border border-white/10 text-white/70 text-sm hover:border-mc-purple hover:text-white transition-colors"
              >
                {slugToCity(slug)}
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
