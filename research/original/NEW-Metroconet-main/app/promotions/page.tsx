import type { Metadata } from "next"
import PromotionsContent from "@/components/promotions/content"
import Script from "next/script"
import { GoogleAnalytics } from "@/components/google-analytics"

export const metadata: Metadata = {
  title: "Exclusive Metronet Deals | Free Installation on All Plans",
  description:
    "Metronet's current offer: free installation on all plans starting at $60. No deposit required and unlimited data included. Sign up today for blazing-fast fiber internet!",
  keywords:
    "Metronet promotions, fiber internet deals, internet discounts, no deposit internet, free installation, unlimited data, fiber optic promotions, Metronet promo code",
  authors: [{ name: "Jennifer Martinez", url: "https://www.linkedin.com/in/jennifer-martinez" }],
  alternates: {
    canonical: "https://metroconet.com/promotions",
  },
}

export default function Promotions() {
  // FAQ Schema for rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I redeem a Metronet promotion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To redeem a Metronet promotion, enter the promo code during online checkout when signing up for service, mention it to our customer service representative when calling to sign up, or provide it to your Metronet sales representative during an in-home consultation. The discount will be automatically applied to your account once service is activated.",
        },
      },
      {
        "@type": "Question",
        name: "Can I combine multiple Metronet promotions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generally, Metronet promotions cannot be combined unless explicitly stated in the offer terms. Each promotion is designed to provide significant value on its own. For the most current information about combining specific offers, please contact our customer service team.",
        },
      },
      {
        "@type": "Question",
        name: "How long do Metronet promotions typically last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Metronet promotions vary in duration based on the type of offer and market conditions. Most of our major promotions run for 2-3 months, while some seasonal promotions might be available for just a few weeks. All promotions have a clearly marked expiration date, and we honor any promotion that was active at the time you signed up.",
        },
      },
      {
        "@type": "Question",
        name: "Are Metronet promotions available for existing customers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While many of our headline promotions are designed for new customers, Metronet values our loyal customers and offers several exclusive benefits for existing subscribers including anniversary rewards, loyalty upgrade offers, referral bonuses, and special retention offers. Existing customers should check their email, customer portal, and physical mail for personalized offers.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after my Metronet promotional period ends?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After your promotional period ends, your service will continue uninterrupted at the regular rate for your chosen plan. The standard post-promotion rate is always clearly communicated during sign-up and in your service agreement. Metronet will send you notifications before any promotional pricing expires, and our customer service team can discuss available options if you have concerns about the regular rate.",
        },
      },
    ],
  }

  // Offer Schema for rich results
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    offerCount: "1",
    offers: [
      {
        "@type": "Offer",
        name: "Free Installation",
        description:
          "Professional fiber internet installation at no cost for new Metronet customers.",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "0",
          priceCurrency: "USD",
        },
        eligibility: "New residential customers only",
        availability: "InStock",
      },
    ],
    itemOffered: {
      "@type": "Service",
      name: "Metronet Fiber Internet",
      description: "High-speed fiber internet service with symmetrical speeds up to 5 Gbps",
    },
  }

  return (
    <>
      <GoogleAnalytics />
      <PromotionsContent />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="offer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
    </>
  )
}
