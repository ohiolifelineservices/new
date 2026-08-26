"use client"

import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"
import Link from "next/link"

export default function NewCustomerDeals() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#000000] to-[#212145]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Exclusive New Customer Deals</h2>
        <p className="mb-6">Switch to MetroNet today and enjoy special offers for new customers!</p>
        <Link href="/promotions">
          <Button className="bg-[#964DFF] hover:bg-[#00A89C]">
            <Gift className="mr-2 h-4 w-4" /> View Special Offers
          </Button>
        </Link>
      </div>
    </section>
  )
}
