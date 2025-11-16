import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Section({ id, className = '', children, delay = 0 }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ hidden: fadeIn.hidden, show: { ...fadeIn.show, transition: { ...fadeIn.show.transition, delay } } }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
