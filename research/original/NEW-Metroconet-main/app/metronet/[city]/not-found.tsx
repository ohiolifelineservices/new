import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CityNotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">City Not Found</h1>
        <p className="text-xl mb-8">
          We couldn't find the city you're looking for. It may not be in our service area yet, or there might be a typo
          in the URL.
        </p>
        <div className="space-y-4">
          <Link href="/">
            <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
              Return to Homepage
            </Button>
          </Link>
          <Link href="/check-availability">
            <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/10">
              Check Service Availability
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
