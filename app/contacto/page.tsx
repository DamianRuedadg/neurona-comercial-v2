'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Globe, Mail, Calendar } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

// ── Shared style strings ────────────────────────────────────────────
const INPUT =
  'w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#57b5e0] focus:ring-2 focus:ring-[#57b5e0]/20 transition-all duration-200'
const SELECT =
  'w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 bg-white focus:outline-none focus:border-[#57b5e0] focus:ring-2 focus:ring-[#57b5e0]/20 transition-all duration-200 cursor-pointer'
const LABEL = 'block text-sm font-semibold text-gray-700 mb-2'

// ── Data ────────────────────────────────────────────────────────────
const COUNTRY_CODES = [
  { code: '+54', label: '+54 Argentina' },
  { code: '+598', label: '+598 Uruguay' },
  { code: '+56', label: '+56 Chile' },
  { code: '+34', label: '+34 España' },
  { code: '+52', label: '+52 México' },
  { code: '+1', label: '+1 EE.UU.' },
]

const COUNTRIES = ['Argentina', 'Uruguay', 'Chile', 'España', 'México', 'Otro país']

const PROVINCES = [
  'Buenos Aires', 'CABA', 'Córdoba', 'Santa Fe', 'Salta', 'Jujuy', 'Mendoza',
  'Tucumán', 'Entre Ríos', 'Misiones', 'Chaco', 'Corrientes', 'Santiago del Estero',
  'San Juan', 'Río Negro', 'Neuquén', 'Formosa', 'Chubut', 'San Luis', 'Catamarca',
  'La Rioja', 'La Pampa', 'Santa Cruz', 'Tierra del Fuego',
]

const AREAS = [
  'Optimización de Procesos y Estructura Interna',
  'Desarrollo de Software, TI o Automatización',
  'Blindaje Legal y Registro de Marca (Nacional/Internacional)',
  'Marketing Digital, Paid Media y Embudos de Venta',
  'Capacitación de Equipos o Plataformas Educativas (EdTech)',
]

// ── Page ────────────────────────────────────────────────────────────
export default function ContactoPage() {
  const [name, setName]               = useState('')
  const [email, setEmail]             = useState('')
  const [countryCode, setCountryCode] = useState('+54')
  const [phone, setPhone]             = useState('')
  const [company, setCompany]         = useState('')
  const [country, setCountry]         = useState('')
  const [province, setProvince]       = useState('')
  const [city, setCity]               = useState('')
  const [areas, setAreas]             = useState<string[]>([])
  const [message, setMessage]         = useState('')
  const [areaError, setAreaError]     = useState(false)
  const [submitted, setSubmitted]     = useState(false)

  const toggleArea = (area: string) => {
    setAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    )
    setAreaError(false)
  }

  const handleCountryChange = (val: string) => {
    setCountry(val)
    setProvince('')
    setCity('')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (areas.length === 0) {
      setAreaError(true)
      return
    }
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">

        {/* ── HERO ── */}
        <section
          className="relative py-24 lg:py-36 flex items-center overflow-hidden"
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
                CONTACTO
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto"
            >
              ¿Listo para el siguiente{' '}
              <span style={{ color: '#57b5e0' }}>paso estratégico?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Un gran despliegue requiere de una planificación sólida. Ya sea que necesites
              ordenar tus procesos, blindar tu marca de forma legal, implementar soluciones de TI
              o escalar tus ventas internacionales, nuestro equipo federal está listo para diseñar
              tu diagnóstico a medida.
            </motion.p>
          </div>

          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: '#57b5e0' }} />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-10 pointer-events-none" style={{ background: '#57b5e0' }} />
        </section>

        {/* ── FORM + INFO ── */}
        <section className="py-20 lg:py-28 bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

              {/* ── Formulario ── */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="lg:col-span-7"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8">

                  <AnimatePresence mode="wait">
                    {!submitted ? (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className="text-xl font-bold mb-6" style={{ color: '#141f78' }}>
                          Completá el formulario y agendá tu reunión
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                          {/* Nombre */}
                          <div>
                            <label className={LABEL}>Nombre y Apellido</label>
                            <input
                              type="text"
                              required
                              className={INPUT}
                              placeholder="Tu nombre completo"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>

                          {/* Email */}
                          <div>
                            <label className={LABEL}>Correo Corporativo</label>
                            <input
                              type="email"
                              required
                              className={INPUT}
                              placeholder="nombre@empresa.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>

                          {/* WhatsApp con selector de código */}
                          <div>
                            <label className={LABEL}>WhatsApp de contacto</label>
                            <div className="flex rounded-xl border border-gray-200 overflow-hidden focus-within:border-[#57b5e0] focus-within:ring-2 focus-within:ring-[#57b5e0]/20 transition-all duration-200">
                              <select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                className="bg-gray-50 pl-3 pr-2 py-3 text-sm text-gray-600 border-r border-gray-200 focus:outline-none shrink-0"
                              >
                                {COUNTRY_CODES.map((cc) => (
                                  <option key={cc.code} value={cc.code}>{cc.label}</option>
                                ))}
                              </select>
                              <input
                                type="tel"
                                required
                                className="flex-1 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-white min-w-0"
                                placeholder="Número de WhatsApp"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </div>
                          </div>

                          {/* Empresa */}
                          <div>
                            <label className={LABEL}>Nombre de la Empresa</label>
                            <input
                              type="text"
                              required
                              className={INPUT}
                              placeholder="Tu empresa"
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                            />
                          </div>

                          {/* País */}
                          <div>
                            <label className={LABEL}>¿Desde dónde nos contactás?</label>
                            <select
                              required
                              value={country}
                              onChange={(e) => handleCountryChange(e.target.value)}
                              className={SELECT}
                            >
                              <option value="">Seleccioná tu país</option>
                              {COUNTRIES.map((c) => (
                                <option key={c} value={c}>{c}</option>
                              ))}
                            </select>
                          </div>

                          {/* Campo condicional: Provincia o Ciudad */}
                          <AnimatePresence initial={false}>
                            {country === 'Argentina' && (
                              <motion.div
                                key="province"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: EASE }}
                                style={{ overflow: 'hidden' }}
                              >
                                <div className="pt-1">
                                  <label className={LABEL}>Provincia</label>
                                  <select
                                    required
                                    value={province}
                                    onChange={(e) => setProvince(e.target.value)}
                                    className={SELECT}
                                  >
                                    <option value="">Seleccioná tu provincia</option>
                                    {PROVINCES.map((p) => (
                                      <option key={p} value={p}>{p}</option>
                                    ))}
                                  </select>
                                </div>
                              </motion.div>
                            )}

                            {country !== '' && country !== 'Argentina' && (
                              <motion.div
                                key="city"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: EASE }}
                                style={{ overflow: 'hidden' }}
                              >
                                <div className="pt-1">
                                  <label className={LABEL}>Ciudad / Estado</label>
                                  <input
                                    type="text"
                                    required
                                    className={INPUT}
                                    placeholder="Ciudad o estado donde te encontrás"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                  />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Áreas — checkboxes */}
                          <div>
                            <label className={LABEL}>
                              ¿En qué área necesitás ayuda tu empresa actualmente?
                            </label>
                            <div className="space-y-2 mt-1">
                              {AREAS.map((area) => {
                                const checked = areas.includes(area)
                                return (
                                  <label
                                    key={area}
                                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                                      checked
                                        ? 'border-[#141f78] bg-[#141f78]/5'
                                        : 'border-gray-200 hover:border-[#57b5e0]'
                                    }`}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={checked}
                                      onChange={() => toggleArea(area)}
                                      className="w-4 h-4 shrink-0"
                                      style={{ accentColor: '#141f78' }}
                                    />
                                    <span className="text-sm text-gray-700 leading-snug">
                                      {area}
                                    </span>
                                  </label>
                                )
                              })}
                            </div>
                            {areaError && (
                              <p className="text-red-500 text-xs mt-2">
                                Seleccioná al menos un área de interés.
                              </p>
                            )}
                          </div>

                          {/* Mensaje */}
                          <div>
                            <label className={LABEL}>
                              Contanos brevemente el desafío actual de tu organización
                            </label>
                            <textarea
                              required
                              rows={5}
                              className={`${INPUT} resize-none`}
                              placeholder="Describí el contexto de tu empresa, qué problema querés resolver y cuál es tu objetivo principal..."
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            />
                          </div>

                          {/* Submit */}
                          <button
                            type="submit"
                            className="w-full py-4 rounded-full text-white font-bold text-base transition-all duration-200 hover:brightness-110 hover:scale-[1.02]"
                            style={{
                              background:
                                'linear-gradient(135deg, #141f78 0%, #57b5e0 100%)',
                            }}
                          >
                            Enviar y Agendar Diagnóstico
                          </button>
                        </form>
                      </motion.div>
                    ) : (
                      /* ── Calendly placeholder ── */
                      <motion.div
                        key="calendly"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: EASE }}
                        className="text-center py-8"
                      >
                        <div
                          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                          style={{
                            background:
                              'linear-gradient(135deg, #141f78 0%, #57b5e0 100%)',
                          }}
                        >
                          <Calendar size={36} strokeWidth={1.5} className="text-white" />
                        </div>
                        <h3
                          className="text-2xl font-bold mb-2"
                          style={{ color: '#141f78' }}
                        >
                          ¡Mensaje recibido!
                        </h3>
                        <p className="text-gray-500 mb-10 max-w-sm mx-auto leading-relaxed">
                          Seleccioná el horario que mejor te quede para tu reunión de
                          diagnóstico.
                        </p>

                        {/* Calendly embed placeholder */}
                        <div className="rounded-2xl bg-gray-100 flex flex-col items-center justify-center py-24 px-8 min-h-[320px]">
                          <Calendar
                            size={52}
                            strokeWidth={1.2}
                            className="mb-5"
                            style={{ color: '#9ca3af' }}
                          />
                          <p className="text-gray-400 text-sm text-center max-w-xs leading-relaxed">
                            Aquí se mostrará el calendario de Calendly para que selecciones
                            el horario de tu reunión
                          </p>
                          {/* TODO: insertar iframe de Calendly aquí cuando esté la cuenta creada */}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* ── Bloque lateral ── */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                className="lg:col-span-5 lg:sticky lg:top-24"
              >
                <div className="rounded-2xl p-8 text-white" style={{ background: '#141f78' }}>

                  <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#57b5e0' }}>
                    PRESENCIA GLOBAL, IMPACTO FEDERAL
                  </p>
                  <h2 className="text-2xl font-bold mb-3 text-white leading-snug">
                    Neurona Comercial en el mundo
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed mb-8">
                    Operamos bajo una estructura digital y federal que nos permite cruzar
                    fronteras y resolver desafíos corporativos complejos.
                  </p>

                  {/* Puntos de presencia */}
                  <div className="space-y-6 mb-10">
                    <div className="flex gap-4">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center"
                        style={{ borderColor: 'rgba(87,181,224,0.4)' }}
                      >
                        <MapPin size={18} style={{ color: '#57b5e0' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1 text-sm">
                          Hub Federal Argentina
                        </p>
                        <p className="text-white/65 text-sm leading-relaxed">
                          Coordinamos proyectos con profesionales distribuidos
                          estratégicamente en las principales provincias del país.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center"
                        style={{ borderColor: 'rgba(87,181,224,0.4)' }}
                      >
                        <Globe size={18} style={{ color: '#57b5e0' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1 text-sm">
                          Proyección Internacional
                        </p>
                        <p className="text-white/65 text-sm leading-relaxed">
                          Contamos con la experiencia administrativa, legal y comercial para
                          ejecutar proyectos, internacionalizar productos y gestionar marcas
                          fuera de Argentina, adaptándonos a las normativas de cada mercado.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contacto directo */}
                  <div
                    className="border-t pt-8"
                    style={{ borderColor: 'rgba(87,181,224,0.2)' }}
                  >
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-5"
                      style={{ color: '#57b5e0' }}
                    >
                      ¿Preferís escribirnos directamente?
                    </p>

                    <div className="space-y-4">
                      <a
                        href="mailto:info@neuronacomercial.com"
                        className="flex items-center gap-3 text-white/75 hover:text-white transition-colors duration-200 group"
                      >
                        <Mail size={16} style={{ color: '#57b5e0' }} />
                        <span className="text-sm">info@neuronacomercial.com</span>
                      </a>

                      <a
                        href="#"
                        className="flex items-center gap-3 text-white/75 hover:text-white transition-colors duration-200"
                      >
                        {/* LinkedIn icon inline — lucide-react no incluye este ícono en esta versión */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#57b5e0', flexShrink: 0 }}>
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                        <span className="text-sm">LinkedIn de Neurona Comercial</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
