import { useEffect, useState } from 'react'

/** Escolha de cookies do visitante, salva no próprio navegador. */
export type Consent = 'all' | 'essential' | null

const KEY = 'pa-consent'
const CHANGE = 'pa:consent-change'
const OPEN = 'pa:consent-open'

export function getConsent(): Consent {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'all' || v === 'essential' ? v : null
  } catch {
    return null
  }
}

export function setConsent(value: Exclude<Consent, null>) {
  try {
    localStorage.setItem(KEY, value)
  } catch {
    // Navegação privada ou armazenamento bloqueado: vale só para esta visita.
  }
  window.dispatchEvent(new CustomEvent(CHANGE, { detail: value }))
}

/** Reabre o aviso de cookies (link "Preferências de cookies"). */
export const openConsent = () => window.dispatchEvent(new Event(OPEN))

export function useConsent() {
  const [consent, setState] = useState<Consent>(getConsent)
  useEffect(() => {
    const onChange = (e: Event) => setState((e as CustomEvent<Consent>).detail)
    window.addEventListener(CHANGE, onChange)
    return () => window.removeEventListener(CHANGE, onChange)
  }, [])
  return consent
}

export function useConsentOpen(onOpen: () => void) {
  useEffect(() => {
    window.addEventListener(OPEN, onOpen)
    return () => window.removeEventListener(OPEN, onOpen)
  }, [onOpen])
}
