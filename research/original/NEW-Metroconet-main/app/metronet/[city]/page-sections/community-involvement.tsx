import { Calendar } from "lucide-react"

type CommunityEvent = {
  event: string
  date: string
  description: string
}

type CommunityInvolvementProps = {
  cityName: string
  events: CommunityEvent[]
}

export default function CommunityInvolvement({ cityName, events }: CommunityInvolvementProps) {
  if (!events || events.length === 0) return null

  return (
    <section className="py-16 px-4 bg-[#212145]" id="community">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Metronet Service in the {cityName} Community</h2>

        <p className="text-center text-[#FFFFFF] mb-8 max-w-3xl mx-auto">
          We're committed to providing exceptional fiber internet service to the {cityName} community. Here are some of
          the ways we're working to improve connectivity and digital access in your area:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-[#000000] p-6 rounded-lg border border-[#6E6E70] hover:border-[#964DFF] transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{event.event}</h3>
              <p className="text-[#00A89C] mb-4 flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {event.date}
              </p>
              <p className="text-[#FFFFFF]">{event.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#FFFFFF] mb-4">
            We believe in improving connectivity for all residents of {cityName}. Our fiber network is designed to
            support the growing digital needs of homes, businesses, and public services throughout the community.
          </p>
        </div>
      </div>
    </section>
  )
}
