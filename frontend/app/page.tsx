import type { Metadata } from "next"
import Link from "next/link"
import { Hero } from "@/components/home/hero"
import { MarqueeStrip } from "@/components/marquee-strip"
import { PlanCards } from "@/components/plan-cards"
import { FiberComparison } from "@/components/home/fiber-comparison"
import { LifestyleGrid } from "@/components/home/lifestyle-grid"
import { ServiceAreasTeaser } from "@/components/home/service-areas-teaser"
import { HomeFAQ } from "@/components/home/faq-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { faqSchema } from "@/lib/schema-data"
import { HOME_FAQS } from "@/lib/home-faqs"

export const metadata: Metadata = {
  title: "Metronet Internet Plans, Pricing & Availability | Metroconet",
  description:
    "Shop Metronet fiber internet plans starting at $60/mo. Symmetrical speeds up to 2 Gig, no data caps, First Month Free for eligible new customers. Check availability and order online.",
  alternates: { canonical: "https://metroconet.com/" },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(HOME_FAQS.map((f) => ({ question: f.q, answer: f.a })))) }} />
      <Hero />
      <MarqueeStrip />

      <section className="py-20 sm:py-28" data-testid="home-plans-section">
        <div className="container">
          <ScrollReveal className="max-w-2xl mb-12">
            <p className="text-mc-green font-display font-bold text-sm uppercase tracking-widest mb-3">Plans &amp; Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4">Choose your fiber speed</h2>
            <p className="text-white/60">
              Every plan is 100% fiber with symmetrical speeds, no data caps, and no annual contract. 1 Gig is the
              mainstream pick for most households — and 2 Gig is only $10 more.
            </p>
          </ScrollReveal>
          <PlanCards />
          <ScrollReveal className="text-center mt-10">
            <Link href="/plans-pricing" className="text-white/70 hover:text-white font-display font-semibold text-sm underline underline-offset-4" data-testid="home-see-full-plans-link">
              See full plan comparison &amp; FAQs
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <FiberComparison />
      <LifestyleGrid />
      <ServiceAreasTeaser />
      <HomeFAQ />

      <section className="py-24 border-t border-white/5 relative overflow-hidden" data-testid="home-final-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-mc-purple/20 via-black to-black -z-10" />
        <div className="container text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-5">Ready for faster internet?</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">First Month Free for eligible new customers. Order online in minutes.</p>
          <Link href="/plans-pricing" data-testid="final-cta-plans-link" className="inline-flex items-center gap-2 bg-mc-purple text-white font-display font-bold px-9 py-4 rounded-full hover:bg-mc-teal transition-colors">
            View Plans &amp; Order Now
          </Link>
        </div>
      </section>
    </>
  )
}
