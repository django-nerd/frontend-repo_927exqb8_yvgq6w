import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" className="bg-[#0b0c10] text-white">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <h2 className="text-3xl sm:text-4xl font-bold">Let’s collaborate</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Open to consulting, full-time roles, and speaking about building responsible, user-centered AI products. Send a note and I’ll get back soon.</p>
        <form className="mt-6 grid sm:grid-cols-3 gap-3">
          <input placeholder="Your name" className="col-span-1 rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input placeholder="Email" className="col-span-1 rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <button type="button" className="col-span-1 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white font-medium px-4 py-2">Send</button>
        </form>
      </div>
    </Section>
  )
}
