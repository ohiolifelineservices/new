import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PRIORITY_MARKET_SLUGS, slugToCity, cities, states } from "@/lib/city-data"
import { IMAGES } from "@/lib/media"

export function ServiceAreasTeaser() {
  const markets = PRIORITY_MARKET_SLUGS.slice(0, 24)
  const stateCount = Object.keys(states).length

  return (
    <section className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden" data-testid="service-areas-teaser">
      <div className="absolute inset-0 -z-10 opacity-30">
        <Image src={IMAGES.cityNetwork} alt="" fill sizes="100vw" className="object-cover" loading="lazy" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="container relative">
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-mc-teal font-display font-bold text-xs uppercase tracking-[0.2em] mb-4">Where Metronet serves</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold text-white leading-[1.08]">
              Metronet fiber internet in {cities.length}+ markets across {stateCount} states
            </h2>
            <p className="text-white/60 leading-relaxed mt-5">
              Coverage is built street by street, so availability can differ between two addresses in the same town.
              Pick your market below or check your exact address in seconds.
            </p>
          </div>
          <Link href="/metronet-state" className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-display font-semibold shrink-0" data-testid="service-areas-see-all">
            Browse all service areas <ArrowRight size={16} />
          </Link>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap gap-2.5" data-testid="service-areas-market-list">
            {markets.map((slug) => (
              <Link
                key={slug}
                href={`/city/${slug}`}
                data-testid={`market-chip-${slug}`}
                className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-white/70 text-sm hover:border-mc-purple hover:bg-mc-purple/10 hover:text-white transition-colors"
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
