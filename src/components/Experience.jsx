import Section from './Section'

const experiences = [
  {
    role: 'Senior Product Manager, AI',
    company: 'TechNova',
    period: '2022 — Present',
    bullets: [
      'Led roadmap for LLM-powered support automation; reduced median handle time by 42%',
      'Launched retrieval-augmented chat assistant used by 50k MAU; NPS +18',
      'Drove model evaluation framework and win-rate tracking across releases',
    ],
  },
  {
    role: 'Product Manager',
    company: 'CloudScale',
    period: '2019 — 2022',
    bullets: [
      'Shipped anomaly detection for billing; prevented $3.2M annual leakage',
      'Scaled experimentation platform; weekly experiments ↑ 3x',
      'Built cross-functional rituals aligning design, data, and eng',
    ],
  },
]

export default function Experience() {
  return (
    <Section id="experience" className="bg-[#0b0c10] text-white">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
        <p className="mt-2 text-white/70">Highlights from recent roles</p>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-lg font-semibold">{exp.role} • {exp.company}</div>
              <div className="text-sm text-white/60">{exp.period}</div>
            </div>
            <ul className="mt-4 space-y-2 text-white/70 list-disc pl-5">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
