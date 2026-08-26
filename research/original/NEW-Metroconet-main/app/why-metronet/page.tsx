import { Suspense } from "react"
import { Shield, Wifi, Tv, Building, Globe, FastForwardIcon as Speed } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { ReasonsSection, MetronetDifferenceSection, AdditionalBenefitsSection } from "./client-components"

// Update the metadata section to include the promotional information
export const metadata: Metadata = {
  title: "Why Choose Metronet | Free Installation | Unlimited Data | No Contracts",
  description:
    "See why Metronet is the top choice for fiber internet starting at $60. Free installation, unlimited data, no deposit required, and no contracts. Enjoy 99.9% reliability, symmetrical speeds up to 5 Gbps, and 24/7 local support.",
  keywords:
    "why choose Metronet, fiber internet benefits, Metronet vs cable, best internet provider, fiber optic internet, symmetrical speeds, no data caps, reliable internet service, no deposit, free installation, unlimited data",
}

// Update the additionalBenefits array to include more detailed information
const additionalBenefits = [
  {
    title: "No Long-Term Contracts",
    icon: "CheckCircle",
    description:
      "Enjoy the freedom of no long-term commitments. Our service quality keeps customers loyal, not contracts.",
  },
  {
    title: "30-Day Money-Back Guarantee",
    icon: "Shield",
    description:
      "Try our service risk-free with our 30-day satisfaction guarantee. We're confident you'll love the Metronet difference.",
  },
  {
    title: "Free Professional Installation",
    icon: "Zap",
    description: "Expert technicians will set up your service with minimal disruption to your home and schedule.",
  },
  {
    title: "24/7 Local Customer Support",
    icon: "HeadphonesIcon",
    description:
      "Get help when you need it from our US-based support team who understand your local network conditions.",
  },
]

// Update the main component to include more SEO-optimized content
export default function WhyMetronet() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-10 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/fiber-background.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center animate-fade-in-up">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">Metronet</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-center max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Experience the future of internet with our cutting-edge fiber technology, symmetrical speeds up to 5 Gbps,
            and unmatched customer service.
          </p>

          {/* Add quick navigation links */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up animation-delay-300">
            <a
              href="#fiber-benefits"
              className="text-sm bg-black/30 hover:bg-black/50 px-3 py-1 rounded-full transition"
            >
              Fiber Benefits
            </a>
            <a href="#reasons" className="text-sm bg-black/30 hover:bg-black/50 px-3 py-1 rounded-full transition">
              8 Reasons to Switch
            </a>
            <a
              href="#additional-benefits"
              className="text-sm bg-black/30 hover:bg-black/50 px-3 py-1 rounded-full transition"
            >
              Additional Benefits
            </a>
            <a
              href="#metronet-difference"
              className="text-sm bg-black/30 hover:bg-black/50 px-3 py-1 rounded-full transition"
            >
              The Metronet Difference
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

      {/* Add new Fiber Benefits section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black" id="fiber-benefits">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center scroll-margin-top-24">The Fiber Internet Advantage</h2>
          <div className="bg-gray-800/50 p-6 rounded-lg mb-8 border border-gray-700">
            <p className="text-lg mb-4">
              Metronet delivers 100% fiber-optic internet directly to your home or business, providing a superior
              internet experience compared to traditional cable or DSL connections. Here's why fiber technology stands
              apart:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Symmetrical Speeds</h3>
                <p>
                  Unlike cable internet that offers faster download than upload speeds, Metronet's fiber network
                  delivers identical upload and download speeds. This means you can upload large files, host video
                  conferences, and stream content just as quickly as you download.
                </p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-teal-400">Unmatched Reliability</h3>
                <p>
                  Fiber-optic cables are immune to electrical interference, weather conditions, and signal degradation
                  that plague traditional copper cables. This results in 99.9% uptime and consistent performance even
                  during peak usage hours.
                </p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Lower Latency</h3>
                <p>
                  Experience significantly reduced lag with fiber's lower latency connections. This is crucial for
                  online gaming, video conferencing, and real-time applications where milliseconds matter.
                </p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-green-400">Future-Proof Technology</h3>
                <p>
                  As internet demands continue to grow, fiber infrastructure can easily scale to accommodate higher
                  speeds without replacing the physical lines. When you choose Metronet fiber, you're investing in
                  technology that will meet your needs for years to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="reasons">
        <ReasonsSection />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <AdditionalBenefitsSection benefits={additionalBenefits} />
      </Suspense>

      <div id="metronet-difference">
        <MetronetDifferenceSection />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <section className="mt-16" id="services">
          <h2 className="text-3xl font-bold mb-6 scroll-margin-top-24">Comprehensive Metronet Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/plans-pricing" className="block">
              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300">
                <Wifi className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Metronet Fiber Internet</h3>
                <p className="mb-4">
                  Experience lightning-fast speeds with our 100% fiber-optic network. Enjoy symmetrical upload and
                  download speeds for seamless streaming, gaming, and working from home.
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-300 mb-4">
                  <li>Speeds from 500 Mbps to 5 Gbps</li>
                  <li>No data caps or throttling</li>
                  <li>99.9% uptime reliability</li>
                </ul>
              </div>
            </Link>
            <Link href="/plans-pricing" className="block">
              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300">
                <Tv className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Metronet TV</h3>
                <p className="mb-4">
                  Enhance your entertainment with our Metronet TV packages. Choose from a variety of channels and enjoy
                  crystal-clear HD content on multiple devices.
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-300 mb-4">
                  <li>Flexible channel packages</li>
                  <li>HD and 4K content available</li>
                  <li>Stream on multiple devices</li>
                </ul>
              </div>
            </Link>
            <Link href="/plans-pricing" className="block">
              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300">
                <Building className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Metronet Business Solutions</h3>
                <p className="mb-4">
                  Power your business with our dedicated fiber internet solutions. From small offices to large
                  enterprises, we offer scalable plans to meet your specific needs.
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-300 mb-4">
                  <li>Dedicated business fiber</li>
                  <li>Custom bandwidth options</li>
                  <li>Priority technical support</li>
                </ul>
              </div>
            </Link>
            <Link href="/support" className="block">
              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300">
                <Globe className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Metronet Whole Home WiFi</h3>
                <p className="mb-4">
                  Eliminate dead spots and enjoy consistent high-speed internet throughout your entire home with our
                  advanced Whole Home WiFi solution.
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-300 mb-4">
                  <li>Mesh WiFi technology</li>
                  <li>Easy setup and management</li>
                  <li>Coverage for homes of all sizes</li>
                </ul>
              </div>
            </Link>
            <Link href="/support" className="block">
              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300">
                <Shield className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
                <p className="mb-4">
                  Protect your online activities with our built-in security features. Stay safe from cyber threats while
                  enjoying our high-speed internet service.
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-300 mb-4">
                  <li>Network-level protection</li>
                  <li>Parental controls</li>
                  <li>Identity theft protection</li>
                </ul>
              </div>
            </Link>
            <Link href="/support" className="block">
              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300">
                <Speed className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Speedtest Metronet</h3>
                <p className="mb-4">
                  Verify your internet speed anytime with our built-in speed test tool. Ensure you're getting the
                  blazing-fast speeds you're paying for.
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-300 mb-4">
                  <li>Real-time speed monitoring</li>
                  <li>Historical performance tracking</li>
                  <li>Troubleshooting assistance</li>
                </ul>
              </div>
            </Link>
          </div>
        </section>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <section className="mt-16 mb-16 bg-black" id="faq">
          <h2 className="text-3xl font-bold mb-6 scroll-margin-top-24">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                What makes Metronet's fiber internet different from cable or DSL?
              </h3>
              <p className="text-gray-300">
                Metronet's fiber-optic network provides symmetrical upload and download speeds, lower latency, and
                greater reliability compared to traditional cable or DSL connections. Our fiber technology transmits
                data using light signals through glass fibers, resulting in faster, more consistent internet for all
                your online activities. Unlike cable networks that slow down during peak usage times when your neighbors
                are online, Metronet's dedicated fiber connection maintains consistent performance 24/7.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Is Metronet available in my area?</h3>
              <p className="text-gray-300">
                Metronet is continuously expanding its service area across multiple states including Indiana, Illinois,
                Iowa, Kentucky, Michigan, Minnesota, Ohio, North Carolina, and more. You can check availability for your
                specific address on our{" "}
                <Link href="/check-availability" className="text-purple-400 hover:underline">
                  availability page
                </Link>
                . If we're not in your neighborhood yet, you can sign up to be notified when service becomes available
                in your area.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Does Metronet offer services for businesses?</h3>
              <p className="text-gray-300">
                Yes, Metronet provides tailored fiber internet solutions for businesses of all sizes. Our business
                services include dedicated internet access with guaranteed bandwidth, symmetrical speeds up to 10 Gbps,
                service level agreements (SLAs) with 99.999% uptime, static IP addresses, and priority technical
                support. We also offer custom enterprise solutions for larger organizations with multiple locations or
                specialized networking requirements.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How does Metronet ensure reliable service?</h3>
              <p className="text-gray-300">
                We invest in state-of-the-art fiber-optic infrastructure, perform regular maintenance, and have a
                dedicated team monitoring our network 24/7 to ensure consistent, high-quality service for all our
                customers. Our fiber network is built with redundancy in mind, meaning we have backup systems in place
                to prevent outages. Additionally, fiber-optic cables are immune to electrical interference and weather
                conditions that often affect traditional copper cable networks, resulting in more reliable service even
                during storms.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">What is Metronet Whole Home WiFi?</h3>
              <p className="text-gray-300">
                Metronet Whole Home WiFi is our advanced solution that ensures seamless WiFi coverage throughout your
                entire home. It eliminates dead spots and provides consistent high-speed internet access in every room.
                Using mesh WiFi technology, our system creates a single, powerful network that intelligently routes your
                connection through multiple access points for optimal performance. This is especially valuable for
                larger homes, multi-story buildings, or properties with challenging layouts where traditional
                single-router setups struggle to provide consistent coverage.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How does Metronet pricing compare to other providers?</h3>
              <p className="text-gray-300">
                Metronet offers competitive pricing for superior fiber internet service. While our rates may sometimes
                appear slightly higher than promotional cable internet offers, we provide significantly better value
                through symmetrical speeds, no data caps, no hidden fees, and more reliable service. Many customers find
                that when comparing the actual performance and total cost (including equipment fees, data overage
                charges, and price increases after promotional periods), Metronet provides better overall value for
                their internet investment.
              </p>
            </div>
          </div>
        </section>
      </Suspense>

      {/* Add customer testimonials section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black mb-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-gray-300">
                "After years of dealing with cable internet outages and slow upload speeds, switching to Metronet was
                like night and day. I work from home and need reliable internet for video calls and file transfers. With
                Metronet, I've had zero outages in 8 months and my upload speeds are just as fast as downloads."
              </p>
              <p className="font-semibold">Michael T.</p>
              <p className="text-sm text-gray-400">Software Developer, Indianapolis</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-gray-300">
                "Our family of five was constantly fighting over bandwidth with our old provider. Someone would start
                streaming and everyone else's devices would slow to a crawl. With Metronet's fiber connection, we can
                have multiple 4K streams, online gaming, and video calls happening simultaneously without any issues."
              </p>
              <p className="font-semibold">Sarah K.</p>
              <p className="text-sm text-gray-400">Mother of three, Grand Rapids</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-gray-300">
                "As a small business owner, I need reliable internet that won't let me down during important client
                meetings. Metronet's business service has been rock-solid for over a year now. Their customer service is
                exceptional too - when I had a question about my bill, a real person answered the phone and resolved my
                issue in minutes."
              </p>
              <p className="font-semibold">David R.</p>
              <p className="text-sm text-gray-400">Marketing Agency Owner, Lexington</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
