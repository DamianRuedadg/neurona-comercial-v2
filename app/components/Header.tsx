'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/app/data/home-content'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#141f78]/90 backdrop-blur-md shadow-lg' : 'bg-[#141f78]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo_Neurona.png"
              alt="Neurona Comercial"
              width={160}
              height={48}
              className="h-24 lg:h-32 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#"
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:brightness-110"
              style={{ backgroundColor: '#57b5e0', color: '#141f78' }}
            >
              Academia Neurona
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#contacto"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[#57b5e0] text-white font-semibold text-sm hover:bg-[#4aa8d3] transition-all"
            >
              Pedí tu reunión
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-1"
              aria-label="Abrir menú"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#141f78] border-t border-white/10">
          <nav className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-white font-medium py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-sm"
              style={{ backgroundColor: '#57b5e0', color: '#141f78' }}
            >
              Academia Neurona
            </Link>
            <Link
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-[#141f78] font-semibold text-sm"
            >
              Pedí tu reunión
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
