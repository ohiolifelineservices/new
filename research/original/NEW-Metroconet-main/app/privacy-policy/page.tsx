import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Metronet Fiber Internet",
  description:
    "Learn how Metronet protects your privacy while providing fiber internet services starting at $60. Our privacy policy covers how we handle your information as part of our fiber internet service.",
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At Metronet Authorized Reseller, we are committed to protecting your privacy and ensuring the security of your
        personal information.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information Collection</h2>
      <p className="mb-4">
        We collect information necessary to provide our services, including but not limited to name, address, contact
        details, and billing information.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use of Information</h2>
      <p className="mb-4">
        The information we collect is used to provide and improve our services, process payments, and communicate with
        you about your account and our offerings.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Information Sharing</h2>
      <p className="mb-4">
        We do not sell your personal information. We may share information with Metronet and service providers as
        necessary to provide our services.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Security</h2>
      <p className="mb-4">
        We implement appropriate technical and organizational measures to protect your personal information against
        unauthorized or unlawful processing and accidental loss, destruction, or damage.
      </p>
      <p className="mt-8">For the full privacy policy, please contact our customer service team.</p>
      <Link href="/" className="text-blue-500 hover:underline mt-8 inline-block">
        Return to Home
      </Link>
    </div>
  )
}
