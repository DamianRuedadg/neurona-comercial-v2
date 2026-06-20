'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/app/components/ui/AnimatedCounter'
import { metricsContent } from '@/app/data/home-content'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const, delay },
})

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-[#F3F4F6] rounded-2xl">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="text-gray-400 text-sm font-medium text-center px-6">{label}</span>
    </div>
  )
}

const socials = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="white" stroke="none" points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" />
      </svg>
    ),
  },
]

export default function Metrics() {
  const items = metricsContent.items
  // 0: +13000 Comercios Activos | 1: +11200 Base de datos
  // 2: 23% Aumento en ventas   | 3: +4500 Comercios capacitados

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          {...fadeUp(0)}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#141f78]">
            {metricsContent.title}
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-[#57b5e0]" />
        </motion.div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:[grid-auto-rows:230px]">

          {/* C1: +13000 Comercios Activos — azul */}
          <motion.div
            {...fadeUp(0.05)}
            className="rounded-2xl p-6 sm:p-8 flex flex-col justify-end shadow-sm min-h-[160px] sm:min-h-[200px] lg:col-start-1 lg:row-start-1"
            style={{ background: '#141f78' }}
          >
            <p className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-none mb-2">
              <AnimatedCounter value={items[0].value} prefix={items[0].prefix} suffix={items[0].suffix} />
            </p>
            <p className="text-white/70 font-medium text-xs sm:text-sm tracking-wide uppercase">{items[0].label}</p>
          </motion.div>

          {/* C2: +11200 Base de datos — celeste, más alta (2 filas) */}
          <motion.div
            {...fadeUp(0.1)}
            className="rounded-2xl p-6 sm:p-8 flex flex-col justify-end shadow-sm min-h-[160px] sm:min-h-[200px] sm:row-span-2 lg:col-start-2 lg:row-start-1 lg:row-span-2"
            style={{ background: '#57b5e0' }}
          >
            <p className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-none mb-2">
              <AnimatedCounter value={items[1].value} prefix={items[1].prefix} suffix={items[1].suffix} />
            </p>
            <p className="text-white/80 font-medium text-xs sm:text-sm tracking-wide uppercase">{items[1].label}</p>
          </motion.div>

          {/* C3: Imagen placeholder 1 */}
          <motion.div
            {...fadeUp(0.15)}
            className="rounded-2xl overflow-hidden min-h-[160px] sm:min-h-[200px] lg:col-start-3 lg:row-start-1"
          >
            <ImagePlaceholder label="Imagen oficina / equipo" />
          </motion.div>

          {/* C4: 23% Aumento en ventas — blanco con borde celeste */}
          <motion.div
            {...fadeUp(0.15)}
            className="rounded-2xl p-6 sm:p-8 flex flex-col justify-end shadow-sm min-h-[160px] sm:min-h-[200px] border-2 border-[#57b5e0] bg-white lg:col-start-1 lg:row-start-2"
          >
            <p className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#141f78] leading-none mb-2">
              <AnimatedCounter value={items[2].value} prefix={items[2].prefix} suffix={items[2].suffix} />
            </p>
            <p className="text-gray-500 font-medium text-xs sm:text-sm tracking-wide uppercase">{items[2].label}</p>
          </motion.div>

          {/* C5: +4500 Comercios capacitados — gradiente marca */}
          <motion.div
            {...fadeUp(0.2)}
            className="rounded-2xl p-6 sm:p-8 flex flex-col justify-end shadow-sm min-h-[160px] sm:min-h-[200px] lg:col-start-3 lg:row-start-2"
            style={{ background: 'linear-gradient(135deg, #141f78 0%, #57b5e0 100%)' }}
          >
            <p className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-none mb-2">
              <AnimatedCounter value={items[3].value} prefix={items[3].prefix} suffix={items[3].suffix} />
            </p>
            <p className="text-white/75 font-medium text-xs sm:text-sm tracking-wide uppercase">{items[3].label}</p>
          </motion.div>

          {/* C6: Redes sociales — 2 columnas, borde azul */}
          <motion.div
            {...fadeUp(0.25)}
            className="rounded-2xl p-6 sm:p-8 bg-white border-2 border-[#141f78] shadow-sm min-h-[160px] sm:min-h-[200px] sm:col-span-2 lg:col-start-1 lg:col-span-2 lg:row-start-3"
          >
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#141f78] mb-6">
              Seguinos en redes
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="group flex flex-col items-center gap-2"
                >
                  <span className="flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 rounded-xl border border-[#141f78]/15 text-[#141f78] transition-all duration-200 group-hover:bg-[#141f78] group-hover:text-white group-hover:border-[#141f78] group-hover:shadow-md">
                    {s.icon}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-gray-400 group-hover:text-[#141f78] transition-colors tracking-wide uppercase">
                    {s.name}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* C7: Imagen placeholder 2 */}
          <motion.div
            {...fadeUp(0.3)}
            className="rounded-2xl overflow-hidden min-h-[160px] sm:min-h-[200px] lg:col-start-3 lg:row-start-3"
          >
            <ImagePlaceholder label="Imagen proyecto / producto" />
          </motion.div>

        </div>

        <p className="text-center text-xs text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed">
          *Cifras acumuladas desde el inicio de operaciones. Próximamente publicaremos la metodología y fuente detallada de cada métrica.
        </p>

      </div>
    </section>
  )
}
