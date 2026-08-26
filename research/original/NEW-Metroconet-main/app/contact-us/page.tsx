import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Metronet | Free Installation | Unlimited Data",
  description:
    "Need help or have questions? Contact Metronet's expert team 24/7. Get quick responses about our plans starting at $60. Free installation, unlimited data, and no deposit required. Learn how to upgrade your internet experience today!",
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-10 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/contact-background.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center animate-fade-in-up">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Metronet Authorized Reseller
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-center max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            We're here to help! Reach out to us with any questions or concerns about our services.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <ContactForm />
      </div>
    </div>
  )
}
