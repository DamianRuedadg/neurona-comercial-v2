import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import ValueProposition from '@/app/components/ValueProposition'
import Metrics from '@/app/components/Metrics'
import AudienceSection from '@/app/components/AudienceSection'
import Testimonials from '@/app/components/Testimonials'
import HowWeWork from '@/app/components/HowWeWork'
import WhyChooseUs from '@/app/components/WhyChooseUs'
import ContactForm from '@/app/components/ContactForm'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Metrics />
        <AudienceSection />
        <Testimonials />
        <HowWeWork />
        <WhyChooseUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
