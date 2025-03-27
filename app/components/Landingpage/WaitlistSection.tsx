'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const WaitlistSection = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
   
    setSubmitted(true)
  }

  return (
    <section id="waitlist" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Form Section */}
            <div className="p-10 md:p-16 flex items-center">
              <div className="w-full">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Join the Waitlist
                </h2>
                <p className="text-gray-600 mb-8">
                  Be the first to experience the future of seamless cross-border payments.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c4fc74] transition"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-full bg-[#c4fc74] text-white font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Join Waitlist
                    </button>
                  </form>
                ) : (
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <CheckCircle size={64} className="text-[#c4fc74]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      You've been added to our waitlist. We'll keep you updated on our progress.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-lg bg-[#c4fc74] text-[#373742] font-semibold hover:bg-green-600 transition"
                    >
                      Join Another Waitlist
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Illustration Section */}
            <div className="hidden lg:flex items-center justify-center bg-green-50 p-12">
              <div className="w-full max-w-md">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 400 300" 
                  className="w-full h-auto"
                >
                  {/* Global Connection */}
                  <circle cx="200" cy="150" r="120" fill="#e6f3e6" />
                  
                  {/* Connection Lines */}
                  <line x1="200" y1="150" x2="100" y2="80" stroke="#4ade80" strokeWidth="3" strokeDasharray="5,5" />
                  <line x1="200" y1="150" x2="300" y2="80" stroke="#4ade80" strokeWidth="3" strokeDasharray="5,5" />
                  <line x1="200" y1="150" x2="150" y2="250" stroke="#4ade80" strokeWidth="3" strokeDasharray="5,5" />
                  <line x1="200" y1="150" x2="250" y2="250" stroke="#4ade80" strokeWidth="3" strokeDasharray="5,5" />
                  
                  {/* Nodes */}
                  <circle cx="200" cy="150" r="20" fill="#c4fc74" />
                  <circle cx="100" cy="80" r="10" fill="#c4fc74" />
                  <circle cx="300" cy="80" r="10" fill="#c4fc74" />
                  <circle cx="150" cy="250" r="10" fill="#c4fc74" />
                  <circle cx="250" cy="250" r="10" fill="#c4fc74" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WaitlistSection