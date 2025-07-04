import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Quote from './components/Quote'
import Pricing from './components/Pricing'
import Availability from './components/Availability'
import ContactInfo from './components/ContactInfo'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import SelfCareSection from './components/SelfCareSection'
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <SelfCareSection />
      <Services />
      <Pricing />
      <Availability />
      <Quote />
      <ContactInfo />
      <FAQ />
      <ContactForm />
    </main>
  )
}
