import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CookieBanner from './components/CookieBanner'
import { pageFor } from './routes'
import './styles.css'

const Page = pageFor(window.location.pathname)

// O HTML já vem pré-renderizado (scripts/prerender.mjs); aqui o React assume a página.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
    <CookieBanner />
  </StrictMode>,
)
