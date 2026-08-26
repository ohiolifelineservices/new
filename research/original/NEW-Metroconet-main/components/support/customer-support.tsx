"use client"

import Link from "next/link"
import { PhoneCall, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CustomerSupport() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <div className="bg-gray-900 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <PhoneCall className="mr-2 h-6 w-6 text-purple-500" />
          Customer Support
        </h2>
        <p className="mb-4">
          Need help? Our dedicated customer support team is available 24/7 to assist you with any questions or concerns.
        </p>
        <p className="mb-4">Phone: 1-877-407-3224</p>
        <Link href="/contact">
          <Button>Contact Us</Button>
        </Link>
      </div>
      <div className="bg-gray-900 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Mail className="mr-2 h-6 w-6 text-purple-500" />
          Metronet Customer Portal
        </h2>
        <p className="mb-4">
          Access your account, manage your services, pay bills, and view usage information through our convenient
          customer portal.
        </p>
        <Button onClick={() => window.open("https://portal.metronet.com/cp/login", "_blank")}>Access Portal</Button>
      </div>
    </div>
  )
}
