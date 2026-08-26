import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function ComparisonTable() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">How Metronet Fiber Compares</h2>
        <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
          See how our 100% fiber internet stacks up against traditional cable and DSL providers based on independent
          speed tests and customer satisfaction data.
        </p>

        <div className="overflow-x-auto rounded-lg border border-gray-800">
          <Table>
            <TableCaption>Data based on industry benchmarks and internal testing as of March 2025</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Feature</TableHead>
                <TableHead className="text-center">Metronet Fiber</TableHead>
                <TableHead className="text-center">Cable Internet</TableHead>
                <TableHead className="text-center">DSL Internet</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Download Speeds</TableCell>
                <TableCell className="text-center">Up to 5 Gbps</TableCell>
                <TableCell className="text-center">Up to 1 Gbps</TableCell>
                <TableCell className="text-center">Up to 100 Mbps</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Upload Speeds</TableCell>
                <TableCell className="text-center">Up to 5 Gbps</TableCell>
                <TableCell className="text-center">Up to 50 Mbps</TableCell>
                <TableCell className="text-center">Up to 20 Mbps</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Symmetrical Speeds</TableCell>
                <TableCell className="text-center text-green-500">
                  <CheckCircle className="inline h-5 w-5" />
                </TableCell>
                <TableCell className="text-center text-red-500">
                  <XCircle className="inline h-5 w-5" />
                </TableCell>
                <TableCell className="text-center text-red-500">
                  <XCircle className="inline h-5 w-5" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Reliability During Peak Hours</TableCell>
                <TableCell className="text-center text-green-500">
                  <CheckCircle className="inline h-5 w-5" />
                </TableCell>
                <TableCell className="text-center text-amber-500">
                  <AlertCircle className="inline h-5 w-5" />
                </TableCell>
                <TableCell className="text-center text-amber-500">
                  <AlertCircle className="inline h-5 w-5" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">No Data Caps</TableCell>
                <TableCell className="text-center text-green-500">
                  <CheckCircle className="inline h-5 w-5" />
                </TableCell>
                <TableCell className="text-center text-amber-500">
                  <AlertCircle className="inline h-5 w-5" />
                </TableCell>
                <TableCell className="text-center text-amber-500">
                  <AlertCircle className="inline h-5 w-5" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">No Long-Term Contracts</TableCell>
                <TableCell className="text-center text-green-500">
                  <CheckCircle className="inline h-5 w-5" />
                </TableCell>
                <TableCell className="text-center text-red-500">
                  <XCircle className="inline h-5 w-5" />
                </TableCell>
                <TableCell className="text-center text-amber-500">
                  <AlertCircle className="inline h-5 w-5" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Latency (Gaming/Video Calls)</TableCell>
                <TableCell className="text-center">10-20ms</TableCell>
                <TableCell className="text-center">15-40ms</TableCell>
                <TableCell className="text-center">30-50ms</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Weather Resistance</TableCell>
                <TableCell className="text-center text-green-500">
                  <CheckCircle className="inline h-5 w-5" />
                </TableCell>
                <TableCell className="text-center text-red-500">
                  <XCircle className="inline h-5 w-5" />
                </TableCell>
                <TableCell className="text-center text-red-500">
                  <XCircle className="inline h-5 w-5" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 text-sm text-gray-400">
          <p>
            Note: Cable and DSL performance may vary by provider. Metronet fiber performance based on internal network
            testing across service areas.
          </p>
        </div>
      </div>
    </section>
  )
}
