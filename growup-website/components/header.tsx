"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md w-full z-10 relative">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            GrowUp
          </Link>
        </div>

        <div className="hidden md:flex items-center">
          <Link href="/services" className="font-medium text-indigo-600 hover:text-indigo-700">
            Services
          </Link>
        </div>

        <button className="md:hidden text-gray-700 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link href="/services" className="font-medium text-indigo-600" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

