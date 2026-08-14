import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About Aasir</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.div {...fadeInUp} className="max-w-4xl mb-24 lg:mb-32">
          <p className="text-base lg:text-xl text-gray-300 leading-relaxed">
            I'm a curious and analytical Computer Science student specializing in Artificial
            Intelligence and Machine Learning, with a lasting interest in technology,
            international affairs, and lifelong learning. I like working at the intersection
            of science, philosophy, history, and politics.
          </p>
        </motion.div>

        <motion.div {...fadeInUp} className="mb-24 lg:mb-32">
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            "STRONG TECHNICAL<br />
            ABILITY SHOULD BE MET<br />
            WITH <span className="text-white underline underline-offset-8">CRITICAL THINKING</span><br />
            AND ETHICAL REASONING."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            PERSONAL PHILOSOPHY
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <h3 className="text-xl lg:text-2xl font-light text-white mb-4">Engineering</h3>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Machine learning, deep learning and natural language processing — from data
              cleaning and feature engineering to model training and deployment in usable
              web interfaces.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
            <h3 className="text-xl lg:text-2xl font-light text-white mb-4">Writing & Community</h3>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Published poetry and literary essays on Litstream, core writer of the Writers'
              Community at VIT Bhopal, member of ELA, and part of the Advitya volleyball team.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
