import Bolt from './Bolt'
import { whatsLink } from '../data'
import { formatDate, pastEvents, upcomingEvents } from '../events'

type Props = { onOpen: (src: string, alt: string) => void }

export default function FeaturedEvent({ onOpen }: Props) {
  const next = upcomingEvents()[0]
  const event = next ?? pastEvents().find((e) => e.genre === 'Rock') ?? pastEvents()[0]
  if (!event) return null

  const d = formatDate(event.date)

  return (
    <section className="section featured">
      <div className="container featured__grid">
        <div className="featured__text">
          <p className="tag">{next ? 'Próximo evento' : 'Relembre'}</p>
          <h2 className="display display--lg">
            {event.title}.
            <br />
            <span className="accent">{event.genre}.</span>
          </h2>
          <p className="featured__sub">{event.subtitle}</p>
          <ul className="dash-list">
            <li>{d.day} {d.month} {d.year} · a partir das {d.time}</li>
            {event.lineup.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          {next ? (
            <a
              href={whatsLink(`Olá! Quero ingresso para ${event.title} (${d.day}/${d.month}).`)}
              target="_blank"
              rel="noopener"
              className="btn"
            >
              Garantir ingresso <span className="btn__arrow">›</span>
            </a>
          ) : (
            <a href="#agenda" className="btn">
              Ver agenda <span className="btn__arrow">›</span>
            </a>
          )}
        </div>

        <div className="featured__art">
          <Bolt className="featured__bolt" />
          <div className="featured__disc">
            <img src="/media/logo.jpg" alt="" />
          </div>
          <button
            className="featured__sleeve"
            onClick={() => onOpen(event.flyer, `Flyer ${event.title}`)}
            aria-label={`Ampliar flyer de ${event.title}`}
          >
            <img src={event.flyer} alt={`Flyer ${event.title}`} loading="lazy" />
          </button>
        </div>
      </div>
    </section>
  )
}
