'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, TrendingUp } from 'lucide-react'

// Cryptocurrency data
const cryptocurrencies = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 87254.755,
    change: 1.71,
    icon: '₿',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 2,
    name: 'Solana',
    symbol: 'SOL',
    price: 123.525,
    change: -0.65,
    icon: '◎',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 3,
    name: 'Dash',
    symbol: 'DASH',
    price: 41.465,
    change: 1.71,
    icon: 'D',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 4,
    name: 'XRP',
    symbol: 'XRP',
    price: 1.8165,
    change: 1.66,
    icon: 'X',
    color: 'from-white to-gray-300',
  },
  {
    id: 5,
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3254.82,
    change: 2.34,
    icon: 'Ξ',
    color: 'from-gray-400 to-blue-500',
  },
  {
    id: 6,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 87254.755,
    change: 1.71,
    icon: '₿',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 7,
    name: 'Solana',
    symbol: 'SOL',
    price: 123.525,
    change: -0.65,
    icon: '◎',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 8,
    name: 'Dash',
    symbol: 'DASH',
    price: 41.465,
    change: 1.71,
    icon: 'D',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 9,
    name: 'XRP',
    symbol: 'XRP',
    price: 1.8165,
    change: 1.66,
    icon: 'X',
    color: 'from-white to-gray-300',
  },
]

export default function Cryptocurrencies() {
  return (
    <section id="cryptocurrencies" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Heading and Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              All Cryptos, Traded by Me
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Buy, sell, and convert all major cryptocurrencies Traded by me . A seamless experience with no compromises.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 transition-colors"
            >
              Buy crypto now
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Right Side - Cryptocurrency Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-3 gap-4"
          >
            {cryptocurrencies.map((crypto, index) => (
              <motion.div
                key={crypto.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass rounded-xl p-4 cursor-pointer group"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${crypto.color} flex items-center justify-center mb-3 text-white font-bold text-lg`}>
                  {crypto.icon}
                </div>
                
                {/* Name */}
                <h3 className="text-white font-semibold text-sm mb-2">{crypto.name}</h3>
                
                {/* Price */}
                <p className="text-white font-medium text-xs mb-1">
                  ${crypto.price.toLocaleString('en-US', { maximumFractionDigits: 3 })}
                </p>
                
                {/* Change */}
                <div className={`flex items-center gap-1 ${crypto.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  <TrendingUp 
                    className={`w-3 h-3 ${crypto.change < 0 ? 'rotate-180' : ''}`} 
                  />
                  <span className="text-xs font-semibold">
                    {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-16"></div>
      </div>
    </section>
  )
}

