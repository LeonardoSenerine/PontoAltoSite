import Tape from './Tape'
import { PHOTOS, whatsLink } from '../data'
import { delay } from '../useReveal'

type Props = { onOpen: (src: string, alt: string) => void }

export default function Gallery({ onOpen }: Props) {
  return (
    <section id="galeria" className="gallery">
      <div className="container gallery__head reveal">
        <div>
          <Tape>flagras da noite</Tape>
          <h2 className="title">Quem tava lá</h2>
        </div>
        <a className="btn btn--ghost" href={whatsLink('Olá! Quero saber dos próximos eventos.')} target="_blank" rel="noopener">
          Quero ir no próximo
        </a>
      </div>
      <ul className="gallery__strip">
        {PHOTOS.map((p, i) => (
          <li key={p.src} className="reveal reveal--zoom" style={delay(i * 0.07)}>
            <button onClick={() => onOpen(p.src, p.alt)} aria-label={`Ampliar: ${p.alt}`}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
