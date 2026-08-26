import Link from "next/link"
import { ExternalLink } from "lucide-react"

type Competitor = {
  name: string
  maxSpeed: string
  price: string
  symmetrical: boolean
}

type LocalCompetitorsProps = {
  cityName: string
  competitors: Competitor[]
}

export default function LocalCompetitors({ cityName, competitors }: LocalCompetitorsProps) {
  if (!competitors || competitors.length === 0) return null

  return (
    <section className="py-16 px-4 bg-[#000000]" id="local-comparison">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Metronet vs. Other {cityName} Internet Providers</h2>

        <p className="text-center text-[#FFFFFF] mb-8 max-w-3xl mx-auto">
          See how Metronet stacks up against other internet providers available in {cityName}. We've compiled this
          comparison based on current provider offerings in your area.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#964DFF] text-white">
                <th className="p-4 text-left">Provider</th>
                <th className="p-4 text-center">Max Speed</th>
                <th className="p-4 text-center">Starting Price</th>
                <th className="p-4 text-center">Symmetrical?</th>
              </tr>
            </thead>
            <tbody>
              {/* Metronet row */}
              <tr className="border-b border-[#6E6E70]">
                <td className="p-4 font-medium text-white">Metronet</td>
                <td className="p-4 text-center bg-[#000000] text-[#00C800]">5 Gbps</td>
                <td className="p-4 text-center bg-[#000000] text-[#00C800]">$60</td>
                <td className="p-4 text-center bg-[#000000] text-[#00C800]">Yes</td>
              </tr>

              {/* Local competitors */}
              {competitors.map((competitor, index) => (
                <tr key={index} className="border-b border-[#6E6E70]">
                  <td className="p-4 font-medium text-white">{competitor.name}</td>
                  <td className="p-4 text-center text-[#FFFFFF]">{competitor.maxSpeed}</td>
                  <td className="p-4 text-center text-[#FFFFFF]">{competitor.price}</td>
                  <td className="p-4 text-center text-[#FFFFFF]">{competitor.symmetrical ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[#6E6E70] text-sm mt-4 text-center">
          *Data compiled from provider websites and customer reviews in {cityName} as of{" "}
          {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}.
          <Link
            href="https://www.broadbandnow.com"
            className="text-[#964DFF] hover:underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source: BroadbandNow <ExternalLink className="h-3 w-3 inline" />
          </Link>
        </p>
      </div>
    </section>
  )
}
