"use client"

import Plans from "@/components/plans"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wifi, Tv, Package, Building, Check } from "lucide-react"

export default function PlansAndPricingClient() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-8 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/fiber-background.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center animate-fade-in-up">
            Metronet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
              Plans & Pricing
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-center max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Discover the power of Metronet's high-speed fiber internet plans. Find the perfect package to meet your
            needs and budget.
          </p>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a
              href="#plans-section"
              className="text-sm bg-black/30 hover:bg-black/50 px-3 py-1 rounded-full transition"
            >
              Plans
            </a>
            <a href="#why-choose" className="text-sm bg-black/30 hover:bg-black/50 px-3 py-1 rounded-full transition">
              Why Choose Metronet
            </a>
            <a href="#services" className="text-sm bg-black/30 hover:bg-black/50 px-3 py-1 rounded-full transition">
              Services
            </a>
            <a href="#faq" className="text-sm bg-black/30 hover:bg-black/50 px-3 py-1 rounded-full transition">
              FAQ
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-4">
        {/* Plans Section - Now placed at the top */}
        <div>
          <Plans featuredPlan="1Gb/1Gb" />
        </div>

        <section className="mt-12 bg-gray-900 p-8 rounded-lg" id="why-choose">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold scroll-margin-top-24">Why Choose Metronet Internet?</h2>
            <p className="text-xs text-gray-400">Last updated: April 10, 2025</p>
          </div>

          {/* Features highlight box */}
          <div className="mb-8 bg-gradient-to-r from-purple-900/50 to-black/50 p-6 rounded-lg border border-purple-800/30">
            <h3 className="text-xl font-semibold mb-4">Features That Set Us Apart</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Check className="text-green-500 mt-1 h-5 w-5 flex-shrink-0" />
                <span>100% Fiber-optic network end-to-end</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-500 mt-1 h-5 w-5 flex-shrink-0" />
                <span>True symmetrical upload & download speeds</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-500 mt-1 h-5 w-5 flex-shrink-0" />
                <span>No data caps or throttling ever</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-500 mt-1 h-5 w-5 flex-shrink-0" />
                <span>No hidden fees or surprise price hikes</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-500 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Local, U.S.-based customer support</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-green-500 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Price lock guarantee available</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Residential Plans</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>100% Fiber-optic network for lightning-fast speeds</li>
                <li>Symmetrical upload and download speeds</li>
                <li>No data caps or throttling</li>
                <li>Competitive pricing and transparent costs</li>
                <li>Whole home WiFi solutions available</li>
                <li>Plans starting from just $60/month</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Business Plans</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Dedicated business fiber internet</li>
                <li>Scalable solutions for businesses of all sizes</li>
                <li>99.999% uptime guarantee</li>
                <li>24/7 local support</li>
                <li>Custom pricing based on your business needs</li>
                <li>Advanced security features included</li>
              </ul>
            </div>
          </div>
          <p className="mb-4">
            Metronet offers a range of internet plans to suit every need and budget. From our basic packages perfect for
            light internet users to our high-speed plans ideal for households with multiple devices and heavy streaming,
            we've got you covered.
          </p>
          <p className="mb-4">
            Our fiber internet prices start at just $60 per month for residential customers, making high-speed
            internet accessible to more homes. For businesses, we offer custom pricing tailored to your specific
            requirements, ensuring you get the best value for your investment.
          </p>
          <p className="mb-6">
            With Metronet, you'll always know exactly what you're paying for – no hidden fees or surprise charges. Our
            transparent pricing policy means the price you see is the price you pay.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/check-availability">
              <Button variant="outline" className="bg-purple-600 text-white hover:bg-purple-700">
                Check Availability
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-12" id="services">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold scroll-margin-top-24">Metronet Services Overview</h2>
            <p className="text-xs text-gray-400">Last updated: April 10, 2025</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg transition hover:shadow-lg hover:shadow-purple-900/20">
              <Wifi className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Metronet Fiber Internet</h3>
              <p>
                Experience blazing-fast speeds with our 100% fiber-optic network. Perfect for streaming, gaming, and
                working from home.
              </p>
              <span
                onClick={() => window.open("https://www.metronet.com/residential/fiber-internet", "_blank")}
                className="text-purple-400 block mt-4 text-sm hover:underline cursor-pointer"
              >
                Learn more →
              </span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition hover:shadow-lg hover:shadow-purple-900/20">
              <Tv className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Metronet TV Packages</h3>
              <p>
                Enjoy crystal-clear HD channels and on-demand content with our flexible TV packages, designed to
                complement your internet service.
              </p>
              <span
                onClick={() => window.open("https://www.metronet.com/residential/tv", "_blank")}
                className="text-purple-400 block mt-4 text-sm hover:underline cursor-pointer"
              >
                Learn more →
              </span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition hover:shadow-lg hover:shadow-purple-900/20">
              <Package className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">TV and Internet Bundles</h3>
              <p>Save more with our bundled TV and internet packages. Get the best of both worlds at a great value.</p>
              <span
                onClick={() => window.open("https://www.metronet.com/residential/bundles", "_blank")}
                className="text-purple-400 block mt-4 text-sm hover:underline cursor-pointer"
              >
                Learn more →
              </span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition hover:shadow-lg hover:shadow-purple-900/20">
              <Building className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Metronet Business Solutions</h3>
              <p>
                Tailored fiber internet and networking solutions for businesses of all sizes. Boost your productivity
                with our reliable service.
              </p>
              <span
                onClick={() => window.open("https://www.metronet.com/business", "_blank")}
                className="text-purple-400 block mt-4 text-sm hover:underline cursor-pointer"
              >
                Learn more →
              </span>
            </div>
          </div>
        </section>

        <section className="mt-12" id="faq">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold scroll-margin-top-24">Frequently Asked Questions</h2>
            <p className="text-xs text-gray-400">Last updated: April 10, 2025</p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                What is the difference between Metronet's residential and business plans?
              </h3>
              <p>
                Residential plans are designed for home use, while business plans offer additional features like
                dedicated support, higher reliability, and custom solutions tailored to business needs. Business plans
                include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Dedicated internet access with guaranteed bandwidth</li>
                <li>Service level agreements (SLAs) with 99.999% uptime</li>
                <li>Static IP addresses</li>
                <li>Priority technical support with faster response times</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Are there any hidden fees in Metronet's pricing?</h3>
              <p>
                No, Metronet prides itself on transparent pricing. The price you see is the price you pay, with no
                hidden fees or surprise charges. We clearly disclose all potential fees upfront, including equipment
                rental, installation costs, and optional services. Our bills are straightforward and easy to understand.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Can I bundle Metronet internet with other services?</h3>
              <p>
                Yes, Metronet offers bundled packages that can include internet, TV, and phone services. Check our
                current promotions for the latest bundle deals. Bundling services can save you up to 25% compared to
                purchasing each service individually.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How often does Metronet update its pricing and plans?</h3>
              <p>
                Metronet regularly reviews and updates its plans and pricing to ensure we're offering the best value to
                our customers. Always check our website for the most current information. We typically review our
                pricing structure quarterly, but existing customers are often grandfathered into their original rates
                for the duration of their contract term.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">What is Metronet Whole Home WiFi?</h3>
              <p>
                Metronet Whole Home WiFi is our premium WiFi solution that ensures seamless coverage throughout your
                entire home, eliminating dead spots and providing consistent high-speed internet access in every room.
                The system uses mesh WiFi technology with multiple access points to create a single, robust network
                throughout your home.
              </p>
              <table className="w-full mt-3 text-sm">
                <thead className="bg-black/30 text-left">
                  <tr>
                    <th className="p-2">Coverage</th>
                    <th className="p-2">Device Capacity</th>
                    <th className="p-2">Monthly Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="p-2">Up to 3,000 sq ft</td>
                    <td className="p-2">75+ devices</td>
                    <td className="p-2">$9.95/month</td>
                  </tr>
                  <tr>
                    <td className="p-2">3,000+ sq ft</td>
                    <td className="p-2">100+ devices</td>
                    <td className="p-2">$14.95/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Expert Author */}
        <section className="mt-12 bg-gray-900 p-6 rounded-lg">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-3xl">👨‍💻</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Written by Michael Chen</h3>
              <p className="text-gray-400 text-sm mb-3">Telecommunications Expert, 12+ years experience</p>
              <p className="text-gray-300">
                Michael specializes in fiber optic technology and has helped thousands of customers find the right
                internet solution for their homes and businesses. He holds a degree in Computer Networking and is
                certified in Fiber Optic Technologies.
              </p>
              <div className="mt-3">
                <a href="#" className="text-purple-400 text-sm hover:underline">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/promotions" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
              <h3 className="font-semibold mb-1">Current Promotions</h3>
              <p className="text-sm text-gray-400">Explore our limited-time offers and deals</p>
            </Link>
            <Link href="/check-availability" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
              <h3 className="font-semibold mb-1">Service Area Map</h3>
              <p className="text-sm text-gray-400">See if Metronet is available in your area</p>
            </Link>
            <div
              onClick={() => window.open("https://www.metronet.com/why-fiber", "_blank")}
              className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition cursor-pointer"
            >
              <h3 className="font-semibold mb-1">Fiber vs. Cable</h3>
              <p className="text-sm text-gray-400">Learn why fiber is superior to traditional cable</p>
            </div>
            <div
              onClick={() => window.open("https://www.metronet.com/support/wifi-help", "_blank")}
              className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition cursor-pointer"
            >
              <h3 className="font-semibold mb-1">WiFi Solutions</h3>
              <p className="text-sm text-gray-400">Optimize your home network performance</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
