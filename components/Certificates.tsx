'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

// Your trading certificates
const certificates = [
  {
    id: 1,
    title: 'Certificate of Achievement',
    issuer: 'AtlasFunded & ACCESS',
    date: 'October 27, 2025',
    accountSize: '$10,000',
    description: 'Successfully passed assessment phase - Proof of excellent trading',
    image: '/certificates/atlas-cert-1.jpg',
  },
  {
    id: 2,
    title: 'Certificate of Achievement',
    issuer: 'AtlasFunded & ACCESS',
    date: 'September 25, 2025',
    accountSize: '$10,000',
    description: 'Successfully passed assessment phase - Proof of excellent trading',
    image: '/certificates/atlas-cert-2.jpg',
  },
  {
    id: 3,
    title: 'Certificate of Achievement',
    issuer: 'AtlasFunded & ACCESS',
    date: 'September 9, 2025',
    accountSize: '$10,000',
    description: 'Successfully passed assessment phase - Proof of excellent trading',
    image: '/certificates/atlas-cert-3.jpg',
  },
  {
    id: 4,
    title: 'Passed FTMO Challenge',
    issuer: 'FTMO',
    date: 'November 13, 2025',
    accountSize: 'Challenge Passed',
    description: 'Successfully completed the FTMO Challenge, demonstrating quality risk management and advanced trading skills',
    image: '/certificates/ftmo-challenge.jpg',
  },
  {
    id: 5,
    title: 'Passed FTMO Verification',
    issuer: 'FTMO',
    date: 'November 13, 2025',
    accountSize: 'Verification Passed',
    description: 'Successfully completed the full FTMO Evaluation Process, affirming advanced trading skills and preparedness for FTMO Account',
    image: '/certificates/ftmo-verification.jpg',
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <Award className="w-12 h-12 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Trading Certificates</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Professional certifications demonstrating expertise and commitment to trading excellence
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover:bg-white/15 transition-all group cursor-pointer w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-80 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <Award className="w-16 h-16 text-cyan-400" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-colors">
                    {cert.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                </div>
                <p className="text-cyan-400 mb-2 font-semibold">{cert.issuer}</p>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white/60 text-sm">{cert.date}</p>
                  <p className="text-cyan-400 text-sm font-semibold">{cert.accountSize}</p>
                </div>
                <p className="text-white/70 text-sm">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-16"></div>
      </div>
    </section>
  )
}

