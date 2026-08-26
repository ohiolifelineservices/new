import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function RelatedResources() {
  return (
    <section className="py-10 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Related Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Fiber vs. Cable Internet</h3>
            <p className="text-gray-400 mb-4">
              Learn why fiber optic technology outperforms traditional cable internet in speed, reliability, and value.
            </p>
            <Link href="/why-metronet" className="inline-flex items-center text-green-400 hover:text-green-300">
              Read more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Metronet Service Areas</h3>
            <p className="text-gray-400 mb-4">
              Explore our coverage map and see if Metronet's fiber internet is available in your neighborhood.
            </p>
            <Link href="/check-availability" className="inline-flex items-center text-green-400 hover:text-green-300">
              Check availability <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Internet Speed Guide</h3>
            <p className="text-gray-400 mb-4">
              Find out how much internet speed your household needs based on your online activities and devices.
            </p>
            <Link href="/plans-pricing" className="inline-flex items-center text-green-400 hover:text-green-300">
              View guide <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
