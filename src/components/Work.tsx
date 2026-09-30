import { motion } from 'framer-motion'

const GITHUB = 'https://github.com/aasirjaffer13'

type Project = {
  title: string
  company: string
  location: string
  period: string
  description: string
  skills: string[]
  repo?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: 'Adab For Kashaer',
    company: 'Full-Stack Canvas & Publishing Platform',
    location: 'TypeScript · React · Supabase',
    period: '2026',
    description:
      'A collaborative design and publishing platform built around an infinite canvas. Drag-and-drop image and text layers powered by Konva, an AI prompt overlay, authenticated dashboards, role-based boards, and a markdown blog engine — backed by Supabase and shipped to Cloudflare and Vercel with Playwright end-to-end tests.',
    skills: ['TanStack Start', 'React', 'Konva', 'Supabase', 'Cloudflare', 'Playwright'],
    repo: `${GITHUB}/Adab-For-Kashaer`,
    demo: 'https://adabforkasheer.vercel.app',
  },
  {
    title: 'Library Management System',
    company: 'Desktop Application',
    location: 'Java · Swing · H2 Database',
    period: '2026',
    description:
      'A zero-configuration Java Swing desktop application covering the full library workflow: role-based login with SHA-256 password hashing, book and member management, issuing and returning with automatic overdue fine calculation, reservations with auto-expiry, and transaction history — structured across a clean model → repository → service → UI layered architecture.',
    skills: ['Java 21', 'Swing', 'H2 Database', 'Layered Architecture', 'SHA-256 Auth'],
    repo: `${GITHUB}/library-management-project`,
  },
  {
    title: 'Heart Disease Prediction System',
    company: 'CardioRisk · Machine Learning Web App',
    location: 'Python · Scikit-learn · Streamlit',
    period: '2026',
    description:
      'A supervised learning pipeline that predicts heart disease risk from 918 patient records and 11 clinical features. Covers data cleaning, EDA, model comparison, stratified 5-fold cross-validation and hyperparameter tuning, ending in a tuned Logistic Regression pipeline with odds-ratio interpretation, deployed as an interactive Streamlit web application.',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Cross-validation', 'Streamlit'],
    repo: `${GITHUB}/Heart-Risk-Alert`,
    demo: 'https://heartriskanalysiss.streamlit.app/',
  },
  {
    title: 'NeuroSleep Sleep-Staging Pipeline',
    company: 'Open Source · Fork & Contribution',
    location: 'Python · PyTorch · Jupyter',
    period: '2026',
    description:
      'A collaborative deep-learning pipeline for five-stage sleep classification (Wake, N1, N2, N3, REM) from EEG, EOG and EMG signals, delivering a 99,477-parameter sub-100K model that reaches 90.48% accuracy and 0.83 Cohen\u2019s kappa on held-out subjects. Contributed the model evaluation and performance work — metric definitions, per-stage analysis, fit diagnosis and benchmark reporting — committed from my fork and credited in the project\u2019s team and citation.',
    skills: ['PyTorch', 'Model Evaluation', 'Jupyter', 'Scikit-learn', 'Streamlit'],
    repo: `${GITHUB}/neuromorphic-sleep-staging-pipeline`,
    demo: 'https://neuromorphic-sleep-stage.streamlit.app/',
  },
  {
    title: 'Real Estate Price Prediction',
    company: 'Regression Modelling',
    location: 'Python · Jupyter Notebook',
    period: '2025',
    description:
      'A Melbourne housing price estimator covering data cleaning, exploratory data analysis and feature engineering, starting from a Decision Tree baseline with tuned max_leaf_nodes and graduating to a Random Forest regressor evaluated on Mean Absolute Error.',
    skills: ['EDA', 'Feature Engineering', 'Random Forest', 'Pandas', 'Jupyter'],
    repo: `${GITHUB}/real-estate-price-prediction-project`,
  },
  {
    title: 'Digital Clock & Stopwatch',
    company: 'GUI Application',
    location: 'Python · PyQt5',
    period: '2025',
    description:
      'A PyQt5 desktop clock with an integrated stopwatch: live time and full date display, start/stop/reset stopwatch with 50 ms precision, a 12-hour/24-hour format toggle, and a neon-on-black interface with custom font support.',
    skills: ['Python', 'PyQt5', 'Qt', 'GUI Design', 'Event Timing'],
    repo: `${GITHUB}/digital-clock`,
  },
  {
    title: 'Digital Literacy Project',
    company: 'Academic Portfolio · VIT Bhopal',
    location: 'Design · Tooling · Cyber Safety',
    period: '2025',
    description:
      'A five-module initiative bridging technical skill and professional digital citizenship: an awareness infographic, a centralized student portfolio, hands-on GitHub and Google Workspace collaboration workflows, professional email and social media etiquette, and a cybercrime case-study prevention guide.',
    skills: ['Visual Communication', 'GitHub', 'Google Workspace', 'Net Etiquette', 'Cyber Defense'],
    repo: `${GITHUB}/digital-literacy-project`,
  },
  {
    title: 'Intelligent Chatbot System',
    company: 'AI / NLP Project',
    location: 'Python · Deep Learning',
    period: '2026',
    description:
      'An AI-powered conversational chatbot built with Python, NLP libraries and deep learning frameworks. Implemented intent recognition and context management to improve interaction quality and response accuracy across multiple domains.',
    skills: ['Python', 'NLP', 'Deep Learning', 'Intent Recognition', 'Context Management'],
  },
  {
    title: 'Published Writer',
    company: 'Litstream',
    location: 'Poetry & Literary Essays',
    period: 'Ongoing',
    description:
      'Published original works including poetry and literary essays on the Litstream platform, alongside writing for the Writers\u2019 Community at VIT Bhopal.',
    skills: ['Poetry', 'Essays', 'Editing', 'Literary Criticism'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' },
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Selected work</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          PROJECTS
        </motion.h2>

        <div className="space-y-0">
          {projects.map((exp, index) => (
            <motion.article
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                <div className="lg:col-span-5 transition-transform duration-500 ease-out group-hover:translate-x-1">
                  <span className="block font-display text-xs tracking-[0.3em] text-gray-600 mb-3">
                    {String(index + 1).padStart(2, '0')} —
                  </span>
                  {exp.repo ? (
                    <a
                      href={exp.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline gap-2 text-white"
                    >
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-light mb-2">
                        {exp.title}
                      </h3>
                      <span className="text-base text-gray-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white inline-block">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                      {exp.title}
                    </h3>
                  )}
                  <p className="text-base lg:text-lg text-gray-400">{exp.company}</p>
                  <p className="text-sm text-gray-600 mt-2">{exp.location}</p>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 tracking-widest uppercase">{exp.period}</p>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full transition-colors duration-300 group-hover:border-gray-700 group-hover:text-gray-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {(exp.repo || exp.demo) && (
                    <div className="flex flex-wrap gap-6 mt-6">
                      {exp.repo && (
                        <a
                          href={exp.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs tracking-widest uppercase text-gray-500 hover:text-white transition-colors link-sweep"
                        >
                          Source ↗
                        </a>
                      )}
                      {exp.demo && (
                        <a
                          href={exp.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs tracking-widest uppercase text-gray-500 hover:text-white transition-colors link-sweep"
                        >
                          Live demo ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        <motion.div {...fadeInUp} className="mt-12 lg:mt-16">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-widest uppercase text-gray-500 hover:text-white transition-colors link-sweep"
          >
            All repositories on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}
