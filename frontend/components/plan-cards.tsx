"use client"

import { Check } from "lucide-react"
import { PLANS, CURRENT_PROMOTION, PRICE_DISCLAIMER, type Plan } from "@/lib/commercial-data"
import { useOrderForm } from "@/components/order-form-context"
import { trackEvent } from "@/components/google-analytics"
import { cn } from "@/lib/utils"

export function PlanCards({ compact = false }: { compact?: boolean }) {
  const { openOrderForm } = useOrderForm()

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-testid="plan-cards-grid">
        {PLANS.map((plan, i) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            compact={compact}
            delay={i * 0.08}
            onOrder={() => { trackEvent("select_plan", { plan: plan.name }); openOrderForm(plan) }}
          />
        ))}
      </div>
      <p className="text-center text-white/40 text-xs mt-6 max-w-xl mx-auto" data-testid="price-disclaimer">
        {PRICE_DISCLAIMER}
      </p>
    </div>
  )
}

function PlanCard({ plan, compact, delay, onOrder }: { plan: Plan; compact: boolean; delay: number; onOrder: () => void }) {
  return (
    <div
      data-testid={`plan-card-${plan.id}`}
      className={cn(
        "relative rounded-3xl p-8 flex flex-col border transition-all duration-300 hover:-translate-y-1",
        plan.popular
          ? "bg-gradient-to-b from-mc-purple/25 to-mc-navy border-mc-purple shadow-[0_0_60px_-10px_rgba(150,77,255,0.5)] md:scale-105 z-10"
          : "bg-mc-navy/40 border-white/10 hover:border-mc-purple/40",
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mc-purple text-white text-[11px] font-display font-bold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap">
          Most Popular
        </span>
      )}
      <span className="inline-block w-fit bg-mc-yellow text-black text-[10px] font-display font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4">
        {CURRENT_PROMOTION.badge}
      </span>
      <h3 className="text-3xl font-display font-extrabold text-white">{plan.speed}</h3>
      <p className="text-white/50 text-sm mb-4">{plan.tagline}</p>
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-5xl font-display font-extrabold text-mc-green">{plan.priceLabel}</span>
        <span className="text-white/50 text-sm">/mo</span>
      </div>
      <p className="text-white/40 text-xs mb-6">with AutoPay</p>
      <p className="text-white/70 text-sm mb-6">{plan.bestFor}</p>
      {!compact && (
        <ul className="space-y-2.5 mb-8 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-white/70">
              <Check size={16} className="text-mc-green shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={onOrder}
        data-testid={`plan-card-order-button-${plan.id}`}
        className={cn(
          "w-full py-3.5 rounded-full font-display font-bold text-sm transition-all",
          plan.popular ? "bg-mc-purple text-white hover:bg-mc-teal" : "bg-white/10 text-white hover:bg-mc-purple",
        )}
      >
        Choose {plan.speed}
      </button>
    </div>
  )
}
