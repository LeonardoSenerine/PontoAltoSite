import { useCallback, useState } from 'react'
import Tape from './Tape'
import { getConsent, setConsent, useConsentOpen } from '../consent'

export default function CookieBanner() {
  const [open, setOpen] = useState(() => getConsent() === null)
  useConsentOpen(useCallback(() => setOpen(true), []))

  if (!open) return null

  const choose = (v: 'all' | 'essential') => {
    setConsent(v)
    setOpen(false)
  }

  return (
    <div className="cookies" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <Tape>cookies? 🍪</Tape>
      <p>
        O site usa só o necessário pra funcionar. O <strong>mapa do Google</strong> grava cookies
        próprios e só carrega se você permitir. Detalhes na{' '}
        <a href="/cookies">política de cookies</a> e na <a href="/privacidade">política de privacidade</a>.
      </p>
      <div className="cookies__actions">
        <button className="btn btn--ghost" onClick={() => choose('essential')}>Só necessários</button>
        <button className="btn" onClick={() => choose('all')}>Aceitar todos</button>
      </div>
    </div>
  )
}
