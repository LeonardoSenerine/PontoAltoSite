import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureVideo from './components/FeatureVideo'
import About from './components/About'
import Collage from './components/Collage'
import Highlights from './components/Highlights'
import FeaturedEvent from './components/FeaturedEvent'
import Agenda from './components/Agenda'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Footer from './components/Footer'
import Lightbox, { type LightboxContent } from './components/Lightbox'
import WhatsFloat from './components/WhatsFloat'

export default function App() {
  const [lightbox, setLightbox] = useState<LightboxContent | null>(null)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureVideo onPlay={(src) => setLightbox({ type: 'video', src })} />
        <About />
        <Collage />
        <Highlights />
        <FeaturedEvent onOpen={(src, alt) => setLightbox({ type: 'image', src, alt })} />
        <Agenda onOpen={(src, alt) => setLightbox({ type: 'image', src, alt })} />
        <Gallery onOpen={setLightbox} />
        <Location />
      </main>
      <Footer />
      <WhatsFloat />
      <Lightbox content={lightbox} onClose={() => setLightbox(null)} />
    </>
  )
}
