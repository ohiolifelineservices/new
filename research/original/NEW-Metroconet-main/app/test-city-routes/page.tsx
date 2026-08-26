import Link from "next/link"
import { states } from "@/lib/city-data"

export default function TestCityRoutes() {
  // Safely get cities
  let allCities: string[] = []
  try {
    allCities = Object.values(states).flat()
  } catch (error) {
    console.error("Error getting cities:", error)
  }

  // Only show the first 20 cities to avoid overwhelming the page
  const displayCities = allCities.slice(0, 20)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Test City Routes</h1>
      <p className="mb-4">Click on any city below to test if the dynamic routing is working:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayCities.map((city) => {
          // Safely create slug
          const slug = city ? city.toLowerCase().replace(/\s+/g, "-") : ""
          return (
            <Link
              key={city}
              href={`/${slug}`}
              className="p-4 bg-purple-100 hover:bg-purple-200 rounded-lg text-purple-800"
            >
              {city}
            </Link>
          )
        })}
      </div>

      <div className="mt-8">
        <p className="text-gray-600">
          Note: This is a test page to verify dynamic routing. Only showing first 20 cities out of {allCities.length}{" "}
          total.
        </p>
      </div>
    </div>
  )
}
