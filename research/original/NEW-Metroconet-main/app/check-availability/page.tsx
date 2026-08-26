import AvailabilityChecker from "@/components/availability-checker"
import type { Metadata } from "next"
import { MapPin, Zap, Users, Building, Wifi, Globe, CheckCircle, Clock, Shield, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { states, getAllCitiesWithStates, cityToSlug, stateToSlug } from "@/lib/city-data"
import { GoogleAnalytics } from "@/components/google-analytics"

export const metadata: Metadata = {
  title: "Check Metronet Availability | Free Installation | Unlimited Data",
  description:
    "Is Metronet in your neighborhood? Check now and be first in line for blazing-fast fiber internet starting at $60. Free installation, unlimited data, and no deposit required. Enter your address and discover amazing speeds up to 5 Gig!",
  keywords:
    "Metronet availability, fiber internet availability, check Metronet service, Metronet coverage map, fiber optic availability, high-speed internet availability, Metronet service area, no deposit, free installation, unlimited data",
}

export default function CheckAvailability() {
  const allCitiesWithStates = getAllCitiesWithStates()
  const totalCities = allCitiesWithStates.length
  const totalStates = Object.keys(states).length

  return (
    <div className="min-h-screen bg-black text-white">
      <GoogleAnalytics />
      {/* Hero Section with Enhanced Visual Appeal */}
      <section className="relative py-10 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 opacity-60"></div>
        <div className="absolute inset-0 bg-[url('/fiber-map-background.jpg')] bg-cover bg-center mix-blend-overlay opacity-40"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
                Check{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                  Metronet Availability
                </span>
              </h1>
              <p className="text-sm md:text-base mb-6 animate-fade-in-up animation-delay-200 max-w-lg text-gray-300">
                Find out if Metronet's lightning-fast fiber internet is available at your address. Our expanding network
                brings symmetrical speeds up to 5 Gig to more communities every day.
              </p>
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 shadow-xl animate-fade-in-up animation-delay-300">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-purple-400" />
                  Coverage Map
                </h2>
                <AvailabilityChecker />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image__6_-removebg-preview-QjJk0fdhLlEaYNcf8hHsHxaOsCthGG.png"
                  alt="Metronet Fiber Coverage Map"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl border border-purple-500/20 bg-black/40 p-2"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-purple-600 to-teal-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Expanding to new areas monthly!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats Section */}
        <section className="mb-16 bg-gradient-to-r from-gray-900 to-black p-6 rounded-xl border border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{totalStates}</p>
              <p className="text-sm md:text-base">States Covered</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">{totalCities}+</p>
              <p className="text-sm md:text-base">Cities Served</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">5 Gig</p>
              <p className="text-sm md:text-base">Max Speed</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</p>
              <p className="text-sm md:text-base">Uptime Reliability</p>
            </div>
          </div>
        </section>

        {/* New Section: Browse by State/City - Direct Display */}
        <section className="mt-16 bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-center">Browse Metronet Availability by State and City</h2>
          <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
            Metronet is currently available in {totalCities}+ cities across {totalStates} states. Browse all cities
            where our fiber internet service is available.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(states).map(([state, cities]) => (
              <div key={state} className="bg-gray-800/50 rounded-lg p-4">
                <Link
                  href={`/metronet-state/${stateToSlug(state)}`}
                  className="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-3 block hover:text-purple-400 transition-colors"
                >
                  {state} <span className="text-sm text-gray-400">({cities.length} cities)</span>
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  {cities.map((city) => (
                    <Link
                      key={city}
                      href={`/city/${cityToSlug(city)}`}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 py-1 flex items-center text-sm"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 text-purple-500" />
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Expansion Section */}
        <section className="mt-16 bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Expanding Our Network</h2>
              <p className="mb-4 text-gray-300">
                Metronet is rapidly growing and bringing the power of fiber internet to more communities across the
                country. Our expansion plans are driven by community interest and demand.
              </p>
              <p className="mb-6 text-gray-300">
                Even if we're not currently available in your area, checking your address helps us understand where the
                need for our services is greatest. Join our waitlist to be notified when we arrive in your neighborhood!
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Get priority installation when we arrive in your area</p>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Receive exclusive offers available only to waitlist members</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-sm text-gray-300">No obligation to sign up when service becomes available</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-black/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-center">Recent Expansion Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-400">Colorado</h4>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>Colorado Springs</li>
                      <li>Denver (Coming Soon)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <h4 className="font-semibold text-teal-400">Florida</h4>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>Orlando</li>
                      <li>Tallahassee</li>
                      <li>Daytona Beach</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-400">Texas</h4>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>Bryan</li>
                      <li>Austin (Coming Soon)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-400">Virginia</h4>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>Norfolk</li>
                      <li>Richmond (Coming Soon)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Metronet Section - Redesigned */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Metronet?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.02]">
              <Zap className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">100% Fiber-Optic Network</h3>
              <p className="text-gray-300">
                Experience unparalleled speed and reliability with our state-of-the-art fiber infrastructure that
                delivers symmetrical upload and download speeds.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
                  <span>Symmetrical speeds up to 5 Gbps</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
                  <span>99.9% uptime reliability</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
                  <span>Future-proof technology</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-[1.02]">
              <Users className="h-12 w-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Local, US-Based Support</h3>
              <p className="text-gray-300">
                Get help when you need it from our knowledgeable, friendly customer support team who understand your
                local network conditions.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-teal-400 mr-2 flex-shrink-0" />
                  <span>24/7 technical support</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-teal-400 mr-2 flex-shrink-0" />
                  <span>US-based call centers</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-teal-400 mr-2 flex-shrink-0" />
                  <span>Multiple support channels</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02]">
              <Building className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Residential & Business Solutions</h3>
              <p className="text-gray-300">
                Tailored plans for homes and businesses of all sizes, ensuring you get the service you need at
                competitive prices.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                  <span>Flexible residential plans</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                  <span>Dedicated business solutions</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                  <span>Custom enterprise options</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 transform hover:scale-[1.02]">
              <Wifi className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Whole Home WiFi</h3>
              <p className="text-gray-300">
                Enjoy seamless connectivity throughout your entire home with our advanced WiFi solutions that eliminate
                dead spots.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  <span>Mesh WiFi technology</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  <span>Easy setup and management</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  <span>Smart home ready</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-[1.02]">
              <Globe className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">No Data Caps</h3>
              <p className="text-gray-300">
                Stream, game, and browse without limits. We never cap your data or throttle your speeds, even during
                peak usage times.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                  <span>Unlimited data usage</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                  <span>No throttling or slowdowns</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                  <span>No overage charges</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 transform hover:scale-[1.02]">
              <Zap className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Symmetrical Speeds</h3>
              <p className="text-gray-300">
                Enjoy equally fast upload and download speeds, perfect for video calls, cloud backups, and content
                creation.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-2 flex-shrink-0" />
                  <span>Same upload & download speeds</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-2 flex-shrink-0" />
                  <span>Ideal for work-from-home</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-red-400 mr-2 flex-shrink-0" />
                  <span>Perfect for content creators</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">How often does Metronet expand to new areas?</h3>
              <p className="text-gray-300">
                We're constantly evaluating new areas for expansion. Our growth is ongoing, with new communities added
                regularly based on demand and infrastructure capabilities. We typically announce new service areas
                quarterly, with construction beginning shortly after announcements.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">What if Metronet isn't available in my area yet?</h3>
              <p className="text-gray-300">
                If we're not in your area yet, you can sign up for updates using our availability checker. We'll notify
                you as soon as Metronet becomes available in your neighborhood. Your interest helps us prioritize future
                expansion areas, so checking availability is valuable even if we're not there yet.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Is Metronet available for businesses?</h3>
              <p className="text-gray-300">
                Yes! We offer specialized business fiber internet solutions with dedicated bandwidth, static IP
                addresses, and enhanced service level agreements. Our business services team can create custom packages
                for organizations of all sizes, from small offices to large enterprises with multiple locations.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">How does Metronet compare to other ISPs in my area?</h3>
              <p className="text-gray-300">
                Metronet offers 100% fiber-optic internet with symmetrical speeds, no data caps, and exceptional
                customer service. Unlike cable or DSL providers, our fiber network maintains consistent speeds even
                during peak usage times, and our upload speeds match our download speeds—a significant advantage for
                remote work, video conferencing, and content creation.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">What speeds does Metronet offer?</h3>
              <p className="text-gray-300">
                We offer a range of speeds to suit different needs, from 500 Mbps to 5 Gbps. All plans feature
                symmetrical upload and download speeds with no data caps. Our most popular residential plan is 1 Gbps,
                which easily supports multiple 4K streams, video conferencing, online gaming, and dozens of connected
                devices simultaneously.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">What is the installation process like?</h3>
              <p className="text-gray-300">
                Our professional installation typically takes 2-4 hours. A technician will bring fiber to your home,
                install an Optical Network Terminal (ONT), set up your router, and ensure everything is working
                properly. We offer flexible scheduling options, including evenings and weekends in most areas, to
                minimize disruption to your schedule.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-16 bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-xl border border-purple-500/20">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/50 p-6 rounded-xl">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "I was thrilled when Metronet finally came to our neighborhood. The installation was quick and
                professional, and the speeds are incredible compared to my old cable provider."
              </p>
              <p className="font-semibold">Michael T.</p>
              <p className="text-sm text-gray-400">Colorado Springs, CO</p>
            </div>
            <div className="bg-black/50 p-6 rounded-xl">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "I signed up for the waitlist when I heard Metronet was coming to our city. They kept me updated
                throughout the construction process, and I was one of the first to get installed!"
              </p>
              <p className="font-semibold">Sarah K.</p>
              <p className="text-sm text-gray-400">Orlando, FL</p>
            </div>
            <div className="bg-black/50 p-6 rounded-xl">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "As a small business owner, reliable internet is critical. Metronet's business service has been
                rock-solid for over a year now, and their customer support is exceptional."
              </p>
              <p className="font-semibold">David R.</p>
              <p className="text-sm text-gray-400">Norfolk, VA</p>
            </div>
          </div>
        </section>

        {/* Browse by State Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Browse Metronet Availability by State</h2>

            <p className="text-center mb-8 max-w-3xl mx-auto">
              Select your state to see detailed information about Metronet's fiber internet services, coverage areas,
              and special offers available in your region.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
              {Object.keys(states).map((state) => (
                <Link
                  key={state}
                  href={`/metronet-state/${stateToSlug(state)}`}
                  className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors text-center"
                >
                  <span className="font-medium">{state}</span>
                  <span className="block text-sm text-gray-400 mt-1">
                    {states[state as keyof typeof states].length}{" "}
                    {states[state as keyof typeof states].length === 1 ? "city" : "cities"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-12 text-center">
          <p className="mb-6 text-xl">Ready to experience the Metronet difference?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/plans-pricing">
              <Button className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-6 text-lg">
                View Plans & Pricing
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-900/30 hover:text-white px-8 py-6 text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
