import { useEffect, useRef, useState } from 'react'
import SectionHead from './SectionHead'
import { SHOWS } from '../data'
import { delay } from '../useReveal'

type Props = { onPlay: (src: string) => void }

/** Player principal ("palco") + playlist ao lado. */
export default function Shows({ onPlay }: Props) {
  const [active, setActive] = useState(0)
  const [muted, setMuted] = useState(true)
  const stageRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const show = SHOWS[active]

  // Só toca enquanto o palco está visível, pra não gastar dados à toa.
  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      const v = videoRef.current
      if (!v) return
      if (e.isIntersecting) v.play().catch(() => {})
      else v.pause()
    }, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [active])

  // A prop "muted" do React não é confiável depois do primeiro render.
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted
  }, [muted, active])

  return (
    <section id="shows" className="section shows">
      <div className="container">
        <SectionHead
          tape="ao vivo, sem playback"
          title="Palco aceso"
          intro="Tributo, cover, pagode e festa temática. Escolhe uma faixa e sente como é uma noite no Ponto."
        />

        <div className="stage">
          <div className="stage__screen reveal reveal--zoom" ref={stageRef}>
            <div className="stage__info">
              <span className="stage__live">Tocando agora</span>
              <span className="stage__n">{String(active + 1).padStart(2, '0')}</span>
              <h3 key={show.title} className="stage__title">{show.title}</h3>
              <p className="stage__desc">{show.desc}</p>
              <div className="btn-row">
                <button className="btn" onClick={() => setMuted((m) => !m)}>
                  {muted ? 'Ativar som' : 'Tirar som'}
                </button>
                <button className="btn btn--ghost" onClick={() => onPlay(show.src)}>Tela cheia</button>
              </div>
            </div>
            <div className="stage__video">
              <video
                key={show.src}
                ref={videoRef}
                src={show.src}
                poster={show.src.replace('.mp4', '.jpg')}
                muted={muted}
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>

          <ol className="playlist">
            {SHOWS.map((s, i) => (
              <li key={s.src} className="reveal" style={delay(0.1 + i * 0.08)}>
                <button
                  className={`track ${i === active ? 'track--active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                >
                  <span className="track__thumb">
                    <img src={s.src.replace('.mp4', '.jpg')} alt="" loading="lazy" />
                  </span>
                  <span className="track__text">
                    <strong>{s.title}</strong>
                    <span>{s.desc}</span>
                  </span>
                  <span className="track__eq" aria-hidden="true"><span /><span /><span /></span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
