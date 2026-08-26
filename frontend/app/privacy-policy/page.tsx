import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "https://metroconet.com/privacy-policy" },
}

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-12 pb-16" data-testid="privacy-policy-page">
      <div className="container max-w-2xl prose-invert">
        <h1 className="text-4xl font-display font-extrabold text-white mb-6">Privacy Policy</h1>
        <div className="text-white/60 space-y-4 text-sm leading-relaxed">
          <p>Metroconet ("we," "us," or "our") is an independent authorized retailer for new Metronet service. This page describes how we handle information submitted through this website.</p>
          <p>When you use our availability checker or order form, we collect the information you provide (such as name, address, zip code, phone number, and email) in order to process your request and, where applicable, to submit your order to Metronet for fulfillment.</p>
          <p>We do not sell your personal information. Information submitted through our order and availability forms is used solely to facilitate your request for new Metronet service.</p>
          <p>If you have questions about this policy, please contact us through our Contact Us page.</p>
        </div>
      </div>
    </section>
  )
}
