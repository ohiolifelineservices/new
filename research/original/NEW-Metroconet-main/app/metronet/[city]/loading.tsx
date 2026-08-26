export default function CityLoading() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md text-center">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-700 rounded mb-4"></div>
          <div className="h-6 bg-gray-700 rounded mb-2 w-3/4 mx-auto"></div>
          <div className="h-6 bg-gray-700 rounded mb-6 w-1/2 mx-auto"></div>
          <div className="h-10 bg-gray-700 rounded mb-4"></div>
          <div className="h-10 bg-gray-700 rounded"></div>
        </div>
        <p className="mt-8 text-gray-400">Loading city information...</p>
      </div>
    </div>
  )
}
