import { MotionConfig } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { GrainOverlay } from '@/components/GrainOverlay'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'
import { Education } from '@/components/Education'
import { Writing } from '@/components/Writing'
import { Speaking } from '@/components/Speaking'
import { Contact } from '@/components/Contact'

export default function Index() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[90] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:text-sm"
        >
          Skip to content
        </a>
        <GrainOverlay />
        <Navigation />
        <main id="content" tabIndex={-1}>
          <Hero />
          <About />
          <Skills />
          <Work />
          <Education />
          <Writing />
          <Speaking />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  )
}
