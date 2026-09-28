import type { ReactNode } from 'react'
import Tape from './Tape'

type Props = {
  tape: string
  title: ReactNode
  intro?: ReactNode
  align?: 'center' | 'left'
}

/** Cabeçalho padrão: etiqueta de fita + título grande + introdução. */
export default function SectionHead({ tape, title, intro, align = 'center' }: Props) {
  return (
    <header className={`head head--${align} reveal`}>
      <Tape>{tape}</Tape>
      <h2 className="title">{title}</h2>
      {intro && <p className="head__intro">{intro}</p>}
    </header>
  )
}
