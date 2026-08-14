import { motion } from 'framer-motion'

const projects = [
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
    title: 'Heart Disease Prediction System',
    company: 'Machine Learning Web App',
    location: 'Python · Scikit-learn',
    period: '2026',
    description:
      'A machine learning web application that predicts the likelihood of heart disease from patient health parameters. Focused on data preprocessing, model training, prediction accuracy and healthcare decision support.',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Data Preprocessing', 'Web Interface'],
  },
  {
    title: 'Real Estate Price Prediction',
    company: 'Regression Modelling',
    location: 'Python · Jupyter Notebook',
    period: '2025',
    description:
      'A model that estimates property prices from housing features, covering data cleaning, exploratory data analysis, feature engineering and regression modelling.',
    skills: ['EDA', 'Feature Engineering', 'Regression', 'Pandas', 'Jupyter'],
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
  transition: { duration: 1, ease: 'easeOut' }
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
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {exp.title}
                  </h3>
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
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
