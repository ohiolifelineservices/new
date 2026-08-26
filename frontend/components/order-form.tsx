"use client"

import type React from "react"
import { useState, useCallback, useRef, useEffect } from "react"
import { Loader2, CalendarIcon } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format, addDays, parse, isValid, startOfDay } from "date-fns"
import { ORDER_ENDPOINT, SUPPORT_PHONE } from "@/lib/commercial-data"
import { trackEvent } from "@/components/google-analytics"

interface OrderFormProps {
  isOpen: boolean
  onClose: () => void
  selectedPlan: { name: string; price: string } | null
}

// Preserved from the original implementation: best-effort geo lookup used
// only as a lead-quality signal in the order payload, not for gating.
async function resolveIpGeoLocation(): Promise<string> {
  const apis: { url: string; parse: (j: Record<string, string>) => string }[] = [
    { url: "https://ipwho.is/?fields=success,city,region", parse: (j) => [j.city, j.region].filter(Boolean).join(", ") },
    { url: "https://ipapi.co/json/", parse: (j) => [j.city, j.region].filter(Boolean).join(", ") },
    { url: "https://get.geojs.io/v1/ip/geo.json", parse: (j) => [j.city, j.region].filter(Boolean).join(", ") },
  ]
  for (const api of apis) {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 3500)
    try {
      const res = await fetch(api.url, { signal: controller.signal })
      if (!res.ok) continue
      const json = await res.json()
      const location = api.parse(json)
      if (location) return location
    } catch {
      // try next provider
    } finally {
      clearTimeout(timeout)
    }
  }
  return ""
}

export default function OrderForm({ isOpen, onClose, selectedPlan }: OrderFormProps) {
  const [confirmationMessage, setConfirmationMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [installDate, setInstallDate] = useState<Date>()
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", serviceAddress: "", zipCode: "",
    phoneNumber: "", email: "", dateOfBirth: "", preferredInstallTime: "", promoCode: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const ipGeoPromiseRef = useRef<Promise<string> | null>(null)

  useEffect(() => {
    if (!isOpen) return
    ipGeoPromiseRef.current = resolveIpGeoLocation()
    trackEvent("order_form_open", { plan: selectedPlan?.name || "unspecified" })
  }, [isOpen, selectedPlan])

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    const dobDate = parse(formData.dateOfBirth, "MM/dd/yyyy", new Date())
    if (!isValid(dobDate)) newErrors.dateOfBirth = "Please enter a valid date of birth (MM/DD/YYYY)"
    if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ""))) newErrors.phoneNumber = "Please enter a valid 10-digit phone number"
    if (!/^\d{5}$/.test(formData.zipCode)) newErrors.zipCode = "Please enter a valid 5-digit zip code"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleDateOfBirthChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "")
    let formatted = input
    if (input.length > 2) formatted = `${input.slice(0, 2)}/${input.slice(2)}`
    if (input.length > 4) formatted = `${formatted.slice(0, 5)}/${input.slice(4, 8)}`
    setFormData((prev) => ({ ...prev, dateOfBirth: formatted }))
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validateForm()) return
    const form = event.currentTarget
    const fd = new FormData(form)
    const formProps = Object.fromEntries(fd)

    const dataToSend: Record<string, string> = {
      timestamp: new Date().toISOString(),
      order: selectedPlan ? `${selectedPlan.name} - $${selectedPlan.price}` : "No plan selected",
      firstName: String(formProps.firstName || ""),
      lastName: String(formProps.lastName || ""),
      serviceAddress: String(formProps.serviceAddress || ""),
      zipCode: String(formProps.zipCode || ""),
      phoneNumber: String(formProps.phoneNumber || ""),
      email: String(formProps.email || ""),
      dateOfBirth: String(formProps.dateOfBirth || ""),
      preferredInstallDate: installDate ? format(installDate, "yyyy-MM-dd") : "",
      preferredInstallTime: String(formProps.preferredInstallTime || ""),
      promoCode: String(formProps.promoCode || "None"),
      addPhoneService: "No",
      geoLocation: "",
    }

    if (ipGeoPromiseRef.current) {
      dataToSend.geoLocation = await Promise.race<string>([
        ipGeoPromiseRef.current,
        new Promise<string>((r) => setTimeout(() => r(""), 3000)),
      ])
    }

    setIsSubmitting(true)
    try {
      const response = await fetch(ORDER_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      })

      if (response.type === "opaque" || response.ok) {
        trackEvent("order_submitted", { plan: selectedPlan?.name || "unspecified" })
        setConfirmationMessage("Thank you for your order. Your installation date/time will be confirmed via email.")
        form.reset()
        setInstallDate(undefined)
        setFormData({
          firstName: "", lastName: "", serviceAddress: "", zipCode: "",
          phoneNumber: "", email: "", dateOfBirth: "", preferredInstallTime: "", promoCode: "",
        })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      setConfirmationMessage(
        `There was an error submitting your order. Please try again or contact customer support at ${SUPPORT_PHONE}.`,
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  const today = new Date()
  const minInstallDate = startOfDay(addDays(today, 2))
  const maxInstallDate = startOfDay(addDays(today, 14))

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        data-testid="order-form-modal"
        className="sm:max-w-[600px] bg-mc-navy border-mc-gray/40 text-white max-h-[90vh] overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-display font-extrabold text-center text-white">
            {selectedPlan ? `Order ${selectedPlan.name}` : "Start Your Order"}
          </DialogTitle>
          {selectedPlan && (
            <p className="text-center text-mc-green font-display font-bold text-lg">${selectedPlan.price}/mo with AutoPay</p>
          )}
        </DialogHeader>
        {confirmationMessage ? (
          <div className="text-center py-6" data-testid="order-form-confirmation">
            <p className="text-white/90">{confirmationMessage}</p>
            <Button data-testid="order-form-close-button" onClick={onClose} className="mt-6 bg-mc-purple hover:bg-mc-purple/80 rounded-full">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 [&>div]:flex [&>div]:flex-col [&>div]:gap-1.5">
            <div>
              <Label htmlFor="firstName" className="text-white/80 text-sm">First Name</Label>
              <Input id="firstName" name="firstName" required data-testid="order-form-first-name" className="bg-black/40 text-white border-mc-gray/50" />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-white/80 text-sm">Last Name</Label>
              <Input id="lastName" name="lastName" required data-testid="order-form-last-name" className="bg-black/40 text-white border-mc-gray/50" />
            </div>
            <div className="col-span-2">
              <Label htmlFor="serviceAddress" className="text-white/80 text-sm">Service Address</Label>
              <Input id="serviceAddress" name="serviceAddress" required data-testid="order-form-address" className="bg-black/40 text-white border-mc-gray/50" />
            </div>
            <div>
              <Label htmlFor="zipCode" className="text-white/80 text-sm">Zip Code</Label>
              <Input
                id="zipCode" name="zipCode" required data-testid="order-form-zip"
                onChange={(e) => setFormData((prev) => ({ ...prev, zipCode: e.target.value }))}
                className="bg-black/40 text-white border-mc-gray/50"
              />
              {errors.zipCode && <p className="text-red-400 text-xs mt-1">{errors.zipCode}</p>}
            </div>
            <div>
              <Label htmlFor="phoneNumber" className="text-white/80 text-sm">Phone Number</Label>
              <Input
                id="phoneNumber" name="phoneNumber" type="tel" required data-testid="order-form-phone"
                onChange={(e) => setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))}
                className="bg-black/40 text-white border-mc-gray/50"
              />
              {errors.phoneNumber && <p className="text-red-400 text-xs mt-1">{errors.phoneNumber}</p>}
            </div>
            <div>
              <Label htmlFor="email" className="text-white/80 text-sm">Email</Label>
              <Input id="email" name="email" type="email" required data-testid="order-form-email" className="bg-black/40 text-white border-mc-gray/50" />
            </div>
            <div>
              <Label htmlFor="dateOfBirth" className="text-white/80 text-sm">Date of Birth (mm/dd/yyyy)</Label>
              <Input
                id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleDateOfBirthChange}
                placeholder="mm/dd/yyyy" required maxLength={10} data-testid="order-form-dob"
                className="bg-black/40 text-white border-mc-gray/50"
              />
              {errors.dateOfBirth && <p className="text-red-400 text-xs mt-1">{errors.dateOfBirth}</p>}
            </div>
            <div>
              <Label className="text-white/80 text-sm">Preferred Install Date</Label>
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button
                    type="button" variant="outline" data-testid="order-form-install-date"
                    className="w-full justify-start text-left font-normal bg-black/40 text-white border-mc-gray/50 hover:bg-black/60 hover:text-white"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {installDate ? format(installDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-mc-navy border-mc-gray/50">
                  <Calendar
                    mode="single" selected={installDate}
                    onSelect={(date) => { setInstallDate(date); setCalendarOpen(false) }}
                    disabled={(date) => date < minInstallDate || date > maxInstallDate}
                    autoFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label className="text-white/80 text-sm">Preferred Install Time</Label>
              <Select name="preferredInstallTime" onValueChange={(value) => setFormData((prev) => ({ ...prev, preferredInstallTime: value }))}>
                <SelectTrigger data-testid="order-form-install-time" className="bg-black/40 text-white border-mc-gray/50">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent className="bg-mc-navy text-white border-mc-gray/50">
                  <SelectItem value="8am-11am">8am - 11am</SelectItem>
                  <SelectItem value="11am-2pm">11am - 2pm</SelectItem>
                  <SelectItem value="2pm-5pm">2pm - 5pm</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2">
              <Label htmlFor="promoCode" className="text-white/80 text-sm">Promo Code (Optional)</Label>
              <Input id="promoCode" name="promoCode" placeholder="Enter promo code if you have one" data-testid="order-form-promo-code" className="bg-black/40 text-white border-mc-gray/50" />
            </div>
            <Button
              type="submit" disabled={isSubmitting} data-testid="order-form-submit-button"
              className="col-span-2 w-full bg-mc-green text-black font-display font-bold rounded-full py-6 hover:brightness-110"
            >
              {isSubmitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting...</>) : "Submit Order"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
