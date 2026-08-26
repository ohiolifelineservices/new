"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { IMAGES } from "@/lib/media"

const USE_CASES = [
  { title: "Work from home", desc: "Fast, stable video calls and uploads without lag — even during peak hours.", image: IMAGES.remoteWork1 },
  { title: "Gaming", desc: "Low latency and consistent speeds for competitive, lag-sensitive play.", image: IMAGES.gaming1 },
  { title: "Streaming", desc: "Multiple 4K streams at once without buffering, on every device in the house.", image: IMAGES.familyStreaming },
  { title: "Connected homes", desc: "Smart devices, cameras, and hubs all stay online without slowing each other down.", image: IMAGES.smartHome },
]

export function LifestyleGrid() {
  return (
    <section className="py-20 sm:py-28 border-t border-white/5" data-testid="lifestyle-grid-section">
      <div className="container">
        <ScrollReveal className="max-w-2xl mb-12">
          <p className="text-mc-purple font-display font-bold text-sm uppercase tracking-widest mb-3">Built for how you live</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">One connection, every screen</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {USE_CASES.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[3/4] border border-white/10" data-testid={`lifestyle-card-${i}`}>
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <h3 className="text-white font-display font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
