'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { valuePropositionContent } from '@/app/data/home-content'

function SectionDivider() {
  return (
    <div className="flex items-center gap-4 py-2">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#141f78]/15" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#57b5e0]" />
      <div className="w-1 h-1 rounded-full bg-[#141f78]/30" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#57b5e0]" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#141f78]/15" />
    </div>
  )
}

export default function ValueProposition() {
  return (
    <section className="relative bg-white overflow-hidden" id="nosotros">
      <SectionDivider />

      {/* Intro: two-column impact block */}
      <div className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: headline + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#57b5e0] mb-5">
              Nuestra filosofía
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] text-[#141f78] mb-6">
              No resolvemos{' '}
              <span className="relative inline-block text-[#57b5e0]">
                síntomas
                <span
                  className="absolute left-0 -bottom-1 w-full h-0.5 rounded-full"
                  style={{ background: '#57b5e0' }}
                />
              </span>
              ,<br />
              solucionamos{' '}
              <span className="relative whitespace-nowrap">
                de raíz
                <span
                  className="absolute left-0 -bottom-1 w-full h-[3px] rounded-full"
                  style={{ background: 'linear-gradient(90deg,#141f78,#57b5e0)' }}
                />
              </span>
            </h2>

            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg">
              Con un enfoque integral que combina{' '}
              <strong className="font-semibold text-gray-700">estrategia</strong>,{' '}
              <strong className="font-semibold text-gray-700">tecnología</strong> y{' '}
              <strong className="font-semibold text-gray-700">ejecución</strong>.
            </p>

            <Link
              href="#contacto"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#141f78] text-white font-semibold text-base transition-all duration-300 shadow-md hover:shadow-xl hover:bg-[#57b5e0] hover:-translate-y-0.5 transform"
            >
              {valuePropositionContent.cta}
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
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative"
          >
            {/* Replace this div with <Image> once you have the asset */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #141f78 0%, #0d1552 60%, #080e30 100%)',
              }}
            >
              {/* Glow accents */}
              <div
                className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'rgba(87,181,224,0.12)' }}
              />
              <div
                className="absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'rgba(87,181,224,0.08)' }}
              />
              <span className="relative text-white/30 text-sm font-medium tracking-widest uppercase select-none">
                Tu imagen aquí
              </span>
            </div>

            {/* Decorative offset border */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-[#57b5e0]/25 -z-10"
            />

            {/* Corner accent dot */}
            <div
              className="absolute -top-3 -left-3 w-6 h-6 rounded-full border-2 border-[#57b5e0]"
              style={{ background: 'white' }}
            />
          </motion.div>
        </div>
      </div>

      <SectionDivider />

      {/* Service cards */}
      <div className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuePropositionContent.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-5">{card.icon}</div>
              <h3 className="font-bold text-sm tracking-wider mb-2" style={{ color: '#141f78' }}>
                {card.title}
              </h3>
              <p className="font-semibold mb-3" style={{ color: '#57b5e0' }}>
                {card.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <SectionDivider />
    </section>
  )
}
