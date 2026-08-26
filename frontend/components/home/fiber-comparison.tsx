"use client"

import { Check, X } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const ROWS = [
  { label: "Connection type", fiber: "100% fiber-optic", cable: "Copper coaxial" },
  { label: "Upload speed", fiber: "Symmetrical (equal to download)", cable: "A fraction of download speed" },
  { label: "Video call & upload quality", fiber: "Consistently strong", cable: "Degrades during peak hours" },
  { label: "Performance under multiple devices", fiber: "Stays consistent", cable: "Slows down" },
  { label: "Data caps", fiber: "None", cable: "Often capped" },
]

export function FiberComparison() {
  return (
    <section className="py-20 sm:py-28 border-t border-white/5" data-testid="fiber-comparison-section">
      <div className="container">
        <ScrollReveal className="max-w-2xl mb-12">
          <p className="text-mc-teal font-display font-bold text-sm uppercase tracking-widest mb-3">Fiber vs. Cable</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">Why fiber makes the difference</h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-x-auto rounded-3xl border border-white/10">
            <table className="w-full text-left" data-testid="comparison-table">
              <thead>
                <tr className="bg-mc-navy/60">
                  <th className="p-5 text-white/50 text-xs uppercase tracking-wider font-display">Category</th>
                  <th className="p-5 text-mc-green text-xs uppercase tracking-wider font-display">Metronet Fiber</th>
                  <th className="p-5 text-white/40 text-xs uppercase tracking-wider font-display">Traditional Cable</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-black" : "bg-mc-navy/20"}>
                    <td className="p-5 text-white/80 text-sm font-medium">{row.label}</td>
                    <td className="p-5 text-white text-sm">
                      <span className="flex items-center gap-2"><Check size={16} className="text-mc-green shrink-0" />{row.fiber}</span>
                    </td>
                    <td className="p-5 text-white/50 text-sm">
                      <span className="flex items-center gap-2"><X size={16} className="text-mc-gray shrink-0" />{row.cable}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
