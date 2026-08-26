import { Clock, TrendingUp, Users } from "lucide-react"

type ServiceHistoryProps = {
  cityName: string
  history: {
    launchDate: string
    milestonesText: string
    totalCustomers: string
  }
}

export default function ServiceHistory({ cityName, history }: ServiceHistoryProps) {
  return (
    <section className="py-12 px-4 bg-[#000000] border-t border-[#6E6E70]" id="history">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Metronet's History in {cityName}</h2>

        <div className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center text-center">
              <Clock className="h-8 w-8 text-[#964DFF] mb-2" />
              <h3 className="text-lg font-semibold mb-1">Launch Date</h3>
              <p className="text-[#00C800] font-bold">{history.launchDate}</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <TrendingUp className="h-8 w-8 text-[#964DFF] mb-2" />
              <h3 className="text-lg font-semibold mb-1">Growth</h3>
              <p className="text-[#FFFFFF]">{history.milestonesText}</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Users className="h-8 w-8 text-[#964DFF] mb-2" />
              <h3 className="text-lg font-semibold mb-1">Customers Served</h3>
              <p className="text-[#00C800] font-bold">{history.totalCustomers}</p>
            </div>
          </div>

          <p className="text-[#FFFFFF] text-center">
            Since our launch in {cityName}, we've been committed to providing the fastest, most reliable fiber internet
            service available. We continue to expand our network to reach more {cityName} residents every month.
          </p>
        </div>
      </div>
    </section>
  )
}
