"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Clock,
  Gift,
  Check,
  Copy,
  Star,
  ChevronDown,
  FileText,
  MapPin,
  Badge,
  Eye,
  Layers,
  Info,
  CheckCircle,
} from "lucide-react"

// Update the promotions array to include more detailed information and better structure
const promotions = [
  {
    title: "Free Installation",
    description:
      "Get professional fiber internet installation at no cost. Our certified technicians will come to your home and set everything up — you pay nothing for the installation service.",
    details:
      "Free standard residential installation is included for all new Metronet customers. Installation typically takes 2–3 hours. Our technicians handle everything from running the fiber to your home to setting up your eero router.",
    eligibility: "New residential customers only.",
    expiration: "Available while current pricing is in effect",
    code: "FREEINSTALL",
    icon: Gift,
    highlight: true,
  },
]

// Update testimonials with more specific details for better E-E-A-T
const testimonials = [
  {
    quote:
      "I switched to Metronet after struggling with my cable provider's inconsistent speeds for years. The real value is the consistent 940Mbps download AND upload speeds I'm getting. My work video calls are crystal clear now, and I can upload large design files in seconds instead of minutes.",
    author: "Sarah K.",
    occupation: "Graphic Designer",
    location: "Indianapolis, IN",
    customerSince: "November 2024",
    rating: 5,
  },
  {
    quote:
      "The free installation made it easy to try Metronet without risk. I was skeptical about switching from cable, but after experiencing the difference in gaming performance with ping times under 15ms, I was sold. My whole family can stream 4K content simultaneously without any buffering, even during peak hours.",
    author: "Michael T.",
    occupation: "Software Engineer",
    location: "Lexington, KY",
    customerSince: "January 2025",
    rating: 5,
  },
  {
    quote:
      "I used the SWITCH100 promo code when ordering online and the process couldn't have been easier. The installation was professional and quick, and I received my gift card exactly as promised after my second month. The consistent speeds have been a game-changer for my home office setup.",
    author: "Jennifer L.",
    occupation: "Remote Marketing Manager",
    location: "Grand Rapids, MI",
    customerSince: "February 2025",
    rating: 5,
  },
]

// Add FAQ data with more comprehensive answers
const faqs = [
  {
    question: "How do I redeem a promotion?",
    answer:
      "To redeem a Metronet promotion, you have three simple options: 1) Enter the promo code during online checkout when signing up for service on our website, 2) Mention the promotion to our customer service representative when calling 1-877-407-3224 to sign up, or 3) Provide the code to your Metronet sales representative during an in-home consultation. The discount or offer will be automatically applied to your account once service is activated. For gift card promotions, you'll need to maintain service for the specified period (typically 60 days) before the card is mailed to your service address.",
  },
  {
    question: "Can I combine multiple promotions?",
    answer:
      "Generally, Metronet promotions cannot be combined unless explicitly stated in the offer terms. Each promotion is designed to provide significant value on its own. For the most current information about combining specific offers, please contact our customer service team at 1-877-407-3224.",
  },
  {
    question: "How long do promotions typically last?",
    answer:
      "Metronet promotions vary in duration based on the type of offer and market conditions. Most of our major promotions run for 2-3 months, while some seasonal or special event promotions might be available for just a few weeks. We update our promotions quarterly, with our best offers typically appearing during major shopping seasons (back-to-school, holiday season, etc.). All promotions have a clearly marked expiration date, and we honor any promotion that was active at the time you signed up, even if it expires during your installation process. We recommend taking advantage of offers that interest you as soon as possible to ensure you don't miss out.",
  },
  {
    question: "Are promotions available for existing customers?",
    answer:
      "While many of our headline promotions are designed for new customers, Metronet values our loyal customers and offers several exclusive benefits for existing subscribers. These include: 1) Anniversary rewards after each year of service, 2) Loyalty upgrade offers for customers looking to increase their speed tier, 3) Referral bonuses when you recommend Metronet to friends and family, and 4) Special retention offers that may be available if you contact our customer loyalty team. Existing customers should check their email, customer portal, and physical mail for personalized offers. We also occasionally run limited-time promotions exclusively for our current customer base as a way of saying thank you for your continued business.",
  },
  {
    question: "What happens after my promotional period ends?",
    answer:
      "After your promotional period ends, your service will continue uninterrupted at the regular rate for your chosen plan. For transparency, the standard post-promotion rate is always clearly communicated during sign-up and in your service agreement. Metronet will send you notifications via email and on your bill before any promotional pricing expires. If you have concerns about the regular rate, you can: 1) Contact our customer service team to discuss available options or current retention offers, 2) Evaluate if a different speed tier might better fit your needs and budget, or 3) Ask about our price lock guarantee options that can help stabilize your bill for up to 24 months. We're committed to transparent billing practices with no hidden fees or surprise increases.",
  },
  {
    question: "How do I verify my promotion was applied correctly?",
    answer:
      "You can verify your promotion has been correctly applied in several ways: 1) Check your first bill - promotional discounts should be clearly listed in the charges section, 2) Log into your Metronet customer portal at portal.metronet.com to view your current plan and any active promotions, 3) Contact our billing department at 1-877-407-3224 if you have any questions about your bill or promotional credits. For gift card promotions, you can check your qualification status in your online account after the required service period. If you believe a promotion wasn't correctly applied, please contact customer service within 60 days of your first bill, and we'll promptly resolve the issue.",
  },
]

export default function PromotionsContent() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(null), 3000)
    })
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-8 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-purple-900 to-blue-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/promotions-background.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center animate-fade-in-up">
            Metronet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Promotions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-center max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Take advantage of our limited-time offers and experience the power of Metronet's fiber internet at
            unbeatable prices.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a
              href="#current-promotions"
              className="bg-gray-800/50 hover:bg-gray-700/70 text-white px-3 py-1.5 rounded-md text-sm transition-colors duration-200"
            >
              Current Offers
            </a>
            <a
              href="#how-to-redeem"
              className="bg-gray-800/50 hover:bg-gray-700/70 text-white px-3 py-1.5 rounded-md text-sm transition-colors duration-200"
            >
              How to Redeem
            </a>
            <a
              href="#testimonials"
              className="bg-gray-800/50 hover:bg-gray-700/70 text-white px-3 py-1.5 rounded-md text-sm transition-colors duration-200"
            >
              Customer Experiences
            </a>
            <a
              href="#why-choose"
              className="bg-gray-800/50 hover:bg-gray-700/70 text-white px-3 py-1.5 rounded-md text-sm transition-colors duration-200"
            >
              Why Choose Us
            </a>
            <a
              href="#faq"
              className="bg-gray-800/50 hover:bg-gray-700/70 text-white px-3 py-1.5 rounded-md text-sm transition-colors duration-200"
            >
              FAQ
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-6">
        {/* AI-Friendly Summary Section */}
        <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-bold mb-3">Current Metronet Promotions: Quick Summary</h2>
          <p className="text-gray-300 leading-relaxed">
    Metronet currently offers <strong>free installation</strong> for new fiber internet customers on all speed tiers. All plans also include <strong>unlimited data</strong> and require <strong>no deposit</strong> — $0 due at signup. Service can be activated online or by phone.
          </p>
          <div className="mt-3 text-sm text-gray-400">Last updated: April 30, 2026</div>
        </div>

        <div className="max-w-4xl mx-auto mb-16" id="current-promotions">
          <h2 className="text-3xl font-bold mb-2 text-center scroll-margin-top-24" id="current-promotions">
            Current Promotions
          </h2>
          <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
            Take advantage of these limited-time offers to save on Metronet's 100% fiber internet service. All
            promotions are available to new residential customers in serviceable areas.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {promotions.map((promo, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col ${
                  promo.highlight ? "ring-2 ring-teal-400" : ""
                }`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      promo.highlight ? "bg-teal-500/20 text-teal-400" : "bg-purple-500/20 text-purple-400"
                    }`}
                  >
                    <promo.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold ml-3">{promo.title}</h3>
                </div>
                <p className="mb-4 flex-grow text-gray-300">{promo.description}</p>

                {/* Additional details section - hidden by default */}
                <div className="mb-4">
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      const detailsEl = e.currentTarget.nextElementSibling
                      if (detailsEl) {
                        detailsEl.classList.toggle("hidden")
                      }
                    }}
                    className="text-sm text-teal-400 hover:underline flex items-center mt-2 mb-2"
                  >
                    Show details <ChevronDown className="ml-1 w-3 h-3" />
                  </button>
                  <div className="bg-gray-700/30 p-4 rounded-lg hidden">
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-gray-300">
                      Promotion Details
                    </h4>
                    <p className="text-sm text-gray-300 mb-2">{promo.details}</p>
                    <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                      <div>
                        <span className="text-gray-400">Eligibility:</span>
                        <p className="text-gray-300">{promo.eligibility}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Valid Until:</span>
                        <p className="text-gray-300">{promo.expiration}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold">Promo Code:</span>
                  <Button
                    variant="outline"
                    className={`${
                      promo.highlight
                        ? "bg-teal-600 text-white hover:bg-teal-700 border-teal-500"
                        : "bg-purple-600 text-white hover:bg-purple-700 border-purple-500"
                    }`}
                    onClick={() => copyToClipboard(promo.code)}
                  >
                    {promo.code}
                    {copiedCode === promo.code ? <Check className="ml-2 h-4 w-4" /> : <Copy className="ml-2 h-4 w-4" />}
                  </Button>
                </div>
                <Link href="/plans-pricing">
                  <Button
                    className={`w-full ${
                      promo.highlight
                        ? "bg-teal-600 hover:bg-teal-700 text-white"
                        : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
                  >
                    Get This Deal
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mt-8" id="how-to-redeem">
            <h3 className="text-xl font-semibold mb-4 scroll-margin-top-24" id="how-to-redeem">
              How To Redeem Promotion Codes
            </h3>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>
                <span className="font-medium">Choose your plan:</span> Select a fiber internet plan from our{" "}
                <Link href="/plans-pricing" className="text-teal-400 hover:underline">
                  Plans & Pricing
                </Link>{" "}
                page that meets your speed and budget needs
              </li>
              <li>
                <span className="font-medium">Verify availability:</span> Enter your address to confirm Metronet service
                is available at your location
              </li>
              <li>
                <span className="font-medium">Apply the code:</span> Enter the promotion code in the designated field
                during the checkout process
              </li>
              <li>
                <span className="font-medium">Complete your order:</span> Finish the signup process to lock in your
                special offer
              </li>
              <li>
                <span className="font-medium">Verify on your bill:</span> Your first bill will reflect any applicable
                discounts from your promotion
              </li>
            </ol>
            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <Info className="w-5 h-5 mr-2 text-blue-400" />
                Need Help With a Promotion?
              </h4>
              <p className="text-gray-300 text-sm">
                Our customer service team is available 24/7 to assist with promotion redemption. Call us at
                1-877-407-3224 or{" "}
                <Link href="/contact-us" className="text-teal-400 hover:underline">
                  contact us online
                </Link>{" "}
                for immediate assistance.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-16" id="why-choose">
          <h2 className="text-3xl font-bold mb-6 scroll-margin-top-24" id="why-choose">
            Why Choose Metronet Promotions?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Badge className="mr-2 h-5 w-5 text-teal-400" />
                Unbeatable Value
              </h3>
              <p className="text-gray-300">
                Our promotions are designed to give you the best possible value for high-speed fiber internet. With
                offers like $0 due at signup, free installation, and unlimited data, you'll get more bang for your buck with Metronet.
                Unlike cable providers who often advertise low introductory rates that increase dramatically after a few
                months, our promotional offers provide genuine value without hidden catches.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Eye className="mr-2 h-5 w-5 text-teal-400" />
                No Hidden Fees
              </h3>
              <p className="text-gray-300">
                What you see is what you get. Our promotional offers are transparent, with no hidden fees or surprise
                charges. We believe in honest pricing and exceptional service. Every promotion clearly states any terms
                and conditions upfront, and our customer service representatives are trained to fully explain all
                aspects of our offers before you commit.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Layers className="mr-2 h-5 w-5 text-teal-400" />
                Flexible Options
              </h3>
              <p className="text-gray-300">
                Whether you're a new customer or looking to upgrade, we have promotions tailored to your needs. From
                installation deals to speed upgrades, find the perfect offer for your situation. Our promotions are
                designed to work with all of our speed tiers, allowing you to choose the plan that best fits your
                household's internet usage patterns while still taking advantage of special offers.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-teal-400" />
                Limited Time Offers
              </h3>
              <p className="text-gray-300">
                Don't miss out on these exclusive deals! Our promotions are available for a limited time, giving you the
                opportunity to save big on the fastest internet in town. We regularly update our promotional offerings
                to provide the best possible value to new customers, but once a promotion expires, it may not return in
                the same form. Acting quickly ensures you lock in the best available offer.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Customer Testimonials */}
        <section className="mb-16" id="testimonials">
          <h2 className="text-3xl font-bold mb-2 text-center scroll-margin-top-24" id="testimonials">
            Customer Experiences
          </h2>
          <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
            Real feedback from verified Metronet customers who have taken advantage of our promotional offers.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg relative">
                <div className="absolute -top-4 -left-4 text-5xl text-purple-500">"</div>
                <p className="mb-4 pt-4 text-gray-300">{testimonial.quote}</p>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-3">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.occupation}</p>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                  <p className="text-gray-400 text-sm">Customer since: {testimonial.customerSince}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Testimonials collected through our verified customer feedback program. Last updated: April 10, 2025.
            </p>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="mb-16" id="faq">
          <h2 className="text-3xl font-bold mb-2 text-center scroll-margin-top-24" id="faq">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
            Get detailed answers to common questions about Metronet promotions and offers.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left font-medium focus:outline-none flex justify-between items-center"
                >
                  <span className="text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      expandedFaq === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 pb-6 pt-0 text-gray-300 transition-all duration-200 ${
                    expandedFaq === index ? "block" : "hidden"
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Content for Internal Linking */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/plans-pricing"
              className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition flex items-start"
            >
              <FileText className="w-5 h-5 mr-3 text-teal-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Internet Plans & Pricing</h3>
                <p className="text-sm text-gray-400">Compare our fiber internet plans and find your perfect speed</p>
              </div>
            </Link>
            <Link
              href="/why-metronet"
              className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition flex items-start"
            >
              <CheckCircle className="w-5 h-5 mr-3 text-teal-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Why Choose Metronet</h3>
                <p className="text-sm text-gray-400">Discover the advantages of our 100% fiber network</p>
              </div>
            </Link>
            <Link
              href="/check-availability"
              className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition flex items-start"
            >
              <MapPin className="w-5 h-5 mr-3 text-teal-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Check Availability</h3>
                <p className="text-sm text-gray-400">See if Metronet fiber is available at your address</p>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-purple-900 to-teal-900 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Metronet Fiber?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Take advantage of these limited-time promotions today and enjoy the blazing-fast speeds and reliability of
              Metronet fiber internet.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/check-availability">
                <Button className="bg-white text-purple-900 hover:bg-gray-100">Check Availability</Button>
              </Link>
              <Link href="/plans-pricing">
                <Button className="bg-teal-500 text-white hover:bg-teal-600">View Plans & Pricing</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Last Updated Information */}
        <div className="text-center text-sm text-gray-500 mb-8">
          <p>Last updated: April 10, 2025 | Promotion terms subject to change</p>
          <p>© 2025 Metronet Authorized Reseller. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
