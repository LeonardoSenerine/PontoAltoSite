import { useEffect, useRef, useState } from 'react'
import { delay } from '../useReveal'

const ITEMS = [
  { value: 3, prefix: '', suffix: '', label: 'Bandas numa só noite', stub: 'El Ponto' },
  { value: 10, prefix: 'R$', suffix: '', label: 'Antecipado a partir de', stub: 'Ingresso' },
  { value: 100, prefix: '', suffix: '%', label: 'Música ao vivo', stub: 'Sem playback' },
]

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const dur = 1400
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur)
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [to])

  return <span ref={ref}>{n}</span>
}

/** Números em forma de ingresso destacável. */
export default function Numbers() {
  return (
    <section className="numbers">
      <div className="container numbers__grid">
        {ITEMS.map((it, i) => (
          <div key={it.label} className="ticket reveal reveal--drop" style={delay(i * 0.12)}>
            <div className="ticket__main">
              <span className="ticket__brand">Ponto Alto · Admit one</span>
              <strong>
                {it.prefix}
                <CountUp to={it.value} />
                {it.suffix}
              </strong>
              <span className="ticket__label">{it.label}</span>
            </div>
            <div className="ticket__stub">
              <span>{it.stub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
