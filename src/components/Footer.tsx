import Bolt from './Bolt'
import { CONTACT, mapsLink, whatsLink } from '../data'
import { openConsent } from '../consent'

const LINKS = [
  { href: '/#espaco', label: 'O espaço' },
  { href: '/#shows', label: 'Shows' },
  { href: '/#agenda', label: 'Agenda' },
  { href: '/#galeria', label: 'Galeria' },
  { href: '/#visite', label: 'Como chegar' },
  { href: '/#tocar', label: 'Quero tocar aqui' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <Bolt className="footer__bolt" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/media/logo.jpg" alt="Logo Ponto Alto" width={88} height={88} />
          <div>
            <p className="footer__name">Ponto Alto</p>
            <p className="script">clube da música</p>
          </div>
        </div>

        <div>
          <p className="footer__label">Navegue</p>
          <ul className="footer__links">
            {LINKS.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer__label">Contato</p>
          <p className="footer__text">
            <a href={mapsLink} target="_blank" rel="noopener">{CONTACT.address}<br />{CONTACT.district}</a>
          </p>
          <p className="footer__text">
            <a href={whatsLink()} target="_blank" rel="noopener">{CONTACT.phoneDisplay}</a>
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} Ponto Alto – Clube da Música. Todos os direitos reservados.</span>
          <nav className="footer__legal" aria-label="Documentos">
            <a href="/privacidade">Privacidade</a>
            <a href="/cookies">Cookies</a>
            <button onClick={openConsent}>Preferências de cookies</button>
          </nav>
        </div>
      </div>
    </footer>
  )
}
