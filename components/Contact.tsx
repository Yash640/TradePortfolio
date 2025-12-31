'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Github, Send } from 'lucide-react'
import { useState } from 'react'

const socialLinks = [
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/yourhandle', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Let's connect and discuss trading opportunities, collaborations, or just say hello!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
              <p className="text-white/70 mb-6">
                Feel free to reach out through any of these channels. I'm always open to discussing
                new opportunities and trading insights.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-4 rounded-xl flex items-center gap-4 hover:bg-white/15 transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <social.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="glass p-8 rounded-2xl space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-white/80 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white/80 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white/80 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                placeholder="Your message..."
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-16 pt-8 border-t border-white/10"
      >
        <p className="text-white/60">
          © {new Date().getFullYear()} Yash.fxtradez. All rights reserved.
        </p>
      </motion.div>
    </section>
  )
}

