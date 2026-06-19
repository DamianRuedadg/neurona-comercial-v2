'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { awardsContent } from '@/app/data/home-content'

const GAP = 24

export default function AwardsCarousel() {
  const [current, setCurrent] = useState(0)
  const [maxIdx, setMaxIdx] = useState(awardsContent.length - 1)
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
    const idx = cards.findIndex((card) => card.offsetLeft + card.offsetWidth > maxScroll)
    const computed = idx >= 0 ? idx : cards.length - 1
    setMaxIdx(computed)
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

  useEffect(() => {
    const id = setTimeout(computeMaxIdx, 60)
    window.addEventListener('resize', computeMaxIdx)
    return () => {
      clearTimeout(id)
      window.removeEventListener('resize', computeMaxIdx)
    }
  }, [computeMaxIdx])

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
    <section className="py-20 lg:py-28 bg-white">
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
            RECONOCIMIENTOS
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
            Reconocimientos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Avales que reflejan nuestro compromiso con la excelencia y el impacto real.
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
              style={{ gap: GAP, scrollbarWidth: 'none' }}
            >
              {awardsContent.map((award) => (
                <div
                  key={award.title}
                  className="
                    flex-shrink-0
                    w-full
                    sm:w-[calc(50%-12px)]
                    lg:w-[calc(33.33%-16px)]
                    flex flex-col items-center text-center
                    bg-white rounded-2xl p-8
                    border border-[#57b5e0]
                    transition-colors duration-300 hover:bg-[#57b5e0]/10
                  "
                >
                  {/* Icon */}
                  <div className="mb-5">
                    <Award size={48} strokeWidth={1.5} style={{ color: '#141f78' }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#141f78' }}>
                    {award.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm font-bold text-gray-700 mb-4">
                    {award.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {award.text}
                  </p>
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
          {awardsContent.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir al reconocimiento ${i + 1}`}
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
