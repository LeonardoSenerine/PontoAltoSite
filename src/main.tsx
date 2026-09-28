import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'
import NotFound from './pages/NotFound'
import CookieBanner from './components/CookieBanner'
import './styles.css'

// Roteamento simples por caminho: o site tem poucas páginas.
const ROUTES: Record<string, () => JSX.Element> = {
  '/': App,
  '/privacidade': Privacy,
  '/cookies': Cookies,
}

const path = window.location.pathname.replace(/\/+$/, '') || '/'
const Page = ROUTES[path] ?? NotFound

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
    <CookieBanner />
  </StrictMode>,
)
