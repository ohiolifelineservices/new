"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Zap, Gamepad2, Phone, Upload, Rocket } from "lucide-react"
import OrderForm from "./order-form"
import Link from "next/link"

const plans = [
  {
    name: "500/500 Mbps",
    price: "60.00",
    description:
      "Good for streaming video and music, gaming, video chatting, uploading and downloading videos and photos.",
    icon: Upload,
    color: "bg-[#212145]",
    textColor: "text-[#FFFFFF]",
    accentColor: "text-[#FFA500]",
    uniqueIdea: "Ideal for Remote Workers",
  },
  {
    name: "1Gb/1Gb",
    price: "70.00",
    description:
      "Great for heavy streaming video and music, heavy gaming, video chatting, uploading and downloading videos and photos.",
    icon: Zap,
    color: "bg-[#212145]",
    textColor: "text-[#FFFFFF]",
    accentColor: "text-[#00A89C]",
    uniqueIdea: "Most Popular",
    isMostPopular: true,
    isFeatured: true,
  },
  {
    name: "2Gb/2Gb",
    price: "80.00",
    description:
      "Great for extreme streaming with 4K-8K capability, utilizing several apps to work and learn from home, posting content to social media, uploading and downloading, and simultaneously powering several computers, tablets, phones, televisions, and gaming consoles.",
    icon: Gamepad2,
    color: "bg-[#212145]",
    textColor: "text-[#FFFFFF]",
    accentColor: "text-[#FFFF00]",
    uniqueIdea: "Ultimate Family Plan",
  },
  {
    name: "5Gb/5Gb",
    price: "Check Pricing",
    description:
      "In select areas. State-of-the-art service for a future-proof connected household. Next-level gaming with low latency for a seamless experience plus the most bandwidth for telecommuting, video-conferencing, streaming, and more. Customer must choose Premium WiFi or provide a 10G WAN/LAN compatible router.",
    icon: Rocket,
    color: "bg-[#212145]",
    textColor: "text-[#FFFFFF]",
    accentColor: "text-[#FF4500]",
    uniqueIdea: "Future-Proof Your Home",
    isCheckPricing: true,
  },
  {
    name: "Fiber Phone Unlimited",
    price: "15.00",
    description:
      "Unlimited domestic long distance, unlimited local calling and 17 calling features including voicemail.",
    icon: Phone,
    color: "bg-[#212145]",
    textColor: "text-[#FFFFFF]",
    accentColor: "text-[#1E90FF]",
    uniqueIdea: "Seamless Communication",
  },
]

interface PlansProps {
  preview?: boolean
  featuredPlan?: string
}

export default function Plans({ preview = false, featuredPlan = "1Gb/1Gb" }: PlansProps) {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string } | null>(null)

  const handleOrderClick = (plan: { name: string; price: string }) => {
    setSelectedPlan(plan)
    setIsOrderFormOpen(true)
  }

  // Reorganize plans to feature the specified plan first
  const orderedPlans = [...plans].sort((a, b) => {
    if (a.name === featuredPlan) return -1
    if (b.name === featuredPlan) return 1
    // Put the "Fiber Phone Unlimited" plan at the end
    if (a.name === "Fiber Phone Unlimited") return 1
    if (b.name === "Fiber Phone Unlimited") return -1
    return 0
  })

  const displayedPlans = preview
    ? [
        plans.find((plan) => plan.name === "1Gb/1Gb"),
        plans.find((plan) => plan.name === "500/500 Mbps"),
        plans.find((plan) => plan.name === "2Gb/2Gb"),
      ].filter(Boolean)
    : orderedPlans

  return (
    <section className="py-16 px-4 bg-[#000000]" id="plans-section">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Find Your Perfect Metronet Internet Plan</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {displayedPlans.map((plan, index) => (
          <Card
            key={index}
            className={`${plan.color} border-[#6E6E70] overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              plan.name === featuredPlan && !preview ? "ring-4 ring-[#00A89C] lg:scale-105" : ""
            }`}
          >
            <CardHeader className="relative pb-0">
              {plan.isMostPopular && (
                <Badge className="absolute top-4 right-4 bg-[#00C800] text-[#000000] font-semibold">Most Popular</Badge>
              )}
              {/* Removed the Recommended badge */}
              <plan.icon className={`w-16 h-16 mb-4 ${plan.accentColor}`} />
              <CardTitle className={`text-3xl font-bold ${plan.textColor}`}>{plan.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-5xl font-bold mb-4 ${plan.accentColor}`}>
                {plan.isCheckPricing ? (
                  <span className="text-3xl">{plan.price}</span>
                ) : (
                  <>
                    ${plan.price}
                    <span className="text-lg font-normal">/mo*</span>
                  </>
                )}
              </div>
              <p className={`${plan.textColor} text-opacity-90 mb-6`}>{plan.description}</p>
              <p className={`${plan.accentColor} font-semibold`}>{plan.uniqueIdea}</p>
            </CardContent>
            <CardFooter>
              {plan.name !== "Fiber Phone Unlimited" ? (
                <Button
                  variant="secondary"
                  className={`w-full text-lg font-semibold py-6 ${
                    plan.name === featuredPlan && !preview
                      ? "bg-[#00A89C] text-[#FFFFFF] hover:bg-[#008C82]"
                      : "bg-[#964DFF] text-[#FFFFFF] hover:bg-[#00A89C]"
                  } transition-colors duration-300`}
                  onClick={() => handleOrderClick(plan)}
                >
                  Order Now
                </Button>
              ) : (
                <div className="w-full text-center text-sm text-gray-300 py-2">
                  Available as an add-on to any internet plan
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      {preview && (
        <div className="mt-12 text-center">
          <Link href="/plans-pricing">
            <Button size="lg" className="bg-purple-600 hover:bg-teal-500 text-white">
              View All Plans
            </Button>
          </Link>
        </div>
      )}
      {!preview && (
        <p className="text-center text-gray-400 mt-8 text-xs max-w-4xl mx-auto">
          *Offers subject to change; available to new residential customers only and cannot be combined. Services
          subject to Terms and Conditions, may not be available in all areas, and may have asymmetrical speeds in select
          markets. Advertised speeds are based on wired connections and compatible equipment; see Network Management and
          Broadband Disclosures for details. 1 Gb/1 Gb pricing is locked for 12 months, increases $10/month at months 13
          and 25, and reverts to standard rate at month 37. An eero router is included with speeds up to 5 Gb (return
          required upon cancellation), and downgrades revert to standard rates. $1 eero Plus offer (with internet
          purchase) is a $9 discount for 3 months, then standard rate applies. Free installation requires auto-pay and
          is valid 11/20/24-12/18/24. Gift Card offer (1 Gig or 2 Gig speeds, 11/20/24-1/2/25) requires two full months
          of payment; card mailed within 8 weeks of claim and charged back if service is canceled before 12 months (one
          per household). Advertised price excludes taxes, fees (including $12.95/month Tech Assure fee), and
          installation costs.
        </p>
      )}
      <OrderForm isOpen={isOrderFormOpen} onClose={() => setIsOrderFormOpen(false)} selectedPlan={selectedPlan} />
    </section>
  )
}
