// Alturas e tempos "aleatórios" fixos para o render ser estável.
const BARS = Array.from({ length: 72 }, (_, i) => ({
  h: 30 + ((i * 37) % 70),
  dur: 0.7 + ((i * 13) % 9) / 10,
  delay: -((i * 7) % 10) / 10,
}))

/** Divisor de seção em forma de equalizador. */
export default function Equalizer() {
  return (
    <div className="eq" aria-hidden="true">
      <div className="eq__bars">
        {BARS.map((b, i) => (
          <span
            key={i}
            style={{ height: `${b.h}%`, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }}
          />
        ))}
      </div>
    </div>
  )
}
