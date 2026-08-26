"use client"

import { Button } from "@/components/ui/button"
import { Laptop } from "lucide-react"

export default function Portal() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#212145] to-[#000000]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">MetroNet Customer Portal</h2>
        <p className="mb-6">Access your account, pay bills, and manage your services all in one place.</p>
        <Button
          className="bg-[#00A89C] hover:bg-[#964DFF]"
          onClick={() => window.open("https://portal.metronet.com/cp/login", "_blank")}
        >
          <Laptop className="mr-2 h-4 w-4" /> Access Portal
        </Button>
      </div>
    </section>
  )
}
