"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

// Export the component as both default and named export
export function MetronetDifference() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-6">The Metronet Difference</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">100% Fiber Network</h3>
          <p>
            Unlike cable providers who use outdated copper lines for part of their network, Metronet delivers 100% fiber
            optic connections directly to your home or business.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">Symmetrical Speeds</h3>
          <p>
            Our fiber network provides equal upload and download speeds, unlike cable companies that typically offer
            much slower upload speeds than advertised download speeds.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">Local Customer Service</h3>
          <p>
            We're committed to the communities we serve with local customer service teams and technicians who live and
            work in your area.
          </p>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <Link href="/plans-pricing">
          <Button
            variant="outline"
            className="bg-white text-purple-900 hover:bg-purple-100 hover:text-purple-700 border-purple-600"
          >
            View Plans
          </Button>
        </Link>
        <Link href="/check-availability">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Check Availability</Button>
        </Link>
      </div>
    </section>
  )
}

// Also export as default for backward compatibility
export default MetronetDifference
