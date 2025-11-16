import Section from './Section'

export default function About() {
  return (
    <Section id="about" className="bg-[#0b0c10] text-white">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">About</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            I am an AI-focused Product Manager with a track record of shipping ML features from 0→1 and 1→n. My approach combines rigorous problem framing, lean experimentation, and deep collaboration with data science and engineering.
          </p>
          <ul className="mt-6 space-y-3 text-white/70">
            <li>• End-to-end ownership across discovery, definition, delivery, and adoption</li>
            <li>• Strong background in experimentation, metrics, and responsible AI</li>
            <li>• Comfortable with prompt design, LLM evals, and data pipelines</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Stat label="Years in Product" value="7+" />
          <Stat label="AI launches" value="12" />
          <Stat label="Team size led" value="15+" />
          <Stat label="Experiments" value="200+" />
        </div>
      </div>
    </Section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="text-2xl font-semibold text-indigo-300">{value}</div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  )
}
