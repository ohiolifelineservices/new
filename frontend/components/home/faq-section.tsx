"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { HOME_FAQS as FAQS } from "@/lib/home-faqs"

export function HomeFAQ() {
  return (
    <section className="py-20 sm:py-28 border-t border-white/5" data-testid="home-faq-section">
      <div className="container max-w-3xl">
        <ScrollReveal className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">Common questions</h2>
        </ScrollReveal>
        <ScrollReveal>
          <Accordion type="single" collapsible className="w-full" data-testid="home-faq-accordion">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10" data-testid={`faq-item-${i}`}>
                <AccordionTrigger className="text-left text-white font-display font-semibold hover:text-mc-purple">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-white/60">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  )
}
