import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SUPPORT_PHONE } from "@/lib/commercial-data"
import { PhoneCall, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Support",
  description: "Metroconet support information for new and existing Metronet customers.",
  alternates: { canonical: "https://metroconet.com/support" },
}

export default function SupportPage() {
  return (
    <section className="pt-16 pb-24" data-testid="support-page">
      <div className="container max-w-2xl">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white leading-[1.05] mb-6">Support</h1>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-mc-navy/30 border border-white/10 rounded-3xl p-7 mb-8" data-testid="support-new-customers">
            <h2 className="text-xl font-display font-bold text-white mb-3">New to Metronet?</h2>
            <p className="text-white/60 text-sm mb-5">
              Metroconet helps you shop plans, pricing, and current promotions, and place a new service order.
            </p>
            <Link href="/plans-pricing" data-testid="support-view-plans-link" className="inline-flex items-center gap-2 bg-mc-purple text-white font-display font-bold px-6 py-3 rounded-full hover:bg-mc-teal transition-colors">
              View Plans &amp; Order Now <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-mc-navy/30 border border-white/10 rounded-3xl p-7" data-testid="support-existing-customers">
            <h2 className="text-xl font-display font-bold text-white mb-3">Already a Metronet customer?</h2>
            <p className="text-white/60 text-sm mb-5">
              For billing, outages, technical support, or account changes, contact official Metronet Customer Care directly.
              Metroconet is an independent authorized retailer and does not manage existing accounts.
            </p>
            <a href={`tel:${SUPPORT_PHONE}`} data-testid="support-phone-link" className="inline-flex items-center gap-2 border border-white/20 text-white font-display font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              <PhoneCall size={16} /> Metronet Customer Care: {SUPPORT_PHONE}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
