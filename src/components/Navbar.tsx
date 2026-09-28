import { useEffect, useState } from 'react'
import { whatsLink } from '../data'

const LEFT = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#agenda', label: 'Agenda' },
]
const RIGHT = [
  { href: '#galeria', label: 'Galeria' },
  { href: '#local', label: 'Como chegar' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <nav className="nav__side nav__side--left">
          {LEFT.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
        </nav>

        <a href="#inicio" className="nav__brand" onClick={close}>
          <span className="nav__brand-name">Ponto Alto</span>
          <span className="nav__brand-sub">Clube da Música</span>
        </a>

        <nav className="nav__side nav__side--right">
          {RIGHT.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a
            href={whatsLink('Olá! Quero comprar ingresso para o próximo evento do Ponto Alto.')}
            target="_blank"
            rel="noopener"
            className="nav__cta"
            onClick={close}
          >
            Ingressos
          </a>
        </nav>

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
