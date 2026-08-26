import { ExternalLink, Award, BookOpen } from "lucide-react"
import Link from "next/link"

export default function ExpertProfiles() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Our Fiber Internet Experts</h2>
        <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
          Meet the professionals behind our network design, implementation, and customer experience.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-white">JD</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">James Davis, CCIE, MEF-CECP</h3>
                <p className="text-gray-400">Network Engineering Director, 15+ years experience</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              "I've personally designed and implemented fiber networks across 12 states since joining Metronet in 2018.
              Our fiber network is built with redundancy and future-proofing in mind, using the latest optical
              technologies that can support speeds well beyond what we currently offer.
            </p>
            <p className="text-gray-300 mb-4">
              In my experience, the biggest difference between our fiber network and traditional cable is consistency.
              We consistently achieve 99.9% uptime across all service areas, and I regularly test our infrastructure
              against industry benchmarks to ensure optimal performance."
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-900 text-purple-200 text-xs px-2 py-1 rounded">Fiber Network Design</span>
              <span className="bg-purple-900 text-purple-200 text-xs px-2 py-1 rounded">Network Security</span>
              <span className="bg-purple-900 text-purple-200 text-xs px-2 py-1 rounded">Infrastructure Scaling</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <Award className="w-4 h-4 mr-1" />
              <span className="mr-4">Cisco Certified Internetwork Expert</span>
              <BookOpen className="w-4 h-4 mr-1" />
              <span>Published in Network World, 2023</span>
            </div>
            <Link
              href="https://www.linkedin.com/"
              className="text-purple-400 hover:underline mt-2 inline-flex items-center"
            >
              LinkedIn Profile <ExternalLink className="ml-1 w-3 h-3" />
            </Link>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-white">SM</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Sarah Mitchell, CCXP, MBA</h3>
                <p className="text-gray-400">Customer Experience Lead, 10+ years in telecom</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              "Since joining Metronet in 2020, I've personally handled over 5,000 customer installations and support
              cases. What I've learned is that transparency and communication make all the difference in customer
              satisfaction.
            </p>
            <p className="text-gray-300 mb-4">
              We've redesigned our installation process based on direct customer feedback, reducing setup time by 35%
              while improving satisfaction scores. My team and I conduct monthly customer experience reviews to
              continuously refine our service delivery, and I personally train all new support staff on our
              customer-first approach."
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-teal-900 text-teal-200 text-xs px-2 py-1 rounded">Customer Experience</span>
              <span className="bg-teal-900 text-teal-200 text-xs px-2 py-1 rounded">Service Design</span>
              <span className="bg-teal-900 text-teal-200 text-xs px-2 py-1 rounded">Team Leadership</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <Award className="w-4 h-4 mr-1" />
              <span className="mr-4">Certified Customer Experience Professional</span>
              <BookOpen className="w-4 h-4 mr-1" />
              <span>Speaker, CX Summit 2024</span>
            </div>
            <Link
              href="https://www.linkedin.com/"
              className="text-purple-400 hover:underline mt-2 inline-flex items-center"
            >
              LinkedIn Profile <ExternalLink className="ml-1 w-3 h-3" />
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Our experts are available for media inquiries and speaking engagements. Contact our PR team at
            media@metronetreseller.com
          </p>
        </div>
      </div>
    </section>
  )
}
