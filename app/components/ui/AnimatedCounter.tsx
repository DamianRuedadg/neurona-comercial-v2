'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
}

export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 3,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    let frame = 0
    const totalFrames = Math.round(duration * 60)

    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      // ease-out cubic: fast start, slow finish
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (frame >= totalFrames) {
        setCount(value)
        clearInterval(timer)
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString('es-AR')}
      {suffix}
    </span>
  )
}
