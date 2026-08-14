import { motion } from 'framer-motion'

const interests = [
  'Philosophy',
  'History & Political Literature',
  'Poetry & Literary Writing',
  'Geopolitics & World Affairs',
  'Cricket',
  'Volleyball',
  'Football',
]

const activities = [
  'Member of ELA',
  "Core writer, Writers' Community — VIT Bhopal",
  'Advitya Volleyball Team',
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Speaking() {
  return (
    <section id="interests" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Beyond code</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          INTERESTS
        </motion.h2>

        <div className="flex flex-wrap gap-3 mb-16">
          {interests.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="px-4 py-2 text-sm text-gray-300 border border-gray-800 rounded-full"
            >
              {item}
            </motion.span>
          ))}
        </div>

        <motion.div {...fadeInUp}>
          <p className="text-sm text-gray-500 tracking-widest uppercase mb-6">Activities</p>
          <div className="space-y-0 max-w-3xl">
            {activities.map((activity) => (
              <div key={activity} className="border-t border-gray-800 py-5">
                <span className="text-lg text-gray-300 font-light">{activity}</span>
              </div>
            ))}
            <div className="border-t border-gray-800" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
