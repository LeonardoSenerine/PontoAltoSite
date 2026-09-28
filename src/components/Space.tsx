import Tape from './Tape'
import { mapsLink } from '../data'
import { delay } from '../useReveal'

type Props = { onOpen: (src: string, alt: string) => void }

const SPOTS = [
  {
    n: '01',
    src: '/media/casa-cheia.jpg',
    alt: 'Área externa com palmeiras e casa cheia à noite',
    title: 'Área externa',
    text: 'Palmeiras, céu aberto e espaço de sobra pra galera.',
  },
  {
    n: '02',
    src: '/media/fachada-luzes.jpg',
    alt: 'Varal de luzes na entrada do Ponto Alto',
    title: 'Varal de luzes',
    text: 'A entrada iluminada que já avisa: hoje tem rolê.',
  },
  {
    n: '03',
    src: '/media/show-coberto.jpg',
    alt: 'Salão coberto com teto de madeira lotado durante show',
    title: 'Salão de madeira',
    text: 'Área coberta com palco, som que envolve e casa cheia.',
  },
]

export default function Space({ onOpen }: Props) {
  return (
    <section id="espaco" className="section space">
      <div className="container">
        <div className="space__head">
          <div className="reveal">
            <Tape>o quintal do rock</Tape>
            <h2 className="title">
              Um lugar feito
              <br />
              pra <span className="accent">som alto</span>
            </h2>
          </div>
          <p className="space__lead reveal" style={delay(0.15)}>
            Chegou, estacionou, entrou debaixo das palmeiras e pronto: o som já tá rolando. O Ponto
            Alto é aquele lugar onde a noite rende e a banda toca pra casa cheia.
          </p>
        </div>

        <ul className="spots">
          {SPOTS.map((s, i) => (
            <li key={s.n} className="reveal reveal--zoom" style={delay(i * 0.12)}>
              <button className="spot" onClick={() => onOpen(s.src, s.alt)} aria-label={`Ampliar: ${s.alt}`}>
                <img src={s.src} alt={s.alt} loading="lazy" />
                <span className="spot__shade" />
                <span className="spot__n">{s.n}</span>
                <span className="spot__body">
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="space__foot reveal">
          <div className="space__card">
            <span className="space__card-icon" aria-hidden="true">P</span>
            <div>
              <strong>Estacionamento no local</strong>
              <p>Chega de carro ou de moto sem dor de cabeça.</p>
            </div>
          </div>
          <a href={mapsLink} target="_blank" rel="noopener" className="btn btn--lg">
            Como chegar <span className="btn__arrow">›</span>
          </a>
        </div>
      </div>
    </section>
  )
}
