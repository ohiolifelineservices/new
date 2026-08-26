"use client"

import type React from "react"
import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, X, CheckCircle2, Search } from "lucide-react"
import Link from "next/link"
import { createPortal } from "react-dom"
import { ORDER_ENDPOINT } from "@/lib/commercial-data"
import { trackEvent } from "@/components/google-analytics"

// Real serviceable zip inventory (preserved from the original site) used to
// give an accurate availability signal instead of always returning "available".
const serviceableZipCodes = new Set([
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
])

function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "auto" }
  }, [])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.82)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="glass-panel rounded-[26px] shadow-[0_40px_100px_-30px_rgba(150,77,255,0.55)] w-full max-w-md relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        data-testid="availability-modal"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white" aria-label="Close popup" data-testid="availability-modal-close">
          <X size={22} />
        </button>
        <div className="p-6 sm:p-8">{children}</div>
      </div>
    </div>
  )
}

export function AvailabilityWidget({ compact = false }: { compact?: boolean }) {
  const [zipCode, setZipCode] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const [isAvailable, setIsAvailable] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const checkAvailability = useCallback(() => {
    if (zipCode.trim() === "") { setErrorMessage("Please enter a zip code."); return }
    if (zipCode.length !== 5 || !/^\d+$/.test(zipCode)) { setErrorMessage("Please enter a valid 5-digit zip code."); return }

    setErrorMessage("")
    setIsLoading(true)
    trackEvent("zip_search", { zip: zipCode })

    setTimeout(() => {
      const available = serviceableZipCodes.has(Number(zipCode))
      setIsAvailable(available)
      setShowPopup(true)
      setIsLoading(false)
    }, 700)
  }, [zipCode])

  return (
    <div className={compact ? "w-full" : "max-w-xl mx-auto"} data-testid="availability-widget">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-mc-gray" size={18} />
          <Input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value.replace(/\D/g, "").slice(0, 5))}
            onKeyDown={(e) => e.key === "Enter" && checkAvailability()}
            placeholder="Enter your zip code"
            maxLength={5}
            data-testid="zip-input"
            suppressHydrationWarning
            className="w-full bg-white/[0.04] border-white/15 text-white placeholder-white/40 text-base py-6 pl-11 rounded-full focus-visible:ring-mc-purple backdrop-blur"
          />
        </div>
        <Button
          onClick={checkAvailability}
          disabled={isLoading}
          data-testid="zip-check-button"
          className="btn-shine bg-mc-purple hover:bg-mc-green hover:text-black text-white whitespace-nowrap text-base py-6 px-7 font-display font-bold rounded-full transition-colors duration-300"
        >
          {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Check Availability"}
        </Button>
      </div>
      {errorMessage && <p className="text-red-400 mt-3 text-sm" data-testid="zip-error-message">{errorMessage}</p>}

      {isMounted && showPopup && createPortal(
        <Modal onClose={() => setShowPopup(false)}>
          {isAvailable ? (
            <>
              <CheckCircle2 className="text-mc-green mb-3" size={40} />
              <h3 className="text-2xl font-display font-bold mb-2 text-white" data-testid="availability-result-title">
                Fiber is available!
              </h3>
              <p className="mb-6 text-white/70">Great news — Metronet fiber service is available in your zip code.</p>
              <Link href="/plans-pricing">
                <Button
                  onClick={() => setShowPopup(false)}
                  data-testid="availability-view-plans-button"
                  className="bg-mc-green text-black font-display font-bold py-4 rounded-full w-full hover:brightness-110"
                >
                  View Plans &amp; Order
                </Button>
              </Link>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-display font-bold mb-2 text-white" data-testid="availability-result-title">
                Not yet available
              </h3>
              <p className="text-white/70 mb-4 text-sm">
                Metronet is expanding fast. Join the list for priority installation and offers when fiber reaches your area.
              </p>
              <div className="max-h-[300px] overflow-y-auto pr-1">
                <InlineWaitlistForm zipCode={zipCode} />
              </div>
            </>
          )}
        </Modal>,
        document.body,
      )}
    </div>
  )
}

function InlineWaitlistForm({ zipCode }: { zipCode: string }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const formatTimestamp = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      month: "2-digit", day: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit",
      hour12: true, timeZone: "America/New_York",
    }
    return new Intl.DateTimeFormat("en-US", options).format(date).replace(",", " -") + " EST"
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const dataToSend = { ...formData, zipCode, timestamp: formatTimestamp(new Date()) }
      const response = await fetch(ORDER_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...dataToSend, formType: "noServiceAvailability" }),
      })
      if (response.type === "opaque" || response.ok) {
        setFormData({ name: "", email: "", phone: "", address: "" })
        setShowThankYou(true)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      // Silently fail — lead capture is best-effort, not conversion-critical
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showThankYou) {
    return (
      <div className="text-center py-4" data-testid="waitlist-thank-you">
        <h4 className="text-lg font-display font-semibold mb-2 text-white">Thank you!</h4>
        <p className="text-white/70 text-sm">We'll notify you when Metronet becomes available in your area.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <Label htmlFor="wl-name" className="text-white/70 text-xs">Name</Label>
        <Input id="wl-name" name="name" value={formData.name} onChange={handleChange} required data-testid="waitlist-name" className="bg-black/40 text-white border-mc-gray/40" />
      </div>
      <div>
        <Label htmlFor="wl-email" className="text-white/70 text-xs">Email</Label>
        <Input id="wl-email" name="email" type="email" value={formData.email} onChange={handleChange} required data-testid="waitlist-email" className="bg-black/40 text-white border-mc-gray/40" />
      </div>
      <div>
        <Label htmlFor="wl-phone" className="text-white/70 text-xs">Phone</Label>
        <Input id="wl-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required data-testid="waitlist-phone" className="bg-black/40 text-white border-mc-gray/40" />
      </div>
      <div>
        <Label htmlFor="wl-address" className="text-white/70 text-xs">Address</Label>
        <Input id="wl-address" name="address" value={formData.address} onChange={handleChange} required data-testid="waitlist-address" className="bg-black/40 text-white border-mc-gray/40" />
      </div>
      <Button type="submit" disabled={isSubmitting} data-testid="waitlist-submit" className="w-full bg-mc-purple hover:bg-mc-teal rounded-full">
        {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting...</> : "Join the List"}
      </Button>
    </form>
  )
}
