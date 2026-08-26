"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import {
  Wifi,
  Settings,
  Tv,
  Router,
  Search,
  PhoneCall,
  Mail,
  RefreshCw,
  MapPin,
  Shield,
  Zap,
  Phone,
  CreditCard,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link" // Add this import

const FAQ = dynamic(() => import("@/components/faq"), { ssr: false })
const CustomerSupport = dynamic(() => import("@/components/support/customer-support"), { ssr: false })

// Update the main component with improved content and structure
export default function SupportClient() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-10 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/support-background.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center animate-fade-in-up">
            Metronet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Support Center
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-center max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Get expert help for your Metronet fiber internet service. Our support team is available 24/7 to keep you
            connected.
          </p>
          <div className="flex justify-center animate-fade-in-up animation-delay-400">
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search for help topics..."
                className="w-full py-4 px-6 rounded-full bg-white bg-opacity-20 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="absolute right-2 top-2 rounded-full bg-purple-600 hover:bg-purple-700">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick navigation links */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 animate-fade-in-up animation-delay-500">
            <a
              href="#contact-options"
              className="bg-black/30 hover:bg-black/50 px-3 py-1.5 rounded-full text-sm transition-colors"
            >
              Contact Us
            </a>
            <a
              href="#troubleshooting"
              className="bg-black/30 hover:bg-black/50 px-3 py-1.5 rounded-full text-sm transition-colors"
            >
              Troubleshooting
            </a>
            <a
              href="#wifi-help"
              className="bg-black/30 hover:bg-black/50 px-3 py-1.5 rounded-full text-sm transition-colors"
            >
              WiFi Help
            </a>
            <a
              href="#equipment"
              className="bg-black/30 hover:bg-black/50 px-3 py-1.5 rounded-full text-sm transition-colors"
            >
              Equipment Setup
            </a>
            <a
              href="#billing"
              className="bg-black/30 hover:bg-black/50 px-3 py-1.5 rounded-full text-sm transition-colors"
            >
              Billing Help
            </a>
            <a href="#faq" className="bg-black/30 hover:bg-black/50 px-3 py-1.5 rounded-full text-sm transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* AI-friendly summary section */}
        <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-bold mb-3">Metronet Support: Quick Summary</h2>
          <p className="text-gray-300 leading-relaxed">
            Metronet provides 24/7 customer support for all fiber internet services via phone (1-877-407-3224), live
            chat, and email. Common issues like connection problems can often be resolved by restarting your router,
            checking cable connections, or running a speed test at speedtest.metronet.com. For WiFi optimization, place
            your router centrally, away from interference sources, and consider a mesh system for larger homes. Billing
            questions and equipment setup assistance are available through your online account portal or by contacting
            our support team directly.
          </p>
          <div className="mt-3 text-sm text-gray-400">Last updated: April 10, 2025</div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <section id="contact-options" className="mb-16 scroll-margin-top-24">
            <h2 className="text-3xl font-bold mb-6">Contact Metronet Support</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <PhoneCall className="mr-2 h-6 w-6 text-purple-500" />
                  Phone Support
                </h3>
                <p className="mb-4">
                  Our dedicated customer support team is available 24/7 to assist you with any questions or technical
                  issues.
                </p>
                <div className="bg-gray-800 p-4 rounded-lg mb-4">
                  <p className="font-semibold">Technical Support:</p>
                  <p className="text-xl mb-2">1-877-407-3224</p>
                  <p className="text-sm text-gray-400">Available 24 hours a day, 7 days a week</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold">Billing Support:</p>
                  <p className="text-xl mb-2">1-877-407-3224</p>
                  <p className="text-sm text-gray-400">Monday - Friday, 8am - 8pm EST</p>
                </div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Mail className="mr-2 h-6 w-6 text-purple-500" />
                  Online Support Options
                </h3>
                <p className="mb-4">Get help online through our customer portal, live chat, or email support.</p>
                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="font-semibold">Live Chat:</p>
                    <p className="mb-2">Chat with a support representative in real-time.</p>
                    <Button
                      onClick={() =>
                        window.open("https://www.metronet.com/support/chat-with-us-at-metronet-com", "_blank")
                      }
                    >
                      Start Chat
                    </Button>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="font-semibold">Email Support:</p>
                    <p className="mb-2">support@metronetreseller.com</p>
                    <p className="text-sm text-gray-400">Response within 24 hours</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="font-semibold">Customer Portal:</p>
                    <p className="mb-2">Access your account, pay bills, and manage your services.</p>
                    <Button onClick={() => window.open("https://portal.metronet.com/cp/login", "_blank")}>
                      Access Portal
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <section id="troubleshooting" className="mb-16 scroll-margin-top-24">
            <h2 className="text-3xl font-bold mb-6">Common Troubleshooting Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Wifi className="mr-2 h-6 w-6 text-purple-500" />
                  Internet Connection Issues
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold mb-2">No Internet Connection</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Check if all cables are securely connected to your router and ONT (Optical Network Terminal).
                      </li>
                      <li>Verify that your router is powered on (look for indicator lights).</li>
                      <li>Restart your router by unplugging it, waiting 30 seconds, and plugging it back in.</li>
                      <li>Check if other devices can connect to the internet.</li>
                      <li>If still not working, contact technical support.</li>
                    </ol>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold mb-2">Slow Internet Speeds</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Run a speed test at{" "}
                        <a
                          href="https://www.metronet.com/support/how-can-i-test-my-speed"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-400 hover:underline"
                        >
                          speedtest.metronet.com
                        </a>
                        .
                      </li>
                      <li>Connect directly to your router with an Ethernet cable to rule out WiFi issues.</li>
                      <li>Check how many devices are currently using your network.</li>
                      <li>Restart your router and any connected devices.</li>
                      <li>If speeds are still slow, contact technical support.</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Tv className="mr-2 h-6 w-6 text-purple-500" />
                  TV Service Issues
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold mb-2">No Signal or Poor Picture Quality</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Check that your TV is set to the correct input source.</li>
                      <li>Verify all cables are securely connected to your TV and set-top box.</li>
                      <li>Restart your set-top box by unplugging it, waiting 30 seconds, and plugging it back in.</li>
                      <li>Check if other TVs in your home are experiencing the same issue.</li>
                      <li>If still not working, contact technical support.</li>
                    </ol>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold mb-2">Remote Control Not Working</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Replace the batteries in your remote control.</li>
                      <li>Ensure there are no obstructions between the remote and the set-top box.</li>
                      <li>Try resetting your remote according to the user manual.</li>
                      <li>If still not working, you may need a replacement remote.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <RefreshCw className="mr-2 h-6 w-6 text-yellow-500" />
                How to Restart Your Equipment
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Router Restart</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Unplug the power cord from your router.</li>
                    <li>Wait 30 seconds.</li>
                    <li>Plug the power cord back in.</li>
                    <li>Wait for all indicator lights to return to their normal state (usually 2-3 minutes).</li>
                    <li>Test your connection.</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">ONT Restart</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Locate your Optical Network Terminal (typically a white box).</li>
                    <li>If it has a battery backup, remove the battery.</li>
                    <li>Unplug the power cord from the ONT.</li>
                    <li>Wait 30 seconds.</li>
                    <li>Plug the power cord back in and replace the battery if applicable.</li>
                    <li>Wait for all indicator lights to stabilize (usually 3-5 minutes).</li>
                  </ol>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-700/30 rounded-lg">
                <p className="text-yellow-300 font-semibold">Important Note:</p>
                <p className="text-gray-300">
                  If you're experiencing issues with both internet and TV services, always restart your router first,
                  then your ONT if needed. If problems persist after restarting your equipment, please contact our
                  technical support team.
                </p>
              </div>
            </div>
          </section>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <section id="wifi-help" className="mb-16 scroll-margin-top-24">
            <h2 className="text-3xl font-bold mb-6">WiFi Optimization Guide</h2>
            <div className="bg-gray-900 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Improve Your WiFi Performance</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-purple-400" />
                    Router Placement
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Place your router in a central location in your home.</li>
                    <li>Keep it elevated (on a shelf or desk) rather than on the floor.</li>
                    <li>Avoid placing it near metal objects, thick walls, or appliances.</li>
                    <li>Keep it away from other electronic devices that may cause interference.</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-purple-400" />
                    Network Security
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Use a strong, unique password for your WiFi network.</li>
                    <li>Enable WPA3 security if your router supports it.</li>
                    <li>Change your network name (SSID) from the default.</li>
                    <li>Keep your router's firmware updated.</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Settings className="mr-2 h-5 w-5 text-purple-400" />
                    Channel Optimization
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Use the 5GHz band for faster speeds when close to the router.</li>
                    <li>Use the 2.4GHz band for better range and wall penetration.</li>
                    <li>Change channels if you experience interference (channels 1, 6, or 11 are best for 2.4GHz).</li>
                    <li>Enable "Auto" channel selection in your router settings if available.</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-purple-400" />
                    Performance Tips
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Restart your router monthly to clear its cache and refresh connections.</li>
                    <li>Limit the number of devices connected to your network simultaneously.</li>
                    <li>
                      Consider using wired Ethernet connections for stationary devices like desktop computers or gaming
                      consoles.
                    </li>
                    <li>Update the firmware on all your connected devices regularly.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-lg border border-purple-700/30">
              <h3 className="text-xl font-semibold mb-4">Whole Home WiFi Solutions</h3>
              <p className="mb-4">
                If you're experiencing dead spots or weak WiFi signals in certain areas of your home, consider upgrading
                to our Whole Home WiFi solution.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Benefits of Mesh WiFi:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Eliminates dead zones throughout your home</li>
                    <li>Provides seamless coverage as you move between rooms</li>
                    <li>Supports more simultaneous device connections</li>
                    <li>Easy setup and management through a mobile app</li>
                    <li>Automatic updates and security patches</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ideal For:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Homes larger than 2,000 square feet</li>
                    <li>Multi-level homes</li>
                    <li>Homes with thick walls or unusual layouts</li>
                    <li>Households with many connected devices</li>
                    <li>Users who need consistent WiFi throughout their home</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button
                  onClick={() => window.open("https://www.metronet.com/support/c/whole-home-wifi", "_blank")}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Learn More About Whole Home WiFi
                </Button>
              </div>
            </div>
          </section>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <section id="equipment" className="mb-16 scroll-margin-top-24">
            <h2 className="text-3xl font-bold mb-6">Equipment Setup & Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <Router className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Router Setup</h3>
                <p className="mb-4">Learn how to set up and configure your Metronet router for optimal performance.</p>
                <Button onClick={() => window.open("https://www.metronet.com/support", "_blank")} className="w-full">
                  View Guide
                </Button>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <Tv className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">TV Equipment Setup</h3>
                <p className="mb-4">Step-by-step instructions for setting up your Metronet TV service and equipment.</p>
                <Button onClick={() => window.open("https://www.metronet.com/support", "_blank")} className="w-full">
                  View Guide
                </Button>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <Phone className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Phone Service Setup</h3>
                <p className="mb-4">Instructions for setting up and configuring your Metronet phone service.</p>
                <Button onClick={() => window.open("https://www.metronet.com/support", "_blank")} className="w-full">
                  View Guide
                </Button>
              </div>
            </div>

            <div className="mt-8 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Equipment Replacement & Returns</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">How to Request Replacement Equipment</h4>
                  <p className="mb-2">If your equipment is malfunctioning, you can request a replacement through:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Calling our technical support at 1-877-407-3224</li>
                    <li>Visiting your online customer portal</li>
                    <li>Stopping by a local Metronet store</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-400">
                    Note: Equipment under warranty will be replaced at no cost. Out-of-warranty equipment may incur a
                    replacement fee.
                  </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Equipment Return Process</h4>
                  <p className="mb-2">When cancelling service or upgrading equipment, return your old equipment by:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Using the prepaid return shipping label provided</li>
                    <li>Dropping it off at a local Metronet store</li>
                    <li>Scheduling a technician pickup (fees may apply)</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-400">
                    Important: Unreturned equipment will result in equipment charges on your final bill.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <section id="billing" className="mb-16 scroll-margin-top-24">
            <h2 className="text-3xl font-bold mb-6">Billing Support & Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CreditCard className="mr-2 h-6 w-6 text-purple-500" />
                  Payment Options
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Online Payment</h4>
                    <p>Pay your bill online through our secure customer portal.</p>
                    <Button
                      onClick={() => window.open("https://portal.metronet.com/cp/login", "_blank")}
                      className="mt-2"
                    >
                      Pay Online
                    </Button>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Automatic Payments</h4>
                    <p>Set up automatic payments to ensure your bill is always paid on time.</p>
                    <Button
                      onClick={() => window.open("https://portal.metronet.com/cp/login", "_blank")}
                      className="mt-2"
                    >
                      Set Up Auto-Pay
                    </Button>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Phone Payment</h4>
                    <p>Pay by phone by calling our billing department at 1-877-407-3224.</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Mail Payment</h4>
                    <p>Send check payments to:</p>
                    <address className="not-italic mt-2">
                      Metronet
                      <br />
                      P.O. Box 630635
                      <br />
                      Cincinnati, OH 45263-0635
                    </address>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <HelpCircle className="mr-2 h-6 w-6 text-purple-500" />
                  Billing FAQ
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">When is my bill due?</h4>
                    <p>
                      Your bill is due on the same date each month, as indicated on your statement. You can also view
                      your due date in your online account.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">How do I update my payment method?</h4>
                    <p>
                      You can update your payment method through your online customer portal or by calling our billing
                      department at 1-877-407-3224.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">What if I have a question about my bill?</h4>
                    <p>
                      If you have questions about charges on your bill, please contact our billing department at
                      1-877-407-3224 or email billing@metronetreseller.com.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Can I change my billing cycle date?</h4>
                    <p>
                      In some cases, we can adjust your billing cycle date. Please contact our billing department to
                      discuss your options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <section id="faq" className="mb-16 scroll-margin-top-24">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">How do I reset my Metronet account password?</h3>
                <p className="text-gray-300">
                  To reset your Metronet account password, visit the{" "}
                  <a
                    href="https://portal.metronet.com/cp/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    customer portal login page
                  </a>{" "}
                  and click on "Forgot Password." Follow the instructions to reset your password. You'll receive an
                  email with a password reset link. If you don't receive the email, check your spam folder or contact
                  customer support for assistance.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">What should I do if my internet is slow?</h3>
                <p className="text-gray-300">
                  If you're experiencing slow internet speeds, try these troubleshooting steps:
                </p>
                <ol className="list-decimal pl-6 mt-2  space-y-2 text-gray-300">
                  <li>Restart your router and connected devices</li>
                  <li>Connect directly to your router with an Ethernet cable to test if it's a WiFi issue</li>
                  <li>
                    Run a speed test at{" "}
                    <a
                      href="https://www.metronet.com/support/how-can-i-test-my-speed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:underline"
                    >
                      speedtest.metronet.com
                    </a>
                  </li>
                  <li>Check how many devices are currently using your network</li>
                  <li>Try moving your router to a more central location</li>
                  <li>If speeds are still slow, contact our technical support team</li>
                </ol>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">How do I set up my Metronet email account?</h3>
                <p className="text-gray-300">
                  To set up your Metronet email account, log in to your customer portal at{" "}
                  <a
                    href="https://portal.metronet.com/cp/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    portal.metronet.com
                  </a>
                  . Navigate to the "Email" section and follow the instructions to create your email account. You can
                  access your email through webmail or set it up on your preferred email client using the POP3 or IMAP
                  settings provided in the portal.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">What is the difference between 2.4GHz and 5GHz WiFi?</h3>
                <p className="text-gray-300">The 2.4GHz and 5GHz WiFi bands offer different benefits:</p>
                <div className="grid md:grid-cols-2 gap-4 mt-2">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <p className="font-semibold">2.4GHz WiFi:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      <li>Better range and wall penetration</li>
                      <li>More susceptible to interference</li>
                      <li>Slower maximum speeds</li>
                      <li>Good for devices farther from the router</li>
                    </ul>
                  </div>
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <p className="font-semibold">5GHz WiFi:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      <li>Faster maximum speeds</li>
                      <li>Less interference from other devices</li>
                      <li>Shorter range and less wall penetration</li>
                      <li>Better for high-bandwidth activities like streaming 4K video</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-3 text-gray-300">
                  Most modern routers, including those provided by Metronet, support both bands simultaneously, allowing
                  you to connect different devices to the most appropriate band.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">How do I report an outage?</h3>
                <p className="text-gray-300">To report a service outage, you can:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300">
                  <li>Call our technical support at 1-877-407-3224</li>
                  <li>Report it through your online customer portal</li>
                  <li>Use the Metronet mobile app</li>
                </ul>
                <p className="mt-2 text-gray-300">
                  Before reporting an outage, try restarting your equipment to see if that resolves the issue. You can
                  also check our{" "}
                  <a
                    href="https://www.metronet.com/support/service-outages"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    Service Status page
                  </a>{" "}
                  to see if there are any known outages in your area.
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button
                onClick={() => document.getElementById("contact-options")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Need More Help? Contact Us
              </Button>
            </div>
          </section>
        </Suspense>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
              onClick={() => window.open("https://www.metronet.com/support/wifi-help", "_blank")}
            >
              <h3 className="text-xl font-semibold mb-2">WiFi Optimization Guide</h3>
              <p>Learn how to improve your WiFi signal and coverage.</p>
            </div>
            <div
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
              onClick={() => window.open("https://www.metronet.com/support/equipment-setup", "_blank")}
            >
              <h3 className="text-xl font-semibold mb-2">Router Setup Instructions</h3>
              <p>Step-by-step guide to setting up your Metronet router.</p>
            </div>
            <div
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
              onClick={() => window.open("https://www.metronet.com/support/billing", "_blank")}
            >
              <h3 className="text-xl font-semibold mb-2">Billing FAQ</h3>
              <p>Answers to common questions about your Metronet bill.</p>
            </div>
            <div
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
              onClick={() => window.open("https://www.metronet.com/support/outages", "_blank")}
            >
              <h3 className="text-xl font-semibold mb-2">Service Outage Information</h3>
              <p>Check for known service issues in your area.</p>
            </div>
          </div>
        </section>

        <Suspense fallback={<div>Loading...</div>}>
          <section className="mt-16">
            <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Our dedicated support team is available 24/7 to assist you with any questions or technical issues.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => window.open("tel:18774073224")}
                  className="bg-white text-purple-900 hover:bg-gray-100"
                >
                  <Phone className="mr-2 h-4 w-4" /> Call Support
                </Button>
                <Link href="/contact-us">
                  <Button className="bg-transparent border border-white text-white hover:bg-white/10">
                    <Mail className="mr-2 h-4 w-4" /> Contact Us Online
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </Suspense>

        {/* Last updated information */}
        <div className="text-center text-sm text-gray-500 mt-16">
          <p>Last updated: April 10, 2025</p>
          <p>© 2025 Metronet Authorized Reseller. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
