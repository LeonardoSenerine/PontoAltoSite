type Props = { className?: string }

/** Raio decorativo — marca visual repetida pelo site. */
export default function Bolt({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 64 128" aria-hidden="true">
      <path d="M40 0 6 72h22L16 128 58 50H35L48 0z" fill="currentColor" />
    </svg>
  )
}
