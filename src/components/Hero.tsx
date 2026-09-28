import { mapsLink } from '../data'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <img className="hero__bg" src="/media/casa-cheia.jpg" alt="" />
      <div className="hero__shade" />

      <div className="container hero__grid">
        <div className="hero__text">
          <p className="kicker hero__kicker">Clube da Música · Itatiba, SP</p>
          <h1 className="hero__title">
            Aumenta
            <br />
            o som<span className="accent">.</span>
          </h1>
          <p className="hero__lead">
            Bandas ao vivo, tributos, resenha de pagode e arraial. Tudo debaixo das palmeiras, com a
            gelada na mão.
          </p>
          <div className="btn-row hero__actions">
            <a href="#agenda" className="btn btn--lg">Ver agenda <span className="btn__arrow">›</span></a>
            <a href={mapsLink} target="_blank" rel="noopener" className="btn btn--ghost btn--lg">Como chegar</a>
          </div>
        </div>

        <div className="hero__media" aria-hidden="true">
          {/* Disco de vinil girando atrás do vídeo */}
          <div className="hero__disc">
            <span className="hero__disc-label" />
          </div>

          <div className="hero__video">
            <video autoPlay muted loop playsInline poster="/media/show-coberto.jpg">
              <source src="/media/video-6.mp4" type="video/mp4" />
            </video>
          </div>

          <figure className="hero__card">
            <img src="/media/amigos-2.jpg" alt="" />
            <figcaption>
              <strong>Casa cheia</strong>
              <span>toda noite de show</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
