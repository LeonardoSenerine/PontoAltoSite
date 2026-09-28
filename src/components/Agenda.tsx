import SectionHead from './SectionHead'
import type { EventItem } from '../data'
import { CONTACT, whatsLink } from '../data'
import { formatDate, pastEvents, upcomingEvents } from '../events'
import { delay } from '../useReveal'

type Props = { onOpen: (src: string, alt: string) => void }

function EventCard({ e, past, onOpen, i }: { e: EventItem; past: boolean; onOpen: Props['onOpen']; i: number }) {
  const d = formatDate(e.date)
  return (
    <article className={`event reveal ${past ? 'event--past' : ''}`} style={delay(i * 0.1)}>
      <button className="event__flyer" onClick={() => onOpen(e.flyer, `Flyer ${e.title}`)} aria-label={`Ampliar flyer de ${e.title}`}>
        <img src={e.flyer} alt={`Flyer ${e.title}`} loading="lazy" />
        <span className="event__genre">{e.genre}</span>
        {past && <span className="event__stamp">Já rolou</span>}
      </button>
      <div className="event__body">
        <div className="event__date">
          <strong>{d.day}</strong>
          <span>{d.month}</span>
        </div>
        <div>
          <h3>{e.title}</h3>
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
        <SectionHead tape="anota aí" title="Próximos shows" />

        {upcoming.length > 0 ? (
          <div className="events">
            {upcoming.map((e, i) => (
              <EventCard key={e.id} e={e} i={i} past={false} onOpen={onOpen} />
            ))}
          </div>
        ) : (
          <div className="agenda__empty reveal">
            <span className="agenda__amp" aria-hidden="true">
              <span /><span /><span /><span />
            </span>
            <div>
              <p className="agenda__empty-title">Line-up em montagem</p>
              <p>Os amplificadores estão esquentando. Chama no WhatsApp pra saber o próximo show e colocar seu nome na lista.</p>
            </div>
            <a className="btn" href={whatsLink('Olá! Qual é o próximo show do Ponto Alto?')} target="_blank" rel="noopener">
              {CONTACT.phoneDisplay} <span className="btn__arrow">›</span>
            </a>
          </div>
        )}

        {past.length > 0 && (
          <>
            <p className="agenda__subtitle reveal">Já passou por aqui</p>
            <div className="events">
              {past.map((e, i) => (
                <EventCard key={e.id} e={e} i={i} past onOpen={onOpen} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
