"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  opacity: number
  life: number
  maxLife: number
}

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsActive(true)

      // Add new particle
      const newParticle: Particle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 3 + 1,
        color: getRandomColor(),
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 30 + 20,
      }

      setParticles((prev) => [...prev, newParticle])
    }

    const getRandomColor = () => {
      const colors = [
        "rgba(255, 255, 255, 0.8)",
        "rgba(135, 206, 250, 0.8)",
        "rgba(173, 216, 230, 0.8)",
        "rgba(176, 224, 230, 0.8)",
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animationId = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            life: particle.life + 1,
            opacity: 1 - particle.life / particle.maxLife,
          }))
          .filter((particle) => particle.life < particle.maxLife),
      )
    }, 16)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(animationId)
    }
  }, [])

  if (!isActive) return null

  return (
    <div className="cursor-trail">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="cursor-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  )
}

