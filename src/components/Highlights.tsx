import type { ReactNode } from 'react'

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const ICONS: Record<string, ReactNode> = {
  guitar: (
    <svg viewBox="0 0 48 48" {...stroke}>
      <path d="M40 4l4 4-4 2-10 10" />
      <path d="M28 22c-2-2-6-2-8 0l-2 2c-3 0-6 1-8 3-4 4-3 10 1 14s10 5 14 1c2-2 3-5 3-8l2-2c2-2 2-6 0-8z" />
      <circle cx="19" cy="31" r="3" />
    </svg>
  ),
  mic: (
    <svg viewBox="0 0 48 48" {...stroke}>
      <rect x="17" y="4" width="14" height="24" rx="7" />
      <path d="M11 22c0 7 6 13 13 13s13-6 13-13M24 35v9M16 44h16" />
    </svg>
  ),
  drum: (
    <svg viewBox="0 0 48 48" {...stroke}>
      <ellipse cx="24" cy="18" rx="16" ry="6" />
      <path d="M8 18v14c0 3 7 6 16 6s16-3 16-6V18M14 23v13M24 24v14M34 23v13" />
      <path d="M12 4l9 12M36 4l-9 12" />
    </svg>
  ),
  beer: (
    <svg viewBox="0 0 48 48" {...stroke}>
      <path d="M10 12h22v30H10zM32 18h5a4 4 0 014 4v8a4 4 0 01-4 4h-5" />
      <path d="M10 12c0-4 3-6 6-6 1-2 4-3 6-2 3-1 7 1 8 4 2 0 2 2 2 4M16 20v16M22 20v16M28 20v16" />
    </svg>
  ),
  palm: (
    <svg viewBox="0 0 48 48" {...stroke}>
      <path d="M24 44c0-10 1-20 0-28M24 16c-4-6-12-6-18-2 6 0 11 1 14 5M24 16c4-6 12-6 18-2-6 0-11 1-14 5M24 16c-2-6-8-10-14-10 5 2 9 5 11 9M24 16c2-6 8-10 14-10-5 2-9 5-11 9" />
      <path d="M14 44h20" />
    </svg>
  ),
}

const ITEMS = [
  { icon: 'guitar', big: 'Rock', small: 'Bandas e tributos' },
  { icon: 'drum', big: 'Pagode', small: 'Resenhas ao vivo' },
  { icon: 'mic', big: 'Covers', small: 'Clássicos de sempre' },
  { icon: 'beer', big: 'Bar', small: 'Gelada o tempo todo' },
  { icon: 'palm', big: 'Ar livre', small: 'Área externa' },
]

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="container highlights__row">
        {ITEMS.map((it) => (
          <div key={it.big} className="highlight">
            <span className="highlight__icon">{ICONS[it.icon]}</span>
            <div>
              <p className="display display--sm">{it.big}</p>
              <p className="highlight__small">{it.small}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
