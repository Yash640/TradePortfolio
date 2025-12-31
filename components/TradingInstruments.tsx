'use client'

import { motion } from 'framer-motion'
import { TrendingUp, BarChart3, DollarSign, Coins, LineChart } from 'lucide-react'

const instruments = [
  {
    id: 1,
    name: 'NASDAQ',
    symbol: 'NASDAQ-100',
    description: 'Technology-heavy stock index representing 100+ of the largest non-financial companies listed on NASDAQ',
    icon: LineChart,
    color: 'from-blue-500 to-cyan-400',
    gradient: 'from-blue-500/20 to-cyan-400/20',
    borderColor: 'border-blue-500/40',
  },
  {
    id: 2,
    name: 'US30',
    symbol: 'Dow Jones',
    description: 'Price-weighted average of 30 significant stocks traded on NYSE and NASDAQ, representing major US industries',
    icon: BarChart3,
    color: 'from-purple-500 to-pink-400',
    gradient: 'from-purple-500/20 to-pink-400/20',
    borderColor: 'border-purple-500/40',
  },
  {
    id: 3,
    name: 'XAUUSD',
    symbol: 'Gold',
    description: 'Gold vs US Dollar - The most traded precious metal, serving as a hedge against inflation and currency fluctuations',
    icon: Coins,
    color: 'from-yellow-500 to-orange-400',
    gradient: 'from-yellow-500/20 to-orange-400/20',
    borderColor: 'border-yellow-500/40',
  },
  {
    id: 4,
    name: 'XAGUSD',
    symbol: 'Silver',
    description: 'Silver vs US Dollar - The second most popular precious metal, known for industrial applications and as a store of value',
    icon: Coins,
    color: 'from-gray-400 to-slate-500',
    gradient: 'from-gray-400/20 to-slate-500/20',
    borderColor: 'border-gray-400/40',
  },
  {
    id: 5,
    name: 'EURUSD',
    symbol: 'Euro/USD',
    description: 'The most liquid currency pair in the world, representing the exchange rate between the Euro and US Dollar',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-400',
    gradient: 'from-green-500/20 to-emerald-400/20',
    borderColor: 'border-green-500/40',
  },
  {
    id: 6,
    name: 'BTC',
    symbol: 'Bitcoin',
    description: 'The world\'s first and largest cryptocurrency, decentralized digital currency operating without central authority',
    icon: TrendingUp,
    color: 'from-orange-500 to-yellow-400',
    gradient: 'from-orange-500/20 to-yellow-400/20',
    borderColor: 'border-orange-500/40',
  },
]

export default function TradingInstruments() {
  return (
    <section id="trading-instruments" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <LineChart className="w-12 h-12 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Trading Instruments</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Diversified portfolio across major financial markets and instruments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instruments.map((instrument, index) => (
            <motion.div
              key={instrument.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl border ${instrument.borderColor} glass hover:bg-white/15 transition-all duration-300`}
            >
              {/* Gradient Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${instrument.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px',
                }}></div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${instrument.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <instrument.icon className="w-8 h-8 text-white" />
                </div>

                {/* Symbol Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                  <span className="text-white/80 text-xs font-semibold">{instrument.symbol}</span>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-colors">
                  {instrument.name}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {instrument.description}
                </p>
              </div>

              {/* Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${instrument.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Info Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 text-sm">
            Experienced in trading across multiple asset classes with proven risk management strategies
          </p>
        </motion.div>
      </div>
      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-16"></div>
        </div>
      </div>
    </section>
  )
}

