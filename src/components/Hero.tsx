import { useEffect, useState } from 'react'
import { mapsLink, whatsLink } from '../data'
import { formatDate, upcomingEvents } from '../events'

/** Texto do hero: o próximo show quando houver um cadastrado; senão, o institucional. */
function HeroText() {
  const next = upcomingEvents()[0]

  if (next) {
    const d = formatDate(next.date)
    return (
      <div className="hero__text">
        <p className="kicker hero__kicker">
          Próximo show · <span className="hero__when">{d.weekday}, {d.day} {d.month} · {d.time}</span>
        </p>
        <h1 className="hero__title hero__title--event">
          {next.title}<span className="accent">.</span>
        </h1>
        <p className="hero__lead">
          <strong>{next.subtitle}</strong>
          <br />
          {next.lineup.filter((l) => l !== next.subtitle).join(' · ')}
        </p>
        <p className="hero__price">{next.prices[0]}</p>
        <div className="btn-row hero__actions">
          <a
            href={whatsLink(`Olá! Quero ingresso / nome na lista para ${next.title} (${d.day}/${d.month}).`)}
            target="_blank"
            rel="noopener"
            className="btn btn--lg"
          >
            Garantir ingresso <span className="btn__arrow">›</span>
          </a>
          <a href="#agenda" className="btn btn--ghost btn--lg">Ver agenda</a>
        </div>
      </div>
    )
  }

  return (
    <div className="hero__text">
      <p className="kicker hero__kicker">Clube da Música · Itatiba, SP</p>
      <h1 className="hero__title">
        Aumenta
        <br />
        o som<span className="accent">.</span>
      </h1>
      <p className="hero__lead">
        Bandas ao vivo, tributos, resenha de pagode e arraial. Tudo debaixo das palmeiras, com a
        gelada na mão.
      </p>
      <div className="btn-row hero__actions">
        <a href="#agenda" className="btn btn--lg">Ver agenda <span className="btn__arrow">›</span></a>
        <a href={mapsLink} target="_blank" rel="noopener" className="btn btn--ghost btn--lg">Como chegar</a>
      </div>
    </div>
  )
}

/** O vídeo do hero só aparece no desktop; no celular nem é baixado. */
function useDesktop() {
  const [desktop, setDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 961px)')
    const update = () => setDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return desktop
}

export default function Hero() {
  const desktop = useDesktop()

  return (
    <section id="inicio" className="hero">
      <img className="hero__bg" src="/media/casa-cheia.jpg" alt="" />
      <div className="hero__shade" />

      <div className="container hero__grid">
        <HeroText />

        <div className="hero__media" aria-hidden="true">
          {/* Disco de vinil girando atrás do vídeo */}
          <div className="hero__disc">
            <span className="hero__disc-label" />
          </div>

          <div className="hero__video">
            {desktop ? (
              <video autoPlay muted loop playsInline poster="/media/video-6.jpg">
                <source src="/media/video-6.mp4" type="video/mp4" />
              </video>
            ) : (
              <img src="/media/show-coberto.jpg" alt="" />
            )}
          </div>

          <figure className="hero__card">
            <img src="/media/amigos-2.jpg" alt="" />
            <figcaption>
              <strong>Casa cheia</strong>
              <span>toda noite de show</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
