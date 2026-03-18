"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "THNCC",
      position: "Senior Full-stack Developer",
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
      position: "Full-stack Developer",
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
      position: "Full-stack Developer",
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
      position: "Junior Full-stack Developer",
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
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12">Professional Journey</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-10 border-l border-primary/20"
              >
                {/* Timeline Dot */}
                <div className={`absolute w-4 h-4 rounded-full -left-[9px] top-1 ${
                  index === 0 
                    ? "bg-primary shadow-[0_0_10px_rgba(13,147,242,0.5)]" 
                    : "bg-slate-700"
                }`}></div>

                {/* Period Badge */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    index === 0
                      ? "bg-primary/10 text-primary"
                      : "bg-slate-800 text-slate-400"
                  }`}>
                    {exp.period}
                  </span>
                </div>

                {/* Company Name */}
                <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">
                  {exp.company}
                </p>

                {/* Description List */}
                <ul className="space-y-3 text-slate-500 dark:text-slate-400 list-disc list-outside ml-4">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
