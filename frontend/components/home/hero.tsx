"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AvailabilityWidget } from "@/components/availability-widget"
import { PromoBadge } from "@/components/promo-badge"
import { useOrderForm } from "@/components/order-form-context"
import { getPopularPlan } from "@/lib/commercial-data"
import { IMAGES } from "@/lib/media"

export function Hero() {
  const { openOrderForm } = useOrderForm()
  const plan = getPopularPlan()

  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28" data-testid="home-hero">
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `url(${IMAGES.fiberHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/85 to-black" />
      <div className="absolute -top-40 right-[-10%] w-[500px] h-[500px] rounded-full bg-mc-purple/10 -z-10" />

      <div className="container relative">
        <div>
          <PromoBadge className="mb-6" />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-white leading-[1.05] max-w-4xl">
          Metronet Fiber Internet.<br />Order in minutes.
        </h1>

        <p className="text-white/60 text-base sm:text-lg max-w-xl mt-6">
          Symmetrical fiber speeds from <span className="text-white font-semibold">500 Mbps to 2 Gig</span>.
          No data caps. No annual contract. Metroconet is an independent authorized retailer for new Metronet service.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-9">
          <button
            onClick={() => openOrderForm(plan)}
            data-testid="hero-order-now-button"
            className="group flex items-center gap-2 bg-mc-purple text-white font-display font-bold px-8 py-4 rounded-full text-base hover:bg-mc-teal transition-all duration-300 hover:scale-[1.03]"
          >
            Order Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <Link
            href="/plans-pricing"
            data-testid="hero-view-plans-button"
            className="flex items-center gap-2 border border-white/25 text-white font-display font-semibold px-8 py-4 rounded-full text-base hover:bg-white/10 transition-all duration-300"
          >
            View Plans &amp; Pricing
          </Link>
        </div>

        <div className="mt-14 max-w-lg">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Already know your address?</p>
          <AvailabilityWidget />
        </div>
      </div>
    </section>
  )
}
