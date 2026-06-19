'use client'

import { motion } from 'framer-motion'
import { Search, Layers, TrendingUp } from 'lucide-react'

const cards = [
  {
    Icon: Search,
    title: 'Diagnóstico y Arquitectura Empresarial',
    subtitle: 'La estructura detrás del escenario',
    text: 'Antes de actuar, identificamos el problema real de tu organización para diseñar soluciones a medida: optimización de procesos internos, desarrollo de herramientas específicas, blindaje legal y registro de marca. Creamos los cimientos sólidos que tu empresa necesita para crecer sin riesgos.',
  },
  {
    Icon: Layers,
    title: 'Ecosystems & EdTech',
    subtitle: 'Herramientas para escalar el conocimiento',
    text: 'Llevamos el aprendizaje y la gestión al siguiente nivel. Desarrollamos plataformas educativas a medida, diseñamos capacitaciones internas para tu equipo y armamos proyectos tecnológicos desde cero para automatizar y hacer más eficiente tu operación diaria.',
  },
  {
    Icon: TrendingUp,
    title: 'Puesta en Escena Digital & Performance',
    subtitle: 'Mensajes que impactan, embudos que convierten',
    text: 'Conectamos tu marca con su audiencia ideal combinando estrategia y emoción. Diseñamos tu manual de marca, estructuramos embudos de ventas de alta conversión y ejecutamos campañas de Paid Media orientadas 100% a generar resultados medibles.',
  },
]

export default function ValueStatement() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-4"
        >
          <span className="inline-block rounded-full bg-[#57b5e0]/10 text-[#141f78] text-xs font-semibold tracking-wide uppercase px-4 py-1.5">
            NUESTRA PROPUESTA
          </span>
        </motion.div>

        {/* Title + subtitle — 2-col desktop, stacked mobile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center mb-16"
        >
          {/* Left: text */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              <span style={{ color: '#141f78' }}>No resolvemos síntomas,</span>
              <br />
              <span style={{ color: '#141f78' }}>solucionamos </span>
              <span style={{ color: '#57b5e0' }}>problemas de raíz</span>
            </h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              A través de un diagnóstico profundo, auditamos las áreas clave de tu empresa para diseñar
              e implementar la estructura, la tecnología y la estrategia necesarias para que tu negocio
              funcione a la perfección detrás de escena y brille en los resultados.
            </p>
          </div>

          {/* Right: image placeholder */}
          <div
            className="rounded-2xl flex items-center justify-center min-h-[220px] lg:h-full"
            style={{ backgroundColor: '#141f78' }}
          >
            <span className="text-white/60 text-sm font-medium">Agregar imagen</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {cards.map(({ Icon, title, subtitle, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              className="group rounded-2xl p-8 flex flex-col gap-5 bg-[#F5F5F5] hover:bg-[#141f78] transition-colors duration-300"
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-[#141f78]/20 group-hover:border-[#57b5e0]/50 transition-colors duration-300">
                <Icon
                  size={26}
                  strokeWidth={1.8}
                  className="text-[#141f78] group-hover:text-[#57b5e0] transition-colors duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold leading-snug text-[#141f78] group-hover:text-white transition-colors duration-300">
                {title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm font-semibold text-[#57b5e0] transition-colors duration-300">
                {subtitle}
              </p>

              {/* Body */}
              <p className="text-sm leading-relaxed text-gray-500 group-hover:text-white/75 transition-colors duration-300">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
