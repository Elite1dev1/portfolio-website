"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-32 overflow-hidden"
    >
      {/* Background Gradient Elements */}
      <div className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute left-[-5%] bottom-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-gradient rounded-3xl p-8 md:p-16 border border-white/5"
          >
            {/* Status Badge with Ping */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-6"
            >
              Crafting High-Performance{" "}
              <span className="text-primary">Web Experiences</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-8"
            >
              Senior Full-stack Developer specializing in building scalable, accessible, and visually stunning digital
              products that drive user engagement.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button size="lg" className="bg-primary text-white hover:shadow-lg hover:shadow-primary/20">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="glass border-white/10">
                Let's Talk
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

