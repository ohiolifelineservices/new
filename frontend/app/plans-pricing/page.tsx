import type { Metadata } from "next"
import { PlanCards } from "@/components/plan-cards"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PromoBadge } from "@/components/promo-badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqSchema, breadcrumbSchema } from "@/lib/schema-data"
import { Wifi, Gamepad2, Video, Home, Cloud, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Metronet Plans & Pricing — 500 Mbps, 1 Gig, 2 Gig",
  description:
    "Compare Metronet fiber internet plans: 500 Mbps at $60/mo, 1 Gig at $70/mo, 2 Gig at $80/mo, all with AutoPay. First Month Free for eligible new customers. Order online.",
  alternates: { canonical: "https://metroconet.com/plans-pricing" },
}

const FIT_CARDS = [
  { icon: Users, title: "1–3 people, light use", plan: "500 Mbps is plenty for browsing, HD streaming, and video calls." },
  { icon: Gamepad2, title: "Gamers & streamers", plan: "1 Gig keeps latency low and streams smooth across multiple devices." },
  { icon: Home, title: "Large households", plan: "1 Gig or 2 Gig handles a dozen+ connected devices without slowdown." },
  { icon: Video, title: "Remote work & video calls", plan: "Symmetrical upload on every plan means clear calls and fast uploads." },
  { icon: Cloud, title: "Cloud backups & big files", plan: "2 Gig is built for large uploads/downloads and heavy cloud sync." },
  { icon: Wifi, title: "Smart home / many devices", plan: "2 Gig gives headroom as you add cameras, hubs, and IoT devices." },
]

const FAQS = [
  { question: "What's the difference between 500 Mbps, 1 Gig, and 2 Gig?", answer: "All three run on the same 100% fiber network with symmetrical upload/download speeds. The difference is total bandwidth: 500 Mbps suits light households, 1 Gig is the mainstream choice for most homes, and 2 Gig is best for power users and large households needing extra headroom." },
  { question: "Is 2 Gig worth the extra cost over 1 Gig?", answer: "2 Gig is only $10/month more than 1 Gig. If your household has many simultaneous devices, does large uploads, or wants maximum future headroom, the upgrade is an easy call." },
  { question: "Does AutoPay change my price?", answer: "Listed pricing requires AutoPay enrollment. Ask about pricing without AutoPay when you order." },
  { question: "Are there data caps?", answer: "No. Every plan includes unlimited data." },
  { question: "Is there a contract?", answer: "No annual contract is required on any plan." },
  { question: "How do I know which plan is right for my home?", answer: "Most households do well with 1 Gig. If you have a large family, run a home business, or want extra headroom for smart-home devices, consider 2 Gig. Light users (1–2 people) can save with 500 Mbps." },
]

export default function PlansPricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer })))) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://metroconet.com" }, { name: "Plans & Pricing", url: "https://metroconet.com/plans-pricing" }])) }} />

      <section className="pt-16 pb-8" data-testid="plans-pricing-hero">
        <div className="container">
          <PromoBadge className="mb-5" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white max-w-3xl leading-[1.05]">
            Metronet plans &amp; pricing
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mt-5">
            Every plan is 100% fiber with symmetrical speeds, no data caps, and no annual contract. Pick a speed and order in minutes.
          </p>
        </div>
      </section>

      <section className="pb-20" data-testid="plans-pricing-cards-section">
        <div className="container">
          <PlanCards />
        </div>
      </section>

      <section className="py-20 border-t border-white/5" data-testid="plans-fit-section">
        <div className="container">
          <ScrollReveal className="max-w-2xl mb-12">
            <p className="text-mc-purple font-display font-bold text-sm uppercase tracking-widest mb-3">Which speed fits your home?</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">Match your plan to how you actually use the internet</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FIT_CARDS.map((card) => (
              <ScrollReveal key={card.title}>
                <div className="bg-mc-navy/30 border border-white/10 rounded-3xl p-6 h-full" data-testid={`fit-card-${card.title.slice(0,10)}`}>
                  <card.icon className="text-mc-teal mb-4" size={26} />
                  <h3 className="text-white font-display font-semibold mb-2">{card.title}</h3>
                  <p className="text-white/60 text-sm">{card.plan}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5" data-testid="plans-details-section">
        <div className="container max-w-3xl">
          <ScrollReveal className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-6">Good to know before you order</h2>
            <div className="space-y-5 text-white/70 text-sm leading-relaxed">
              <p><strong className="text-white">Equipment:</strong> A fiber gateway/router is included with installation so your home is Wi-Fi ready from day one.</p>
              <p><strong className="text-white">Installation:</strong> You'll choose a preferred install date and time window when you order — confirmation follows by email.</p>
              <p><strong className="text-white">Billing:</strong> Listed pricing requires AutoPay enrollment.</p>
              <p><strong className="text-white">Contracts:</strong> No annual contract is required on any plan.</p>
              <p><strong className="text-white">Data:</strong> No data caps or overage fees on any plan.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-2xl font-display font-extrabold text-white mb-6 mt-4">Frequently asked questions</h2>
            <Accordion type="single" collapsible data-testid="plans-faq-accordion">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/10" data-testid={`plans-faq-item-${i}`}>
                  <AccordionTrigger className="text-left text-white font-display font-semibold hover:text-mc-purple">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-white/60">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
