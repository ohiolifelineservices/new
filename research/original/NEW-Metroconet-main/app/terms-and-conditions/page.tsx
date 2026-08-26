import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Metronet Fiber Internet",
  description:
    "Review Metronet's terms and conditions for our fiber internet services starting at $60. Learn about our free installation offer, unlimited data, and service agreements.",
}

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to the Terms & Conditions page for Metronet Authorized Reseller. As an authorized reseller, we adhere to
        Metronet's policies while providing our services.
      </p>
      <p className="mb-4">
        By using our services, you agree to comply with and be bound by the following terms and conditions. Please
        review them carefully.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Service Description</h2>
      <p className="mb-4">
        We offer high-speed internet, phone, and television services as authorized by Metronet. Our goal is to provide
        reliable and efficient services to our customers.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Customer Responsibilities</h2>
      <p className="mb-4">
        Customers are responsible for maintaining the confidentiality of their account information and for all
        activities that occur under their account.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Payment and Billing</h2>
      <p className="mb-4">
        Customers agree to pay all charges associated with their chosen services. Billing cycles and payment methods
        will be clearly communicated upon service activation.
      </p>
      <p className="mt-8">For the full terms and conditions, please contact our customer service team.</p>
      <Link href="/" className="text-blue-500 hover:underline mt-8 inline-block">
        Return to Home
      </Link>
    </div>
  )
}
