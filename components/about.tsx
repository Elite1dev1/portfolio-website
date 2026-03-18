"use client"

import { motion } from "framer-motion"

export default function About() {

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-muted-foreground">
            With over five years of experience in full-stack development, I specialize in creating responsive,
            user-focused web applications that deliver exceptional experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 font-heading">My Journey</h3>
            <p className="mb-4">
              As a full-stack developer with over five years of experience across freelance, full-time, and contract
              roles, I have honed my expertise in creating responsive, user-focused web applications.
            </p>
            <p className="mb-4">
              At THNCC, where I currently work remotely, I've adhered to accessibility standards (WCAG) to ensure
              inclusive learning platforms and implemented gamified elements such as badges and progress bars to enhance
              student engagement.
            </p>
            <p>
              My collaboration with product managers and other developers has allowed me to align application designs
              with technical and educational goals, while my experience hosting websites on AWS and Vercel has
              strengthened my deployment capabilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 font-heading">My Approach</h3>
            <p className="mb-4">
              I believe in creating web experiences that are not only visually appealing but also accessible,
              performant, and user-friendly. My approach combines technical expertise with creative problem-solving to
              deliver solutions that exceed expectations.
            </p>
            <p className="mb-4">
              By employing techniques such as lazy loading and image compression, I minimize page load times, improving
              performance and reducing bounce rates. I also integrate APIs seamlessly with backend teams and ensure
              SEO-friendly, accessible structures to enhance usability across devices.
            </p>
            <p>
              My work at Cloudspace Technologies and Alive further solidified my skills, where I developed modular,
              reusable components, optimized responsive UIs, and added interactive features like animations and
              collaborative tools to elevate the user experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

