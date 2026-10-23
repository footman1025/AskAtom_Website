import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import Industries from './components/Industries.jsx'
import About from './components/About.jsx'
import Process from './components/Process.jsx'
import Stack from './components/Stack.jsx'
import Reviews from './components/Reviews.jsx'
import Faq from './components/Faq.jsx'
import CtaBand from './components/CtaBand.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <CaseStudies />
        <Industries />
        <About />
        <Process />
        <Stack />
        <Reviews />
        <Faq />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
