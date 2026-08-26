"use client"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const dataToSend = {
        ...formData,
        timestamp: new Date().toISOString(),
      }

      // Check if we're in development mode and simulate success
      if (process.env.NODE_ENV === "development") {
        console.log("Development mode: Simulating successful form submission", dataToSend)
        setFormData({ name: "", email: "", phone: "", address: "" })
        alert("Form submitted successfully (development mode)")
        return
      }

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyUAIeLf5c-3B0nAZy40SwO7kkbvs21bbzuHOCmCR9W1ZYAmEUacUiVXpZAoNy6FR-olQ/exec",
        {
          method: "POST",
          body: JSON.stringify(dataToSend),
          headers: {
            "Content-Type": "application/json",
          },
        },
      )

      if (response.ok) {
        console.log("Form submitted successfully")
        setFormData({ name: "", email: "", phone: "", address: "" })
        alert("Thank you for contacting us! We'll get back to you shortly.")
      } else {
        console.error("Form submission failed")
        alert("There was an error submitting your form. Please try again or call us directly.")
      }
    } catch (error) {
      console.error("There was an error submitting the form", error)
      alert("There was an error submitting your form. Please try again or call us directly at 1-877-407-3224.")
    } finally {
      setIsSubmitting(false)
    }
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
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting...</>
        ) : "Submit"}
      </Button>
    </form>
  )
}
