export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <video
        className="hero__bg"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/casa-cheia.jpg"
      >
        <source src="/media/video-1.mp4" type="video/mp4" />
      </video>
      <div className="hero__shade" />
      <div className="hero__content">
        <h1 className="display">
          Nossa paixão. Nossa música.
          <br />
          Nosso ponto.
        </h1>
        <a href="#agenda" className="btn">
          Ver agenda <span className="btn__arrow">›</span>
        </a>
      </div>
    </section>
  )
}
