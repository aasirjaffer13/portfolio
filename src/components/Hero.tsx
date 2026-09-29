import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import portraitDesktop from '@/assets/aasir-1920.jpg'
import portraitMobile from '@/assets/aasir-1080.jpg'

const nameLines = ['AASIR', 'JAFFER', 'LONE']

const lineReveal = (i: number) => ({
  initial: { y: '110%' },
  animate: { y: '0%' },
  transition: { delay: 0.2 + i * 0.12, duration: 1, ease: [0.19, 1, 0.22, 1] as const },
})

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const contentFade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="hero-viewport relative w-full overflow-hidden">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 w-full h-full">
        <picture className="block w-full h-full">
          <source media="(min-width: 768px)" srcSet={portraitDesktop} />
          <img
            src={portraitMobile}
            alt="Aasir Jaffer Lone portrait"
            width={1080}
            height={810}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-[100%_20%] md:object-[50%_25%]"
          />
        </picture>
        <div className="absolute inset-0 bg-black/60 md:bg-black/45" />
      </motion.div>

      <motion.div
        style={{ opacity: contentFade }}
        className="relative z-10 h-full flex items-end md:items-center pt-24 pb-[calc(5rem+env(safe-area-inset-bottom))] md:pt-0 md:pb-0 px-4 sm:px-6 md:px-12 lg:px-16"
      >
        <div className="w-full max-w-5xl">
          <h1
            aria-label="Aasir Jaffer Lone"
            className="font-display leading-none tracking-tighter text-[15vw] sm:text-[12vw] md:text-hero"
          >
            {nameLines.map((line, i) => (
              <span key={line} className="block overflow-hidden" aria-hidden="true">
                <motion.span className="block text-white" {...lineReveal(i)}>
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 md:mt-8 text-sm sm:text-base text-white/80 max-w-sm md:max-w-md leading-relaxed"
          >
            Computer Science student at VIT Bhopal specializing in Artificial Intelligence
            & Machine Learning — building thoughtful systems, and writing about the ideas
            behind them.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
