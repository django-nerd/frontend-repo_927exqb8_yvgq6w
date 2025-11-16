import Section from './Section'

const cases = [
  {
    title: 'RAG Assistant for Customer Support',
    metric: '42% faster resolutions',
    summary: 'Designed and shipped an LLM assistant with retrieval augmentation and guardrails. Improved agent productivity and CSAT.',
    tags: ['LLM', 'RAG', 'Guardrails', 'Observability'],
  },
  {
    title: 'AI Writing Coach for Docs',
    metric: '3x content creation speed',
    summary: 'Shipped in-editor suggestions with fine-tuned models and evals. Drove adoption through clear metrics and onboarding.',
    tags: ['GenAI', 'Evals', 'Activation'],
  },
  {
    title: 'Anomaly Detection for Billing',
    metric: '$3.2M saved annually',
    summary: 'Partnered with data science to deliver robust detection and alerting for billing anomalies with explainable thresholds.',
    tags: ['Time series', 'Detection', 'Explainability'],
  },
]

export default function CaseStudies() {
  return (
    <Section id="cases" className="bg-[#0b0c10] text-white">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Case Studies</h2>
        <p className="mt-2 text-white/70">Selected projects with outcomes</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <article key={i} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
            <div className="text-sm text-indigo-300">{c.metric}</div>
            <h3 className="mt-2 text-xl font-semibold">{c.title}</h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">{c.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.tags.map((t, j) => (
                <span key={j} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
