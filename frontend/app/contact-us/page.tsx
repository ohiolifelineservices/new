import type { Metadata } from "next"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Metroconet, an independent authorized retailer for new Metronet fiber internet service.",
  alternates: { canonical: "https://metroconet.com/contact-us" },
}

export default function ContactUsPage() {
  return (
    <section className="pt-16 pb-24" data-testid="contact-us-page">
      <div className="container max-w-2xl">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white leading-[1.05] mb-6">Contact Us</h1>
          <p className="text-white/60 leading-relaxed mb-8">
            Have a question about plans, pricing, or placing a new Metronet service order? Use the availability checker
            or order form on any plan page, and our team will follow up to help you get connected.
          </p>
          <p className="text-white/40 text-sm leading-relaxed">
            Metroconet is an independent authorized retailer for new Metronet service. For billing, outages, or
            technical support on an existing account, please visit our <a href="/support" className="text-mc-purple hover:underline">Support</a> page for official Metronet Customer Care contact information.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
