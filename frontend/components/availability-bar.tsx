"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MapPin } from "lucide-react"
import { AvailabilityWidget } from "@/components/availability-widget"

// Homepage-only availability bar, restored to its original position directly
// beneath the main navigation.
export function AvailabilityBar() {
  const pathname = usePathname()
  if (pathname !== "/") return null

  return (
    <div className="sticky top-[74px] z-40 border-b border-white/10 bg-black/85 backdrop-blur-xl" data-testid="availability-bar">
      <div className="container flex flex-col sm:flex-row items-stretch sm:items-center gap-3 py-2.5">
        <div className="flex items-center gap-2 shrink-0">
          <MapPin size={15} className="text-mc-purple" />
          <span className="text-white text-sm font-display font-semibold whitespace-nowrap">Check Availability</span>
        </div>
        <div className="flex-1 sm:max-w-md sm:ml-4">
          <AvailabilityWidget variant="bar" />
        </div>
        <Link
          href="/check-availability"
          data-testid="availability-bar-all-cities-link"
          className="hidden sm:block text-xs text-white/50 hover:text-white whitespace-nowrap transition-colors sm:ml-2"
        >
          View all cities
        </Link>
      </div>
    </div>
  )
}
