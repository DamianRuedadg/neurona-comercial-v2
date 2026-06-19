import Link from 'next/link'
import { footerContent } from '@/app/data/home-content'

export default function Footer() {
  return (
    <footer style={{ background: '#141f78' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 items-start">
          <div className="flex flex-col">
            <p className="font-bold text-xl text-white mb-3">Neurona Comercial</p>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Consultoría integral en procesos, TI, legales y growth marketing para que tu empresa
              eduque, crezca y convierta.
            </p>
          </div>

          <div className="md:pt-1">
            <p
              className="font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Navegación
            </p>
            <nav className="flex flex-col gap-2">
              {footerContent.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors text-white/60 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:pt-1">
            <p
              className="font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Contacto
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${footerContent.phone}`}
                className="block text-sm transition-colors text-white/60 hover:text-white"
              >
                {footerContent.phone}
              </a>
              <a
                href={`mailto:${footerContent.email}`}
                className="block text-sm transition-colors text-white/60 hover:text-white"
              >
                {footerContent.email}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
