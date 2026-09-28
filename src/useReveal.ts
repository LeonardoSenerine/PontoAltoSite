import { useEffect, type CSSProperties } from 'react'

/** Atraso de animação para elementos com .reveal (efeito cascata). */
export const delay = (s: number) => ({ '--delay': `${s}s` }) as CSSProperties

/** Observa todos os .reveal e adiciona .is-visible quando entram na tela. */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('js-anim')

    const els = document.querySelectorAll<HTMLElement>('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
