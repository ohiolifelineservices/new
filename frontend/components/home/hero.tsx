"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { AvailabilityWidget } from "@/components/availability-widget"
import { PromoBadge } from "@/components/promo-badge"
import { useOrderForm } from "@/components/order-form-context"
import { getPopularPlan, PLANS } from "@/lib/commercial-data"
import { IMAGES } from "@/lib/media"

const BENEFITS = ["100% fiber network", "Symmetrical upload speeds", "No data caps", "No annual contract"]

export function Hero() {
  const { openOrderForm } = useOrderForm()
  const plan = getPopularPlan()
  const entry = PLANS[0]

  return (
    <section className="relative min-h-[calc(100vh-74px)] flex items-center overflow-hidden" data-testid="home-hero">
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.heroFamily}
          alt="Family at home using Metronet fiber internet across multiple devices"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] lg:object-[68%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/55" />
      </div>

      <div className="absolute inset-0 tech-grid z-0 opacity-70" aria-hidden="true" />
      <div className="bloom bloom-purple w-[620px] h-[620px] -top-52 -left-40 opacity-70" aria-hidden="true" />
      <div className="bloom bloom-teal w-[420px] h-[420px] bottom-[-14rem] left-[28%] opacity-50" aria-hidden="true" />

      <div className="container relative z-10 py-20 lg:py-24">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3 mb-7">
            <PromoBadge />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur px-3.5 py-1.5 text-[11px] font-display font-semibold uppercase tracking-[0.14em] text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-mc-green" />
              Authorized Metronet Reseller
            </span>
          </div>

          <h1 className="font-display font-extrabold text-white leading-[0.96] text-5xl sm:text-6xl lg:text-7xl">
            <span className="block text-gradient-purple">Metronet</span>
            <span className="block">Fiber Internet.</span>
            <span className="block text-white/55">Ordered in minutes.</span>
          </h1>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mt-7">
            Symmetrical fiber speeds from{" "}
            <strong className="text-white font-semibold">{entry.speed} to {PLANS[PLANS.length - 1].speed}</strong> starting at{" "}
            <strong className="text-mc-green font-bold">{entry.priceLabel}/mo</strong> with AutoPay. Unlimited data,
            no annual contract, and <strong className="text-mc-yellow font-semibold">First Month Free</strong> for
            eligible new customers.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-9">
            <button
              onClick={() => openOrderForm(plan)}
              data-testid="hero-order-now-button"
              className="btn-shine group flex items-center gap-2.5 bg-mc-purple text-white font-display font-bold px-9 py-4 rounded-full text-base hover:bg-mc-green hover:text-black transition-colors duration-300 shadow-[0_18px_50px_-18px_rgba(150,77,255,0.9)]"
            >
              Order Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="/plans-pricing"
              data-testid="hero-view-plans-button"
              className="flex items-center gap-2 border border-white/25 bg-white/[0.03] backdrop-blur text-white font-display font-semibold px-8 py-4 rounded-full text-base hover:bg-white/10 hover:border-white/50 transition-colors duration-300"
            >
              View Plans &amp; Pricing
            </Link>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-10 max-w-lg">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-white/80 text-sm">
                <span className="w-5 h-5 rounded-full bg-mc-green/15 border border-mc-green/40 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-mc-green" />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-11 max-w-lg">
            <p className="text-white/40 text-[11px] uppercase tracking-[0.18em] mb-3">Already know your address?</p>
            <AvailabilityWidget />
          </div>
        </div>
      </div>
    </section>
  )
}
