import type { Metadata } from "next"
import Link from "next/link"
import { PLANS, CURRENT_PROMOTION } from "@/lib/commercial-data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { breadcrumbSchema } from "@/lib/schema-data"
import { Gift, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Metronet Promotions — First Month Free",
  description:
    "First Month Free for eligible new Metronet customers through Metroconet. See how the current offer applies to 500 Mbps, 1 Gig, and 2 Gig plans.",
  alternates: { canonical: "https://metroconet.com/promotions" },
}

export default function PromotionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://metroconet.com" }, { name: "Promotions", url: "https://metroconet.com/promotions" }])) }} />

      <section className="pt-16 pb-20 relative overflow-hidden" data-testid="promotions-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-mc-yellow/10 via-black to-black -z-10" />
        <div className="container">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 bg-mc-yellow text-black font-display font-bold text-sm px-4 py-1.5 rounded-full mb-6">
              <Gift size={16} /> Current Offer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white max-w-3xl leading-[1.05]">
              {CURRENT_PROMOTION.name}
            </h1>
            <p className="text-white/70 text-lg max-w-xl mt-5">{CURRENT_PROMOTION.headline}</p>
            <p className="text-white/40 text-sm max-w-xl mt-3">{CURRENT_PROMOTION.disclaimer}</p>
            <Link href="/plans-pricing" data-testid="promotions-view-plans-button" className="inline-flex items-center gap-2 bg-mc-purple text-white font-display font-bold px-8 py-4 rounded-full mt-8 hover:bg-mc-teal transition-colors">
              View Plans &amp; Order Now <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 border-t border-white/5" data-testid="promotions-plans-section">
        <div className="container">
          <ScrollReveal className="max-w-2xl mb-10">
            <h2 className="text-3xl font-display font-extrabold text-white">How it applies to every plan</h2>
            <p className="text-white/60 mt-3">First Month Free applies across all current Metronet speeds available through Metroconet.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-testid="promotions-plan-summary-grid">
            {PLANS.map((plan) => (
              <ScrollReveal key={plan.id}>
                <div className="bg-mc-navy/30 border border-white/10 rounded-3xl p-7" data-testid={`promo-plan-${plan.id}`}>
                  <h3 className="text-2xl font-display font-bold text-white">{plan.speed}</h3>
                  <p className="text-mc-green font-display font-extrabold text-3xl mt-2">{plan.priceLabel}<span className="text-sm text-white/50">/mo</span></p>
                  <p className="text-white/40 text-xs mb-4">with AutoPay</p>
                  <p className="text-white/60 text-sm">First month free, then standard pricing applies.</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5" data-testid="promotions-details-section">
        <div className="container max-w-2xl">
          <ScrollReveal>
            <h2 className="text-2xl font-display font-extrabold text-white mb-5">Offer details</h2>
            <div className="space-y-4 text-white/70 text-sm leading-relaxed">
              <p>First Month Free is available for eligible new customers ordering new Metronet service through Metroconet.</p>
              <p>Offer availability and eligibility may vary by service address. Final eligibility is confirmed during the ordering process.</p>
              <p>This is Metroconet's current featured promotion for new Metronet service — pricing and offers may change. Visit this page for the latest active offer.</p>
            </div>
            <Link href="/plans-pricing" data-testid="promotions-bottom-cta" className="inline-flex items-center gap-2 border border-white/20 text-white font-display font-semibold px-7 py-3.5 rounded-full mt-8 hover:bg-white/10 transition-colors">
              Compare Plans <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
