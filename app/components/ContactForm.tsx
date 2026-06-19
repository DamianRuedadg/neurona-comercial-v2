'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { contactContent } from '@/app/data/home-content'

interface FormState {
  nombre: string
  email: string
  empresa: string
  whatsapp: string
  areas: string[]
  mensaje: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    nombre: '',
    email: '',
    empresa: '',
    whatsapp: '',
    areas: [],
    mensaje: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const toggleArea = (area: string) => {
    setForm((prev) => ({
      ...prev,
      areas: prev.areas.includes(area)
        ? prev.areas.filter((a) => a !== area)
        : [...prev.areas, area],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-20 lg:py-28" style={{ background: '#f9fafb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="text-3xl lg:text-4xl font-bold mb-6 leading-snug"
              style={{ color: '#141f78' }}
            >
              {contactContent.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              {contactContent.motivational}
            </p>

            <div className="space-y-4">
              <a
                href={`tel:${contactContent.phone}`}
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: '#141f78' }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium group-hover:text-[#141f78] transition-colors">
                  {contactContent.phone}
                </span>
              </a>

              <a
                href={`mailto:${contactContent.email}`}
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: '#141f78' }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium group-hover:text-[#141f78] transition-colors">
                  {contactContent.email}
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#141f78' }}>
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-600">Te contactaremos a la brevedad.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nombre y Apellido
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm transition-all"
                      style={{ '--tw-ring-color': '#57b5e0' } as React.CSSProperties}
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Correo Corporativo
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm transition-all"
                      placeholder="email@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nombre de la Empresa
                    </label>
                    <input
                      type="text"
                      value={form.empresa}
                      onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm transition-all"
                      placeholder="Tu empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm transition-all"
                      placeholder="+54 9 ..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Área de interés
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {contactContent.areas.map((area) => (
                      <label key={area} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.areas.includes(area)}
                          onChange={() => toggleArea(area)}
                          className="w-4 h-4 rounded border-gray-300"
                          style={{ accentColor: '#141f78' }}
                        />
                        <span className="text-sm text-gray-600">{area}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm resize-none transition-all"
                    placeholder="Contanos brevemente sobre tu empresa y qué necesitás..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-white font-semibold transition-all hover:opacity-90"
                  style={{ background: '#141f78' }}
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
