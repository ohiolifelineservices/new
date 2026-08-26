import dynamic from "next/dynamic"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Script from "next/script"
import type { Metadata } from "next"
import { ChevronRight } from "lucide-react"

// Import the necessary functions from city-data
import { states, cityToSlug, stateToSlug } from "@/lib/city-data"

// Static imports
import Features from "@/components/features"
import Reasons from "@/components/reasons"
import NewCustomerDeals from "@/components/new-customer-deals"
import CoverageMap from "@/components/coverage-map"
import KeyTakeaways from "@/components/key-takeaways"
import ComparisonTable from "@/components/comparison-table"
import ExpertProfiles from "@/components/expert-profiles"
import AIOverviewSummary from "@/components/ai-overview-summary"
import QuickNav from "@/components/quick-nav"
import QuickFactsTable from "@/components/quick-facts-table"
import RelatedResources from "@/components/related-resources"
import ExpertAuthors from "@/components/expert-authors"
import { GoogleAnalytics } from "@/components/google-analytics"

// Dynamic imports for components that might cause SSR issues
const Hero = dynamic(() => import("@/components/hero"), { ssr: true })
// Add comment: // Pass priority={true} to the first visible image in Hero component
const Plans = dynamic(() => import("@/components/plans"), { ssr: true })
const Reviews = dynamic(() => import("@/components/reviews"), { ssr: true })
const SEOFAQ = dynamic(() => import("@/components/seo-faq"), { ssr: true })

// Update the metadata section to include the promotional information
export const metadata: Metadata = {
  title: "Metronet: Blazing-Fast Fiber Internet | Free Installation | Unlimited Data",
  description:
    "Experience lightning-fast Metronet fiber internet with speeds up to 5 Gig starting at $60. Free installation, unlimited data, and no deposit required. No contracts. Switch today!",
  keywords:
    "fiber internet, high-speed internet, Metronet, symmetrical speeds, no data caps, fiber optic, gigabit internet, no deposit, free installation, unlimited data",
  authors: [
    { name: "James Davis", url: "https://www.linkedin.com/in/jamesdavis" },
    { name: "Sarah Mitchell", url: "https://www.linkedin.com/in/sarahmitchell" },
  ],
  publisher: "Metronet Authorized Reseller",
  alternates: {
    canonical: "https://metroconet.com",
  },
}

import {
  structuredData,
  faqStructuredData,
  localBusinessSchema,
  websiteSchema,
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/schema-data"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <GoogleAnalytics />
      {/* Hero section */}
      <Hero />

      {/* New Quick Nav section */}
      <QuickNav />

      {/* New AI Overview Summary section */}
      <AIOverviewSummary />

      {/* Existing sections with IDs added for navigation */}
      <div id="features">
        <KeyTakeaways />
        <Features />
      </div>

      <div id="comparison">
        <ComparisonTable />
      </div>

      {/* New Quick Facts Table section */}
      <QuickFactsTable />

      <div id="reasons">
        <Reasons />
      </div>

      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold mb-2 text-center">Explore Our Services</h2>
        <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
          Find the perfect internet solution for your home or business with our range of fiber services.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Plans & Pricing</h3>
            <p className="mb-4">Find the perfect internet plan for your needs, with options from 500 Mbps to 5 Gbps.</p>
            <Link href="/plans-pricing">
              <Button className="w-full">View Plans</Button>
            </Link>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Current Promotions</h3>
            <p className="mb-4">
              Check out our latest deals and special offers, including free installation and gift cards.
            </p>
            <Link href="/promotions">
              <Button className="w-full">See Promotions</Button>
            </Link>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Browse by State</h3>
            <p className="mb-4">Explore Metronet's fiber internet availability and special offers by state.</p>
            <Link href="/metronet-state">
              <Button className="w-full">View States</Button>
            </Link>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
            <p className="mb-4">Discover the Metronet difference and why our customers love our service.</p>
            <Link href="/why-metronet">
              <Button className="w-full">Learn More</Button>
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            All plans include free standard installation and equipment. Prices shown are monthly rates.
            <span className="block mt-1">Last updated: April 10, 2025</span>
          </p>
        </div>
      </section>

      {/* Browse by State and City Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Browse Metronet Availability</h2>
          <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
            Find Metronet fiber internet availability in your state or city. Click on any location to learn more about
            our services in that area.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(states)
              .slice(0, 6)
              .map(([state, cities]) => (
                <div key={state} className="bg-gray-800/50 rounded-lg p-4">
                  <Link
                    href={`/metronet-state/${stateToSlug(state)}`}
                    className="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-3 block hover:text-purple-400 transition-colors"
                  >
                    {state} <span className="text-sm text-gray-400">({cities.length} cities)</span>
                  </Link>
                  <div className="grid grid-cols-2 gap-2">
                    {cities.slice(0, 6).map((city) => (
                      <Link
                        key={city}
                        href={`/city/${cityToSlug(city)}`}
                        className="text-gray-300 hover:text-purple-400 transition-colors py-1 flex items-center text-sm"
                      >
                        <ChevronRight className="h-3 w-3 mr-1 text-purple-500" />
                        {city}
                      </Link>
                    ))}
                    {cities.length > 6 && (
                      <Link
                        href={`/metronet-state/${stateToSlug(state)}`}
                        className="text-purple-400 hover:text-purple-300 transition-colors py-1 flex items-center text-sm font-medium"
                      >
                        <ChevronRight className="h-3 w-3 mr-1" />
                        View all {cities.length} cities
                      </Link>
                    )}
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/check-availability">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                View All States and Cities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div id="plans">
        {/* Use a static placeholder for Plans during SSR */}
        <Plans preview={true} />
      </div>

      <div id="deals">
        <NewCustomerDeals />
      </div>

      {/* New Related Resources section */}
      <RelatedResources />

      <div id="coverage">
        <CoverageMap />
      </div>

      <div id="reviews">
        <Reviews />
      </div>

      {/* New Expert Authors section */}
      <ExpertAuthors />

      <ExpertProfiles />

      <div id="faq">
        <SEOFAQ />
      </div>

      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </div>
  )
}
