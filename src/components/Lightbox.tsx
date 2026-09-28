import { useEffect } from 'react'

export type LightboxContent =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string }

type Props = { content: LightboxContent | null; onClose: () => void }

export default function Lightbox({ content, onClose }: Props) {
  useEffect(() => {
    if (!content) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [content, onClose])

  if (!content) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button className="lightbox__close" aria-label="Fechar" onClick={onClose}>✕</button>
      <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
        {content.type === 'image' ? (
          <img src={content.src} alt={content.alt} />
        ) : (
          <video src={content.src} controls autoPlay playsInline />
        )}
      </div>
    </div>
  )
}
