export default function QuickFactsTable() {
  return (
    <section className="py-8 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Fiber Internet Quick Facts</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Feature</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Metronet Fiber</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Cable Internet</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">DSL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td className="px-4 py-3 text-sm">Max Download Speed</td>
                <td className="px-4 py-3 text-sm text-green-400">5 Gbps</td>
                <td className="px-4 py-3 text-sm">1 Gbps</td>
                <td className="px-4 py-3 text-sm">100 Mbps</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Max Upload Speed</td>
                <td className="px-4 py-3 text-sm text-green-400">5 Gbps</td>
                <td className="px-4 py-3 text-sm">35 Mbps</td>
                <td className="px-4 py-3 text-sm">20 Mbps</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Data Caps</td>
                <td className="px-4 py-3 text-sm text-green-400">None</td>
                <td className="px-4 py-3 text-sm">1-1.2TB/month</td>
                <td className="px-4 py-3 text-sm">150-250GB/month</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Latency</td>
                <td className="px-4 py-3 text-sm text-green-400">5-10ms</td>
                <td className="px-4 py-3 text-sm">15-25ms</td>
                <td className="px-4 py-3 text-sm">25-50ms</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Reliability</td>
                <td className="px-4 py-3 text-sm text-green-400">99.9%</td>
                <td className="px-4 py-3 text-sm">99.5%</td>
                <td className="px-4 py-3 text-sm">98%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Starting Price</td>
                <td className="px-4 py-3 text-sm text-green-400">$60/mo</td>
                <td className="px-4 py-3 text-sm">$49.99/mo</td>
                <td className="px-4 py-3 text-sm">$45.00/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
