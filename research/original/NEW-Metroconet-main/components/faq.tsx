import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What are MetroNet's internet plans and pricing, and are there data caps or contracts?",
    answer:
      "We offer a variety of fiber internet plans to fit different needs and budgets, ranging from 100 Mbps to 5 Gbps. Pricing varies depending on the speed tier and your location. You can find detailed plan information and current pricing on our website. Importantly, MetroNet does not impose data caps on any of our internet plans, and we do not require long-term contracts.",
  },
  {
    question: "How can I check if MetroNet is available in my area?",
    answer:
      "The easiest way to check availability is to visit our website and enter your address in the 'Check Availability' section. You can also call our sales team to inquire about service in your neighborhood. We are constantly expanding our network, so even if it's not available now, it might be soon!",
  },
  {
    question: "What is MetroNet's customer service phone number, and what are your support hours?",
    answer:
      "Our customer service team is available 24/7 to assist you. You can reach us by phone at 1-877-407-3224. You can also find helpful articles and FAQs on our support website or reach out through our social media channels.",
  },
  {
    question: "Does MetroNet offer VoIP phone services, and how can I bundle it with internet?",
    answer:
      "Yes, MetroNet offers high-quality Voice over Internet Protocol (VoIP) phone service with unlimited local and long-distance calling in the US, Canada, and Puerto Rico. You can bundle our phone service with your internet plan for added convenience and potential cost savings. Learn more about phone plans and bundles on our website or by contacting our sales team.",
  },
  {
    question: "What makes MetroNet's fiber internet different from cable or DSL providers?",
    answer:
      "MetroNet provides 100% fiber-optic internet directly to your home or business. This means you get symmetrical upload and download speeds, significantly faster speeds than cable or DSL, lower latency (less lag), and a more reliable connection, even during peak usage times. Fiber is also less susceptible to interference and offers a more future-proof technology.",
  },
  {
    question: "Are there any special deals or promotions for new MetroNet customers?",
    answer:
      "We often have special promotions for new customers, such as discounted pricing for the first few months of service, free installation, or free equipment upgrades. To see the latest deals and offers available in your area, please visit our website or contact our sales team.",
  },
  {
    question: "What equipment do I need for MetroNet service, and is there a rental fee?",
    answer:
      "MetroNet provides an Optical Network Terminal (ONT) that is installed at your home and an advanced Wi-Fi router. The standard Wi-Fi router is included with your service at no additional monthly rental fee. We also offer premium whole-home Wi-Fi solutions for larger homes or those with higher bandwidth needs.",
  },
  {
    question: "How long does the installation process take, and what should I expect?",
    answer:
      "Installation typically takes 2-4 hours, depending on the complexity of the job. Our technicians will handle everything, from bringing the fiber line to your home to setting up your equipment and ensuring your internet connection is working properly. We will schedule a convenient installation time with you and keep you updated throughout the process.",
  },
  {
    question: "What are my billing options, and how can I pay my MetroNet bill?",
    answer:
      "We offer several convenient billing options, including automatic payments, online bill pay through our website, and payment by mail. You can manage your account and billing preferences online or by contacting customer service.",
  },
  {
    question: "What if I have technical issues with my MetroNet service after installation?",
    answer:
      "If you experience any technical issues, our 24/7 customer support team is here to help. You can contact us by phone, online chat, or email, and we will work quickly to resolve the problem. We also have a comprehensive online knowledge base with troubleshooting tips and FAQs.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20 px-4 bg-black">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions (FAQ)</h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
            <AccordionTrigger className="text-white hover:text-purple-400">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
