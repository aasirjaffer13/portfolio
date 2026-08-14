import { motion } from 'framer-motion'

const items = [
  {
    school: 'VIT Bhopal University',
    degree: 'B.Tech — Computer Science & Engineering',
    period: '2025 — Present',
    detail:
      'Specialization in Artificial Intelligence & Machine Learning. Coursework in Data Structures & Algorithms, Machine Learning, Deep Learning and NLP, alongside electives in Philosophy of Technology, Ethics in AI, International Relations and Political Science. Active participant in student communities and academic projects.',
  },
  {
    school: 'Sigma School of Excellence, Kota',
    degree: 'Senior Secondary (Class XII — Science), CBSE',
    period: 'Rajasthan',
    detail: 'Science stream with focus on Physics, Chemistry and Mathematics.',
  },
  {
    school: 'Govt. Higher Secondary School Harie, Kupwara',
    degree: 'Secondary (Class X), JKBOSE',
    period: 'Jammu & Kashmir',
    detail: 'Completed secondary schooling in Kupwara, Jammu & Kashmir.',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        <div className="space-y-0">
          {items.map((item, index) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              <div className="lg:col-span-5">
                <h3 className="text-xl lg:text-2xl font-light text-white mb-2">{item.degree}</h3>
                <p className="text-base text-gray-400">{item.school}</p>
              </div>
              <div className="lg:col-span-2">
                <p className="text-sm text-gray-500 tracking-widest uppercase">{item.period}</p>
              </div>
              <div className="lg:col-span-5">
                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">{item.detail}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
