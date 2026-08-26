"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Import the client components with ssr: false
const Reasons = dynamic(() => import("@/components/reasons"), { ssr: false })
const MetronetDifferenceComponent = dynamic(() => import("@/components/why-metronet/metronet-difference"), {
  ssr: false,
})

export function ReasonsSection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Reasons />
    </Suspense>
  )
}

export function MetronetDifferenceSection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MetronetDifferenceComponent />
    </Suspense>
  )
}

export function AdditionalBenefitsSection({
  benefits,
}: { benefits: Array<{ title: string; description: string; icon: string }> }) {
  return (
    <section className="mt-16 bg-gray-900 p-8 rounded-lg" id="additional-benefits">
      <h2 className="text-3xl font-bold mb-6 text-center scroll-margin-top-24">Additional Benefits</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => {
          // Dynamically import icons based on the icon name string
          const IconComponent = (() => {
            switch (benefit.icon) {
              case "CheckCircle":
                return dynamic(() => import("lucide-react").then((mod) => mod.CheckCircle))
              case "Shield":
                return dynamic(() => import("lucide-react").then((mod) => mod.Shield))
              case "Zap":
                return dynamic(() => import("lucide-react").then((mod) => mod.Zap))
              case "HeadphonesIcon":
                return dynamic(() => import("lucide-react").then((mod) => mod.HeadphonesIcon))
              default:
                return dynamic(() => import("lucide-react").then((mod) => mod.Info))
            }
          })()

          return (
            <div
              key={index}
              className="flex flex-col bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/30 transition-colors duration-300"
            >
              <div className="flex items-start mb-3">
                <IconComponent className="text-purple-500 mr-4 mt-1 flex-shrink-0 w-6 h-6" />
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
