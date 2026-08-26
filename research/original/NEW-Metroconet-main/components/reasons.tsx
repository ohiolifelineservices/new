import { Zap, DollarSign, Gift, Sliders, Headphones, Infinity, Wifi, Shield } from "lucide-react"

const reasons = [
  {
    text: "Fast and Easy Sign-Up and Installation",
    icon: Zap,
  },
  {
    text: "Affordable Rates and Transparent Pricing",
    icon: DollarSign,
  },
  {
    text: "Exclusive New Customer Deals and Student Discounts",
    icon: Gift,
  },
  {
    text: "Flexible Internet Plans to Suit Your Needs",
    icon: Sliders,
  },
  {
    text: "Award-Winning Customer Service",
    icon: Headphones,
  },
  {
    text: "Unlimited Data – Stream and Game Without Limits",
    icon: Infinity,
  },
  {
    text: "Free Eero Router for Whole-Home WiFi Coverage",
    icon: Wifi,
  },
  {
    text: "Advanced Security Features to Protect Your Network",
    icon: Shield,
  },
]

export default function Reasons() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#000000] via-[#212145] to-[#000000]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          8 Reasons Why You Should Switch to Metronet Internet Today
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-black bg-opacity-50 rounded-lg p-6 transition-all duration-300 hover:bg-opacity-70 hover:transform hover:scale-105"
            >
              <reason.icon className="w-12 h-12 mb-4 text-[#00A89C]" />
              <p className="text-white text-center font-semibold">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
