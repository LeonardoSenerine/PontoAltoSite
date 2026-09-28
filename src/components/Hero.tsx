import { mapsLink } from '../data'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <video className="hero__bg" autoPlay muted loop playsInline poster="/media/casa-cheia.jpg">
        <source src="/media/video-6.mp4" type="video/mp4" />
      </video>
      <div className="hero__shade" />

      <div className="container hero__content">
        {/* Disco de vinil girando, com vídeo no rótulo */}
        <div className="vinyl" aria-hidden="true">
          <div className="vinyl__disc" />
          <div className="vinyl__label">
            <video autoPlay muted loop playsInline poster="/media/fachada-luzes.jpg">
              <source src="/media/video-1.mp4" type="video/mp4" />
            </video>
          </div>
          <span className="vinyl__hole" />
          <svg className="vinyl__arm" viewBox="0 0 120 170">
            <circle cx="96" cy="22" r="14" />
            <path d="M96 22 L92 118 L60 150" />
            <rect x="46" y="142" width="26" height="14" rx="3" transform="rotate(-45 59 149)" />
          </svg>
        </div>

        <p className="kicker hero__kicker">Clube da Música · Itatiba, SP</p>
        <h1 className="hero__title">
          Aumenta o som<span className="accent">.</span>
        </h1>
        <p className="hero__lead">
          Bandas ao vivo, tributos, resenha de pagode e arraial. Tudo debaixo das palmeiras, com a
          gelada na mão.
        </p>
        <div className="btn-row btn-row--center hero__actions">
          <a href="#agenda" className="btn btn--lg">Ver agenda <span className="btn__arrow">›</span></a>
          <a href={mapsLink} target="_blank" rel="noopener" className="btn btn--ghost btn--lg">Como chegar</a>
        </div>
      </div>

      <a href="#destaques" className="hero__scroll" aria-label="Rolar para baixo"><span /></a>
    </section>
  )
}
