import { Zap, Shield, HeadphonesIcon, Wifi } from "lucide-react"

export default function KeyTakeaways() {
  return (
    <section className="py-10 px-4 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Key Benefits of Metronet Fiber</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-center mb-3">
              <Zap className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold">Superior Technology</h3>
            </div>
            <p>
              Our 100% fiber-optic network delivers symmetrical speeds up to 5 Gbps with 99.9% reliability,
              outperforming traditional cable and DSL connections.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-teal-500">
            <div className="flex items-center mb-3">
              <Shield className="w-6 h-6 text-teal-400 mr-3" />
              <h3 className="text-xl font-semibold">Transparent Pricing</h3>
            </div>
            <p>
              Enjoy straightforward pricing with no hidden fees, no data caps, and no long-term contracts. What you see
              is what you pay.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-center mb-3">
              <HeadphonesIcon className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold">Expert Local Support</h3>
            </div>
            <p>
              Access 24/7 customer support from our team of local experts who understand your community's specific needs
              and network conditions.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center mb-3">
              <Wifi className="w-6 h-6 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold">Whole-Home Coverage</h3>
            </div>
            <p>
              Experience seamless connectivity throughout your entire home with our advanced WiFi solutions that
              eliminate dead spots and buffering.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>
            Last updated: April 8, 2025 | Source: Internal network performance data and customer satisfaction surveys
          </p>
        </div>
      </div>
    </section>
  )
}
