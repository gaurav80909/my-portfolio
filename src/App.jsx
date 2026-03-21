import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import ThreeBackground from "./components/ThreeBackground"
import StarCursor from "./components/StarCursor"
import Certifications from "./components/Certifications"
import StatsBar from "./components/StatsBar"
import SocialPanel from "./components/SocialPanel"

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* GLOBAL BACKGROUND */}
      <ThreeBackground />

      {/* STAR CURSOR – WORKS EVERYWHERE */}
      <StarCursor />

      {/* CONTENT */}
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <SocialPanel />
        
        <Skills />
        <Projects />
        <Certifications />
<StatsBar />
<About />
        <Contact />
      </main>
    </div>
  )
}
