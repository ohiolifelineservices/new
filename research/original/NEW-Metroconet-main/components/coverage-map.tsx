"use client"

import { useState } from "react"
import Link from "next/link"
import { states, stateToSlug, cityToSlug } from "@/lib/city-data"
import { ChevronRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const stateList = Object.entries(states).map(([state, cities]) => ({
  name: state,
  slug: stateToSlug(state),
  cityCount: cities.length,
  cities,
}))

export default function CoverageMap() {
  const [selectedState, setSelectedState] = useState<string | null>(null)

  const totalCities = Object.values(states).flat().length
  const totalStates = Object.keys(states).length

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Metronet Coverage Area
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-pretty">
            Metronet fiber internet is available in{" "}
            <span className="text-white font-semibold">{totalCities} cities</span>{" "}
            across{" "}
            <span className="text-white font-semibold">{totalStates} states</span>.
            Select a state below to explore availability in your area.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {stateList.map((state) => (
            <button
              key={state.name}
              onClick={() =>
                setSelectedState(
                  selectedState === state.name ? null : state.name
                )
              }
              className={`flex items-center justify-between rounded-lg px-4 py-3 text-left transition-colors ${
                selectedState === state.name
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="font-medium">{state.name}</span>
              </span>
              <span
                className={`text-sm ${
                  selectedState === state.name
                    ? "text-purple-200"
                    : "text-gray-500"
                }`}
              >
                {state.cityCount}
              </span>
            </button>
          ))}
        </div>

        {selectedState && (
          <div className="rounded-xl bg-gray-800 p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">
                {selectedState} Coverage
              </h3>
              <Link href={`/metronet-state/${stateToSlug(selectedState)}`}>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white"
                >
                  View State Page
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {states[selectedState as keyof typeof states]?.map((city) => (
                <Link
                  key={city}
                  href={`/city/${cityToSlug(city)}`}
                  className="flex items-center gap-1.5 rounded-md bg-gray-700/50 px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-purple-600/20 hover:text-purple-300"
                >
                  <ChevronRight className="h-3 w-3 shrink-0 text-purple-500" />
                  {city}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <Link href="/check-availability">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Check Your Address Availability
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
