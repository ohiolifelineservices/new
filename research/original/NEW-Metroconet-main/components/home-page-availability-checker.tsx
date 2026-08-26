"use client"

import { usePathname } from "next/navigation"
import FixedAvailabilityChecker from "./fixed-availability-checker"

export default function HomePageAvailabilityChecker() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const isCheckAvailabilityPage = pathname === "/check-availability"

  // Only render the FixedAvailabilityChecker on the homepage, not on the check-availability page
  if (!isHomePage || isCheckAvailabilityPage) {
    return null
  }

  return <FixedAvailabilityChecker />
}
