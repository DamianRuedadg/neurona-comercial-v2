import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import AwardsCarousel from '@/app/components/AwardsCarousel'
import ValueStatement from '@/app/components/ValueStatement'
import Metrics from '@/app/components/Metrics'
import AudienceSection from '@/app/components/AudienceSection'
import Testimonials from '@/app/components/Testimonials'
import VideoTestimonialsCarousel from '@/app/components/VideoTestimonialsCarousel'
import HowWeWork from '@/app/components/HowWeWork'
import WhyChooseUs from '@/app/components/WhyChooseUs'
import TrainingCarousel from '@/app/components/TrainingCarousel'
import ContactForm from '@/app/components/ContactForm'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AwardsCarousel />
        <ValueStatement />
        <Metrics />
        <AudienceSection />
        <Testimonials />
        <VideoTestimonialsCarousel />
        <HowWeWork />
        <WhyChooseUs />
        <TrainingCarousel />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
