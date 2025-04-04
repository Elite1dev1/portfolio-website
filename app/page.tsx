import { Suspense } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Loading from "@/components/loading"
import CursorTrail from "@/components/cursor-trail"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <CursorTrail />
      <Suspense fallback={<Loading />}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  )
}

