import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Logo */}
        <Link href="/" className="inline-block mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metronet-Reseller-Logo_2022-MPLOp3RJ6LiT30VGJI05rudWyakJlI.png"
            alt="Metronet Logo"
            width={200}
            height={67}
            className="h-auto"
          />
        </Link>

        {/* 404 Message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          We're sorry, but the page you're looking for doesn't exist or has been moved.
        </p>

        {/* Return Home Button */}
        <Link href="/">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
