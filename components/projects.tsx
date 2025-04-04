"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  try {
    return (
      <Card className="h-full overflow-hidden border-primary/10 bg-secondary/30 backdrop-blur-sm hover:bg-secondary/50 transition-all hover:shadow-lg">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
              placeholder="blur"
              quality={75}
              priority={index < 3} // Load first 3 images immediately
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJR8lLzYvLS0yKy42PjM/OTo0Mi85TFJPUVJBRk1eX2FfTklPUV1JS0n/2wBDAQoLCw0NDhEODhFLEQ8RTUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAABAwIHAQAAAAAAAAAAAAABAAIDBAUhBhITMVFxkf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAGREBAQADAQAAAAAAAAAAAAAAAQIAESED/9oADAMBAAIRAxEAPwCgxhujLgKVzWuikzbSnZ3vv7pSlKorRuIXOed0uuyGyc0pwKxy+BERCx//2Q=="
            />
          </div>
        </a>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 font-heading">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <Badge
                key={`${project.title}-tag-${tagIndex}`} // Changed key to be unique
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
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

  const projects = useMemo(
    () => [
      {
        title: "Thincc Learning Platform",
        description:
          "Accessible learning platform with gamified elements and progress tracking",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60", // Updated image URL
        tags: [
          "React",
          "Typescript",
          "Node.js",
          "MongoDB",
          "Git",
          "Tailwind CSS",
        ],
        liveUrl: "https://thinc-frontend-pyu7ipeqk-joinlearn.vercel.app/",
        githubUrl: "https://github.com/thinccc/thinc_frontend",
      },
      {
        title: "Linked IN",
        description:
          "Online Job marketplace, edit profile- add experience, education, skills. Get noticed by recruiters and connect with them.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60",
        tags: ["Vue.js", "Express", "MongoDB", "REST API"],
        liveUrl: "https://linkedin-clone-nvds.onrender.com/",
        githubUrl: "https://github.com/Elite1dev1/Linkedin-clone",
      },
      {
        title: "Bambby",
        description:
          "Website for a mobile dating app (Bammby) that connects people with similiar interests. With an interactive UI and even more striking Algorithm, to help make users experience feel more nautral and real.",
        image:
          "https://plus.unsplash.com/premium_photo-1682309691851-b59943f822f2?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Angular", "Firebase", "TypeScript", "Bootstrap"],
        liveUrl: "https://bammby.com/",
        githubUrl: "https://github.com/Elite1dev1/project3",
      },
      {
        title: "Portfolio Website",
        description:
          "A modern, responsive portfolio website showcasing projects and skills with interactive elements.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
        liveUrl: "https://example.com/project4",
        githubUrl: "https://github.com/Elite1dev1/project4",
      },
      {
        title: "Threads",
        description:
          "Full stack social media app, to share idea, meet new people and make conversations in real-time.",
        image:
          "https://images.unsplash.com/photo-1726066012751-2adfb5485977?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Chakra UI", "TypeScript", "Firebase", "Styled Components"],
        liveUrl: "https://threads-clone-weqm.onrender.com",
        githubUrl: "https://github.com/Elite1dev1/threads-clone/tree/master",
      },
      {
        title: "Financial Analytics Dashboard",
        description:
          "An analytics dashboard for crafted to capture users financial dat, savings, spending and investments.",
        image:
          "https://images.unsplash.com/photo-1726066012751-2adfb5485977?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Rest API", "Tailwind", "Typescript", "Javascript"],
        liveUrl: "https://fintech-dashboard-r1v4.onrender.com/",
        githubUrl: "https://github.com/Elite1dev1/fintech-dashboar",
      },
    ],
    []
  ); // Memoize projects array

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
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Here are some of my recent projects that showcase my skills and
            expertise in frontend development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={`project-${project.title}-${index}`} // Changed key to be unique
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
