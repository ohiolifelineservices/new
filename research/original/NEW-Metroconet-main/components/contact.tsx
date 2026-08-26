"use client"

import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Metronet Customer Service</h2>
      <p className="text-center mb-6 max-w-2xl mx-auto">
        Have questions? Our dedicated internet customer service team is here to help. Find our phone number below or use
        our online contact form.
      </p>
      <div className="text-center">
        <Button
          size="lg"
          className="bg-[#964DFF] hover:bg-[#00A89C] text-white"
          onClick={() => window.open("https://www.metronet.com/support/chat-with-us-at-metronet-com", "_blank")}
        >
          Get Support Details & Contact Metronet
        </Button>
      </div>
    </section>
  )
}
