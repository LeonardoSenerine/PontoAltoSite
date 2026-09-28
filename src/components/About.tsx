import Bolt from './Bolt'

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about__grid">
        <div className="about__title">
          <Bolt className="about__bolt" />
          <div className="about__kicker">
            <span className="display display--sm">Itatiba</span>
            <span className="about__line" />
          </div>
          <p className="display display--xl">SP</p>
          <p className="display display--md about__stack">
            <span className="muted-outline">Rock, covers</span>
            <br />
            <span className="accent">&amp; noites</span>
            <br />
            <span className="muted-outline">inesquecíveis.</span>
          </p>
        </div>

        <div className="about__text">
          <p className="accent-text">
            O Ponto Alto – Clube da Música é o lugar de quem vive música em Itatiba. Aqui o palco
            é das bandas ao vivo e dos melhores tributos.
          </p>
          <p>
            Já passaram por aqui covers de Aerosmith, Charlie Brown Jr., System of a Down,
            Creedence e Raimundos, sempre com a casa cheia e o som no talo.
          </p>
          <p>
            Mas o rock não anda sozinho: também rolam resenhas de pagode, arraiais e festas
            temáticas. Área aberta com palmeiras, salão coberto com estrutura de madeira e
            estacionamento no local.
          </p>
          <p>Vem pro Ponto. O resto a gente resolve no palco.</p>
          <a href="#local" className="btn">
            Como chegar <span className="btn__arrow">›</span>
          </a>
        </div>
      </div>
    </section>
  )
}
