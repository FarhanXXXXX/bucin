// components/HeartParticles.tsx
'use client'

import { useEffect, useRef } from 'react'

export default function HeartParticles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const heartCount = 20

    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('div')
      heart.className = 'heart'
      heart.style.left = `${Math.random() * 100}%`
      heart.style.top = `${Math.random() * 100}%`
      heart.style.animationDuration = `${Math.random() * 3 + 2}s`
      heart.style.opacity = `${Math.random() * 0.5 + 0.5}`
      heart.innerHTML = '❤️'

      container.appendChild(heart)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ zIndex: 9999 }}
    />
  )
}