'use client'

import { motion } from 'framer-motion'
import { audienceContent } from '@/app/data/home-content'

const CARD_ICONS = ['🏢', '👔', '🔄', '🎓', '🌍', '🚀']

export default function AudienceSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-28" style={{ background: '#f9fafb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-4"
        >
          <span className="inline-block rounded-full bg-[#57b5e0]/10 text-[#141f78] text-xs font-semibold tracking-wide uppercase px-4 py-1.5">
            A QUIÉNES ACOMPAÑAMOS
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold text-center mb-14"
          style={{ color: '#141f78' }}
        >
          {audienceContent.title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceContent.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5 text-2xl"
                style={{ background: 'linear-gradient(135deg, #141f78, #57b5e0)' }}
              >
                <span>{CARD_ICONS[index]}</span>
              </div>
              <h3 className="font-bold text-lg mb-3 leading-snug" style={{ color: '#141f78' }}>
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
