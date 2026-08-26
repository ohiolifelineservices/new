import PlansAndPricingClient from "./PlansAndPricingClient"
import type { Metadata } from "next"
import { GoogleAnalytics } from "@/components/google-analytics"

export const metadata: Metadata = {
  title: "Metronet Internet Plans & Pricing | Free Installation | Unlimited Data",
  description:
    "Discover Metronet's affordable fiber internet plans starting at $60. Free installation on all plans, unlimited data, and no deposit required. Enjoy symmetrical speeds up to 5 Gig and no data caps. Find your perfect plan today!",
}

export default function PlansAndPricing() {
  return (
    <>
      <GoogleAnalytics />
      <PlansAndPricingClient />
    </>
  )
}
