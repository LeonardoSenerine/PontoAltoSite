import { useState } from 'react'
import Tape from './Tape'
import { CONTACT, mapsLink, wazeLink, whatsLink } from '../data'
import { setConsent, useConsent } from '../consent'

/** Mapa em tela cheia com o endereço num cartão em forma de ingresso. */
export default function Visit() {
  const { lat, lng } = CONTACT
  const consent = useConsent()
  // O mapa do Google grava cookies: só carrega com permissão.
  const [loadOnce, setLoadOnce] = useState(false)
  const showMap = consent === 'all' || loadOnce

  return (
    <section id="visite" className="visit">
      {showMap ? (
        <iframe
          className="visit__map"
          title="Mapa do Ponto Alto"
          src={`https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="visit__map visit__map--off">
          <div className="visit__gate">
            <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
              <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" fill="currentColor" />
            </svg>
            <strong>Mapa desligado</strong>
            <p>O Google Maps grava cookies no seu navegador. Ele só aparece se você permitir.</p>
            <div className="btn-row btn-row--center">
              <button className="btn" onClick={() => setLoadOnce(true)}>Carregar mapa</button>
              <button className="btn btn--ghost" onClick={() => setConsent('all')}>Sempre carregar</button>
            </div>
          </div>
        </div>
      )}

      <div className="container visit__wrap">
        <div className="visit__card reveal reveal--drop">
          <div className="visit__main">
            <Tape>bora pro ponto!</Tape>
            <h2 className="title">Chega junto</h2>

            <address className="visit__address">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" fill="currentColor" />
              </svg>
              <span>
                {CONTACT.address}
                <br />
                {CONTACT.district}
              </span>
            </address>

            <dl className="visit__info">
              <div>
                <dt>Ingressos</dt>
                <dd><a href={whatsLink()} target="_blank" rel="noopener">{CONTACT.phoneDisplay}</a></dd>
              </div>
              <div>
                <dt>Abre</dt>
                <dd>Em dias de evento</dd>
              </div>
              <div>
                <dt>Estacionamento</dt>
                <dd>No local</dd>
              </div>
            </dl>

            <div className="btn-row">
              <a className="btn" href={mapsLink} target="_blank" rel="noopener">Google Maps <span className="btn__arrow">›</span></a>
              <a className="btn btn--ghost" href={wazeLink} target="_blank" rel="noopener">Waze</a>
            </div>
          </div>
          <div className="visit__stub" aria-hidden="true">
            <span>Itatiba · SP</span>
          </div>
        </div>
      </div>
    </section>
  )
}
