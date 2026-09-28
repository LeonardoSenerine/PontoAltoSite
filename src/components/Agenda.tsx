import type { EventItem } from '../data'
import { CONTACT, whatsLink } from '../data'
import { formatDate, pastEvents, upcomingEvents } from '../events'

type Props = { onOpen: (src: string, alt: string) => void }

function EventCard({ e, past, onOpen }: { e: EventItem; past: boolean; onOpen: Props['onOpen'] }) {
  const d = formatDate(e.date)
  return (
    <article className={`event ${past ? 'event--past' : ''}`}>
      <button className="event__flyer" onClick={() => onOpen(e.flyer, `Flyer ${e.title}`)}>
        <img src={e.flyer} alt={`Flyer ${e.title}`} loading="lazy" />
        <span className="event__genre">{e.genre}</span>
      </button>
      <div className="event__body">
        <div className="event__date">
          <span className="display display--md">{d.day}</span>
          <span>{d.month} {d.year}</span>
        </div>
        <div>
          <h3 className="display display--sm">{e.title}</h3>
          <p className="event__meta">{d.weekday} · {d.time}</p>
          <p className="event__meta">{e.subtitle}</p>
        </div>
      </div>
      {!past && (
        <a
          className="btn btn--block"
          href={whatsLink(`Olá! Quero ingresso para ${e.title} (${d.day}/${d.month}).`)}
          target="_blank"
          rel="noopener"
        >
          Comprar ingresso <span className="btn__arrow">›</span>
        </a>
      )}
    </article>
  )
}

export default function Agenda({ onOpen }: Props) {
  const upcoming = upcomingEvents()
  const past = pastEvents()

  return (
    <section id="agenda" className="section agenda">
      <div className="container">
        <div className="section__head">
          <h2 className="display display--lg">Agenda</h2>
          <span className="section__line" />
        </div>

        {upcoming.length > 0 ? (
          <div className="events">
            {upcoming.map((e) => (
              <EventCard key={e.id} e={e} past={false} onOpen={onOpen} />
            ))}
          </div>
        ) : (
          <div className="agenda__empty">
            <p className="display display--sm">Novas datas em breve</p>
            <p>Chama no WhatsApp para saber o próximo rolê e colocar seu nome na lista.</p>
            <a className="btn" href={whatsLink('Olá! Qual é o próximo evento do Ponto Alto?')} target="_blank" rel="noopener">
              {CONTACT.phoneDisplay} <span className="btn__arrow">›</span>
            </a>
          </div>
        )}

        {past.length > 0 && (
          <>
            <h3 className="agenda__subtitle">Já rolou por aqui</h3>
            <div className="events">
              {past.map((e) => (
                <EventCard key={e.id} e={e} past onOpen={onOpen} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
