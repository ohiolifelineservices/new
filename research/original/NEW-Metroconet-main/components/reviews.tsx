import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, Calendar, Quote } from "lucide-react"

const reviews = [
  {
    name: "John Donovan",
    location: "Indianapolis, IN",
    occupation: "Software Developer",
    date: "March 15, 2025",
    content:
      "After switching from cable to Metronet fiber, my work-from-home experience has completely transformed. Video calls are crystal clear, and I can upload large code repositories in seconds instead of minutes. I've measured consistent 940/940 Mbps speeds even during peak hours, which is exactly what was promised. The installation was professional and completed in under 2 hours.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    location: "Grand Rapids, MI",
    occupation: "Online Educator",
    date: "February 28, 2025",
    content:
      "As someone who teaches virtual classes daily, reliable internet is non-negotiable. Since getting Metronet installed in January, I haven't experienced a single dropout during my lessons. The symmetrical speeds make a huge difference when I'm sharing my screen and uploading course materials simultaneously. Customer service has been responsive the two times I've needed assistance.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    location: "Rochester, MN",
    occupation: "Competitive Gamer",
    date: "April 2, 2025",
    content:
      "Gaming has never been smoother! I've tracked my ping in multiple online games before and after switching to Metronet, and I've seen a consistent 15-20ms improvement. Downloads that used to take hours now finish in minutes. The most impressive part is the stability - no more random disconnects during crucial tournament matches. Worth every penny for serious gamers.",
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <h2 className="text-3xl font-bold mb-2 text-center">What People Are Saying: Real Metronet Internet Reviews</h2>
      <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
        Unedited testimonials from verified Metronet customers who have experienced the fiber difference firsthand.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <Card key={index} className="bg-black text-white border-gray-800">
            <CardContent className="p-6">
              <div className="flex mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="flex items-center mb-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{review.location}</span>
                <span className="mx-2">•</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span>{review.date}</span>
              </div>
              <div className="mb-4">
                <Quote className="w-6 h-6 text-purple-500 mb-2" />
                <p className="text-gray-300">{review.content}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-400">{review.occupation}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          Reviews collected through our customer feedback program. Last updated: April 5, 2025.
        </p>
      </div>
    </section>
  )
}
