"use client"

import type React from "react"

import { useState, useCallback, useRef, useEffect } from "react"
import { Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format, addDays, parse, isValid, startOfDay } from "date-fns"
import { CalendarIcon } from "lucide-react"

interface OrderFormProps {
  isOpen: boolean
  onClose: () => void
  selectedPlan: {
    name: string
    price: string
  } | null
}

async function resolveIpGeoLocation(): Promise<string> {
  const apis: { url: string; parse: (j: Record<string, string>) => string }[] = [
    {
      url: "https://ipwho.is/?fields=success,city,region",
      parse: (j) => [j.city, j.region].filter(Boolean).join(", "),
    },
    {
      url: "https://ipapi.co/json/",
      parse: (j) => [j.city, j.region].filter(Boolean).join(", "),
    },
    {
      url: "https://get.geojs.io/v1/ip/geo.json",
      parse: (j) => [j.city, j.region].filter(Boolean).join(", "),
    },
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
      // try next
    } finally {
      clearTimeout(timeout)
    }
  }
  return ""
}

export default function OrderForm({ isOpen, onClose, selectedPlan }: OrderFormProps) {
  const [confirmationMessage, setConfirmationMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [addPhoneService, setAddPhoneService] = useState(false)
  const [installDate, setInstallDate] = useState<Date>()
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    serviceAddress: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    preferredInstallTime: "",
    promoCode: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const ipGeoPromiseRef = useRef<Promise<string> | null>(null)

  useEffect(() => {
    if (!isOpen) return
    ipGeoPromiseRef.current = resolveIpGeoLocation()
  }, [isOpen])

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    // Validate Date of Birth
    const dobDate = parse(formData.dateOfBirth, "MM/dd/yyyy", new Date())
    if (!isValid(dobDate)) {
      newErrors.dateOfBirth = "Please enter a valid date of birth (MM/DD/YYYY)"
    }

    // Validate Phone Number
    if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ""))) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number"
    }

    // Validate Zip Code
    if (!/^\d{5}$/.test(formData.zipCode)) {
      newErrors.zipCode = "Please enter a valid 5-digit zip code"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleDateOfBirthChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "")
    let formatted = input
    if (input.length > 2) {
      formatted = `${input.slice(0, 2)}/${input.slice(2)}`
    }
    if (input.length > 4) {
      formatted = `${formatted.slice(0, 5)}/${input.slice(4, 8)}`
    }
    setFormData((prev) => ({ ...prev, dateOfBirth: formatted }))
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validateForm()) {
      return
    }
    const form = event.currentTarget
    const formData = new FormData(form)
    const formProps = Object.fromEntries(formData)

    const dataToSend = {
      timestamp: new Date().toISOString(),
      order: selectedPlan ? `${selectedPlan.name} - $${selectedPlan.price}` : "No plan selected",
      firstName: formProps.firstName,
      lastName: formProps.lastName,
      serviceAddress: formProps.serviceAddress,
      zipCode: formProps.zipCode,
      phoneNumber: formProps.phoneNumber,
      email: formProps.email,
      dateOfBirth: formProps.dateOfBirth,
      preferredInstallDate: installDate ? format(installDate, "yyyy-MM-dd") : "",
      preferredInstallTime: formProps.preferredInstallTime,
      promoCode: formProps.promoCode || "None",
      addPhoneService: addPhoneService ? "Yes" : "No",
      geoLocation: "",
    }

    // Wait up to 3 s for the in-flight geo lookup started when the modal opened
    if (ipGeoPromiseRef.current) {
      dataToSend.geoLocation = await Promise.race<string>([
        ipGeoPromiseRef.current,
        new Promise<string>((r) => setTimeout(() => r(""), 3000)),
      ])
    }

    setIsSubmitting(true)
    try {
      console.log("Sending data:", dataToSend)
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyUAIeLf5c-3B0nAZy40SwO7kkbvs21bbzuHOCmCR9W1ZYAmEUacUiVXpZAoNy6FR-olQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        },
      )

      console.log("Response:", response)
      if (response.type === "opaque" || response.ok) {
        setConfirmationMessage("Thank you for your order. Your installation date/time will be confirmed via email.")
        form.reset()
        setAddPhoneService(false)
        setInstallDate(undefined)
        setFormData({
          firstName: "",
          lastName: "",
          serviceAddress: "",
          zipCode: "",
          phoneNumber: "",
          email: "",
          dateOfBirth: "",
          preferredInstallTime: "",
          promoCode: "",
        })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setConfirmationMessage(
        "There was an error submitting your order. Please try again or contact customer support at 1-877-407-3224.",
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
      <DialogContent className="sm:max-w-[600px] bg-[#212145] text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-white">Order {selectedPlan?.name}</DialogTitle>
        </DialogHeader>
        {confirmationMessage ? (
          <div className="text-center py-4">
            <p>{confirmationMessage}</p>
            <Button onClick={onClose} className="mt-4 bg-[#964DFF] hover:bg-[#00A89C]">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 [&>div]:flex [&>div]:flex-col [&>div]:gap-1.5">
            <div>
              <Label htmlFor="firstName" className="text-white">
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                required
                className="bg-[#2C2C54] text-white border-[#6E6E70]"
                onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-white">
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                required
                className="bg-[#2C2C54] text-white border-[#6E6E70]"
                onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="serviceAddress" className="text-white">
                Service Address
              </Label>
              <Input
                id="serviceAddress"
                name="serviceAddress"
                required
                className="bg-[#2C2C54] text-white border-[#6E6E70]"
                onChange={(e) => setFormData((prev) => ({ ...prev, serviceAddress: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="zipCode" className="text-white">
                Zip Code
              </Label>
              <Input
                id="zipCode"
                name="zipCode"
                required
                className="bg-[#2C2C54] text-white border-[#6E6E70]"
                onChange={(e) => setFormData((prev) => ({ ...prev, zipCode: e.target.value }))}
              />
              {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
            </div>
            <div>
              <Label htmlFor="phoneNumber" className="text-white">
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                required
                className="bg-[#2C2C54] text-white border-[#6E6E70]"
                onChange={(e) => setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))}
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
            </div>
            <div>
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="bg-[#2C2C54] text-white border-[#6E6E70]"
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="dateOfBirth" className="text-white">
                Date of Birth (mm/dd/yyyy)
              </Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleDateOfBirthChange}
                placeholder="mm/dd/yyyy"
                required
                maxLength={10}
                className="bg-[#2C2C54] text-white border-[#6E6E70]"
              />
              {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
            </div>
            <div>
              <Label htmlFor="preferredInstallDate" className="text-white">
                Preferred Install Date
              </Label>
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`w-full justify-start text-left font-normal bg-[#2C2C54] text-white border-[#6E6E70] hover:bg-[#3D3D6B] hover:text-white ${!installDate && "text-muted-foreground"}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {installDate ? format(installDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-[#2C2C54]">
                  <Calendar
                    mode="single"
                    selected={installDate}
                    onSelect={(date) => {
                      setInstallDate(date)
                      setCalendarOpen(false)
                    }}
                    disabled={(date) => date < minInstallDate || date > maxInstallDate}
                    autoFocus
                    className="bg-[#2C2C54] text-white [&_.rdp-weekday]:text-white [&_.rdp-month_caption]:text-white [&_.rdp-button_previous]:text-white [&_.rdp-button_next]:text-white [&_.rdp-button_previous:hover]:bg-[#3D3D6B] [&_.rdp-button_previous:hover]:text-white [&_.rdp-button_next:hover]:bg-[#3D3D6B] [&_.rdp-button_next:hover]:text-white [&_.rdp-day>button]:text-white [&_.rdp-day>button:hover]:bg-[#3D3D6B] [&_.rdp-day>button:hover]:text-white [&_.rdp-day_disabled>button]:text-gray-500 [&_.rdp-day_disabled>button]:opacity-50 [&_.rdp-selected>button]:bg-[#964DFF] [&_.rdp-selected>button]:text-white [&_.rdp-selected>button:hover]:bg-[#964DFF] [&_.rdp-selected>button:hover]:text-white"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="preferredInstallTime" className="text-white">
                Preferred Install Time
              </Label>
              <Select
                name="preferredInstallTime"
                onValueChange={(value) => setFormData((prev) => ({ ...prev, preferredInstallTime: value }))}
              >
                <SelectTrigger className="bg-[#2C2C54] text-white border-[#6E6E70] hover:bg-[#3D3D6B]">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C2C54] text-white border-[#6E6E70]">
                  <SelectItem value="8am-11am" className="hover:bg-[#3D3D6B] hover:text-white focus:bg-[#3D3D6B] focus:text-white data-[highlighted]:bg-[#3D3D6B] data-[highlighted]:text-white">
                    8am - 11am
                  </SelectItem>
                  <SelectItem value="11am-2pm" className="hover:bg-[#3D3D6B] hover:text-white focus:bg-[#3D3D6B] focus:text-white data-[highlighted]:bg-[#3D3D6B] data-[highlighted]:text-white">
                    11am - 2pm
                  </SelectItem>
                  <SelectItem value="2pm-5pm" className="hover:bg-[#3D3D6B] hover:text-white focus:bg-[#3D3D6B] focus:text-white data-[highlighted]:bg-[#3D3D6B] data-[highlighted]:text-white">
                    2pm - 5pm
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="promoCode" className="text-white">
                Promo Code (Optional)
              </Label>
              <Input
                id="promoCode"
                name="promoCode"
                className="bg-[#2C2C54] text-white border-[#6E6E70]"
                placeholder="Enter promo code if you have one"
                onChange={(e) => setFormData((prev) => ({ ...prev, promoCode: e.target.value }))}
              />
            </div>
            <div className="col-span-2 !flex-row items-center justify-start gap-2">
              <Checkbox
                id="addPhoneService"
                checked={addPhoneService}
                onCheckedChange={(checked) => setAddPhoneService(checked as boolean)}
                className="bg-[#2C2C54] border-[#6E6E70]"
              />
              <Label htmlFor="addPhoneService" className="text-sm text-white">
                Add phone service for $15/month
              </Label>
            </div>
            <Button type="submit" className="col-span-2 w-full bg-[#964DFF] hover:bg-[#00A89C]" disabled={isSubmitting}>
              {isSubmitting ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting...</>
              ) : "Submit Order"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
