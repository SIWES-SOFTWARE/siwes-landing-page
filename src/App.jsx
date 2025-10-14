// App.jsx
"use client"
import { useRef, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import DirectorsMessage from "./components/DirectorsMessage"
import WhoWeServe from "./components/WhoWeServe"
import Instructions from "./components/Instructions"
import QuickActions from "./components/QuickActions"
import Benefits from "./components/Benefits"
import Partners from "./components/Partners"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  const sectionsRef = useRef([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  const scrollToSection = (sectionIndex) => {
    if (sectionsRef.current[sectionIndex]) {
      sectionsRef.current[sectionIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      setIsMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    scrollToSection(0)
  }

  return (
    <div id="home" className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} ref={(el) => addToRefs(el)} />
      <DirectorsMessage ref={(el) => addToRefs(el)} />
      <WhoWeServe ref={(el) => addToRefs(el)} />
      <Instructions ref={(el) => addToRefs(el)} />
      {/* <QuickActions ref={(el) => addToRefs(el)} /> */}
      <Benefits ref={(el) => addToRefs(el)} />
      <Partners ref={(el) => addToRefs(el)} />
      <Contact ref={(el) => addToRefs(el)} />
      <Footer ref={(el) => addToRefs(el)} />
      <ScrollToTop scrollToTop={scrollToTop} />
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default App