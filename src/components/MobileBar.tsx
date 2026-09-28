import { useEffect, useState } from 'react'
import { mapsLink, whatsLink } from '../data'

/** Barra fixa no celular, aparece depois que o hero sai da tela. */
export default function MobileBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`mobile-bar ${visible ? 'mobile-bar--visible' : ''}`}>
      <a className="btn" href={whatsLink('Olá! Quero comprar ingresso para o próximo evento.')} target="_blank" rel="noopener">Ingressos</a>
      <a className="btn btn--ghost" href={mapsLink} target="_blank" rel="noopener">Como chegar</a>
    </div>
  )
}
