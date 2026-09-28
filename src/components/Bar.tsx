import type { ReactNode } from 'react'
import Tape from './Tape'
import { BAR_MENU, whatsLink } from '../data'
import { delay } from '../useReveal'

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const ICONS: Record<string, ReactNode> = {
  beer: (
    <svg viewBox="0 0 48 48" {...stroke}>
      <path d="M12 14h20v28H12zM32 20h4a4 4 0 014 4v6a4 4 0 01-4 4h-4" />
      <path d="M12 14c0-4 3-6 6-6 1-2 4-3 6-2 3-1 6 1 7 4 1 0 1 2 1 4M18 22v14M24 22v14" />
    </svg>
  ),
  drink: (
    <svg viewBox="0 0 48 48" {...stroke}>
      <path d="M10 8h28L24 26zM24 26v14M16 42h16M30 4l-6 10" />
      <circle cx="34" cy="12" r="4" />
    </svg>
  ),
  fries: (
    <svg viewBox="0 0 48 48" {...stroke}>
      <path d="M12 20h24l-4 22H16z" />
      <path d="M16 20l-2-12M21 20l-1-14M27 20l1-14M32 20l2-12" />
    </svg>
  ),
  grill: (
    <svg viewBox="0 0 48 48" {...stroke}>
      <path d="M8 22h32a16 16 0 01-32 0zM16 38l-4 6M32 38l4 6" />
      <path d="M18 14c0-3 3-3 3-6M26 14c0-3 3-3 3-6" />
    </svg>
  ),
}

/** Bar e cozinha: quadro com o que acompanha o som. */
export default function Bar() {
  return (
    <section id="bar" className="section bar">
      <div className="container bar__grid">
        <div className="bar__text">
          <Tape className="reveal">bar aberto nos shows</Tape>
          <h2 className="title title--xl reveal" style={delay(0.1)}>
            Pra acompanhar
            <br />
            <span className="accent">o som</span>
          </h2>
          <p className="reveal" style={delay(0.2)}>
            Cerveja trincando, drink bem feito e porção saindo da cozinha enquanto a banda toca. O bar
            funciona durante os eventos, do primeiro acorde até o bis.
          </p>
          <a
            className="btn btn--lg reveal"
            style={delay(0.3)}
            href={whatsLink('Olá! Queria saber o cardápio do bar do Ponto Alto.')}
            target="_blank"
            rel="noopener"
          >
            Ver cardápio no WhatsApp <span className="btn__arrow">›</span>
          </a>
        </div>

        <div className="board reveal reveal--zoom" style={delay(0.15)}>
          <p className="board__head">Hoje no balcão</p>
          <div className="board__grid">
            {BAR_MENU.map((cat) => (
              <div key={cat.title} className="board__cat">
                <span className="board__icon" aria-hidden="true">{ICONS[cat.icon]}</span>
                <h3>{cat.title}</h3>
                <ul>
                  {cat.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="board__foot">* consulte opções e valores no balcão</p>
        </div>
      </div>
    </section>
  )
}
