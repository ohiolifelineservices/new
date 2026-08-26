import Link from "next/link"
import { cityToSlug, stateToSlug } from "@/lib/city-data"

export function CityLinks() {
  // Get a subset of popular cities to display
  const popularCities = [
    "Indianapolis",
    "Chicago",
    "Detroit",
    "Lexington",
    "Ann Arbor",
    "Grand Rapids",
    "Dayton",
    "Rochester",
  ]

  // Get a subset of popular states to display
  const popularStates = ["Indiana", "Illinois", "Michigan", "Kentucky", "Ohio"]

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Popular MetroNet Service Areas</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Popular States</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {popularStates.map((state) => {
            const slug = stateToSlug(state)
            return (
              <Link
                key={state}
                href={`/metronet-state/${slug}`}
                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded text-center transition-colors"
              >
                {state}
              </Link>
            )
          })}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">Popular Cities</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {popularCities.map((city) => {
            const slug = cityToSlug(city)
            return (
              <Link
                key={city}
                href={`/cities/${slug}`}
                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded text-center transition-colors"
              >
                {city}
              </Link>
            )
          })}
        </div>
      </div>

      <div className="mt-4 text-center">
        <Link href="/check-availability" className="text-purple-500 hover:text-purple-400 underline">
          Check if MetroNet is available in your area
        </Link>
      </div>
    </div>
  )
}
