import App from './App'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'
import NotFound from './pages/NotFound'

// Roteamento simples por caminho: o site tem poucas páginas.
export const ROUTES: Record<string, () => JSX.Element> = {
  '/': App,
  '/privacidade': Privacy,
  '/cookies': Cookies,
}

export const pageFor = (pathname: string) => ROUTES[pathname.replace(/\/+$/, '') || '/'] ?? NotFound
