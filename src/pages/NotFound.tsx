import { useEffect } from 'react'
import Bolt from '../components/Bolt'
import Tape from '../components/Tape'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Página não encontrada | Ponto Alto – Clube da Música'
    // Não indexar páginas inexistentes.
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  return (
    <main className="nf">
      <div className="grain" />
      <Bolt className="nf__bolt" />
      <div className="container nf__inner">
        <a href="/" className="nf__brand">Ponto Alto</a>

        <p className="nf__code" aria-label="Erro 404">
          <span>4</span>
          <span className="nf__disc" aria-hidden="true"><span /></span>
          <span>4</span>
        </p>

        <Tape className="tape--lg">a corda arrebentou</Tape>
        <h1 className="title">Essa faixa não tá no setlist</h1>
        <p className="nf__text">
          A página que você procurou saiu do palco ou nunca subiu nele. Mas o show continua lá no
          início.
        </p>
        <div className="btn-row btn-row--center">
          <a href="/" className="btn btn--lg">Voltar pro início <span className="btn__arrow">›</span></a>
          <a href="/#agenda" className="btn btn--ghost btn--lg">Ver agenda</a>
        </div>
      </div>
    </main>
  )
}
