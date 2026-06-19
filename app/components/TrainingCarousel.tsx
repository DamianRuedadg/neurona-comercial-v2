'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { trainings } from '@/app/data/home-content'

const GAP = 24 // gap-6 = 1.5rem = 24px at default font size

export default function TrainingCarousel() {
  const [current, setCurrent] = useState(0)
  const [maxIdx, setMaxIdx] = useState(trainings.length - 1)
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollToCard = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[index] as HTMLElement | undefined
    if (!card) return
    track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
  }, [])

  const computeMaxIdx = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const maxScroll = track.scrollWidth - track.clientWidth
    if (maxScroll <= 0) { setMaxIdx(0); return }
    const cards = Array.from(track.children) as HTMLElement[]
    // Last card whose right edge extends past maxScroll is the last reachable first-visible card
    const idx = cards.findIndex((card) => card.offsetLeft + card.offsetWidth > maxScroll)
    const computed = idx >= 0 ? idx : cards.length - 1
    setMaxIdx(computed)
    // Clamp current if viewport grew (e.g. rotating mobile to landscape)
    setCurrent((prev) => {
      if (prev > computed) {
        const clamped = computed
        const target = track.children[clamped] as HTMLElement | undefined
        if (target) track.scrollTo({ left: target.offsetLeft, behavior: 'smooth' })
        return clamped
      }
      return prev
    })
  }, [])

  // Measure on mount and on resize
  useEffect(() => {
    const id = setTimeout(computeMaxIdx, 60) // wait for layout
    window.addEventListener('resize', computeMaxIdx)
    return () => {
      clearTimeout(id)
      window.removeEventListener('resize', computeMaxIdx)
    }
  }, [computeMaxIdx])

  // Block wheel and touch-drag scrolling — arrows only
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const stop = (e: Event) => e.preventDefault()
    track.addEventListener('wheel', stop, { passive: false })
    track.addEventListener('touchmove', stop, { passive: false })
    return () => {
      track.removeEventListener('wheel', stop)
      track.removeEventListener('touchmove', stop)
    }
  }, [])

  const prev = () => {
    const next = Math.max(0, current - 1)
    setCurrent(next)
    scrollToCard(next)
  }

  const next = () => {
    const next = Math.min(maxIdx, current + 1)
    setCurrent(next)
    scrollToCard(next)
  }

  const goTo = (i: number) => {
    const clamped = Math.min(maxIdx, i)
    setCurrent(clamped)
    scrollToCard(clamped)
  }

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#f0f4f9' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-4"
        >
          <span className="inline-block rounded-full bg-[#57b5e0]/10 text-[#141f78] text-xs font-semibold tracking-wide uppercase px-4 py-1.5">
            FORMACIÓN
          </span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#141f78' }}>
            Capacitaciones Disponibles
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Formación práctica para equipos y profesionales que quieren liderar el cambio digital.
          </p>
        </motion.div>

        {/* Carousel row: arrows + track */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex items-stretch gap-3 sm:gap-4"
        >
          {/* Prev arrow */}
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Anterior"
            className="flex-shrink-0 self-center w-11 h-11 rounded-full border-2 flex items-center justify-center bg-white transition-all duration-200 disabled:opacity-25 hover:bg-[#141f78] hover:text-white disabled:hover:bg-white disabled:hover:text-[#141f78]"
            style={{ borderColor: '#141f78', color: '#141f78' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Overflow-hidden wrapper clips the scrollable track */}
          <div className="flex-1 overflow-hidden">
            <div
              ref={trackRef}
              className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden"
              style={{ gap: GAP, scrollbarWidth: 'none', position: 'relative' }}
            >
              {trainings.map((course) => (
                <div
                  key={course.title}
                  className="
                    flex-shrink-0
                    w-full
                    sm:w-[calc(50%-12px)]
                    lg:w-[calc(33.33%-16px)]
                    flex flex-col
                    bg-white rounded-2xl p-6
                    border border-[#57b5e0]/30
                    hover:border-[#57b5e0]
                    hover:-translate-y-2
                    hover:shadow-xl
                    transition-all duration-300
                  "
                >
                  {/* Badge + icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: '#141f78' }}
                    >
                      {course.category}
                    </span>
                    <span className="text-3xl leading-none">{course.icon}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-bold leading-snug mb-5"
                    style={{ color: '#141f78' }}
                  >
                    {course.title}
                  </h3>

                  {/* Meta */}
                  <div className="mt-auto space-y-2 mb-6">
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                      <span style={{ color: '#57b5e0' }}>⏱</span>
                      {course.duration}
                    </p>
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                      <span style={{ color: '#57b5e0' }}>💻</span>
                      {course.mode}
                    </p>
                  </div>

                  {/* CTA */}
                  <button
                    className="w-full py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-200 hover:bg-[#141f78] hover:text-white"
                    style={{ borderColor: '#141f78', color: '#141f78', backgroundColor: 'transparent' }}
                  >
                    Más información
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            disabled={current >= maxIdx}
            aria-label="Siguiente"
            className="flex-shrink-0 self-center w-11 h-11 rounded-full border-2 flex items-center justify-center bg-white transition-all duration-200 disabled:opacity-25 hover:bg-[#141f78] hover:text-white disabled:hover:bg-white disabled:hover:text-[#141f78]"
            style={{ borderColor: '#141f78', color: '#141f78' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {trainings.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir a la tarjeta ${i + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === current ? 32 : 8,
                backgroundColor: i === current ? '#141f78' : '#57b5e0',
                opacity: i === current ? 1 : 0.35,
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
