import { motion } from 'framer-motion'
import portrait from '@/assets/aasir.jpg'

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Responsive */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={portrait}
          alt="Aasir Jaffer Lone portrait"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/55 md:bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:items-center pb-32 md:pb-0 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-display leading-none tracking-tighter text-[15vw] sm:text-[12vw] md:text-hero">
              <span className="block text-white">AASIR</span>
              <span className="block text-white">JAFFER</span>
              <span className="block text-white">LONE</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 md:mt-8 text-sm sm:text-base text-white/80 max-w-sm md:max-w-md leading-relaxed"
            >
              Computer Science student at VIT Bhopal specializing in Artificial Intelligence
              & Machine Learning — building thoughtful systems, and writing about the ideas
              behind them.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
