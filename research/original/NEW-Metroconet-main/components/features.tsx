"use client"

import { Button } from "@/components/ui/button"
import { Zap, Upload, Tv } from "lucide-react"

export default function Features() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience the Power of 100% Fiber Internet</h2>
      <h3 className="text-2xl font-semibold mb-6 text-center">
        The Speeds You Crave for Gaming, Streaming, and Everything In Between
      </h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
        <div className="flex flex-col items-center text-center">
          <Zap className="w-12 h-12 mb-4 text-yellow-400" />
          <p>Ultra-low latency for lag-free gaming</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Upload className="w-12 h-12 mb-4 text-green-400" />
          <p>Lightning-fast uploads for instant sharing</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Tv className="w-12 h-12 mb-4 text-teal-400" />
          <p>Uninterrupted streaming, even with multiple devices connected</p>
        </div>
      </div>
      <div className="text-center">
        <Button
          size="lg"
          className="bg-purple-600 hover:bg-teal-500 text-white"
          onClick={() => {
            const plansSection = document.getElementById("plans-section")
            if (plansSection) {
              plansSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          Order Metronet Internet Online Now
        </Button>
      </div>
    </section>
  )
}
