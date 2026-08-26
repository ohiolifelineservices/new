import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Star,
  Zap,
  Shield,
  Clock,
  Award,
  Calendar,
  FileText,
  Users,
  Map,
  Mail,
  Building,
  Network,
  BarChart,
  MapPin,
  ArrowRight,
  Globe,
  GraduationCap,
  Landmark,
} from "lucide-react"
import {
  states,
  slugToState,
  getAllStateSlugs,
  getCitiesForState,
  cityToSlug,
  getStateAbbreviation,
  getStateData,
} from "@/lib/city-data"
import { notFound } from "next/navigation"
import { format } from "date-fns"

// Define the correct type for params in dynamic routes
type Props = {
  params: { slug: string }
}

// This function generates all possible paths at build time
export async function generateStaticParams() {
  try {
    // Generate paths for all states
    const allStateSlugs = getAllStateSlugs()

    // Log for debugging
    console.log(`Generating static params for ${allStateSlugs.length} states`)

    return allStateSlugs.map((slug) => ({
      slug,
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    // Return at least one valid path to prevent build failures
    return [{ slug: "indiana" }]
  }
}

// Generate metadata for each state page
export function generateMetadata({ params }: Props): Metadata {
  // Add null check for params.slug
  if (!params || !params.slug) {
    return {
      title: "Metronet Fiber Internet | First Month FREE + $100 Gift Card",
      description:
        "Experience lightning-fast fiber internet from Metronet starting at $60. Get first month FREE + $100 Visa Gift Card on select plans.",
    }
  }

  // Convert the slug back to a proper state name with fallback
  const stateName = slugToState(params.slug)
  const stateAbbr = getStateAbbreviation(stateName)
  const citiesCount = states[stateName as keyof typeof states]?.length || 0

  return {
    title: `Metronet ${stateName} Special Offer | FREE Month + $100 Gift Card`,
    description: `Limited-time offer for ${stateName} residents! Get Metronet Fiber with no deposit, FREE first month, and $100 gift card. Speeds up to 5 Gig with no data caps or contracts.`,
    keywords: `Metronet, ${stateName}, fiber internet, high-speed internet, internet service provider, ${stateName} internet, first month free, $100 gift card`,
    openGraph: {
      title: `Metronet ${stateName} Special Offer | FREE Month + $100 Gift Card`,
      description: `Limited-time offer for ${stateName} residents! Get Metronet Fiber with no deposit, FREE first month, and $100 gift card. Speeds up to 5 Gig.`,
      type: "website",
      url: `https://metroconet.com/metronet-state/${params.slug}`,
      images: [
        {
          url: "https://metroconet.com/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Metronet Fiber Internet in ${stateName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Metronet ${stateName} Special Offer | FREE Month + $100 Gift Card`,
      description: `Limited-time offer for ${stateName} residents! Get Metronet Fiber with no deposit, FREE first month, and $100 gift card.`,
      images: ["https://metroconet.com/images/twitter-image.jpg"],
    },
    alternates: {
      canonical: `https://metroconet.com/metronet-state/${params.slug}`,
    },
  }
}

export default function StatePage({ params }: Props) {
  // Add null check for params.slug
  if (!params || !params.slug) {
    return notFound()
  }

  // Convert the slug back to a proper state name
  const stateName = slugToState(params.slug)

  // Check if this is a valid state
  if (!states[stateName as keyof typeof states]) {
    return notFound()
  }

  // Get cities for this state
  const citiesInState = getCitiesForState(stateName)

  // Get state abbreviation
  const stateAbbr = getStateAbbreviation(stateName)

  // Get state-specific data
  const stateData = getStateData(stateName)

  // Last updated date
  const lastUpdated = format(new Date(), "MMMM d, yyyy")

  // JSON-LD structured data for BroadbandService
  const broadbandServiceSchema = {
    "@context": "https://schema.org",
    "@type": "BroadbandService",
    name: `Metronet Fiber Internet in ${stateName}`,
    provider: {
      "@type": "Organization",
      name: "Metronet",
      url: "https://metroconet.com",
    },
    areaServed: {
      "@type": "State",
      name: stateName,
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
        name: `Where is Metronet available in ${stateName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Metronet is currently available in ${citiesInState.length} cities across ${stateName}, including ${citiesInState.slice(0, 5).join(", ")}, and more. We're continuously expanding to new areas.`,
        },
      },
      {
        "@type": "Question",
        name: `What internet speeds does Metronet offer in ${stateName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Metronet offers symmetrical fiber internet speeds from 500 Mbps to 5 Gig throughout ${stateName}, with consistent performance across all service areas in the state.`,
        },
      },
      {
        "@type": "Question",
        name: `Are there any special offers for ${stateName} residents?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes! ${stateName} residents can currently get their first month FREE plus a $100 Visa Gift Card on select plans. We also offer state-specific promotions throughout the year.`,
        },
      },
      {
        "@type": "Question",
        name: `How does Metronet's fiber network in ${stateName} compare to other providers?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Metronet's 100% fiber network in ${stateName} provides symmetrical speeds (same upload and download), no data caps, and greater reliability compared to cable and DSL providers in the state.`,
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white">
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
          <li>
            <Link href="/metronet-state" className="hover:text-white">
              States
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-white font-medium">{stateName}</li>
        </ol>
      </nav>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(broadbandServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Enhanced Hero Section */}
      <section className="relative py-10 px-4 overflow-hidden bg-gradient-to-br from-[#000000] to-[#212145]">
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
          <div className="flex flex-col items-center text-center mb-2">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-[#f0f0ff] to-[#964DFF] drop-shadow-sm">
                Metronet Fiber Internet in
              </span>
              <span className="text-[#00C800] drop-shadow-sm ml-2">{stateName}</span>
            </h1>

            <div className="max-w-3xl">
              <p className="text-sm md:text-base text-white/90 mb-3 leading-relaxed">
                Metronet provides high-speed fiber internet service in {citiesInState.length} cities across {stateName}.
                Enjoy symmetrical speeds up to 5 Gig—starting at just{" "}
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

          {/* Jump Links Navigation */}
          <div className="mt-4 pt-3 border-t border-white/10">
            <nav className="flex flex-wrap justify-center gap-2 md:gap-4" aria-label="Page Navigation">
              <a
                href="#summary"
                className="px-4 py-2 text-sm rounded-full bg-[#212145] text-white hover:bg-[#964DFF]/20 transition-colors border border-[#6E6E70] hover:border-[#964DFF]"
              >
                Quick Summary
              </a>
              <a
                href="#cities"
                className="px-4 py-2 text-sm rounded-full bg-[#212145] text-white hover:bg-[#964DFF]/20 transition-colors border border-[#6E6E70] hover:border-[#964DFF]"
              >
                Cities
              </a>
              <a
                href="#benefits"
                className="px-4 py-2 text-sm rounded-full bg-[#212145] text-white hover:bg-[#964DFF]/20 transition-colors border border-[#6E6E70] hover:border-[#964DFF]"
              >
                Benefits
              </a>
              <a
                href="#plans"
                className="px-4 py-2 text-sm rounded-full bg-[#212145] text-white hover:bg-[#964DFF]/20 transition-colors border border-[#6E6E70] hover:border-[#964DFF]"
              >
                Plans
              </a>
              <a
                href="#initiatives"
                className="px-4 py-2 text-sm rounded-full bg-[#212145] text-white hover:bg-[#964DFF]/20 transition-colors border border-[#6E6E70] hover:border-[#964DFF]"
              >
                Initiatives
              </a>
              <a
                href="#faq"
                className="px-4 py-2 text-sm rounded-full bg-[#212145] text-white hover:bg-[#964DFF]/20 transition-colors border border-[#6E6E70] hover:border-[#964DFF]"
              >
                FAQ
              </a>
            </nav>
          </div>

          <div className="mt-4 flex items-center justify-center text-sm text-[#6E6E70]">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Quick Summary Section - Optimized for Featured Snippets */}
      <section className="py-8 px-4 bg-[#000000] border-b border-[#6E6E70]" id="summary">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#212145] p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Quick Summary: Metronet in {stateName}</h2>
            <p className="text-[#FFFFFF] mb-4">
              Metronet offers 100% fiber internet service across {stateName}, currently available in{" "}
              {citiesInState.length} cities including {stateData.majorMarkets.slice(0, 3).join(", ")}, and more.
              Launched in {stateData.launchYear}, our network now spans over{" "}
              {stateData.totalFiberMiles.toLocaleString()} miles of fiber throughout the state, delivering symmetrical
              speeds from 500 Mbps to 5 Gbps starting at $60/month.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-[#000000] p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-[#00C800]">Metronet in {stateName}: Key Facts</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>
                    Available in {citiesInState.length} cities across {stateName}
                  </li>
                  <li>Network reliability: {stateData.networkReliability}</li>
                  <li>Average measured speed: {stateData.averageSpeed}</li>
                  <li>No data caps or contracts</li>
                  <li>Free eero router rental</li>
                </ul>
              </div>
              <div className="bg-[#000000] p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-[#00A89C]">Special {stateName} Offers</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>First month FREE + $100 Visa Gift Card</li>
                  <li>{stateData.stateSpecificOffers[0].name}</li>
                  <li>{stateData.stateSpecificOffers[1].name}</li>
                  <li>No installation fees</li>
                  <li>30-day satisfaction guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities in State Section */}
      <section className="py-16 px-4 bg-[#212145]" id="cities">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Map className="h-8 w-8 text-[#00A89C] mr-3" />
            <h2 className="text-3xl font-bold">Metronet Cities in {stateName}</h2>
          </div>

          <p className="text-center text-[#FFFFFF] mb-8 max-w-3xl mx-auto">
            Metronet currently provides fiber internet service in {citiesInState.length} cities across {stateName}, with
            new areas being added regularly. Browse our service locations:
          </p>

          <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70] mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 text-[#00C800] mr-2" />
              Cities with Metronet Service in {stateName}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {citiesInState.map((city, index) => (
                <Link
                  key={index}
                  href={`/metronet/${cityToSlug(city)}`}
                  className="bg-[#212145] p-3 rounded-lg hover:bg-[#964DFF]/20 transition-colors flex items-center border border-[#6E6E70] hover:border-[#964DFF]"
                >
                  <MapPin className="h-4 w-4 text-[#964DFF] mr-2 flex-shrink-0" />
                  <span className="text-sm truncate">{city}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70]">
            <h3 className="text-xl font-semibold mb-4">Major Markets in {stateName}</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {stateData.majorMarkets.slice(0, 3).map((city, index) => (
                <div key={index} className="bg-[#212145] p-5 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Building className="h-5 w-5 text-[#00A89C] mr-2" />
                    {city}
                  </h4>
                  <p className="text-sm text-gray-300 mb-3">
                    {index === 0
                      ? `One of our largest service areas in ${stateName} with extensive fiber coverage.`
                      : index === 1
                        ? `A key market with high-performance fiber infrastructure throughout the city.`
                        : `Comprehensive fiber coverage with excellent reliability and performance metrics.`}
                  </p>
                  <Link href={`/metronet/${cityToSlug(city)}`}>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-[#964DFF] text-[#964DFF] hover:bg-[#964DFF]/10"
                    >
                      View {city} Details
                    </Button>
                  </Link>
                </div>
              ))}
            </div>

            <div className="bg-[#212145] p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Expansion Plans in {stateName}</h4>
              <p className="text-gray-300 mb-4">{stateData.expansionPlans}</p>
              <div className="flex justify-center">
                <Link href="/check-availability">
                  <Button size="sm" className="bg-[#00A89C] hover:bg-[#008a80] text-white">
                    Check Your Address
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* State Network Overview */}
      <section className="py-16 px-4 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Metronet's Fiber Network in <span className="text-[#964DFF]">{stateName}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <div className="flex items-start mb-4">
                <Network className="text-[#00A89C] mr-3 h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl font-semibold">State Network Overview</h3>
              </div>
              <p className="text-[#FFFFFF] mb-4">{stateData.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#000000] p-3 rounded-lg text-center">
                  <div className="text-sm text-gray-400">Fiber Miles</div>
                  <div className="font-bold text-xl text-[#00C800]">{stateData.totalFiberMiles.toLocaleString()}+</div>
                </div>
                <div className="bg-[#000000] p-3 rounded-lg text-center">
                  <div className="text-sm text-gray-400">Launch Year</div>
                  <div className="font-bold text-xl text-[#00C800]">{stateData.launchYear}</div>
                </div>
                <div className="bg-[#000000] p-3 rounded-lg text-center">
                  <div className="text-sm text-gray-400">Reliability</div>
                  <div className="font-bold text-xl text-[#00C800]">{stateData.networkReliability}</div>
                </div>
                <div className="bg-[#000000] p-3 rounded-lg text-center">
                  <div className="text-sm text-gray-400">Avg. Speed</div>
                  <div className="font-bold text-xl text-[#00C800]">{stateData.averageSpeed}</div>
                </div>
              </div>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <div className="flex items-start mb-4">
                <BarChart className="text-[#00A89C] mr-3 h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Performance Metrics</h3>
              </div>
              <p className="text-[#FFFFFF] mb-4">
                Our fiber network in {stateName} consistently outperforms traditional cable and DSL providers across all
                key metrics:
              </p>
              <div className="space-y-4">
                <div className="bg-[#000000] p-4 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Download Speed</span>
                    <span className="text-sm text-[#00C800]">Up to 5 Gbps</span>
                  </div>
                  <div className="w-full bg-[#212145] rounded-full h-2.5">
                    <div className="bg-[#00C800] h-2.5 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div className="bg-[#000000] p-4 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Upload Speed</span>
                    <span className="text-sm text-[#00C800]">Up to 5 Gbps</span>
                  </div>
                  <div className="w-full bg-[#212145] rounded-full h-2.5">
                    <div className="bg-[#00C800] h-2.5 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div className="bg-[#000000] p-4 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Latency</span>
                    <span className="text-sm text-[#00C800]">5-10ms</span>
                  </div>
                  <div className="w-full bg-[#212145] rounded-full h-2.5">
                    <div className="bg-[#00C800] h-2.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="bg-[#000000] p-4 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Reliability</span>
                    <span className="text-sm text-[#00C800]">{stateData.networkReliability}</span>
                  </div>
                  <div className="w-full bg-[#212145] rounded-full h-2.5">
                    <div className="bg-[#00C800] h-2.5 rounded-full" style={{ width: "99.9%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4 bg-[#212145]" id="benefits">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why <span className="text-[#964DFF]">{stateName}</span> Residents Choose Metronet Fiber Internet
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70] hover:border-[#964DFF] transition-colors">
              <div className="flex items-start mb-4">
                <Zap className="text-[#00C800] mr-3 h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl font-semibold">100% Fiber Network</h3>
              </div>
              <p className="text-[#FFFFFF]">
                Unlike cable providers in {stateName}, Metronet delivers internet over a dedicated 100% fiber optic
                network for maximum reliability and consistent speeds.
              </p>
            </div>

            <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70] hover:border-[#964DFF] transition-colors">
              <div className="flex items-start mb-4">
                <Shield className="text-[#00A89C] mr-3 h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Symmetrical Speeds</h3>
              </div>
              <p className="text-[#FFFFFF]">
                Get the same upload and download speeds - perfect for {stateName} residents who work from home, game
                online, or upload large files.
              </p>
            </div>

            <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70] hover:border-[#964DFF] transition-colors">
              <div className="flex items-start mb-4">
                <Clock className="text-[#FFFF00] mr-3 h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl font-semibold">No Data Caps</h3>
              </div>
              <p className="text-[#FFFFFF]">
                Stream, download, and browse without limits in {stateName}. Metronet never caps your data or charges
                overage fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Highlight Section */}
      <section className="py-16 px-4 bg-[#000000]" id="plans">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Internet Plans Available in {stateName}</h2>
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto text-[#FFFFFF]">
            Choose the perfect plan for your {stateName} home or business, with options for every need and budget.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-[#212145] rounded-lg overflow-hidden border border-[#6E6E70] hover:border-[#964DFF] transition-all duration-300">
              <div className="bg-[#000000] p-4">
                <h3 className="text-xl font-bold text-white">Starter</h3>
                <p className="text-[#FFFFFF]">Perfect for everyday internet users</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#00C800]">$60</span>
                  <span className="text-[#FFFFFF]">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-[#FFFFFF]">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0" />
                    <span>500 Mbps symmetrical speeds</span>
                  </li>
                  <li className="flex items-center text-[#FFFFFF]">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0" />
                    <span>No data caps</span>
                  </li>
                  <li className="flex items-center text-[#FFFFFF]">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0" />
                    <span>Free installation</span>
                  </li>
                </ul>
                <Link href="/plans-pricing">
                  <Button className="w-full bg-[#964DFF] hover:bg-[#7a3fd0] text-white">Learn More</Button>
                </Link>
              </div>
            </div>

            {/* Popular Plan */}
            <div className="bg-[#212145] rounded-lg overflow-hidden border-2 border-[#964DFF] transition-all duration-300 relative transform scale-105">
              <div className="absolute top-0 right-0 bg-[#964DFF] text-white px-4 py-1 text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="bg-[#000000] p-4 text-white">
                <h3 className="text-xl font-bold">1 Gig</h3>
                <p>Ideal for multiple users & streaming</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#00C800]">$70</span>
                  <span className="text-[#FFFFFF]">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-[#FFFFFF]">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0" />
                    <span>1 Gig symmetrical speeds</span>
                  </li>
                  <li className="flex items-center text-[#FFFFFF]">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0" />
                    <span>No data caps</span>
                  </li>
                  <li className="flex items-center text-[#FFFFFF]">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0" />
                    <span>Free installation</span>
                  </li>
                  <li className="flex items-center text-[#FFFFFF]">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0" />
                    <span>First month FREE</span>
                  </li>
                  <li className="flex items-center text-[#FFFFFF]">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0" />
                    <span>$100 Visa Gift Card</span>
                  </li>
                </ul>
                <Link href="/plans-pricing">
                  <Button className="w-full bg-[#964DFF] hover:bg-[#7a3fd0] text-white">Learn More</Button>
                </Link>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-[#212145] rounded-lg overflow-hidden border border-[#6E6E70] hover:border-[#964DFF] transition-all duration-300">
              <div className="bg-[#000000] p-4">
                <h3 className="text-xl font-bold text-white">Multi-Gig</h3>
                <p className="text-[#FFFFFF]">For power users & gamers</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#00C800]">$89.95</span>
                  <span className="text-[#FFFFFF]">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-[#FFFFFF]">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0" />
                    <span>2 Gig symmetrical speeds</span>
                  </li>
                  <li className="flex items-center text-[#FFFFFF]">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0" />
                    <span>No data caps</span>
                  </li>
                  <li className="flex items-center text-[#FFFFFF]">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0" />
                    <span>Free installation</span>
                  </li>
                  <li className="flex items-center text-[#FFFFFF]">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0" />
                    <span>First month FREE</span>
                  </li>
                  <li className="flex items-center text-[#FFFFFF]">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0" />
                    <span>$100 Visa Gift Card</span>
                  </li>
                </ul>
                <Link href="/plans-pricing">
                  <Button className="w-full bg-[#964DFF] hover:bg-[#7a3fd0] text-white">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-[#6E6E70] mb-4">
              *Offers available to new {stateName} customers. Terms and conditions apply.
            </p>
            <Link href="/plans-pricing">
              <Button size="lg" className="bg-[#964DFF] hover:bg-[#7a3fd0] text-white">
                View All Plans & Special Offers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* State-Specific Offers */}
      <section className="py-16 px-4 bg-[#212145]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Special Offers for <span className="text-[#00C800]">{stateName}</span> Residents
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {stateData.stateSpecificOffers.map((offer, index) => (
              <div key={index} className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70]">
                <h3 className="text-xl font-semibold mb-3">{offer.name}</h3>
                <p className="text-[#FFFFFF] mb-4">{offer.description}</p>
                <Link href="/plans-pricing">
                  <Button className="bg-[#00A89C] hover:bg-[#008a80] text-white">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives Section */}
      <section className="py-16 px-4 bg-[#000000]" id="initiatives">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Metronet's Community Initiatives in {stateName}</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {stateData.communityInitiatives.map((initiative, index) => (
              <div key={index} className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
                <div className="flex items-start mb-4">
                  {index === 0 ? (
                    <Globe className="text-[#964DFF] mr-3 h-6 w-6 flex-shrink-0" />
                  ) : (
                    <GraduationCap className="text-[#964DFF] mr-3 h-6 w-6 flex-shrink-0" />
                  )}
                  <h3 className="text-xl font-semibold">{initiative.name}</h3>
                </div>
                <p className="text-[#FFFFFF] mb-4">{initiative.description}</p>
                <div className="flex items-center text-[#00A89C] text-sm">
                  <Landmark className="mr-2 h-4 w-4" />
                  <span>Ongoing initiative throughout {stateName}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
            <h3 className="text-xl font-semibold mb-4">Our Commitment to {stateName}</h3>
            <p className="text-[#FFFFFF] mb-4">
              At Metronet, we're committed to more than just providing fast internet. We're invested in the communities
              we serve across {stateName}, supporting local initiatives, creating jobs, and helping bridge the digital
              divide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#000000] p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400">Local Jobs Created</div>
                <div className="font-bold text-xl text-[#00C800]">200+</div>
              </div>
              <div className="bg-[#000000] p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400">Community Investment</div>
                <div className="font-bold text-xl text-[#00C800]">$5M+</div>
              </div>
              <div className="bg-[#000000] p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400">Digital Literacy Programs</div>
                <div className="font-bold text-xl text-[#00C800]">12</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-[#212145]">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 bg-[#000000] rounded-full mb-4 mx-auto">
            <Award className="h-6 w-6 text-[#FFFF00]" />
          </div>
          <h2 className="text-3xl font-bold mb-8 text-center">What {stateName} Residents Say About Metronet</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {stateData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70]">
                <div className="flex items-center mb-4">
                  <div className="flex text-[#FFFF00]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 font-semibold text-white">
                    {testimonial.name} from {testimonial.location}
                  </span>
                </div>
                <p className="italic text-[#FFFFFF]">"{testimonial.quote}"</p>
                <p className="text-[#6E6E70] text-sm mt-4">Verified Metronet customer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#000000]" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <FileText className="h-8 w-8 text-[#00A89C] mr-3" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions About Metronet in {stateName}</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">Where is Metronet available in {stateName}?</h3>
              <p className="text-[#FFFFFF]">
                Metronet is currently available in {citiesInState.length} cities across {stateName}, including{" "}
                {citiesInState.slice(0, 5).join(", ")}, and more. To check if service is available at your specific
                address, use our{" "}
                <Link href="/check-availability" className="text-[#964DFF] hover:underline">
                  availability checker
                </Link>{" "}
                or call our customer service team at 1-877-407-3224.
              </p>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">What internet speeds does Metronet offer in {stateName}?</h3>
              <p className="text-[#FFFFFF]">
                Metronet offers symmetrical fiber internet speeds from 500 Mbps to 5 Gig throughout {stateName}. All
                plans feature the same upload and download speeds, which is ideal for video conferencing, cloud backups,
                gaming, and streaming. Our network in {stateName} consistently delivers average speeds of{" "}
                {stateData.averageSpeed} with {stateData.networkReliability} reliability.
              </p>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">Are there any special offers for {stateName} residents?</h3>
              <p className="text-[#FFFFFF]">
                Yes! {stateName} residents can currently get their first month FREE plus a $100 Visa Gift Card on select
                plans. We also offer state-specific promotions like {stateData.stateSpecificOffers[0].name} and{" "}
                {stateData.stateSpecificOffers[1].name}. Visit our{" "}
                <Link href="/plans-pricing" className="text-[#964DFF] hover:underline">
                  plans and pricing page
                </Link>{" "}
                for complete details on these limited-time offers.
              </p>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">
                How does Metronet's fiber network in {stateName} compare to other providers?
              </h3>
              <p className="text-[#FFFFFF]">
                Metronet's 100% fiber network in {stateName} provides symmetrical speeds (same upload and download), no
                data caps, and greater reliability compared to cable and DSL providers in the state. Our fiber
                infrastructure spans over {stateData.totalFiberMiles.toLocaleString()} miles throughout {stateName},
                delivering consistent performance even during peak usage times.
              </p>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">
                Do I need to sign a contract for Metronet service in {stateName}?
              </h3>
              <p className="text-[#FFFFFF]">
                No, Metronet does not require long-term contracts in {stateName}. All of our plans are month-to-month,
                giving you the flexibility to change or cancel your service at any time without early termination fees.
              </p>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">How long has Metronet been operating in {stateName}?</h3>
              <p className="text-[#FFFFFF]">
                Metronet has been providing fiber internet service in {stateName} since {stateData.launchYear}. Over the
                years, we've continuously expanded our network to reach more communities throughout the state, with
                current service in {citiesInState.length} cities and plans for further expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Author Section */}
      <section className="py-16 px-4 bg-[#212145] border-t border-[#6E6E70]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">About the Author</h2>

          <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="James Davis"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">James Davis</h3>
                <p className="text-[#00C800] font-medium mb-3">Fiber Technology Specialist</p>

                <p className="text-[#FFFFFF] mb-4">
                  I've spent over 15 years in the telecommunications industry, specializing in fiber optic networks and
                  residential internet solutions. I've personally researched and analyzed Metronet's services across
                  multiple states, including {stateName}.
                </p>

                <p className="text-[#FFFFFF] mb-4">
                  My goal is to provide accurate, unbiased information to help you make the best decision for your
                  internet needs. I regularly update this guide with the latest information about Metronet's services in{" "}
                  {stateName}.
                </p>

                <div className="flex items-center space-x-4">
                  <Link
                    href="https://www.linkedin.com/in/jamesdavis"
                    className="text-[#964DFF] hover:text-[#7a3fd0] flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Users className="h-4 w-4 mr-1" /> LinkedIn
                  </Link>

                  <Link
                    href="mailto:james@example.com"
                    className="text-[#964DFF] hover:text-[#7a3fd0] flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-1" /> Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#000000] border-t border-[#6E6E70]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Better Internet in {stateName}?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#FFFFFF]">
            Join thousands of satisfied {stateName} residents who have switched to Metronet's fiber internet. Get your
            first month FREE plus a $100 Visa Gift Card on select plans!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/plans-pricing">
              <Button size="lg" className="w-full sm:w-auto bg-[#964DFF] hover:bg-[#7a3fd0] text-white">
                View Plans & Pricing
              </Button>
            </Link>
            <Link href="/check-availability">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-[#00A89C] text-[#00A89C] hover:bg-[#00A89C]/10"
              >
                Check Availability
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
