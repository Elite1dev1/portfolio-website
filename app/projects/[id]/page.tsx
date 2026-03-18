"use client";

import { projects } from "@/lib/projects";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, Code, Cpu, Globe, Rocket, Terminal, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ProjectCaseStudy() {
  const { id } = useParams();
  const router = useRouter();

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => router.push("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const { caseStudy } = project;

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center pt-32">
          <div className="text-center max-w-2xl px-6">
            <h1 className="text-4xl md:text-6xl font-black mb-6">{project.title}</h1>
            <p className="text-xl text-slate-500 mb-8">{project.description}</p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </Button>
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Github Repo</a>
              </Button>
            </div>
            <div className="mt-12">
              <Button variant="ghost" onClick={() => router.push("/")}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-6 md:px-10 max-w-5xl">
          
          {/* Hero Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-16 rounded-3xl overflow-hidden border border-white/5 h-[400px] md:h-[520px]"
          >
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/30">
                Case Study
              </span>
              <h1 className="text-white text-4xl md:text-7xl font-black leading-tight tracking-tight">
                {project.title}
              </h1>
            </div>
          </motion.section>

          {/* Intro & Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div className="md:col-span-2">
              <p className="text-slate-900 dark:text-white text-2xl font-semibold leading-snug mb-6">
                {caseStudy.summary}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="flex gap-4">
                <Button asChild className="rounded-xl px-6 bg-primary text-white hover:shadow-lg hover:shadow-primary/20 transition-all">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    View Live Site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-xl px-6 glass border-white/10 hover:bg-white/5 transition-all">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    View Source Code
                    <Globe className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="space-y-6 border-l border-slate-200 dark:border-slate-800 pl-8">
              <div>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">Timeline</p>
                <p className="font-medium">{caseStudy.timeline}</p>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">Role</p>
                <p className="font-medium">{caseStudy.role}</p>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">Stack</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* The Challenge */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              
              <h2 className="text-3xl font-bold tracking-tight">The Challenge</h2>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-8">
                {caseStudy.challenge.description}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.challenge.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <div className="mt-1 bg-red-500/10 p-0.5 rounded">
                      <XIcon className="h-4 w-4 text-red-500" />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* The Solution */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              
              <h2 className="text-3xl font-bold tracking-tight">The Solution</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-8">
                  {caseStudy.solution.description}
                </p>
                <div className="space-y-6">
                  {caseStudy.solution.features.map((feature, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <FeatureIcon name={feature.icon} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{feature.title}</h4>
                        <p className="text-slate-500 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 aspect-video relative">
                <Image 
                  src={caseStudy.solution.imageUrl || project.image} 
                  alt="Technical Implementation" 
                  fill 
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/60 backdrop-blur px-4 py-2 rounded-lg border border-primary/30">
                    <code className="text-primary text-xs">Technical Implementation Details</code>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Outcomes */}
          <section className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <Check className="text-emerald-500 h-8 w-8" />
              <h2 className="text-3xl font-bold tracking-tight">Key Outcomes</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.outcomes.map((outcome, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center group hover:border-primary/30 transition-colors">
                  <p className="text-primary text-4xl font-black mb-2">{outcome.value}</p>
                  <p className="font-bold text-sm uppercase tracking-wider mb-1">{outcome.label}</p>
                  <p className="text-slate-500 text-xs">{outcome.sublabel}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Navigation */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <Link href={`/projects/${nextProject.id}`} className="group text-center md:text-left">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Next Project</p>
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                {nextProject.title}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </h3>
            </Link>
            <Button asChild variant="outline" size="lg" className="rounded-xl px-8">
              <Link href="/#projects">Back to Portfolio</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function FeatureIcon({ name }: { name: string }) {
  switch (name) {
    case "code": return <Code className="h-5 w-5" />;
    case "api": return <Globe className="h-5 w-5" />;
    case "notifications": return <Terminal className="h-5 w-5" />;
    case "person": return <Terminal className="h-5 w-5" />;
    default: return <Terminal className="h-5 w-5" />;
  }
}
