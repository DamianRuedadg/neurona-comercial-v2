'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { heroSlides } from '@/app/data/home-content'

const AUTOPLAY_MS = 5000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % heroSlides.length)
  }, [])

  const goTo = (i: number) => setCurrent(i)

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [next, paused])

  const slide = heroSlides[current]

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Animated background photo with Ken Burns zoom */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current + '-bg'}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.08 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.9, ease: 'easeInOut' },
            scale: { duration: 5, ease: 'linear' },
          }}
        />
      </AnimatePresence>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* Slide label strip */}
      <div className="absolute top-28 left-0 right-0 flex justify-center z-10">
        <div className="flex gap-6">
          {heroSlides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="flex flex-col items-center gap-1.5 group"
              aria-label={s.label}
            >
              <span
                className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
                  i === current ? 'text-[#57b5e0]' : 'text-white/30 group-hover:text-white/60'
                }`}
              >
                {s.label}
              </span>
              <span
                className={`block h-0.5 rounded-full transition-all duration-500 ${
                  i === current ? 'w-8 bg-[#57b5e0]' : 'w-4 bg-white/20 group-hover:bg-white/40'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Slide content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {slide.title}
            </h1>

            <p
              className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.78)' }}
            >
              {slide.subtitle}
            </p>

            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
              style={{ background: '#57b5e0' }}
            >
              {slide.cta}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative h-1 rounded-full overflow-hidden bg-white/20 transition-all duration-300"
            style={{ width: i === current ? 40 : 20 }}
            aria-label={`Ir al slide ${i + 1}`}
          >
            {i === current && !paused && (
              <motion.span
                className="absolute inset-y-0 left-0 rounded-full bg-[#57b5e0]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
                key={current}
              />
            )}
            {i === current && (
              <span className="absolute inset-0 rounded-full bg-[#57b5e0] opacity-50" />
            )}
          </button>
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 text-white/50 hover:text-white hover:border-white/50 transition-all duration-200"
        aria-label="Anterior"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 text-white/50 hover:text-white hover:border-white/50 transition-all duration-200"
        aria-label="Siguiente"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </section>
  )
}
