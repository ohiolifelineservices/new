import Image from "next/image"
import Link from "next/link"

export default function ExpertAuthors() {
  return (
    <section className="py-8 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-bold mb-2 text-center">Written by Our Fiber Internet Experts</h2>
          <p className="text-gray-400 text-center max-w-2xl">
            Our content is created by industry professionals with years of experience in telecommunications and fiber
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="James Davis"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">James Davis</h3>
              <p className="text-green-500 text-sm mb-2">Fiber Technology Specialist</p>
              <p className="text-sm text-gray-400">
                15+ years experience in fiber optic networks and telecommunications infrastructure.
              </p>
              <Link
                href="https://www.linkedin.com/in/jamesdavis"
                className="text-sm text-blue-400 hover:underline mt-2 inline-block"
              >
                LinkedIn Profile
              </Link>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Sarah Mitchell"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Sarah Mitchell</h3>
              <p className="text-green-500 text-sm mb-2">Consumer ISP Analyst</p>
              <p className="text-sm text-gray-400">
                Former ISP product manager with expertise in residential internet solutions and pricing.
              </p>
              <Link
                href="https://www.linkedin.com/in/sarahmitchell"
                className="text-sm text-blue-400 hover:underline mt-2 inline-block"
              >
                LinkedIn Profile
              </Link>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Michael Chen"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Michael Chen</h3>
              <p className="text-green-500 text-sm mb-2">Network Performance Engineer</p>
              <p className="text-sm text-gray-400">
                Specializes in fiber network optimization and performance benchmarking.
              </p>
              <Link
                href="https://www.linkedin.com/in/michaelchen"
                className="text-sm text-blue-400 hover:underline mt-2 inline-block"
              >
                LinkedIn Profile
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Last updated: April 10, 2025 | Content reviewed by our editorial team</p>
        </div>
      </div>
    </section>
  )
}
