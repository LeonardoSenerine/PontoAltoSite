import { CONTACT } from '../data'

export default function Location() {
  const { lat, lng } = CONTACT
  return (
    <section id="local" className="section location">
      <div className="container location__grid">
        <div className="location__info">
          <div className="section__head">
            <h2 className="display display--lg">Como chegar</h2>
          </div>
          <p className="location__address">
            {CONTACT.address}
            <br />
            {CONTACT.district}
          </p>
          <p className="muted">Estacionamento no local.</p>
          <div className="btn-row">
            <a
              className="btn"
              href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
              target="_blank"
              rel="noopener"
            >
              Google Maps <span className="btn__arrow">›</span>
            </a>
            <a
              className="btn btn--light"
              href={`https://waze.com/ul?ll=${lat},${lng}&navigate=yes`}
              target="_blank"
              rel="noopener"
            >
              Waze
            </a>
          </div>
        </div>
        <div className="location__map">
          <iframe
            title="Mapa do Ponto Alto"
            src={`https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
