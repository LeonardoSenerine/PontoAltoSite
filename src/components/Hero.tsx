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
          <a href="#agenda" className="hero__link">Ver agenda</a>
        </div>
      </div>
    )
  }

  return (
    <div className="hero__text">
      <p className="kicker hero__kicker">Ponto Alto · Clube da Música · Itatiba, SP</p>
      <h1 className="hero__title">
        Aumenta
        <br />
        o som<span className="accent">.</span>
      </h1>
      <p className="hero__lead">Bandas ao vivo, tributos, pagode e noites que pedem volume.</p>
      <div className="btn-row hero__actions">
        <a href="#agenda" className="btn btn--lg">Ver agenda <span className="btn__arrow">›</span></a>
        <a href={mapsLink} target="_blank" rel="noopener" className="hero__link">Como chegar</a>
      </div>
    </div>
  )
}

export default function Hero() {
  const hasNext = upcomingEvents().length > 0

  return (
    <section id="inicio" className="hero">
      <div className="grain" />

      {/* Foto de show como material gráfico: sem moldura, sangrando pela direita e por baixo */}
      <div className="hero__photo" aria-hidden="true">
        <img className="hero__photo-glow" src="/media/show-coberto.jpg" alt="" />
        <img className="hero__photo-img" src="/media/show-coberto.jpg" alt="" />
        <p className="hero__stamp">
          <strong>Casa cheia.</strong>
          <span>toda noite de show</span>
        </p>
      </div>

      <div className="container hero__content">
        <HeroText />
      </div>

      <a href="#agenda" className="hero__next">
        <span className="hero__next-arrow">↓</span> {hasNext ? 'Próximo show' : 'Agenda de shows'}
      </a>
    </section>
  )
}
