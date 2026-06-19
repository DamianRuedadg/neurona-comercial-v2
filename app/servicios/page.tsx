'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Network, Rocket, ChevronDown } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const PILL = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.6, ease: EASE },
} as const

const HEADING = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.9, ease: EASE, delay: 0.1 },
} as const

const SERVICES = [
  {
    Icon: Building2,
    title: 'Diagnóstico y Arquitectura Empresarial',
    subtitle: 'La estructura legal y operativa detrás del escenario.',
    focus:
      'Antes de acelerar las ventas, blindamos y ordenamos la organización. Este eje está diseñado para directores que sienten que su crecimiento actual es caótico o que están expuestos a riesgos operativos y legales.',
    items: [
      {
        title: 'Auditoría y Optimización de Procesos Internos',
        text: 'Mapeamos el funcionamiento actual de tus áreas para eliminar cuellos de botella, automatizar tareas repetitivas y estandarizar manuales de operación.',
      },
      {
        title: 'Desarrollo de Soluciones de Software a Medida',
        text: 'Si las herramientas del mercado no se adaptan a tu empresa, diseñamos e implementamos software específico para tu flujo de trabajo, conectando tus bases de datos y sistemas de gestión (TI).',
      },
      {
        title: 'Protección y Blindaje Legal Corporativo',
        text: 'Estructuración de contratos comerciales, acuerdos de confidencialidad (NDA), términos y condiciones para plataformas digitales y blindaje ante contingencias operativas.',
      },
      {
        title: 'Registro de Marca Nacional e Internacional',
        text: 'Gestión integral de la propiedad intelectual. Protegemos tu activo más valioso frente a la ley para asegurar tu exclusividad en el mercado antes de expandirte o internacionalizarte.',
      },
    ],
  },
  {
    Icon: Network,
    title: 'Ecosystems & EdTech',
    subtitle: 'Estructura tecnológica para escalar el conocimiento.',
    focus:
      'El crecimiento de una empresa depende de la velocidad con la que su equipo y sus clientes aprenden a usar sus metodologías. Llevamos la capacitación corporativa al entorno digital con infraestructura de nivel internacional.',
    items: [
      {
        title: 'Desarrollo de Plataformas Educativas a Medida (LMS/EVAS)',
        text: 'Diseñamos e implementamos campus virtuales personalizados, intuitivos y escalables para la formación de tu comunidad o de tus clientes B2B.',
      },
      {
        title: 'Capacitación Interna y Gestión del Cambio',
        text: 'Creamos programas de formación y rutas de aprendizaje para tus mandos medios y equipos en áreas críticas (Ventas, Operaciones, Adopción Tecnológica). Facilitamos la migración a nuevos sistemas reduciendo la resistencia interna.',
      },
      {
        title: 'Proyectos Tecnológicos desde Cero',
        text: 'Consultoría y ejecución técnica para transformar ideas de negocio o flujos manuales en ecosistemas digitales automatizados que miden el rendimiento mediante dashboards de indicadores clave.',
      },
    ],
  },
  {
    Icon: Rocket,
    title: 'Puesta en Escena Digital & Performance',
    subtitle: 'Estrategia comercial y de comunicación orientada a la conversión.',
    focus:
      'Con la casa ordenada y la tecnología marchando, salimos al mercado. Combinamos la creatividad y la narrativa digital con la rigurosidad de los datos para captar leads calificados y cerrar negocios.',
    items: [
      {
        title: 'Diseño de Identidad y Manual de Marca',
        text: 'Creamos o pulimos la identidad visual y el tono de comunicación de tu empresa, asegurando que proyecte la solidez y el profesionalismo que tu canal B2B exige.',
      },
      {
        title: 'Arquitectura de Embudos de Venta (Funnel Building)',
        text: 'Diseñamos el recorrido completo que hace tu cliente ideal: desde que descubre tu marca a través de un contenido estratégico o un webinar de validación, hasta que agenda una reunión con tu equipo comercial.',
      },
      {
        title: 'Campañas de Paid Media y Performance',
        text: 'Gestión profesional de pauta publicitaria digital (Google Ads, Meta Ads, LinkedIn Ads) enfocada 100% en el retorno de inversión (ROI) y en la captación de prospectos corporativos de alto valor.',
      },
    ],
  },
]

export default function ServiciosPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (idx: number) =>
    setOpenIdx((prev) => (prev === idx ? null : idx))

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">

        {/* ── HERO ── */}
        <section
          className="relative py-28 lg:py-44 flex items-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #141f78 0%, #1a2890 60%, #57b5e0 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-5"
            >
              <span className="inline-block rounded-full bg-white/15 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5">
                NUESTROS SERVICIOS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto"
            >
              Diseño y Desarrollo de{' '}
              <span style={{ color: '#57b5e0' }}>Soluciones Empresariales</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              className="text-white/80 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Tres ejes integrados para transformar tu organización de manera completa: desde la
              estructura interna hasta la presencia digital y el rendimiento comercial.
            </motion.p>
          </div>

          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            style={{ background: '#57b5e0' }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-10 pointer-events-none"
            style={{ background: '#57b5e0' }}
          />
        </section>

        {/* ── ACORDEÓN ── */}
        <section className="py-20 lg:py-28 bg-[#f9fafb]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div {...PILL} className="text-center mb-4">
              <span className="inline-block rounded-full bg-[#57b5e0]/10 text-[#141f78] text-xs font-semibold tracking-wide uppercase px-4 py-1.5">
                NUESTROS SERVICIOS
              </span>
            </motion.div>

            <motion.div {...HEADING} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#141f78' }}>
                Tres ejes de trabajo integrados
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Cada eje aborda una dimensión clave de tu empresa. Podés trabajar uno en particular
                o los tres de forma coordinada según tu etapa de crecimiento.
              </p>
              <div className="mt-6 mx-auto h-1 w-16 rounded-full bg-[#57b5e0]" />
            </motion.div>

            <div className="space-y-4">
              {SERVICES.map((service, idx) => {
                const isOpen = openIdx === idx
                const { Icon } = service

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 60, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.9, ease: EASE, delay: idx * 0.12 }}
                    className="bg-white rounded-2xl border"
                    style={{ borderColor: '#57b5e0', overflow: 'hidden' }}
                  >
                    {/* Encabezado — siempre visible */}
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full text-left px-6 py-6 flex items-start gap-5 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      {/* Ícono en círculo */}
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center mt-0.5"
                        style={{ borderColor: '#141f78' }}
                      >
                        <Icon size={22} strokeWidth={1.8} style={{ color: '#141f78' }} />
                      </div>

                      {/* Título + bajada */}
                      <div className="flex-1 min-w-0 text-left">
                        <h3
                          className="text-lg sm:text-xl font-bold leading-snug"
                          style={{ color: '#141f78' }}
                        >
                          {service.title}
                        </h3>
                        <p className="text-sm italic text-gray-500 mt-1 leading-relaxed">
                          {service.subtitle}
                        </p>
                      </div>

                      {/* Chevron con rotación */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="flex-shrink-0 self-center ml-2"
                        style={{ color: '#57b5e0' }}
                      >
                        <ChevronDown size={22} strokeWidth={2} />
                      </motion.div>
                    </button>

                    {/* Contenido expandible */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: EASE }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div
                            className="px-6 pb-8 pt-5 border-t"
                            style={{ borderColor: 'rgba(87,181,224,0.25)' }}
                          >
                            {/* Texto de enfoque */}
                            <p className="text-gray-600 leading-relaxed mb-6">
                              {service.focus}
                            </p>

                            {/* Etiqueta "¿Qué resolvemos?" */}
                            <p
                              className="text-xs font-bold tracking-widest uppercase mb-5"
                              style={{ color: '#57b5e0' }}
                            >
                              ¿Qué resolvemos?
                            </p>

                            {/* Viñetas */}
                            <ul className="space-y-5">
                              {service.items.map((item) => (
                                <li key={item.title} className="flex gap-3">
                                  <div
                                    className="flex-shrink-0 w-2 h-2 rounded-full mt-[9px]"
                                    style={{ backgroundColor: '#57b5e0' }}
                                  />
                                  <p className="text-gray-600 leading-relaxed">
                                    <strong style={{ color: '#141f78' }}>{item.title}</strong>
                                    {': '}
                                    {item.text}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-24 lg:py-32"
          style={{ background: 'linear-gradient(135deg, #141f78 0%, #57b5e0 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              ¿Listo para ordenar, digitalizar e impulsar tu organización?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              className="text-white/80 text-lg mb-10 max-w-xl mx-auto"
            >
              Agendá una reunión de diagnóstico con nuestro equipo y encontrá el punto de partida
              ideal para tu empresa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            >
              <a
                href="https://wa.me/5493874224437?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20reuni%C3%B3n%20de%20diagn%C3%B3stico."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-4 rounded-full bg-white font-bold text-base transition-all duration-200 hover:brightness-95 hover:scale-105"
                style={{ color: '#141f78' }}
              >
                Pedí tu reunión de diagnóstico
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
