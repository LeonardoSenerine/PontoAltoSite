import Tape from './Tape'
import { delay } from '../useReveal'

const SONGS = [
  { name: 'Aerosmith', by: 'Blue Army' },
  { name: 'Charlie Brown Jr.', by: 'Tributo CBJR' },
  { name: 'System of a Down', by: 'Shop Suit' },
  { name: 'Creedence', by: 'Rollin’ River' },
  { name: 'Raimundos', by: 'Nega Tonteira' },
  { name: 'Especial MTV', by: 'A era dos videoclipes' },
  { name: 'Resenha do TK', by: 'Tcharlinhos Kroos' },
]

export default function Setlist() {
  return (
    <section className="section setlist">
      <div className="container setlist__grid">
        <div className="setlist__text">
          <Tape className="reveal">já subiu no palco</Tape>
          <h2 className="title title--xl reveal" style={delay(0.1)}>
            O setlist
            <br />
            <span className="accent">do Ponto</span>
          </h2>
          <p className="reveal" style={delay(0.2)}>
            Tributo, cover, pagode e festa temática. Cada noite tem a sua cara, e a lista só
            cresce. Quem vai subir no palco na próxima?
          </p>
        </div>

        <div className="paper reveal reveal--drop" style={delay(0.15)}>
          <span className="paper__tape paper__tape--l" />
          <span className="paper__tape paper__tape--r" />
          <p className="paper__head">Setlist · Ponto Alto</p>
          <ol className="paper__list">
            {SONGS.map((s, i) => (
              <li key={s.name} className="reveal" style={delay(0.35 + i * 0.12)}>
                <span className="paper__n">{String(i + 1).padStart(2, '0')}</span>
                <span className="paper__name">{s.name}</span>
                <span className="paper__by">{s.by}</span>
              </li>
            ))}
          </ol>
          <p className="paper__encore">bis?! 🤘</p>
        </div>
      </div>
    </section>
  )
}
