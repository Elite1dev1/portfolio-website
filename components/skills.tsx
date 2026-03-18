"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    { name: "Next.js", description: "SSR, SSG & API Routes" },
    { name: "Node.js", description: "Backend & Serverless" },
    { name: "TypeScript", description: "Type-safe Architecture" },
    { name: "PostgreSQL/MongoDB", description: "Database Management" },
    { name: "React", description: "Hooks & Performance" },
    { name: "Tailwind CSS", description: "Design Systems" },
    { name: "RESTful APIs", description: "Scalable Communication" },
    { name: "Cloud & DevOps", description: "AWS & Vercel Deployment" },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Technical Prowess</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center group hover:border-primary/50 transition-all"
            >
              <div className="bg-primary/10 text-primary p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <h4 className="font-bold text-sm md:text-base">{skill.name}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

