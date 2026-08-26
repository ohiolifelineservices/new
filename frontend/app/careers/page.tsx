import type { Metadata } from "next"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Careers",
  description: "Career opportunities at Metroconet.",
  alternates: { canonical: "https://metroconet.com/careers" },
}

export default function CareersPage() {
  return (
    <section className="pt-16 pb-24" data-testid="careers-page">
      <div className="container max-w-2xl">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white leading-[1.05] mb-6">Careers</h1>
          <p className="text-white/60 leading-relaxed">
            Metroconet is growing as an authorized retailer for new Metronet fiber internet service. Check back soon
            for open roles, or reach out through our <a href="/contact-us" className="text-mc-purple hover:underline">Contact Us</a> page.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
