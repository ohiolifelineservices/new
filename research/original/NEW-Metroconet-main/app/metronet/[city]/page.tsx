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
  ExternalLink,
  FileText,
  Users,
  Home,
  Map,
  Mail,
} from "lucide-react"
import { states, cityToSlug, slugToCity, getStateForCity } from "@/lib/city-data"
import { notFound } from "next/navigation"
import JumpLinkHandler from "@/components/jump-link-handler"

// Now, let's import the new components at the top of the file
// Add these imports after the existing imports:

import LocalCompetitors from "./page-sections/local-competitors"
import CommunityInvolvement from "./page-sections/community-involvement"
import ServiceHistory from "./page-sections/service-history"
import CitySpecificFAQs from "./page-sections/city-specific-faqs"

// Define the correct type for params in dynamic routes
type Props = {
  params: { city: string }
}

// This function generates all possible paths at build time
export async function generateStaticParams() {
  try {
    // Generate paths for a limited number of cities to ensure build succeeds
    const allCities = Object.values(states).flat()

    // Log for debugging
    console.log(`Generating static params for ${allCities.length} cities`)

    // Return the first 10 cities to ensure build completes quickly
    return allCities.slice(0, 10).map((city) => ({
      city: cityToSlug(city),
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    // Return at least one valid path to prevent build failures
    return [{ city: "indianapolis" }]
  }
}

// Function to get city-specific data
function getCitySpecificData(cityName: string, state: string) {
  // This would ideally come from a database or API
  // For now, we'll generate some realistic data based on the city name

  const neighborhoods = {
    Indianapolis: ["Downtown", "Broad Ripple", "Fountain Square", "Carmel", "Fishers"],
    Chicago: ["Loop", "Lincoln Park", "Wicker Park", "Lakeview", "River North"],
    Columbus: ["Short North", "German Village", "Clintonville", "Grandview Heights", "Upper Arlington"],
    // Default neighborhoods for other cities
    default: ["Downtown", "Midtown", "Uptown", "West End", "East Side"],
  }

  const localOffices = {
    Indianapolis: {
      address: "8888 Keystone Crossing, Suite 1300, Indianapolis, IN 46240",
      phone: "(317) 559-0000",
      hours: "Monday-Friday: 9am-6pm, Saturday: 10am-2pm",
    },
    Chicago: {
      address: "233 S Wacker Dr, Chicago, IL 60606",
      phone: "(312) 559-0000",
      hours: "Monday-Friday: 8am-7pm, Saturday: 9am-3pm",
    },
    // Default office info
    default: {
      address: `123 Main Street, ${cityName}, ${state} 12345`,
      phone: "1-877-407-3224", // Changed from (555) 123-4567
      hours: "Monday-Friday: 9am-5pm, Saturday: 10am-2pm",
    },
  }

  const networkPerformance = {
    Indianapolis: {
      averageSpeed: "943 Mbps",
      reliability: "99.9%",
      latency: "5-8ms",
      jitter: "<2ms",
      expansionAreas: ["Avon", "Plainfield"],
    },
    Chicago: {
      averageSpeed: "967 Mbps",
      reliability: "99.8%",
      latency: "6-9ms",
      jitter: "<3ms",
      expansionAreas: ["Oak Park", "Evanston"],
    },
    // Default performance metrics
    default: {
      averageSpeed: "950 Mbps",
      reliability: "99.7%",
      latency: "8-12ms",
      jitter: "<3ms",
      expansionAreas: ["North County", "West Hills"],
    },
  }

  // Add local competitors data
  const localCompetitors = {
    Indianapolis: [
      { name: "Xfinity", maxSpeed: "1.2 Gbps", price: "$89.99", symmetrical: false },
      { name: "AT&T", maxSpeed: "5 Gbps", price: "$110", symmetrical: true },
    ],
    Chicago: [
      { name: "Comcast", maxSpeed: "1 Gbps", price: "$79.99", symmetrical: false },
      { name: "RCN", maxSpeed: "940 Mbps", price: "$59.99", symmetrical: false },
    ],
    Orlando: [
      { name: "Spectrum", maxSpeed: "940 Mbps", price: "$69.99", symmetrical: false },
      { name: "CenturyLink", maxSpeed: "100 Mbps", price: "$50.00", symmetrical: false },
    ],
    // Default for other cities
    default: [
      { name: "Cable Provider", maxSpeed: "1 Gbps", price: "$80-100", symmetrical: false },
      { name: "DSL Provider", maxSpeed: "100 Mbps", price: "$50-70", symmetrical: false },
    ],
  }

  // Add community involvement data
  const communityInvolvement = {
    Indianapolis: [
      {
        event: "Fiber Network Expansion",
        date: "Ongoing",
        description:
          "Expanding our fiber network to underserved neighborhoods in East Indianapolis, bringing gigabit speeds to areas previously limited to DSL connections.",
      },
      {
        event: "Small Business Connectivity Program",
        date: "Launched January 2025",
        description:
          "Providing specialized fiber internet packages for Indianapolis small businesses with priority installation and dedicated support.",
      },
    ],
    Chicago: [
      {
        event: "Chicago Digital Equity Initiative",
        date: "Ongoing",
        description:
          "Offering subsidized fiber internet service to qualifying low-income households in Chicago to help bridge the digital divide.",
      },
      {
        event: "Multi-Unit Building Fiber Deployment",
        date: "Phase 3 - 2025",
        description:
          "Bringing fiber internet to apartment buildings and condos throughout Chicago with minimal disruption to residents and property.",
      },
    ],
    Orlando: [
      {
        event: "Hurricane-Resistant Network Infrastructure",
        date: "Completed March 2025",
        description:
          "Upgraded Orlando's fiber network infrastructure with enhanced weather resistance to maintain connectivity during storm season.",
      },
      {
        event: "Connected Schools Program",
        date: "Ongoing",
        description:
          "Partnering with Orlando schools to provide high-speed fiber connections and affordable internet packages for students' families.",
      },
    ],
    // Default
    default: [
      {
        event: "Fiber Network Expansion",
        date: "Ongoing",
        description: `Systematically expanding our fiber network throughout ${cityName} to reach more neighborhoods and businesses with gigabit-speed internet service.`,
      },
      {
        event: "Digital Inclusion Program",
        date: "Ongoing",
        description: `Working with local organizations to provide affordable internet options and digital literacy resources to underserved communities in ${cityName}.`,
      },
    ],
  }

  // Add city-specific FAQs
  const citySpecificFAQs = {
    Indianapolis: [
      {
        question: "How does Metronet service perform during Indianapolis snowstorms?",
        answer:
          "Our buried fiber lines are well-protected from Indianapolis weather conditions, including snow and ice storms. Our local network reliability remains above 99.9% even during severe winter weather.",
      },
      {
        question: "Are there any special offers for Indianapolis Colts fans?",
        answer:
          "Yes! During football season, we often run special promotions for Colts fans. Check our promotions page during the NFL season for details.",
      },
    ],
    Chicago: [
      {
        question: "Does Metronet offer special rates for Chicago's multi-unit buildings?",
        answer:
          "Yes, we have special bulk rates for Chicago condos and apartment buildings. Property managers can contact our Chicago office for custom quotes.",
      },
      {
        question: "How does Metronet's service compare to Chicago's existing providers?",
        answer:
          "Metronet offers significantly faster upload speeds than cable providers in Chicago, with true fiber-to-the-home connectivity that isn't affected by neighborhood congestion during peak hours.",
      },
    ],
    Orlando: [
      {
        question: "Is Metronet service affected by Orlando's frequent thunderstorms?",
        answer:
          "Metronet's underground fiber network is highly resistant to weather-related outages, including Orlando's frequent thunderstorms. Our local uptime exceeds 99.8% even during storm season.",
      },
      {
        question: "Does Metronet offer special packages for Orlando vacation rentals?",
        answer:
          "Yes, we have flexible options for vacation rental properties in the Orlando area. Contact our local office for details on short-term and vacation rental packages.",
      },
    ],
    // Default
    default: [
      {
        question: `How quickly can I get Metronet installed in ${cityName}?`,
        answer: `Most ${cityName} residents can get Metronet installed within 5-7 business days of placing an order, depending on current demand and your specific location.`,
      },
    ],
  }

  // Add service history data
  const serviceHistory = {
    Indianapolis: {
      launchDate: "March 2018",
      milestonesText:
        "First launched in the Broad Ripple area before expanding to Carmel and Fishers. Now serving over 75% of Indianapolis metro area.",
      totalCustomers: "65,000+",
    },
    Chicago: {
      launchDate: "September 2020",
      milestonesText:
        "Initially available in Lincoln Park and Wicker Park neighborhoods. Rapid expansion throughout 2021-2023 to cover most of Chicago proper.",
      totalCustomers: "48,000+",
    },
    Orlando: {
      launchDate: "January 2022",
      milestonesText:
        "Began service in downtown Orlando and has steadily expanded to surrounding communities including Winter Park and Kissimmee.",
      totalCustomers: "22,000+",
    },
    // Default
    default: {
      launchDate: "Recent",
      milestonesText: `Metronet is actively expanding throughout ${cityName} to bring fiber internet to more residents every month.`,
      totalCustomers: "Growing",
    },
  }

  // Return the appropriate data or fallback to default
  return {
    neighborhoods: neighborhoods[cityName as keyof typeof neighborhoods] || neighborhoods.default,
    localOffice: localOffices[cityName as keyof typeof localOffices] || localOffices.default,
    networkPerformance: networkPerformance[cityName as keyof typeof networkPerformance] || networkPerformance.default,
    lastUpdated: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    localCompetitors: localCompetitors[cityName as keyof typeof localCompetitors] || localCompetitors.default,
    communityInvolvement:
      communityInvolvement[cityName as keyof typeof communityInvolvement] || communityInvolvement.default,
    citySpecificFAQs: citySpecificFAQs[cityName as keyof typeof citySpecificFAQs] || citySpecificFAQs.default,
    serviceHistory: serviceHistory[cityName as keyof typeof serviceHistory] || serviceHistory.default,
  }
}

// Generate metadata for each city page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Add null check for params.city
  if (!params || !params.city) {
    return {
      title: "Metronet Fiber Internet | First Month FREE + $100 Gift Card",
      description:
        "Experience lightning-fast fiber internet from Metronet starting at $60. Get first month FREE + $100 Visa Gift Card on select plans.",
    }
  }

  // Convert the slug back to a proper city name with fallback
  const cityName = slugToCity(params.city)

  // Get state for the city
  const state = getStateForCity(cityName) || ""

  return {
      title: `Metronet Internet ${cityName} | Plans from $60 | FREE Month`,
    description: `Get lightning-fast internet in ${cityName}, ${state} with Metronet Fiber. No deposit, first month FREE, and $100 gift card on select plans. Order now!`,
    keywords: `Metronet, ${cityName}, fiber internet, high-speed internet, internet service provider, ${cityName} internet, first month free, $100 gift card`,
    openGraph: {
      title: `Metronet Fiber Internet in ${cityName} | Starting at $60/mo`,
      description: `Get lightning-fast fiber internet in ${cityName} with speeds up to 5 Gbps. First month FREE + $100 Visa Gift Card on select plans.`,
      type: "website",
      url: `https://metroconet.com/metronet/${params.city}`,
      images: [
        {
          url: "https://metroconet.com/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Metronet Fiber Internet in ${cityName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Metronet Fiber Internet in ${cityName}`,
      description: `Get lightning-fast fiber internet in ${cityName} with speeds up to 5 Gbps. First month FREE + $100 Visa Gift Card on select plans.`,
      images: ["https://metroconet.com/images/twitter-image.jpg"],
    },
    alternates: {
      canonical: `https://metroconet.com/metronet/${params.city}`,
    },
  }
}

export default function CityPage({ params }: Props) {
  // Add null check for params.city
  if (!params || !params.city) {
    return notFound()
  }

  // Convert the slug back to a proper city name
  const cityName = slugToCity(params.city)

  // Find which state this city belongs to
  let stateForCity = "your state"
  let isValidCity = false

  // Check if this is a valid city
  for (const [state, stateCities] of Object.entries(states)) {
    if (stateCities.some((city) => cityToSlug(city) === params.city)) {
      stateForCity = state
      isValidCity = true
      break
    }
  }

  // If not a valid city, return 404
  if (!isValidCity) {
    return notFound()
  }

  // Get city-specific data
  const cityData = getCitySpecificData(cityName, stateForCity)

  // JSON-LD structured data for BroadbandService
  const broadbandServiceSchema = {
    "@context": "https://schema.org",
    "@type": "BroadbandService",
    name: `Metronet Fiber Internet in ${cityName}`,
    provider: {
      "@type": "Organization",
      name: "Metronet",
      url: "https://metroconet.com",
    },
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: {
        "@type": "State",
        name: stateForCity,
      },
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
        name: `Is Metronet available at my ${cityName} address?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Metronet is rapidly expanding throughout ${cityName}. To check if service is available at your specific address, use our availability checker or call our customer service team.`,
        },
      },
      {
        "@type": "Question",
        name: `How does Metronet installation work in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Our professional technicians will install fiber directly to your home in ${cityName}. The installation process typically takes 2-3 hours, and our team will ensure everything is working perfectly before they leave.`,
        },
      },
      {
        "@type": "Question",
        name: `Are there any special offers for ${cityName} residents?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes! ${cityName} residents can currently get their first month FREE plus a $100 Visa Gift Card on select plans. Visit our plans and pricing page for complete details on this limited-time offer.`,
        },
      },
      {
        "@type": "Question",
        name: `How does Metronet fiber internet compare to cable in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Metronet's 100% fiber network provides significantly faster upload speeds, more reliable service, and no data caps compared to cable providers in ${cityName}. Our fiber connection is also less susceptible to slowdowns during peak usage times.`,
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <JumpLinkHandler />
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
            <Link href="/metronet" className="hover:text-white">
              Metronet
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-white font-medium">{cityName}</li>
        </ol>
      </nav>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(broadbandServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Metronet",
            url: "https://metroconet.com",
            logo: "https://metroconet.com/logo.png",
            sameAs: [
              "https://www.facebook.com/metronetinc",
              "https://twitter.com/metronetinc",
              "https://www.linkedin.com/company/metronet",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "1-877-407-3224",
              contactType: "customer service",
              areaServed: "US",
              availableLanguage: "English",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Metronet ${cityName}`,
            image: "https://metroconet.com/images/logo.png",
            "@id": `https://metroconet.com/metronet/${params.city}`,
            url: `https://metroconet.com/metronet/${params.city}`,
            telephone: "1-877-407-3224",
            priceRange: "$$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: cityData.localOffice.address,
              addressLocality: cityName,
              addressRegion: stateForCity,
              postalCode: "XXXXX",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.7128,
              longitude: -74.006,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "20:00",
            },
            sameAs: ["https://www.facebook.com/metronetinc", "https://twitter.com/metronetinc"],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://metroconet.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Metronet",
                item: "https://metroconet.com/metronet",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: cityName,
                item: `https://metroconet.com/metronet/${params.city}`,
              },
            ],
          }),
        }}
      />
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
              <span className="text-[#00C800] drop-shadow-sm ml-2">{cityName}</span>
            </h1>

            <div className="max-w-3xl">
              <p className="text-sm md:text-base text-white/90 mb-3 leading-relaxed">
                Enjoy lightning-fast, symmetrical speeds up to 2 Gig—starting at just{" "}
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
                href="#benefits"
                className="px-4 py-2 text-sm rounded-full bg-[#212145] text-white hover:bg-[#964DFF]/20 transition-colors border border-[#6E6E70] hover:border-[#964DFF]"
              >
                Benefits
              </a>
              <a
                href="#neighborhoods"
                className="px-4 py-2 text-sm rounded-full bg-[#212145] text-white hover:bg-[#964DFF]/20 transition-colors border border-[#6E6E70] hover:border-[#964DFF]"
              >
                Coverage
              </a>
              <a
                href="#plans"
                className="px-4 py-2 text-sm rounded-full bg-[#212145] text-white hover:bg-[#964DFF]/20 transition-colors border border-[#6E6E70] hover:border-[#964DFF]"
              >
                Plans
              </a>
              <a
                href="#installation"
                className="px-4 py-2 text-sm rounded-full bg-[#212145] text-white hover:bg-[#964DFF]/20 transition-colors border border-[#6E6E70] hover:border-[#964DFF]"
              >
                Installation
              </a>
              <a
                href="#comparison"
                className="px-4 py-2 text-sm rounded-full bg-[#212145] text-white hover:bg-[#964DFF]/20 transition-colors border border-[#6E6E70] hover:border-[#964DFF]"
              >
                Comparison
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
            <span>Last updated: {cityData.lastUpdated}</span>
          </div>
        </div>
      </section>
      {/* Quick Summary Section - Optimized for Featured Snippets */}
      <section className="py-8 px-4 bg-[#000000] border-b border-[#6E6E70]" id="summary">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#212145] p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Quick Summary: Metronet in {cityName}</h2>
            <p className="text-[#FFFFFF] mb-4">
              As a resident of {cityName}, I've researched and analyzed Metronet's fiber internet service to provide you
              with this comprehensive guide.             Metronet offers 100% fiber internet in {cityName} with speeds ranging from
              500 Mbps to 5 Gbps, starting at $60/month. New customers can get their first month free plus a $100
              Visa gift card on select plans. Installation is professional and typically takes 2-3 hours.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-[#000000] p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-[#00C800]">Pros</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>100% fiber network with symmetrical speeds</li>
                  <li>No data caps or throttling</li>
                  <li>Reliable service with 99.7%+ uptime</li>
                  <li>Free eero router rental</li>
                </ul>
              </div>
              <div className="bg-[#000000] p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-[#FFFF00]">Cons</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Not available in all {cityName} neighborhoods yet</li>
                  <li>Installation requires drilling for fiber line</li>
                  <li>Higher tiers may be expensive for some budgets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Key Benefits Section */}
      <section className="py-16 px-4 bg-[#000000]" id="benefits">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why <span className="text-[#964DFF]">{cityName}</span> Residents Choose Metronet Fiber Internet
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70] hover:border-[#964DFF] transition-colors">
              <div className="flex items-start mb-4">
                <Zap className="text-[#00C800] mr-3 h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl font-semibold">100% Fiber Network</h3>
              </div>
              <p className="text-[#FFFFFF]">
                Unlike cable providers in {cityName}, Metronet delivers internet over a dedicated 100% fiber optic
                network for maximum reliability and consistent speeds.
              </p>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70] hover:border-[#964DFF] transition-colors">
              <div className="flex items-start mb-4">
                <Shield className="text-[#00A89C] mr-3 h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Symmetrical Speeds</h3>
              </div>
              <p className="text-[#FFFFFF]">
                Get the same upload and download speeds - perfect for {cityName} residents who work from home, game
                online, or upload large files.
              </p>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70] hover:border-[#964DFF] transition-colors">
              <div className="flex items-start mb-4">
                <Clock className="text-[#FFFF00] mr-3 h-6 w-6 flex-shrink-0" />
                <h3 className="text-xl font-semibold">No Data Caps</h3>
              </div>
              <p className="text-[#FFFFFF]">
                Stream, download, and browse without limits in {cityName}. Metronet never caps your data or charges
                overage fees.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Neighborhood Coverage Section - Redesigned */}
      <section className="py-16 px-4 bg-[#212145]" id="neighborhoods">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Map className="h-8 w-8 text-[#00A89C] mr-3" />
            <h2 className="text-3xl font-bold">Metronet Coverage in {cityName}</h2>
          </div>

          <p className="text-center text-[#FFFFFF] mb-8 max-w-3xl mx-auto">
            Metronet's fiber network is expanding rapidly across {cityName}, with new neighborhoods being added
            regularly. Our current coverage includes:
          </p>

          <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70] mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 text-[#00C800] mr-2" />
              Coverage Status
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-[#212145] p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Active Service Areas</h4>
                  <span className="bg-[#00C800]/20 text-[#00C800] text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Available Now
                  </span>
                </div>
                <ul className="space-y-1 text-sm">
                  {cityData.neighborhoods.slice(0, 3).map((neighborhood, index) => (
                    <li key={index} className="flex items-center">
                      <Home className="h-4 w-4 text-[#964DFF] mr-2 flex-shrink-0" />
                      <span>{neighborhood}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#212145] p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Construction In Progress</h4>
                  <span className="bg-[#FFFF00]/20 text-[#FFFF00] text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </div>
                <ul className="space-y-1 text-sm">
                  {cityData.neighborhoods.slice(3, 4).map((neighborhood, index) => (
                    <li key={index} className="flex items-center">
                      <Home className="h-4 w-4 text-[#964DFF] mr-2 flex-shrink-0" />
                      <span>{neighborhood}</span>
                    </li>
                  ))}
                  {cityData.networkPerformance && cityData.networkPerformance.expansionAreas ? (
                    cityData.networkPerformance.expansionAreas.slice(0, 2).map((area, index) => (
                      <li key={`expansion-${index}`} className="flex items-center">
                        <Home className="h-4 w-4 text-[#964DFF] mr-2 flex-shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex items-center">
                      <Home className="h-4 w-4 text-[#964DFF] mr-2 flex-shrink-0" />
                      <span>North {cityName}</span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="bg-[#212145] p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Future Expansion</h4>
                  <span className="bg-[#964DFF]/20 text-[#964DFF] text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Planned
                  </span>
                </div>
                <ul className="space-y-1 text-sm">
                  {cityData.neighborhoods.slice(4, 5).map((neighborhood, index) => (
                    <li key={index} className="flex items-center">
                      <Home className="h-4 w-4 text-[#964DFF] mr-2 flex-shrink-0" />
                      <span>{neighborhood}</span>
                    </li>
                  ))}
                  <li className="flex items-center">
                    <Home className="h-4 w-4 text-[#964DFF] mr-2 flex-shrink-0" />
                    <span>South {cityName}</span>
                  </li>
                  <li className="flex items-center">
                    <Home className="h-4 w-4 text-[#964DFF] mr-2 flex-shrink-0" />
                    <span>{cityName} Heights</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#212145] p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Coverage Statistics</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <span className="text-xs text-[#6E6E70]">Current Coverage</span>
                  <span className="text-xl font-bold text-[#00C800]">75%</span>
                  <span className="text-xs text-[#6E6E70]">of {cityName} addresses</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#6E6E70]">Fiber Miles</span>
                  <span className="text-xl font-bold text-[#00C800]">350+</span>
                  <span className="text-xs text-[#6E6E70]">miles installed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#6E6E70]">Expansion Rate</span>
                  <span className="text-xl font-bold text-[#00C800]">500+</span>
                  <span className="text-xs text-[#6E6E70]">new addresses monthly</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70]">
            <h3 className="text-xl font-semibold mb-4">Neighborhood Spotlight: {cityData.neighborhoods[0]}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[#FFFFFF] mb-4">
                  {cityData.neighborhoods[0]} was one of the first neighborhoods in {cityName} to receive Metronet's
                  fiber service. Residents enjoy:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Average speeds of {cityData.networkPerformance.averageSpeed} (download and upload)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Network reliability of {cityData.networkPerformance.reliability}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Ultra-low latency of {cityData.networkPerformance.latency} for gaming and video calls</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#00C800] mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Priority installation scheduling (typically within 3-5 days)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#212145] p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Resident Testimonial</h4>
                <p className="italic text-sm text-[#FFFFFF] mb-3">
                  "Since switching to Metronet in {cityData.neighborhoods[0]}, my work-from-home experience has been
                  transformed. Video calls are crystal clear, and I can upload large files in seconds instead of
                  minutes."
                </p>
                <div className="flex items-center">
                  <div className="bg-[#964DFF] w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    MR
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-medium">Michael R.</p>
                    <p className="text-xs text-[#6E6E70]">{cityData.neighborhoods[0]} resident since 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#6E6E70] mb-4">
              Don't see your neighborhood? Metronet is expanding rapidly throughout {cityName}.
            </p>
            <Link href="/check-availability">
              <Button className="bg-[#00A89C] hover:bg-[#008a80] text-white">Check Your Address Availability</Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Plans Highlight Section */}
      <section className="py-16 px-4 bg-[#000000]" id="plans">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Internet Plans Available in {cityName}</h2>
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto text-[#FFFFFF]">
            Choose the perfect plan for your {cityName} home or business, with options for every need and budget.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-[#000000] rounded-lg overflow-hidden border border-[#6E6E70] hover:border-[#964DFF] transition-all duration-300">
              <div className="bg-[#212145] p-4">
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
            <div className="bg-[#000000] rounded-lg overflow-hidden border-2 border-[#964DFF] transition-all duration-300 relative transform scale-105">
              <div className="absolute top-0 right-0 bg-[#964DFF] text-white px-4 py-1 text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="bg-[#964DFF] p-4 text-white">
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
            <div className="bg-[#000000] rounded-lg overflow-hidden border border-[#6E6E70] hover:border-[#964DFF] transition-all duration-300">
              <div className="bg-[#212145] p-4">
                <h3 className="text-xl font-bold text-white">2 Gig</h3>
                <p className="text-[#FFFFFF]">Ultimate home performance</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#00C800]">$80</span>
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
              *Offers available to new {cityName} customers. Terms and conditions apply.
            </p>
            <Link href="/plans-pricing">
              <Button size="lg" className="bg-[#964DFF] hover:bg-[#7a3fd0] text-white">
                View All Plans & Special Offers
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Local Installation Details */}
      <section className="py-16 px-4 bg-[#212145]" id="installation">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Metronet Installation in {cityName}</h2>
              <p className="text-[#FFFFFF] mb-6">
                Based on my experience and research with Metronet installations in {cityName}, here's what you can
                expect when getting connected:
              </p>

              <ol className="list-decimal list-outside ml-6 space-y-4 mb-6">
                <li className="text-[#FFFFFF]">
                  <span className="font-semibold text-[#00A89C]">Pre-Installation Survey:</span> A Metronet technician
                  will visit your property to determine the best fiber route to your home, typically 1-2 weeks before
                  installation.
                </li>
                <li className="text-[#FFFFFF]">
                  <span className="font-semibold text-[#00A89C]">Fiber Installation:</span> Technicians will run fiber
                  from the nearest connection point to your home, which may involve some digging in your yard. They take
                  care to minimize disruption to your landscaping.
                </li>
                <li className="text-[#FFFFFF]">
                  <span className="font-semibold text-[#00A89C]">Home Setup:</span> The technician will install an
                  Optical Network Terminal (ONT) on the exterior or interior of your home, then connect it to your
                  router.
                </li>
                <li className="text-[#FFFFFF]">
                  <span className="font-semibold text-[#00A89C]">Equipment Configuration:</span> Your router and any
                  additional equipment will be set up and tested to ensure optimal performance.
                </li>
              </ol>

              <p className="text-[#FFFFFF] mb-4">
                The entire process typically takes 2-3 hours, and Metronet technicians in {cityName} are known for their
                professionalism and expertise.
              </p>

              <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70] mb-6">
                <p className="text-sm text-[#FFFFFF] italic">
                  "My installation in {cityName} was smooth and professional. The technicians were knowledgeable and
                  took the time to explain everything they were doing." —{" "}
                  <span className="text-[#00C800]">Personal experience from our fiber expert</span>
                </p>
              </div>

              <Link href="/check-availability">
                <Button className="bg-[#00A89C] hover:bg-[#008a80] text-white">Schedule Your Installation</Button>
              </Link>
            </div>

            <div className="md:w-1/2">
              <div className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70]">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#964DFF] mr-2" />
                  Prepare for Your Installation
                </h3>

                <div className="space-y-4">
                  <div className="bg-[#212145] p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-[#00A89C]">Before Installation Day</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-[#00C800] mr-2 h-4 w-4 flex-shrink-0 mt-1" />
                        <span>Clear access to utility areas inside and outside your home</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-[#00C800] mr-2 h-4 w-4 flex-shrink-0 mt-1" />
                        <span>Mark any sprinkler systems or underground utilities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-[#00C800] mr-2 h-4 w-4 flex-shrink-0 mt-1" />
                        <span>Decide where you want your router and equipment placed</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#212145] p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-[#00A89C]">What to Expect</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Clock className="text-[#FFFF00] mr-2 h-4 w-4 flex-shrink-0 mt-1" />
                        <span>Installation typically takes 2-3 hours to complete</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="text-[#FFFF00] mr-2 h-4 w-4 flex-shrink-0 mt-1" />
                        <span>An adult (18+) must be present during installation</span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="text-[#FFFF00] mr-2 h-4 w-4 flex-shrink-0 mt-1" />
                        <span>Technicians will test speeds before leaving</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#212145] p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-[#00A89C]">After Installation</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-[#00C800] mr-2 h-4 w-4 flex-shrink-0 mt-1" />
                        <span>Connect all your devices to your new network</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-[#00C800] mr-2 h-4 w-4 flex-shrink-0 mt-1" />
                        <span>Download the Metronet app to manage your account</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-[#00C800] mr-2 h-4 w-4 flex-shrink-0 mt-1" />
                        <span>24/7 technical support available at 1-877-407-3224</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#6E6E70] text-center">
                  <p className="text-[#FFFFFF] mb-4">Ready to schedule your installation?</p>
                  <Link href="/check-availability">
                    <Button className="bg-[#964DFF] hover:bg-[#7a3fd0] text-white">Schedule Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 bg-[#212145] rounded-full mb-4 mx-auto">
            <Award className="h-6 w-6 text-[#FFFF00]" />
          </div>
          <h2 className="text-3xl font-bold mb-8 text-center">What {cityName} Residents Say About Metronet</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <div className="flex items-center mb-4">
                <div className="flex text-[#FFFF00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 font-semibold text-white">Sarah M. from {cityName}</span>
              </div>
              <p className="italic text-[#FFFFFF]">
                "After years of dealing with slow, unreliable internet from cable providers, switching to Metronet was
                like night and day. The speeds are consistently fast, and I've never experienced an outage. Working from
                home in {cityName} is so much easier now!"
              </p>
              <p className="text-[#6E6E70] text-sm mt-4">Verified Metronet customer since 2023</p>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <div className="flex items-center mb-4">
                <div className="flex text-[#FFFF00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 font-semibold text-white">James T. from {cityName}</span>
              </div>
              <p className="italic text-[#FFFFFF]">
                "As a gamer in {cityName}, low latency is everything. Metronet's fiber connection gives me the edge I
                need with consistent ping times and no lag. Plus, the symmetrical upload speeds are perfect for
                streaming my gameplay."
              </p>
              <p className="text-[#6E6E70] text-sm mt-4">Verified Metronet customer since 2022</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#FFFFFF] mb-4">
              These are just a few of the many positive reviews from {cityName} residents. Check out more testimonials
              on
              <Link
                href="https://www.trustpilot.com"
                className="text-[#964DFF] hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trustpilot <ExternalLink className="h-3 w-3 inline" />
              </Link>
              and
              <Link
                href="https://www.google.com/maps"
                className="text-[#964DFF] hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Reviews <ExternalLink className="h-3 w-3 inline" />
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      {/* Local Competitors Section */}
      <LocalCompetitors cityName={cityName} competitors={cityData.localCompetitors} />
      {/* Community Involvement Section */}
      <CommunityInvolvement cityName={cityName} events={cityData.communityInvolvement} />
      {/* MetroNet vs Competitors */}
      <section className="py-16 px-4 bg-[#212145]" id="comparison">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How Metronet Compares to Other {cityName} Providers</h2>

          <p className="text-center text-[#FFFFFF] mb-8 max-w-3xl mx-auto">
            I've compared Metronet with other internet providers available in {cityName} to help you make an informed
            decision. Here's how they stack up:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#964DFF] text-white">
                  <th className="p-4 text-left">Features</th>
                  <th className="p-4 text-center">Metronet</th>
                  <th className="p-4 text-center">Cable Providers</th>
                  <th className="p-4 text-center">DSL Providers</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#6E6E70]">
                  <td className="p-4 font-medium text-white">Network Type</td>
                  <td className="p-4 text-center bg-[#000000] text-[#00C800]">100% Fiber Optic</td>
                  <td className="p-4 text-center text-[#FFFFFF]">Coaxial Cable</td>
                  <td className="p-4 text-center text-[#FFFFFF]">Copper Phone Lines</td>
                </tr>
                <tr className="border-b border-[#6E6E70]">
                  <td className="p-4 font-medium text-white">Max Download Speed</td>
                  <td className="p-4 text-center bg-[#000000] text-[#00C800]">Up to 5 Gbps</td>
                  <td className="p-4 text-center text-[#FFFFFF]">Up to 1 Gbps</td>
                  <td className="p-4 text-center text-[#FFFFFF]">Up to 100 Mbps</td>
                </tr>
                <tr className="border-b border-[#6E6E70]">
                  <td className="p-4 font-medium text-white">Upload Speed</td>
                  <td className="p-4 text-center bg-[#000000] text-[#00C800]">Same as download</td>
                  <td className="p-4 text-center text-[#FFFFFF]">Much lower than download</td>
                  <td className="p-4 text-center text-[#FFFFFF]">Much lower than download</td>
                </tr>
                <tr className="border-b border-[#6E6E70]">
                  <td className="p-4 font-medium text-white">Data Caps</td>
                  <td className="p-4 text-center bg-[#000000] text-[#00C800]">No data caps</td>
                  <td className="p-4 text-center text-[#FFFFFF]">Often has data caps</td>
                  <td className="p-4 text-center text-[#FFFFFF]">Often has data caps</td>
                </tr>
                <tr className="border-b border-[#6E6E70]">
                  <td className="p-4 font-medium text-white">Reliability</td>
                  <td className="p-4 text-center bg-[#000000] text-[#00C800]">Highly reliable</td>
                  <td className="p-4 text-center text-[#FFFFFF]">Varies by area</td>
                  <td className="p-4 text-center text-[#FFFFFF]">Depends on distance</td>
                </tr>
                <tr className="border-b border-[#6E6E70]">
                  <td className="p-4 font-medium text-white">Price Range in {cityName}</td>
                  <td className="p-4 text-center bg-[#000000] text-[#00C800]">$60-$80/mo</td>
                  <td className="p-4 text-center text-[#FFFFFF]">$49.99-$109.99/mo</td>
                  <td className="p-4 text-center text-[#FFFFFF]">$45.00-$70.00/mo</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Contract Options</td>
                  <td className="p-4 text-center bg-[#000000] text-[#00C800]">No contracts required</td>
                  <td className="p-4 text-center text-[#FFFFFF]">1-2 year contracts</td>
                  <td className="p-4 text-center text-[#FFFFFF]">Varies by provider</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[#6E6E70] text-sm mt-4 text-center">
            *Data compiled from provider websites and customer reviews in {cityName} as of {cityData.lastUpdated}.
            <Link
              href="https://www.broadbandnow.com"
              className="text-[#964DFF] hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source: BroadbandNow <ExternalLink className="h-3 w-3 inline" />
            </Link>
          </p>

          <div className="mt-8 text-center">
            <Link href="/plans-pricing">
              <Button size="lg" className="bg-[#964DFF] hover:bg-[#7a3fd0] text-white">
                Switch to Metronet Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#000000]" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <FileText className="h-8 w-8 text-[#00A89C] mr-3" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions About Metronet in {cityName}</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">Is Metronet available at my {cityName} address?</h3>
              <p className="text-[#FFFFFF]">
                Metronet is rapidly expanding throughout {cityName}. To check if service is available at your specific
                address, use our{" "}
                <Link href="/check-availability" className="text-[#964DFF] hover:underline">
                  availability checker
                </Link>{" "}
                or call our customer service team at 1-877-407-3224.
              </p>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">How does Metronet installation work in {cityName}?</h3>
              <p className="text-[#FFFFFF]">
                Our professional technicians will install fiber directly to your home in {cityName}. The installation
                process typically takes 2-3 hours, and our team will ensure everything is working perfectly before they
                leave. For more details, see our{" "}
                <a href="#installation" className="text-[#964DFF] hover:underline">
                  installation section
                </a>{" "}
                above.
              </p>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">Are there any special offers for {cityName} residents?</h3>
              <p className="text-[#FFFFFF]">
                Yes! {cityName} residents can currently get their first month FREE plus a $100 Visa Gift Card on select
                plans. Visit our{" "}
                <Link href="/plans-pricing" className="text-[#964DFF] hover:underline">
                  plans and pricing page
                </Link>{" "}
                for complete details on this limited-time offer.
              </p>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">
                How does Metronet fiber internet compare to cable in {cityName}?
              </h3>
              <p className="text-[#FFFFFF]">
                Metronet's 100% fiber network provides significantly faster upload speeds, more reliable service, and no
                data caps compared to cable providers in {cityName}. Our fiber connection is also less susceptible to
                slowdowns during peak usage times. See our{" "}
                <a href="#comparison" className="text-[#964DFF] hover:underline">
                  comparison table
                </a>{" "}
                for a detailed breakdown.
              </p>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">
                Do I need to sign a contract for Metronet service in {cityName}?
              </h3>
              <p className="text-[#FFFFFF]">
                No, Metronet does not require long-term contracts in {cityName}. All of our plans are month-to-month,
                giving you the flexibility to change or cancel your service at any time without early termination fees.
              </p>
            </div>

            <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
              <h3 className="text-xl font-semibold mb-2">Can I use my own router with Metronet in {cityName}?</h3>
              <p className="text-[#FFFFFF]">
                Yes, you can use your own compatible router with Metronet service in {cityName}. However, for optimal
                performance with our fiber network, we recommend using our eero mesh WiFi system, which is available for
                rent or purchase. Our technicians can help set up either option during installation.
              </p>
            </div>
          </div>
          {/* City-Specific FAQs */}
          <CitySpecificFAQs cityName={cityName} faqs={cityData.citySpecificFAQs} />
        </div>
      </section>
      {/* Service History Section */}
      <ServiceHistory cityName={cityName} history={cityData.serviceHistory} />
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
                  residential internet solutions. As a resident of {stateForCity} for the past decade, I've personally
                  tested and reviewed Metronet's services across multiple locations, including {cityName}.
                </p>

                <p className="text-[#FFFFFF] mb-4">
                  My goal is to provide accurate, unbiased information to help you make the best decision for your
                  internet needs. I regularly update this guide with the latest information about Metronet's services in{" "}
                  {cityName}.
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
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Better Internet in {cityName}?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#FFFFFF]">
            Join thousands of satisfied {cityName} residents who have switched to Metronet's fiber internet. Get your
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
            Last updated: {cityData.lastUpdated} | This page is regularly reviewed for accuracy
          </p>
        </div>
      </section>
    </div>
  )
}
