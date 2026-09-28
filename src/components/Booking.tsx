import { useState, type FormEvent } from 'react'
import SectionHead from './SectionHead'
import { whatsLink } from '../data'
import { delay } from '../useReveal'

const STYLES = ['Rock', 'Tributo / cover', 'Pagode / samba', 'Sertanejo', 'Outro']

/** "Quer tocar no Ponto Alto?": monta a mensagem e abre o WhatsApp. Nada fica salvo no site. */
export default function Booking() {
  const [form, setForm] = useState({ band: '', style: STYLES[0], city: '', link: '', contact: '' })
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const details = [
      `Banda/artista: ${form.band}`,
      `Estilo: ${form.style}`,
      form.city && `Cidade: ${form.city}`,
      `Material: ${form.link}`,
      form.contact && `Contato: ${form.contact}`,
    ].filter(Boolean)
    const msg = `Olá! Quero tocar no Ponto Alto 🤘\n\n${details.join('\n')}`
    window.open(whatsLink(msg), '_blank', 'noopener')
  }

  return (
    <section id="tocar" className="section booking">
      <div className="container booking__grid">
        <div>
          <SectionHead
            align="left"
            tape="palco aberto"
            title={<>Quer tocar no<br /><span className="accent">Ponto Alto?</span></>}
            intro="Banda autoral, tributo, cover ou roda de samba: se você faz som ao vivo, manda seu material. A gente responde pelo WhatsApp."
          />
          <ul className="booking__steps reveal" style={delay(0.15)}>
            <li><span>01</span> Preenche os dados da banda</li>
            <li><span>02</span> O WhatsApp abre com a mensagem pronta</li>
            <li><span>03</span> A gente conversa sobre data e formato</li>
          </ul>
        </div>

        <form className="booking__form reveal reveal--zoom" style={delay(0.1)} onSubmit={submit}>
          <label>
            Nome da banda ou artista *
            <input required value={form.band} onChange={set('band')} placeholder="Ex.: Os Atormentados" />
          </label>
          <div className="booking__row">
            <label>
              Estilo *
              <select value={form.style} onChange={set('style')}>
                {STYLES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
            <label>
              Cidade
              <input value={form.city} onChange={set('city')} placeholder="Ex.: Jundiaí" />
            </label>
          </div>
          <label>
            Link do som (Instagram, YouTube, Spotify) *
            <input required value={form.link} onChange={set('link')} placeholder="Cole o link aqui" />
          </label>
          <label>
            Seu nome
            <input value={form.contact} onChange={set('contact')} placeholder="Quem vai falar com a gente" />
          </label>
          <button type="submit" className="btn btn--lg btn--block">
            Enviar pelo WhatsApp <span className="btn__arrow">›</span>
          </button>
          <p className="booking__note">
            Os dados não ficam salvos no site: eles só vão na mensagem que você mesmo envia.{' '}
            <a href="/privacidade">Privacidade</a>
          </p>
        </form>
      </div>
    </section>
  )
}
