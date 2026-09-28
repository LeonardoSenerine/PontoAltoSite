import { useEffect, type ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tape from '../components/Tape'
import WhatsFloat from '../components/WhatsFloat'

type Props = {
  title: string
  docTitle: string
  updated: string
  intro: ReactNode
  children: ReactNode
}

/** Estrutura das páginas de texto (privacidade, cookies). */
export default function LegalLayout({ title, docTitle, updated, intro, children }: Props) {
  useEffect(() => {
    document.title = `${docTitle} | Ponto Alto – Clube da Música`
    window.scrollTo(0, 0)
  }, [docTitle])

  return (
    <>
      <Navbar />
      <main className="legal">
        <div className="container legal__wrap">
          <header className="legal__head">
            <Tape>letra miúda (mas importante)</Tape>
            <h1 className="title title--xl">{title}</h1>
            <p className="legal__updated">Atualizada em {updated}</p>
            <div className="legal__intro">{intro}</div>
          </header>
          <article className="legal__body">{children}</article>
          <a href="/" className="btn btn--lg legal__back">‹ Voltar pro site</a>
        </div>
      </main>
      <Footer />
      <WhatsFloat />
    </>
  )
}
