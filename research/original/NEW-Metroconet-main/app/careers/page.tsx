import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers at Metronet | Join Our Growing Fiber Internet Team",
  description:
    "Join the team bringing high-speed fiber internet starting at $60 to communities nationwide. Explore career opportunities at Metronet, where we offer free installation and unlimited data to our customers.",
}

export default function Careers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Careers at Metronet Authorized Reseller</h1>
      <p className="mb-4">
        Join our team and be part of bringing high-speed internet and advanced telecommunications services to
        communities.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Why Work With Us?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Opportunity to work with cutting-edge technology</li>
        <li>Competitive compensation and benefits</li>
        <li>Professional development and growth opportunities</li>
        <li>Collaborative and innovative work environment</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Current Openings</h2>
      <p className="mb-4">
        We're always looking for talented individuals to join our team. While we don't have any specific openings listed
        at the moment, we encourage you to send your resume to our HR department for future considerations.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">How to Apply</h2>
      <p className="mb-4">
        To apply for a position or to be considered for future openings, please send your resume and a cover letter to
        careers@metronetreseller.com.
      </p>
      <p className="mt-8">We are an equal opportunity employer and value diversity in our workplace.</p>
      <Link href="/" className="text-blue-500 hover:underline mt-8 inline-block">
        Return to Home
      </Link>
    </div>
  )
}
