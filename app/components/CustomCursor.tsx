"use client"

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const currentPosition = useRef({ x: 0, y: 0 })
  const targetPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    let animationFrame = 0

    const animate = () => {
      const easing = 0.18
      const current = currentPosition.current
      const target = targetPosition.current

      current.x += (target.x - current.x) * easing
      current.y += (target.y - current.y) * easing

      setPosition({ x: current.x, y: current.y })
      animationFrame = window.requestAnimationFrame(animate)
    }

    animationFrame = window.requestAnimationFrame(animate)

    const handleMove = (event: MouseEvent) => {
      targetPosition.current = { x: event.clientX, y: event.clientY }
      setIsVisible(true)
    }

    const handleLeave = () => setIsVisible(false)
    const handleDown = () => setIsPressed(true)
    const handleUp = () => setIsPressed(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)
    window.addEventListener('mouseenter', () => setIsVisible(true))
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
      window.removeEventListener('mouseenter', () => setIsVisible(true))
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <div
        className="absolute rounded-full bg-[#57b5e0]/12 blur-sm"
        style={{
          width: 54,
          height: 54,
          left: 0,
          top: 0,
          opacity: isVisible ? 1 : 0,
          transform: `translate3d(${position.x - 27}px, ${position.y - 27}px, 0) scale(${isPressed ? 0.9 : 1})`,
          willChange: 'transform',
        }}
      />
      <div
        className="absolute rounded-full border border-[#57b5e0]/50 bg-[#57b5e0]/5"
        style={{
          width: 38,
          height: 38,
          left: 0,
          top: 0,
          opacity: isVisible ? 1 : 0,
          transform: `translate3d(${position.x - 19}px, ${position.y - 19}px, 0) scale(${isPressed ? 0.82 : 1})`,
          willChange: 'transform',
        }}
      />
      <div
        className="absolute rounded-full bg-[#57b5e0]"
        style={{
          width: 10,
          height: 10,
          left: 0,
          top: 0,
          opacity: isVisible ? 1 : 0,
          transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0) scale(${isPressed ? 1.25 : 1})`,
          boxShadow: '0 0 18px rgba(87, 181, 224, 0.65)',
          willChange: 'transform',
        }}
      />
    </div>
  )
}
