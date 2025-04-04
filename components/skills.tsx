"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 95 },
        { name: "AngularJS", level: 85 },
        { name: "Vue.js", level: 90 },
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "HTML5/CSS3", level: 98 },
      ],
    },
    {
      title: "CSS Frameworks",
      skills: [
        { name: "Tailwind CSS", level: 95 },
        { name: "Bootstrap", level: 90 },
        { name: "Sass/SCSS", level: 85 },
        { name: "Styled Components", level: 80 },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "AWS", level: 75 },
        { name: "Vercel", level: 85 },
        { name: "Webpack/Vite", level: 80 },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Responsive Design", level: 95 },
        { name: "Web Accessibility (WCAG)", level: 90 },
        { name: "SEO Optimization", level: 85 },
        { name: "Performance Optimization", level: 90 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="text-lg text-muted-foreground">
            I've developed expertise in a wide range of frontend technologies and tools, allowing me to create
            exceptional web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/10 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 font-heading">{category.title}</h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

