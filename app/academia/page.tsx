'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Calendar } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const COURSES = [
  {
    title: 'Ventas 2.0',
    synopsis:
      'En 3 webinars aprendés sobre las plataformas digitales que podés usar para impulsar tu negocio.',
  },
  {
    title: 'Ventas por WhatsApp',
    synopsis:
      'Descubrí cómo esta herramienta puede aumentar tus oportunidades de captar clientes y mejorar la interacción diaria. Aprendé a organizar bases de datos y agilizar respuestas para crear experiencias satisfactorias y de alto valor percibido.',
  },
  {
    title: 'Domina el arte de la venta con el Método AIDA',
    synopsis:
      'En este webinar te mostramos cómo podés captar la atención de los clientes potenciales, despertar su interés y deseo, y motivarlos a tomar acción con el Método AIDA.',
  },
]

const EVENTS = [
  {
    title: 'Workshop Presencial: Introducción a Canva',
    description: 'Dictado por nuestro equipo de capacitadores locales.',
    badge: 'A Borderó',
    badgeBg: '#57b5e0',
    badgeText: '#141f78',
    cta: 'Comprar mi Entrada',
  },
  {
    title: 'Masterclass: Introducción Práctica a la IA para Negocios',
    description: 'Alianza estratégica institucional.',
    badge: 'Evento Gratuito · Cupos Limitados',
    badgeBg: '#22c55e',
    badgeText: '#fff',
    cta: 'Asegurar mi Lugar',
  },
]

export default function AcademiaPage() {
  const [activeTab, setActiveTab] = useState<'ondemand' | 'presencial'>('ondemand')

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20" style={{ backgroundColor: '#0d1554' }}>

        {/* ── HERO ── */}
        <section className="pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-5"
            >
              <span
                className="inline-block rounded-full text-xs font-semibold tracking-widest uppercase px-4 py-1.5"
                style={{ background: 'rgba(87,181,224,0.15)', color: '#57b5e0' }}
              >
                ACADEMIA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight"
            >
              Academia{' '}
              <span style={{ color: '#57b5e0' }}>Neurona</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
              className="text-xl font-medium mb-6 italic"
              style={{ color: '#57b5e0' }}
            >
              El escenario donde el conocimiento se transforma en acción.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
              className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed mb-4"
            >
              Accedé a nuestro ecosistema de formación ejecutiva y profesional. Combinamos la
              rigurosidad técnica con la dinámica del lenguaje simple para ofrecerte experiencias
              de aprendizaje que impactan, se fijan y generan resultados reales.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
              className="text-white/45 text-base"
            >
              Explorá nuestra cartelera de formación digital y presencial.
            </motion.p>
          </div>
        </section>

        {/* ── TABS + CONTENIDO ── */}
        <section className="pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Tab nav */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex border-b mb-10 overflow-x-auto [&::-webkit-scrollbar]:hidden"
              style={{ borderColor: 'rgba(255,255,255,0.12)', scrollbarWidth: 'none' }}
            >
              {[
                { id: 'ondemand' as const, label: '💻 Formación On Demand' },
                { id: 'presencial' as const, label: '📍 Funciones Presenciales y Eventos' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative whitespace-nowrap px-5 py-4 font-semibold text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-white/45 hover:text-white/70'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: '#57b5e0' }}
                    />
                  )}
                </button>
              ))}
            </motion.div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              {activeTab === 'ondemand' ? (
                <motion.div
                  key="ondemand"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {COURSES.map((course, i) => (
                      <motion.div
                        key={course.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                        whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(0,0,0,0.45)' }}
                        className="bg-white rounded-2xl overflow-hidden flex flex-col"
                        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
                      >
                        {/* Thumbnail */}
                        <div
                          className="aspect-[16/9] flex items-center justify-center flex-shrink-0"
                          style={{
                            background: 'linear-gradient(135deg, #141f78 0%, #57b5e0 100%)',
                          }}
                        >
                          <div
                            className="w-14 h-14 rounded-full flex items-center justify-center"
                            style={{
                              backgroundColor: 'rgba(255,255,255,0.15)',
                              border: '2px solid rgba(255,255,255,0.3)',
                            }}
                          >
                            <Play
                              size={22}
                              fill="white"
                              strokeWidth={0}
                              style={{ color: 'white', marginLeft: 3 }}
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-1">
                          <h3
                            className="font-bold text-base mb-2 leading-snug"
                            style={{ color: '#141f78' }}
                          >
                            {course.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                            {course.synopsis}
                          </p>
                          <button
                            onClick={() => window.alert('Próximamente')}
                            className="w-full py-2.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:brightness-110 cursor-pointer"
                            style={{
                              background: 'linear-gradient(135deg, #141f78 0%, #57b5e0 100%)',
                            }}
                          >
                            Acceder al Curso
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="presencial"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {EVENTS.map((event, i) => (
                      <motion.div
                        key={event.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                        whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(0,0,0,0.45)' }}
                        className="bg-white rounded-2xl overflow-hidden flex flex-col"
                        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
                      >
                        {/* Thumbnail */}
                        <div
                          className="aspect-[16/9] flex items-center justify-center flex-shrink-0"
                          style={{
                            background: 'linear-gradient(135deg, #0d1554 0%, #141f78 100%)',
                          }}
                        >
                          <Calendar size={36} strokeWidth={1.5} style={{ color: '#57b5e0' }} />
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-1">
                          <span
                            className="inline-block self-start px-3 py-1 rounded-full text-xs font-bold mb-3"
                            style={{ backgroundColor: event.badgeBg, color: event.badgeText }}
                          >
                            {event.badge}
                          </span>
                          <h3
                            className="font-bold text-base mb-2 leading-snug"
                            style={{ color: '#141f78' }}
                          >
                            {event.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                            {event.description}
                          </p>
                          <button
                            onClick={() => window.alert('Próximamente')}
                            className="w-full py-2.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:brightness-110 cursor-pointer"
                            style={{
                              background: 'linear-gradient(135deg, #141f78 0%, #57b5e0 100%)',
                            }}
                          >
                            {event.cta}
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </section>

        {/* ── ALIANZAS CO-PRODUCIDAS ── */}
        <section className="pb-24 lg:pb-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="rounded-2xl p-10 lg:p-16 text-center"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <span
                className="inline-block rounded-full text-xs font-semibold tracking-widest uppercase px-4 py-1.5 mb-6"
                style={{ background: 'rgba(87,181,224,0.15)', color: '#57b5e0' }}
              >
                ALIANZAS CO-PRODUCIDAS
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
                ¿Querés llevar la Academia Neurona a tu ciudad o institución?
              </h2>

              <p className="text-white/65 text-lg max-w-xl mx-auto leading-relaxed mb-10">
                Co-producimos programas formativos a medida de las necesidades de tu región,
                cámara empresarial o universidad, adaptando nuestros contenidos al contexto local.
              </p>

              <Link
                href="/contacto"
                className="inline-flex items-center px-10 py-4 rounded-full font-bold text-base transition-all duration-200 hover:brightness-110 hover:scale-105"
                style={{ backgroundColor: '#57b5e0', color: '#141f78' }}
              >
                Co-producir una Capacitación
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
