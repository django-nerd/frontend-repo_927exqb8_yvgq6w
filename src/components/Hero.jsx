import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] pt-24 overflow-hidden bg-[#0b0c10]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-indigo-200/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              AI Product Manager • Portfolio
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Building AI products that ship, scale, and delight
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Strategy, execution, and storytelling for ML-powered experiences. I align research, design, and engineering to deliver measurable outcomes.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#cases" className="px-5 py-2.5 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white font-medium shadow-lg shadow-indigo-500/30">
                View Case Studies
              </a>
              <a href="#contact" className="px-5 py-2.5 rounded-md bg-white/10 hover:bg-white/15 text-white font-medium">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent" />
    </section>
  )
}
