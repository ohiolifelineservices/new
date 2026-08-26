"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Label } from "@/components/ui/label"

// Copy the serviceable zip codes from the availability-checker.tsx
const serviceableZipCodes = [
  80918, 80920, 80922, 80923, 32714, 32703, 32712, 32114, 32117, 32136, 32750, 32779, 32701, 32751, 32818, 32174, 32137,
  32164, 32127, 32129, 32119, 32301, 32303, 32304, 32305, 32308, 32309, 32310, 32311, 32312, 32317, 50009, 50010, 50014,
  50021, 50023, 52722, 50324, 50325, 52241, 52801, 52802, 52803, 52804, 52806, 52807, 50309, 50310, 50311, 50312, 50313,
  50314, 50315, 50316, 50317, 50320, 50321, 50322, 50105, 50111, 50441, 52246, 50126, 50130, 50131, 52753, 50401, 50201,
  50211, 50327, 50226, 50475, 51103, 51104, 51105, 51106, 51108, 50323, 50701, 50702, 50703, 50265, 50266, 60510, 60175,
  61701, 61704, 61705, 60512, 61239, 61241, 60112, 60115, 61244, 61282, 60119, 60124, 60177, 60134, 60135, 61256, 61752,
  61264, 61265, 60538, 60544, 61761, 60506, 60542, 60543, 60585, 60586, 60545, 61201, 60446, 60548, 60174, 60554, 60178,
  60560, 46106, 46216, 46032, 46033, 46280, 47331, 47933, 46037, 46038, 46131, 46530, 46135, 46142, 46143, 46227, 47243,
  46750, 46217, 46226, 46228, 46235, 46236, 46240, 46250, 46256, 46260, 46268, 46278, 46940, 47901, 47904, 47905, 47909,
  46052, 47250, 46952, 47362, 46184, 46060, 46062, 46962, 47265, 46545, 46561, 46064, 46783, 47274, 46635, 46071, 47591,
  46992, 46582, 47906, 46074, 46077, 40403, 40502, 40503, 40504, 40505, 40507, 40508, 40509, 40510, 40511, 40513, 40514,
  40515, 40516, 40517, 40347, 40356, 40461, 40475, 40383, 40390, 48108, 48198, 49034, 48226, 48821, 48823, 49053, 48837,
  49503, 49504, 49506, 49507, 49508, 49509, 49512, 49546, 49548, 48840, 48842, 49426, 48070, 49428, 49001, 49006, 49008,
  49009, 48906, 48910, 48911, 48912, 48915, 48917, 48933, 49071, 48864, 49002, 49024, 49088, 49519, 48197, 55909, 55970,
  55301, 55912, 56011, 55917, 55918, 55920, 55009, 55315, 55317, 56016, 56017, 55322, 55328, 55019, 56024, 55054, 56026,
  56028, 55331, 55934, 55021, 56035, 56036, 55339, 55940, 56043, 56044, 56045, 55352, 56050, 55946, 56052, 55044, 56057,
  55951, 56058, 55953, 56063, 56001, 55360, 55053, 55367, 56072, 55057, 55368, 55397, 56007, 55060, 55924, 55049, 55372,
  55901, 55902, 55904, 55906, 55068, 55124, 56082, 55379, 55375, 55976, 55985, 55318, 55386, 55387, 56093, 55388, 56096,
  55395, 55991, 64501, 64503, 64505, 64506, 64507, 28513, 28301, 28303, 28304, 28305, 28306, 28312, 28314, 27834, 27858,
  27837, 28532, 28601, 28602, 28348, 28540, 28546, 28311, 28544, 28560, 28562, 28371, 28376, 27803, 27804, 28590, 68007,
  68022, 68116, 45430, 45431, 45432, 45434, 45440, 45385, 45305, 45309, 45315, 45414, 45415, 45424, 45426, 45322, 45324,
  45840, 45341, 45344, 45356, 45371, 43604, 45373, 45377, 45383, 77801, 77802, 77803, 77807, 77808, 77845, 23502, 23503,
  23505, 23509, 23513, 23518, 54601, 54650, 46947, 50047, 50158, 50707, 51109, 54603, 55020, 55122, 55402, 61115, 61776,
  68118, 68142, 76522, 80915, 80917, 80951,
]

export default function FixedAvailabilityChecker() {
  const [zipCode, setZipCode] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const [isAvailable, setIsAvailable] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)

  const checkAvailability = () => {
    if (!zipCode || zipCode.length !== 5) {
      setErrorMessage("Please enter a valid 5-digit zip code")
      return
    }

    setErrorMessage("")
    setIsLoading(true)

    // Simulate a network request
    setTimeout(() => {
      setIsAvailable(true)
      setShowPopup(true)
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="fixed top-14 left-0 w-full bg-[#121212] border-b border-gray-800 z-40 py-2">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-2 sm:mb-0">
          <MapPin className="h-4 w-4 text-purple-400 mr-2" />
          <span className="text-white text-sm font-medium">Check Availability</span>
        </div>

        <div className="flex flex-1 max-w-md w-full sm:ml-4">
          <div className="relative flex-1 mr-2">
            <Input
              type="text"
              value={zipCode}
              onChange={(e) => {
                setErrorMessage("")
                const value = e.target.value.replace(/\D/g, "").slice(0, 5)
                setZipCode(value)
              }}
              placeholder="Enter your zip code"
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 h-9 text-sm"
              maxLength={5}
              onKeyPress={(e) => e.key === "Enter" && checkAvailability()}
            />
            {errorMessage && <p className="absolute text-red-400 text-xs mt-1">{errorMessage}</p>}
          </div>
          <Button
            onClick={checkAvailability}
            className="bg-[#00c800] hover:bg-[#00b000] text-black font-bold h-9 text-sm transition-all duration-300"
            size="sm"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                Checking...
              </>
            ) : (
              "Check"
            )}
          </Button>
        </div>
        <div className="hidden sm:block ml-2">
          <Link href="/check-availability" className="text-xs text-purple-400 hover:text-purple-300 whitespace-nowrap">
            View All Cities
          </Link>
        </div>
      </div>

      {/* Availability Result Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4 md:p-6 backdrop-blur-md overflow-y-auto"
          onClick={() => {
            setShowPopup(false)
            setShowContactForm(false)
          }}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-[#212145] border border-purple-500/40 p-6 md:p-8 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setShowPopup(false)
                setShowContactForm(false)
              }}
              className="absolute top-3 right-3 text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800/50 transition-colors"
              aria-label="Close popup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            {isAvailable ? (
              <>
                <div className="bg-green-900/30 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6 border border-green-500/30 shadow-lg shadow-green-500/20">
                  <MapPin className="h-8 w-8 md:h-10 md:w-10 text-green-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white text-center">
                  Service Available in Your Area!
                </h3>
                <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-4 mb-6">
                  <p className="text-gray-300 text-center text-sm md:text-base">
                    Great news! Metronet's high-speed fiber internet is available at your location. Check out our
                    exclusive deals and offers.
                  </p>
                </div>
                <Link href="/plans-pricing" className="block w-full">
                  <Button
                    onClick={() => setShowPopup(false)}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 md:py-4 px-4 md:px-8 rounded-lg transition-all duration-300 shadow-lg shadow-purple-700/30 transform hover:scale-[1.02]"
                  >
                    View Current Deals
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <div className="bg-blue-900/30 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6 border border-blue-500/30 shadow-lg shadow-blue-500/20">
                  <MapPin className="h-8 w-8 md:h-10 md:w-10 text-blue-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white text-center">
                  Metronet's Coming Soon
                </h3>

                {!showContactForm ? (
                  <div className="mt-2">
                    <div className="bg-gray-800/80 p-4 rounded-lg mb-4 border-l-4 border-blue-500 shadow-md">
                      <p className="text-white text-sm md:text-base">
                        We're expanding rapidly! Join our waitlist to receive priority installation and exclusive offers
                        when we arrive in your neighborhood!
                      </p>
                    </div>
                    <Button
                      onClick={() => setShowContactForm(true)}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-700/30 transform hover:scale-[1.02]"
                    >
                      Get Notified When Available
                    </Button>
                  </div>
                ) : (
                  <InlineContactForm zipCode={zipCode} />
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function InlineContactForm({ zipCode }: { zipCode: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const formatTimestamp = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/New_York",
    }
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date)
    return formattedDate.replace(",", " -") + " EST"
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const dataToSend = {
        ...formData,
        zipCode,
        timestamp: formatTimestamp(new Date()),
      }

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyUAIeLf5c-3B0nAZy40SwO7kkbvs21bbzuHOCmCR9W1ZYAmEUacUiVXpZAoNy6FR-olQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...dataToSend,
            formType: "noServiceAvailability",
          }),
        },
      )

      if (response.type === "opaque" || response.ok) {
        console.log("Form submitted successfully")
        setFormData({ name: "", email: "", phone: "", address: "" })
        setShowThankYou(true)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("There was an error submitting the form", error)
      setIsSubmitting(false)
    }
  }

  if (showThankYou) {
    return (
      <div className="text-center py-2">
        <div className="bg-green-900/30 p-4 rounded-md mb-2 border border-green-500/20">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Thank You!</h3>
          <p className="text-gray-300 text-sm md:text-base">
            We've received your information and will notify you when Metronet becomes available in your area. You'll be
            among the first to know!
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <Label htmlFor="name" className="text-white text-sm mb-1 block">
          Name
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-[#2C2C54] text-white border-[#6E6E70] h-9 md:h-10 text-sm md:text-base"
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-white text-sm mb-1 block">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-[#2C2C54] text-white border-[#6E6E70] h-9 md:h-10 text-sm md:text-base"
        />
      </div>
      <div>
        <Label htmlFor="phone" className="text-white text-sm mb-1 block">
          Phone
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="bg-[#2C2C54] text-white border-[#6E6E70] h-9 md:h-10 text-sm md:text-base"
        />
      </div>
      <div>
        <Label htmlFor="address" className="text-white text-sm mb-1 block">
          Address
        </Label>
        <Input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="bg-[#2C2C54] text-white border-[#6E6E70] h-9 md:h-10 text-sm md:text-base"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-[#964DFF] hover:bg-[#00A89C] mt-2 py-2 md:py-3 h-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  )
}
