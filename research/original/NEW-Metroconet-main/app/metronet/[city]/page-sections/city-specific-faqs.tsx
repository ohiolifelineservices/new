type FAQ = {
  question: string
  answer: string
}

type CitySpecificFAQsProps = {
  cityName: string
  faqs: FAQ[]
}

export default function CitySpecificFAQs({ cityName, faqs }: CitySpecificFAQsProps) {
  if (!faqs || faqs.length === 0) return null

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">{cityName}-Specific Questions</h3>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#212145] p-6 rounded-lg border border-[#6E6E70]">
            <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
            <p className="text-[#FFFFFF]">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
