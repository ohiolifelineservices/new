"use client"

import { usePathname } from "next/navigation"
import FixedAvailabilityChecker from "./fixed-availability-checker"

export default function HomePageAvailabilityChecker() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  // Only render the FixedAvailabilityChecker on the homepage
  if (!isHomePage) {
    return null
  }

  return <FixedAvailabilityChecker />
}
