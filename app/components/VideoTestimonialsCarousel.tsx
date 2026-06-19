'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { videoTestimonialsContent } from '@/app/data/home-content'

const { title, subtitle, clients } = videoTestimonialsContent

const CARD_W   = 180                              // px — ancho fijo de cada tarjeta
const GAP      = 16                               // px — gap entre tarjetas
const SCROLL   = clients.length * (CARD_W + GAP) // px — distancia exacta de un set completo
const DURATION = clients.length * 4.5            // segundos — ~4.5s por tarjeta

// Duplicamos para el loop perfecto
const loopCards = [...clients, ...clients]

export default function VideoTestimonialsCarousel() {
  const [paused, setPaused] = useState(false)

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">

      {/* Keyframe inyectado en el documento */}
      <style>{`
        @keyframes ncMarquee {
          from { transform: translateX(0px); }
          to   { transform: translateX(-${SCROLL}px); }
        }
      `}</style>

      {/* Pill + header — contenedor con margen */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-4"
        >
          <span className="inline-block rounded-full bg-[#57b5e0]/10 text-[#141f78] text-xs font-semibold tracking-wide uppercase px-4 py-1.5">
            CASOS DE ÉXITO
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#141f78' }}>
            {title}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Marquee — ancho completo, sin contenedor max-w */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="overflow-hidden"
      >
        <div
          className="flex"
          style={{
            gap: GAP,
            willChange: 'transform',
            animation: `ncMarquee ${DURATION}s linear infinite`,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {loopCards.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 relative rounded-2xl overflow-hidden bg-[#E5E5E5]"
              style={{ width: CARD_W, aspectRatio: '9 / 16' }}
            >
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => console.log(`play: ${client.name}`)}
                  aria-label={`Reproducir testimonio de ${client.name}`}
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
                  style={{ backgroundColor: 'rgba(20, 31, 120, 0.75)' }}
                >
                  <Play
                    size={24}
                    fill="#57b5e0"
                    strokeWidth={0}
                    style={{ color: '#57b5e0', marginLeft: 3 }}
                  />
                </button>
              </div>

              {/* Name overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)' }}
              >
                <p className="text-white text-sm font-semibold">{client.name}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
