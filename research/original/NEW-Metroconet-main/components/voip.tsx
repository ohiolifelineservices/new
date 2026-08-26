import { Phone } from "lucide-react"

export default function VoIP() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#000000] to-[#212145]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">MetroNet VoIP Phone Service</h2>
        <div className="bg-[#212145] p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <Phone className="text-[#00A89C] mr-4 h-8 w-8" />
            <h3 className="text-xl font-semibold">Crystal-Clear Voice Quality</h3>
          </div>
          <p>
            Experience high-quality voice calls with MetroNet's VoIP service. Enjoy features like voicemail-to-email,
            call forwarding, and more.
          </p>
        </div>
      </div>
    </section>
  )
}
