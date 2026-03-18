"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Background gradient blur */}
          <div className="absolute left-[-10%] bottom-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-black mb-6">Ready to build something amazing?</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Currently accepting new projects and collaboration opportunities. Let's discuss how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:ikeohachiedozie2020@gmail.com">
                <Button 
                  size="lg"
                  className="bg-primary text-white hover:brightness-110 transition-all w-full sm:w-auto"
                >
                  Email Me
                </Button>
              </a>
              <a href="https://https://www.linkedin.com/in/ikeoha-chiedozie-58baa8234/" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border border-white/10 text-white hover:bg-white/10 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
