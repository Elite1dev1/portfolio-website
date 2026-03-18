"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { projects as projectsData, Project } from "@/lib/projects";
import Link from "next/link";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  try {
    return (
      <Link href={`/projects/${project.id}`} className="group cursor-pointer">
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            placeholder="blur"
            quality={75}
            priority={index < 3}
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJR8lLzYvLS0yKy42PjM/OTo0Mi85TFJPUVJBRk1eX2FfTklPUV1JS0n/2wBDAQoLCw0NDhEODhFLEQ8RTUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAABAwIHAQAAAAAAAAAAAAABAAIDBAUhBhITMVFxkf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAGREBAQADAQAAAAAAAAAAAAAAAQIAESED/9oADAMBAAIRAxEAPwCgxhujLgKVzWuikzbSnZ3vv7pSlKorRuIXOed0uuyGyc0pwKxy+BERCx//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <div className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm w-full text-center flex items-center justify-center gap-2">
              View Case Study
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="flex gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={`${project.title}-tag-${tagIndex}`}
              className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400">{project.description}</p>
      </Link>
    );
  } catch (error) {
    console.error(`Error rendering project card: ${project.title}`, error);
    return (
      <Card className="h-full p-6 bg-destructive/10">
        <p>Error loading project</p>
      </Card>
    );
  }
};

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of project data
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const projects = useMemo(() => projectsData, []); // Use data from lib/projects.ts

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((n) => (
          <Card key={n} className="h-[400px] animate-pulse bg-secondary/30" />
        ))}
      </div>
    );
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">Selected Projects</h2>
            <p className="text-slate-500 dark:text-slate-400">A collection of engineering-heavy web applications.</p>
          </div>
          <a className="text-primary font-semibold flex items-center gap-1 group" href="#projects">
            Explore all work
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={`project-${project.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
