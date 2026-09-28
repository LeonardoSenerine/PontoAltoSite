import type { CSSProperties, ReactNode } from 'react'

type Props = { children: ReactNode; className?: string; style?: CSSProperties }

/** Etiqueta de fita crepe escrita a caneta, como marcação de palco. */
export default function Tape({ children, className = '', style }: Props) {
  return (
    <span className={`tape ${className}`} style={style}>
      {children}
    </span>
  )
}
