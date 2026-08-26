"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, X } from "lucide-react"
import Link from "next/link"
import { createPortal } from "react-dom"

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

// Modal component that will be rendered via portal
function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.75)",
      }}
      onClick={onClose}
    >
      <div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-md relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

export default function AvailabilityChecker() {
  const [zipCode, setZipCode] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const [isAvailable, setIsAvailable] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Handle mounting state for portal
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const checkAvailability = useCallback(() => {
    if (zipCode.trim() === "") {
      setErrorMessage("Please enter a zip code.")
      return
    }
    if (zipCode.length !== 5 || !/^\d+$/.test(zipCode)) {
      setErrorMessage("Please enter a valid 5-digit zip code.")
      return
    }

    setErrorMessage("")
    setIsLoading(true)

    // Simulate network delay
    setTimeout(() => {
      setIsAvailable(true)
      setShowPopup(true)
      setIsLoading(false)
    }, 800)
  }, [zipCode])

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-4"></div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="w-full sm:w-auto">
          <Input
            type="text"
            value={zipCode}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 5)
              setZipCode(value)
            }}
            onKeyPress={(e) => e.key === "Enter" && checkAvailability()}
            placeholder="Enter your zip code"
            className="w-full bg-gray-800 border-purple-500 text-white placeholder-gray-400 text-lg py-6"
            maxLength={5}
          />
        </div>
        <div className="w-full sm:w-auto">
          <Button
            onClick={checkAvailability}
            size="lg"
            className="w-full bg-purple-600 hover:bg-teal-500 text-white whitespace-nowrap text-lg py-6 px-8 font-bold transition-all duration-300 hover:scale-105"
            disabled={isLoading}
          >
            {isLoading ? "Checking..." : "Check Availability"}
          </Button>
        </div>
      </div>
      {errorMessage && <p className="text-red-400 mt-4 text-center">{errorMessage}</p>}

      {/* Modal Portal */}
      {isMounted &&
        showPopup &&
        createPortal(
          <Modal onClose={() => setShowPopup(false)}>
            <h3 className="text-2xl font-bold mb-4 text-white">
              {isAvailable ? "Service is available!" : "Service is not available"}
            </h3>
            <p className="mb-6 text-white">{isAvailable && "Great news! Services are available in your Zip Code."}</p>

            {isAvailable ? (
              <Link href="/plans-pricing">
                <Button
                  onClick={() => setShowPopup(false)}
                  className="bg-purple-600 hover:bg-teal-500 text-white font-bold py-4 px-8 rounded transition-colors duration-300 w-full"
                >
                  View Plans
                </Button>
              </Link>
            ) : (
              <div className="mt-4">
                <p className="text-white mb-4">
                  We’re expanding fast. Join the waitlist for priority installation and exclusive offers when fiber
                  reaches your area.
                </p>
                <div className="max-h-[300px] overflow-y-auto pr-2">
                  <InlineContactForm zipCode={zipCode} />
                </div>
              </div>
            )}
          </Modal>,
          document.body,
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
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showThankYou) {
    return (
      <div className="text-center py-4">
        <h3 className="text-xl font-semibold mb-2 text-white">Thank You!</h3>
        <p className="text-white">
          We've received your information and will notify you when Metronet becomes available in your area.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-white">
          Name
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-[#2C2C54] text-white border-[#6E6E70]"
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-white">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-[#2C2C54] text-white border-[#6E6E70]"
        />
      </div>
      <div>
        <Label htmlFor="phone" className="text-white">
          Phone
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="bg-[#2C2C54] text-white border-[#6E6E70]"
        />
      </div>
      <div>
        <Label htmlFor="address" className="text-white">
          Address
        </Label>
        <Input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="bg-[#2C2C54] text-white border-[#6E6E70]"
        />
      </div>
      <Button type="submit" className="w-full bg-[#964DFF] hover:bg-[#00A89C]" disabled={isSubmitting}>
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
