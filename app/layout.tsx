import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/app/components/CustomCursor'
import LoadingScreen from '@/app/components/LoadingScreen'
import WhatsAppButton from '@/app/components/WhatsAppButton'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Neurona Comercial — Consultoría Integral de Negocios',
  description:
    'Consultoría integral en procesos, TI, legales y growth marketing para que tu empresa eduque, crezca y convierta. Basados en Argentina.',
  keywords: ['consultoría', 'procesos', 'TI', 'marketing digital', 'growth', 'Argentina', 'EdTech'],
  openGraph: {
    title: 'Neurona Comercial',
    description: 'El escenario digital de los grandes negocios.',
    type: 'website',
    locale: 'es_AR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="antialiased font-sans">
        <LoadingScreen />
        <CustomCursor />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  )
}
