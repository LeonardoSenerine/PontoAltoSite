import { CONTACT, whatsLink } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/media/logo.jpg" alt="Logo Ponto Alto" width={96} height={96} />
          <div>
            <p className="footer__name">Ponto Alto</p>
            <p className="footer__role">Clube da Música</p>
            <a href={whatsLink()} target="_blank" rel="noopener">{CONTACT.phoneDisplay}</a>
          </div>
        </div>

        <p className="footer__text">
          {CONTACT.address} – {CONTACT.district}. Ingressos antecipados, lista VIP e informações
          direto pelo WhatsApp.
        </p>

        <div className="footer__cta">
          <p className="footer__text">Não fica de fora do próximo rolê. Garante o seu antes que acabe.</p>
          <a className="btn" href={whatsLink('Olá! Quero comprar ingresso.')} target="_blank" rel="noopener">
            Comprar ingresso <span className="btn__arrow">›</span>
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} Ponto Alto – Clube da Música. Todos os direitos reservados.</span>
          <a href="#inicio" aria-label="Voltar ao topo" className="footer__top">︿</a>
        </div>
      </div>
    </footer>
  )
}
