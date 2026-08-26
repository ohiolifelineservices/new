import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, CheckCircle, Map, FileText, BarChart, Network, Zap, Award, Clock, Star } from "lucide-react"
import { states, stateToSlug, getStateAbbreviation } from "@/lib/city-data"
import { GoogleAnalytics } from "@/components/google-analytics"

export const metadata: Metadata = {
  title: "Metronet Service Areas | FREE Month + $100 Gift Card | No Deposit",
  description:
    "Find Metronet's 100% fiber internet in your area. Enjoy symmetrical speeds up to 5 Gig, no data caps, and no contracts. First month FREE + $100 gift card on select plans!",
  keywords:
    "Metronet service areas, Metronet coverage, Metronet availability, fiber internet, high-speed internet, internet service provider, first month free, $100 gift card",
  openGraph: {
    title: "Metronet Service Areas | FREE Month + $100 Gift Card | No Deposit",
    description:
      "Find Metronet's 100% fiber internet in your area. Enjoy symmetrical speeds up to 5 Gig, no data caps, and no contracts. First month FREE + $100 gift card on select plans!",
    type: "website",
    url: "https://metroconet.com/metronet-state",
    images: [
      {
        url: "https://metroconet.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metronet Fiber Internet Service Areas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metronet Service Areas | FREE Month + $100 Gift Card | No Deposit",
    description:
      "Find Metronet's 100% fiber internet in your area. Enjoy symmetrical speeds up to 5 Gig, no data caps, and no contracts. First month FREE + $100 gift card!",
    images: ["https://metroconet.com/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://metroconet.com/metronet-state",
  },
}

export default function ServiceAreasPage() {
  // Get all state names
  const stateNames = Object.keys(states).sort()

  // Calculate total cities
  const totalCities = stateNames.reduce((total, state) => {
    return total + (states[state as keyof typeof states]?.length || 0)
  }, 0)

  // Last updated date
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // JSON-LD structured data for BroadbandService
  const broadbandServiceSchema = {
    "@context": "https://schema.org",
    "@type": "BroadbandService",
    name: "Metronet Fiber Internet",
    provider: {
      "@type": "Organization",
      name: "Metronet",
      url: "https://metroconet.com",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: "Fiber Internet",
    offers: {
      "@type": "Offer",
      price: "60.00",
      priceCurrency: "USD",
      description: "Starting at $60/month with First Month FREE + $100 Visa Gift Card on select plans",
    },
  }

  // JSON-LD structured data for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Metronet fiber internet available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Metronet currently provides fiber internet service in ${totalCities} cities across ${stateNames.length} states, including ${stateNames.slice(0, 5).join(", ")}, and more. We're continuously expanding to new areas.`,
        },
      },
      {
        "@type": "Question",
        name: "How can I check if Metronet is available at my address?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can check Metronet availability at your specific address by using our online availability checker tool or by calling our customer service team at 1-877-407-3224.",
        },
      },
      {
        "@type": "Question",
        name: "What internet speeds does Metronet offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Metronet offers symmetrical fiber internet speeds from 500 Mbps to 5 Gig across all our service areas. All plans feature the same upload and download speeds, which is ideal for video conferencing, cloud backups, gaming, and streaming.",
        },
      },
      {
        "@type": "Question",
        name: "Does Metronet have data caps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, Metronet does not impose data caps on any of our internet plans across all service areas. You can stream, download, and browse without limits, and we never charge overage fees.",
        },
      },
      {
        "@type": "Question",
        name: "Are there any special offers for new Metronet customers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! New Metronet customers can currently get their first month FREE plus a $100 Visa Gift Card on select plans. We also offer regional promotions that vary by service area.",
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <GoogleAnalytics />
      {/* Breadcrumb navigation for SEO */}
      <nav className="py-2 px-4 bg-[#212145]" aria-label="Breadcrumb">
        <ol className="flex text-xs text-gray-400 max-w-6xl mx-auto">
          <li>
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link href="/check-availability" className="hover:text-white">
              Availability
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-white font-medium">Service Areas</li>
        </ol>
      </nav>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(broadbandServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section - Reduced top padding */}
      <section className="relative pt-8 pb-16 px-4 overflow-hidden bg-gradient-to-br from-[#000000] to-[#212145]">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-20">
            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#964DFF" />
                  <stop offset="100%" stopColor="#00A89C" />
                </linearGradient>
              </defs>
              <path d="M0,0 L1000,0 L1000,1000 L0,1000 Z" fill="none" stroke="url(#gradient)" strokeWidth="2" />
              <circle cx="500" cy="500" r="300" fill="none" stroke="url(#gradient)" strokeWidth="2" />
              <circle cx="500" cy="500" r="400" fill="none" stroke="url(#gradient)" strokeWidth="1" />
              <circle cx="500" cy="500" r="200" fill="none" stroke="url(#gradient)" strokeWidth="1" />
              <path d="M200,200 L800,800" stroke="url(#gradient)" strokeWidth="2" />
              <path d="M800,200 L200,800" stroke="url(#gradient)" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#000000] to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-[#f0f0ff] to-[#964DFF] drop-shadow-sm">
                Metronet Fiber Internet
              </span>
              <span className="text-[#00C800] drop-shadow-sm ml-2">Service Areas</span>
            </h1>

            <div className="max-w-3xl">
              <p className="text-sm md:text-base text-white/90 mb-6 leading-relaxed">
                Metronet provides high-speed fiber internet service across {stateNames.length} states and growing. Enjoy
                symmetrical speeds up to 5 Gig—starting at just{" "}
                <span className="font-bold text-[#00C800]">$60/month</span>. Plus, get your{" "}
                <span className="font-bold text-[#00C800]">first month FREE</span> and receive a{" "}
                <span className="font-bold text-[#00C800]">$100 Visa® Gift Card</span> with select plans.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-3 w-full max-w-lg">
              <Link href="/plans-pricing" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-[#964DFF] hover:bg-[#7a3fd0] text-white">
                  View Plans & Pricing
                </Button>
              </Link>
              <Link href="/check-availability" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-[#00A89C] text-[#00A89C] hover:bg-[#00A89C]/10 bg-transparent"
                >
                  Check Availability
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* States Section */}
      <section className="py-16 px-4 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Browse Metronet Service Areas by <span className="text-[#964DFF]">State</span>
          </h2>

          <p className="text-center text-[#FFFFFF] mb-12 max-w-3xl mx-auto">
            Metronet currently provides fiber internet service in {stateNames.length} states, with new areas being added
            regularly. Select your state to see detailed coverage information and city-specific offers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {stateNames.map((stateName) => {
              const citiesCount = states[stateName as keyof typeof states]?.length || 0
              const stateAbbr = getStateAbbreviation(stateName)
              return (
                <Link
                  key={stateName}
                  href={`/metronet-state/${stateToSlug(stateName)}`}
                  className="bg-[#212145] p-6 rounded-lg hover:bg-[#212145]/80 transition-colors border border-[#6E6E70] hover:border-[#964DFF] group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold flex items-center">
                      <Globe className="text-[#00A89C] mr-2 h-5 w-5" />
                      {stateName}
                    </h3>
                    <span className="text-sm bg-[#000000] px-2 py-1 rounded-md">{stateAbbr}</span>
                  </div>
                  <p className="text-[#FFFFFF] mb-4">
                    Available in {citiesCount} {citiesCount === 1 ? "city" : "cities"}
                  </p>
                  <div className="flex items-center text-[#964DFF] group-hover:text-[#7a3fd0]">
                    <span className="mr-1">View details</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Summary Section - Optimized for Featured Snippets */}
      <section className="py-8 px-4 bg-[#000000] border-b border-[#6E6E70]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#212145] p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Metronet Fiber Internet Coverage Overview</h2>
            <p className="text-[#FFFFFF] mb-4">
              Metronet currently offers 100% fiber internet service across {stateNames.length} states, with availability
              in {totalCities} cities and growing. Our fiber network delivers symmetrical speeds from 500 Mbps to 5 Gbps
              with 99.9% reliability, ensuring consistent performance for homes and businesses in our service areas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-[#000000] p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400">States Served</div>
                <div className="font-bold text-2xl text-[#00C800]">{stateNames.length}</div>
              </div>
              <div className="bg-[#000000] p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400">Cities Covered</div>
                <div className="font-bold text-2xl text-[#00C800]">{totalCities}</div>
              </div>
              <div className="bg-[#000000] p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400">Network Reliability</div>
                <div className="font-bold text-2xl text-[#00C800]">99.9%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Infrastructure Section */}
      <section className="py-16 px-4 bg-[#212145]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Network className="h-8 w-8 text-[#00A89C] mr-3" />
            <h2 className="text-3xl font-bold">Metronet's Fiber Network Infrastructure</h2>
          </div>

          <p className="text-center text-[#FFFFFF] mb-8 max-w-3xl mx-auto">
            Our state-of-the-art fiber optic network delivers unparalleled speed, reliability, and performance across
            all our service areas.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-4">100% Fiber-to-the-Home Technology</h3>
              <p className="text-[#FFFFFF] mb-4">
                Unlike cable providers that use hybrid networks, Metronet delivers 100% fiber directly to your home or
                business. This means you get the full benefits of fiber optic technology without the bottlenecks of
                traditional infrastructure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Dedicated fiber connection to each home</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>No shared bandwidth with neighbors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Consistent speeds even during peak usage times</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-4">Network Performance Metrics</h3>
              <p className="text-[#FFFFFF] mb-4">
                Our fiber network consistently outperforms traditional cable and DSL providers across all key metrics in
                every service area.
              </p>
              <div className="space-y-4">
                <div className="bg-[#212145] p-4 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Download Speed</span>
                    <span className="text-sm text-[#00C800]">Up to 5 Gbps</span>
                  </div>
                  <div className="w-full bg-[#000000] rounded-full h-2.5">
                    <div className="bg-[#00C800] h-2.5 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div className="bg-[#212145] p-4 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Upload Speed</span>
                    <span className="text-sm text-[#00C800]">Up to 5 Gbps</span>
                  </div>
                  <div className="w-full bg-[#000000] rounded-full h-2.5">
                    <div className="bg-[#00C800] h-2.5 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div className="bg-[#212145] p-4 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Latency</span>
                    <span className="text-sm text-[#00C800]">5-10ms</span>
                  </div>
                  <div className="w-full bg-[#000000] rounded-full h-2.5">
                    <div className="bg-[#00C800] h-2.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="bg-[#212145] p-4 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Reliability</span>
                    <span className="text-sm text-[#00C800]">99.9%</span>
                  </div>
                  <div className="w-full bg-[#000000] rounded-full h-2.5">
                    <div className="bg-[#00C800] h-2.5 rounded-full" style={{ width: "99.9%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70]">
            <h3 className="text-xl font-semibold mb-4">Expansion and Investment</h3>
            <p className="text-[#FFFFFF] mb-4">
              Metronet is continuously expanding our fiber network to reach more communities. Our multi-year expansion
              plan includes investing over $1 billion in infrastructure development to bring fiber internet to
              underserved areas across the United States.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#212145] p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400">Miles of Fiber</div>
                <div className="font-bold text-xl text-[#00C800]">10,000+</div>
              </div>
              <div className="bg-[#212145] p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400">Infrastructure Investment</div>
                <div className="font-bold text-xl text-[#00C800]">$1B+</div>
              </div>
              <div className="bg-[#212145] p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400">New Markets (2023-2024)</div>
                <div className="font-bold text-xl text-[#00C800]">25+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose <span className="text-[#00C800]">Metronet</span> Fiber Internet
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70] hover:border-[#964DFF] transition-colors">
              <div className="flex items-start mb-4">
                <Zap className="text-[#00C800] mr-3 h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl font-semibold">100% Fiber Network</h3>
              </div>
              <p className="text-[#FFFFFF]">
                Unlike cable providers, Metronet delivers internet over a dedicated 100% fiber optic network for maximum
                reliability and consistent speeds, regardless of your location.
              </p>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70] hover:border-[#964DFF] transition-colors">
              <div className="flex items-start mb-4">
                <BarChart className="text-[#00A89C] mr-3 h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Symmetrical Speeds</h3>
              </div>
              <p className="text-[#FFFFFF]">
                Get the same upload and download speeds - perfect for residents who work from home, game online, or
                upload large files. Available in all our service areas.
              </p>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70] hover:border-[#964DFF] transition-colors">
              <div className="flex items-start mb-4">
                <Clock className="text-[#FFFF00] mr-3 h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl font-semibold">No Data Caps</h3>
              </div>
              <p className="text-[#FFFFFF]">
                Stream, download, and browse without limits. Metronet never caps your data or charges overage fees,
                regardless of which service area you're in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison with Competitors */}
      <section className="py-16 px-4 bg-[#212145]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How Metronet Compares to Other Providers</h2>

          <p className="text-center text-[#FFFFFF] mb-8 max-w-3xl mx-auto">
            See how Metronet's fiber internet service stacks up against cable and DSL providers across our service
            areas.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-[#000000] rounded-lg border border-[#6E6E70]">
              <thead>
                <tr className="bg-[#212145]">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Metronet Fiber</th>
                  <th className="p-4 text-center">Cable Providers</th>
                  <th className="p-4 text-center">DSL Providers</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#6E6E70]">
                  <td className="p-4">Max Download Speed</td>
                  <td className="p-4 text-center text-[#00C800] font-bold">5 Gbps</td>
                  <td className="p-4 text-center">1 Gbps</td>
                  <td className="p-4 text-center">100 Mbps</td>
                </tr>
                <tr className="border-t border-[#6E6E70]">
                  <td className="p-4">Max Upload Speed</td>
                  <td className="p-4 text-center text-[#00C800] font-bold">5 Gbps</td>
                  <td className="p-4 text-center">35 Mbps</td>
                  <td className="p-4 text-center">20 Mbps</td>
                </tr>
                <tr className="border-t border-[#6E6E70]">
                  <td className="p-4">Symmetrical Speeds</td>
                  <td className="p-4 text-center text-[#00C800] font-bold">Yes</td>
                  <td className="p-4 text-center">No</td>
                  <td className="p-4 text-center">No</td>
                </tr>
                <tr className="border-t border-[#6E6E70]">
                  <td className="p-4">Data Caps</td>
                  <td className="p-4 text-center text-[#00C800] font-bold">None</td>
                  <td className="p-4 text-center">1-2 TB</td>
                  <td className="p-4 text-center">150-1000 GB</td>
                </tr>
                <tr className="border-t border-[#6E6E70]">
                  <td className="p-4">Reliability</td>
                  <td className="p-4 text-center text-[#00C800] font-bold">99.9%</td>
                  <td className="p-4 text-center">95-98%</td>
                  <td className="p-4 text-center">90-95%</td>
                </tr>
                <tr className="border-t border-[#6E6E70]">
                  <td className="p-4">Weather Impact</td>
                  <td className="p-4 text-center text-[#00C800] font-bold">Minimal</td>
                  <td className="p-4 text-center">Moderate</td>
                  <td className="p-4 text-center">High</td>
                </tr>
                <tr className="border-t border-[#6E6E70]">
                  <td className="p-4">Price-to-Performance</td>
                  <td className="p-4 text-center text-[#00C800] font-bold">Excellent</td>
                  <td className="p-4 text-center">Good</td>
                  <td className="p-4 text-center">Fair</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Award className="h-8 w-8 text-[#FFFF00] mr-3" />
            <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          </div>

          <p className="text-center text-[#FFFFFF] mb-8 max-w-3xl mx-auto">
            Hear from real Metronet customers across our service areas about their experience with our fiber internet
            service.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <div className="flex text-[#FFFF00] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="italic text-[#FFFFFF] mb-4">
                "After years of struggling with cable internet, switching to Metronet was like night and day. The speeds
                are consistently fast, even during peak hours, and I've never experienced an outage."
              </p>
              <div className="flex items-center">
                <div className="mr-3 bg-[#964DFF] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <p className="font-semibold">James D.</p>
                  <p className="text-sm text-gray-400">Indianapolis, IN</p>
                </div>
              </div>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <div className="flex text-[#FFFF00] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="italic text-[#FFFFFF] mb-4">
                "Working from home requires reliable internet, and Metronet delivers. The symmetrical speeds make video
                conferencing and file uploads so much smoother. Customer service has been excellent too."
              </p>
              <div className="flex items-center">
                <div className="mr-3 bg-[#00A89C] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div>
                  <p className="font-semibold">Sarah M.</p>
                  <p className="text-sm text-gray-400">Lexington, KY</p>
                </div>
              </div>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <div className="flex text-[#FFFF00] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="italic text-[#FFFFFF] mb-4">
                "As a gamer, low latency is crucial. Metronet's fiber connection gives me consistently low ping times
                and the no data cap policy means I can download as many games as I want without worrying."
              </p>
              <div className="flex items-center">
                <div className="mr-3 bg-[#00C800] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                  RT
                </div>
                <div>
                  <p className="font-semibold">Ryan T.</p>
                  <p className="text-sm text-gray-400">Rochester, MN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#212145]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <FileText className="h-8 w-8 text-[#00A89C] mr-3" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">Where is Metronet fiber internet available?</h3>
              <p className="text-[#FFFFFF]">
                Metronet currently provides fiber internet service in {totalCities} cities across {stateNames.length}{" "}
                states, including {stateNames.slice(0, 5).join(", ")}, and more. We're continuously expanding to new
                areas. To check if service is available at your specific address, use our{" "}
                <Link href="/check-availability" className="text-[#964DFF] hover:underline">
                  availability checker
                </Link>{" "}
                or call our customer service team at 1-877-407-3224.
              </p>
            </div>

            <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">How can I check if Metronet is available at my address?</h3>
              <p className="text-[#FFFFFF]">
                You can check Metronet availability at your specific address by using our online{" "}
                <Link href="/check-availability" className="text-[#964DFF] hover:underline">
                  availability checker tool
                </Link>{" "}
                or by calling our customer service team at 1-877-407-3224. Our representatives can provide you with the
                most up-to-date information about service availability in your area.
              </p>
            </div>

            <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">What internet speeds does Metronet offer?</h3>
              <p className="text-[#FFFFFF]">
                Metronet offers symmetrical fiber internet speeds from 500 Mbps to 5 Gig across all our service areas.
                All plans feature the same upload and download speeds, which is ideal for video conferencing, cloud
                backups, gaming, and streaming. Visit our{" "}
                <Link href="/plans-pricing" className="text-[#964DFF] hover:underline">
                  plans and pricing page
                </Link>{" "}
                for detailed information about our internet packages.
              </p>
            </div>

            <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">Does Metronet have data caps?</h3>
              <p className="text-[#FFFFFF]">
                No, Metronet does not impose data caps on any of our internet plans across all service areas. You can
                stream, download, and browse without limits, and we never charge overage fees. This applies to all
                customers in all of our service areas.
              </p>
            </div>

            <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">Are there any special offers for new Metronet customers?</h3>
              <p className="text-[#FFFFFF]">
                Yes! New Metronet customers can currently get their first month FREE plus a $100 Visa Gift Card on
                select plans. We also offer regional promotions that vary by service area. Visit our{" "}
                <Link href="/promotions" className="text-[#964DFF] hover:underline">
                  promotions page
                </Link>{" "}
                or contact our sales team to learn about the latest offers available in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Plans Section */}
      <section className="py-16 px-4 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Metronet Expansion Plans</h2>

          <p className="text-center text-[#FFFFFF] mb-8 max-w-3xl mx-auto">
            Metronet is committed to expanding our fiber network to reach more communities across the United States. Our
            multi-year expansion plan includes significant investments in infrastructure development.
          </p>

          <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70] mb-8">
            <h3 className="text-xl font-semibold mb-4">Current Expansion Initiatives</h3>
            <p className="text-[#FFFFFF] mb-4">
              We're actively expanding our fiber network in existing states while also entering new markets. Our
              construction teams are working diligently to bring fiber internet to more neighborhoods every day.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#000000] p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Map className="h-5 w-5 text-[#00A89C] mr-2" />
                  New Market Development
                </h4>
                <p className="text-sm text-gray-300">
                  Metronet is entering several new markets in 2023-2024, with a focus on underserved communities that
                  lack access to high-speed fiber internet options.
                </p>
              </div>
              <div className="bg-[#000000] p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Network className="h-5 w-5 text-[#00A89C] mr-2" />
                  Existing Market Densification
                </h4>
                <p className="text-sm text-gray-300">
                  We're also expanding coverage within our existing markets, ensuring more residents and businesses can
                  access our fiber internet service.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
            <h3 className="text-xl font-semibold mb-4">Future Service Areas</h3>
            <p className="text-[#FFFFFF] mb-4">
              While we can't disclose all of our future expansion plans, we're committed to bringing Metronet fiber
              internet to more communities across the United States. If Metronet isn't currently available in your area,
              you can express interest by signing up for updates.
            </p>
            <div className="flex justify-center">
              <Link href="/check-availability">
                <Button className="bg-[#964DFF] hover:bg-[#7a3fd0] text-white">Check Future Availability</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#000000]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Better Internet?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#FFFFFF]">
            Join thousands of satisfied customers who have switched to Metronet's fiber internet. Get your first month
            FREE plus a $100 Visa Gift Card on select plans!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/check-availability">
              <Button size="lg" className="w-full sm:w-auto bg-[#964DFF] hover:bg-[#7a3fd0] text-white">
                Check Availability
              </Button>
            </Link>
            <Link href="/plans-pricing">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-[#00A89C] text-[#00A89C] hover:bg-[#00A89C]/10"
              >
                View Plans & Pricing
              </Button>
            </Link>
          </div>

          <p className="text-[#6E6E70] text-sm mt-8">
            Last updated: {lastUpdated} | This page is regularly reviewed for accuracy
          </p>
        </div>
      </section>
    </div>
  )
}
