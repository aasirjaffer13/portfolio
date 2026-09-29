import { motion } from 'framer-motion'

const skills = [
  'Python',
  'Java',
  'Machine Learning',
  'Deep Learning',
  'Natural Language Processing',
  'TensorFlow',
  'scikit-learn',
  'Pandas & NumPy',
  'Data Structures & Algorithms',
  'Git & Version Control',
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Expertise</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20"
        >
          SKILLS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 lg:gap-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="border-b border-gray-800 pb-4 group"
            >
              <span className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light transition-all duration-300 ease-out group-hover:text-white group-hover:translate-x-1.5 inline-block">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp} className="mt-16">
          <p className="text-sm text-gray-500 tracking-widest uppercase mb-3">Languages</p>
          <p className="text-lg text-gray-300 font-light">English · Kashmiri · Urdu</p>
        </motion.div>
      </div>
    </section>
  )
}
