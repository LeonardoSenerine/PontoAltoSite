import Tape from './Tape'
import { mapsLink, whatsLink } from '../data'
import { delay } from '../useReveal'

export default function CallToAction() {
  return (
    <section className="cta">
      <img className="cta__bg" src="/media/show-coberto.jpg" alt="" loading="lazy" />
      <div className="cta__shade" />
      <div className="grain" />
      <div className="container cta__inner">
        <Tape className="reveal">passagem de som ok</Tape>
        <h2 className="title title--xl reveal" style={delay(0.1)}>
          O palco tá montado.
          <br />
          <span className="accent">Só falta você.</span>
        </h2>
        <div className="btn-row btn-row--center reveal" style={delay(0.2)}>
          <a className="btn btn--lg" href={whatsLink('Olá! Quero comprar ingresso para o próximo evento.')} target="_blank" rel="noopener">
            Comprar ingresso <span className="btn__arrow">›</span>
          </a>
          <a className="btn btn--ghost btn--lg" href={mapsLink} target="_blank" rel="noopener">Como chegar</a>
        </div>
      </div>
    </section>
  )
}
