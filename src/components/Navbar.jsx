import { Menu, Sparkles, Github } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white/90 hover:text-white">
          <Sparkles className="w-5 h-5 text-indigo-400" />
          <span className="font-semibold tracking-tight">AI PM Portfolio</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#cases" className="hover:text-white">Case Studies</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15 text-white">
            <Github className="w-4 h-4" /> Github
          </a>
        </nav>
        <button className="sm:hidden text-white/80">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}
