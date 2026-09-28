import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Equalizer from './components/Equalizer'
import Features from './components/Features'
import Space from './components/Space'
import Numbers from './components/Numbers'
import Shows from './components/Shows'
import Setlist from './components/Setlist'
import Agenda from './components/Agenda'
import Gallery from './components/Gallery'
import CallToAction from './components/CallToAction'
import Visit from './components/Visit'
import Footer from './components/Footer'
import Lightbox, { type LightboxContent } from './components/Lightbox'
import WhatsFloat from './components/WhatsFloat'
import MobileBar from './components/MobileBar'
import Booking from './components/Booking'
import StructuredData from './components/StructuredData'
import { useReveal } from './useReveal'

export default function App() {
  const [lightbox, setLightbox] = useState<LightboxContent | null>(null)
  const openImage = (src: string, alt: string) => setLightbox({ type: 'image', src, alt })
  const openVideo = (src: string) => setLightbox({ type: 'video', src })

  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Equalizer />
        <Features />
        <Space onOpen={openImage} />
        <Numbers />
        <Shows onPlay={openVideo} />
        <Setlist />
        <Agenda onOpen={openImage} />
        <Gallery onOpen={openImage} />
        <Booking />
        <CallToAction />
        <Visit />
      </main>
      <Footer />
      <WhatsFloat />
      <MobileBar />
      <StructuredData />
      <Lightbox content={lightbox} onClose={() => setLightbox(null)} />
    </>
  )
}
