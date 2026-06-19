'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { testimonialsContent } from '@/app/data/home-content'

const FACE: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  borderRadius: '1rem',
  padding: '1.75rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginBottom: 12 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="white">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div
      style={{
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.18)',
        border: '2px solid rgba(255,255,255,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        flexShrink: 0,
      }}
    >
      <span style={{ color: 'white', fontWeight: 700, fontSize: 20, userSelect: 'none' }}>
        {initials}
      </span>
    </div>
  )
}

function CompanyBadge({ company }: { company: string }) {
  return (
    <div
      style={{
        marginTop: 'auto',
        paddingTop: 16,
        borderTop: '1px solid rgba(255,255,255,0.3)',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          padding: '8px 20px',
          borderRadius: 10,
          background: 'rgba(255,255,255,0.2)',
          border: '1px solid rgba(255,255,255,0.3)',
        }}
      >
        <span style={{ color: 'white', fontWeight: 700, fontSize: 13, letterSpacing: '0.03em' }}>
          {company}
        </span>
      </div>
    </div>
  )
}

interface Item {
  name: string
  role: string
  company: string
  initials: string
  text: string
}

function FlipCard({ item, delay }: { item: Item; delay: number }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay }}
      className="relative min-h-[420px]"
      style={{ perspective: '1000px' }}
      onHoverStart={() => setFlipped(true)}
      onHoverEnd={() => setFlipped(false)}
    >
      {/* Contenedor que gira — preserve-3d obligatorio */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative w-full min-h-[420px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* ── CARA FRONTAL — #141f78 ── */}
        <div
          style={{
            ...FACE,
            background: '#141f78',
            justifyContent: 'center',
            boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          }}
        >
          <Avatar initials={item.initials} />
          <p style={{ fontWeight: 700, color: 'white', fontSize: 16, marginBottom: 6 }}>
            {item.name}
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: 12,
              lineHeight: 1.5,
              whiteSpace: 'pre-line',
              marginBottom: 6,
            }}
          >
            {item.role}
          </p>
          <p style={{ fontWeight: 700, color: 'white', fontSize: 13 }}>{item.company}</p>
        </div>

        {/* ── CARA TRASERA — #57b5e0, pre-rotada 180° ── */}
        <div
          style={{
            ...FACE,
            background: '#57b5e0',
            transform: 'rotateY(180deg)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          }}
        >
          <p style={{ fontWeight: 700, color: 'white', fontSize: 15, marginBottom: 10 }}>
            {item.name}
          </p>
          <Stars />
          <span
            style={{
              fontSize: 64,
              lineHeight: 1,
              fontFamily: 'Georgia, serif',
              color: 'rgba(255,255,255,0.25)',
              userSelect: 'none',
            }}
            aria-hidden
          >
            &ldquo;
          </span>
          <p
            style={{
              color: 'white',
              fontSize: 13,
              lineHeight: 1.6,
              marginTop: 4,
              flex: 1,
            }}
          >
            {item.text}
          </p>
          <CompanyBadge company={item.company} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#141f78]">
            {testimonialsContent.title}
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-[#57b5e0]" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsContent.items.map((item, index) => (
            <FlipCard key={item.name} item={item} delay={index * 0.12} />
          ))}
        </div>

      </div>
    </section>
  )
}
