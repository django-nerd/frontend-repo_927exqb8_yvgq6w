import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <CaseStudies />
      <Contact />
      <footer className="bg-[#0b0c10] border-t border-white/10 py-10 text-center text-white/50">
        © {new Date().getFullYear()} AI Product Manager — All rights reserved.
      </footer>
    </div>
  )
}

export default App
