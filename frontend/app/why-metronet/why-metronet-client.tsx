"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useOrderForm } from "@/components/order-form-context"
import { getPopularPlan } from "@/lib/commercial-data"
import { IMAGES } from "@/lib/media"
import { ArrowRight } from "lucide-react"

const CHAPTERS = [
  {
    n: "01",
    title: "It's 100% fiber, not copper",
    body: "Metronet's network runs fiber-optic cable all the way to your home, not just to a box down the street. That means data travels as light, not electricity — faster, more consistent, and far less prone to interference than the copper coaxial cable behind most cable internet.",
    image: IMAGES.fiberGlow,
  },
  {
    n: "02",
    title: "Upload speed matches download speed",
    body: "Cable internet gives you a fast download and a slow upload. Fiber is symmetrical — your upload speed equals your download speed. That's the difference between a video call that freezes and one that doesn't, or a 4K file that uploads in seconds instead of minutes.",
    image: IMAGES.remoteWork2,
  },
  {
    n: "03",
    title: "Every device, at the same time",
    body: "Streaming in the living room, a video call in the office, a game console in the basement, smart cameras out front — fiber bandwidth doesn't get divided up the way cable does under load. More devices doesn't mean more slowdown.",
    image: IMAGES.gaming2,
  },
  {
    n: "04",
    title: "Built for how you actually work and play",
    body: "Remote work depends on stable uploads for calls and file sharing. Gaming depends on low, consistent latency. Streaming depends on sustained bandwidth across multiple screens. Fiber is the common thread underneath all three.",
    image: IMAGES.familyStreaming,
  },
  {
    n: "05",
    title: "Simple installation, no long-term lock-in",
    body: "You choose a preferred install date and time window when you order. A technician connects your home fiber line and sets up your equipment. No annual contract is required on any plan.",
    image: IMAGES.installer,
  },
]

export default function WhyMetronetClient() {
  const { openOrderForm } = useOrderForm()
  const plan = getPopularPlan()

  return (
    <>
      <section className="pt-16 pb-14" data-testid="why-metronet-hero">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05] max-w-3xl">
            Why Metronet fiber<br />is worth switching to
          </h1>
          <p className="text-white/60 text-lg max-w-xl mt-6">
            A plain-language look at what fiber actually changes about your internet — for people deciding whether to switch.
          </p>
        </div>
      </section>

      <div data-testid="why-metronet-chapters">
        {CHAPTERS.map((chapter, i) => (
          <section key={chapter.n} className="py-16 sm:py-20 border-t border-white/5" data-testid={`chapter-${chapter.n}`}>
            <div className="container">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <ScrollReveal>
                  <span className="text-mc-purple font-display font-extrabold text-6xl sm:text-7xl opacity-40">{chapter.n}</span>
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-3 mb-4">{chapter.title}</h2>
                  <p className="text-white/60 leading-relaxed">{chapter.body}</p>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
                    <Image src={chapter.image} alt={chapter.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading="lazy" />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="py-20 border-t border-white/5 text-center" data-testid="why-metronet-cta">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-5">Ready to make the switch?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => openOrderForm(plan)} data-testid="why-metronet-order-button" className="bg-mc-purple text-white font-display font-bold px-8 py-4 rounded-full hover:bg-mc-teal transition-colors">
              Order Now
            </button>
            <Link href="/plans-pricing" data-testid="why-metronet-plans-link" className="flex items-center gap-2 border border-white/20 text-white font-display font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
              View Plans &amp; Pricing <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
