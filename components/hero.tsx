"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create stars
    if (heroRef.current) {
      const heroElement = heroRef.current
      const starCount = 50

      // Clear any existing stars
      const existingStars = heroElement.querySelectorAll(".star")
      existingStars.forEach((star) => star.remove())

      // Add new stars
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div")
        star.className = "star"
        star.style.left = `${Math.random() * 100}%`
        star.style.top = `${Math.random() * 100}%`
        star.style.animationDelay = `${Math.random() * 4}s`
        heroElement.appendChild(star)
      }

      // Add rocket
      const rocket = document.createElement("div")
      rocket.className = "rocket"
      rocket.innerHTML = `
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L8 7H16L12 2Z" fill="#f97316" />
          <path d="M8 7V16H16V7H8Z" fill="#f97316" />
          <path d="M9 16L8 22L12 20L16 22L15 16H9Z" fill="#f97316" />
        </svg>
      `
      heroElement.appendChild(rocket)

      // Add shooting stars
      for (let i = 0; i < 3; i++) {
        const shootingStar = document.createElement("div")
        shootingStar.className = "shooting-star"
        shootingStar.style.left = `${Math.random() * 100}%`
        shootingStar.style.top = `${Math.random() * 100}%`
        shootingStar.style.animationDelay = `${Math.random() * 8}s`
        heroElement.appendChild(shootingStar)
      }
    }
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative space-bg overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              <span className="block">Hi, I'm</span>
              <span className="text-primary block">Ikeoha Chiedozie</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-muted-foreground">
              Frontend Developer with 5+ years of experience crafting engaging web experiences
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              I build responsive, user-focused web applications with modern technologies like React, Angular, and
              Vue.js, ensuring accessibility and optimal performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <div className="relative bg-secondary/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 h-full w-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-4xl font-bold text-white">
                    IC
                  </div>
                  <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
                  <p className="text-muted-foreground">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

