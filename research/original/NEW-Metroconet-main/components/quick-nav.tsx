export default function QuickNav() {
  return (
    <section className="py-4 bg-gray-900 border-y border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          <a href="#features" className="text-sm px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full transition">
            Features
          </a>
          <a href="#comparison" className="text-sm px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full transition">
            Compare Plans
          </a>
          <a href="#reasons" className="text-sm px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full transition">
            Why Choose Us
          </a>
          <a href="#plans" className="text-sm px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full transition">
            Pricing
          </a>
          <a href="#deals" className="text-sm px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full transition">
            Special Offers
          </a>
          <a href="#coverage" className="text-sm px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full transition">
            Coverage Map
          </a>
          <a href="#reviews" className="text-sm px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full transition">
            Reviews
          </a>
          <a href="#faq" className="text-sm px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full transition">
            FAQ
          </a>
        </div>
      </div>
    </section>
  )
}
