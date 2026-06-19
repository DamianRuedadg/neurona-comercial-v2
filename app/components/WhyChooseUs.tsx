'use client'

import { motion } from 'framer-motion'
import { whyChooseUsContent } from '@/app/data/home-content'

const ICONS = ['💡', '⚡', '🌐']

export default function WhyChooseUs() {
  return (
    <section id="productos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-4"
        >
          <span className="inline-block rounded-full bg-[#57b5e0]/10 text-[#141f78] text-xs font-semibold tracking-wide uppercase px-4 py-1.5">
            POR QUÉ ELEGIRNOS
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold text-center mb-16"
          style={{ color: '#141f78' }}
        >
          {whyChooseUsContent.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {whyChooseUsContent.columns.map((col, index) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center mb-6 flex-shrink-0 text-4xl"
                style={{ background: 'linear-gradient(135deg, #141f78, #57b5e0)' }}
              >
                {ICONS[index]}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#141f78' }}>
                {col.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{col.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
