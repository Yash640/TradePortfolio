'use client'

import { motion } from 'framer-motion'
import { Award, Target, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Certified Expertise',
    description: 'Holding multiple professional trading certifications from recognized institutions',
  },
  {
    icon: Target,
    title: 'Strategic Trading',
    description: 'Specialized in developing and executing profitable trading strategies',
  },
  {
    icon: BarChart3,
    title: 'Market Analysis',
    description: 'Expert in technical and fundamental analysis for informed decision-making',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            A dedicated <span className="font-semibold text-white">professional forex trader</span> with a passion for financial markets and a commitment
            to continuous learning and excellence in trading.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl hover:bg-white/15 transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-8 md:p-12 rounded-2xl max-w-4xl mx-auto mb-8 relative overflow-hidden"
        >
          {/* Decorative gradient background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl -z-0"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gradient tracking-tight">My Journey</h3>
              <div className="h-1 flex-1 bg-gradient-to-r from-purple-600 to-transparent rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-white/90 text-xl md:text-2xl leading-relaxed font-light">
                  I am a <span className="font-semibold text-gradient">forex trader</span> working in the forex market since <span className="font-semibold text-cyan-400">2022</span>, with roots in the <span className="font-semibold text-purple-400">Indian market</span> dating back to <span className="font-semibold text-cyan-400">2019</span>.
                </p>
                
                {/* Experience Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 mb-4">
                  <span className="text-cyan-400 font-bold text-lg">4+</span>
                  <span className="text-white/80 text-sm font-medium">Years of Trading Experience</span>
                </div>
              </div>
              
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>
              
              <div className="space-y-4">
                <p className="text-white/80 text-lg leading-relaxed font-light mt-4">
                  Throughout my trading journey, I have developed a deep understanding of market dynamics, learning to read price action and identify high-probability setups that align with institutional trading behavior.
                </p>
                
                <div className="glass-dark p-6 rounded-xl border border-cyan-500/20 mt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-cyan-400 font-bold text-lg mb-2">My Trading Strategy</h4>
                      <p className="text-white/80 text-base leading-relaxed">
                        My trading strategy is built on <span className="font-semibold text-white">Smart Money Concept (SMC)</span>, purely based on <span className="font-semibold text-purple-400">supply and demand zones</span>. This approach allows me to identify key market areas where institutional traders operate, enabling more precise entries and better risk management.
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-white/80 text-lg leading-relaxed font-light mt-4">
                  I believe in continuous learning and adapting to evolving market conditions while maintaining discipline in execution.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-2xl max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-6 text-gradient text-center">Firms I've Worked With</h3>
          <p className="text-white/80 text-lg leading-relaxed mb-8 text-center">
            I have had the privilege of working with multiple prestigious prop trading firms, 
            gaining valuable experience and building a strong track record across different platforms.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {['Fundingpips', 'fundednext', 'FTM0', 'atlas funded', 'instant funding', 'fundingticks'].map((firm, index) => (
              <motion.div
                key={firm}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-600/20 border border-cyan-500/40 rounded-xl px-6 py-4 text-center hover:border-cyan-400/70 hover:bg-gradient-to-br hover:from-cyan-500/30 hover:via-blue-500/30 hover:to-purple-600/30 transition-all shadow-lg hover:shadow-cyan-500/20 min-w-[140px]"
              >
                <p className="text-white font-semibold text-sm md:text-base whitespace-nowrap">{firm}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-16"></div>
      </div>
    </section>
  )
}

