'use client'

import { useState } from 'react'
import Link from 'next/link'
import './styles/Navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          <div className="navbar-brand">
            <Link href="/" className="navbar-title">
              Dr. Serena Blake
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="navbar-links">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="navbar-link"
              >
                {item.name}
              </Link>
            ))}
            <button className="navbar-button">Book Session</button>
          </div>

          {/* Mobile menu button */}
          <div className="navbar-menu-button">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-toggle-button"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="mobile-menu-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mobile-menu-button-wrapper">
              <button className="navbar-button w-full">Book Session</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
