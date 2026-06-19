'use client'

import { motion } from 'framer-motion'
import { howWeWorkContent } from '@/app/data/home-content'

export default function HowWeWork() {
  return (
    <section className="py-20 lg:py-28" style={{ background: '#f9fafb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl lg:text-4xl font-bold text-center mb-16"
          style={{ color: '#141f78' }}
        >
          {howWeWorkContent.title}
        </motion.h2>

        <div className="space-y-20">
          {howWeWorkContent.blocks.map((block, index) => (
            <div
              key={block.title}
              className={`flex flex-col ${block.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <motion.div
                initial={{ opacity: 0, x: block.imageLeft ? -70 : 70, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2"
              >
                <div
                  className="rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{
                    aspectRatio: '16/9',
                    background: 'linear-gradient(135deg, #141f78 0%, #57b5e0 100%)',
                  }}
                >
                  <span
                    className="text-8xl font-bold select-none"
                    style={{ color: 'rgba(255,255,255,0.15)' }}
                  >
                    {index + 1}
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: block.imageLeft ? 70 : -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="w-full lg:w-1/2"
              >
                <h3
                  className="text-2xl lg:text-3xl font-bold mb-4 leading-snug"
                  style={{ color: '#141f78' }}
                >
                  {block.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{block.description}</p>
                {block.points.length > 0 && (
                  <div className="space-y-4">
                    {block.points.map((point) => (
                      <div key={point.subtitle} className="flex gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ background: '#57b5e0' }}
                        />
                        <div>
                          <p className="font-semibold mb-1" style={{ color: '#141f78' }}>
                            {point.subtitle}
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">{point.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
