import { PHOTOS, VIDEOS } from '../data'
import type { LightboxContent } from './Lightbox'

type Props = { onOpen: (c: LightboxContent) => void }

export default function Gallery({ onOpen }: Props) {
  return (
    <section id="galeria" className="section gallery">
      <div className="container">
        <div className="section__head">
          <h2 className="display display--lg">Galeria</h2>
          <span className="section__line" />
        </div>

        <div className="gallery__grid">
          {PHOTOS.map((p) => (
            <button key={p.src} className="gallery__item" onClick={() => onOpen({ type: 'image', ...p })}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </button>
          ))}
        </div>

        <div className="gallery__videos">
          {VIDEOS.map((src, i) => (
            <button
              key={src}
              className="gallery__video"
              onClick={() => onOpen({ type: 'video', src })}
              aria-label={`Assistir vídeo ${i + 1}`}
            >
              <video src={`${src}#t=0.5`} muted playsInline preload="metadata" />
              <span className="gallery__play">▶</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
