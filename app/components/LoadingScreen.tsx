'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const DURATION_MS = 2500
const FADE_MS = 500

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => setVisible(false), DURATION_MS)
    return () => clearTimeout(timer)
  }, [])

  const onExitComplete = () => {
    document.body.style.overflow = ''
  }

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_MS / 1000, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#0d1554',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Logo — reemplazá src por /Neurona_Comercial_Capacitaciones.png cuando subas el archivo */}
          <Image
            src="/Logo_Neurona.png"
            alt="Neurona Comercial"
            width={320}
            height={120}
            priority
            style={{
              width: 'clamp(200px, 55vw, 320px)',
              height: 'auto',
              objectFit: 'contain',
            }}
          />

          {/* Barra de progreso */}
          <div
            style={{
              marginTop: -20,
              width: 'clamp(180px, 55vw, 240px)',
              height: 5,
              borderRadius: 9999,
              background: 'rgba(255,255,255,0.15)',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: DURATION_MS / 1000, ease: 'easeInOut' }}
              style={{
                height: '100%',
                borderRadius: 9999,
                background: '#57b5e0',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
