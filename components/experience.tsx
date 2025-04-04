"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "THNCC",
      position: "Senior Frontend Developer",
      period: "2024 - Present",
      location: "Remote",
      description: [
        "Optimized API request handling, cutting response times by 60% and reducing server load by 40%",
        "Implemented gamification features that increased user engagement by 35% and daily active users by 25%",
        "Led migration to Next.js, improving Core Web Vitals scores by 45% across all metrics",
        "Established component library reducing development time by 30% for new features",
        "Mentored 4 junior developers, leading to 90% team productivity improvement",
      ],
    },
    {
      company: "Techworkstations",
      position: "Frontend Developer",
      period: "2023 - 2024",
      location: "Lagos, Nigeria",
      description: [
        "Accelerated page load speeds by 40% through lazy loading and image optimization",
        "Reduced bounce rates by 25% through improved UI/UX implementations",
        "Built reusable components that decreased development time by 35%",
        "Improved mobile conversion rates by 28% through responsive design optimization",
        "Achieved 95% accessibility compliance score across all web applications",
      ],
    },
    {
      company: "Cloudspace Technologies",
      position: "UI Developer",
      period: "2023 - 2024",
      location: "Lagos, Nigeria",
      description: [
        "Developed 20+ reusable components, reducing code duplication by 45%",
        "Improved application performance by 30% through code optimization",
        "Reduced CSS bundle size by 50% through implementation of Tailwind CSS",
        "Increased mobile user engagement by 40% through responsive design improvements",
        "Achieved 98% client satisfaction rate across 15 major projects",
      ],
    },
    {
      company: "Alive",
      position: "Junior Frontend Developer",
      period: "2021 - 2022",
      location: "Lagos, Nigeria",
      description: [
        "Contributed to 25% reduction in page load times through code optimization",
        "Implemented animations that increased user engagement by 20%",
        "Fixed 40+ UI bugs, reducing customer support tickets by 30%",
        "Achieved 85% test coverage across component library",
        "Improved mobile responsiveness leading to 15% increase in mobile users",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="text-lg text-muted-foreground">
            My professional journey spans various roles in frontend development,
            from junior positions to senior roles with leadership
            responsibilities.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3 p-6 bg-secondary/30">
                      <h3 className="text-xl font-bold mb-2 font-heading">
                        {exp.company}
                      </h3>
                      <Badge className="mb-4">{exp.position}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
