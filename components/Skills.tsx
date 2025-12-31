'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, PieChart, Shield } from 'lucide-react'

const skills = [
  { name: 'Technical Analysis', level: 95, icon: TrendingUp },
  { name: 'Risk Management', level: 90, icon: Shield },
  { name: 'Portfolio Management', level: 88, icon: PieChart },
  { name: 'Market Research', level: 92, icon: DollarSign },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Core competencies that drive successful trading outcomes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-gradient mb-2">4+</div>
            <div className="text-white/70">Years Experience</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-gradient mb-2">700K $ +</div>
            <div className="text-white/70">in Funding</div>
          </div>
        </motion.div>
        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-16"></div>
      </div>
    </section>
  )
}

