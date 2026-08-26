import { Zap } from "lucide-react"

export default function Fiber() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#212145] to-[#000000]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">MetroNet Fiber Internet</h2>
        <div className="bg-[#000000] p-6 rounded-lg border border-[#00A89C]">
          <div className="flex items-center mb-4">
            <Zap className="text-[#00A89C] mr-4 h-8 w-8" />
            <h3 className="text-xl font-semibold">Lightning-Fast Speeds</h3>
          </div>
          <p>
            MetroNet's 100% fiber-optic network delivers symmetrical upload and download speeds, perfect for streaming,
            gaming, and working from home.
          </p>
        </div>
      </div>
    </section>
  )
}
