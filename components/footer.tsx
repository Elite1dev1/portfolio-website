"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, FileText } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Elite1dev1",
    },
    {
      name: "Twitter",
      url: "https://x.com/heisthattallguy",
    },
    {
      name: "LinkedIn",
      url: "https://www.https://www.linkedin.com/in/ikeoha-chiedozie-58baa8234//in/ikeoha-chiedozie-58baa8234/",
    },
  ]

  return (
    <footer className="w-full border-t border-white/5 py-12">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-1.5 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <span className="font-bold tracking-tight">Ikeoha Chiedozie</span>
          </div>
          <p className="text-slate-500 text-sm">© 2024 Ikeoha.dev. Handcrafted with passion and pixels.</p>
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                className="text-slate-500 hover:text-primary transition-colors text-sm"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

