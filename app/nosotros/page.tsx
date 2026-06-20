'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Eye, Image as ImageIcon } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import AwardsCarousel from '@/app/components/AwardsCarousel'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const PILL = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.6, ease: EASE },
} as const

const HEADING = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.9, ease: EASE, delay: 0.1 },
} as const

const FOUNDERS = [
  {
    initials: 'JG',
    name: 'Juan Guzmán',
    role: 'Co-Founder & Director de Procesos y TI',
  },
  {
    initials: 'GM',
    name: 'Gerardo Márquez',
    role: 'Co-Founder & Director de Asuntos Legales y Estructura',
  },
]

const FACILITATORS = [
  { initials: 'AM', name: 'Andrea Molina', role: 'Consultora de Procesos' },
  { initials: 'LV', name: 'Lucas Varela', role: 'Especialista en TI' },
  { initials: 'PG', name: 'Paula Gutiérrez', role: 'Asesora Legal Corporativa' },
  { initials: 'MT', name: 'Martín Torres', role: 'Estratega de Marketing Digital' },
  { initials: 'CR', name: 'Camila Ríos', role: 'Analista de Datos' },
  { initials: 'DF', name: 'Diego Funes', role: 'Especialista en EdTech' },
]

// SVG dot coords: x=(73-lon)*14, y=(lat-22)*17 with viewBox "0 0 294 560"
const MAP_DOTS = [
  { cx: 106, cy: 48, label: 'Salta', begin: '0s' },
  { cx: 109, cy: 82, label: 'Tucumán', begin: '0.4s' },
  { cx: 123, cy: 160, label: 'Córdoba', begin: '0.8s' },
  { cx: 59, cy: 185, label: 'Mendoza', begin: '1.2s' },
  { cx: 172, cy: 185, label: 'Rosario', begin: '1.6s' },
  { cx: 204, cy: 214, label: 'Buenos Aires', begin: '2.0s' },
  { cx: 24, cy: 325, label: 'Bariloche', begin: '2.4s' },
  { cx: 63, cy: 476, label: 'Patagonia Sur', begin: '2.8s' },
]

function HistorySlider() {
  const [idx, setIdx] = useState(0)
  const TOTAL = 5

  useEffect(() => {
    const timer = setInterval(() => setIdx((p) => (p + 1) % TOTAL), 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: EASE }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{ backgroundColor: '#E5E5E5' }}
        >
          <ImageIcon size={48} strokeWidth={1.3} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-400">Foto {idx + 1}</span>
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full transition-all duration-400"
            style={{
              width: i === idx ? 24 : 6,
              backgroundColor: i === idx ? '#141f78' : 'rgba(255,255,255,0.7)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

const GALLERY_N        = 6
const GALLERY_CARD_W   = 280
const GALLERY_GAP      = 16
const GALLERY_SCROLL   = GALLERY_N * (GALLERY_CARD_W + GALLERY_GAP)
const GALLERY_DURATION = GALLERY_N * 5   // segundos — velocidad cómoda

const galleryLoopItems = Array.from({ length: GALLERY_N * 2 }, (_, i) => (i % GALLERY_N) + 1)

const galleryCardVariants = {
  rest:  { scale: 1,    boxShadow: '0 0 0px 0px rgba(87,181,224,0)' },
  hover: { scale: 1.05, boxShadow: '0 0 28px 6px rgba(87,181,224,0.55)' },
}

const galleryShineVariants = {
  rest:  { x: -120 },
  hover: { x: GALLERY_CARD_W + 120 },
}

function GalleryMarquee() {
  const [paused, setPaused] = useState(false)

  return (
    <>
      <style>{`
        @keyframes ncGalleryMarquee {
          from { transform: translateX(0px); }
          to   { transform: translateX(-${GALLERY_SCROLL}px); }
        }
      `}</style>

      {/* py-3 da espacio vertical para que el scale no quede recortado */}
      <div
        className="overflow-hidden py-3"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex"
          style={{
            gap: GALLERY_GAP,
            willChange: 'transform',
            animation: `ncGalleryMarquee ${GALLERY_DURATION}s linear infinite`,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {galleryLoopItems.map((n, i) => (
            <motion.div
              key={i}
              variants={galleryCardVariants}
              initial="rest"
              whileHover="hover"
              transition={{ duration: 0.3, ease: EASE }}
              className="relative flex-shrink-0 rounded-2xl overflow-hidden bg-[#E5E5E5] cursor-pointer"
              style={{ width: GALLERY_CARD_W, aspectRatio: '16/9' }}
            >
              {/* Destello — se anima via propagación de variantes del padre */}
              <motion.div
                variants={galleryShineVariants}
                transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-y-0 pointer-events-none z-10"
              >
                <div
                  className="h-full w-24"
                  style={{
                    transform: 'skewX(-8deg)',
                    background:
                      'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)',
                  }}
                />
              </motion.div>

              {/* Contenido del placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-400">
                <ImageIcon size={40} strokeWidth={1.3} />
                <span className="text-sm font-medium">Foto / Video {n}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">

        {/* ── 1. HERO ── */}
        <section
          className="relative py-16 sm:py-24 lg:py-44 flex items-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #141f78 0%, #1a2890 60%, #57b5e0 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-4 sm:mb-5"
            >
              <span className="inline-block rounded-full bg-white/15 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5">
                SOBRE NOSOTROS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto"
            >
              El Equipo Detrás de{' '}
              <span style={{ color: '#57b5e0' }}>Neurona Comercial</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              className="text-white/80 text-sm sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Somos una consultora integrada por profesionales interdisciplinarios que operan de
              forma remota desde distintos puntos de Argentina, aportando una visión federal y
              diversa a cada proyecto.
            </motion.p>
          </div>

          {/* Decorative blobs */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
            style={{ background: '#57b5e0' }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-10"
            style={{ background: '#57b5e0' }}
          />
        </section>

        {/* ── 2. NUESTRA HISTORIA ── */}
        <section className="py-12 sm:py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...PILL} className="text-center mb-4">
              <span className="inline-block rounded-full bg-[#57b5e0]/10 text-[#141f78] text-xs font-semibold tracking-wide uppercase px-4 py-1.5">
                NUESTRA HISTORIA
              </span>
            </motion.div>

            <motion.div {...HEADING} className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#141f78' }}>
                Nuestra Historia
              </h2>
              <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-[#57b5e0]" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
              {/* Columna izquierda — texto */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                className="space-y-4 sm:space-y-6"
              >
                <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                  En 2020, Juan Guzmán y Gerardo Márquez fundaron la empresa con el propósito de
                  transferir su experiencia corporativa en ingeniería industrial y derecho marcario al
                  tejido empresarial local. Ese espíritu colaborativo y orientado a resultados nos
                  impulsó a crecer de forma sostenida.
                </p>
                <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                  Hoy, Neurona Comercial es un equipo de aproximadamente veinte profesionales
                  especializados que combinan consultoría en procesos, TI, legales, administración y
                  growth marketing para resolver los desafíos estructurales y comerciales de las
                  organizaciones actuales.
                </p>
              </motion.div>

              {/* Columna derecha — slider de fotos */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
              >
                <HistorySlider />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 3. FUNDADORES ── */}
        <section className="py-20 lg:py-28 bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...PILL} className="text-center mb-4">
              <span className="inline-block rounded-full bg-[#57b5e0]/10 text-[#141f78] text-xs font-semibold tracking-wide uppercase px-4 py-1.5">
                FUNDADORES
              </span>
            </motion.div>

            <motion.div {...HEADING} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: '#141f78' }}>
                Quiénes nos fundaron
              </h2>
              <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-[#57b5e0]" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {FOUNDERS.map((founder, i) => (
                <motion.div
                  key={founder.initials}
                  initial={{ opacity: 0, y: 60, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.9, ease: EASE, delay: i * 0.15 }}
                  className="bg-white rounded-2xl p-8 flex flex-col items-center text-center border"
                  style={{ borderColor: '#57b5e0' }}
                >
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-5"
                    style={{ background: 'linear-gradient(135deg, #141f78 0%, #57b5e0 100%)' }}
                  >
                    {founder.initials}
                  </div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#141f78' }}>
                    {founder.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{founder.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. MAPA FEDERAL ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...PILL} className="text-center mb-4">
              <span className="inline-block rounded-full bg-[#57b5e0]/10 text-[#141f78] text-xs font-semibold tracking-wide uppercase px-4 py-1.5">
                PRESENCIA FEDERAL
              </span>
            </motion.div>

            <motion.div {...HEADING} className="text-center mb-4">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#141f78' }}>
                Presencia Federal
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                Nuestro equipo opera de forma remota desde distintos puntos de Argentina.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              className="flex justify-center mt-10"
            >
              <svg
                viewBox="0 0 294 560"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[220px] sm:max-w-xs"
                aria-label="Mapa de Argentina con presencia del equipo"
              >
                {/* Argentina outline — simplified polygon */}
                <path
                  d="M 112,4 L 196,4 L 280,4
                     L 238,170 L 238,204 L 245,225
                     L 224,272 L 147,323 L 112,357
                     L 105,408 L 63,476 L 70,510
                     L 63,544 L 28,544 L 14,510
                     L 0,476 L 14,408 L 14,357
                     L 28,289 L 42,221 L 56,136
                     L 70,68 Z"
                  fill="#eef2ff"
                  stroke="#141f78"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />

                {/* Province dots with pulse animation */}
                {MAP_DOTS.map((dot) => (
                  <g key={dot.label}>
                    <circle cx={dot.cx} cy={dot.cy} r="5" fill="none" stroke="#57b5e0" strokeWidth="1.5">
                      <animate attributeName="r" values="5;22" dur="2.2s" begin={dot.begin} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;0" dur="2.2s" begin={dot.begin} repeatCount="indefinite" />
                    </circle>
                    <circle cx={dot.cx} cy={dot.cy} r="4.5" fill="#57b5e0" />
                  </g>
                ))}
              </svg>
            </motion.div>
          </div>
        </section>

        {/* ── 5. MISIÓN Y VISIÓN ── */}
        <section className="py-20 lg:py-28 bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...PILL} className="text-center mb-4">
              <span className="inline-block rounded-full bg-[#57b5e0]/10 text-[#141f78] text-xs font-semibold tracking-wide uppercase px-4 py-1.5">
                MISIÓN Y VISIÓN
              </span>
            </motion.div>

            <motion.div {...HEADING} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#141f78' }}>
                Lo que nos guía
              </h2>
              <div className="mt-0 mx-auto h-1 w-16 rounded-full bg-[#57b5e0]" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  Icon: Target,
                  title: 'Nuestra Misión',
                  text: 'Transferir experiencia corporativa de alto nivel al tejido empresarial argentino, generando impacto real y sostenido en procesos, tecnología, estructura legal y crecimiento comercial.',
                },
                {
                  Icon: Eye,
                  title: 'Nuestra Visión',
                  text: 'Ser la consultora de referencia en Argentina y Latinoamérica para organizaciones que buscan transformarse con rigor metodológico, talento interdisciplinario y vocación federal.',
                },
              ].map(({ Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 60, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.9, ease: EASE, delay: i * 0.15 }}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
                >
                  <div
                    className="w-14 h-14 rounded-full border-2 flex items-center justify-center mb-5"
                    style={{ borderColor: '#141f78' }}
                  >
                    <Icon size={26} strokeWidth={1.8} style={{ color: '#141f78' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#141f78' }}>
                    {title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. HITOS — reutiliza AwardsCarousel ── */}
        <div id="hitos">
          <AwardsCarousel />
        </div>

        {/* ── 7. GALERÍA DE EVENTOS ── */}
        <section className="py-20 lg:py-28 bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...PILL} className="text-center mb-4">
              <span className="inline-block rounded-full bg-[#57b5e0]/10 text-[#141f78] text-xs font-semibold tracking-wide uppercase px-4 py-1.5">
                GALERÍA
              </span>
            </motion.div>

            <motion.div {...HEADING} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#141f78' }}>
                Galería de Eventos
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                Momentos y experiencias que reflejan nuestro trabajo en acción.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            >
              <GalleryMarquee />
            </motion.div>
          </div>
        </section>

        {/* ── 8. EQUIPO DE FACILITADORES ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...PILL} className="text-center mb-4">
              <span className="inline-block rounded-full bg-[#57b5e0]/10 text-[#141f78] text-xs font-semibold tracking-wide uppercase px-4 py-1.5">
                EQUIPO
              </span>
            </motion.div>

            <motion.div {...HEADING} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#141f78' }}>
                Nuestro Equipo de Facilitadores
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                Profesionales especializados comprometidos con el crecimiento de tu organización.
              </p>
              <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-[#57b5e0]" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {FACILITATORS.map((member, i) => (
                <motion.div
                  key={member.initials}
                  initial={{ opacity: 0, y: 60, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.9, ease: EASE, delay: i * 0.12 }}
                  className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white text-lg font-bold mb-4"
                    style={{ background: 'linear-gradient(135deg, #141f78 0%, #57b5e0 100%)' }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="text-base font-bold mb-1" style={{ color: '#141f78' }}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. CTA FINAL ── */}
        <section
          className="py-24 lg:py-32"
          style={{ background: 'linear-gradient(135deg, #141f78 0%, #57b5e0 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              ¿Listo para transformar tu organización?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              className="text-white/80 text-lg mb-10 max-w-xl mx-auto"
            >
              Agendá una sesión con nuestro equipo y empezá a construir el camino hacia tus objetivos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            >
              <a
                href="https://wa.me/5493874224437?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20sesi%C3%B3n%20con%20Neurona%20Comercial."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-4 rounded-full bg-white font-bold text-base transition-all duration-200 hover:brightness-95 hover:scale-105"
                style={{ color: '#141f78' }}
              >
                Pedí tu sesión
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
