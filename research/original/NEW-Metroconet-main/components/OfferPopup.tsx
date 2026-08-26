"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { keyframes } from "@emotion/react"
import { Check } from "lucide-react"

const bounceIn = keyframes`
  from, 20%, 40%, 60%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(.97, .97, .97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`

export default function OfferPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenOfferPopup")
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000) // Show popup after 3 seconds

      return () => clearTimeout(timer)
    }
  }, [])

  const closePopup = () => {
    setIsVisible(false)
    localStorage.setItem("hasSeenOfferPopup", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-lg shadow-2xl max-w-md w-full mx-4 relative animate-[${bounceIn} 0.75s]">
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>
        <h2 className="text-4xl font-extrabold mb-4 text-white text-center">Limited Time Offer!</h2>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6">
          <ul className="list-none space-y-2 text-white text-lg">
            <li className="flex items-center">
              <Check className="text-green-400 mr-2" /> No Deposit / $0 Due at Signup
            </li>
            <li className="flex items-center">
              <Check className="text-green-400 mr-2" /> Free Installation
            </li>
            <li className="flex items-center">
              <Check className="text-green-400 mr-2" /> Unlimited Data
            </li>
          </ul>
        </div>
        <p className="text-sm text-white mb-6 text-center">Don't miss out on this incredible deal!</p>
        <div className="flex justify-center">
          <Link href="/promotions">
            <Button className="bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Promotions
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
