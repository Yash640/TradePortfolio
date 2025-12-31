'use client'

import { motion } from 'framer-motion'
import { ArrowDown, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <TrendingUp className="w-16 h-16 text-cyan-400" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-gradient">Professional Trader</span>
            <br />
            <span className="text-white">Trading Excellence</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Transforming market insights into profitable opportunities with certified expertise
            and proven strategies
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#certificates"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Certificates
            </motion.a>
            <motion.a
              href="#about"
              className="px-8 py-4 glass rounded-full font-semibold text-white hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#about" className="text-white/60 hover:text-white transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

