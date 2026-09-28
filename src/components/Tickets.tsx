import { mapsLink, whatsLink } from '../data'
import { delay } from '../useReveal'

const TICKETS = [
  {
    label: 'Ingresso',
    title: 'Antecipado',
    text: 'Sai mais barato comprando antes',
    stub: 'WhatsApp',
    href: whatsLink('Olá! Quero comprar ingresso antecipado para o próximo show.'),
  },
  {
    label: 'Lista VIP',
    title: 'Nome na lista',
    text: 'Em eventos selecionados',
    stub: 'WhatsApp',
    href: whatsLink('Olá! Quero colocar meu nome na lista do próximo show.'),
  },
  {
    label: 'Chegando lá',
    title: 'Estaciona aqui',
    text: 'Estacionamento no local, carro e moto',
    stub: 'Ver mapa',
    href: mapsLink,
  },
]

/** Atalhos em forma de ingresso: comprar, entrar na lista, como chegar. */
export default function Tickets() {
  return (
    <section className="tickets">
      <div className="container tickets__grid">
        {TICKETS.map((t, i) => (
          <a
            key={t.title}
            href={t.href}
            target="_blank"
            rel="noopener"
            className="ticket reveal reveal--drop"
            style={delay(i * 0.12)}
          >
            <span className="ticket__main">
              <span className="ticket__brand">{t.label} · Ponto Alto</span>
              <strong>{t.title}</strong>
              <span className="ticket__label">{t.text}</span>
            </span>
            <span className="ticket__stub">
              <span>{t.stub} →</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
