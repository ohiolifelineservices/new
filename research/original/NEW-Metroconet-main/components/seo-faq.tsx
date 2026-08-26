"use client"

import { Disclosure } from "@headlessui/react"
import { ChevronDown } from "lucide-react"

export default function SEOFAQ() {
  return (
    <section id="faq" className="py-16 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Frequently Asked Questions</h2>
        <p className="text-center text-gray-400 mb-8">
          Get answers to common questions about Metronet fiber internet service.
        </p>

        <div className="space-y-4">
          <Disclosure as="div" className="bg-gray-800 rounded-lg overflow-hidden">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left font-medium focus:outline-none">
                  <span className="text-lg">What is fiber internet and how is it different from cable?</span>
                  <ChevronDown className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-gray-400`} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 pb-6 pt-2 text-gray-300">
                  <p className="mb-3">
                    <strong>Definition:</strong> Fiber internet uses glass or plastic fiber-optic cables to transmit
                    data using light signals, while cable internet uses copper coaxial cables.
                  </p>
                  <p className="mb-3">
                    <strong>Key differences:</strong>
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-3">
                    <li>
                      <strong>Speed:</strong> Fiber offers symmetrical speeds up to 5 Gbps, while cable typically has
                      slower upload speeds than download speeds.
                    </li>
                    <li>
                      <strong>Reliability:</strong> Fiber maintains consistent performance during peak usage times,
                      while cable often slows down when many people in your neighborhood are online.
                    </li>
                    <li>
                      <strong>Interference:</strong> Fiber is immune to electromagnetic interference that can affect
                      cable connections.
                    </li>
                    <li>
                      <strong>Future-proof:</strong> Fiber infrastructure can support much higher speeds with equipment
                      upgrades, while cable has more physical limitations.
                    </li>
                  </ul>
                  <p>
                    <em>Last updated: April 10, 2025</em>
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="bg-gray-800 rounded-lg overflow-hidden">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left font-medium focus:outline-none">
                  <span className="text-lg">Is MetroNet available in my area?</span>
                  <ChevronDown className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-gray-400`} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 pb-6 pt-2 text-gray-300">
                  <p className="mb-3">
                    <strong>Current coverage:</strong> MetroNet is available in multiple states including Colorado,
                    Florida, Iowa, Illinois, Indiana, Kentucky, Michigan, Minnesota, North Carolina, Nebraska, Ohio,
                    Texas, Virginia, and Wisconsin.
                  </p>
                  <p className="mb-3">
                    <strong>How to check availability:</strong>
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 mb-3">
                    <li>
                      Use our{" "}
                      <a href="/check-availability" className="text-green-400 hover:underline">
                        online availability checker
                      </a>
                    </li>
                    <li>Call our customer service team at 1-877-407-3224</li>
                    <li>Register your interest to be notified when service becomes available in your area</li>
                  </ol>
                  <p>
                    <em>Last updated: April 10, 2025</em>
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="bg-gray-800 rounded-lg overflow-hidden">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left font-medium focus:outline-none">
                  <span className="text-lg">What internet speeds does MetroNet offer?</span>
                  <ChevronDown className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-gray-400`} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 pb-6 pt-2 text-gray-300">
                  <p className="mb-3">
                    <strong>MetroNet residential plans and pricing:</strong>
                  </p>
                  <table className="w-full border-collapse mb-3">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2">Plan</th>
                        <th className="text-left py-2">Speed</th>
                        <th className="text-left py-2">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="py-2">Starter</td>
                        <td className="py-2">500/500 Mbps</td>
                        <td className="py-2">$60/mo</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2">Ultra</td>
                        <td className="py-2">1 Gig/1 Gig</td>
                        <td className="py-2">$70/mo</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2">Multi-Gig</td>
                        <td className="py-2">2 Gig/2 Gig</td>
                        <td className="py-2">$80/mo</td>
                      </tr>
                      <tr>
                        <td className="py-2">Hyper-Gig</td>
                        <td className="py-2">5 Gig/5 Gig</td>
                        <td className="py-2">Check Pricing</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mb-3">
                    <strong>Key features:</strong> All plans include symmetrical upload and download speeds, no data
                    caps, and no contracts.
                  </p>
                  <p>
                    <em>Last updated: April 10, 2025</em>
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="bg-gray-800 rounded-lg overflow-hidden">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left font-medium focus:outline-none">
                  <span className="text-lg">Does MetroNet have data caps or throttle internet speeds?</span>
                  <ChevronDown className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-gray-400`} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 pb-6 pt-2 text-gray-300">
                  <p className="mb-3">
                    <strong>No data caps:</strong> MetroNet does not impose data caps on any of our internet plans. You
                    can use as much data as you need without worrying about overage charges.
                  </p>
                  <p className="mb-3">
                    <strong>No throttling:</strong> We never throttle or slow down your internet speeds, regardless of
                    how much you stream, game, or download.
                  </p>
                  <p className="mb-3">
                    <strong>Advantage over competitors:</strong> Many cable and satellite providers implement data caps
                    (typically 1-1.2TB per month) and may charge overage fees or slow down your connection after you
                    reach that threshold.
                  </p>
                  <p>
                    <em>Last updated: April 10, 2025</em>
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="bg-gray-800 rounded-lg overflow-hidden">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left font-medium focus:outline-none">
                  <span className="text-lg">Can I bundle internet with TV and phone services?</span>
                  <ChevronDown className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-gray-400`} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 pb-6 pt-2 text-gray-300">
                  <p className="mb-3">
                    <strong>Yes, MetroNet offers flexible bundle options:</strong>
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-3">
                    <li>
                      <strong>Internet + TV:</strong> Combine fiber internet with a variety of channel packages
                    </li>
                    <li>
                      <strong>Internet + Phone:</strong> Add unlimited local and long-distance calling within the US
                    </li>
                    <li>
                      <strong>Triple Play:</strong> Get all three services for maximum savings
                    </li>
                  </ul>
                  <p className="mb-3">
                    <strong>Benefits of bundling:</strong> Save money with package discounts, simplify billing with a
                    single monthly statement, and enjoy the convenience of a single service provider.
                  </p>
                  <p className="mb-3">
                    <strong>Current promotions:</strong> Bundle deals may include discounted rates for the first few
                    months, free installation, or equipment upgrades.
                  </p>
                  <p>
                    <em>Last updated: April 10, 2025</em>
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </section>
  )
}
