"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, FileText } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/ikeoha-chiedozie-58baa8234/",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/Elite1dev1",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/heisthattallguy",
    },
    {
      name: "CV",
      icon: <FileText className="h-5 w-5" />,
      url: "https://drive.google.com/file/d/1ZigNxPteRPNw3UpSCFMeeueYn-IQhqKk/view?usp=sharing", // google drive link to download cv
    },
  ]

  return (
    <footer className="bg-secondary/30 backdrop-blur-sm border-t border-primary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold font-heading">
              Ikeoha Chiedozie
            </Link>
            <p className="text-muted-foreground mt-2">Frontend Developer based in Lagos, Nigeria</p>
          </div>

          <div className="flex space-x-3">
            {socialLinks.map((link, index) => (
              <Button key={index} variant="outline" size="icon" asChild className="rounded-full">
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="border-t border-primary/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Ikeoha Chiedozie. All rights reserved.
          </p>

          <nav className="flex flex-wrap gap-6">
            <Link href="#home" className="text-sm hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

