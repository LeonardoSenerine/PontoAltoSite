import { useEffect, useState } from 'react'
import { whatsLink } from '../data'

// Caminhos com "/" na frente para funcionarem também nas páginas internas.
const LEFT = [
  { href: '/#espaco', label: 'O espaço' },
  { href: '/#shows', label: 'Shows' },
  { href: '/#agenda', label: 'Agenda' },
]
const RIGHT = [
  { href: '/#galeria', label: 'Galeria' },
  { href: '/#visite', label: 'Como chegar' },
]

const BRAND = 'Ponto Alto'

/** Link com o texto "rolando" pra cima no hover. */
function NavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <a href={href} className="nav__link" onClick={onClick}>
      <span className="nav__roll" data-text={label}>{label}</span>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <a href="/#inicio" className="nav__brand" onClick={close} aria-label="Ponto Alto – Clube da Música, início">
          <span className="nav__brand-name" aria-hidden="true">
            {BRAND.split('').map((ch, i) => (
              <span key={i} className={i >= 6 ? 'nav__alt' : undefined} style={{ transitionDelay: `${i * 30}ms` }}>
                {ch === ' ' ? ' ' : ch}
              </span>
            ))}
          </span>
          <span className="nav__brand-sub">Clube da Música</span>
        </a>

        <div className="nav__menu">
          <nav className="nav__side nav__side--left">
            {LEFT.map((l) => <NavLink key={l.href} {...l} onClick={close} />)}
          </nav>
          <nav className="nav__side nav__side--right">
            {RIGHT.map((l) => <NavLink key={l.href} {...l} onClick={close} />)}
            <a
              href={whatsLink('Olá! Quero comprar ingresso para o próximo evento do Ponto Alto.')}
              target="_blank"
              rel="noopener"
              className="btn"
              onClick={close}
            >
              Ingressos
            </a>
          </nav>
        </div>

        <button
          className="nav__toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
